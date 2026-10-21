import React from 'react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const scrollToProducts = (e) => {
    e.preventDefault();
    const elem = document.getElementById('products');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/products';
    }
  };

  return (
    <section className="hero-section" id="home">
      {/* Full-width hero.png background image */}
      <img src="/hero.png" alt="AgroPest Hero Background" className="hero-bg-full" />

      {/* Left side 40% width caption card container */}
      <div className="hero-content-wrapper-left">
        <div className="hero-caption-card">
          <span className="hero-top-label">
            <i className="fas fa-store"></i> Bhavani Traders
          </span>
          
          <h1 className="hero-caption-heading">
            Your <span className="text-highlight">Trusted Partner</span> <br />
            for Crop Protection & <span className="text-highlight">Growth</span>
          </h1>
          
          <p className="hero-caption-subtext">
            Quality pesticides and fertilizers <br />
            for better yield and healthy crops
          </p>

          <div className="hero-caption-buttons">
            <a href="#products" onClick={scrollToProducts} className="btn-caption-primary">
              Shop Now <i className="fas fa-shopping-bag"></i>
            </a>
            
            <Link to="/products" className="btn-caption-secondary">
              View Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
