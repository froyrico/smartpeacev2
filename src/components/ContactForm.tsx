import React, { useState, useRef } from 'react';
import { Phone, Mail, MapPin, Send, Loader, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const whatsappNumber = '523311090460';
  const whatsappMessage = encodeURIComponent('Hola, me gustaría obtener más información sobre sus servicios.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        'service_5b0gq6t',
        'template_nuxujfk',
        formRef.current,
        'DK5w8VbjOaCUPEbwS'
      );

      if (result.text === 'OK') {
        toast.success('¡Mensaje enviado con éxito! Te contactaremos pronto.');
        formRef.current.reset();
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fadeIn">
            <h2 className="section-title">Contáctanos</h2>
            <p className="text-gray-600 mb-8">
              ¿Listo para transformar tu espacio? Contáctanos para una consulta y cotización gratuita.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: Phone, title: 'Teléfono', content: '+52 33 1109 0460' },
                { icon: Mail, title: 'Correo', content: 'froylan@smartpeace.mx' },
                { icon: MapPin, title: 'Dirección', content: 'Hidalgo 216, Zapopan, CP.45200' }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                    <item.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-green-600 hover:bg-green-700 border-0 w-full justify-center"
              >
                <MessageCircle size={24} />
                Contactar por WhatsApp
              </a>
            </div>

            {/* Google Maps Embed */}
            <div className="mt-12 rounded-xl overflow-hidden shadow-lg h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.7897363864747!2d-103.3897247!3d20.674897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae4e98d5453d%3A0xa0f2d0dd574f2d4a!2sHidalgo%20216%2C%20Zapopan%2C%20Jalisco!5e0!3m2!1ses-419!2smx!4v1710901234567!5m2!1ses-419!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de SmartPeace"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card p-8 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="input-field"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-1">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="input-field"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="user_phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="input-field"
                  placeholder="+52 33 1109 0460"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="input-field resize-none"
                  placeholder="¿Cómo podemos ayudarte?"
                ></textarea>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  required
                  className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <label htmlFor="consent" className="ml-2 text-sm text-gray-600">
                  Acepto que mis datos sean procesados de acuerdo con la política de privacidad.
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full group"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="animate-spin" size={20} />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensaje
                    <Send className="group-hover:translate-x-1 transition-transform" size={20} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;