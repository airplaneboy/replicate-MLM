import Footer from '@/components/Footer';
import ImageGrid from '@/components/ImageGrid';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/landing page/HeroSection';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ImageGrid />
      <Footer />
    </>
  );
};

export default HomePage;
