import React from 'react';
import { Home, Building2, GraduationCap, Shield, Thermometer, Users, Network, Key, Lightbulb, Wifi, Camera, DoorClosed, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const sectors = [
  {
    icon: Home,
    image: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Residencial y Condominios',
    description: 'Soluciones inteligentes para hogares y edificios residenciales que mejoran la calidad de vida.',
    colorScheme: {
      primary: 'from-green-500 to-emerald-600',
      light: 'bg-green-50',
      accent: 'border-green-500',
      text: 'text-green-600',
      hover: 'hover:bg-green-100'
    },
    features: [
      {
        icon: Lightbulb,
        text: 'Automatización de iluminación, climatización y seguridad'
      },
      {
        icon: Camera,
        text: 'Monitoreo 24/7 con cámaras y sensores inteligentes'
      },
      {
        icon: Key,
        text: 'Control de accesos con cerraduras digitales y tarjetas RFID'
      }
    ],
    path: '/sectores/residencial'
  },
  {
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Corporativo y Comercial',
    description: 'Soluciones empresariales para oficinas, hoteles y negocios que optimizan operaciones.',
    colorScheme: {
      primary: 'from-blue-500 to-indigo-600',
      light: 'bg-blue-50',
      accent: 'border-blue-500',
      text: 'text-blue-600',
      hover: 'hover:bg-blue-100'
    },
    features: [
      {
        icon: Thermometer,
        text: 'Gestión inteligente de energía y climatización'
      },
      {
        icon: Shield,
        text: 'Videovigilancia y sistemas de control de acceso'
      },
      {
        icon: Network,
        text: 'Redes seguras y de alto rendimiento'
      }
    ],
    path: '/sectores/corporativo'
  },
  {
    icon: GraduationCap,
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Institucional',
    description: 'Tecnología avanzada para escuelas y estacionamientos que garantizan seguridad y eficiencia.',
    colorScheme: {
      primary: 'from-orange-500 to-amber-600',
      light: 'bg-orange-50',
      accent: 'border-orange-500',
      text: 'text-orange-600',
      hover: 'hover:bg-orange-100'
    },
    features: [
      {
        icon: Wifi,
        text: 'Implementación de redes seguras para alumnos y personal'
      },
      {
        icon: Camera,
        text: 'Cámaras de seguridad y accesos inteligentes'
      },
      {
        icon: DoorClosed,
        text: 'Sistemas de iluminación y gestión de espacios inteligentes'
      }
    ],
    path: '/sectores/institucional'
  }
];

const Sectors = () => {
  return (
    <section id="sectors" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fadeIn">
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl px-2">Sectores que Atendemos</h2>
          <p className="section-subtitle text-base sm:text-lg px-2">
            Soluciones especializadas y adaptadas para cada sector, garantizando resultados óptimos según las necesidades específicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl animate-fadeIn bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col active:scale-[0.99]"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${sector.colorScheme.primary} opacity-70`}></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300 shadow-lg flex-shrink-0">
                      <sector.icon className={sector.colorScheme.text} size={20} />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white drop-shadow-lg">{sector.title}</h3>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
                <p className="text-sm sm:text-base text-gray-900 mb-4 sm:mb-6 font-medium">{sector.description}</p>

                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  {sector.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 sm:gap-3 group/feature">
                      <div className={`w-7 h-7 sm:w-8 sm:h-8 ${sector.colorScheme.light} rounded-lg flex items-center justify-center ${sector.colorScheme.hover} transition-colors duration-300 flex-shrink-0`}>
                        <feature.icon className={sector.colorScheme.text} size={16} />
                      </div>
                      <p className="text-xs sm:text-sm md:text-base text-gray-900 font-medium leading-snug">{feature.text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <Link
                    to={sector.path}
                    className="btn-primary w-full justify-center group min-h-[48px] text-sm sm:text-base active:scale-95"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Saber más
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;