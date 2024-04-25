import { cn } from '@/utils/cn';
import Link from 'next/link';

const BottomNav = ({ pathname }: { pathname: string | null }) => {
  return (
    <div className='btm-nav bg-black/50 backdrop-blur px-5 z-[51] max-w-4xl'>
      <Link
        href='/generate/lorenzomarines-astra'
        role='tab'
        className={cn(
          pathname?.endsWith('lorenzomarines-astra') && 'tab-active !text-white !bg-info rounded-full',
          'tab font-extrabold font-nunito tracking-widest uppercase flex-1 max-w-xs'
        )}>
        astra
      </Link>
      <Link
        href='/generate/aiforever-kandinsky2'
        role='tab'
        className={cn(
          pathname?.endsWith('aiforever-kandinsky2') && 'tab-active !text-white !bg-info rounded-full',
          'tab font-extrabold font-nunito tracking-widest uppercase flex-1 max-w-xs'
        )}>
        kandinsky-2
      </Link>
    </div>
  );
};

export default BottomNav;
