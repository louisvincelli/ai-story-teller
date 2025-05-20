import { Button } from '@heroui/button';
import React from 'react';

function LastPage() {
  return (
    <div className='bg-primary p-10'>
        <h2 className='text-white text-2xl text-center h-full'>End of story</h2>
        <div className='flex justify-center items-center'>
            <Button>Share</Button>
        </div>
    </div>
  );
};

export default LastPage;