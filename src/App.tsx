import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import InvestmentBanking from './components/InvestmentBanking';
import Trading from './components/Trading';
import Projects from './components/Projects';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <InvestmentBanking />
      <Trading />
      <Projects />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;