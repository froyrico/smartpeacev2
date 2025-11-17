import React, { useEffect } from 'react';
import {
  ArrowRight, GraduationCap, Lightbulb, Thermometer, Camera, Shield,
  Network, Wifi, Music, MessageCircle, Bell, Fingerprint, Flame, Lock, Radio, Building2, Users, Cog, PenTool as Tool, RefreshCw, PhoneCall
} from 'lucide-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import Breadcrumb from '../components/Breadcrumb';
import ScrollProgress from '../components/ScrollProgress';

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
      <ScrollProgress />
      <header>
        <NavBar />
      </header>
      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-gray-900 via-orange-900 to-amber-800">
          <div className="absolute inset-0 z-0 opacity-20">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
              }}
            ></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[
              { label: 'Sectores', path: '/#sectors' },
              { label: 'Institucional' }
            ]} />

            <div className="text-center">
              <div className="flex justify-center mb-8 animate-scaleIn">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center transform rotate-3 transition-transform duration-500 hover:rotate-6 shadow-2xl">
                  <GraduationCap className="text-orange-600" size={40} />
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight animate-fadeIn">
                LLEVA TU INSTITUCIÓN AL<br />
                <span className="text-orange-400 drop-shadow-lg">SIGUIENTE NIVEL TECNOLÓGICO</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                Optimiza recursos, potencia la seguridad y mejora la experiencia de todos
              </p>

              <Link
                to="/#sectors"
                className="inline-flex items-center text-orange-300 hover:text-orange-200 transition-colors duration-300 animate-fadeIn"
                style={{ animationDelay: '0.3s' }}
              >
                ← Ver todos los sectores
              </Link>
            </div>
          </div>
        </section>

        {/* Separador con diseño */}
        <div className="h-2 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>

        {/* Service 1: Automatización */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2 animate-slideInLeft">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center transform rotate-3 shadow-lg">
                    <Lightbulb className="text-white" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">1. AUTOMATIZACIÓN INTELIGENTE</h2>
                </div>

                <h3 className="text-xl font-semibold text-orange-600 mb-6">Espacios institucionales eficientes y confortables</h3>

                <p className="text-gray-700 mb-8 leading-relaxed">
                  Imagínate aulas, oficinas o auditorios que ajusten automáticamente su iluminación y temperatura de acuerdo con el horario, la ocupación o el tipo de actividad. Con SmartPeace, esto se convierte en realidad y permite aprovechar cada recurso de manera óptima.
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-6">¿Qué logramos?</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-orange-50 to-transparent rounded-xl border-l-4 border-orange-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Lightbulb className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Iluminación Adaptativa</span>
                        <p className="text-gray-600 leading-relaxed">Control centralizado de luces para zonas comunes, pasillos y salas de juntas, reduciendo costos y mejorando la visibilidad.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-orange-50 to-transparent rounded-xl border-l-4 border-orange-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Thermometer className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Climatización Inteligente</span>
                        <p className="text-gray-600 leading-relaxed">Termostatos y sensores que ajustan la temperatura según la cantidad de personas y la hora del día.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-orange-50 to-transparent rounded-xl border-l-4 border-orange-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Lightbulb className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Automatización de Equipos</span>
                        <p className="text-gray-600 leading-relaxed">Programación de dispositivos (persianas, proyectores, máquinas de café, etc.) para que funcionen solo cuando se necesitan.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-xl shadow-md">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Beneficios clave:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      Ahorro significativo en servicios de luz y climatización
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      Mejor calidad de estancia para estudiantes, empleados o visitantes
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      Control remoto y centralizado de todas las instalaciones
                    </li>
                  </ul>
                </div>
              </div>

              <div className="md:w-1/2 animate-slideInRight" style={{ animationDelay: '0.2s' }}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Automatización inteligente para instituciones"
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
                    <div className="p-8">
                      <h3 className="text-white text-2xl font-bold mb-3 drop-shadow-lg">Automatización Institucional</h3>
                      <p className="text-gray-200 text-lg">Sistemas inteligentes que optimizan recursos y mejoran la experiencia en espacios educativos y públicos.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Separador */}
        <div className="h-2 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>

        {/* Service 2: Seguridad Integral */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
              <div className="md:w-1/2 animate-slideInRight">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center transform rotate-3 shadow-lg">
                    <Shield className="text-white" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">2. SEGURIDAD INTEGRAL</h2>
                </div>

                <h3 className="text-xl font-semibold text-orange-600 mb-6">Protección completa para tu comunidad educativa</h3>

                <p className="text-gray-700 mb-8 leading-relaxed">
                  La seguridad de estudiantes, personal y visitantes es prioritaria. Con nuestros sistemas avanzados, puedes monitorear accesos, prevenir incidentes y responder rápidamente ante emergencias.
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-6">¿Qué incluye?</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-orange-50 to-transparent rounded-xl border-l-4 border-orange-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Camera className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Vigilancia Perimetral e Interna</span>
                        <p className="text-gray-600 leading-relaxed">Cámaras de alta resolución en entradas, pasillos, patios y áreas sensibles.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-orange-50 to-transparent rounded-xl border-l-4 border-orange-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Bell className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Sistemas de Alertas Tempranas</span>
                        <p className="text-gray-600 leading-relaxed">Alarmas silenciosas y botón de pánico para situaciones de emergencia.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-orange-50 to-transparent rounded-xl border-l-4 border-orange-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Fingerprint className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Control de Accesos por Zonas</span>
                        <p className="text-gray-600 leading-relaxed">Registro de entradas y salidas con credenciales para personal y visitantes.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-orange-50 to-transparent rounded-xl border-l-4 border-orange-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Flame className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Seguridad Contra Incendios</span>
                        <p className="text-gray-600 leading-relaxed">Detectores de humo, rociadores automáticos y sistemas de evacuación.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-xl shadow-md">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Beneficios clave:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      Ambiente seguro para estudiantes y personal
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      Prevención y respuesta rápida ante incidentes
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      Cumplimiento con normativas de seguridad
                    </li>
                  </ul>
                </div>
              </div>

              <div className="md:w-1/2 animate-slideInLeft" style={{ animationDelay: '0.2s' }}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Seguridad integral para instituciones"
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
                    <div className="p-8">
                      <h3 className="text-white text-2xl font-bold mb-3 drop-shadow-lg">Seguridad Institucional</h3>
                      <p className="text-gray-200 text-lg">Protección integral para ambientes educativos y públicos seguros.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Separador */}
        <div className="h-2 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>

        {/* Service 3: Redes y Conectividad */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2 animate-slideInLeft">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center transform rotate-3 shadow-lg">
                    <Wifi className="text-white" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">3. REDES Y CONECTIVIDAD</h2>
                </div>

                <h3 className="text-xl font-semibold text-orange-600 mb-6">Conectividad institucional de alto rendimiento</h3>

                <p className="text-gray-700 mb-8 leading-relaxed">
                  Una institución moderna requiere infraestructura de red robusta para laboratorios, aulas digitales, sistemas administrativos y acceso a internet para toda la comunidad educativa.
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-6">¿Qué ofrecemos?</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-orange-50 to-transparent rounded-xl border-l-4 border-orange-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Network className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Infraestructura de Red Campus</span>
                        <p className="text-gray-600 leading-relaxed">Cableado estructurado de alta velocidad entre edificios y salas.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-orange-50 to-transparent rounded-xl border-l-4 border-orange-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Radio className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Wi-Fi Institucional</span>
                        <p className="text-gray-600 leading-relaxed">Cobertura completa con capacidad para miles de usuarios simultáneos.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-orange-50 to-transparent rounded-xl border-l-4 border-orange-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Lock className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Seguridad y Filtrado de Contenido</span>
                        <p className="text-gray-600 leading-relaxed">Control de acceso a internet con filtros apropiados para entornos educativos.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-orange-50 to-transparent rounded-xl border-l-4 border-orange-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Building2 className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Gestión Centralizada</span>
                        <p className="text-gray-600 leading-relaxed">Administración de red desde un punto central con monitoreo en tiempo real.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-xl shadow-md">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Beneficios clave:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      Acceso equitativo a recursos digitales
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      Red segura con control parental institucional
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      Soporte para aprendizaje digital y híbrido
                    </li>
                  </ul>
                </div>
              </div>

              <div className="md:w-1/2 animate-slideInRight" style={{ animationDelay: '0.2s' }}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Redes y conectividad institucional"
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
                    <div className="p-8">
                      <h3 className="text-white text-2xl font-bold mb-3 drop-shadow-lg">Red Campus</h3>
                      <p className="text-gray-200 text-lg">Conectividad de alto rendimiento para educación del siglo XXI.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Separador */}
        <div className="h-2 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>

        {/* Service 4: Consultoría y Personalización */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
              <div className="md:w-1/2 animate-slideInRight">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center transform rotate-3 shadow-lg">
                    <Users className="text-white" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">4. CONSULTORÍA Y PERSONALIZACIÓN</h2>
                </div>

                <h3 className="text-xl font-semibold text-orange-600 mb-6">Soluciones educativas a medida</h3>

                <p className="text-gray-700 mb-8 leading-relaxed">
                  Cada institución tiene necesidades particulares según su tamaño, presupuesto y objetivos educativos. Diseñamos soluciones que se adaptan perfectamente a tu realidad institucional.
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-6">¿Cómo te ayudamos?</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-orange-50 to-transparent rounded-xl border-l-4 border-orange-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Users className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Evaluación Institucional</span>
                        <p className="text-gray-600 leading-relaxed">Análisis de infraestructura actual y propuesta de mejoras tecnológicas.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-orange-50 to-transparent rounded-xl border-l-4 border-orange-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Cog className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Integración con Sistemas Académicos</span>
                        <p className="text-gray-600 leading-relaxed">Compatibilidad con plataformas educativas y sistemas administrativos.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-orange-50 to-transparent rounded-xl border-l-4 border-orange-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Tool className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Capacitación del Personal</span>
                        <p className="text-gray-600 leading-relaxed">Talleres para docentes y administrativos en el uso de tecnologías.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-xl shadow-md">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Beneficios clave:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      Inversión optimizada en tecnología educativa
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      Solución adaptada a objetivos pedagógicos
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      Personal capacitado y con confianza digital
                    </li>
                  </ul>
                </div>
              </div>

              <div className="md:w-1/2 animate-slideInLeft" style={{ animationDelay: '0.2s' }}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Consultoría educativa"
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
                    <div className="p-8">
                      <h3 className="text-white text-2xl font-bold mb-3 drop-shadow-lg">Asesoría Educativa</h3>
                      <p className="text-gray-200 text-lg">Planeación estratégica para modernización institucional.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Separador */}
        <div className="h-2 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>

        {/* Service 5: Mantenimiento y Soporte */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2 animate-slideInLeft">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center transform rotate-3 shadow-lg">
                    <Tool className="text-white" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">5. MANTENIMIENTO Y SOPORTE</h2>
                </div>

                <h3 className="text-xl font-semibold text-orange-600 mb-6">Soporte continuo para operación sin interrupciones</h3>

                <p className="text-gray-700 mb-8 leading-relaxed">
                  Las instituciones no pueden darse el lujo de interrupciones tecnológicas. Nuestro equipo de soporte garantiza que todos tus sistemas funcionen correctamente durante todo el ciclo escolar.
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-6">¿Qué incluye nuestro soporte?</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-orange-50 to-transparent rounded-xl border-l-4 border-orange-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Tool className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Mantenimiento Programado</span>
                        <p className="text-gray-600 leading-relaxed">Revisiones periódicas durante periodos no lectivos para evitar interrupciones.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-orange-50 to-transparent rounded-xl border-l-4 border-orange-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <RefreshCw className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Actualizaciones de Seguridad</span>
                        <p className="text-gray-600 leading-relaxed">Mejoras constantes para proteger datos sensibles y cumplir regulaciones.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-orange-50 to-transparent rounded-xl border-l-4 border-orange-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <PhoneCall className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Mesa de Ayuda Institucional</span>
                        <p className="text-gray-600 leading-relaxed">Línea directa para personal administrativo y docente con respuesta rápida.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-xl shadow-md">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Beneficios clave:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      Operación continua sin interrupciones académicas
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      Protección de datos sensibles de estudiantes
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      Soporte técnico rápido y confiable
                    </li>
                  </ul>
                </div>
              </div>

              <div className="md:w-1/2 animate-slideInRight" style={{ animationDelay: '0.2s' }}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Soporte técnico institucional"
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
                    <div className="p-8">
                      <h3 className="text-white text-2xl font-bold mb-3 drop-shadow-lg">Soporte Institucional</h3>
                      <p className="text-gray-200 text-lg">Mantenimiento especializado para continuidad educativa.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Separador */}
        <div className="h-2 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-orange-600 via-amber-600 to-orange-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn drop-shadow-lg">
              ¿LISTO PARA MODERNIZAR TU INSTITUCIÓN?
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              Optimiza recursos, mejora la seguridad y ofrece una mejor experiencia con tecnología de vanguardia.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-orange-700 px-8 py-4 rounded-xl hover:bg-orange-50 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 group"
              >
                Solicita tu Evaluación Institucional
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={22} />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-orange-800 text-white px-8 py-4 rounded-xl hover:bg-orange-900 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 group"
              >
                <MessageCircle size={22} />
                Contactar por WhatsApp
              </a>
            </div>

            <p className="mt-12 text-lg font-light italic animate-fadeIn opacity-90" style={{ animationDelay: '0.5s' }}>
              SmartPeace – Tecnología inteligente para instituciones modernas.
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

export default InstitucionalPage;
