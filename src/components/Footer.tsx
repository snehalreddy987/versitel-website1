import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">VERSITEL</h3>
            <p className="footer-description">
              VERSITEL is the collaborative brain child of network communications and software experts 
              to create a revolutionary VoIP service that is reliable, sophisticated, and affordable.
            </p>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><a href="#services">VoIP Solutions</a></li>
              <li><a href="#services">How It Works</a></li>
              <li><a href="#contact">Payments</a></li>
              <li><a href="#contact">Support</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Contact Info</h4>
            <div className="contact-info">
              <p>📧 support@versitel.net</p>
              <p>🏢 USA: 418 BROADWAY STE R ALBANY, NY 12207</p>
              <p>🏢 Singapore: 2A Hougang Street 11, THE MINTON</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-social">
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="LinkedIn">💼</a>
          </div>
          <div className="footer-copyright">
            <p>Copyrights 2013. All rights reserved. versitel.net</p>
            <p>Website Designed & developed by <a href="http://www.captorsoftwaresolutions.com/" target="_blank" rel="noopener noreferrer">Captor Software Solutions Pvt. Ltd.</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
