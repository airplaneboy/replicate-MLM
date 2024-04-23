import ImageCarousel from './ImageCarousel';
import Image from 'next/image';
import Image1 from '../public/1.webp';

const Result = () => {
  return (
    <div className='h-full min-h-screen w-full flex justify-between flex-col gap-5'>
      <div>
        <Image alt='generated image' src={Image1} className='!rounded-none' />
        <ImageCarousel
          imageClass='object-cover h-20 max-h-[80px] min-w-[80px] max-w-[80px] rounded-xl'
          className='space-x-4 !rounded-none px-5 mt-2'
          vignette={true}
        />
      </div>

      <div className='flex-[2] p-5 pb-28'>
        <div className='font-nunito font-extrabold text-xl mb-3 text-neutral-500'>Your Prompt</div>
        <div className='font-nunito font-semibold text-lg bg-neutral-950 mb-3 p-5 rounded-2xl text-neutral-500 border'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consequatur, nam dolores expedita id
          omnis, facilis libero assumenda non totam itaque aliquid, nesciunt explicabo cupiditate dolorem! Odit,
          praesentium. Nemo, perferendis!
        </div>
      </div>
      <button className='w-full max-w-xs py-4 px-8 bg-white text-black font-bold font-nunito fixed bottom-10 rounded-full left-1/2 -translate-x-1/2 shadow-lg shadow-black z-50'>
        Re-Generate
      </button>
    </div>
  );
};

export default Result;
