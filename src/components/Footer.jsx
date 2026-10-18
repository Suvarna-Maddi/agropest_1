import React from 'react';

export const Footer = () => {
  return (
    <footer className="footer-modern" id="contact">
      {/* Background Leaves */}
      <div className="footer-leaf footer-leaf-1">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17 8C8 10 5 16 5 21c5 0 11-3 13-12 0 0-1-1-1z" /></svg>
      </div>
      <div className="footer-leaf footer-leaf-2">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17 8C8 10 5 16 5 21c5 0 11-3 13-12 0 0-1-1-1z" /></svg>
      </div>

      <div className="footer-modern-container">
        <div className="footer-grid">
          {/* Column 1: Brand */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <img src="/logo.png" alt="AgroPest Logo" />
              <span>AgroPest</span>
            </div>
            <h4 className="footer-tagline">Healthy Crops, Happier Farmers</h4>
            <p className="footer-desc">
              Delivering high-quality crop protection, organic fertilizers, and advanced farming services.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/#store">Offline Store</a></li>
            </ul>
          </div>

          {/* Column 3: Services & Categories */}
          <div className="footer-col">
            <h4 className="footer-col-title">Product Categories</h4>
            <ul className="footer-links-list">
              <li><a href="/products?category=insecticide">Insecticides</a></li>
              <li><a href="/products?category=herbicide">Herbicides</a></li>
              <li><a href="/products?category=fungicide">Fungicides</a></li>
              <li><a href="/products?category=organic">Organic Nutrients</a></li>
              <li><a href="/products?category=trap">Pest Traps</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="footer-col contact-col">
            <h4 className="footer-col-title">Contact Info</h4>
            <ul className="footer-contact-list">
              <li>
                <i className="fas fa-location-dot"></i>
                <span>
                  <a href="https://maps.app.goo.gl/ac61RZiPrJ2QepAU9" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}>
                    Bhavani Traders, Ananthapuram Village, Gadwal Mandal, Jogulamba Gadwal District, Telangana
                  </a>
                </span>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <span><a href="tel:+916302461192" style={{color: 'inherit', textDecoration: 'none'}}>Contact us</a></span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>&copy; 2026 AgroPest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
