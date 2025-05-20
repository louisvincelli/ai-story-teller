"use client"
import React, { useState } from 'react';
import StorySubjectInput from './_components/StorySubjectInput';
import StoryType from './_components/StoryType';
import AgeGroup from './_components/AgeGroup';
import ImageStyle from './_components/ImageStyle';
import { Button } from '@heroui/button';
import { GoogleGenerativeAI, ChatSession } from '@google/generative-ai';
import { db } from '@/config/db';
import { StoryData } from '@/config/schema';
//@ts-ignore
import uuid4 from "uuid4";
import CustomLoader from './_components/CustomLoader';
import { main as generateGeminiResponse } from '@/config/GeminiAi';
import OpenAI from 'openai';

const CREATE_STORY_PROMPT = process.env.NEXT_PUBLIC_CREATE_STORY_PROMPT

interface StoryChapter {
  chapter_number: number;
  title: string;
  story_text: string;
  image_prompt: string;
  image_url?: string;
}

interface StoryOutput {
  story_title: string;
  story_cover_image_prompt: string;
  cover_image_url?: string;
  chapters: StoryChapter[];
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface fieldData{
    fieldName: string,
    fieldValue: string,
}

export interface formDataType{
    storySubject:string,
    storyType:string,
    imageStyle:string,
    ageGroup:string
}

function CreateStory() {

    const [formData, setFormData] = useState<formDataType>();
    const [loading, setLoading] = useState(false);

    /**
     * used to add data to form
     * @param data 
     */

    const onHandleUserSelection=(data:fieldData)=>{
        //console.log(data);
        setFormData((prev:any)=>({
            ...prev,
            [data.fieldName]:data.fieldValue
        }));
        //console.log(formData);
        if(formData?.storySubject||formData?.ageGroup||formData?.imageStyle||formData?.storyType){
            //console.log(data);
        }
    }

    const GenerateStory = async() => {
        setLoading(true);
        const FINAL_PROMPT = CREATE_STORY_PROMPT
        ?.replace('{ageGroup}', formData?.ageGroup??'')
        .replace('{storyType}', formData?.storyType??'')
        .replace('{storySubject}', formData?.storySubject??'')
        .replace('{imageStyle}', formData?.imageStyle??'');
        
        try {
            if (FINAL_PROMPT) {
                // Generate story using Gemini
                const storyResult = await generateGeminiResponse(FINAL_PROMPT);
                const storyData: StoryOutput = JSON.parse(storyResult);

                // Generate cover image
                const coverImageResponse = await openai.images.generate({
                    model: "dall-e-3",
                    prompt: storyData.story_cover_image_prompt,
                    n: 1,
                    size: "1024x1024",
                });
                if (coverImageResponse.data?.[0]?.url) {
                    storyData.cover_image_url = coverImageResponse.data[0].url;
                }

                // Generate chapter images
                for (const chapter of storyData.chapters) {
                    const chapterImageResponse = await openai.images.generate({
                        model: "dall-e-3",
                        prompt: chapter.image_prompt,
                        n: 1,
                        size: "1024x1024",
                    });
                    if (chapterImageResponse.data?.[0]?.url) {
                        chapter.image_url = chapterImageResponse.data[0].url;
                    }
                }

                // Save to database
                const resp = await SaveInDB(JSON.stringify(storyData));
                setLoading(false);
            }
        } catch(e) {
            console.error('Error generating story:', e);
            setLoading(false);
        }
    }

    const SaveInDB = async(output: string) => {
        const recordId = uuid4();
        setLoading(true);
        try {
            const result = await db.insert(StoryData).values({
                storyId: recordId,
                ageGroup: formData?.ageGroup,
                imageStyle: formData?.imageStyle,
                storySubject: formData?.storySubject,
                storyType: formData?.storyType,
                output: JSON.parse(output)
            }).returning({storyId: StoryData?.storyId});
            setLoading(false);
            return result;
        } catch(e) {
            console.error('Error saving to database:', e);
            setLoading(false);
        }
    }
  return (
    <div className='p-10 md:px-20 lg:px-40'>
        <h2 className='font-extrabold text-[70px] text-primary text-center'>CREATE YOUR STORY</h2>
        <p className='text-2xl text-primary text-center'>Unlock your creativity with AI: Craft stories like never before</p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-14'>
            {/* Story Subject */}
            <StorySubjectInput userSelection={onHandleUserSelection}/>
            {/* Story Type */}
            <StoryType userSelection={onHandleUserSelection}/>
            {/*Age Group*/}
            <AgeGroup userSelection={onHandleUserSelection}/>
            {/*Image Style*/}
            <ImageStyle userSelection={onHandleUserSelection}/>
        </div>
        <div className='flex justify-end my-10'>
            <Button color='primary' disabled={loading} className='p-10 text-2xl' onClick={() => GenerateStory()}>Generate Story</Button>
        </div>
        <CustomLoader isLoading={loading}/>
    </div>
  );
};

export default CreateStory;