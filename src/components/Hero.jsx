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
      {/* Responsive hero image: heromobile.jpg on mobile, hero.png on desktop */}
      <picture className="hero-picture">
        <source media="(max-width: 768px)" srcSet="/heromobile.jpg" />
        <img src="/hero.png" alt="AgroPest Hero Background" className="hero-bg-full" />
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
            <a href="tel:+919014255803" className="btn-caption-primary">
              <i className="fas fa-shopping-cart"></i> Shop Now <i className="fas fa-chevron-right" style={{ fontSize: '0.75rem' }}></i>
            </a>
            
            <Link to="/products" className="btn-caption-secondary">
              View Products <i className="fas fa-chevron-right" style={{ fontSize: '0.75rem' }}></i>
            </Link>
          </div>

          <div className="hero-features-triad">
            <div className="hero-feature-pill">
              <div className="hero-feat-icon-circle">
                <i className="fas fa-leaf"></i>
              </div>
              <div className="hero-feat-info">
                <strong>Pesticides</strong>
                <span>Protect Your Crops</span>
              </div>
            </div>

            <div className="hero-feature-pill">
              <div className="hero-feat-icon-circle">
                <i className="fas fa-seedling"></i>
              </div>
              <div className="hero-feat-info">
                <strong>Fertilizers</strong>
                <span>Nourish for Higher Yield</span>
              </div>
            </div>

            <div className="hero-feature-pill">
              <div className="hero-feat-icon-circle">
                <i className="fas fa-helicopter"></i>
              </div>
              <div className="hero-feat-info">
                <strong>Drone Services</strong>
                <span>Smart Farming for Tomorrow</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
