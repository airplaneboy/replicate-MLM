'use client';
import { useState } from 'react';
import Navbar from './Navbar';
import BottomNav from './BottomNav';
import { usePathname } from 'next/navigation';
import getRandomPrompt from '@/app/utils/randomPrompts';
import Link from 'next/link';

const PromptPage = ({ children }: { children: React.ReactNode }) => {
  const [prompt, setPrompt] = useState<string>();
  return (
    <>
      <Navbar />
      <div className='h-full min-h-screen w-full flex flex-col gap-5 pt-20 pb-36'>
        <label className='text-base font-bold capitalize font-nunito px-5'>
          Enter Prompt
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            name='prompt'
            placeholder='Describe your image...'
            className={
              'mt-3 bg-neutral-950 lg:max-w-[calc(100%_-_8px)] self-center sm:p-5 rounded-2xl textarea textarea-ghost w-full font-extrabold font-nunito h-32 text-lg sm:text-2xl'
            }
          />
        </label>

        <div className='flex flex-row gap-5 px-5 mb-10'>
          <button
            onClick={() => setPrompt(getRandomPrompt())}
            className='py-3 px-4 bg-transparent border-2 border-white rounded-full'>
            ✨Random Prompt
          </button>
        </div>

        {children}

        <Link
          href={`${usePathname()}/result`}
          className='text-center w-full max-w-xs py-4 px-8 bg-info text-white font-bold font-nunito fixed bottom-20 rounded-full left-1/2 -translate-x-1/2 shadow-lg shadow-black z-50'>
          Generate Image
        </Link>

        <BottomNav pathname={usePathname()} />
      </div>
    </>
  );
};

export default PromptPage;
