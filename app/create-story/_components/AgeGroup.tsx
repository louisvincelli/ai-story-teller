import Image from 'next/image';
import React, { useState } from 'react'
import { OptionField } from './StoryType';

function AgeGroup({userSelection}:any) {
   const OptionList=[
          {
              label:'Kids(1-12)',
              //name:'storyBook',
              imageUrl:'/kids.png',
              isFree:true
          },
          {
              label:'Teenagers(13-17)',
              imageUrl:'/teenager.png',
              isFree:true
          },
          {
              label:'Young Adult (18-25)',
              imageUrl:'/youngadult.png',
              isFree:true
          },
          {
              label:'Adult (25+)',
              imageUrl:'/adult.jpg',
              isFree:true
          },
      ]
  
      const [selectedOption, setSelectedOption]=useState<string>();

      const onUserSelect=(item:OptionField)=>{
            setSelectedOption(item.label);
            userSelection({
                fieldValue:item?.label,
                fieldName:'ageGroup'
            })
        }
        
    return (
      <div>
          <label className='font-bold text-4xl text-primary'>3. Age Group</label>
          <div className='grid grid-cols-4 gap-5 mt-3'>
              {OptionList.map((item,index)=>(
                  <div className={`relative grayscale hover:grayscale-0 cursor-pointer p-1 ${selectedOption==item.label?'grayscale-0 border round-3xl border-primary':'grayscale'}`} onClick={()=>onUserSelect(item)}>
                      <h2 className='absolute bottom-5 text-2xl text-white text-center w-full'>{item.label}</h2>
                      <Image src={item.imageUrl} alt={item.label} width={300} height={500} className='object-cover h-[260px] rounded-3xl' />
                  </div>
              ))}
          </div>
      </div>
    );
  };

export default AgeGroup