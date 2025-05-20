import { Button } from '@heroui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Hero() {
  return (
    <div className='px-10 md:px-28 lg:px-44 bg-[#f7ae79] h-screen'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div>
                <h2 className='text-[70px] text-[#c45302] font-extrabold py-10'>Be The Hero of Your Own Story</h2>
                <p className='text-2xl text-[#c45302] font-light'>Create fun and personalized stories that bring your adventures to life!</p>
                <Link href={'/create-story'}>
                <Button size='lg' color='primary' className='mt-5 font-bold text-2xl p-5 text-[#c45302] border-2 border-[#c45302] rounded-3xl cursor-pointer hover:bg-[#c45302] hover:text-white'>Create Story</Button>
                </Link>
            </div>
            <div>
                <Image src={'/hero.png'} alt='hero' width={700} height={400} />
            </div>
        </div>
    </div>
  );
};

export default Hero;