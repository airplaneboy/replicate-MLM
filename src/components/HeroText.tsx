import { Highlight } from '@/components/ui/hero-highlight';
import Link from 'next/link';
const HeroText = () => {
  return (
    <div className='flex flex-col gap-5 items-center pt[-64px]'>
      <span className='pointer-events-none pb-6 text-7xl sm:text-8xl md:text-[180px] leading-none text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-purple-700 to-blue-400 w-fit'>
        {process.env.NEXT_PUBLIC_SITE_NAME}
      </span>

      <span className='text-gray-200 text-2xl flex flex-col gap-5 items-center'>
        <span>
          <Highlight duration={0.5}>Unleash Creativity</Highlight>
          <span> with AI-Generated Images</span>
        </span>

        <span className='text-xs sm:!text-sm font-normal max-w-xl'>
          Are you ready to explore the endless possibilities of AI-generated imagery? Look no further! Welcome to{' '}
          {process.env.NEXT_PUBLIC_SITE_NAME} where you can create captivating visuals effortlessly.
        </span>

        <Link
          href='/prompt/lorenzomarines-astra'
          className='btn !bg-info max-w-fit text-white hover:shadow-lg relative flex items-center justify-center hover:border hover:border-gray-300 mt-8'>
          <span className='absolute inset-0 blur-2xl bg-gradient-to-r from-green-600 via-purple-600 to-blue-600 hover:opacity-100 opacity-0 !z-10' />
          <span className='z-[11] pointer-events-none'>Generate Images Now</span>
        </Link>
      </span>
    </div>
  );
};

export default HeroText;
