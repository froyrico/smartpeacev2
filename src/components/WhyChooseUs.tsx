import React from 'react';
import { Check, X, Award, Users, Headphones, Shield, Wrench, Zap } from 'lucide-react';

const WhyChooseUs = () => {
  const comparisons = [
    {
      feature: 'Garantía de Instalación',
      smartpeace: true,
      others: false
    },
    {
      feature: 'Soporte Técnico 24/7',
      smartpeace: true,
      others: false
    },
    {
      feature: 'Consultoría Personalizada',
      smartpeace: true,
      others: false
    },
    {
      feature: 'Integración de Sistemas Existentes',
      smartpeace: true,
      others: false
    },
    {
      feature: 'Capacitación Incluida',
      smartpeace: true,
      others: false
    },
    {
      feature: 'Mantenimiento Preventivo',
      smartpeace: true,
      others: false
    },
    {
      feature: 'Monitoreo Remoto',
      smartpeace: true,
      others: 'Costo Extra'
    },
    {
      feature: 'Actualizaciones de Software',
      smartpeace: true,
      others: 'Costo Extra'
    }
  ];

  const advantages = [
    {
      icon: Award,
      title: 'Experiencia Comprobada',
      description: 'Más de 5 años transformando espacios en Guadalajara con tecnología de vanguardia.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Users,
      title: 'Equipo Certificado',
      description: 'Técnicos capacitados y certificados en las últimas tecnologías de automatización y seguridad.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Headphones,
      title: 'Atención Personalizada',
      description: 'Cada proyecto es único. Diseñamos soluciones adaptadas a tus necesidades específicas.',
      color: 'from-orange-500 to-amber-600'
    },
    {
      icon: Shield,
      title: 'Garantía Total',
      description: 'Garantía extendida en todos nuestros productos y servicios. Tu inversión está protegida.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Wrench,
      title: 'Mantenimiento Incluido',
      description: 'Revisiones periódicas sin costo adicional para mantener tu sistema funcionando perfectamente.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Zap,
      title: 'Respuesta Inmediata',
      description: 'Tiempo de respuesta garantizado. Estamos aquí cuando nos necesites, 24/7.',
      color: 'from-orange-500 to-amber-600'
    }
  ];

  return (
    <section id="why-choose-us" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fadeIn">
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl px-2">
            ¿Por Qué Elegir SmartPeace?
          </h2>
          <p className="section-subtitle text-base sm:text-lg px-2 max-w-3xl mx-auto">
            No todos los servicios de automatización y seguridad son iguales. Descubre qué nos hace diferentes.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mb-12 sm:mb-16 md:mb-20 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="bg-gradient-to-r from-green-50 to-emerald-50 border-b-2 border-green-200">
                    <th className="px-4 sm:px-6 py-4 sm:py-5 text-left">
                      <span className="text-base sm:text-lg font-bold text-gray-800">Características</span>
                    </th>
                    <th className="px-4 sm:px-6 py-4 sm:py-5 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                          <Award className="text-white" size={24} />
                        </div>
                        <span className="text-base sm:text-lg font-bold text-green-700">SmartPeace</span>
                      </div>
                    </th>
                    <th className="px-4 sm:px-6 py-4 sm:py-5 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-300 rounded-xl flex items-center justify-center">
                          <Users className="text-gray-600" size={24} />
                        </div>
                        <span className="text-base sm:text-lg font-bold text-gray-600">Otros Servicios</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((item, index) => (
                    <tr
                      key={index}
                      className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                      }`}
                    >
                      <td className="px-4 sm:px-6 py-4 sm:py-5">
                        <span className="text-sm sm:text-base font-medium text-gray-800">{item.feature}</span>
                      </td>
                      <td className="px-4 sm:px-6 py-4 sm:py-5 text-center">
                        <div className="flex justify-center">
                          {item.smartpeace === true && (
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center">
                              <Check className="text-green-600" size={20} />
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 py-4 sm:py-5 text-center">
                        <div className="flex justify-center items-center">
                          {item.others === false ? (
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-100 rounded-full flex items-center justify-center">
                              <X className="text-red-600" size={20} />
                            </div>
                          ) : (
                            <span className="text-xs sm:text-sm font-medium text-orange-600 bg-orange-50 px-2 sm:px-3 py-1 rounded-full">
                              {item.others}
                            </span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Advantages Grid */}
        <div className="animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-10 md:mb-12 px-2">
            Nuestras Ventajas Competitivas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="card p-5 sm:p-6 group hover:shadow-xl transition-all duration-300 animate-fadeIn"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="relative mb-4 sm:mb-5">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${advantage.color} rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300 shadow-lg`}>
                    <advantage.icon className="text-white" size={28} />
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${advantage.color} opacity-20 blur-xl rounded-full scale-150 -z-10 group-hover:scale-175 transition-transform duration-300`}></div>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">
                  {advantage.title}
                </h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-16 text-center animate-fadeIn" style={{ animationDelay: '1s' }}>
          <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-green-50 rounded-2xl p-6 sm:p-8 md:p-10 border-2 border-green-200">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 px-2">
              ¿Listo para experimentar la diferencia SmartPeace?
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
              Únete a más de 100 clientes satisfechos que ya transformaron sus espacios con nuestras soluciones inteligentes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-2">
              <a
                href="#contact"
                className="btn-primary group min-h-[52px] sm:min-h-[48px] text-base sm:text-base active:scale-95 justify-center"
              >
                Agenda tu Consulta Gratuita
              </a>
              <a
                href="#services"
                className="btn-secondary group min-h-[52px] sm:min-h-[48px] text-base sm:text-base active:scale-95 justify-center"
              >
                Ver Nuestros Servicios
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
