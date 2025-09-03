import { useState, useEffect } from 'react';
import './Slideshow.css';

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: '/images/slide1.jpg',
      alt: 'Empty Image 1',
      title: 'Slide 1',
      description: 'This is the first slide'
    },
    {
      image: '/images/slide2.jpg',
      alt: 'Empty Image 2', 
      title: 'Slide 2',
      description: 'This is the second slide'
    },
    {
      image: '/images/slide3.jpg',
      alt: 'Empty Image 3', 
      title: 'Slide 3',
      description: 'This is the third slide'
    },
    {
      image: '/images/slide4.jpg',
      alt: 'Empty Image 4', 
      title: 'Slide 4',
      description: 'This is the fourth slide'
    },
    {
      image: '/images/slide5.jpg',
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
