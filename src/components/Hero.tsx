import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import CountUpAnimation from './CountUpAnimation';

const Hero = () => {
  const whatsappNumber = '523311090460';
  const whatsappMessage = encodeURIComponent('Hola, me gustaría obtener más información sobre sus servicios.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-fadeIn"
          style={{
            backgroundImage: 'url("/hero (1).jpg")',
          }}
          role="img"
          aria-label="Hogar inteligente con sistema de automatización y control central SmartPeace"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/60"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight animate-fadeIn px-2">
          Transforma tu espacio en un entorno<br className="hidden sm:block" />
          <span className="sm:inline block mt-2 sm:mt-0"> </span>
          <span className="text-secondary">inteligente, seguro y eficiente</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-3xl mx-auto animate-fadeIn px-2" style={{ animationDelay: '0.2s' }}>
          Mejora tu propiedad con soluciones tecnológicas de vanguardia que aumentan la seguridad, el confort y la eficiencia energética en Guadalajara.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4 animate-fadeIn px-2" style={{ animationDelay: '0.4s' }}>
          <a
            href="#contact"
            className="btn-primary group w-full sm:w-auto min-h-[52px] sm:min-h-[48px] text-base sm:text-base active:scale-95"
            aria-label="Agenda tu consulta gratuita para servicios de seguridad y automatización"
          >
            <span className="text-center">Agenda tu Consulta Gratuita</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform flex-shrink-0" size={20} />
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary group w-full sm:w-auto min-h-[52px] sm:min-h-[48px] bg-green-600 hover:bg-green-700 text-white border-0 text-base sm:text-base active:scale-95"
            aria-label="Contactar por WhatsApp"
          >
            <span className="text-center">Contactar por WhatsApp</span>
            <MessageCircle className="group-hover:rotate-12 transition-transform flex-shrink-0" size={20} />
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-white animate-fadeIn px-2" style={{ animationDelay: '0.6s' }}>
          <div className="text-center group px-2">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-secondary/20 blur-xl rounded-full scale-150 group-hover:scale-175 transition-transform duration-300"></div>
              <CountUpAnimation end={100} suffix="+" className="relative text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2 text-secondary drop-shadow-lg" />
            </div>
            <div className="text-sm sm:text-base text-gray-200 font-medium">Proyectos Exitosos</div>
          </div>
          <div className="text-center group px-2">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-secondary/20 blur-xl rounded-full scale-150 group-hover:scale-175 transition-transform duration-300"></div>
              <CountUpAnimation end={98} suffix="%" className="relative text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2 text-secondary drop-shadow-lg" />
            </div>
            <div className="text-sm sm:text-base text-gray-200 font-medium">Clientes Satisfechos</div>
          </div>
          <div className="text-center group px-2">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-secondary/20 blur-xl rounded-full scale-150 group-hover:scale-175 transition-transform duration-300"></div>
              <CountUpAnimation end={5} suffix="+" className="relative text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2 text-secondary drop-shadow-lg" />
            </div>
            <div className="text-sm sm:text-base text-gray-200 font-medium">Años de Experiencia</div>
          </div>
          <div className="text-center group px-2">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-secondary/20 blur-xl rounded-full scale-150 group-hover:scale-175 transition-transform duration-300"></div>
              <div className="relative text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2 text-secondary drop-shadow-lg">24/7</div>
            </div>
            <div className="text-sm sm:text-base text-gray-200 font-medium">Soporte Técnico</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block"
        aria-hidden="true"
      >
        <div className="w-7 h-11 sm:w-8 sm:h-12 rounded-full border-2 border-white flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-[bounce_1.5s_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;