import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const whatsappNumber = '523311090460';
  const whatsappMessage = encodeURIComponent('Hola, me gustaría obtener más información sobre sus servicios.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <>
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
                  className="h-7 sm:h-8 md:h-10 w-auto"
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
                className={`p-3 rounded-md transition-colors active:scale-95 ${
                  isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'
                }`}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile menu sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <img
              src="/logo letras.png"
              alt="SmartPeace"
              className="h-8 w-auto"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors active:scale-95"
              aria-label="Cerrar menú"
            >
              <X size={28} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto py-6">
            <div className="space-y-2 px-4">
              <a
                href="/"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3.5 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors font-medium text-lg active:scale-98"
              >
                Inicio
              </a>
              <a
                href="#services"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3.5 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors font-medium text-lg active:scale-98"
              >
                Servicios
              </a>
              <a
                href="#sectors"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3.5 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors font-medium text-lg active:scale-98"
              >
                Sectores
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3.5 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors font-medium text-lg active:scale-98"
              >
                Contacto
              </a>
            </div>
          </nav>

          <div className="p-6 border-t border-gray-200">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-green-600 text-white hover:bg-green-700 rounded-xl transition-all font-semibold text-lg shadow-lg active:scale-95"
            >
              <MessageCircle size={24} />
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;