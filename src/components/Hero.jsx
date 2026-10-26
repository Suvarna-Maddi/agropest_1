import React from 'react';
import { Link } from 'react-router-dom';

export const Hero = () => {

  return (
    <section className="hero-section" id="home">
      {/* Responsive hero image: home_hero.jpg on mobile, l_hero.png on desktop/laptop */}
      <picture className="hero-picture">
        <source media="(max-width: 768px)" srcSet="/home_hero.jpg" />
        <img src="/l_hero.png" alt="AgroPest Hero Background" className="hero-bg-full" />
      </picture>

      {/* Left side 40% width caption card container */}
      <div className="hero-content-wrapper-left">
        <div className="hero-caption-card">
          <div className="hero-badge-group">
            <span className="hero-brand-pill">
              <i className="fas fa-globe-asia"></i> AgroPest
            </span>
            <span className="hero-store-pill">
              <i className="fas fa-store"></i> BHAVANI TRADERS
            </span>
          </div>
          
          <h1 className="hero-caption-heading">
            Your <span className="text-highlight">Trusted Partner</span> <br />
            for Crop Protection &amp; <br />
            <span className="text-highlight">Growth</span> <span className="hero-heading-leaf">🌿</span>
          </h1>
          
          <p className="hero-caption-subtext">
            Quality pesticides and fertilizers <br />
            for better yield and healthy crops
          </p>

          <div className="hero-caption-buttons">
            <Link to="/products" className="btn-caption-primary">
              <i className="fas fa-shopping-cart"></i> Shop Now <i className="fas fa-chevron-right" style={{ fontSize: '0.75rem' }}></i>
            </Link>
            
            <a href="tel:+919010402648" className="btn-caption-secondary">
              <i className="fas fa-helicopter"></i> Drone Services <i className="fas fa-phone-alt" style={{ fontSize: '0.75rem', marginLeft: '2px' }}></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
