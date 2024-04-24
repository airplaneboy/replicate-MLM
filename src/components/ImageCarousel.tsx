import Image from 'next/image';
import { cn } from '@/utils/cn';

const ImageCarousel = ({
  className = '',
  imageClass = '',
  vignette = false,
  output,
  setSelectedImageIndex,
  selectedImageIndex,
}: {
  className?: string | undefined;
  imageClass?: string | undefined;
  vignette?: boolean;
  output?: string[];
  setSelectedImageIndex?: any;
  selectedImageIndex?: number;
}) => {
  return (
    <div className='relative'>
      {vignette && (
        <div className=' inset-0 right-[-1px] bg-gradient-to-r from-black via-transparent to-black z-10 absolute pointer-events-none' />
      )}
      <div className={className + ' carousel rounded-box max-w-full'}>
        {output?.map((item: string, index: number) => {
          return (
            <Image
              onClick={() => {
                setSelectedImageIndex(index);
              }}
              width={40}
              height={40}
              key={index}
              alt='generated image'
              src={item}
              className={cn(selectedImageIndex == index && '!ring-info', imageClass, ' !ring-4 ring-transparent')}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ImageCarousel;
