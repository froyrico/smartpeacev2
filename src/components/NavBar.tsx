import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Determinar si estamos en la página de inicio o en una página de sector
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappNumber = '523311090460';
  const whatsappMessage = encodeURIComponent('Hola, me gustaría obtener más información sobre sus servicios.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled || !isHomePage ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img
                src="/logo letras.png"
                alt="SmartPeace"
                className="h-8 md:h-10 w-auto"
              />
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className={`nav-link ${!isScrolled && isHomePage && 'text-white hover:text-white'}`}>Inicio</a>
            <a href="#services" className={`nav-link ${!isScrolled && isHomePage && 'text-white hover:text-white'}`}>Servicios</a>
            <a href="#sectors" className={`nav-link ${!isScrolled && isHomePage && 'text-white hover:text-white'}`}>Sectores</a>
            <a href="#contact" className={`nav-link ${!isScrolled && isHomePage && 'text-white hover:text-white'}`}>Contacto</a>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-green-600 hover:bg-green-700 border-0 flex items-center gap-2"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors ${
                isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-md shadow-lg mt-2">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Inicio</a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Servicios</a>
            <a href="#sectors" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Sectores</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Contacto</a>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 bg-green-600 text-white hover:bg-green-700 rounded-md flex items-center gap-2 justify-center"
            >
              <MessageCircle size={20} />
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;