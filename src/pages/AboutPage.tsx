import { useEffect } from 'react';
import About from '../components/About';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About Us - Versitel';
  }, []);

  return (
    <div>
      <About />
    </div>
  );
};

export default AboutPage;
