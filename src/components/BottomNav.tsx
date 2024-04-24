import { cn } from '@/utils/cn';
import Link from 'next/link';

const BottomNav = ({ segment }: { segment: string | null }) => {
  return (
    <div className='btm-nav bg-black/50 backdrop-blur px-5'>
      <Link
        href='/generate/lorenzomarines-astra'
        role='tab'
        className={cn(
          segment == 'lorenzomarines-astra' && 'tab-active !text-white !bg-info rounded-full',
          'tab font-extrabold font-nunito tracking-widest uppercase flex-1'
        )}>
        astra
      </Link>
      <Link
        href='/generate/aiforever-kandinsky2'
        role='tab'
        className={cn(
          segment == 'aiforever-kandinsky2' && 'tab-active !text-white !bg-info rounded-full',
          'tab font-extrabold font-nunito tracking-widest uppercase flex-1'
        )}>
        kandinsky-2
      </Link>
    </div>
  );
};

export default BottomNav;
