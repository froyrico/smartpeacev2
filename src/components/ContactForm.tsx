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
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Contact Information */}
          <div className="animate-fadeIn">
            <h2 className="section-title text-2xl sm:text-3xl md:text-4xl">Contáctanos</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
              ¿Listo para transformar tu espacio? Contáctanos para una consulta y cotización gratuita.
            </p>

            <div className="space-y-4 sm:space-y-6">
              {[
                { icon: Phone, title: 'Teléfono', content: '+52 33 1109 0460', href: 'tel:+523311090460' },
                { icon: Mail, title: 'Correo', content: 'froylan@smartpeace.mx', href: 'mailto:froylan@smartpeace.mx' },
                { icon: MapPin, title: 'Dirección', content: 'Hidalgo 216, Zapopan, CP.45200', href: 'https://maps.google.com/?q=Hidalgo+216+Zapopan' }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.icon === MapPin ? '_blank' : undefined}
                  rel={item.icon === MapPin ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 sm:gap-4 group p-3 sm:p-0 rounded-lg hover:bg-white/50 sm:hover:bg-transparent transition-colors active:scale-98 min-h-[56px] sm:min-h-0"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-12 h-12 sm:w-12 sm:h-12 bg-primary rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300 flex-shrink-0">
                    <item.icon className="text-white" size={22} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{item.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base truncate">{item.content}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-6 sm:mt-8">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-green-600 hover:bg-green-700 border-0 w-full justify-center min-h-[52px] text-base sm:text-base active:scale-95"
              >
                <MessageCircle size={22} />
                Contactar por WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card p-5 sm:p-6 md:p-8 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  required
                  className="input-field text-base min-h-[48px]"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-2">
                  Correo Electrónico <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  required
                  className="input-field text-base min-h-[48px]"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="user_phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="user_phone"
                  name="user_phone"
                  className="input-field text-base min-h-[48px]"
                  placeholder="+52 33 1109 0460"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="input-field resize-none text-base min-h-[120px]"
                  placeholder="¿Cómo podemos ayudarte?"
                ></textarea>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  required
                  className="mt-0.5 h-5 w-5 text-primary focus:ring-primary border-gray-300 rounded flex-shrink-0 cursor-pointer"
                />
                <label htmlFor="consent" className="text-sm text-gray-600 cursor-pointer select-none">
                  Acepto que mis datos sean procesados de acuerdo con la política de privacidad. <span className="text-red-500">*</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full group min-h-[52px] text-base sm:text-base active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="animate-spin" size={22} />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensaje
                    <Send className="group-hover:translate-x-1 transition-transform" size={22} />
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