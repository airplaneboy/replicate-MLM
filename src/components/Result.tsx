'use client';
import ImageCarousel from './ImageCarousel';
import Image from 'next/image';
import { useState } from 'react';

const Result = ({
  output,
  prompt,
  regenerate,
}: {
  output: any;
  prompt: any;
  input?: any;
  regenerate: (e?: React.FormEvent<HTMLFormElement>, input?: any) => Promise<void>;
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className='h-full min-h-screen w-full flex justify-between flex-col gap-5 z-50 pt-16'>
      <div>
        {loaded == true ? (
          <Image
            onLoad={() => {
              console.log('loaded');
              setLoaded(true);
            }}
            priority={true}
            width={500}
            height={500}
            alt='generated image'
            src={Array.isArray(output) ? output[selectedImageIndex] : output}
            className='!rounded-none w-full h-auto object-contain'
          />
        ) : (
          <span className='fixed text-7xl text-white top-0 left-0 z-50'>Loading..</span>
        )}

        {Array.isArray(output) && (
          <ImageCarousel
            imageClass='object-cover h-20 max-h-[80px] min-w-[80px] max-w-[80px] rounded-xl'
            className='space-x-4 !rounded-none px-8 py-2 mt-2'
            vignette={true}
            setSelectedImageIndex={setSelectedImageIndex}
            selectedImageIndex={selectedImageIndex}
            output={output}
          />
        )}
      </div>

      <div className='flex-[2] p-5 pb-28'>
        <div className='font-nunito font-extrabold text-xl mb-3 text-neutral-500'>Your Prompt</div>
        <div className='font-nunito font-semibold text-lg bg-neutral-950 mb-3 p-5 rounded-2xl text-neutral-500 border'>
          {prompt}
        </div>
      </div>
      <button
        type='button'
        onClick={() => regenerate()}
        className='w-full max-w-xs py-4 px-8 bg-info text-white font-bold font-nunito fixed bottom-10 rounded-full left-1/2 -translate-x-1/2 shadow-lg shadow-black z-50'>
        Re-Generate
      </button>
    </div>
  );
};

export default Result;
