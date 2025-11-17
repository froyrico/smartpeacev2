import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Services from './components/Services';
import Sectors from './components/Sectors';
import TrustIndicators from './components/TrustIndicators';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import CorporativoPage from './pages/CorporativoPage';
import ResidencialPage from './pages/ResidencialPage';
import InstitucionalPage from './pages/InstitucionalPage';

function HomePage() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="overflow-x-hidden">
        <article>
          <Hero />
          <Services />
          <Sectors />
          <TrustIndicators />
          <ContactForm />
        </article>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 overflow-x-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sectores/corporativo" element={<><CorporativoPage /><FloatingWhatsApp /></>} />
          <Route path="/sectores/residencial" element={<><ResidencialPage /><FloatingWhatsApp /></>} />
          <Route path="/sectores/institucional" element={<><InstitucionalPage /><FloatingWhatsApp /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;