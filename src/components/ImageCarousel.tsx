import Image from 'next/image';
import Image1 from '../public/1.webp';

const ImageCarousel = ({
  className = '',
  imageClass = '',
  vignette = false,
}: {
  className?: string | undefined;
  imageClass?: string | undefined;
  vignette?: boolean;
}) => {
  return (
    <div className='relative'>
      {vignette && (
        <div className=' inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 absolute pointer-events-none' />
      )}
      <div className={className + ' carousel rounded-box max-w-full'}>
        {/* {content.map((item) => {
          return (
            <div key={item.id} className={carouselItem}>
              <Card title={item.title} detail={item.detail} />
            </div>
          );
        })} */}

        <Image alt='generated image' src={Image1} className={imageClass} />
        <Image alt='generated image' src={Image1} className={imageClass} />
        <Image alt='generated image' src={Image1} className={imageClass} />
        <Image alt='generated image' src={Image1} className={imageClass} />
        <Image alt='generated image' src={Image1} className={imageClass} />
        <Image alt='generated image' src={Image1} className={imageClass} />
        <Image alt='generated image' src={Image1} className={imageClass} />
      </div>
    </div>
  );
};

export default ImageCarousel;
