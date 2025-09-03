import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section 
      className="hero gradient-bg hero-main-content"
      id="home"
      style={{
        minHeight: '100vh',
        transition: 'opacity 0.5s ease-in-out'
      }}
    >
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title">
                  GET COMPETITIVE RATES ON ALL CALLS & SMS
                </h1>
                <div className="hero-features">
                  <p className="hero-feature">✓ No Contracts, taxes or fees</p>
                  <p className="hero-feature">✓ Incredible voice quality</p>
                  <p className="hero-feature">✓ Ready to use voice applications</p>
                  <p className="hero-feature">✓ Integrated SMS messaging services</p>
                </div>
                <p className="hero-subtitle">
                  Unlike some VoIP providers, VERSITEL uses its own private, un-contended IP Network 
                  to guarantee call quality and SMS delivery for all customers, even at peak traffic times. 
                  Get reliable voice communications and SMS messaging services all in one platform.
                </p>
                <div className="hero-actions">
                  <Link to="/contact" className="btn btn-primary">Get Started</Link>
                  <Link to="/about" className="btn btn-outline">Learn More</Link>
                </div>
              </div>
              <div className="hero-visual">
                <div className="hero-image-placeholder">
                  <img src="public/images/WhatsApp Image 2025-08-29 at 20.13.28_29c84dee.jpg" alt="Customer Service Team" className="hero-image" />
                </div>
                <div className="hero-card">
                  <div className="stats-grid">
                    <div className="stat-item">
                      <h3>99.9%</h3>
                      <p>Uptime</p>
                    </div>
                    <div className="stat-item">
                      <h3>24/7</h3>
                      <p>Support</p>
                    </div>
                    <div className="stat-item">
                      <h3>1000+</h3>
                      <p>Customers</p>
                    </div>
                    <div className="stat-item">
                      <h3>10+</h3>
                      <p>Years</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
};

export default Hero;