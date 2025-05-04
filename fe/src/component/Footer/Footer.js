import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-newsletter">
          <div className="footer-newsletter-title">BE THE FIRST TO KNOW</div>
          <div className="footer-newsletter-desc">Sign up for updates from mettà muse.</div>
          <form className="footer-newsletter-form">
            <input type="email" placeholder="Enter your e-mail..." />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
        <div className="footer-contact-currency">
          <div className="footer-contact">
            <div className="footer-contact-title">CONTACT US</div>
            <div className="footer-contact-phone">+44 221 133 5360</div>
            <div className="footer-contact-email">customercare@mettamuse.com</div>
          </div>
          <div className="footer-currency">
            <div className="footer-currency-title">CURRENCY</div>
            <div className="footer-currency-value">$ - USD</div>
            <div className="footer-currency-note">Transactions will be completed in Euros and a currency reference is available on hover.</div>
          </div>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <div className="footer-links-col">
          <div className="footer-links-title">mèttà muse</div>
          <a href="#">About Us</a>
          <a href="#">Stories</a>
          <a href="#">Artisans</a>
          <a href="#">Boutiques</a>
          <a href="#">Contact Us</a>
          <a href="#">EU Compliances Docs</a>
        </div>
        <div className="footer-links-col">
          <div className="footer-links-title">QUICK LINKS</div>
          <a href="#">Orders & Shipping</a>
          <a href="#">Join/Login as a Seller</a>
          <a href="#">Payment & Pricing</a>
          <a href="#">Return & Refunds</a>
          <a href="#">FAQs</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
        <div className="footer-social-col">
          <div className="footer-links-title">FOLLOW US</div>
          <div className="footer-social-icons">
            <a href="#" aria-label="Instagram"><svg width="22" height="22" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="18" cy="6" r="1.5"/></svg></a>
            <a href="#" aria-label="Pinterest"><svg width="22" height="22" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><circle cx="12" cy="8" r="1"/></svg></a>
          </div>
          <div className="footer-accepts-title">mettà muse ACCEPTS</div>
          <div className="footer-payments">
            <span className="footer-payment-icon">S</span>
            <span className="footer-payment-icon">V</span>
            <span className="footer-payment-icon">M</span>
            <span className="footer-payment-icon">A</span>
            <span className="footer-payment-icon">G</span>
            <span className="footer-payment-icon">AP</span>
            <span className="footer-payment-icon">DP</span>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        Copyright © 2023 mettamuse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer; 