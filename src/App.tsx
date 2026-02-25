import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Services } from './components/Services';
import { Methodology } from './components/Methodology';
import { Roadmap } from './components/Roadmap';
import { Manifesto } from './components/Manifesto';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F8FAFC] font-sans">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Services />
        <Methodology />
        <Roadmap />
        <Manifesto />
      </main>
      <Footer />
    </div>
  );
}

