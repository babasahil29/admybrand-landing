import React from 'react';
import './App.css';

// Import components
import { Navigation } from './components/ui/Navigation';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Pricing from './components/sections/Pricing';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

