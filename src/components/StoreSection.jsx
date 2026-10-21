import React from 'react';

export const StoreSection = () => {
  return (
    <section className="os-section" id="store">
      <div className="os-bg-gradient"></div>
      
      {/* Subtle Floating Leaves */}
      <div className="os-leaf os-leaf-1">
        <svg viewBox="0 0 24 24" fill="#22c55e"><path d="M17 8C8 10 5 16 5 21c5 0 11-3 13-12 0 0-1-1-1z" /></svg>
      </div>
      <div className="os-leaf os-leaf-2">
        <svg viewBox="0 0 24 24" fill="#15803d"><path d="M17 8C8 10 5 16 5 21c5 0 11-3 13-12 0 0-1-1-1z" /></svg>
      </div>

      <div className="os-wrapper">
        {/* Left Side Content */}
        <div className="os-content">
          <div className="cat-pill-badge" style={{ alignSelf: 'flex-start', marginBottom: '20px' }}>
            <svg className="cat-badge-leaf-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 8C8 10 5 16 5 21c5 0 11-3 13-12 0 0-1-1-1z" />
            </svg>
            <span>OUR STORE</span>
          </div>

          <h2 className="os-main-title">
            Visit <span className="text-green">Bhavani Traders</span>
          </h2>
          <h3 className="os-subtitle">Your Trusted Farming Partner</h3>
          
          <p className="os-description">
            Experience our physical outlet where you can find top-quality pesticides, organic fertilizers, and advanced pest traps. Our on-site experts are always ready to provide personalized farming support and crop consultation.
          </p>

          <div className="os-features-grid">
            <div className="os-feature">
              <i className="fas fa-check-circle"></i> Genuine Products
            </div>
            <div className="os-feature">
              <i className="fas fa-check-circle"></i> Expert Advice
            </div>
            <div className="os-feature">
              <i className="fas fa-check-circle"></i> Wide Variety
            </div>
            <div className="os-feature">
              <i className="fas fa-check-circle"></i> Trusted by Farmers
            </div>
          </div>

          <div className="os-actions">
            <a 
              href="https://www.google.com/maps/place/Bhavani+Traders/@16.1761345,77.8643508,846m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bb601a56fd71a21:0xd2fd6a2ed0df9f1e!8m2!3d16.1761345!4d77.8669257!16s%2Fg%2F11y8cdghrk?entry=ttu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="os-btn-primary"
            >
              Get Directions
            </a>
            <a href="tel:+919014255803" className="os-btn-secondary">
              Call Now
            </a>
          </div>

          <div className="os-info-rows">
            <div className="os-info-row">
              <i className="fas fa-location-dot"></i>
              <span>Ananthapuram village, Gadwal mandal, Telangana.</span>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="os-image-wrapper">
          <img src="/shop.jpg" alt="Bhavani Traders Store" className="os-image" />
          <div className="os-image-shadow"></div>
        </div>
      </div>
    </section>
  );
};
