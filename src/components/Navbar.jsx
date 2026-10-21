import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleCall = (e) => {
    e.preventDefault();
    const phone = "+91" + "9014" + "255803";
    window.location.href = "tel:" + phone;
  };

  const isActive = (path) => location.pathname === path;
  const isProductsActive = location.pathname.startsWith('/products');

  return (
    <header className="navbar">
      <Link to="/" className="brand-wrapper">
        <img src="/logo.png" alt="AgroPest Logo" />
        <span className="brand-name">AgroPest</span>
      </Link>

      <nav className={`nav-menu ${mobileOpen ? 'show' : ''}`}>
        <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>Home</Link>
        <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>About Us</Link>
        <Link to="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>Services</Link>
        
        <div className="nav-dropdown">
          <Link to="/products" className={`nav-link ${isProductsActive ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
            Products <i className="fas fa-chevron-down nav-chevron"></i>
          </Link>
          <div className="nav-dropdown-menu">
            <Link to="/products?category=insecticide" onClick={() => setMobileOpen(false)}>Insecticides</Link>
            <Link to="/products?category=herbicide" onClick={() => setMobileOpen(false)}>Herbicides</Link>
            <Link to="/products?category=fungicide" onClick={() => setMobileOpen(false)}>Fungicides</Link>
            <Link to="/products?category=organic" onClick={() => setMobileOpen(false)}>Organic Nutrients</Link>
            <Link to="/products?category=trap" onClick={() => setMobileOpen(false)}>Pest Traps</Link>
          </div>
        </div>
      </nav>

      <div className="nav-right-actions">
        <a href="tel:+919014255803" onClick={handleCall} className="btn-nav-call">
          <i className="fas fa-phone-volume"></i> <span>Contact Us</span>
        </a>
        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
    </header>
  );
};
