
import React, { useEffect } from 'react';
import './ProductsPage.css';

const ProductsPage = () => {
  useEffect(() => {
    // Basic filter logic
    const chips = document.querySelectorAll('.chip');
    const cards = document.querySelectorAll('.card');

    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const filter = chip.getAttribute('data-filter');
        cards.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-cat') === filter) {
            card.style.display = 'block';
            setTimeout(() => card.classList.add('visible'), 10);
          } else {
            card.style.display = 'none';
            card.classList.remove('visible');
          }
        });
      });
    });

    // Make cards initially visible
    cards.forEach(card => card.classList.add('visible'));
  }, []);

  return (
    <div className="products-page-container">
      


     


{/* ========== HERO ========== */}
<section className="hero">
  <div className="container hero-inner">

    <div className="left">
      <span className="kicker"><i className="fa-solid fa-seedling"></i> Multi-Product Excellence</span>
      <h1>Precision Inputs & Smart Spraying for Higher Yields</h1>
      <p>
        From insecticides, herbicides, fungicides and organic nutrients to pest traps and
        <strong>drone spraying services</strong> — Agropest powers farmers across Telangana & Andhra Pradesh with
        trusted, top-brand products.
      </p>
      <div className="cta-row">
        <a className="btn" href="#showcase"><i className="fa-solid fa-basket-shopping"></i> Browse Products</a>
        <a className="btn secondary" href="#filters"><i className="fa-solid fa-filter"></i> Quick Filters</a>
      </div>
    </div>

    <div className="orbit-wrap" aria-hidden="true">
      <div className="orbit" id="orbit">
        {/* 8 nodes around the ring. Replace src with your images */}
        <figure className="node" style={{"--i": 0}}>
          <img src="https://images.unsplash.com/photo-1509223197845-458d87318791" alt="" />
          <span>Insecticides</span>
        </figure>
        <figure className="node" style={{"--i": 1}}>
          <img src="https://images.unsplash.com/photo-1509223197845-458d87318791" alt="" />
          <span>Herbicides</span>
        </figure>
        <figure className="node" style={{"--i": 2}}>
          <img src="https://th.bing.com/th/id/OIP.epIO5vOnf2kiKDvzPkk0wgHaEW?w=292&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
          <span>Fungicides</span>
        </figure>
        <figure className="node" style={{"--i": 3}}>
          <img src="https://th.bing.com/th/id/OIP.Y02qGYlW-m4bSq8sVrAHVAHaE7?w=241&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
          <span>Organic Nutrients</span>
        </figure>
        <figure className="node" style={{"--i": 4}}>
          <img src="data:image/webp;base64,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" alt="" />

          <span>Pesticides</span>
        </figure>
        <figure className="node" style={{"--i": 5}}>
          <img src="https://images.unsplash.com/photo-1606760227091-3dd870d97d4e?q=80&w=800&auto=format&fit=crop" alt="" />
          <span>Drone Service</span>
        </figure>
        <figure className="node" style={{"--i": 6}}>
          <img src="https://th.bing.com/th/id/OIP.q7527ASvEDqtjIOH1erhrAHaE7?w=190&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="" />
          <span>Soil Health</span>
        </figure>
        <figure className="node" style={{"--i": 7}}>
          <img src="https://www.bing.com/th/id/OIP.SOjasANluFt--FvydZJVZAHaFA?w=239&h=211&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
          <span>Drone</span>
        </figure>
      </div>
    </div>

  </div>

  {/* Scrolling ticker */}
  <div className="ticker">
    <div className="ticker-track">
      <span><i className="fa-solid fa-bug"></i> Insecticides</span>
      <span><i className="fa-solid fa-leaf"></i> Herbicides</span>
      <span><i className="fa-solid fa-bacteria"></i> Fungicides</span>
      <span><i className="fa-solid fa-droplet"></i> Organic Nutrients</span>
      <span><i className="fa-solid fa-spider"></i> Pest Traps</span>
      <span><i className="fa-solid fa-helicopter"></i> Drone Spraying</span>
      <span><i className="fa-solid fa-bug"></i> Insecticides</span>
      <span><i className="fa-solid fa-leaf"></i> Herbicides</span>
      <span><i className="fa-solid fa-bacteria"></i> Fungicides</span>
      <span><i className="fa-solid fa-seeds"></i> Organic Nutrients</span>
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
