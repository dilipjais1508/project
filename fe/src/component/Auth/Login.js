import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = ({ onTabChange }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.message || 'Login failed');
        return;
      }
      // Set login flag in localStorage
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/products');
    } catch (err) {
      setError('Network error');
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Login Form</h2>
      <div className="auth-tabs">
        <button className="auth-tab active">Login</button>
        <button className="auth-tab" onClick={() => onTabChange('signup')}>Signup</button>
      </div>
      <form onSubmit={handleLogin} style={{width: '100%'}}>
        <input
          className="auth-input"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className="auth-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <div className="auth-forgot"><a href="#">Forgot password?</a></div>
        {error && <div style={{color: 'red', marginBottom: 10}}>{error}</div>}
        <button className="auth-submit" type="submit">Login</button>
      </form>
      <div className="auth-bottom-text">
        Not a member? <a href="#" onClick={() => onTabChange('signup')}>Signup now</a>
      </div>
    </div>
  );
};

export default Login; 