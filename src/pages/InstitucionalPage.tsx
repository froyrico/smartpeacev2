import React, { useEffect } from 'react';
import {
  ArrowRight, GraduationCap, Lightbulb, Thermometer, Camera, Shield,
  Network, Wifi, Music, MessageCircle, ChevronLeft
} from 'lucide-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

const InstitucionalPage = () => {
  const whatsappNumber = '523311090460';
  const whatsappMessage = encodeURIComponent('Hola, me gustaría obtener más información sobre sus servicios para el sector institucional.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  useEffect(() => {
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
                backgroundImage: 'url("https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
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
                <GraduationCap className="text-primary" size={40} />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight animate-fadeIn">
              LLEVA TU INSTITUCIÓN AL<br />
              <span className="text-secondary">SIGUIENTE NIVEL TECNOLÓGICO</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              Optimiza recursos, potencia la seguridad y mejora la experiencia de todos
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
                
                <h3 className="text-xl font-semibold text-primary mb-6">Espacios institucionales eficientes y confortables</h3>
                
                <p className="text-gray-700 mb-8">
                  Imagínate aulas, oficinas o auditorios que ajusten automáticamente su iluminación y temperatura de acuerdo con el horario, la ocupación o el tipo de actividad. Con SmartPeace, esto se convierte en realidad y permite aprovechar cada recurso de manera óptima.
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
                        <p className="text-gray-600 text-sm leading-relaxed">Control centralizado de luces para zonas comunes, pasillos y salas de juntas, reduciendo costos y mejorando la visibilidad.
                      </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg border-l-4 border-secondary hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Thermometer className="text-white" size={18} />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 block mb-1">Climatización Inteligente</span>
                        <p className="text-gray-600 text-sm leading-relaxed">Termostatos y sensores que ajustan la temperatura según la cantidad de personas y la hora del día.
                      </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg border-l-4 border-secondary hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Lightbulb className="text-white" size={18} />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 block mb-1">Automatización de Equipos</span>
                        <p className="text-gray-600 text-sm leading-relaxed">Programación de dispositivos (persianas, proyectores, máquinas de café, etc.) para que funcionen solo cuando se necesitan.
                      </p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Beneficios clave:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                    <li>Ahorro significativo en servicios de luz y climatización.</li>
                    <li>Mejor calidad de estancia para estudiantes, empleados o visitantes.</li>
                    <li>Control remoto y centralizado de todas las instalaciones.</li>
                  </ul>
                </div>
              </div>
              
              <div className="md:w-1/2 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Automatización inteligente para instituciones" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-white text-xl font-bold mb-2">Automatización Institucional</h3>
                      <p className="text-gray-200">Sistemas inteligentes que optimizan recursos y mejoran la experiencia en espacios educativos y públicos.</p>
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
                
                <h3 className="text-xl font-semibold text-primary mb-6">Protege a tu comunidad y evita incidentes</h3>
                
                <p className="text-gray-700 mb-8">
                  La seguridad es prioritaria en cualquier institución. Con nuestros sistemas, podrás monitorear los accesos y espacios comunes de forma rápida y eficiente, minimizando riesgos y reaccionando a tiempo ante cualquier situación.
                </p>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-6">¿Qué logramos?</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg border-l-4 border-secondary hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Camera className="text-white" size={18} />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 block mb-1">Cámaras de Vigilancia Inteligentes</span>
                        <p className="text-gray-600 text-sm leading-relaxed">Cobertura en tiempo real con alerta de movimientos sospechosos.
                      </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg border-l-4 border-secondary hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Shield className="text-white" size={18} />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 block mb-1">Control de Accesos Avanzado</span>
                        <p className="text-gray-600 text-sm leading-relaxed">Tarjetas, huellas digitales o apps para regular la entrada a zonas restringidas (laboratorios, oficinas administrativas, etc.).
                      </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg border-l-4 border-secondary hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Shield className="text-white" size={18} />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 block mb-1">Protección Integral</span>
                        <p className="text-gray-600 text-sm leading-relaxed">Sensores de humo, calor o fugas de agua que activan protocolos de seguridad y notificaciones instantáneas.
                      </p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Beneficios clave:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                    <li>Mayor tranquilidad para personal, estudiantes, pacientes o visitantes.</li>
                    <li>Prevención de incidentes y respuesta rápida ante emergencias.</li>
                    <li>Registro detallado de entradas, salidas y eventos de seguridad.</li>
                  </ul>
                </div>
              </div>
              
              <div className="md:w-1/2 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1563770660941-20978e870e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Seguridad y monitoreo para instituciones" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-white text-xl font-bold mb-2">Seguridad Institucional</h3>
                      <p className="text-gray-200">Protección avanzada para espacios educativos y públicos con monitoreo 24/7 y alertas en tiempo real.</p>
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
                
                <h3 className="text-xl font-semibold text-primary mb-6">Comunicación eficiente para instituciones modernas</h3>
                
                <p className="text-gray-700 mb-8">
                  Ya sea en un campus universitario, un hospital, un edificio gubernamental o un museo, la conectividad estable es fundamental para el buen funcionamiento diario. Con SmartPeace, obtienes redes robustas y seguras que facilitan la colaboración y el acceso a la información.
                </p>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-6">¿Qué logramos?</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg border-l-4 border-secondary hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Wifi className="text-white" size={18} />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 block mb-1">Wi-Fi y Redes Mesh de Alto Rendimiento</span>
                        <p className="text-gray-600 text-sm leading-relaxed">Cobertura completa en todas las instalaciones, evitando puntos muertos.
                      </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg border-l-4 border-secondary hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Shield className="text-white" size={18} />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 block mb-1">Ciberseguridad Institucional</span>
                        <p className="text-gray-600 text-sm leading-relaxed">Protección de datos sensibles con firewalls avanzados y segmentación de redes para distintas áreas.
                      </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg border-l-4 border-secondary hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Network className="text-white" size={18} />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 block mb-1">Infraestructura Escalable</span>
                        <p className="text-gray-600 text-sm leading-relaxed">Cableado estructurado y soluciones diseñadas para crecer a la par de las necesidades de tu institución.
                      </p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Beneficios clave:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                    <li>Productividad asegurada para personal administrativo y usuarios.</li>
                    <li>Protección de información confidencial y cumplimiento de normativas.</li>
                    <li>Soporte a distancia y monitorización continua de la red.</li>
                  </ul>
                </div>
              </div>
              
              <div className="md:w-1/2 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Redes y conectividad para instituciones" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-white text-xl font-bold mb-2">Conectividad Institucional</h3>
                      <p className="text-gray-200">Redes de alto rendimiento para mantener tu institución siempre conectada y segura.</p>
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
                
                <h3 className="text-xl font-semibold text-primary mb-6">Informar, ambientar y comunicar de manera innovadora</h3>
                
                <p className="text-gray-700 mb-8">
                  Desde sistemas de sonido ambiental que mejoran la atmósfera en salas de espera, hasta soluciones de megafonía para anuncios generales, el audio inteligente de SmartPeace garantiza una comunicación más efectiva y agradable.
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
                        <p className="text-gray-600 text-sm leading-relaxed">Bocinas estratégicamente instaladas en pasillos, auditorios o salas de reuniones para mensajes o música de fondo.
                      </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg border-l-4 border-secondary hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Music className="text-white" size={18} />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 block mb-1">Bocinas Direccionales y Publicidad Auditiva</span>
                        <p className="text-gray-600 text-sm leading-relaxed">En museos o galerías, por ejemplo, se pueden activar pistas informativas en zonas específicas sin interferir con otras áreas.
                      </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg border-l-4 border-secondary hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Music className="text-white" size={18} />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 block mb-1">Megafonía Institucional</span>
                        <p className="text-gray-600 text-sm leading-relaxed">Anuncios de emergencia o avisos importantes difundidos con claridad y alcance total.
                      </p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Beneficios clave:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                    <li>Mejor experiencia para visitantes, pacientes, estudiantes o personal.</li>
                    <li>Comunicación efectiva de avisos y campañas de prevención o información.</li>
                    <li>Control y programación de anuncios o música según cada zona y horario.</li>
                  </ul>
                </div>
              </div>
              
              <div className="md:w-1/2 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Audio y sonido inteligente para instituciones" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-white text-xl font-bold mb-2">Sonido Institucional</h3>
                      <p className="text-gray-200">Sistemas de audio que mejoran la comunicación y crean ambientes adecuados en espacios educativos y públicos.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <ContactForm />

        {/* WhatsApp CTA */}
        <section className="py-16 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para modernizar tu institución?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Contáctanos para una asesoría personalizada
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-secondary hover:text-white transition-colors duration-300"
            >
              <MessageCircle size={24} />
              Contactar por WhatsApp
              <ArrowRight size={20} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default InstitucionalPage;