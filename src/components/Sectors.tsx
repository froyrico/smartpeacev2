import React from 'react';
import { Home, Building2, GraduationCap, Shield, Thermometer, Users, Network, Key, Lightbulb, Wifi, Camera, DoorClosed, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const sectors = [
  {
    icon: Home,
    image: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Residencial y Condominios',
    description: 'Soluciones inteligentes para hogares y edificios residenciales que mejoran la calidad de vida.',
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
    <section id="sectors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="section-title">Sectores que Atendemos</h2>
          <p className="section-subtitle">
            Soluciones especializadas y adaptadas para cada sector, garantizando resultados óptimos según las necesidades específicas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl animate-fadeIn bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={sector.image} 
                  alt={sector.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                      <sector.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{sector.title}</h3>
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-gray-900 mb-6 font-medium">{sector.description}</p>
                
                <div className="space-y-4 mb-6">
                  {sector.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 group/feature">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover/feature:bg-primary/20 transition-colors duration-300">
                        <feature.icon className="text-primary" size={18} />
                      </div>
                      <p className="text-gray-900 font-medium">{feature.text}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <Link 
                    to={sector.path}
                    className="btn-primary w-full justify-center group"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Saber más
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
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