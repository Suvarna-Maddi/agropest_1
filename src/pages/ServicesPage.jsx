import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, Leaf, Headset, Sprout, ShieldCheck, Plane, 
  MapPin, ArrowRight, BugOff, Trophy, Shield, 
  ThumbsUp, UserCheck
} from 'lucide-react';
import './ServicesPage.css';

const ServicesPage = () => {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="services-page-v2">
      {/* --- 1. HERO SECTION (EXACT IMAGE UI) --- */}
      <section className="hero-exact">
        <div className="hero-image-wrapper">
          <picture>
            <source media="(max-width: 900px)" srcSet="/serviceheromb.png" />
            <img src="/serviceshero.png" alt="AgroPest Hero" className="hero-exact-bg" />
          </picture>

          {/* Left-side quote overlay on the image - only in mobile view */}
          <div className="hero-mobile-left-overlay">
            <span className="hero-mob-quote-badge">
              <span className="badge-dot"></span> SMART FARMING
            </span>
            <h3 className="hero-mob-quote-title">
              Precision Care <br />
              <span className="text-emerald">For Every Acre</span>
            </h3>
            <p className="hero-mob-quote-sub">
              Empowering farmers with modern agri-tech & drone solutions.
            </p>
          </div>
        </div>
        
        <div className="hero-exact-content reveal">
          <h5 className="sub-heading">OUR SERVICES</h5>
          <h1 className="hero-title-exact">
            Complete<br/>
            Agricultural<br/>
            Solutions for a<br/>
            <span className="text-green">Better Tomorrow</span>
          </h1>
          <p className="hero-desc-exact">
            From crop protection to modern farming services, we support farmers at every stage with trusted products, advanced technology, and expert guidance.
          </p>
          <a 
            href="#services" 
            className="btn-explore"
            onClick={(e) => {
              e.preventDefault();
              const elem = document.getElementById('services');
              if (elem) {
                elem.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Explore Our Services <ArrowRight size={18}/>
          </a>
        </div>
      </section>

      {/* --- 2. SERVICES TIMELINE --- */}
      <section className="services-section-v2" id="services">
        <div className="container text-center reveal">
          <h5 className="sub-heading">OUR SERVICES</h5>
          <h2 className="section-title">Everything Your Farm Needs</h2>
          <p className="section-desc">End-to-end agricultural solutions designed to help you grow healthier crops, increase yields, and build a more sustainable future.</p>
          
          <div className="timeline-container">
            <div className="timeline-wave">
              <svg viewBox="0 0 1000 200" preserveAspectRatio="none">
                <path 
                  d="M 100,60 S 200,160 300,160 S 400,60 500,60 S 600,160 700,160 S 800,60 900,60" 
                  fill="none" 
                  stroke="#16a34a" 
                  strokeWidth="2" 
                  strokeDasharray="6,8" 
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>
            </div>
            
            <div className="timeline-items">
              <div className="timeline-node">
                <div className="node-icon">
                  <img src="/service_pesticides.png" alt="Pesticides" />
                </div>
                <h3>Pesticides</h3>
                <p>Effective crop protection solutions to keep your farm safe from pests and diseases.</p>
                <Link to="/products?cat=insecticide" style={{ marginTop: '8px', fontSize: '0.85rem', fontWeight: 700, color: '#16a34a', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                  Explore Pesticides &rarr;
                </Link>
              </div>
              <div className="timeline-node">
                <div className="node-icon">
                  <img src="/service_fertilizers.png" alt="Fertilizers" />
                </div>
                <h3>Fertilizers</h3>
                <p>Nourish your soil with high-quality fertilizers for stronger and healthier crops.</p>
                <Link to="/products?cat=organic" style={{ marginTop: '8px', fontSize: '0.85rem', fontWeight: 700, color: '#16a34a', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                  Explore Fertilizers &rarr;
                </Link>
              </div>
              <div className="timeline-node">
                <div className="node-icon">
                  <img src="/service_traps.png" alt="Pest Traps" />
                </div>
                <h3>Pest Traps</h3>
                <p>Eco-friendly pest traps to reduce pest population and minimize chemical usage.</p>
                <Link to="/products?cat=trap" style={{ marginTop: '8px', fontSize: '0.85rem', fontWeight: 700, color: '#16a34a', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                  Explore Traps &rarr;
                </Link>
              </div>
              <div className="timeline-node">
                <div className="node-icon">
                  <img src="/service_drone.png" alt="Drone Spraying" />
                </div>
                <h3>Drone Spraying</h3>
                <p>Advanced drone spraying for precise, efficient, and large-scale crop care.</p>
                <a href="tel:+919010402648" style={{ marginTop: '8px', fontSize: '0.85rem', fontWeight: 700, color: '#16a34a', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                  <i className="fas fa-phone-alt"></i> Book Drone
                </a>
              </div>
              <div className="timeline-node">
                <div className="node-icon">
                  <img src="/service_visit.png" alt="Farm Visit" />
                </div>
                <h3>Farm Visit</h3>
                <p>Expert guidance at your field with personalized solutions for better results.</p>
                <a href="tel:+919014255803" style={{ marginTop: '8px', fontSize: '0.85rem', fontWeight: 700, color: '#16a34a', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                  <i className="fas fa-phone-alt"></i> Request Visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. WHY CHOOSE AGROPEST (PREMIUM GLASSMORPHISM) --- */}
      <section className="why-choose-premium">
        <div className="container reveal">
          
          <div className="why-premium-header">
            <div className="badge-text center"><span className="line"></span> OUR COMMITMENT <span className="line"></span></div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Why Choose AgroPest?</h2>
            <p className="text-xl text-green-50 max-w-2xl mx-auto">
              Our unmatched experience, premium quality products, and cutting-edge modern solutions make us the most trusted partner for progressive farmers across Telangana.
            </p>
          </div>
          
          <div className="why-glass-grid">
            {/* Card 1: Experience (Large spanning card) */}
            <div className="glass-card card-large span-2">
              <div className="glass-icon-circle"><Trophy size={36}/></div>
              <div>
                <h3 className="glass-number">19+ Years</h3>
                <h4 className="glass-title">Of Farming Excellence</h4>
                <p className="glass-desc">Over a decade and a half of deep-rooted trust, delivering proven results to thousands of local farmers.</p>
              </div>
            </div>

            {/* Card 2: Quality */}
            <div className="glass-card card-tall">
              <div className="glass-icon-circle"><Shield size={36}/></div>
              <h4 className="glass-title mt-4">100% Trusted<br/>Quality Products</h4>
              <p className="glass-desc">
                We only supply highly regulated, effective, and safe agricultural inputs for maximum yield. All our fertilizers and pesticides are sourced directly from industry-leading manufacturers and rigorously tested for safety, ensuring they enrich your soil health while providing unbeatable pest resistance without harming the environment.
              </p>
            </div>

            {/* Card 3: Technology */}
            <div className="glass-card">
              <div className="glass-icon-circle"><Plane size={32}/></div>
              <h4 className="glass-title mt-4">Modern Tech</h4>
              <p className="glass-desc">Bringing drone spraying and precision agriculture to your farm.</p>
            </div>

            {/* Card 4: Guidance */}
            <div className="glass-card">
              <div className="glass-icon-circle"><UserCheck size={32}/></div>
              <h4 className="glass-title mt-4">Expert Guidance</h4>
              <p className="glass-desc">On-site agronomists available to solve your crop issues.</p>
            </div>

            {/* Card 5: Local Support */}
            <div className="glass-card card-wide span-2">
              <div className="glass-icon-circle"><MapPin size={36}/></div>
              <div>
                <h4 className="glass-title">Local Support, Global Standards</h4>
                <p className="glass-desc">Operating locally across Telangana, we understand your unique soil, climate, and pest challenges better than anyone else.</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* --- 4. HOW IT WORKS --- */}
      <section className="how-it-works-v3">
        <div className="container reveal">
          <div className="text-center mb-16">
            <h5 className="sub-heading text-green-600">THE PROCESS</h5>
            <h2 className="section-title">How It Works</h2>
            <p className="text-grey max-w-2xl mx-auto text-lg">A simple process to get the right agricultural solution for your exact needs.</p>
          </div>
          
          <div className="how-steps-modern">
            <div className="step-card">
              <div className="step-image-wrap">
                <img src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Contact Us" />
              </div>
              <h4>Contact Us</h4>
              <p>Reach out online or visit our local store.</p>
            </div>
            
            <div className="step-connector"><div className="dashed-line"></div></div>
            
            <div className="step-card">
              <div className="step-image-wrap">
                <img src="https://images.unsplash.com/photo-1589923188900-85dae523342b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Share Needs" />
              </div>
              <h4>Share Your Needs</h4>
              <p>Tell our experts about your crop challenges.</p>
            </div>
            
            <div className="step-connector"><div className="dashed-line"></div></div>
            
            <div className="step-card">
              <div className="step-image-wrap">
                <img src="/founder.png" alt="Get Expert Solutions" style={{ objectPosition: 'center 15%' }} />
              </div>
              <h4>Get Expert Solutions</h4>
              <p>Receive tailored product recommendations.</p>
            </div>
            
            <div className="step-connector"><div className="dashed-line"></div></div>
            
            <div className="step-card">
              <div className="step-image-wrap">
                <img src="/better_results.png" alt="See Better Results" style={{ objectPosition: 'center 40%' }} />
              </div>
              <h4>See Better Results</h4>
              <p>Enjoy healthier crops and much higher yields.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. CTA SECTION (ULTRA PREMIUM) --- */}
      <section className="cta-section-modern">
        <div className="container">
          <div className="cta-box-premium reveal">
            {/* Abstract Decorative Elements */}
            <div className="cta-orb orb-1"></div>
            <div className="cta-orb orb-2"></div>
            <div className="cta-pattern"></div>
            
            <div className="cta-content">
              <div className="cta-icon-container">
                <img src="/logo.png" alt="AgroPest Logo" className="cta-logo" />
                <div className="cta-icon-ring"></div>
              </div>
              <div className="cta-text">
                <h2>Discover More & New Products</h2>
                <p>Reach out to us for updates, product information, and queries. Explore our expanding range of agricultural solutions.</p>
              </div>
            </div>
            
            <a href="tel:+919014255803" className="btn-cta-ultra">
              <span>Talk to an Expert</span>
              <div className="btn-cta-icon"><ArrowRight size={20}/></div>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;
