import React, { useEffect } from 'react';
import { ArrowRight, Building2, Lightbulb, Thermometer, Camera, Shield, Network, Wifi, Music, MessageCircle, ChevronLeft } from 'lucide-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

const CorporativoPage = () => {
  const whatsappNumber = '523311090460';
  const whatsappMessage = encodeURIComponent('Hola, me gustaría obtener más información sobre sus servicios para el sector corporativo y comercial.');
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
                backgroundImage: 'url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
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
                <Building2 className="text-primary" size={40} />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight animate-fadeIn">
              TRANSFORMA TU NEGOCIO EN UNA<br />
              <span className="text-secondary">EXPERIENCIA INTELIGENTE</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              Deja que la tecnología eleve tu comercio a un nivel superior
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
                
                <h3 className="text-xl font-semibold text-primary mb-6">Crea ambientes que atrapen a tus clientes y reduzcan costos</h3>
                
                <p className="text-gray-700 mb-8">
                  ¿Te imaginas un comercio donde las luces se enciendan solo cuando se necesitan, o un clima que se regule automáticamente para ofrecer la temperatura perfecta? Con SmartPeace, no tendrás que imaginarlo más.
                </p>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-6">¿Qué logramos?</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg border-l-4 border-secondary hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Lightbulb className="text-white" size={18} />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 block mb-1">Iluminación Adaptativa</span>
                        <p className="text-gray-600 text-sm leading-relaxed">Ajusta el tono y la intensidad de las luces dependiendo de la hora, el clima o la afluencia de clientes.
                      </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg border-l-4 border-secondary hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Thermometer className="text-white" size={18} />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 block mb-1">Climatización Inteligente</span>
                        <p className="text-gray-600 text-sm leading-relaxed">Optimiza la temperatura de cada zona, ahorrando energía y garantizando comodidad.
                      </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg border-l-4 border-secondary hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Lightbulb className="text-white" size={18} />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 block mb-1">Automatización de Equipos</span>
                        <p className="text-gray-600 text-sm leading-relaxed">Programa cafeteras, persianas y dispositivos para que inicien o se detengan sin intervención humana.
                      </p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Beneficios clave:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                    <li>Ahorro de energía y reducción de costos.</li>
                    <li>Ambientes acogedores y funcionales.</li>
                    <li>Control total desde tu smartphone o asistente de voz.</li>
                  </ul>
                </div>
              </div>
              
              <div className="md:w-1/2 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Automatización inteligente para negocios" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-white text-xl font-bold mb-2">Automatización para Comercios</h3>
                      <p className="text-gray-200">Sistemas inteligentes que mejoran la experiencia del cliente y reducen costos operativos.</p>
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
                
                <h3 className="text-xl font-semibold text-primary mb-6">Protege tu comercio sin complicaciones</h3>
                
                <p className="text-gray-700 mb-8">
                  La tranquilidad de saber que tu negocio está siempre protegido es invaluable. Con nuestros sistemas de seguridad, estarás conectado y al tanto de todo, 24/7.
                </p>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-6">¿Qué logramos?</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg border-l-4 border-secondary hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Camera className="text-white" size={18} />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 block mb-1">Vigilancia Inteligente</span>
                        <p className="text-gray-600 text-sm leading-relaxed">Cámaras 4K con visión nocturna y detección de movimiento, accesibles desde cualquier dispositivo.
                      </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg border-l-4 border-secondary hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Shield className="text-white" size={18} />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 block mb-1">Control de Accesos</span>
                        <p className="text-gray-600 text-sm leading-relaxed">Cerraduras inteligentes con huella, RFID o app; lleva un registro digital de quién entra y sale.
                      </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg border-l-4 border-secondary hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Shield className="text-white" size={18} />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 block mb-1">Protección Integral</span>
                        <p className="text-gray-600 text-sm leading-relaxed">Sensores de humo, calor y fugas de agua para cortar automáticamente el suministro de gas o electricidad.
                      </p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Beneficios clave:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                    <li>Mayor control y prevención de incidentes.</li>
                    <li>Monitoreo en tiempo real, incluso si estás fuera del país.</li>
                    <li>Tranquilidad para que te enfoques en hacer crecer tu negocio.</li>
                  </ul>
                </div>
              </div>
              
              <div className="md:w-1/2 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Seguridad y monitoreo para negocios" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-white text-xl font-bold mb-2">Seguridad Empresarial</h3>
                      <p className="text-gray-200">Protección avanzada para tu negocio con monitoreo 24/7 y alertas en tiempo real.</p>
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
                
                <h3 className="text-xl font-semibold text-primary mb-6">Mantén tu negocio siempre en línea, sin interrupciones</h3>
                
                <p className="text-gray-700 mb-8">
                  La conectividad es esencial para un comercio moderno. Ya sea para procesar pagos, brindar Wi-Fi a tus clientes o mantener sistemas de seguridad, una red confiable marca la diferencia.
                </p>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-6">¿Qué logramos?</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg border-l-4 border-secondary hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Wifi className="text-white" size={18} />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 block mb-1">Wi-Fi Empresarial y Redes Mesh</span>
                        <p className="text-gray-600 text-sm leading-relaxed">Cobertura completa sin zonas muertas para que clientes y empleados se conecten sin problemas.
                      </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg border-l-4 border-secondary hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Shield className="text-white" size={18} />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 block mb-1">Ciberseguridad</span>
                        <p className="text-gray-600 text-sm leading-relaxed">Protege tu información y la de tus clientes con firewalls y segmentación de redes.
                      </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg border-l-4 border-secondary hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Network className="text-white" size={18} />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 block mb-1">Instalación Profesional</span>
                        <p className="text-gray-600 text-sm leading-relaxed">Cableado estructurado y soluciones escalables para que crezcas sin limitaciones.
                      </p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Beneficios clave:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                    <li>Experiencia estable de internet para clientes y empleados.</li>
                    <li>Protección ante ciberataques y robo de información.</li>
                    <li>Sistema modular y escalable para acompañar el crecimiento de tu negocio.</li>
                  </ul>
                </div>
              </div>
              
              <div className="md:w-1/2 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Redes y conectividad para negocios" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-white text-xl font-bold mb-2">Conectividad Empresarial</h3>
                      <p className="text-gray-200">Redes de alto rendimiento para mantener tu negocio siempre conectado.</p>
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
                
                <h3 className="text-xl font-semibold text-primary mb-6">Captura a tu audiencia con el poder de la música y el sonido</h3>
                
                <p className="text-gray-700 mb-8">
                  El sonido correcto puede aumentar las ventas, mejorar el estado de ánimo y crear momentos inolvidables para tus clientes. ¿Listo para dar ese toque especial a tu espacio?
                </p>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-6">¿Qué logramos?</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg border-l-4 border-secondary hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Music className="text-white" size={18} />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 block mb-1">Sistemas de Sonido Ambiental</span>
                        <p className="text-gray-600 text-sm leading-relaxed">Bocinas distribuidas estratégicamente para ofrecer una experiencia envolvente.
                      </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg border-l-4 border-secondary hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Music className="text-white" size={18} />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 block mb-1">Publicidad Auditiva y Bocinas Direccionales</span>
                        <p className="text-gray-600 text-sm leading-relaxed">Programa anuncios y promociones sin interrumpir la atmósfera del local.
                      </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg border-l-4 border-secondary hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Music className="text-white" size={18} />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 block mb-1">Megafonía y Comunicación Interna</span>
                        <p className="text-gray-600 text-sm leading-relaxed">Envía mensajes importantes a todo el comercio o a áreas específicas con un solo clic.
                      </p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Beneficios clave:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                    <li>Ambiente único que potencia la imagen de tu marca.</li>
                    <li>Oportunidades de venta: Promociona productos de forma discreta e impactante.</li>
                    <li>Control total de la música y el volumen según zonas y horarios.</li>
                  </ul>
                </div>
              </div>
              
              <div className="md:w-1/2 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Audio y sonido inteligente para negocios" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-white text-xl font-bold mb-2">Sonido Profesional</h3>
                      <p className="text-gray-200">Sistemas de audio que crean la atmósfera perfecta para tu negocio.</p>
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
              ¡COMIENZA HOY LA TRANSFORMACIÓN DE TU NEGOCIO!
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              Con SmartPeace, todo es posible. Ahorra tiempo y dinero mientras ofreces una experiencia memorable a tus clientes.
            </p>
            <p className="text-lg mb-12 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              Contáctanos y descubre cómo podemos impulsar tu comercio al siguiente nivel.
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
              SmartPeace – Donde la tecnología y el confort se unen para optimizar tus espacios.
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

export default CorporativoPage;