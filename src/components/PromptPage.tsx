'use client';
import { useState } from 'react';
import Navbar from './Navbar';
import BottomNav from './BottomNav';
import { useSelectedLayoutSegment } from 'next/navigation';
import getRandomPrompt from '@/app/utils/randomPrompts';

const PromptPage = ({ children }: { children: React.ReactNode }) => {
  const [randomPrompt, setRandomPrompt] = useState<string | undefined>('');

  return (
    <>
      <Navbar />
      <div className='h-full min-h-screen w-full flex flex-col gap-5 pt-20 pb-36'>
        <label className='text-base font-bold capitalize font-nunito px-5'>
          Enter Prompt
          <textarea
            name='prompt'
            placeholder='Describe your image...'
            className={
              'mt-3 bg-neutral-950 lg:max-w-[calc(100%_-_8px)] self-center sm:p-5 rounded-2xl textarea textarea-ghost w-full font-extrabold font-nunito h-32 text-lg sm:text-2xl'
            }
          />
        </label>

        <div className='flex flex-row gap-5 px-5 mb-10'>
          <button
            onClick={() => setRandomPrompt(getRandomPrompt())}
            className='py-3 px-4 bg-transparent border-2 border-white rounded-full'>
            ✨Random Prompt
          </button>
        </div>

        {children}

        <button className='w-full max-w-xs py-4 px-8 bg-info text-white font-bold font-nunito fixed bottom-20 rounded-full left-1/2 -translate-x-1/2 shadow-lg shadow-black z-50'>
          Generate Image
        </button>

        <BottomNav segment={useSelectedLayoutSegment()} />
      </div>
    </>
  );
};

export default PromptPage;
