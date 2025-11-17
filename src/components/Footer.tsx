import React from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const whatsappNumber = '523311090460';
  const whatsappMessage = encodeURIComponent('Hola, me gustaría obtener más información sobre sus servicios.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SmartPeace</h3>
            <p className="text-gray-400 mb-6">
              Transformando espacios con soluciones inteligentes para un futuro más seguro y eficiente.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61573639738913"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Síguenos en Facebook"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://www.instagram.com/smartpeacemx/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Síguenos en Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Contáctanos por WhatsApp"
              >
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Inicio</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Servicios</a></li>
              <li><a href="#sectors" className="text-gray-400 hover:text-white transition-colors duration-300">Sectores</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Automatización Inteligente</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Seguridad Integral</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Redes y Conectividad</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Consultoría y Soporte</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin size={20} className="text-[#5CB85C]" />
                Hidalgo 216, Zapopan, CP.45200
              </li>
              <li className="flex items-center gap-2">
                <Phone size={20} className="text-[#5CB85C]" />
                +52 33 1109 0460
              </li>
              <li className="flex items-center gap-2">
                <Mail size={20} className="text-[#5CB85C]" />
                froylan@smartpeace.mx
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} SmartPeace. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors duration-300">Política de Privacidad</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Términos y Condiciones</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;