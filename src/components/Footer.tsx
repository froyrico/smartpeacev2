import React from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const whatsappNumber = '523311090460';
  const whatsappMessage = encodeURIComponent('Hola, me gustaría obtener más información sobre sus servicios.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <footer className="bg-gray-900 text-white py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">SmartPeace</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
              Transformando espacios con soluciones inteligentes para un futuro más seguro y eficiente.
            </p>
            <div className="flex space-x-4 sm:space-x-5">
              <a
                href="https://www.facebook.com/profile.php?id=61573639738913"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 p-2 hover:bg-gray-800 rounded-lg active:scale-95"
                aria-label="Síguenos en Facebook"
              >
                <Facebook size={26} />
              </a>
              <a
                href="https://www.instagram.com/smartpeacemx/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 p-2 hover:bg-gray-800 rounded-lg active:scale-95"
                aria-label="Síguenos en Instagram"
              >
                <Instagram size={26} />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 p-2 hover:bg-gray-800 rounded-lg active:scale-95"
                aria-label="Contáctanos por WhatsApp"
              >
                <MessageCircle size={26} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-300 inline-block py-1 active:scale-95">Inicio</a></li>
              <li><a href="#services" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-300 inline-block py-1 active:scale-95">Servicios</a></li>
              <li><a href="#sectors" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-300 inline-block py-1 active:scale-95">Sectores</a></li>
              <li><a href="#contact" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-300 inline-block py-1 active:scale-95">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Servicios</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              <li><a href="#services" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-300 inline-block py-1 active:scale-95">Automatización Inteligente</a></li>
              <li><a href="#services" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-300 inline-block py-1 active:scale-95">Seguridad Integral</a></li>
              <li><a href="#services" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-300 inline-block py-1 active:scale-95">Redes y Conectividad</a></li>
              <li><a href="#services" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-300 inline-block py-1 active:scale-95">Consultoría y Soporte</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contacto</h4>
            <ul className="space-y-3 sm:space-y-4 text-gray-400">
              <li>
                <a
                  href="https://maps.google.com/?q=Hidalgo+216+Zapopan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 sm:gap-3 hover:text-white transition-colors active:scale-95 p-1 -m-1 rounded"
                >
                  <MapPin size={18} className="text-[#5CB85C] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm">Hidalgo 216, Zapopan, CP.45200</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+523311090460"
                  className="flex items-center gap-2 sm:gap-3 hover:text-white transition-colors active:scale-95 p-1 -m-1 rounded"
                >
                  <Phone size={18} className="text-[#5CB85C] flex-shrink-0" />
                  <span className="text-xs sm:text-sm">+52 33 1109 0460</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:froylan@smartpeace.mx"
                  className="flex items-center gap-2 sm:gap-3 hover:text-white transition-colors active:scale-95 p-1 -m-1 rounded"
                >
                  <Mail size={18} className="text-[#5CB85C] flex-shrink-0" />
                  <span className="text-xs sm:text-sm break-all">froylan@smartpeace.mx</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 sm:mt-10 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-gray-400 text-xs sm:text-sm">
            <p className="text-center md:text-left">&copy; {new Date().getFullYear()} SmartPeace. Todos los derechos reservados.</p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
              <a href="#" className="hover:text-white transition-colors duration-300 py-1 active:scale-95">Política de Privacidad</a>
              <a href="#" className="hover:text-white transition-colors duration-300 py-1 active:scale-95">Términos y Condiciones</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;