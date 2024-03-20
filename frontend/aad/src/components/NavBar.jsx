// NavBar.jsx

import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo-box">
          <Link to="/">
            <img src="/src/components/logo.jpg" alt="Logo" />
          </Link>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><Link to="/venue-details">Booking</Link></li> {/* Use Link for Profile */}
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <button className='button'>
              <Link to="/login" className="l-button">Login</Link>
            </button>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
