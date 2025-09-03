import { useEffect, useRef, useState } from 'react';
import './DotMatrix.css';

interface Dot {
  x: number;
  y: number;
  delay: number;
  finalOpacity: number;
}

interface Props {
  onComplete?: () => void;
}

const DotMatrix: React.FC<Props> = ({ onComplete }) => {
  const [dots, setDots] = useState<Dot[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create optimized dot grid with reduced complexity
    const createDots = () => {
      const dotsArray: Dot[] = [];
      
      // Reduced grid size for better performance
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const cols = Math.min(30, Math.floor(vw / 25)); // Max 30 columns
      const rows = Math.min(20, Math.floor(vh / 25)); // Max 20 rows
      
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          // Simplified pattern for better performance
          let finalOpacity = 0.1;
          
          // Create simple focal points
          const centerX = cols / 2;
          const centerY = rows / 2;
          const distance = Math.sqrt((j - centerX) ** 2 + (i - centerY) ** 2);
          
          // Simple pattern based on distance from center
          if (distance < 5) {
            finalOpacity = 0.9;
          } else if (distance < 8) {
            finalOpacity = Math.random() > 0.3 ? 0.7 : 0.3;
          } else if (distance < 12) {
            finalOpacity = Math.random() > 0.6 ? 0.5 : 0.2;
          } else if (Math.random() > 0.9) {
            finalOpacity = Math.random() * 0.3;
          }

          dotsArray.push({
            x: j,
            y: i,
            delay: Math.random() * 2000, // Reduced delay for faster animation
            finalOpacity
          });
        }
      }
      setDots(dotsArray);
    };

    createDots();
    
    // Start animation after a short delay
    const timer = setTimeout(() => {
      setIsAnimating(true);
      setAnimationComplete(true);
    }, 300); // Faster startup

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleContinue = () => {
    if (onComplete) {
      onComplete();
    }
  };

  return (
    <div className="dot-matrix-container" ref={containerRef}>
      <div className="dot-matrix">
        {dots.map((dot, index) => (
          <div
            key={index}
            className={`dot ${isAnimating ? 'animate' : ''}`}
            style={{
              '--x': dot.x,
              '--y': dot.y,
              '--delay': `${dot.delay}ms`,
              '--final-opacity': dot.finalOpacity,
              '--random-offset': Math.random() * 20 - 10
            } as React.CSSProperties}
          />
        ))}
      </div>
      <div className="dot-matrix-overlay">
        <div className="matrix-title">
          <h3>Welcome to Versitel</h3>
          <p>Advanced Communication Solutions</p>
          {animationComplete && (
            <button className="continue-btn" onClick={handleContinue}>
              Explore Our Services
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DotMatrix;
