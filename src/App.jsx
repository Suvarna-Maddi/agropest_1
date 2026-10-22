import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AmbientBackground } from './components/AmbientBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategorySection } from './components/CategorySection';
import { ServicesSection } from './components/ServicesSection';
import { ProductsSection } from './components/ProductsSection';
import { AboutUs } from './components/AboutUs';
import { StoreSection } from './components/StoreSection';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';

// Auto-scroll to top whenever URL changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleSelectCategory = (catFilter) => {
    setSelectedCategory(catFilter);
    const elem = document.getElementById('products');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const Home = () => (
    <main>
      <Hero />
      <AboutUs />
      <ServicesSection />
      <CategorySection onSelectCategory={handleSelectCategory} />
      <ProductsSection activeCategory={selectedCategory} setActiveCategory={setSelectedCategory} />
      <StoreSection />
    </main>
  );

  return (
    <div className="app-root">
      <ScrollToTop />
      <AmbientBackground />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/aboutus.html" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services.html" element={<ServicesPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products.html" element={<ProductsPage />} />
        <Route path="/insecticides.html" element={<ProductsPage category="insecticide" />} />
        <Route path="/herbicides.html" element={<ProductsPage category="herbicide" />} />
        <Route path="/fungicides.html" element={<ProductsPage category="fungicide" />} />
        <Route path="/nutrients.html" element={<ProductsPage category="organic" />} />
        <Route path="/traps.html" element={<ProductsPage category="trap" />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
      <Chatbot />
    </div>
  );
}
