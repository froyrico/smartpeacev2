import React from 'react';
import { CheckCircle, Star, Award, Users, ThumbsUp } from 'lucide-react';

const stats = [
  { 
    icon: Award,
    value: '100+', 
    label: 'Proyectos Completados',
    color: 'bg-blue-500' 
  },
  { 
    icon: Star,
    value: '98%', 
    label: 'Satisfacción del Cliente',
    color: 'bg-yellow-500'
  },
  { 
    icon: Users,
    value: '5+', 
    label: 'Años de Experiencia',
    color: 'bg-purple-500'
  },
  { 
    icon: ThumbsUp,
    value: '10+', 
    label: 'Expertos Certificados',
    color: 'bg-green-500'
  },
];

const testimonials = [
  {
    quote: "Gracias a SmartPeace, ahora nuestra escuela y centro de terapias cuenta con un sistema de seguridad completo. Instalamos cámaras de vigilancia en áreas clave, un sistema de audio eficiente y una cerradura magnética que nos brinda mayor control de acceso. La instalación fue rápida y profesional, y nos sentimos mucho más seguros con la solución que nos ofrecieron. ¡Altamente recomendados!",
    author: "Administración de CEANI",
    position: "CEANI - Escuela y Centro de Terapias"
  },
  {
    quote: "En MEDNAT necesitábamos reforzar la seguridad de nuestras instalaciones, y SmartPeace superó nuestras expectativas. Nos implementaron un sistema avanzado de control de accesos, cámaras de vigilancia y alarmas que nos brindan total tranquilidad. Ahora tenemos un monitoreo eficiente y un acceso restringido solo para personal autorizado. Excelente servicio y atención al detalle.",
    author: "Gerencia de MEDNAT",
    position: "MEDNAT - Empresa de Medicamentos Naturales"
  },
  {
    quote: "Siempre quise automatizar mi casa, pero no sabía por dónde empezar. SmartPeace me asesoró desde el principio y ahora puedo controlar la iluminación, la climatización y la seguridad desde mi celular. La instalación fue rápida y limpia, y el equipo estuvo atento a cada detalle. ¡Totalmente recomendado!",
    author: "Daniel R.",
    position: "Propietario de Casa Inteligente"
  },
  {
    quote: "Teníamos problemas con la seguridad y la conectividad en nuestra oficina, pero gracias a SmartPeace ahora tenemos un sistema de cámaras de vigilancia, acceso con tarjetas RFID y una red Wi-Fi optimizada. El equipo fue muy profesional y nos explicaron todo el proceso. ¡Un servicio increíble que realmente hace la diferencia!",
    author: "Laura M.",
    position: "Gerente de Oficina"
  }
];

const TrustIndicators = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="relative group animate-fadeIn"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`absolute inset-0 ${stat.color} opacity-10 rounded-xl group-hover:opacity-20 transition-opacity duration-300`}></div>
              <div className="relative p-6 text-center">
                <stat.icon className={`mx-auto mb-4 ${stat.color} text-white rounded-full p-2`} size={40} />
                <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="section-title">Lo que Dicen Nuestros Clientes</h2>
          <p className="section-subtitle">
            Descubre por qué las empresas líderes confían en nuestras soluciones inteligentes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-8 relative group animate-fadeIn"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="absolute top-0 right-0 transform -translate-y-1/4 translate-x-1/4">
                <div className="text-primary opacity-10 transform scale-150">
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.70.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003z" />
                  </svg>
                </div>
              </div>

              <div className="flex flex-col mb-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <blockquote className="text-gray-700 italic relative mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="mt-auto">
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;