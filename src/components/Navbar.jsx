import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleCall = (e) => {
    e.preventDefault();
    const phone = "+91" + "9014" + "255803";
    window.location.href = "tel:" + phone;
  };

  return (
    <header className="navbar">
      <Link to="/" className="brand-wrapper">
        <img src="/logo.png" alt="AgroPest Logo" />
        <span className="brand-name">AgroPest</span>
      </Link>

      <nav className={`nav-menu ${mobileOpen ? 'show' : ''}`}>
        <Link to="/" className="nav-link active" onClick={() => setMobileOpen(false)}>Home</Link>
        <Link to="/about" className="nav-link" onClick={() => setMobileOpen(false)}>About Us</Link>
        <Link to="/services" className="nav-link" onClick={() => setMobileOpen(false)}>Services</Link>
        
        <div className="nav-dropdown">
           <a href="/products.html" className="nav-link" onClick={() => setMobileOpen(false)}>Products <i className="fas fa-chevron-down nav-chevron"></i></a>
          <div className="nav-dropdown-menu">
            <a href="/insecticides.html">Insecticides</a>
            <a href="/herbicides.html">Herbicides</a>
            <a href="/fungicides.html">Fungicides</a>
            <a href="/nutrients.html">Organic Nutrients</a>
            <a href="/traps.html">Pest Traps</a>
          </div>
        </div>
      </nav>

      <div className="nav-right-actions">
        <a href="#contact" onClick={handleCall} className="btn-nav-call">
          <i className="fas fa-phone-volume"></i> <span>Contact Us</span>
        </a>
        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
    </header>
  );
};
