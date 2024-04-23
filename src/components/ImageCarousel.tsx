import Image, { StaticImageData } from 'next/image';
import { cn } from '@/utils/cn';

const ImageCarousel = ({
  className = '',
  imageClass = '',
  vignette = false,
  content,
  setSelectedImageIndex,
  selectedImageIndex,
}: {
  className?: string | undefined;
  imageClass?: string | undefined;
  vignette?: boolean;
  content?: { src: string | StaticImageData }[];
  setSelectedImageIndex?: any;
  selectedImageIndex?: number;
}) => {
  return (
    <div className='relative'>
      {vignette && (
        <div className=' inset-0 right-[-1px] bg-gradient-to-r from-black via-transparent to-black z-10 absolute pointer-events-none' />
      )}
      <div className={className + ' carousel rounded-box max-w-full'}>
        {content?.map((item: { src: string | StaticImageData }, index: number) => {
          return (
            <Image
              onClick={() => {
                setSelectedImageIndex(index);
              }}
              key={index}
              alt='generated image'
              src={item.src}
              className={cn(selectedImageIndex == index && '!ring-info', imageClass, ' !ring-4 ring-transparent')}
            />
          );
        })}

        {/* <Image alt='generated image' src={Image1} className={imageClass} />
        <Image alt='generated image' src={Image1} className={imageClass} />
        <Image alt='generated image' src={Image1} className={imageClass} />
        <Image alt='generated image' src={Image1} className={imageClass} />
        <Image alt='generated image' src={Image1} className={imageClass} />
        <Image alt='generated image' src={Image1} className={imageClass} /> */}
      </div>
    </div>
  );
};

export default ImageCarousel;
