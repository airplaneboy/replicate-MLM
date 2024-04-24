'use client';
import ImageCarousel from './ImageCarousel';
import Image from 'next/image';
import Image1 from '../public/1.webp';
import Image2 from '../public/2.webp';
import Image3 from '../public/3.webp';
import Image4 from '../public/4.webp';
import Image5 from '../public/5.webp';
import { useState } from 'react';

const Result = ({ output, prompt }: { output: any; prompt: any }) => {
  const [images, setImages] = useState([
    { src: Image1 },
    { src: Image2 },
    { src: Image3 },
    { src: Image4 },
    { src: Image5 },
  ]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <div className='h-full min-h-screen w-full flex justify-between flex-col gap-5'>
      <div>
        <Image alt='generated image' src={output} className='!rounded-none' />

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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consequatur, nam dolores expedita id
          omnis, facilis libero assumenda non totam itaque aliquid, nesciunt explicabo cupiditate dolorem! Odit,
          praesentium. Nemo, perferendis!
        </div>
      </div>
      <button className='w-full max-w-xs py-4 px-8 bg-info text-white font-bold font-nunito fixed bottom-10 rounded-full left-1/2 -translate-x-1/2 shadow-lg shadow-black z-50'>
        Re-Generate
      </button>
    </div>
  );
};

export default Result;
