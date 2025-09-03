import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/" className="text-gradient" style={{ textDecoration: 'none' }}>
              <h2 className="text-gradient">VERSITEL</h2>
            </Link>
          </div>
          <nav className="nav">
            <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About Us</NavLink>
            <NavLink to="/services" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Services</NavLink>
            <NavLink to="/testimonials" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Testimonials</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
          </nav>
          <div className="header-actions">
            <Link to="/contact" className="btn btn-outline">Get Quote</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
