import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Leaf, ShieldCheck, TrendingUp, Settings, 
  ChevronRight, ChevronLeft, MapPin, Quote, ArrowRight,
  Droplets, Bug, Crosshair, Users, Activity
} from 'lucide-react';
import founderImg from '../assets/about_img.png';
import './AboutPage.css';

const CountUp = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function (easeOutQuart)
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return <span ref={countRef}>{count.toLocaleString()}{suffix}</span>;
};

const ChartAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const chartRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (chartRef.current) observer.observe(chartRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`chart-wrapper ${isVisible ? 'animate-chart' : ''}`} ref={chartRef}>
      <div className="bar b1"></div>
      <div className="bar b2"></div>
      <div className="bar b3"></div>
      <div className="bar b4"></div>
      <div className="bar b5"></div>
    </div>
  );
};

const AboutPage = () => {
  const [activeSlide, setActiveSlide] = useState(2);
  const trackRef = useRef(null);
  const itemRefs = useRef([]);

  // Auto-scroll the carousel state
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev < 4 ? prev + 1 : 0));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Smoothly center the active item in track on mobile & desktop
  useEffect(() => {
    const activeEl = itemRefs.current[activeSlide];
    const track = trackRef.current;
    if (activeEl && track) {
      const elLeft = activeEl.offsetLeft;
      const elWidth = activeEl.offsetWidth;
      const trackWidth = track.offsetWidth;
      track.scrollTo({
        left: elLeft - trackWidth / 2 + elWidth / 2,
        behavior: 'smooth'
      });
    }
  }, [activeSlide]);

  // Floating leaves for background animation
  const renderLeaves = () => {
    return Array.from({ length: 15 }).map((_, i) => (
      <div key={i} className={`leaf-anim leaf-${i + 1}`}>
        <Leaf size={Math.random() * 20 + 10} color="#22c55e" strokeWidth={1} fill="#4ade80" opacity={0.6} />
      </div>
    ));
  };

  return (
    <div className="about-ultra-wrapper">
      <div className="ambient-waves-bg"></div>
      {renderLeaves()}

      {/* --- 1. HERO SECTION --- */}
      <section className="about-hero">
        <div className="container hero-grid">
          <div className="hero-content reveal">
            <div className="badge-text"><span className="line"></span> ABOUT AGROPEST</div>
            <h1>
              Empowering Farmers<br/>with <span className="text-glow">Smart</span><br/>Agricultural Solutions
            </h1>
            <p>
              We combine years of agricultural expertise with modern technology to deliver reliable products, innovative solutions, and expert support for healthier crops, higher productivity, and a sustainable future.
            </p>
            
            <div className="hero-actions">
              <Link to="/products" className="btn-solid" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>Explore Our Products <ArrowRight size={18}/></Link>
              <a href="tel:+919014255803" className="btn-outline" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>Contact Us</a>
            </div>
            
            <div className="hero-features">
              <div className="hf-item"><Leaf size={20}/> <span>Better Crop Protection</span></div>
              <div className="hf-item"><TrendingUp size={20}/> <span>Higher Productivity</span></div>
              <div className="hf-item"><Droplets size={20}/> <span>Sustainable Farming</span></div>
              <div className="hf-item"><Settings size={20}/> <span>Modern Solutions</span></div>
            </div>
          </div>
          
          <div className="hero-visual reveal delay-1">
            <div className="orb-container">
              <div className="orb-glass">
                <img src="/hero_leaf_precision.png" alt="Smart Plant" className="main-plant" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }} />


                {/* Floating Tech Icons */}
                <div className="tech-icon t-1"><Droplets size={20}/></div>
                <div className="tech-icon t-2"><Activity size={20}/></div>
                <div className="tech-icon t-3"><ShieldCheck size={20}/></div>
                <div className="tech-icon t-4"><Bug size={20}/></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. OUR STORY --- */}
      <section className="our-story">
        <div className="container story-grid">
          <div className="story-content reveal">
            <div className="badge-text"><span className="line"></span> OUR STORY</div>
            <h2>Rooted in Trust & <span className="text-glow">Growth</span></h2>
            <p>
              AgroPest has been a trusted name in agriculture, providing high-quality pesticides, fertilizers, and advanced farming solutions. We are committed to helping farmers improve crop protection, enhance productivity, and adopt modern techniques for a more sustainable and prosperous future.
            </p>
            <Link to="/services" className="btn-solid mt-4" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>Our Journey <ArrowRight size={18}/></Link>
          </div>
          <div className="story-visual reveal delay-1">
            <ChartAnimation />
          </div>
        </div>
      </section>

      {/* --- 3. STATS BANNER --- */}
      <section className="stats-banner reveal">
        <div className="container">
          <div className="stats-glass-box">
            <div className="stat-col">
              <Users size={32} className="stat-icon" />
              <h3><CountUp end={12932} suffix="+" /></h3>
              <h4>Happy Farmers</h4>
              <p>Trusted by farming communities across Telangana and beyond.</p>
            </div>
            <div className="stat-col">
              <Leaf size={32} className="stat-icon" />
              <h3><CountUp end={345} suffix="+" /></h3>
              <h4>Quality Products</h4>
              <p>Wide range of trusted agricultural inputs.</p>
            </div>
            <div className="stat-col">
              <MapPin size={32} className="stat-icon" />
              <h3><CountUp end={18450} suffix="+" /></h3>
              <h4>Acres Supported</h4>
              <p>Helping farmers achieve better crop results.</p>
            </div>
            <div className="stat-col">
              <ShieldCheck size={32} className="stat-icon" />
              <h3><CountUp end={19} suffix="+" /></h3>
              <h4>Years of Experience</h4>
              <p>Dedicated service to the farming community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. WHAT WE DO (Carousel) --- */}
      <section className="what-we-do">
        <div className="container text-center reveal">
          <div className="badge-text center"><span className="line"></span> WHAT WE DO <span className="line"></span></div>
          <h2>Complete Solutions for <span className="text-glow">Modern Farming</span></h2>
          
          <div className="services-carousel mt-12">
            <div className="carousel-track" ref={trackRef}>
              {['Pesticides', 'Fertilizers', 'Pest Traps', 'Drone Services', 'Farm Visit'].map((item, index) => (
                <div 
                  key={index} 
                  ref={el => (itemRefs.current[index] = el)}
                  className={`carousel-item ${index === activeSlide ? 'active' : ''}`}
                  onClick={() => setActiveSlide(index)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="c-icon-wrap" style={{ overflow: 'hidden', padding: index === activeSlide ? '15px' : '25px', transition: 'padding 0.3s' }}>
                    {index === 0 && <img src="/insecticide.png" alt="Pesticides" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />}
                    {index === 1 && <img src="/fertilizer.png" alt="Fertilizers" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />}
                    {index === 2 && <img src="/pesttraps.png" alt="Pest Traps" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />}
                    {index === 3 && <img src="/drone.png" alt="Drone Services" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />}
                    {index === 4 && <img src="/farmvisit.png" alt="Farm Visit" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />}
                  </div>
                  <h4>{item}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. WHY CHOOSE US --- */}
      <section className="why-choose-ultra">
        <div className="container">
          <div className="choose-content reveal">
            <div className="badge-text center-mobile"><span className="line"></span> WHY CHOOSE US <span className="line"></span></div>
            <h2>Trusted by Farmers,<br/>Built for a <span className="text-glow">Better Tomorrow</span></h2>
            
            <div className="choose-list mt-8">
              <div className="c-list-item">
                <div className="c-icon"><ShieldCheck size={24}/></div>
                <div>
                  <h4>Trusted Agricultural Products</h4>
                  <p>High-quality and effective solutions.</p>
                </div>
              </div>
              <div className="c-list-item">
                <div className="c-icon"><Users size={24}/></div>
                <div>
                  <h4>Expert Field Support</h4>
                  <p>Guidance from experienced agronomy specialists.</p>
                </div>
              </div>
              <div className="c-list-item">
                <div className="c-icon"><Settings size={24}/></div>
                <div>
                  <h4>Modern Farming Solutions</h4>
                  <p>Technology-driven and farmer-centric approach.</p>
                </div>
              </div>
              <div className="c-list-item">
                <div className="c-icon"><TrendingUp size={24}/></div>
                <div>
                  <h4>Affordable & Reliable Services</h4>
                  <p>Best value with consistent quality.</p>
                </div>
              </div>
              <div className="c-list-item">
                <div className="c-icon"><MapPin size={24}/></div>
                <div>
                  <h4>Strong Local Presence</h4>
                  <p>Serving farmers with trust and commitment.</p>
                </div>
              </div>
            </div>
          </div>
          

        </div>
      </section>

      {/* --- 6. OUR APPROACH --- */}
      <section className="our-approach">
        <div className="container text-center reveal">
          <div className="badge-text center"><span className="line"></span> OUR APPROACH <span className="line"></span></div>
          <h2>From Needs to <span className="text-glow">Better Harvests</span></h2>
          
          <div className="approach-timeline mt-12">
            <div className="a-step">
              <div className="a-icon"><Leaf size={32}/></div>
              <div className="a-num">01</div>
              <h4>Understand Farmer Needs</h4>
              <p>We listen to farmers and identify challenges.</p>
            </div>
            <div className="a-arrow"><ArrowRight/></div>
            
            <div className="a-step">
              <div className="a-icon"><ShieldCheck size={32}/></div>
              <div className="a-num">02</div>
              <h4>Suggest Right Products</h4>
              <p>Offering high quality products and expert guidance.</p>
            </div>
            <div className="a-arrow"><ArrowRight/></div>
            
            <div className="a-step">
              <div className="a-icon"><Users size={32}/></div>
              <div className="a-num">03</div>
              <h4>Provide On-field Support</h4>
              <p>Guidance and support whenever needed.</p>
            </div>
            <div className="a-arrow"><ArrowRight/></div>
            
            <div className="a-step">
              <div className="a-icon"><TrendingUp size={32}/></div>
              <div className="a-num">04</div>
              <h4>Improve Crop Results</h4>
              <p>Healthier crops and higher productivity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 7. LOCAL PRESENCE --- */}
      <section className="local-presence">
        <div className="container split-grid">
          <div className="presence-content reveal">
            <div className="badge-text center-mobile"><span className="line"></span> OUR LOCAL PRESENCE <span className="line"></span></div>
            <h2>Serving Farmers<br/>Across <span className="text-glow">Telangana</span></h2>
            <p className="mt-4">
              Through our store <strong>Bhavani Traders</strong>, we serve farmers directly with trusted agricultural products and expert guidance. Visit us to explore our products and get personalized recommendations for your farming needs.
            </p>
            <a href="https://maps.app.goo.gl/ac61RZiPrJ2QepAU9" target="_blank" rel="noopener noreferrer" className="btn-solid mt-6" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>Visit Our Store <ArrowRight size={18}/></a>
          </div>
          <div className="presence-visual reveal delay-1">
            <div className="map-glow-container" style={{ padding: '10px', background: 'rgba(22, 163, 74, 0.2)' }}>
               {/* Embedded Google Map */}
               <iframe 
                 src="https://maps.google.com/maps?q=16.1761345,77.8669257&hl=en&z=17&t=k&output=embed" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0, borderRadius: '30px' }} 
                 allowFullScreen="" 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Bhavani Traders Location"
               ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* --- 8. FOUNDER MESSAGE --- */}
      <section className="founder-message">
        <div className="container split-grid align-center">
          <div className="founder-visual reveal">
            <div className="silhouette-wrapper">
              <div className="silhouette-glow"></div>
              <img src={founderImg} alt="AgroPest Founder" className="founder-portrait" />
              <div className="s-ring r1"></div>
              <div className="s-ring r2"></div>
            </div>
          </div>
          <div className="founder-content reveal delay-1">
            <div className="badge-text"><span className="line"></span> MESSAGE FROM OUR FOUNDER</div>
            <h2>A Passion for <span className="text-glow">Agriculture</span></h2>
            <p>
              Agriculture is not just a business for us; it is a commitment to support farmers with the right knowledge, quality products, and modern solutions. Our goal is to build long-term trust, improve agricultural outcomes, and create a stronger farming community for generations to come.
            </p>
            <div className="quote-box">
              <Quote size={40} className="q-icon" />
              <div>
                <p className="q-text">"Better farming today, for a brighter tomorrow."</p>
                <p className="q-author">- Founder, AgroPest</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
