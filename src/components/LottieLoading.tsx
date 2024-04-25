import { DotLottiePlayer, PlayMode } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

const LottieLoading = () => {
  return (
    <DotLottiePlayer
      className='absolute inset-0 w-full scale-150'
      src='/Animation - 1714013295222.lottie'
      autoplay
      playMode={PlayMode.Bounce}
      // speed={2}
      loop
    />
  );
};

export default LottieLoading;
