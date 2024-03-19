import { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

function LoginComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // Default role is set to 'user'
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Role:", role);
    // Redirect based on role
    if (role === 'admin') {
      navigate('/dashboard');
    } else {
      navigate('/home');
    }
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
          <div className="form-group">
            <label htmlFor="role" className="form-label">Role</label>
            <select id="role" className="form-control" value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
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
