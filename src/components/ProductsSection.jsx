import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const CountUp = ({ end, duration = 2000, suffix = "+" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTime = null;
          const animateCount = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            
            const easeProgress = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
            
            setCount(Math.floor(end * easeProgress));
            if (progress < duration) {
              requestAnimationFrame(animateCount);
            }
          };
          requestAnimationFrame(animateCount);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const productsData = [
  { id: 1, name: "Bio-Organic Fertilizer", category: "organic", benefit: "Boosts soil health & microbes", img: "/product1.png" },
  { id: 2, name: "Premium Pesticide", category: "insecticide", benefit: "Fast acting pest control", img: "/product2.png" },
  { id: 3, name: "Advanced Herbicide", category: "herbicide", benefit: "Targets stubborn weeds", img: "/product3.png" },
  { id: 4, name: "Crop Protector Shield", category: "fungicide", benefit: "Weather resistant coating", img: "/product4.png" },
  { id: 5, name: "Liquid Nitrogen Booster", category: "organic", benefit: "Accelerated vegetative growth", img: "/product5.png" },
  { id: 6, name: "Eco Fungicide", category: "fungicide", benefit: "Fungal disease prevention", img: "/product6.png" },
  { id: 7, name: "Root Stimulator Pro", category: "organic", benefit: "Deep nutrient absorption", img: "/product7.png" }
];

export const ProductsSection = () => {
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const requestRef = useRef();
  const scrollPos = useRef(9999); // Will be reset on first frame
  const containerRef = useRef(null);
  
  // Tripling the array for seamless infinite looping
  const displayProducts = [...productsData, ...productsData, ...productsData];

  useEffect(() => {
    let lastTime = performance.now();
    
    const animate = (time) => {
      if (!isPaused && trackRef.current && containerRef.current) {
        const deltaTime = time - lastTime;
        const cardWidth = 320; // 280px width + 40px gap
        const totalOriginalWidth = cardWidth * productsData.length;

        // Initialize scrollPos on first frame to middle track
        if (scrollPos.current === 9999) {
          scrollPos.current = totalOriginalWidth;
        }
        
        // Decrement scroll position to scroll Left to Right
        scrollPos.current -= 0.08 * deltaTime;
        
        // Loop back seamlessly
        if (scrollPos.current <= 0) {
          scrollPos.current += totalOriginalWidth;
        }
        
        trackRef.current.style.transform = `translateX(-${scrollPos.current}px)`;
        
        // Dynamic scaling based on distance to center
        const containerRect = containerRef.current.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;
        
        const cards = trackRef.current.children;
        for (let i = 0; i < cards.length; i++) {
          const card = cards[i];
          const cardRect = card.getBoundingClientRect();
          const cardCenter = cardRect.left + cardRect.width / 2;
          
          const dist = Math.abs(containerCenter - cardCenter);
          const maxDist = 400; // Distance where scaling normalizes
          
          // Interpolate scale from 1.25 (center) to 0.85
          let scale = 1.25 - (dist / maxDist) * (1.25 - 0.85);
          scale = Math.max(0.85, Math.min(1.25, scale));
          
          let opacity = 1 - (dist / maxDist) * (1 - 0.5);
          opacity = Math.max(0.5, Math.min(1, opacity));
          
          let zIndex = Math.floor(scale * 10);
          
          card.style.transform = `scale(${scale})`;
          card.style.opacity = opacity;
          card.style.zIndex = zIndex;
          
          if (scale > 1.15) {
            card.classList.add('is-center');
            card.classList.remove('is-side');
          } else {
            card.classList.remove('is-center');
            card.classList.add('is-side');
          }
        }
      }
      lastTime = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isPaused]);

  return (
    <section id="products" className="prod-carousel-section">

      <div className="prod-header-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="cat-pill-badge" style={{ marginBottom: '15px' }}>
          <svg className="cat-badge-leaf-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 8C8 10 5 16 5 21c5 0 11-3 13-12 0 0-1-1-1z" />
          </svg>
          <span>POPULAR PRODUCTS</span>
        </div>
        <h2 className="prod-main-title">Farmer's First Choice</h2>
        <p className="prod-subtitle">Trusted products. Healthier crops. Better yields.</p>
      </div>

      <div className="prod-pedestal-fixed"></div>

      <div 
        className="prod-carousel-wrapper" 
        ref={containerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div className="prod-carousel-track-auto" ref={trackRef}>
          {displayProducts.map((prod, index) => (
            <Link 
              key={`${prod.id}-${index}`} 
              to={`/products?category=${prod.category}`} 
              className="prod-card-auto"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <div className="best-seller-badge-auto">
                <i className="fas fa-star"></i> Best Seller
              </div>
              <div className="prod-img-wrapper">
                <img src={prod.img} alt={prod.name} className="prod-image" />
              </div>
              <div className="prod-info">
                <h3>{prod.name}</h3>
                <p>{prod.benefit}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="prod-bottom-action">
        <Link to="/products" className="btn-primary-cta" style={{ margin: '0 auto', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          View All Products <i className="fas fa-arrow-right"></i>
        </Link>
      </div>

      <div className="prod-stats-bar">
        <div className="prod-stat">
          <h4><CountUp end={189} /></h4>
          <p>Products</p>
        </div>
        <div className="prod-stat-divider"></div>
        <div className="prod-stat">
          <h4><CountUp end={49000} /></h4>
          <p>Farmers</p>
        </div>
        <div className="prod-stat-divider"></div>
        <div className="prod-stat">
          <h4><CountUp end={28} /></h4>
          <p>Regions</p>
        </div>
      </div>
    </section>
  );
};
