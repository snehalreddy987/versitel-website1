import { useEffect } from 'react';
import Testimonials from '../components/Testimonials';
import Slideshow from '../components/Slideshow';

const TestimonialsPage = () => {
  useEffect(() => {
    document.title = 'Testimonials - Versitel';
  }, []);

  return (
    <div>
      <Testimonials />
      <Slideshow />
    </div>
  );
};

export default TestimonialsPage;
