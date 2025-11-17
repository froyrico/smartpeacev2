import React, { useEffect } from 'react';
import { ArrowRight, Home, Lightbulb, Thermometer, Camera, Shield, Network, Wifi, Music, MessageCircle, ChevronLeft } from 'lucide-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

const ResidencialPage = () => {
  const whatsappNumber = '523311090460';
  const whatsappMessage = encodeURIComponent('Hola, me gustaría obtener más información sobre sus servicios para el sector residencial.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  useEffect(() => {
    // Smooth scroll to top with animation
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-gray-900 to-primary">
          <div className="absolute inset-0 z-0 opacity-20">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
              }}
            ></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Link to="/" className="inline-flex items-center text-white mb-8 hover:text-secondary transition-colors duration-300 group">
              <ChevronLeft size={20} className="transition-transform duration-300 group-hover:-translate-x-1" />
              <span className="group-hover:underline">Volver a inicio</span>
            </Link>
            
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center transform rotate-3 transition-transform duration-500 hover:rotate-6">
                <Home className="text-primary" size={40} />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight animate-fadeIn">
              TRANSFORMA TU HOGAR EN UNA<br />
              <span className="text-secondary">EXPERIENCIA INTELIGENTE</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              Vive el máximo confort y seguridad con tecnología de vanguardia
            </p>
          </div>
        </section>

        {/* Service 1: Automatización */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2 animate-fadeIn">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center transform rotate-3">
                    <Lightbulb className="text-white" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">1. AUTOMATIZACIÓN INTELIGENTE</h2>
                </div>
                
                <h3 className="text-xl font-semibold text-primary mb-6">Haz de tu casa un lugar cómodo y eficiente</h3>
                
                <p className="text-gray-700 mb-8">
                  ¿Te imaginas que las luces de tu sala se enciendan automáticamente al anochecer, o que la temperatura de tu hogar se regule sola para mantener el ambiente perfecto? Con SmartPeace, puedes tenerlo todo sin mover un dedo.
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-6">¿Qué logramos?</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg border-l-4 border-secondary hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Lightbulb className="text-white" size={18} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-1">Iluminación Adaptativa</span>
                        <p className="text-gray-600 text-sm leading-relaxed">Ajusta la intensidad y el tono de la luz según la hora del día o tu estado de ánimo.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg border-l-4 border-secondary hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Thermometer className="text-white" size={18} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-1">Climatización Inteligente</span>
                        <p className="text-gray-600 text-sm leading-relaxed">Ahorra energía con termostatos que se programan solos y mantienen cada habitación en la temperatura ideal.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg border-l-4 border-secondary hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Lightbulb className="text-white" size={18} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-1">Automatización de Equipos</span>
                        <p className="text-gray-600 text-sm leading-relaxed">Persiana que sube con el amanecer, cafeteras que se encienden en tu horario matutino, y más.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Beneficios clave:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                    <li>Ahorro en tus facturas de luz.</li>
                    <li>Confort total, sin preocupaciones.</li>
                    <li>Control remoto desde tu smartphone o asistente de voz.</li>
                  </ul>
                </div>
              </div>
              
              <div className="md:w-1/2 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Automatización inteligente para hogares"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-white text-xl font-bold mb-2">Automatización para Hogares</h3>
                      <p className="text-gray-200">Sistemas inteligentes que mejoran tu calidad de vida y reducen el consumo energético.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Service 2: Seguridad */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
              <div className="md:w-1/2 animate-fadeIn">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center transform rotate-3">
                    <Shield className="text-white" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">2. SEGURIDAD Y MONITOREO</h2>
                </div>
                
                <h3 className="text-xl font-semibold text-primary mb-6">Protege lo que más quieres las 24 horas</h3>
                
                <p className="text-gray-700 mb-8">
                  La tranquilidad de saber que tu familia y tu hogar están seguros es invaluable. Nuestros sistemas de seguridad inteligente te brindan control total y la respuesta rápida que necesitas ante cualquier eventualidad.
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-6">¿Qué logramos?</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg border-l-4 border-secondary hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Camera className="text-white" size={18} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-1">Cámaras Inteligentes</span>
                        <p className="text-gray-600 text-sm leading-relaxed">Con visión nocturna, detección de movimiento y acceso en tiempo real desde tu celular.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg border-l-4 border-secondary hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Shield className="text-white" size={18} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-1">Control de Accesos</span>
                        <p className="text-gray-600 text-sm leading-relaxed">Cerraduras inteligentes con huella, PIN o app, para saber quién entra y sale en todo momento.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg border-l-4 border-secondary hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Shield className="text-white" size={18} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-1">Protección Avanzada</span>
                        <p className="text-gray-600 text-sm leading-relaxed">Sensores de humo, fugas de gas o agua, con avisos automáticos a tu teléfono y cortes de seguridad.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Beneficios clave:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                    <li>Mayor tranquilidad para ti y tu familia.</li>
                    <li>Prevención de accidentes y pérdidas materiales.</li>
                    <li>Monitoreo constante incluso cuando estás de viaje.</li>
                  </ul>
                </div>
              </div>
              
              <div className="md:w-1/2 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Seguridad y monitoreo para hogares"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-white text-xl font-bold mb-2">Seguridad Residencial</h3>
                      <p className="text-gray-200">Protección avanzada para tu hogar con monitoreo 24/7 y alertas en tiempo real.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Service 3: Redes */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2 animate-fadeIn">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center transform rotate-3">
                    <Network className="text-white" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">3. REDES Y CONECTIVIDAD</h2>
                </div>
                
                <h3 className="text-xl font-semibold text-primary mb-6">Internet y redes optimizadas para tu vida digital</h3>
                
                <p className="text-gray-700 mb-8">
                  Tener una conexión estable y segura en el hogar es fundamental para el trabajo remoto, el entretenimiento y la comunicación familiar. Con SmartPeace, olvídate de caídas de señal o tiempos de carga interminables.
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-6">¿Qué logramos?</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg border-l-4 border-secondary hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Wifi className="text-white" size={18} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-1">Wi-Fi en Toda la Casa</span>
                        <p className="text-gray-600 text-sm leading-relaxed">Sistemas Mesh que garantizan cobertura completa sin zonas muertas.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg border-l-4 border-secondary hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Shield className="text-white" size={18} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-1">Ciberseguridad Residencial</span>
                        <p className="text-gray-600 text-sm leading-relaxed">Protección de tus datos y los de tu familia frente a ciberamenazas.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg border-l-4 border-secondary hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Network className="text-white" size={18} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-1">Instalación Escalable</span>
                        <p className="text-gray-600 text-sm leading-relaxed">Cableado profesional y soluciones que crecen contigo y tus dispositivos IoT.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Beneficios clave:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                    <li>Navegación fluida para videollamadas, streaming y gaming.</li>
                    <li>Protección de tu privacidad y la de tus seres queridos.</li>
                    <li>Integración total con todos tus dispositivos inteligentes.</li>
                  </ul>
                </div>
              </div>
              
              <div className="md:w-1/2 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1606904825846-647eb07f5be2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Redes y conectividad para hogares"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-white text-xl font-bold mb-2">Conectividad Residencial</h3>
                      <p className="text-gray-200">Redes de alto rendimiento para mantener tu hogar siempre conectado.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Service 4: Audio */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
              <div className="md:w-1/2 animate-fadeIn">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center transform rotate-3">
                    <Music className="text-white" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">4. AUDIO Y SONIDO INTELIGENTE</h2>
                </div>
                
                <h3 className="text-xl font-semibold text-primary mb-6">Disfruta de cada rincón de tu hogar con el mejor sonido</h3>
                
                <p className="text-gray-700 mb-8">
                  La música y el audio ambiental pueden transformar la atmósfera de tu casa. Desde un sistema multiroom para que cada espacio tenga su playlist, hasta altavoces focalizados para cine en casa.
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-6">¿Qué logramos?</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg border-l-4 border-secondary hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Music className="text-white" size={18} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-1">Sistemas de Sonido Ambiental</span>
                        <p className="text-gray-600 text-sm leading-relaxed">Bocinas estratégicamente ubicadas que armonizan cada habitación.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg border-l-4 border-secondary hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Music className="text-white" size={18} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-1">Publicidad y Alertas Sonoras Personalizadas</span>
                        <p className="text-gray-600 text-sm leading-relaxed">Notificaciones de eventos importantes en casa.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg border-l-4 border-secondary hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Music className="text-white" size={18} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-1">Cine en Casa</span>
                        <p className="text-gray-600 text-sm leading-relaxed">Configura salas con sonido envolvente y escenas automatizadas para películas o juegos.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Beneficios clave:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                    <li>Experiencia inmersiva de entretenimiento.</li>
                    <li>Control de la música por zonas y horarios (ideal para fiestas o reuniones).</li>
                    <li>Ambiente perfecto para cada momento del día.</li>
                  </ul>
                </div>
              </div>
              
              <div className="md:w-1/2 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Audio y sonido inteligente para hogares"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-white text-xl font-bold mb-2">Sonido Residencial</h3>
                      <p className="text-gray-200">Sistemas de audio que crean la atmósfera perfecta para tu hogar.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fadeIn">
              HAZ REALIDAD TU HOGAR DEL FUTURO
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              Con SmartPeace, la tecnología trabaja para ti, haciéndote la vida más sencilla, segura y placentera.
            </p>
            <p className="text-lg mb-12 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              Contáctanos ahora y descubre cómo empezar tu transformación inteligente.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <a 
                href="#contact" 
                className="btn-secondary bg-white text-primary border-white group"
              >
                Solicitar Cotización
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-green-600 hover:bg-green-700 border-0 group"
              >
                Contactar por WhatsApp
                <MessageCircle className="group-hover:rotate-12 transition-transform" size={20} />
              </a>
            </div>
            
            <p className="mt-12 text-lg font-light italic animate-fadeIn" style={{ animationDelay: '0.5s' }}>
              SmartPeace – Innovación y confort en cada rincón de tu hogar.
            </p>
          </div>
        </section>
        
        {/* Contact Form */}
        <section id="contact" className="py-20 bg-white">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ResidencialPage;