import { useEffect } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Slideshow from '../components/Slideshow';

const Home = () => {
  useEffect(() => {
    document.title = 'Home - Versitel';
  }, []);

  return (
    <div>
      <Hero />
      <Features />
      <Slideshow />
    </div>
  );
};

export default Home;
