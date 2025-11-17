import React, { useEffect } from 'react';
import { ArrowRight, Home, Lightbulb, Thermometer, Camera, Shield, Network, Wifi, Music, MessageCircle, Bell, Fingerprint, Flame, Lock, Radio, Building2, Users, Cog, PenTool as Tool, RefreshCw, PhoneCall } from 'lucide-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import Breadcrumb from '../components/Breadcrumb';
import ScrollProgress from '../components/ScrollProgress';

const ResidencialPage = () => {
  const whatsappNumber = '523311090460';
  const whatsappMessage = encodeURIComponent('Hola, me gustaría obtener más información sobre sus servicios para el sector residencial.');
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
        <section className="relative py-20 bg-gradient-to-b from-gray-900 via-green-900 to-emerald-800">
          <div className="absolute inset-0 z-0 opacity-20">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
              }}
            ></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[
              { label: 'Sectores', path: '/#sectors' },
              { label: 'Residencial y Condominios' }
            ]} />

            <div className="text-center">
              <div className="flex justify-center mb-8 animate-scaleIn">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center transform rotate-3 transition-transform duration-500 hover:rotate-6 shadow-2xl">
                  <Home className="text-green-600" size={40} />
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight animate-fadeIn">
                TRANSFORMA TU HOGAR EN UNA<br />
                <span className="text-green-400 drop-shadow-lg">EXPERIENCIA INTELIGENTE</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                Vive el máximo confort y seguridad con tecnología de vanguardia
              </p>

              <Link
                to="/#sectors"
                className="inline-flex items-center text-green-300 hover:text-green-200 transition-colors duration-300 animate-fadeIn"
                style={{ animationDelay: '0.3s' }}
              >
                ← Ver todos los sectores
              </Link>
            </div>
          </div>
        </section>

        {/* Separador con diseño */}
        <div className="h-2 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>

        {/* Service 1: Automatización */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2 animate-slideInLeft">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center transform rotate-3 shadow-lg">
                    <Lightbulb className="text-white" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">1. AUTOMATIZACIÓN INTELIGENTE</h2>
                </div>

                <h3 className="text-xl font-semibold text-green-600 mb-6">Haz de tu casa un lugar cómodo y eficiente</h3>

                <p className="text-gray-700 mb-8 leading-relaxed">
                  ¿Te imaginas que las luces de tu sala se enciendan automáticamente al anochecer, o que la temperatura de tu hogar se regule sola para mantener el ambiente perfecto? Con SmartPeace, puedes tenerlo todo sin mover un dedo.
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-6">¿Qué logramos?</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-green-50 to-transparent rounded-xl border-l-4 border-green-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Lightbulb className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Iluminación Adaptativa</span>
                        <p className="text-gray-600 leading-relaxed">Ajusta la intensidad y el tono de la luz según la hora del día o tu estado de ánimo.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-green-50 to-transparent rounded-xl border-l-4 border-green-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Thermometer className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Climatización Inteligente</span>
                        <p className="text-gray-600 leading-relaxed">Ahorra energía con termostatos que se programan solos y mantienen cada habitación en la temperatura ideal.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-green-50 to-transparent rounded-xl border-l-4 border-green-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Lightbulb className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Automatización de Equipos</span>
                        <p className="text-gray-600 leading-relaxed">Persiana que sube con el amanecer, cafeteras que se encienden en tu horario matutino, y más.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-xl shadow-md">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Beneficios clave:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      Ahorro en tus facturas de luz
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      Confort total, sin preocupaciones
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      Control remoto desde tu smartphone o asistente de voz
                    </li>
                  </ul>
                </div>
              </div>

              <div className="md:w-1/2 animate-slideInRight" style={{ animationDelay: '0.2s' }}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src="/airesidencia (1).jpg"
                    alt="Automatización inteligente para hogares con control desde smartphone"
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
                    <div className="p-8">
                      <h3 className="text-white text-2xl font-bold mb-3 drop-shadow-lg">Automatización para Hogares</h3>
                      <p className="text-gray-200 text-lg">Sistemas inteligentes que mejoran tu calidad de vida y reducen el consumo energético.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Separador */}
        <div className="h-2 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>

        {/* Service 2: Seguridad Integral */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
              <div className="md:w-1/2 animate-slideInRight">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center transform rotate-3 shadow-lg">
                    <Shield className="text-white" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">2. SEGURIDAD INTEGRAL</h2>
                </div>

                <h3 className="text-xl font-semibold text-green-600 mb-6">Protege lo que más importa: tu familia y tu patrimonio</h3>

                <p className="text-gray-700 mb-8 leading-relaxed">
                  Tu hogar es tu santuario, y merece la protección más avanzada. Con nuestros sistemas de seguridad, puedes estar tranquilo sabiendo que tu familia y tus bienes están seguros las 24 horas del día.
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-6">¿Qué incluye?</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-green-50 to-transparent rounded-xl border-l-4 border-green-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Camera className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Vigilancia 24/7</span>
                        <p className="text-gray-600 leading-relaxed">Cámaras HD con visión nocturna, detección de movimiento y acceso remoto desde tu smartphone.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-green-50 to-transparent rounded-xl border-l-4 border-green-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Bell className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Sistemas de Alarma Multi-Capa</span>
                        <p className="text-gray-600 leading-relaxed">Sensores en puertas, ventanas y movimiento con alertas inmediatas a tu móvil.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-green-50 to-transparent rounded-xl border-l-4 border-green-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Fingerprint className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Control de Accesos</span>
                        <p className="text-gray-600 leading-relaxed">Cerraduras inteligentes con huella digital, código PIN y tarjetas RFID.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-green-50 to-transparent rounded-xl border-l-4 border-green-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Flame className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Protección Contra Incendios</span>
                        <p className="text-gray-600 leading-relaxed">Detectores de humo, gas y agua con apagado automático de equipos.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-xl shadow-md">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Beneficios clave:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      Tranquilidad total: monitorea tu hogar desde cualquier lugar
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      Respuesta rápida ante emergencias
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      Reduce riesgos de intrusiones, incendios y fugas
                    </li>
                  </ul>
                </div>
              </div>

              <div className="md:w-1/2 animate-slideInLeft" style={{ animationDelay: '0.2s' }}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src="/sresidencia (1).jpg"
                    alt="Cámara de seguridad inteligente para hogares"
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
                    <div className="p-8">
                      <h3 className="text-white text-2xl font-bold mb-3 drop-shadow-lg">Seguridad Avanzada</h3>
                      <p className="text-gray-200 text-lg">Protección completa con tecnología de última generación para tu tranquilidad.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Separador */}
        <div className="h-2 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>

        {/* Service 3: Redes y Conectividad */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2 animate-slideInLeft">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center transform rotate-3 shadow-lg">
                    <Wifi className="text-white" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">3. REDES Y CONECTIVIDAD</h2>
                </div>

                <h3 className="text-xl font-semibold text-green-600 mb-6">Internet rápido y seguro en cada rincón de tu hogar</h3>

                <p className="text-gray-700 mb-8 leading-relaxed">
                  En un mundo conectado, necesitas una red confiable y rápida. Ya sea para trabajar desde casa, ver películas en streaming o jugar en línea, te garantizamos una conexión estable sin interrupciones.
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-6">¿Qué ofrecemos?</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-green-50 to-transparent rounded-xl border-l-4 border-green-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Network className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Cableado Estructurado</span>
                        <p className="text-gray-600 leading-relaxed">Instalación de redes Ethernet de alta velocidad en toda tu casa.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-green-50 to-transparent rounded-xl border-l-4 border-green-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Radio className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Wi-Fi Mesh Optimizado</span>
                        <p className="text-gray-600 leading-relaxed">Cobertura total sin zonas muertas, con roaming automático entre puntos de acceso.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-green-50 to-transparent rounded-xl border-l-4 border-green-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Lock className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Seguridad de Redes</span>
                        <p className="text-gray-600 leading-relaxed">Redes separadas para invitados y dispositivos IoT, protegiendo tu privacidad.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-xl shadow-md">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Beneficios clave:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      Internet estable en cualquier habitación
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      Soporte para múltiples dispositivos simultáneos
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      Protección contra amenazas cibernéticas
                    </li>
                  </ul>
                </div>
              </div>

              <div className="md:w-1/2 animate-slideInRight" style={{ animationDelay: '0.2s' }}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src="https://images.unsplash.com/photo-1606904825846-647eb07f5be2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Redes y conectividad para hogares"
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
                    <div className="p-8">
                      <h3 className="text-white text-2xl font-bold mb-3 drop-shadow-lg">Conectividad Total</h3>
                      <p className="text-gray-200 text-lg">Red robusta y segura para todos tus dispositivos inteligentes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Separador */}
        <div className="h-2 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>

        {/* Service 4: Consultoría y Personalización */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
              <div className="md:w-1/2 animate-slideInRight">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center transform rotate-3 shadow-lg">
                    <Users className="text-white" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">4. CONSULTORÍA Y PERSONALIZACIÓN</h2>
                </div>

                <h3 className="text-xl font-semibold text-green-600 mb-6">Soluciones hechas a tu medida</h3>

                <p className="text-gray-700 mb-8 leading-relaxed">
                  Cada hogar es único, y tus necesidades también. Por eso trabajamos contigo para crear un sistema personalizado que se adapte perfectamente a tu estilo de vida y presupuesto.
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-6">¿Cómo te ayudamos?</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-green-50 to-transparent rounded-xl border-l-4 border-green-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Users className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Asesoría Personalizada</span>
                        <p className="text-gray-600 leading-relaxed">Consulta gratuita para entender tus necesidades y proponer las mejores soluciones.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-green-50 to-transparent rounded-xl border-l-4 border-green-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Cog className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Integración de Dispositivos</span>
                        <p className="text-gray-600 leading-relaxed">Adaptamos equipos que ya tienes instalados a nuestros sistemas inteligentes.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-green-50 to-transparent rounded-xl border-l-4 border-green-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Tool className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Capacitación y Soporte</span>
                        <p className="text-gray-600 leading-relaxed">Te enseñamos a usar todos los sistemas para que aproveches al máximo su potencial.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-xl shadow-md">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Beneficios clave:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      Solución adaptada a tu presupuesto
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      Compatibilidad con tus dispositivos actuales
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      Soporte continuo y capacitación completa
                    </li>
                  </ul>
                </div>
              </div>

              <div className="md:w-1/2 animate-slideInLeft" style={{ animationDelay: '0.2s' }}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Consultoría personalizada"
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
                    <div className="p-8">
                      <h3 className="text-white text-2xl font-bold mb-3 drop-shadow-lg">Asesoría Experta</h3>
                      <p className="text-gray-200 text-lg">Diseñamos la solución perfecta para tu hogar y estilo de vida.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Separador */}
        <div className="h-2 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>

        {/* Service 5: Mantenimiento y Soporte */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2 animate-slideInLeft">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center transform rotate-3 shadow-lg">
                    <Tool className="text-white" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">5. MANTENIMIENTO Y SOPORTE</h2>
                </div>

                <h3 className="text-xl font-semibold text-green-600 mb-6">Tu sistema siempre funcionando al 100%</h3>

                <p className="text-gray-700 mb-8 leading-relaxed">
                  La tecnología requiere cuidado para funcionar correctamente. Nuestro equipo de expertos está disponible para resolver cualquier problema, realizar actualizaciones y mantener tu sistema en perfectas condiciones.
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-6">¿Qué incluye nuestro soporte?</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-green-50 to-transparent rounded-xl border-l-4 border-green-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Tool className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Diagnóstico y Reparación</span>
                        <p className="text-gray-600 leading-relaxed">Identificación rápida de problemas y solución efectiva de fallas.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-green-50 to-transparent rounded-xl border-l-4 border-green-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <RefreshCw className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Actualización de Equipos</span>
                        <p className="text-gray-600 leading-relaxed">Mejoras de firmware y software para que tu sistema esté siempre actualizado.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-green-50 to-transparent rounded-xl border-l-4 border-green-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <PhoneCall className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Soporte Remoto y en Sitio</span>
                        <p className="text-gray-600 leading-relaxed">Atención rápida vía telefónica, chat o visita a domicilio según la necesidad.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-xl shadow-md">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Beneficios clave:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      Sistema operativo sin interrupciones
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      Actualizaciones constantes de seguridad
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      Soporte técnico disponible cuando lo necesites
                    </li>
                  </ul>
                </div>
              </div>

              <div className="md:w-1/2 animate-slideInRight" style={{ animationDelay: '0.2s' }}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Mantenimiento y soporte técnico"
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
                    <div className="p-8">
                      <h3 className="text-white text-2xl font-bold mb-3 drop-shadow-lg">Soporte Profesional</h3>
                      <p className="text-gray-200 text-lg">Mantenimiento continuo para que tu sistema funcione perfectamente.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Separador */}
        <div className="h-2 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn drop-shadow-lg">
              HAZ REALIDAD TU HOGAR DEL FUTURO
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              Con SmartPeace, la tecnología trabaja para ti, haciéndote la vida más sencilla, segura y placentera.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-green-700 px-8 py-4 rounded-xl hover:bg-green-50 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 group"
              >
                Agenda tu Consulta Gratuita
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={22} />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-800 text-white px-8 py-4 rounded-xl hover:bg-green-900 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 group"
              >
                <MessageCircle size={22} />
                Contactar por WhatsApp
              </a>
            </div>

            <p className="mt-12 text-lg font-light italic animate-fadeIn opacity-90" style={{ animationDelay: '0.5s' }}>
              SmartPeace – Innovación y confort en cada rincón de tu hogar.
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

export default ResidencialPage;
