import React, { useEffect } from 'react';
import { ArrowRight, Building2, Lightbulb, Thermometer, Camera, Shield, Network, Wifi, Music, MessageCircle, Bell, Fingerprint, Flame, Lock, Radio, Users, Cog, PenTool as Tool, RefreshCw, PhoneCall } from 'lucide-react';
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
                    src="/airesidencia (1).jpg"
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

        {/* Service 2: Seguridad Integral */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
              <div className="md:w-1/2 animate-slideInRight">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center transform rotate-3 shadow-lg">
                    <Shield className="text-white" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">2. SEGURIDAD INTEGRAL</h2>
                </div>

                <h3 className="text-xl font-semibold text-blue-600 mb-6">Protege tu negocio, tus activos y tu equipo</h3>

                <p className="text-gray-700 mb-8 leading-relaxed">
                  Un comercio seguro genera confianza en tus clientes y protege tus inversiones. Con nuestros sistemas de seguridad avanzados, puedes monitorear todo en tiempo real y responder rápidamente ante cualquier incidente.
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-6">¿Qué incluye?</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-blue-50 to-transparent rounded-xl border-l-4 border-blue-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Camera className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Vigilancia Profesional 24/7</span>
                        <p className="text-gray-600 leading-relaxed">Cámaras HD de grado comercial con grabación continua y acceso remoto multidispositivo.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-blue-50 to-transparent rounded-xl border-l-4 border-blue-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Bell className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Sistemas de Alarma Empresarial</span>
                        <p className="text-gray-600 leading-relaxed">Protección perimetral completa con sensores en puertas, ventanas y áreas críticas.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-blue-50 to-transparent rounded-xl border-l-4 border-blue-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Fingerprint className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Control de Accesos Empresarial</span>
                        <p className="text-gray-600 leading-relaxed">Registro de entradas y salidas, tarjetas de proximidad y control por zonas.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-blue-50 to-transparent rounded-xl border-l-4 border-blue-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Flame className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Protección Contra Incendios y Emergencias</span>
                        <p className="text-gray-600 leading-relaxed">Detección temprana de humo, gas y agua con sistemas de supresión.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-md">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Beneficios clave:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Reducción de pérdidas por robo o vandalismo
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Evidencia grabada para investigaciones
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Mayor confianza de clientes y empleados
                    </li>
                  </ul>
                </div>
              </div>

              <div className="md:w-1/2 animate-slideInLeft" style={{ animationDelay: '0.2s' }}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Seguridad integral para negocios"
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
                    <div className="p-8">
                      <h3 className="text-white text-2xl font-bold mb-3 drop-shadow-lg">Seguridad Comercial</h3>
                      <p className="text-gray-200 text-lg">Protección integral para tu negocio con tecnología de grado empresarial.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Separador */}
        <div className="h-2 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

        {/* Service 3: Redes y Conectividad */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2 animate-slideInLeft">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center transform rotate-3 shadow-lg">
                    <Wifi className="text-white" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">3. REDES Y CONECTIVIDAD</h2>
                </div>

                <h3 className="text-xl font-semibold text-blue-600 mb-6">Conectividad empresarial de alta capacidad</h3>

                <p className="text-gray-700 mb-8 leading-relaxed">
                  Un negocio moderno necesita una red robusta que soporte múltiples dispositivos, puntos de venta, sistemas de inventario y clientes conectados simultáneamente sin comprometer velocidad ni seguridad.
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-6">¿Qué ofrecemos?</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-blue-50 to-transparent rounded-xl border-l-4 border-blue-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Network className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Infraestructura de Red Empresarial</span>
                        <p className="text-gray-600 leading-relaxed">Cableado estructurado Cat6/Cat6a para máxima velocidad y confiabilidad.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-blue-50 to-transparent rounded-xl border-l-4 border-blue-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Radio className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Wi-Fi Empresarial</span>
                        <p className="text-gray-600 leading-relaxed">Puntos de acceso de alta densidad para soportar cientos de conexiones simultáneas.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-blue-50 to-transparent rounded-xl border-l-4 border-blue-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Lock className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Seguridad y Segmentación</span>
                        <p className="text-gray-600 leading-relaxed">VLANs separadas para empleados, clientes, IoT y sistemas críticos.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-blue-50 to-transparent rounded-xl border-l-4 border-blue-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Building2 className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Integración de Sistemas</span>
                        <p className="text-gray-600 leading-relaxed">Centralización de todos tus sistemas en una plataforma de gestión unificada.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-md">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Beneficios clave:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Red estable para operaciones críticas
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Wi-Fi gratuito para clientes con portal personalizado
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Protección contra ciberataques
                    </li>
                  </ul>
                </div>
              </div>

              <div className="md:w-1/2 animate-slideInRight" style={{ animationDelay: '0.2s' }}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Redes y conectividad empresarial"
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
                    <div className="p-8">
                      <h3 className="text-white text-2xl font-bold mb-3 drop-shadow-lg">Red Empresarial</h3>
                      <p className="text-gray-200 text-lg">Infraestructura de alta capacidad para operaciones comerciales.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Separador */}
        <div className="h-2 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

        {/* Service 4: Consultoría y Personalización */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
              <div className="md:w-1/2 animate-slideInRight">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center transform rotate-3 shadow-lg">
                    <Users className="text-white" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">4. CONSULTORÍA Y PERSONALIZACIÓN</h2>
                </div>

                <h3 className="text-xl font-semibold text-blue-600 mb-6">Soluciones empresariales a medida</h3>

                <p className="text-gray-700 mb-8 leading-relaxed">
                  Cada negocio tiene necesidades únicas. Trabajamos contigo para entender tus procesos, objetivos y desafíos, diseñando una solución tecnológica que impulse tu crecimiento.
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-6">¿Cómo te ayudamos?</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-blue-50 to-transparent rounded-xl border-l-4 border-blue-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Users className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Asesoría Empresarial</span>
                        <p className="text-gray-600 leading-relaxed">Análisis detallado de tus operaciones para proponer mejoras tecnológicas efectivas.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-blue-50 to-transparent rounded-xl border-l-4 border-blue-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Cog className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Integración con Sistemas Existentes</span>
                        <p className="text-gray-600 leading-relaxed">Compatibilidad con tu software de punto de venta, inventario y CRM.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-blue-50 to-transparent rounded-xl border-l-4 border-blue-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Tool className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Capacitación del Personal</span>
                        <p className="text-gray-600 leading-relaxed">Entrenamiento completo para tu equipo en el uso de todos los sistemas.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-md">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Beneficios clave:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      ROI optimizado en tecnología
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Integración fluida con operaciones actuales
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Personal capacitado y productivo
                    </li>
                  </ul>
                </div>
              </div>

              <div className="md:w-1/2 animate-slideInLeft" style={{ animationDelay: '0.2s' }}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Consultoría empresarial"
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
                    <div className="p-8">
                      <h3 className="text-white text-2xl font-bold mb-3 drop-shadow-lg">Asesoría Profesional</h3>
                      <p className="text-gray-200 text-lg">Soluciones estratégicas para optimizar tu negocio.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Separador */}
        <div className="h-2 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

        {/* Service 5: Mantenimiento y Soporte */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2 animate-slideInLeft">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center transform rotate-3 shadow-lg">
                    <Tool className="text-white" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">5. MANTENIMIENTO Y SOPORTE</h2>
                </div>

                <h3 className="text-xl font-semibold text-blue-600 mb-6">Soporte empresarial prioritario</h3>

                <p className="text-gray-700 mb-8 leading-relaxed">
                  El tiempo de inactividad cuesta dinero. Nuestro equipo de soporte está listo para resolver cualquier problema rápidamente, mantener tus sistemas actualizados y garantizar operaciones sin interrupciones.
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-6">¿Qué incluye nuestro soporte empresarial?</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-blue-50 to-transparent rounded-xl border-l-4 border-blue-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Tool className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Mantenimiento Preventivo</span>
                        <p className="text-gray-600 leading-relaxed">Revisiones periódicas para detectar y prevenir problemas antes de que ocurran.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-blue-50 to-transparent rounded-xl border-l-4 border-blue-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <RefreshCw className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Actualizaciones Programadas</span>
                        <p className="text-gray-600 leading-relaxed">Mejoras de seguridad y funcionalidad sin interrumpir tu operación.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-5 bg-gradient-to-r from-blue-50 to-transparent rounded-xl border-l-4 border-blue-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <PhoneCall className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 block mb-2 text-lg">Soporte Prioritario</span>
                        <p className="text-gray-600 leading-relaxed">Línea directa de atención con tiempos de respuesta garantizados.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-md">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Beneficios clave:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Minimiza tiempo de inactividad
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Sistemas siempre actualizados y seguros
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Resolución rápida de problemas críticos
                    </li>
                  </ul>
                </div>
              </div>

              <div className="md:w-1/2 animate-slideInRight" style={{ animationDelay: '0.2s' }}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src="https://images.unsplash.com/photo-1556742393-d75f468bfcb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Soporte técnico empresarial"
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
                    <div className="p-8">
                      <h3 className="text-white text-2xl font-bold mb-3 drop-shadow-lg">Soporte Empresarial</h3>
                      <p className="text-gray-200 text-lg">Mantenimiento profesional para garantizar continuidad operativa.</p>
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
