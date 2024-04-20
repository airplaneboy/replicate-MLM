import Image from 'next/image';
import Image1 from '@/public/1.webp';
import Image2 from '@/public/2.webp';
import Image3 from '@/public/3.webp';
import Image4 from '@/public/4.webp';
import Image5 from '@/public/5.webp';
import Image6 from '@/public/6.webp';
import Image7 from '@/public/7.webp';
import Image8 from '@/public/8.webp';
import Image9 from '@/public/9.webp';
import Image10 from '@/public/10.webp';
import Image11 from '@/public/11.webp';
import Image12 from '@/public/12.webp';

const ImageGrid = () => {
  return (
    <>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 relative'>
        <div className='absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10' />
        <div className='grid gap-4'>
          <div>
            <Image className='h-auto max-w-full rounded-lg' src={Image1} alt='' />
          </div>
          <div>
            <Image className='h-auto max-w-full rounded-lg' src={Image2} alt='' />
          </div>
          <div>
            <Image className='h-auto max-w-full rounded-lg' src={Image3} alt='' />
          </div>
          d
        </div>
        <div className='grid gap-4'>
          <div>
            <Image className='h-auto max-w-full rounded-lg' src={Image4} alt='' />
          </div>
          <div>
            <Image className='h-auto max-w-full rounded-lg' src={Image5} alt='' />
          </div>
          <div>
            <Image className='h-auto max-w-full rounded-lg' src={Image6} alt='' />
          </div>
        </div>
        <div className='grid gap-4'>
          <div>
            <Image className='h-auto max-w-full rounded-lg' src={Image7} alt='' />
          </div>
          <div>
            <Image className='h-auto max-w-full rounded-lg' src={Image8} alt='' />
          </div>
          <div>
            <Image className='h-auto max-w-full rounded-lg' src={Image9} alt='' />
          </div>
        </div>
        <div className='grid gap-4'>
          <div>
            <Image className='h-auto max-w-full rounded-lg' src={Image10} alt='' />
          </div>
          <div>
            <Image className='h-auto max-w-full rounded-lg' src={Image11} alt='' />
          </div>
          <div>
            <Image className='h-auto max-w-full rounded-lg' src={Image12} alt='' />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageGrid;
