import React from 'react';
import {MdPlayCircleFilled} from 'react-icons/md';

function StoryPages({storyChapter}:any) {
    const playSpeech = (text:string)=>{
        const synth = window?.speechSynthesis;
        const textToSpeech = new SpeechSynthesisUtterance(text);
        synth.speak(textToSpeech);
    }
  return (
    <div>
        <h2 className='text-2xl font-bold text-primary flex justify-between'>{storyChapter?.chapter_title}</h2>
        <span className='text-3xl cursor-pointer' onClick={()=>playSpeech(storyChapter?.chapter_text)}>
            <MdPlayCircleFilled />
        </span>
        <p className='text-xl p-10 mt-3 rounded-lg bg-slate-100'>{storyChapter?.chapter_text}</p>
    </div>
  );
};

export default StoryPages;