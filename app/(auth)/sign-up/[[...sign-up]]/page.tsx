import { SignUp } from '@clerk/nextjs'
import Image from 'next/image';

export default function Page() {
  return (
    <div className='min-h-screen bg-[#f7ae79]'>
      <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='flex justify-center items-center'>
              <Image src={'/signup.png'} alt='signup' width={700} height={1000} className='w-full ml-20 rounded-3xl object-contain'/>
          </div>
          <div className='flex justify-center items-center h-screen order-first md:order-last'>
              <SignUp />
          </div>
      </div>
    </div>
  );
}