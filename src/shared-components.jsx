import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import AboutPage from './pages/AboutPage';
import './index.css';

const navbarRoot = document.getElementById('react-navbar');
if (navbarRoot) {
  ReactDOM.createRoot(navbarRoot).render(
    <React.StrictMode>
      <Navbar />
    </React.StrictMode>
  );
}

const footerRoot = document.getElementById('react-footer');
if (footerRoot) {
  ReactDOM.createRoot(footerRoot).render(
    <React.StrictMode>
      <Footer />
    </React.StrictMode>
  );
}

const aboutPageRoot = document.getElementById('react-about-page');
if (aboutPageRoot) {
  ReactDOM.createRoot(aboutPageRoot).render(
    <React.StrictMode>
      <AboutPage />
    </React.StrictMode>
  );
}
