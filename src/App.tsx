import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CroquiPage } from './pages/CroquiPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-bg text-text font-sans">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/croqui" element={<CroquiPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

