import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function CategorySection({ onSelectCategory }) {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const categories = [
    {
      id: 'insecticides',
      name: 'Insecticides',
      filter: 'insecticide',
      route: '/products?cat=insecticide',
      image: '/insecticide.png',
    },
    {
      id: 'herbicides',
      name: 'Herbicides',
      filter: 'herbicide',
      route: '/products?cat=herbicide',
      image: '/herbicide.png',
    },
    {
      id: 'fungicides',
      name: 'Fungicides',
      filter: 'fungicide',
      route: '/products?cat=fungicide',
      image: '/fungicide.png',
    },
    {
      id: 'organic-nutrients',
      name: 'Organic Nutrients',
      filter: 'organic',
      route: '/products?cat=organic',
      image: '/organic nutrients.png',
    },
    {
      id: 'pest-traps',
      name: 'Pest Traps',
      filter: 'trap',
      route: '/products?cat=trap',
      image: '/pesttraps.png',
    },
    {
      id: 'fertilizers',
      name: 'Fertilizers',
      filter: 'organic',
      route: '/products?cat=organic',
      image: '/fertilizer.png',
    },
    {
      id: 'drones',
      name: 'Agri Drones',
      filter: 'drone',
      route: '/services',
      image: '/drone.png',
    },
  ];

  // Tripled categories array for endless smooth marquee scrolling
  const marqueeCategories = [...categories, ...categories, ...categories];

  {/* CONTINUOUS ENDLESS SMOOTH AUTO-SCROLL ANIMATION */}
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId;
    
    const smoothStep = () => {
      if (container && !isHovered) {
        if (container.scrollLeft >= (container.scrollWidth / 3) * 2) {
          // Seamless infinite reset back to first set
          container.scrollLeft = container.scrollWidth / 3;
        } else {
          container.scrollLeft += 1.25; // Smooth continuous marquee speed
        }
      }
      animationFrameId = requestAnimationFrame(smoothStep);
    };

    animationFrameId = requestAnimationFrame(smoothStep);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  const handleCategoryClick = (cat) => {
    if (cat.route) {
      navigate(cat.route);
    } else if (onSelectCategory) {
      onSelectCategory(cat.filter);
    } else {
      navigate(`/products?cat=${cat.filter}`);
    }
  };

  return (
    <section className="cat-section" id="categories">
      {/* Background Gradient & Farmland Blur Layer */}
      <div className="cat-bg-layer" />

      {/* Floating Ambient Blur Leaves */}
      <div className="cat-leaf cat-leaf-1">
        <svg viewBox="0 0 24 24" fill="#22c55e"><path d="M17 8C8 10 5 16 5 21c5 0 11-3 13-12 0 0-1-1-1z" /></svg>
      </div>
      <div className="cat-leaf cat-leaf-2">
        <svg viewBox="0 0 24 24" fill="#15803d"><path d="M17 8C8 10 5 16 5 21c5 0 11-3 13-12 0 0-1-1-1z" /></svg>
      </div>

      <div className="cat-wrapper">
        
        {/* HEADER TOP ROW (Script, Main Title, 3 Points) */}
        <div className="cat-top-header-row">
          
          {/* Top Left Script */}
          <div className="cat-top-left-script">
            <div className="cat-script-text">
              Healthy Crops
              <span className="cat-script-sub">Happier Farmers</span>
            </div>
            <svg className="cat-script-underline" viewBox="0 0 120 20" fill="none">
              <path d="M5 12C35 2 85 18 115 6" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          {/* Center Main Header */}
          <div className="cat-center-header">
            <div className="cat-pill-badge">
              <svg className="cat-badge-leaf-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 8C8 10 5 16 5 21c5 0 11-3 13-12 0 0-1-1-1z" />
              </svg>
              <span>SHOP BY CATEGORY</span>
            </div>

            <h2 className="cat-main-title">
              Everything <span className="cat-title-green">Your Crops</span> Need
            </h2>

            <p className="cat-subtitle">
              Discover our complete range of crop care solutions for healthier plants, higher yields and a greener tomorrow.
            </p>
          </div>

          {/* Top Right 3 Vertical Points */}
          <div className="cat-top-right-points">
            <div className="cat-point-pill">
              <span className="cat-point-icon bg-emerald">🌿</span>
              <span>Better Crops</span>
            </div>
            <div className="cat-point-pill">
              <span className="cat-point-icon bg-amber">☀️</span>
              <span>Higher Yields</span>
            </div>
            <div className="cat-point-pill">
              <span className="cat-point-icon bg-green">🌱</span>
              <span>Greener Tomorrow</span>
            </div>
          </div>
        </div>

        {/* MAIN HORIZONTAL CATEGORY ROW */}
        <div className="cat-scroller-box">
          
          {/* CONTINUOUS ENDLESS AUTO-SCROLL MARQUEE CONTAINER */}
          <div
            ref={scrollRef}
            className="cat-scroll-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
          >
            {marqueeCategories.map((cat, idx) => (
              <div
                key={`${cat.id}-${idx}`}
                className="cat-card"
                onClick={() => handleCategoryClick(cat)}
              >
                {/* DIRECT PRODUCT IMAGE WRAPPER */}
                <div className="cat-product-wrapper">
                  {/* Product PNG Image */}
                  <img src={cat.image} alt={cat.name} className="cat-product-img" />

                  {/* Soft Ground Shadow under Product */}
                  <div className="cat-product-shadow" />
                </div>

                {/* CATEGORY TITLE */}
                <h3 className="cat-card-title">{cat.name}</h3>

                {/* PREMIUM SPEC-PERFECT CTA BUTTON */}
                <button
                  className="cat-explore-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCategoryClick(cat);
                  }}
                >
                  Explore
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM BADGES ROW */}
        <div className="cat-bottom-badges">
          <div className="cat-bottom-pill">
            <span className="cat-bottom-pill-icon">🚜</span>
            <span>Trusted by <strong>Thousands of Farmers</strong></span>
          </div>

          <div className="cat-bottom-pill">
            <span className="cat-bottom-pill-icon">🍃</span>
            <span>Sustainable Farming <strong>for a Brighter Tomorrow</strong></span>
          </div>
        </div>

      </div>
    </section>
  );
}
