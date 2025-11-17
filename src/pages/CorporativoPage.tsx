import React, { useEffect } from 'react';
import { ArrowRight, Building2, Lightbulb, Thermometer, Camera, Shield, Network, Wifi, Music, MessageCircle } from 'lucide-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import Breadcrumb from '../components/Breadcrumb';
import ScrollProgress from '../components/ScrollProgress';

const CorporativoPage = () => {
  const whatsappNumber = '523311090460';
  const whatsappMessage = encodeURIComponent('Hola, me gustaría obtener más información sobre sus servicios para el sector corporativo y comercial.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <>
      <ScrollProgress />
      <header>
        <NavBar />
      </header>
      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-gray-900 via-blue-900 to-indigo-800">
          <div className="absolute inset-0 z-0 opacity-20">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
              }}
            ></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[
              { label: 'Sectores', path: '/#sectors' },
              { label: 'Corporativo y Comercial' }
            ]} />

            <div className="text-center">
              <div className="flex justify-center mb-8 animate-scaleIn">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center transform rotate-3 transition-transform duration-500 hover:rotate-6 shadow-2xl">
                  <Building2 className="text-blue-600" size={40} />
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight animate-fadeIn">
                TRANSFORMA TU NEGOCIO EN UNA<br />
                <span className="text-blue-400 drop-shadow-lg">EXPERIENCIA INTELIGENTE</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                Deja que la tecnología eleve tu comercio a un nivel superior
              </p>

              <Link
                to="/#sectors"
                className="inline-flex items-center text-blue-300 hover:text-blue-200 transition-colors duration-300 animate-fadeIn"
                style={{ animationDelay: '0.3s' }}
              >
                ← Ver todos los sectores
              </Link>
            </div>
          </div>
        </section>

        {/* Separador con diseño */}
        <div className="h-2 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

        {/* Service 1: Automatización */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2 animate-slideInLeft">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center transform rotate-3 shadow-lg">
                    <Lightbulb className="text-white" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">1. AUTOMATIZACIÓN INTELIGENTE</h2>
                </div>

                <h3 className="text-xl font-semibold text-blue-600 mb-6">Crea ambientes que atrapen a tus clientes y reduzcan costos</h3>

                <p className="text-gray-700 mb-8 leading-relaxed">
                  ¿Te imaginas un comercio donde las luces se enciendan solo cuando se necesitan, o un clima que se regule automáticamente para ofrecer la temperatura perfecta? Con SmartPeace, no tendrás que imaginarlo más.
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-6">¿Qué logramos?</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-blue-50 to-transparent rounded-xl border-l-4 border-blue-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Lightbulb className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Iluminación Adaptativa</span>
                        <p className="text-gray-600 leading-relaxed">Ajusta el tono y la intensidad de las luces dependiendo de la hora, el clima o la afluencia de clientes.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-blue-50 to-transparent rounded-xl border-l-4 border-blue-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Thermometer className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Climatización Inteligente</span>
                        <p className="text-gray-600 leading-relaxed">Optimiza la temperatura de cada zona, ahorrando energía y garantizando comodidad.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-blue-50 to-transparent rounded-xl border-l-4 border-blue-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Lightbulb className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Automatización de Equipos</span>
                        <p className="text-gray-600 leading-relaxed">Programa cafeteras, persianas y dispositivos para que inicien o se detengan sin intervención humana.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-md">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Beneficios clave:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Ahorro de energía y reducción de costos
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Ambientes acogedores y funcionales
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Control total desde tu smartphone o asistente de voz
                    </li>
                  </ul>
                </div>
              </div>

              <div className="md:w-1/2 animate-slideInRight" style={{ animationDelay: '0.2s' }}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Automatización inteligente para negocios"
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
                    <div className="p-8">
                      <h3 className="text-white text-2xl font-bold mb-3 drop-shadow-lg">Automatización para Comercios</h3>
                      <p className="text-gray-200 text-lg">Sistemas inteligentes que mejoran la experiencia del cliente y reducen costos operativos.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Separador */}
        <div className="h-2 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn drop-shadow-lg">
              ¡COMIENZA HOY LA TRANSFORMACIÓN DE TU NEGOCIO!
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              Con SmartPeace, todo es posible. Ahorra tiempo y dinero mientras ofreces una experiencia memorable a tus clientes.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 group"
              >
                Agenda tu Asesoría Empresarial
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={22} />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-blue-800 text-white px-8 py-4 rounded-xl hover:bg-blue-900 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 group"
              >
                <MessageCircle size={22} />
                Contactar por WhatsApp
              </a>
            </div>

            <p className="mt-12 text-lg font-light italic animate-fadeIn opacity-90" style={{ animationDelay: '0.5s' }}>
              SmartPeace – Donde la tecnología y el confort se unen para optimizar tus espacios.
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="bg-gray-50">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CorporativoPage;
