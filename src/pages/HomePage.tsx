import React from 'react';
import { Hero } from '../components/Hero';
import { Products } from '../components/Products';
import { Services } from '../components/Services';
import { Methodology } from '../components/Methodology';
import { Roadmap } from '../components/Roadmap';
import { Manifesto } from '../components/Manifesto';

export function HomePage() {
  return (
    <>
      <Hero />
      <Products />
      <Services />
      <Methodology />
      <Roadmap />
      <Manifesto />
    </>
  );
}
