import React from 'react';
import {
  Home, Shield, Wifi, Headphones, Wrench, Lightbulb, Thermometer, Tv,
  Palette, Camera, Bell, Fingerprint, Flame, Network, Radio, Lock,
  Building2, Users, Cog, PenTool as Tool, RefreshCw, PhoneCall, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Home,
    title: 'Automatización Inteligente',
    description: 'Transforma tu espacio en un entorno inteligente y eficiente, adaptado a tu estilo de vida.',
    features: [
      {
        icon: Lightbulb,
        title: 'Iluminación Inteligente',
        description: 'Control remoto, programación por horarios y sensores de presencia.'
      },
      {
        icon: Thermometer,
        title: 'Climatización 360°',
        description: 'Termostatos inteligentes y automatización de aires acondicionados.'
      },
      {
        icon: Tv,
        title: 'Gestión de Electrodomésticos',
        description: 'Control de persianas, cafeteras, televisores y más desde una app.'
      },
      {
        icon: Palette,
        title: 'Escenas Personalizadas',
        description: 'Modos como "Cine", "Trabajo" o "Descanso" con un solo toque.'
      }
    ],
    benefit: 'Vive con mayor comodidad y eficiencia, adaptando tu hogar o negocio a tu estilo de vida.'
  },
  {
    icon: Shield,
    title: 'Seguridad Integral',
    description: 'Sistemas de seguridad avanzados con monitoreo y control en tiempo real.',
    features: [
      {
        icon: Camera,
        title: 'Vigilancia 24/7',
        description: 'Cámaras HD con detección de movimiento y acceso remoto.'
      },
      {
        icon: Bell,
        title: 'Sistemas de Alarma Multi-Capa',
        description: 'Sensores de puertas, ventanas y movimiento con alertas.'
      },
      {
        icon: Fingerprint,
        title: 'Control de Accesos',
        description: 'Cerraduras inteligentes con huella y tarjetas RFID.'
      },
      {
        icon: Flame,
        title: 'Protección Contra Incendios',
        description: 'Sensores de humo, gas y agua con apagado automático.'
      }
    ],
    benefit: 'Tranquilidad y seguridad en todo momento, con monitoreo y alertas en tiempo real.'
  },
  {
    icon: Wifi,
    title: 'Redes y Conectividad',
    description: 'Soluciones de conectividad robustas y seguras para hogares y empresas.',
    features: [
      {
        icon: Network,
        title: 'Cableado Estructurado',
        description: 'Redes Ethernet de alta capacidad para hogares y empresas.'
      },
      {
        icon: Radio,
        title: 'Wi-Fi Optimizado',
        description: 'Sistemas Mesh para cobertura total sin zonas muertas.'
      },
      {
        icon: Lock,
        title: 'Seguridad de Redes',
        description: 'Redes separadas para invitados y dispositivos IoT.'
      },
      {
        icon: Building2,
        title: 'Automatización Empresarial',
        description: 'Integración de sistemas en una única plataforma.'
      }
    ],
    benefit: 'Internet estable y seguro en cualquier rincón, con capacidad para múltiples dispositivos.'
  },
  {
    icon: Headphones,
    title: 'Consultoría y Personalización',
    description: 'Asesoramiento experto para crear soluciones a medida de tus necesidades.',
    features: [
      {
        icon: Users,
        title: 'Asesoría Personalizada',
        description: 'Soluciones a medida según necesidades específicas.'
      },
      {
        icon: Cog,
        title: 'Integración de Dispositivos',
        description: 'Adaptación a equipos ya instalados.'
      },
      {
        icon: Tool,
        title: 'Capacitación y Soporte',
        description: 'Entrenamiento para maximizar el uso de sistemas.'
      }
    ],
    benefit: 'Soluciones hechas a la medida, asegurando compatibilidad y funcionalidad óptima.'
  },
  {
    icon: Wrench,
    title: 'Mantenimiento y Soporte',
    description: 'Servicio técnico especializado para mantener tus sistemas funcionando perfectamente.',
    features: [
      {
        icon: Tool,
        title: 'Diagnóstico y Reparación',
        description: 'Detección y solución de fallas en sistemas.'
      },
      {
        icon: RefreshCw,
        title: 'Actualización de Equipos',
        description: 'Mejora de dispositivos y software.'
      },
      {
        icon: PhoneCall,
        title: 'Soporte Remoto y en Sitio',
        description: 'Atención rápida para problemas técnicos.'
      }
    ],
    benefit: 'Garantía de un sistema siempre operativo y actualizado, sin preocupaciones técnicas.'
  }
];

const Services = () => {
  const lastService = services[services.length - 1];
  const mainServices = services.slice(0, services.length - 1);

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fadeIn">
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl px-2">Nuestros Servicios</h2>
          <p className="section-subtitle text-base sm:text-lg px-2">
            Descubre cómo nuestras soluciones inteligentes pueden transformar tu espacio en un entorno más seguro y eficiente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {mainServices.map((service, index) => (
            <div
              key={index}
              className="card p-5 sm:p-6 md:p-8 group animate-fadeIn"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="relative flex-shrink-0">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary rounded-2xl flex items-center justify-center transform rotate-3 group-hover:rotate-6 transition-transform duration-300">
                    <service.icon className="text-white" size={28} />
                  </div>
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-150 -z-10 group-hover:scale-175 transition-transform duration-300"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{service.description}</p>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
                {service.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 active:scale-98"
                  >
                    <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                      <feature.icon className="text-primary flex-shrink-0" size={18} />
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{feature.title}</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 pl-6 sm:pl-7">{feature.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 border-l-4 border-primary p-3 sm:p-4 rounded-r-lg mb-3 sm:mb-4">
                <p className="text-sm sm:text-base text-gray-700">
                  <span className="font-semibold">Beneficio Clave:</span> {service.benefit}
                </p>
              </div>

              <div className="mt-auto pt-3 sm:pt-4 border-t border-gray-100">
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">Ver este servicio aplicado en:</p>
                <div className="flex flex-wrap gap-2">
                  <Link to="/sectores/residencial" className="inline-flex items-center gap-1 text-xs font-medium text-green-700 bg-green-50 px-3 py-2 sm:py-1.5 rounded-full hover:bg-green-100 transition-colors active:scale-95 min-h-[44px] sm:min-h-[auto]">
                    <Home size={14} />
                    Residencial
                  </Link>
                  <Link to="/sectores/corporativo" className="inline-flex items-center gap-1 text-xs font-medium text-blue-700 bg-blue-50 px-3 py-2 sm:py-1.5 rounded-full hover:bg-blue-100 transition-colors active:scale-95 min-h-[44px] sm:min-h-[auto]">
                    <Building2 size={14} />
                    Corporativo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Last service card centered */}
        <div className="mt-6 sm:mt-8 flex justify-center">
          <div
            className="card p-5 sm:p-6 md:p-8 group animate-fadeIn max-w-2xl w-full"
            style={{ animationDelay: '1s' }}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="relative flex-shrink-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary rounded-2xl flex items-center justify-center transform rotate-3 group-hover:rotate-6 transition-transform duration-300">
                  <lastService.icon className="text-white" size={28} />
                </div>
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-150 -z-10 group-hover:scale-175 transition-transform duration-300"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">{lastService.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{lastService.description}</p>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
              {lastService.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 active:scale-98"
                >
                  <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <feature.icon className="text-primary flex-shrink-0" size={18} />
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{feature.title}</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 pl-6 sm:pl-7">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-primary/5 border-l-4 border-primary p-3 sm:p-4 rounded-r-lg">
              <p className="text-sm sm:text-base text-gray-700">
                <span className="font-semibold">Beneficio Clave:</span> {lastService.benefit}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;