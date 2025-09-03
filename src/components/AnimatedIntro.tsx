import { useEffect, useState } from 'react';
import './AnimatedIntro.css';

interface Props {
  onComplete?: () => void;
}

const AnimatedIntro: React.FC<Props> = ({ onComplete }) => {
  const [animationStage, setAnimationStage] = useState<'initial' | 'image-forming' | 'text-appearing' | 'complete'>('initial');

  useEffect(() => {
    // Start the animation sequence
    const timer1 = setTimeout(() => {
      setAnimationStage('image-forming');
    }, 800);

    const timer2 = setTimeout(() => {
      setAnimationStage('text-appearing');
    }, 4000); // Longer delay to see pieces forming

    const timer3 = setTimeout(() => {
      setAnimationStage('complete');
    }, 5500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const handleContinue = () => {
    if (onComplete) {
      onComplete();
    }
  };

  return (
    <div className="animated-intro">
      <div className="intro-container">
        {/* Animated Image */}
        <div className={`intro-image-wrapper ${animationStage}`}>
          <div className="image-pieces">
            {/* Create multiple pieces for the forming effect */}
            {Array.from({ length: 24 }).map((_, index) => (
              <div
                key={index}
                className={`image-piece piece-${index}`}
                style={{
                  backgroundImage: 'url(/images/versitel-logo.png)',
                  backgroundPosition: `${(index % 6) * -20}% ${Math.floor(index / 6) * -33.33}%`,
                  backgroundSize: '600% 400%',
                  animationDelay: `${index * 150}ms`
                }}
              />
            ))}
          </div>
        </div>

        {/* Animated Text Overlay */}
        <div className={`text-overlay ${animationStage === 'text-appearing' || animationStage === 'complete' ? 'visible' : ''}`}>
          <div className="intro-content">
            <h1 className="intro-title">Welcome to Versitel</h1>
            <p className="intro-subtitle">Advanced Communication Solutions</p>
            <div className="intro-features">
              <div className="feature-item">✓ Premium Voice Quality</div>
              <div className="feature-item">✓ Reliable SMS Services</div>
              <div className="feature-item">✓ Global Network Coverage</div>
            </div>
            {animationStage === 'complete' && (
              <button className="explore-btn" onClick={handleContinue}>
                Scroll to Continue
              </button>
            )}
          </div>
        </div>

        {/* Scroll Indicator */}
        {animationStage === 'complete' && (
          <div className="scroll-indicator">
            <div className="scroll-arrow">↓</div>
            <span>Scroll Down</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimatedIntro;
