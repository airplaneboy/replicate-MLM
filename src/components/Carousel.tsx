import Card from './Card';

const Carousel = ({
  heading,
  content,
  className = '',
}: {
  heading?: React.ReactNode;
  content: any[];
  className?: string | undefined;
}) => {
  const carouselItem: string | undefined = 'carousel-item h-auto px-4';
  return (
    <div className={className + ' pb-16'}>
      {heading && heading}
      <div className='relative'>
        <div className=' inset-0 bg-gradient-to-r from-black/75 via-transparent to-black/75 z-10 absolute pointer-events-none' />
        <div className='carousel rounded-box max-w-full '>
          {content.map((item) => {
            return (
              <div key={item.id} className={carouselItem}>
                <Card title={item.title} detail={item.detail} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
