import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="navbar-logo-img">
          {/* Placeholder for logo image/icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="20" height="20" stroke="#222" strokeWidth="2"/>
            <path d="M2 2L22 22M22 2L2 22" stroke="#222" strokeWidth="2"/>
          </svg>
        </div>
        <div className="navbar-center-title">LOGO</div>
        <div className="navbar-icons">
          <span className="icon-search" title="Search">
            <svg width="18" height="18" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </span>
          <span className="icon-heart" title="Wishlist">
            <svg width="18" height="18" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21C12 21 4 13.5 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.5 16 21 16 21H12Z"/></svg>
          </span>
          <span className="icon-bag" title="Cart">
            <svg width="18" height="18" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 6H4V20H20V6H18"/><path d="M9 6V4A3 3 0 0 1 15 4V6"/></svg>
          </span>
          <span className="icon-user" title="Account">
            <svg width="18" height="18" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 8-4 8-4s8 0 8 4"/></svg>
          </span>
          <span className="navbar-lang">ENG <span className="lang-arrow">▼</span></span>
          <button className="navbar-logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </div>
      <div className="navbar-bottom">
        <a href="/shop" className="navbar-link">SHOP</a>
        <a href="/skills" className="navbar-link">SKILLS</a>
        <a href="/stories" className="navbar-link">STORIES</a>
        <a href="/about" className="navbar-link">ABOUT</a>
        <a href="/contact" className="navbar-link">CONTACT US</a>
      </div>
    </nav>
  );
};

export default Navbar;