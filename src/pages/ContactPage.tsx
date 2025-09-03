import { useEffect } from 'react';
import Contact from '../components/Contact';

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Contact Us - Versitel';
  }, []);

  return (
    <div>
      <Contact />
    </div>
  );
};

export default ContactPage;
