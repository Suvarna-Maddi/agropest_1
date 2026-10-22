import React from 'react';
import { Link } from 'react-router-dom';

export const AboutSection = () => {
  return (
    <section 
      id="about" 
      style={{ 
        width: '100%', 
        paddingTop: '70px', 
        paddingBottom: '30px', 
        paddingLeft: '0', 
        paddingRight: '0', 
        margin: '0', 
        overflow: 'hidden'
      }}
    >
      {/* Section Header Between Hero & About Banner Graphic */}
      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px', padding: '0 24px' }}>
        <div className="cat-pill-badge" style={{ marginBottom: '14px' }}>
          <svg className="cat-badge-leaf-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 8C8 10 5 16 5 21c5 0 11-3 13-12 0 0-1-1-1z" />
          </svg>
          Our Legacy & Vision
        </div>
        <h2 className="cat-main-title" style={{ fontSize: '2.6rem', marginBottom: '12px' }}>
          Leading the Future of <span className="cat-title-green">Farming</span>
        </h2>
        <p className="cat-subtitle" style={{ margin: '0 auto' }}>
          Empowering farmers through 18+ years of dedicated agricultural expertise and precision drone operations.
        </p>
      </div>

      <div className="about-banner-container">
        {/* Background Image Banner with responsive picture */}
        <img 
          src="/abouthero.png" 
          alt="About AgroPest Hero" 
          className="about-banner-img" 
        />

        {/* Company Details Overlaid Seamlessly */}
        <div className="about-banner-overlay">
          <h2 className="about-overlay-title">
            Rooted in Sustainable <span className="cat-title-green">Excellence</span>
          </h2>

          <p className="about-overlay-tagline">
            Empowering Farmers with Modern Agricultural Solutions
          </p>

          <p className="about-overlay-desc">
            AgroPest supports the farming community with high-quality fertilizers, pesticides, and essential nutrients. We deliver reliable, proven inputs that consistently improve crop health and maximize yield season after season.
          </p>

          <p className="about-overlay-subdesc">
            Our advanced <strong>drone spraying technology</strong> transforms traditional farming into a highly efficient process, minimizing resource usage and protecting crops while prioritizing farmer safety.
          </p>

          <p className="about-overlay-badge">
            <i className="fas fa-certificate" style={{ marginRight: '6px', color: '#16a34a' }}></i>
            Backed by over 18 years of agricultural expertise
          </p>

          <div className="about-overlay-actions">
            <Link to="/about" className="about-btn-primary">
              Learn More About Us <i className="fas fa-arrow-right"></i>
            </Link>
            <Link to="/services" className="about-btn-secondary">
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
