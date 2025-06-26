import React from 'react';
import { Link } from 'react-router-dom';

const VisitUsPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#021526] to-[#021526] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Visítanos</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            Te invitamos a unirte a nosotros en adoración, comunidad y crecimiento espiritual. 
            Hay un lugar especial para ti en Obra de Adulam.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Church Information */}
              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#03346E]">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Información de la Iglesia</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-[#03346E]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-[#03346E]">📍</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Dirección</h4>
                        <p className="text-slate-600">
                          4 Marina Way<br />
                          Richmond, CA 94806<br />
                          Estados Unidos
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-[#03346E]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-[#03346E]">🕒</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Horarios de Servicios</h4>
                        <p className="text-slate-600">
                          <strong>Servicios Dominicales:</strong> 3:00 PM
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-[#03346E]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-[#03346E]">📞</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Contacto</h4>
                        <p className="text-slate-600">
                          <strong>Teléfono:</strong> (510) 555-0123<br />
                          <strong>Email:</strong> info@obradeadulam.org
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Parking & Accessibility */}
                <div className="bg-gradient-to-br from-[#021526] to-[#021526] rounded-lg p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6 text-[#03346E]">Estacionamiento y Accesibilidad</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <span className="text-[#03346E] text-lg">🚗</span>
                      <div>
                        <h4 className="font-semibold">Estacionamiento Gratuito</h4>
                        <p className="text-slate-200 text-sm">Amplio estacionamiento disponible en el lugar.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <span className="text-[#03346E] text-lg">👶</span>
                      <div>
                        <h4 className="font-semibold">Cuidado de Niños</h4>
                        <p className="text-slate-200 text-sm">Programa especial para niños durante el servicio.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-96">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.1234567890123!2d-122.3456789!3d37.9876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e1234567890%3A0xabcdef1234567890!2s4+Marina+Way%2C+Richmond%2C+CA+94806!5e0!3m2!1sen!2sus!4v1234567890123"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Obra de Adulam - Richmond Location"
                    ></iframe>
                  </div>
                </div>

                {/* First Time Visitor */}
                <div className="bg-gradient-to-br from-[#03346E] to-[#03346E] rounded-lg p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">¿Primera Vez?</h3>
                  <p className="mb-6 text-slate-200">
                    Nos encantaría conocerte mejor y ayudarte a sentirte como en casa. 
                    Completa nuestro formulario de visitante para que podamos prepararnos para tu visita.
                  </p>
                  <button className="bg-[#021526] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#021526]/80 transition duration-300">
                    Registrarse como Visitante
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Síguenos en Redes Sociales</h2>
              <div className="w-24 h-1 bg-[#03346E] mx-auto mb-6"></div>
              <p className="text-slate-700">
                Mantente conectado con nuestra comunidad a través de nuestras redes sociales.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* YouTube */}
              <div className="bg-white rounded-lg shadow-lg p-8 text-center border-t-4 border-red-600 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">YouTube</h3>
                <p className="text-slate-600 mb-6">
                  Mira nuestros sermones, testimonios y contenido inspirador.
                </p>
                <a 
                  href="https://www.youtube.com/@obradeadulam9857" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition duration-300 w-full"
                >
                  Suscríbete
                </a>
              </div>

              {/* Facebook */}
              <div className="bg-white rounded-lg shadow-lg p-8 text-center border-t-4 border-blue-600 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Facebook</h3>
                <p className="text-slate-600 mb-6">
                  Únete a nuestra comunidad y mantente actualizado con eventos y noticias.
                </p>
                <a 
                  href="https://www.facebook.com/profile.php?id=100093414965081" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300 w-full"
                >
                  Síguenos
                </a>
              </div>

              {/* Instagram */}
              <div className="bg-white rounded-lg shadow-lg p-8 text-center border-t-4 border-pink-600 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-pink-600/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.875-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Instagram</h3>
                <p className="text-slate-600 mb-6">
                  Comparte momentos especiales y conecta con nuestra familia espiritual.
                </p>
                <a 
                  href="https://www.instagram.com/obradeadulam/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-pink-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-pink-700 transition duration-300 w-full"
                >
                  Síguenos
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">¿Tienes Preguntas?</h2>
              <div className="w-24 h-1 bg-[#03346E] mx-auto mb-6"></div>
              <p className="text-slate-700">
                Si tienes preguntas sobre visitarnos o quieres más información, 
                no dudes en contactarnos.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-lg p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-[#03346E] focus:border-transparent transition duration-300"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-[#03346E] focus:border-transparent transition duration-300"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-[#03346E] focus:border-transparent transition duration-300"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-[#03346E] focus:border-transparent transition duration-300 resize-vertical"
                    placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-[#03346E] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#03346E]/80 transition duration-300 text-lg"
                  >
                    Enviar Mensaje
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#021526] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¡Te Esperamos!</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Ven y únete a nosotros este domingo. Serás recibido con los brazos abiertos 
            y encontrarás una comunidad amorosa y acogedora.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
            <Link
              to="/prayer"
              className="inline-block bg-[#03346E] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#03346E]/80 transition duration-300 text-lg"
            >
              Petición de Oración
            </Link>
            <Link
              to="/donate"
              className="inline-block bg-transparent text-white border-2 border-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-[#021526] transition duration-300 text-lg"
            >
              Apoyar el Ministerio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisitUsPage; 