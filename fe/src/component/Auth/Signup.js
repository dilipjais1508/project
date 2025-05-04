import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Signup = ({ onTabChange }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const res = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, confirmPassword })
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.message || 'Signup failed');
        return;
      }
      navigate('/login');
    } catch (err) {
      setError('Network error');
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Signup Form</h2>
      <div className="auth-tabs">
        <button className="auth-tab" onClick={() => onTabChange('login')}>Login</button>
        <button className="auth-tab active">Signup</button>
      </div>
      <form onSubmit={handleSignup} style={{width: '100%'}}>
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
        <input
          className="auth-input"
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
        {error && <div style={{color: 'red', marginBottom: 10}}>{error}</div>}
        <button className="auth-submit" type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup; 