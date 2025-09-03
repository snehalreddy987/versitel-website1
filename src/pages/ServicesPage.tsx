import { useEffect } from 'react';
import Services from '../components/Services';

const ServicesPage = () => {
  useEffect(() => {
    document.title = 'Services - Versitel';
  }, []);

  return (
    <div>
      <Services />
    </div>
  );
};

export default ServicesPage;
