import React from 'react';
import { Link } from 'react-router-dom';

export const ServicesSection = () => {
  const cards = [
    {
      id: 1,
      title: "Pesticides",
      desc: "Effective crop protection solutions to control pests and ensure higher yields.",
      img: "/insecticide.png",
      icon: "fas fa-leaf",
      link: "/products?cat=insecticide"
    },
    {
      id: 2,
      title: "Pest Traps",
      desc: "Smart trapping solutions to monitor and manage pests sustainably.",
      img: "/pesttraps.png",
      icon: "fas fa-bug",
      link: "/products?cat=trap"
    },
    {
      id: 3,
      title: "Fertilizers",
      desc: "High-quality nutrients for stronger growth and healthier crops.",
      img: "/fertilizer.png",
      icon: "fas fa-seedling",
      link: "/products?cat=organic"
    },
    {
      id: 4,
      title: "Drone Services",
      desc: "Advanced drone spraying for precise, efficient and cost-effective farming.",
      img: "/drone.png",
      icon: "fas fa-helicopter",
      link: "/services"
    },
    {
      id: 5,
      title: "Farm Visit",
      desc: "Expert field support and on-site guidance for better crop management.",
      img: "/farmvisit.png",
      icon: "fas fa-user-tie",
      link: "/services"
    }
  ];

  return (
    <section id="services" className="srv-section">
      {/* Top Header */}
      <div className="srv-header">
        <div className="srv-pill">
          <i className="fas fa-leaf"></i> SERVICES
        </div>
        <h2 className="srv-title">Complete <span className="srv-title-green">Farming Solutions</span></h2>
        <p className="srv-subtitle">
          From crop protection to field support, AgroPest empowers farmers with 
          advanced products and services for healthier crops and higher yields.
        </p>
        
        <div className="srv-divider">
          <span className="srv-divider-line"></span>
          <i className="fas fa-leaf srv-divider-icon"></i>
          <span className="srv-divider-text">HEALTHY CROPS HAPPIER FARMERS A GREENER TOMORROW</span>
          <span className="srv-divider-line"></span>
        </div>
      </div>

      {/* Cards Container */}
      <div className="srv-cards-container">
        {cards.map(card => (
          <div className="srv-card" key={card.id}>
            <div className="srv-card-img-wrapper">
              <div className="srv-circle-bg"></div>
              <img src={card.img} alt={card.title} className="srv-card-img" />
              <div className="srv-card-icon"><i className={card.icon}></i></div>
            </div>
            <h3 className="srv-card-title">{card.title}</h3>
            <p className="srv-card-desc">{card.desc}</p>
            <Link to={card.link} className="srv-card-btn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>Learn More &rarr;</Link>
          </div>
        ))}
      </div>

      {/* Explore All Services */}
      <div className="srv-explore-wrapper">
        <Link to="/services" className="srv-explore-btn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>Explore All Services &rarr;</Link>
        <div className="srv-explore-arrow">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M90 10 Q 50 20 20 80" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M10 60 L 20 80 L 40 70" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
          <span>Let's Grow<br/>Together</span>
        </div>
      </div>

    </section>
  );
};
