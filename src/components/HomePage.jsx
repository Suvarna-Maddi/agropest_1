import React from 'react';
import { Hero } from './Hero';
import { ServicesSection } from './ServicesSection';
import { CategorySection } from './CategorySection';
import { ProductsSection } from './ProductsSection';
import { StoreSection } from './StoreSection';

export const HomePage = () => (
  <>
    <Hero />
    <ServicesSection />
    <CategorySection />
    <ProductsSection />
    <StoreSection />
  </>
);
