import { useState } from 'react';
import './Login.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function LoginComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/payment' } }; // Get the previous location or default to '/booking'

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
    // Redirect to the previous page after login
    navigate(from);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <p className="login-subtitle">Please enter your login and password!</p>

        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>

        <div className="social-media">
          <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-google"></i></a>
        </div>

        <p className="register-text">No account? <Link to="/signup" className="register-link">Sign Up</Link></p>
      </div>
    </div>
  );
}

export default LoginComponent;
