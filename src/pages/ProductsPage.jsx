
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './ProductsPage.css';

const ProductsPage = ({ category }) => {
  const location = useLocation();

  useEffect(() => {
    const chips = document.querySelectorAll('.chip');
    const cards = document.querySelectorAll('.card');

    const applyFilter = (filter, shouldScroll = false) => {
      chips.forEach(c => {
        if (c.getAttribute('data-filter') === filter) {
          c.classList.add('active');
        } else {
          c.classList.remove('active');
        }
      });

      cards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-cat') === filter) {
          card.style.display = 'block';
          setTimeout(() => card.classList.add('visible'), 10);
        } else {
          card.style.display = 'none';
          card.classList.remove('visible');
        }
      });

      if (shouldScroll) {
        const filterSection = document.getElementById('filters') || document.getElementById('showcase');
        if (filterSection) {
          filterSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        const filter = chip.getAttribute('data-filter');
        applyFilter(filter, false);
      });
    });

    // Check prop or URL parameters (e.g. ?category=fungicide or ?cat=fungicide)
    const params = new URLSearchParams(location.search);
    const categoryParam = category || params.get('category') || params.get('cat');
    if (categoryParam) {
      applyFilter(categoryParam.toLowerCase(), true);
    } else {
      applyFilter('all', false);
    }
  }, [category, location.search, location.pathname]);

  return (
    <div className="products-page-container">
      


     


{/* ========== HERO (CONSISTENT WITH OTHER PAGES) ========== */}
<section className="products-hero-exact">
  <picture>
    <source media="(max-width: 900px)" srcSet="/serviceheromb.png" />
    <img src="/hero.png" alt="AgroPest Products" className="products-hero-bg" />
  </picture>

  <div className="products-hero-content">
    <span className="products-kicker">
      <i className="fa-solid fa-seedling"></i> Multi-Product Excellence
    </span>

    <h1 className="products-hero-title">
      Precision Inputs & <br />
      <span className="text-highlight">Smart Solutions</span> for <br />
      Higher Yields
    </h1>

    <p className="products-hero-desc">
      Explore our certified catalog of insecticides, herbicides, fungicides, organic nutrients, and pest traps — engineered to maximize harvest productivity and crop resilience.
    </p>

    <div className="products-cta-row">
      <a className="btn-hero-primary" href="#filters">
        <i className="fa-solid fa-filter"></i> Filter by Category
      </a>
      <a className="btn-hero-secondary" href="#showcase">
        <i className="fa-solid fa-basket-shopping"></i> Browse Products
      </a>
    </div>
  </div>

  {/* Scrolling Category Ticker */}
  <div className="products-ticker">
    <div className="products-ticker-track">
      <span><i className="fa-solid fa-bug"></i> Insecticides</span>
      <span><i className="fa-solid fa-leaf"></i> Herbicides</span>
      <span><i className="fa-solid fa-bacteria"></i> Fungicides</span>
      <span><i className="fa-solid fa-droplet"></i> Organic Nutrients</span>
      <span><i className="fa-solid fa-spider"></i> Pest Traps</span>
      <span><i className="fa-solid fa-helicopter"></i> Drone Spraying</span>
      <span><i className="fa-solid fa-bug"></i> Insecticides</span>
      <span><i className="fa-solid fa-leaf"></i> Herbicides</span>
      <span><i className="fa-solid fa-bacteria"></i> Fungicides</span>
      <span><i className="fa-solid fa-seedling"></i> Organic Nutrients</span>
      <span><i className="fa-solid fa-spider"></i> Pest Traps</span>
      <span><i className="fa-solid fa-helicopter"></i> Drone Spraying</span>
    </div>
  </div>
</section>

{/* ========== FILTER BAR ========== */}
<section id="filters" className="filter-bar">
  <div className="container filter-inner">
    <div className="chips" role="tablist" aria-label="Product filters">
      <div className="chip active" data-filter="all" role="tab">All</div>
      <div className="chip" data-filter="insecticide" role="tab">Insecticides</div>
      <div className="chip" data-filter="herbicide" role="tab">Herbicides</div>
      <div className="chip" data-filter="fungicide" role="tab">Fungicides</div>
      <div className="chip" data-filter="organic" role="tab">Organic Nutrients</div>
      <div className="chip" data-filter="trap" role="tab">Pest Traps</div>
      {/*<div className="chip" data-filter="drone" role="tab">Drone Service</div>*/}
    </div>
    <a className="btn secondary" href="#showcase"><i className="fa-solid fa-arrow-down-long"></i> See Products</a>
  </div>
</section>

{/* ========== PRODUCT GRID ========== */}
<section id="showcase" className="container">
  <div className="grid" id="grid">
    {/* Sample cards (duplicate/change as needed) */}

        <article className="card" data-cat="insecticide" onClick={() => { window.location.href='acemain.html' }}>

      <div className="card-media">
        <img src="acemain.webp" alt="acemain" />
         <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>
      </div>
      <div className="card-body">
        <h3>Acemain</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='agadi_g.html' }}>
  
      <div className="card-media">
        <img src="agadi_g.webp" alt="agadi-g"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
  <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>
      </div>
      <div className="card-body">
        <h3>Agadi-G</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='agadi_sc.html' }}>
  
      <div className="card-media">
        <img src="agadi_sc.webp" alt="agadi-sc"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Agadi-SC</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='agadisuper.html' }}>
  
      <div className="card-media">
        <img src="agadisuper.webp" alt="agadisuper"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />

                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>
      </div>
      <div className="card-body">
        <h3>Agadi Super</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='agas.html' }}>
  
      <div className="card-media">
        <img src="agas.webp" alt="agas"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Agas</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='allcronsuper.html' }}>
  
      <div className="card-media">
        <img src="allcronsuper.jpg" alt="allcron super"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Allcron Super</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='amaze.html' }}>
  
      <div className="card-media">
        <img src="amaze.jpg" alt="amaze"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Amaze</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='ampligo.html' }}>
  
      <div className="card-media">
        <img src="ampligo.webp" alt="ampligo"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Ampligo</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='axeman.html' }}>
  
      <div className="card-media">
        <img src="axeman.webp" alt="axeman"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Axeman</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='ayuban-505.html' }}>
  
      <div className="card-media">
        <img src="ayuban505.jpg" alt="ayuban-505"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Ayuban-505</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='ayuban20.html' }}>
  
      <div className="card-media">
        <img src="ayuban20.jpg" alt="ayuban-20"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Ayuban-20</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='ayuban50.html' }}>
  
      <div className="card-media">
        <img src="ayuban50.jpg" alt="ayuban50"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Ayuban-50</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='ayuclaim.html' }}>
  
      <div className="card-media">
        <img src="ayuclaim.jpeg" alt="ayuclaim"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Ayuclaim</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='ayustara.html' }}>
  
      <div className="card-media">
        <img src="ayustara.jpg" alt="ayustara"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Ayustara</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='ayustara75.html' }}>
  
      <div className="card-media">
        <img src="ayustara75.jpg" alt="ayustara75"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Ayustara-75</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='barazide.html' }}>
  
      <div className="card-media">
        <img src="barazide.webp" alt="barazide"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Barazide</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='barroz.html' }}>
  
      <div className="card-media">
        <img src="barroz.webp" alt="barroz"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Barroz</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='best4g.html' }}>
  
      <div className="card-media">
        <img src="best4g.png" alt="Best-4G"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Best-4g</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='bigboss.html' }}>
  
      <div className="card-media">
        <img src="bigboss.jpg" alt="Bigboss"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Bigboss</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='bipimain.html' }}>
  
      <div className="card-media">
        <img src="bipimain.webp" alt="Bipimain"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Bipimain</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='boregang.html' }}>
  
      <div className="card-media">
        <img src="boregang.webp" alt="Boregang"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Boregang</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='boregansp.html' }}>
  
      <div className="card-media">
        <img src="boregansp.webp" alt="boregansp"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Boregan SP</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='carbomain.html' }}>
  
      <div className="card-media">
        <img src="carbomain.webp" alt="carbomain"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Carbomain</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='chess.html' }}>
  
      <div className="card-media">
        <img src="chess.jpg" alt="chess"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Chess</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='citigen.html' }}>
  
      <div className="card-media">
        <img src="citigen.webp" alt="citigen"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Citigen</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='confidantextra.html' }}>
  
      <div className="card-media">
        <img src="confidantextra.jpg" alt="confidant extra"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Confidant Extra</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='confidantsuper.html' }}>
  
      <div className="card-media">
        <img src="confidantsuper.jpg" alt="confidant super"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Confidant Super</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='cubax.html' }}>
  
      <div className="card-media">
        <img src="cubax.webp" alt="cubax"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Cubax</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='cubaxpower.html' }}>
  
      <div className="card-media">
        <img src="cubaxpower.webp" alt="cubax power"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Cubax Power</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='cyperpro.html' }}>
  
      <div className="card-media">
        <img src="cyperpro.jpg" alt="cyper pro"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Cyper Pro</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='defender.html' }}>
  
      <div className="card-media">
        <img src="defender.png" alt="defender"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Defender</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='deltramax11.html' }}>
  
      <div className="card-media">
        <img src="deltramax11.jpg" alt="deltramax-11"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>DeltraMax-11</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='diron.html' }}>
  
      <div className="card-media">
        <img src="diron.webp" alt="diron"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Diron</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='enfuse.html' }}>
  
      <div className="card-media">
        <img src="enfuse.webp" alt="enfuse"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Enfuse</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='evicent.html' }}>
  
      <div className="card-media">
        <img src="evicent.webp" alt="evicent"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Evicent</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='fasten.html' }}>
  
      <div className="card-media">
        <img src="fasten.png" alt="fasten"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Fasten</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='fida.html' }}>
  
      <div className="card-media">
        <img src="fida.jpg" alt="fida"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Fida</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='ghotu.html' }}>
  
      <div className="card-media">
        <img src="ghotu.webp" alt="ghotu"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Ghotu</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='harrier.html' }}>
  
      <div className="card-media">
        <img src="harrier.webp" alt="harrier"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Harrier</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='imperial.html' }}>
  
      <div className="card-media">
        <img src="imperial.webp" alt="imperial"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Imperial</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='irma.html' }}>
  
      <div className="card-media">
        <img src="irma.png" alt="irma"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Irma</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='katera.html' }}>
  
      <div className="card-media">
        <img src="katera.jpg" alt="katera"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Katera</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='lakra.html' }}>
  
      <div className="card-media">
        <img src="lakra.webp" alt="lakra"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Lakra</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='lamdex.html' }}>
  
      <div className="card-media">
        <img src="lamdex.webp" alt="lamdex"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Lamdex</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='lamdexsuper.html' }}>
  
      <div className="card-media">
        <img src="lamdexsuper.webp" alt="lamdex super"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Lamdex Super</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='letham.html' }}>
  
      <div className="card-media">
        <img src="letham.jpg" alt="letham"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Letham</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='mahabali.html' }}>
  
      <div className="card-media">
        <img src="mahabali.webp" alt="mahabali"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Mahabali</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='mainstar.html' }}>
  
      <div className="card-media">
        <img src="mainstar.webp" alt="mainstar"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Mainstar</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='mastery.html' }}>
  
      <div className="card-media">
        <img src="mastery.webp" alt="mastery"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Mastery</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='merit.html' }}>
  
      <div className="card-media">
        <img src="merit.jpg" alt="merit"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Merit</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='minectoxtra.html' }}>
  
      <div className="card-media">
        <img src="minectoxtra.jpeg" alt="minecto xtra"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Minecto Xtra</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='monomain.html' }}>
  
      <div className="card-media">
        <img src="monomain.webp" alt="monomain"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Monomain</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='natgen.html' }}>
  
      <div className="card-media">
        <img src="natgen.jpg" alt="natgen"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Natgen</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='nelsa.html' }}>
  
      <div className="card-media">
        <img src="nelsa.jpeg" alt="nelsa"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Nelsa</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='nemagen.html' }}>
  
      <div className="card-media">
        <img src="nemagen.png" alt="nemagen"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Nemagen</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='novoxa.html' }}>
  
      <div className="card-media">
        <img src="novoxa.webp" alt="novoxa"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Novoxa</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='parviz.html' }}>
  
      <div className="card-media">
        <img src="parviz.webp" alt="parviz"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Parviz</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='pedestal.html' }}>
  
      <div className="card-media">
        <img src="pedestal.webp" alt="pedestal"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Pedestal</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='pedestalsupra.html' }}>
  
      <div className="card-media">
        <img src="pedestalsupra.webp" alt="pedestal supra"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Pedestal Supra</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='pegasus.html' }}>
  
      <div className="card-media">
        <img src="pegasus.webp" alt="pegasus"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Pegasus</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='phantom.html' }}>
  
      <div className="card-media">
        <img src="phantom.jpg" alt="phantom"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Phantom</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='plesiva.html' }}>
  
      <div className="card-media">
        <img src="plesiva.webp" alt="plesiva"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Plesiva</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='plethora.html' }}>
  
      <div className="card-media">
        <img src="plethora.webp" alt="plethora"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Plethora</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='polozapp.html' }}>
  
      <div className="card-media">
        <img src="polozapp.webp" alt="polozapp"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Polozapp</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='poros.html' }}>
  
      <div className="card-media">
        <img src="poros.webp" alt="poros"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Poros</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='prado.html' }}>
  
      <div className="card-media">
        <img src="prado.jpg" alt="prado"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Prado</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='prodan.html' }}>
  
      <div className="card-media">
        <img src="prodan.jpg" alt="prodan"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Prodan</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='profigan.html' }}>
  
      <div className="card-media">
        <img src="profigan.webp" alt="profigan"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Profigan</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='profiganplus.html' }}>
  
      <div className="card-media">
        <img src="profiganplus.webp" alt="profiganplus"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Profigan Plus</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='pydon.html' }}>
  
      <div className="card-media">
        <img src="pydon.webp" alt="pydon"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Pydon</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
<article className="card" data-cat="insecticide" onClick={() => { window.location.href='pymax.html' }}>
  
      <div className="card-media">
        <img src="pymax.webp" alt="pymax"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Pymax</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='regal.html' }}>
  
      <div className="card-media">
        <img src="regal.jpg" alt="regal"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Regal</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='reveal.html' }}>
  
      <div className="card-media">
        <img src="reveal.webp" alt="reveal"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Reveal</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='revolt.html' }}>
  
      <div className="card-media">
        <img src="revolt.jpg" alt="revolt"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Revolt</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
     <article className="card" data-cat="insecticide" onClick={() => { window.location.href='ronfen.html' }}>
  
      <div className="card-media">
        <img src="ronfen.png" alt="ronfen"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Ronfen</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
     <article className="card" data-cat="insecticide" onClick={() => { window.location.href='sigalit.html' }}>
  
      <div className="card-media">
        <img src="sigalit.webp" alt="sigalit"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Sigalit</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='simodis.html' }}>
  
      <div className="card-media">
        <img src="simodis.jpg" alt="simodis"
                 style={{"width":"100%","height":"100%","objectFit":"contain"}} />
                   <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Simodis</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='spinosher.html' }}>
  
      <div className="card-media">
  <img src="spinosher.png" alt="spinosher"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
             <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Spinosher</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='spintocon.html' }}>
  
      <div className="card-media">
  <img src="spintocon.png" alt="spintocon"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
             <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Spintocon</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='starwar.html' }}>
  
      <div className="card-media">
  <img src="starwar.jpg" alt="starwar"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
             <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Starwar</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='status.html' }}>
  
      <div className="card-media">
  <img src="status.jpg" alt="status"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
             <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Status</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='suckgan.html' }}>
  
      <div className="card-media">
  <img src="suckgan.webp" alt="suckgan"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
             <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Suckgan</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
     <article className="card" data-cat="insecticide" onClick={() => { window.location.href='sy-505.html' }}>
  
      <div className="card-media">
  <img src="sy-505.jpg" alt="sy-505"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
             <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Sy-505</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='syaceta.html' }}>
  
      <div className="card-media">
  <img src="syaceta.jpg" alt="syaceta"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
             <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Syaceta</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
     <article className="card" data-cat="insecticide" onClick={() => { window.location.href='sycart.html' }}>
  
      <div className="card-media">
  <img src="sycart.jpg" alt="sycart"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
             <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Sycart</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='syema.html' }}>
  
      <div className="card-media">
  <img src="syema.jpg" alt="syema"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
             <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Syema</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
     <article className="card" data-cat="insecticide" onClick={() => { window.location.href='sylambda.html' }}>
  
      <div className="card-media">
  <img src="sylambda.png" alt="sylambda"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
             <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Sylambda</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
     <article className="card" data-cat="insecticide" onClick={() => { window.location.href='sylice.html' }}>
  
      <div className="card-media">
  <img src="sylice.jpg" alt="sylice"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
             <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Sylice</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
     <article className="card" data-cat="insecticide" onClick={() => { window.location.href='symida.html' }}>
  
      <div className="card-media">
  <img src="symida.jpg" alt="symida"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
             <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Symida</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='symidatop.html' }}>
  
      <div className="card-media">
  <img src="symidatop.jpg" alt="symida top"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
             <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Symida Top</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
     <article className="card" data-cat="insecticide" onClick={() => { window.location.href='symono.html' }}>
  
      <div className="card-media">
  <img src="symono.jpg" alt="symono"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
             <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Symono</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
         <article className="card" data-cat="insecticide" onClick={() => { window.location.href='syproc.html' }}>
  
      <div className="card-media">
  <img src="syproc.jpg" alt="syproc"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
             <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Sypro-C</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
      <article className="card" data-cat="insecticide" onClick={() => { window.location.href='sypronil.html' }}>
  
      <div className="card-media">
  <img src="sypronil.jpg" alt="sypronil"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
             <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Sypronil</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='sytara.html' }}>
  
      <div className="card-media">
  <img src="sytara.jpg" alt="sytara"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
             <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Sytara</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='sytara.html' }}>
  
      <div className="card-media">
  <img src="sytara.jpg" alt="sytara"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
             <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Sytara</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='takaf.html' }}>
  
      <div className="card-media">
  <img src="takaf.webp" alt="takaf"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
             <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Takaf</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='tapuz.html' }}>
  
      <div className="card-media">
  <img src="tapuz.webp" alt="tapuz"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
             <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Tapuz</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='throne.html' }}>
  
      <div className="card-media">
  <img src="throne.webp" alt="throne"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
             <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Throne</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='trassid.html' }}>
  
      <div className="card-media">
  <img src="trassid.webp" alt="trassid"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
             <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Trassid</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='virtako.html' }}>
  
      <div className="card-media">
  <img src="virtako.jpeg" alt="virtako"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
             <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Virtako</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
    <article className="card" data-cat="insecticide" onClick={() => { window.location.href='vistara.html' }}>
  
      <div className="card-media">
  <img src="vistara.png" alt="vistara"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
             <div className="tag insecticides" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#e53935"}}>
      <i className="fas fa-bug"></i>
    </div>

      </div>
      <div className="card-body">
        <h3>Vistara</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
























   
    <article className="card" data-cat="herbicide" onClick={() => { window.location.href='24dagan.html' }}>
      <div className="card-media">
  <img src="24dagan.webp" alt="2,4-D Agan"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag herbicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#2e7d32"}}>
  <i className="fa-solid fa-seedling"></i>
</div>

      </div>
      <div className="card-body">
        <h3>2,4-D Agan</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

     <article className="card" data-cat="herbicide" onClick={() => { window.location.href='24dmain.html' }}>
      <div className="card-media">
  <img src="24dmain.webp" alt="2,4-D Main"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />

<div className="tag herbicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#2e7d32"}}>
  <i className="fa-solid fa-seedling"></i>
</div>
      </div>
      <div className="card-body">
        <h3>2,4-D Main</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

     <article className="card" data-cat="herbicide" onClick={() => { window.location.href='agil.html' }}>
      <div className="card-media">
  <img src="agil.webp" alt="Agil"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />

<div className="tag herbicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#2e7d32"}}>
  <i className="fa-solid fa-seedling"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Agil</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

     <article className="card" data-cat="herbicide" onClick={() => { window.location.href='atranex.html' }}>
      <div className="card-media">
  <img src="atranex.webp" alt="Atranex"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />

<div className="tag herbicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#2e7d32"}}>
  <i className="fa-solid fa-seedling"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Atranex</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

     <article className="card" data-cat="herbicide" onClick={() => { window.location.href='ayufit.html' }}>
      <div className="card-media">
  <img src="ayufit.jpg" alt="Ayufit"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />

<div className="tag herbicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#2e7d32"}}>
  <i className="fa-solid fa-seedling"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Ayufit</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

     <article className="card" data-cat="herbicide" onClick={() => { window.location.href='azaro.html' }}>
      <div className="card-media">
  <img src="azaro.png" alt="Azaro"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />

<div className="tag herbicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#2e7d32"}}>
  <i className="fa-solid fa-seedling"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Azaro</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

     <article className="card" data-cat="herbicide" onClick={() => { window.location.href='bestie.html' }}>
      <div className="card-media">
  <img src="bestie.webp" alt="Bestie"   
   style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag herbicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#2e7d32"}}>
  <i className="fa-solid fa-seedling"></i>
</div>

   </div>
      <div className="card-body">
        <h3>Bestie</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

     <article className="card" data-cat="herbicide" onClick={() => { window.location.href='byju.html' }}>
      <div className="card-media">
  <img src="byju.png" alt="Byju"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />

<div className="tag herbicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#2e7d32"}}>
  <i className="fa-solid fa-seedling"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Byju</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

     <article className="card" data-cat="herbicide" onClick={() => { window.location.href='chlormax.html' }}>
      <div className="card-media">
  <img src="chlormax.webp" alt="Chlormax"        
   style={{"width":"100%","height":"100%","objectFit":"contain"}} />

<div className="tag herbicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#2e7d32"}}>
  <i className="fa-solid fa-seedling"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Chlormax</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

     <article className="card" data-cat="herbicide" onClick={() => { window.location.href='clodinagan.html' }}>
      <div className="card-media">
  <img src="clodinagan.webp" alt="Clodinagan"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />

<div className="tag herbicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#2e7d32"}}>
  <i className="fa-solid fa-seedling"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Clodinagan</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

     <article className="card" data-cat="herbicide" onClick={() => { window.location.href='cutout.html' }}>
      <div className="card-media">
  <img src="cutout.jpg" alt="Cutout"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />

<div className="tag herbicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#2e7d32"}}>
  <i className="fa-solid fa-seedling"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Cutout</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

     <article className="card" data-cat="herbicide" onClick={() => { window.location.href='eyal.html' }}>
      <div className="card-media">
  <img src="eyal.jpg" alt="Eyal"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />

<div className="tag herbicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#2e7d32"}}>
  <i className="fa-solid fa-seedling"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Eyal</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

     <article className="card" data-cat="herbicide" onClick={() => { window.location.href='galigan.html' }}>
      <div className="card-media">
  <img src="galigan.webp" alt="Galigan"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />

<div className="tag herbicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#2e7d32"}}>
  <i className="fa-solid fa-seedling"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Galigan</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

     <article className="card" data-cat="herbicide" onClick={() => { window.location.href='headshot.html' }}>
      <div className="card-media">
  <img src="headshot.png" alt="Headshot"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />

<div className="tag herbicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#2e7d32"}}>
  <i className="fa-solid fa-seedling"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Headshot</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

     <article className="card" data-cat="herbicide" onClick={() => { window.location.href='majour.html' }}>
      <div className="card-media">
  <img src="majour.webp" alt="Majour"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />

<div className="tag herbicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#2e7d32"}}>
  <i className="fa-solid fa-seedling"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Majour</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

     <article className="card" data-cat="herbicide" onClick={() => { window.location.href='paranex.html' }}>
      <div className="card-media">
  <img src="paranex.webp" alt="Paranex"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />

<div className="tag herbicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#2e7d32"}}>
  <i className="fa-solid fa-seedling"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Paranex</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

     <article className="card" data-cat="herbicide" onClick={() => { window.location.href='pendifast.html' }}>
      <div className="card-media">
  <img src="pendifast.png" alt="Pendifast"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />

<div className="tag herbicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#2e7d32"}}>
  <i className="fa-solid fa-seedling"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Pendifast</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

     <article className="card" data-cat="herbicide" onClick={() => { window.location.href='penfop.html' }}>
      <div className="card-media">
  <img src="penfop.png" alt="Penfop"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />

<div className="tag herbicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#2e7d32"}}>
  <i className="fa-solid fa-seedling"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Penfop</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

     <article className="card" data-cat="herbicide" onClick={() => { window.location.href='pretigan.html' }}>
      <div className="card-media">
  <img src="pretigan.webp" alt="Pretigan"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />

<div className="tag herbicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#2e7d32"}}>
  <i className="fa-solid fa-seedling"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Pretigan</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

     <article className="card" data-cat="herbicide" onClick={() => { window.location.href='promoxin.html' }}>
      <div className="card-media">
  <img src="promoxin.jpg" alt="Promoxin"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />

<div className="tag herbicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#2e7d32"}}>
  <i className="fa-solid fa-seedling"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Promoxin</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

     <article className="card" data-cat="herbicide" onClick={() => { window.location.href='propifen.html' }}>
      <div className="card-media">
  <img src="propifen.png" alt="Propifen"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />

<div className="tag herbicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#2e7d32"}}>
  <i className="fa-solid fa-seedling"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Propifen</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

     <article className="card" data-cat="herbicide" onClick={() => { window.location.href='propique.html' }}>
      <div className="card-media">
  <img src="propique.png" alt="Propique"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />

<div className="tag herbicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#2e7d32"}}>
  <i className="fa-solid fa-seedling"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Propique</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

     <article className="card" data-cat="herbicide" onClick={() => { window.location.href='qfop10.html' }}>
      <div className="card-media">
  <img src="qfop10.webp" alt="Q-Fop 10"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />

<div className="tag herbicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#2e7d32"}}>
  <i className="fa-solid fa-seedling"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Q-Fop 10</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

     <article className="card" data-cat="herbicide" onClick={() => { window.location.href='right.html' }}>
      <div className="card-media">
  <img src="right.jpg" alt="Right"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />

<div className="tag herbicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#2e7d32"}}>
  <i className="fa-solid fa-seedling"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Right</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

     <article className="card" data-cat="herbicide" onClick={() => { window.location.href='shaked.html' }}>
      <div className="card-media">
  <img src="shaked.webp" alt="Shaked"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />

<div className="tag herbicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#2e7d32"}}>
  <i className="fa-solid fa-seedling"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Shaked</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

     <article className="card" data-cat="herbicide" onClick={() => { window.location.href='syfit.html' }}>
      <div className="card-media">
  <img src="syfit.jpg" alt="Syfit"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />

<div className="tag herbicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#2e7d32"}}>
  <i className="fa-solid fa-seedling"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Syfit</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

     <article className="card" data-cat="herbicide" onClick={() => { window.location.href='symoxone.html' }}>
      <div className="card-media">
  <img src="symoxone.jpg" alt="Symoxone"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />

<div className="tag herbicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#2e7d32"}}>
  <i className="fa-solid fa-seedling"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Symoxone</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

     <article className="card" data-cat="herbicide" onClick={() => { window.location.href='tupro.html' }}>
      <div className="card-media">
  <img src="tupro.png" alt="Tupro"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />

<div className="tag herbicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#2e7d32"}}>
  <i className="fa-solid fa-seedling"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Tupro</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

     <article className="card" data-cat="herbicide" onClick={() => { window.location.href='vypyr.html' }}>
      <div className="card-media">
  <img src="vypyr.webp" alt="Vypyr"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />

<div className="tag herbicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#2e7d32"}}>
  <i className="fa-solid fa-seedling"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Vypyr</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

     <article className="card" data-cat="herbicide" onClick={() => { window.location.href='weedsmash.html' }}>
      <div className="card-media">
  <img src="weedsmash.png" alt="Weed Smash"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />

<div className="tag herbicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#2e7d32"}}>
  <i className="fa-solid fa-seedling"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Weed Smash</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

























      <article className="card" data-cat="fungicide" onClick={() => { window.location.href='amistartop.html' }}>
      <div className="card-media">
  <img src="amistartop.jpg" alt="Amistar top"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />

<div className="tag fungicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#6a1b9a"}}>
  <i className="fa-solid fa-virus"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Amistar Top</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

      <article className="card" data-cat="fungicide" onClick={() => { window.location.href='ayustodia.html' }}>
      <div className="card-media">
  <img src="ayustodia.jpg" alt="Ayustodia"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
           <div className="tag fungicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#6a1b9a"}}>
  <i className="fa-solid fa-virus"></i>

    </div>
      </div>
      <div className="card-body">
        <h3>Ayustodia</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

      <article className="card" data-cat="fungicide" onClick={() => { window.location.href='blasil.html' }}>
      <div className="card-media">
  <img src="blasil.webp" alt="Blasil"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />

<div className="tag fungicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#6a1b9a"}}>
  <i className="fa-solid fa-virus"></i>      </div>
      </div>
      <div className="card-body">
        <h3>Blasil</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

      <article className="card" data-cat="fungicide" onClick={() => { window.location.href='blastogan.html' }}>
      <div className="card-media">
  <img src="blastogan.webp" alt="Blastogan"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />

<div className="tag fungicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#6a1b9a"}}>
  <i className="fa-solid fa-virus"></i>
</div>
        </div>
      <div className="card-body">
        <h3>Blastogan</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

      <article className="card" data-cat="fungicide" onClick={() => { window.location.href='cliff.html' }}>
      <div className="card-media">
  <img src="cliff.jpg" alt="Cliff"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag fungicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#6a1b9a"}}>
  <i className="fa-solid fa-virus"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Cliff</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

      <article className="card" data-cat="fungicide" onClick={() => { window.location.href='coltaf.html' }}>
      <div className="card-media">
  <img src="coltaf.jpeg" alt="Coltaf"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />

<div className="tag fungicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#6a1b9a"}}>
  <i className="fa-solid fa-virus"></i>
</div>
           </div>
      <div className="card-body">
        <h3>Coltaf</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

      <article className="card" data-cat="fungicide" onClick={() => { window.location.href='constop.html' }}>
      <div className="card-media">
  <img src="constop.jpg" alt="Constop"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
           <div className="tag fungicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#6a1b9a"}}>
  <i className="fa-solid fa-virus"></i>
           </div>

      </div>
      <div className="card-body">
        <h3>Constop</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

      <article className="card" data-cat="fungicide" onClick={() => { window.location.href='custodia.html' }}>
      <div className="card-media">
  <img src="custodia.webp" alt="Custodia"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag fungicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#6a1b9a"}}>
  <i className="fa-solid fa-virus"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Custodia</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

      <article className="card" data-cat="fungicide" onClick={() => { window.location.href='defender.html' }}>
      <div className="card-media">
  <img src="defender.png" alt="Defender"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag fungicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#6a1b9a"}}>
  <i className="fa-solid fa-virus"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Defender</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

      <article className="card" data-cat="fungicide" onClick={() => { window.location.href='graliz.html' }}>
      <div className="card-media">
  <img src="graliz.png" alt="Graliz"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag fungicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#6a1b9a"}}>
  <i className="fa-solid fa-virus"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Graliz</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
      <article className="card" data-cat="fungicide" onClick={() => { window.location.href='isomain.html' }}>
      <div className="card-media">
  <img src="isomain.webp" alt="Graliz"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag fungicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#6a1b9a"}}>
  <i className="fa-solid fa-virus"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Isomain</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

      <article className="card" data-cat="fungicide" onClick={() => { window.location.href='kavachflo.html' }}>
      <div className="card-media">
  <img src="kavachflo.jpg" alt="Kavachflo"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag fungicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#6a1b9a"}}>
  <i className="fa-solid fa-virus"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Kavachflo</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

      <article className="card" data-cat="fungicide" onClick={() => { window.location.href='macoban-c.html' }}>
      <div className="card-media">
  <img src="macoban-c.webp" alt="Macoban-C"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag fungicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#6a1b9a"}}>
  <i className="fa-solid fa-virus"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Macoban-C</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

      <article className="card" data-cat="fungicide" onClick={() => { window.location.href='mupa.html' }}>
      <div className="card-media">
  <img src="mupa.jpg" alt="Mupa"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag fungicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#6a1b9a"}}>
  <i className="fa-solid fa-virus"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Mupa</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

      <article className="card" data-cat="fungicide" onClick={() => { window.location.href='natcore.html' }}>
      <div className="card-media">
  <img src="natcore.jpg" alt="Natcore"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag fungicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#6a1b9a"}}>
  <i className="fa-solid fa-virus"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Natcore</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

      <article className="card" data-cat="fungicide" onClick={() => { window.location.href='natpearl.html' }}>
      <div className="card-media">
  <img src="natpearl.jpg" alt="Natpearl"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag fungicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#6a1b9a"}}>
  <i className="fa-solid fa-virus"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Natpearl</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

    <article className="card" data-cat="fungicide" onClick={() => { window.location.href='nimrod.html' }}>
      <div className="card-media">
  <img src="nimrod.webp" alt="Nimrod"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag fungicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#6a1b9a"}}>
  <i className="fa-solid fa-virus"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Nimrod</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

       <article className="card" data-cat="fungicide" onClick={() => { window.location.href='orius.html' }}>
      <div className="card-media">
  <img src="orius.webp" alt="Orius"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag fungicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#6a1b9a"}}>
  <i className="fa-solid fa-virus"></i>
</div>
  
      </div>
      <div className="card-body">
        <h3>Orius</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

       <article className="card" data-cat="fungicide" onClick={() => { window.location.href='shamir.html' }}>
      <div className="card-media">
  <img src="shamir.webp" alt="Shamir"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
           <div className="tag fungicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#6a1b9a"}}>
  <i className="fa-solid fa-virus"></i>
</div>

      </div>
      <div className="card-body">
        <h3>Shamir</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

       <article className="card" data-cat="fungicide" onClick={() => { window.location.href='syhexa.html' }}>
      <div className="card-media">
  <img src="syhexa.jpg" alt="Syhexa"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag fungicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#6a1b9a"}}>
  <i className="fa-solid fa-virus"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Syhexa</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

       <article className="card" data-cat="fungicide" onClick={() => { window.location.href='syodia.html' }}>
      <div className="card-media">
  <img src="syodia.jpg" alt="Syodia"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag fungicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#6a1b9a"}}>
  <i className="fa-solid fa-virus"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Syodia</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

       <article className="card" data-cat="fungicide" onClick={() => { window.location.href='syqat.html' }}>
      <div className="card-media">
  <img src="syqat.jpg" alt="Syqat"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag fungicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#6a1b9a"}}>
  <i className="fa-solid fa-virus"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Syqat</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

       <article className="card" data-cat="fungicide" onClick={() => { window.location.href='sysafe.html' }}>
      <div className="card-media">
  <img src="sysafe.jpg" alt="Sysafe"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag fungicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#6a1b9a"}}>
  <i className="fa-solid fa-virus"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Sysafe</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

       <article className="card" data-cat="fungicide" onClick={() => { window.location.href='tebuca.html' }}>
      <div className="card-media">
  <img src="tebuca.webp" alt="Tebuca"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag fungicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#6a1b9a"}}>
  <i className="fa-solid fa-virus"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Tebuca</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

       <article className="card" data-cat="fungicide" onClick={() => { window.location.href='tricolor.html' }}>
      <div className="card-media">
  <img src="tricolor.png" alt="Tricolor"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag fungicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#6a1b9a"}}>
  <i className="fa-solid fa-virus"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Tricolor</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

       <article className="card" data-cat="fungicide" onClick={() => { window.location.href='warden.html' }}>
      <div className="card-media">
  <img src="warden.png" alt="Warden"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag fungicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#6a1b9a"}}>
  <i className="fa-solid fa-virus"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Warden</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

       <article className="card" data-cat="fungicide" onClick={() => { window.location.href='wardenextra.html' }}>
      <div className="card-media">
  <img src="wardenextra.png" alt="Warden Extra"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag fungicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#6a1b9a"}}>
  <i className="fa-solid fa-virus"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Warden Extra</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

       <article className="card" data-cat="fungicide" onClick={() => { window.location.href='zamir.html' }}>
      <div className="card-media">
  <img src="zamir.webp" alt="Zamir"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag fungicide" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#6a1b9a"}}>
  <i className="fa-solid fa-virus"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Zamir</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

    











    
 <article className="card" data-cat="organic" onClick={() => { window.location.href='agrogengold.html' }}>
      <div className="card-media">
  <img src="agrogengold.webp" alt="Agrogen Gold"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
         <div className="tag organic" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#388e3c"}}>
  <i className="fa-solid fa-leaf"></i>
</div>


      </div>
      <div className="card-body">
        <h3>Agrogen Gold</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

    <article className="card" data-cat="organic" onClick={() => { window.location.href='agrogenmaxpro.html' }}>
      <div className="card-media">
  <img src="agrogenmaxpro.webp" alt="Agrogenmax Pro"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag organic" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#388e3c"}}>
  <i className="fa-solid fa-leaf"></i>
</div>



           </div>
      <div className="card-body">
        <h3>Agrogenmax Pro</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

    <article className="card" data-cat="organic" onClick={() => { window.location.href='agrostar.html' }}>
      <div className="card-media">
  <img src="agrostar.jpg" alt="Agrostar"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag organic" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#388e3c"}}>
  <i className="fa-solid fa-leaf"></i>
</div>

      </div>
      <div className="card-body">
        <h3>Agrostar</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

    <article className="card" data-cat="organic" onClick={() => { window.location.href='bactolan.html' }}>
      <div className="card-media">
  <img src="bactolan.jpg" alt="Bactolan"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />

<div className="tag organic" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#388e3c"}}>
  <i className="fa-solid fa-leaf"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Bactolan</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

    <article className="card" data-cat="organic" onClick={() => { window.location.href='borogen.html' }}>
      <div className="card-media">
  <img src="borogen.webp" alt="Borogen"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
  <div className="tag organic" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#388e3c"}}>
  <i className="fa-solid fa-leaf"></i>
</div>


      </div>
      <div className="card-body">
        <h3>Borogen</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

    <article className="card" data-cat="organic" onClick={() => { window.location.href='boron.html' }}>
      <div className="card-media">
  <img src="boron.jpg" alt="Boron"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag organic" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#388e3c"}}>
  <i className="fa-solid fa-leaf"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Boron</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

      <article className="card" data-cat="organic" onClick={() => { window.location.href='cmb.html' }}>
      <div className="card-media">
  <img src="cmb.jpg" alt="CMB"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag organic" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#388e3c"}}>
  <i className="fa-solid fa-leaf"></i>
</div>
      </div>
      <div className="card-body">
        <h3>CMB</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

      <article className="card" data-cat="organic" onClick={() => { window.location.href='copper.html' }}>
      <div className="card-media">
  <img src="copper.jpg" alt="Copper"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag organic" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#388e3c"}}>
  <i className="fa-solid fa-leaf"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Copper</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

      <article className="card" data-cat="organic" onClick={() => { window.location.href='doublestrong.html' }}>
      <div className="card-media">
  <img src="doublestrong.webp" alt="Double Strong"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag organic" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#388e3c"}}>
  <i className="fa-solid fa-leaf"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Double Strong</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

      <article className="card" data-cat="organic" onClick={() => { window.location.href='exogen.html' }}>
      <div className="card-media">
  <img src="exogen.webp" alt="Exogen"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag organic" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#388e3c"}}>
  <i className="fa-solid fa-leaf"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Exogen</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
      <article className="card" data-cat="organic" onClick={() => { window.location.href='ferrous.html' }}>
      <div className="card-media">
  <img src="ferrous.jpg" alt="Ferrous"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag organic" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#388e3c"}}>
  <i className="fa-solid fa-leaf"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Ferrous</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>
      <article className="card" data-cat="organic" onClick={() => { window.location.href='flora99.html' }}>
      <div className="card-media">
  <img src="flora99.webp" alt="Flora-99"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag organic" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#388e3c"}}>
  <i className="fa-solid fa-leaf"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Flora-99</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

      <article className="card" data-cat="organic" onClick={() => { window.location.href='gencolmg.html' }}>
      <div className="card-media">
  <img src="gencolmg.webp" alt="Gencol-Mg"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag organic" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#388e3c"}}>
  <i className="fa-solid fa-leaf"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Gencol-Mg</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

      <article className="card" data-cat="organic" onClick={() => { window.location.href='genpower.html' }}>
      <div className="card-media">
  <img src="genpower.webp" alt="Gen Power"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag organic" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#388e3c"}}>
  <i className="fa-solid fa-leaf"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Gen Power</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

      <article className="card" data-cat="organic" onClick={() => { window.location.href='gentonik.html' }}>
      <div className="card-media">
  <img src="gentonik.webp" alt="Gentonik"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag organic" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#388e3c"}}>
  <i className="fa-solid fa-leaf"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Gentonik</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

      <article className="card" data-cat="organic" onClick={() => { window.location.href='gmag.html' }}>
      <div className="card-media">
  <img src="gmag.webp" alt="G-Mag"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag organic" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#388e3c"}}>
  <i className="fa-solid fa-leaf"></i>
</div>
      </div>
      <div className="card-body">
        <h3>G-Mag</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

      <article className="card" data-cat="organic" onClick={() => { window.location.href='gmyte.html' }}>
      <div className="card-media">
  <img src="gmyte.webp" alt="G-Myte"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag organic" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#388e3c"}}>
  <i className="fa-solid fa-leaf"></i>
</div>
      </div>
      <div className="card-body">
        <h3>G-Myte</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

      <article className="card" data-cat="organic" onClick={() => { window.location.href='gtmax.html' }}>
      <div className="card-media">
  <img src="gtmax.webp" alt="Gt-Max"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag organic" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#388e3c"}}>
  <i className="fa-solid fa-leaf"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Gt-Max</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

      <article className="card" data-cat="organic" onClick={() => { window.location.href='help.html' }}>
      <div className="card-media">
  <img src="help.jpg" alt="Help"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag organic" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#388e3c"}}>
  <i className="fa-solid fa-leaf"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Help</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

      <article className="card" data-cat="organic" onClick={() => { window.location.href='npk.html' }}>
      <div className="card-media">
  <img src="npk.jpg" alt="NPK"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag organic" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#388e3c"}}>
  <i className="fa-solid fa-leaf"></i>
</div>
      </div>
      <div className="card-body">
        <h3>NPK</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

      <article className="card" data-cat="organic" onClick={() => { window.location.href='nutrimaxplus.html' }}>
      <div className="card-media">
  <img src="nutrimaxplus.webp" alt="Nutrimax Plus"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag organic" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#388e3c"}}>
  <i className="fa-solid fa-leaf"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Nutrimax Plus</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

      <article className="card" data-cat="organic" onClick={() => { window.location.href='nutripearl.html' }}>
      <div className="card-media">
  <img src="nutripearl.jpg" alt="Nutripearl"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag organic" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#388e3c"}}>
  <i className="fa-solid fa-leaf"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Nutripearl</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

      <article className="card" data-cat="organic" onClick={() => { window.location.href='protector.html' }}>
      <div className="card-media">
  <img src="protector.jpg" alt="Protector"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag organic" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#388e3c"}}>
  <i className="fa-solid fa-leaf"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Protector</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

      <article className="card" data-cat="organic" onClick={() => { window.location.href='sky.html' }}>
      <div className="card-media">
  <img src="sky.jpg" alt="Sky"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag organic" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#388e3c"}}>
  <i className="fa-solid fa-leaf"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Sky</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

      <article className="card" data-cat="organic" onClick={() => { window.location.href='smash.html' }}>
      <div className="card-media">
  <img src="smash.jpg" alt="Smash"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag organic" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#388e3c"}}>
  <i className="fa-solid fa-leaf"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Smash</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

      <article className="card" data-cat="organic" onClick={() => { window.location.href='sprint.html' }}>
      <div className="card-media">
  <img src="sprint.jpg" alt="Sprint"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag organic" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#388e3c"}}>
  <i className="fa-solid fa-leaf"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Sprint</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

      <article className="card" data-cat="organic" onClick={() => { window.location.href='talwargold.html' }}>
      <div className="card-media">
  <img src="talwargold.webp" alt="Talwar Gold"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag organic" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#388e3c"}}>
  <i className="fa-solid fa-leaf"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Talwar Gold</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

      <article className="card" data-cat="organic" onClick={() => { window.location.href='terror.html' }}>
      <div className="card-media">
  <img src="terror.jpg" alt="Terror"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag organic" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#388e3c"}}>
  <i className="fa-solid fa-leaf"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Terror</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

      <article className="card" data-cat="organic" onClick={() => { window.location.href='varsha.html' }}>
      <div className="card-media">
  <img src="varsha.jpg" alt="Varsha"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag organic" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#388e3c"}}>
  <i className="fa-solid fa-leaf"></i>
</div>
      </div>
      <div className="card-body">
        <h3>Varsha</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>







 <article className="card" data-cat="trap" onClick={() => { window.location.href='stickypesttrap.html' }}>
      <div className="card-media">
  <img src="yellowsticky.jpg" alt="Yellow Sticky Trap"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag pest-trap" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#f57c00"}}>
  <i className="fa-solid fa-bug-slash"></i>
</div>

      </div>
      <div className="card-body">
        <h3>Yellow Sticky Pest Trap</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

    <article className="card" data-cat="trap" onClick={() => { window.location.href='solarlight.html' }}>
      <div className="card-media">
  <img src="solarlight.webp" alt="Solar Light Pesttrap"
           style={{"width":"100%","height":"100%","objectFit":"contain"}} />
<div className="tag pest-trap" style={{"position":"absolute","top":"8px","left":"8px","fontSize":"20px","color":"#f57c00"}}>
  <i className="fa-solid fa-bug-slash"></i>
</div>

      </div>
      <div className="card-body">
        <h3>Solar Light Pesttrap</h3>
        <div className="meta">
          <button className="quick">Quick View</button>
        </div>
      </div>
    </article>

    
    {/* Add more items as needed, just set data-cat */}
  </div>
</section>

{/* ========== MODAL ========== */}
<div className="modal" id="modal">
  <div className="modal-card">
    <button className="close" id="closeModal" aria-label="Close"><i className="fa-solid fa-xmark"></i></button>
    <div className="modal-media"><img id="mImg" src="" alt="" /></div>
    <div className="modal-body">
      <h3 id="mTitle">Product</h3>
      <p id="mDesc">Details will appear here. Provide composition, dose, target pests/diseases, and safety notes.</p>
      <div className="modal-actions">
        <a className="btn" href="#contact"><i className="fa-solid fa-phone"></i> Contact</a>
        <a className="btn secondary" href="#enquiry"><i className="fa-solid fa-file-signature"></i> Get a Quote</a>
      </div>
    </div>
  </div>
</div>

<div id="react-footer"></div>





    </div>
  );
};

export default ProductsPage;
