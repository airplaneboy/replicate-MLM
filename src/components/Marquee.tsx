const Marquee = ({
  className = '',
  children,
  hidden = false,
}: {
  className?: string | undefined;
  children: React.ReactNode;
  hidden?: boolean;
}) => {
  return (
    <div className={hidden ? 'hidden group-hover:block' : ''}>
      <ul
        className={
          className +
          `w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0%,_black_20%,_black,_transparent_100%)] [--duration:2s]`
        }>
        <li className='min-w-[calc(100%_+_100px)] flex items-center justify-evenly px-2 w-screen animate-marquee'>
          {children}
        </li>

        <li className='min-w-[calc(100%_+_100px)] flex items-center justify-evenly px-2 w-full animate-marquee aria-hidden="true"'>
          {children}
        </li>
      </ul>
    </div>
  );
};

export default Marquee;
