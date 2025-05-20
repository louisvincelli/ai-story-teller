"use client"
import { db } from '@/config/db';
import React, { useEffect, useRef, useState } from 'react';
//import HTMLFlipBook from './../../../node_modules/react-pageflip/build/index.d';
import HTMLFlipBook from 'react-pageflip';
import BookCoverPage from '../_components/BookCoverPage';
import StoryPages from '../_components/StoryPages';
import LastPage from '../_components/LastPage';
import { Button } from '@heroui/button';
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io';
import { StoryData } from '@/config/schema';
import { eq } from 'drizzle-orm';
import Image from 'next/image';
import CustomLoader from '@/app/create-story/_components/CustomLoader';

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

export default function ViewStory({ params }: { params: { id: string } }) {
    const [story, setStory] = useState<StoryOutput | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStory = async () => {
            try {
                const result = await db.select()
                    .from(StoryData)
                    .where(eq(StoryData.storyId, params.id))
                    .limit(1);

                if (result.length > 0) {
                    setStory(result[0].output as StoryOutput);
                }
            } catch (error) {
                console.error('Error fetching story:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStory();
    }, [params.id]);

    if (loading) {
        return <CustomLoader isLoading={loading} />;
    }

    if (!story) {
        return <div className="p-10 text-center">Story not found</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Cover Section */}
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold mb-6">{story.story_title}</h1>
                {story.cover_image_url && (
                    <div className="relative w-full h-[400px] mb-8">
                        <Image
                            src={story.cover_image_url}
                            alt={story.story_title}
                            fill
                            className="object-contain rounded-lg shadow-lg"
                        />
                    </div>
                )}
            </div>

            {/* Chapters */}
            <div className="space-y-12">
                {story.chapters.map((chapter) => (
                    <div key={chapter.chapter_number} className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold mb-4">
                            Chapter {chapter.chapter_number}: {chapter.title}
                        </h2>
                        {chapter.image_url && (
                            <div className="relative w-full h-[300px] mb-6">
                                <Image
                                    src={chapter.image_url}
                                    alt={chapter.title}
                                    fill
                                    className="object-contain rounded-lg"
                                />
                            </div>
                        )}
                        <div className="prose max-w-none">
                            {chapter.story_text.split('\n').map((paragraph, index) => (
                                <p key={index} className="mb-4">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}