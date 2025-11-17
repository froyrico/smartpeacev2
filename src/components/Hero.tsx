import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const Hero = () => {
  const whatsappNumber = '523311090460';
  const whatsappMessage = encodeURIComponent('Hola, me gustaría obtener más información sobre sus servicios.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-fadeIn"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          }}
          role="img"
          aria-label="Sistemas de seguridad inteligente y automatización"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fadeIn">
          Transforma tu espacio en un entorno<br />
          <span className="text-secondary">inteligente, seguro y eficiente</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          Mejora tu propiedad con soluciones tecnológicas de vanguardia que aumentan la seguridad, el confort y la eficiencia energética en Guadalajara.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          <a 
            href="#contact" 
            className="btn-primary group w-full sm:w-auto"
            aria-label="Solicitar cotización para servicios de seguridad y automatización"
          >
            Solicitar Cotización
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </a>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary group w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white border-0"
            aria-label="Contactar por WhatsApp"
          >
            Contactar por WhatsApp
            <MessageCircle className="group-hover:rotate-12 transition-transform" size={20} />
          </a>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-white animate-fadeIn" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">100+</div>
            <div className="text-gray-300">Proyectos Exitosos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">98%</div>
            <div className="text-gray-300">Clientes Satisfechos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">5+</div>
            <div className="text-gray-300">Años de Experiencia</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-gray-300">Soporte Técnico</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-hidden="true"
      >
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-[bounce_1.5s_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;