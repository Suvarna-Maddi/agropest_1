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
        {/* Background Image Banner */}
        <img 
          src="/abouthero.png" 
          alt="About AgroPest Hero" 
          className="about-banner-img" 
        />

        {/* Company Details Overlaid Directly On Image */}
        <div className="about-banner-overlay">

          <h2 style={{
            fontFamily: "'Montserrat', 'Poppins', sans-serif",
            fontSize: 'clamp(24px, 3.3vw, 40px)',
            fontWeight: 800,
            color: '#0f172a',
            lineHeight: 1.2,
            margin: '0 0 10px 0',
            letterSpacing: '0.01em',
            wordSpacing: '0.08em',
            whiteSpace: 'nowrap'
          }}>
            Rooted in Sustainable <span style={{ color: '#15803d' }}>Excellence</span>
          </h2>

          <p style={{
            fontSize: 'clamp(16px, 1.5vw, 19px)',
            color: '#15803d',
            fontWeight: 700,
            margin: '0 0 16px 0',
            letterSpacing: '0.02em'
          }}>
            Empowering Farmers with Modern Agricultural Solutions
          </p>

          <p style={{
            fontSize: 'clamp(16px, 1.5vw, 19.5px)',
            color: '#0f172a',
            lineHeight: 1.75,
            fontWeight: 600,
            wordSpacing: '0.12em',
            letterSpacing: '0.015em',
            margin: '0 0 8px 0'
          }}>
            AgroPest supports the farming community with high-quality fertilizers,<br />
            pesticides, and essential nutrients. We deliver reliable, proven inputs<br />
            that consistently improve crop health and maximize yield season after season.
          </p>

          <p style={{
            fontSize: 'clamp(15px, 1.4vw, 18.5px)',
            color: '#1e293b',
            lineHeight: 1.75,
            fontWeight: 500,
            wordSpacing: '0.12em',
            letterSpacing: '0.015em',
            margin: '0 0 12px 0'
          }}>
            Our advanced <strong>drone spraying technology</strong> transforms traditional farming<br />
            into a highly efficient process. This precision approach minimizes resource<br />
            usage and provides crop protection while prioritizing farmer safety.
          </p>

          <p style={{
            fontSize: '14px',
            color: '#475569',
            fontWeight: 600,
            fontStyle: 'italic',
            margin: '0 0 20px 0'
          }}>
            Backed by over 18 years of agricultural expertise
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link 
              to="/about" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 22px',
                background: 'linear-gradient(135deg, #16a34a, #15803d)',
                color: '#fff',
                borderRadius: '30px',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '15px',
                boxShadow: '0 4px 15px rgba(22, 163, 74, 0.3)'
              }}
            >
              Learn More About Us &rarr;
            </Link>
            <Link 
              to="/services" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 22px',
                background: '#ffffff',
                color: '#15803d',
                border: '2px solid #16a34a',
                borderRadius: '30px',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '15px'
              }}
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
