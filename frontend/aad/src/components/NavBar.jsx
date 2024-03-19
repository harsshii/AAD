
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo-box">
          <a href="/">
            <img src="/src/components/logo.jpg" alt="Logo" />
          </a>
        </div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#gallery">Gallery</a></li>
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
