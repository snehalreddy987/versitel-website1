import { useState, useEffect } from 'react';
import './Slideshow.css';

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: 'public/images/WhatsApp Image 2025-08-29 at 15.10.31_878d5429.jpg',
      alt: 'Empty Image 1',
      title: 'Slide 1',
      description: 'This is the first slide'
    },
    {
      image: 'public/images/WhatsApp Image 2025-08-29 at 15.12.37_7a8573a6.jpg',
      alt: 'Empty Image 2', 
      title: 'Slide 2',
      description: 'This is the second slide'
    },
    {
      image: 'public/images/WhatsApp Image 2025-08-29 at 15.15.41_d8289f33.jpg',
      alt: 'Empty Image 3', 
      title: 'Slide 3',
      description: 'This is the third slide'
    },
    {
      image: 'public/images/WhatsApp Image 2025-08-29 at 15.19.29_9e5f2058.jpg',
      alt: 'Empty Image 4', 
      title: 'Slide 4',
      description: 'This is the fourth slide'
    },
    {
      image: 'public/images/WhatsApp Image 2025-08-29 at 20.08.50_de66c73f.jpg',
      alt: 'Empty Image 5', 
      title: 'Slide 5',
      description: 'This is the fifth slide'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="slideshow">
      <div className="slideshow-container">
        <div className="slides-wrapper">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
              >
                <img src={slide.image} alt={slide.alt} className="slide-image" />
                <div className="slide-content">
                  <h3 className="slide-title">{slide.title}</h3>
                  <p className="slide-description">{slide.description}</p>
                </div>
              </div>
            ))}
        </div>
          
        <button className="slide-nav prev" onClick={prevSlide}>
          ‹
        </button>
        <button className="slide-nav next" onClick={nextSlide}>
          ›
        </button>
        
        <div className="slide-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slideshow;
