import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import emailjs from '@emailjs/browser';
import { SECURITY_CONFIG } from '../config/security';
import { 
  sanitizeInput, 
  validateEmail, 
  validateName,
  checkRateLimit 
} from '../utils/validation';

const VisitUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = () => {
    const newErrors = {};
    
    // Validate name
    if (!validateName(formData.name)) {
      newErrors.name = 'Por favor ingresa un nombre válido (2-50 caracteres)';
    }
    
    // Validate email (required)
    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = 'Por favor ingresa un correo electrónico válido';
    }
    
    // Validate subject (optional but if provided, must be valid)
    if (formData.subject && formData.subject.trim().length < 3) {
      newErrors.subject = 'El asunto debe tener al menos 3 caracteres';
    }
    
    // Validate message (required)
    if (!formData.message || formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let sanitizedValue;
    
    // Don't sanitize message field on every keystroke to allow spaces
    if (name === 'message') {
      sanitizedValue = value; // Allow spaces in message
    } else {
      sanitizedValue = sanitizeInput(value);
    }

    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting contact form...');
    
    // Validate form
    if (!validateForm()) {
      console.log('Validation failed');
      return;
    }
    console.log('Validation passed');
    
    // Check rate limiting
    const userIdentifier = formData.email || 'anonymous';
    if (!checkRateLimit(userIdentifier, 5, 60000)) { // 5 requests per minute
      console.log('Rate limit hit');
      return;
    }
    console.log('Rate limit passed');
    
    setIsSubmitting(true);

    try {
      // Debug: Log EmailJS configuration
      console.log('Service ID:', SECURITY_CONFIG.EMAILJS.SERVICE_ID);
      console.log('Template ID:', SECURITY_CONFIG.EMAILJS.TEMPLATE_ID);
      console.log('Public Key:', SECURITY_CONFIG.EMAILJS.PUBLIC_KEY ? '***' + SECURITY_CONFIG.EMAILJS.PUBLIC_KEY.slice(-4) : 'NOT SET');

      // Check if EmailJS is properly configured
      if (SECURITY_CONFIG.EMAILJS.SERVICE_ID === 'YOUR_SERVICE_ID' ||
          SECURITY_CONFIG.EMAILJS.TEMPLATE_ID === 'YOUR_TEMPLATE_ID' ||
          SECURITY_CONFIG.EMAILJS.PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
        throw new Error('EmailJS no está configurado. Por favor, configura las credenciales en el archivo .env');
      }

      const emailData = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'Consulta desde el sitio web',
        message: formData.message
      };

      console.log('Sending email with data:', emailData);

      const result = await emailjs.send(
        SECURITY_CONFIG.EMAILJS.SERVICE_ID,
        SECURITY_CONFIG.EMAILJS.TEMPLATE_ID,
        emailData,
        SECURITY_CONFIG.EMAILJS.PUBLIC_KEY
      );

      console.log('EmailJS SUCCESS!', result);
      setShowSuccessModal(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});

    } catch (error) {
      console.error('EmailJS ERROR:', error);
      
      let userMessage = 'Error al enviar el mensaje. Por favor, intenta nuevamente.';
      
      if (error.message.includes('no está configurado')) {
        userMessage = 'El formulario de contacto no está configurado. Por favor, contacta al administrador.';
      } else if (error.status === 400) {
        userMessage = 'Error en el formato del mensaje. Por favor, verifica la información.';
      } else if (error.status === 401) {
        userMessage = 'Error de autenticación. Por favor, contacta al administrador.';
      } else if (error.status === 404) {
        userMessage = 'Servicio no encontrado. Por favor, contacta al administrador.';
      }
      
      setErrorMessage(userMessage);
      setShowErrorModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 font-sans">
      <Helmet>
        <title>Visítanos - Obra de Adulam</title>
        <meta name="description" content="Visita nuestra iglesia en Richmond, CA. Encuentra información sobre horarios, dirección y cómo llegar. Únete a nuestra comunidad de adoración." />
        <meta name="keywords" content="iglesia, obra de adulam, horarios, dirección, Richmond, CA, Estados Unidos" />
        <meta property="og:title" content="Visítanos - Obra de Adulam" />
        <meta property="og:description" content="Visita nuestra iglesia en Richmond, CA. Encuentra información sobre horarios, dirección y cómo llegar. Únete a nuestra comunidad de adoración." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.obradeadulam.org/visit-us" />
        <meta property="og:image" content="https://www.obradeadulam.org/assets/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Visítanos - Obra de Adulam" />
        <meta name="twitter:description" content="Visita nuestra iglesia en Richmond, CA. Encuentra información sobre horarios, dirección y cómo llegar. Únete a nuestra comunidad de adoración." />
        <meta name="twitter:image" content="https://www.obradeadulam.org/assets/images/og-image.jpg" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#021526] to-[#021526] text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Visítanos</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed font-light">
            Únete a nosotros en nuestros servicios y experimenta la presencia de Dios en comunidad
          </p>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Nuestra Ubicación</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#03346E] to-[#1e40af] mx-auto mb-8"></div>
            <p className="text-slate-700 max-w-3xl mx-auto text-lg leading-relaxed">
              Encuentra nuestra iglesia en Richmond, CA. Te esperamos con los brazos abiertos.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Church Information */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Información de la Iglesia</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Dirección</h4>
                    <p className="text-slate-700">4 Marina Way<br />Richmond, CA 94806<br />Estados Unidos</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Horarios de Servicios</h4>
                    <p className="text-slate-700">Servicios Dominicales: 3:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Contacto</h4>
                    <p className="text-slate-700">Email: obradeadulam@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
              <div className="h-80">
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
            
            {/* Parking and Accessibility */}
            <div className="bg-gradient-to-br from-[#021526] to-[#03346E] rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold text-blue-200 mb-6">Estacionamiento y Accesibilidad</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-200">Estacionamiento Gratuito</h4>
                    <p className="text-slate-200">Amplio estacionamiento disponible en el lugar.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-200">Cuidado de Niños</h4>
                    <p className="text-slate-200">Programa especial para niños durante el servicio.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">¿Tienes Preguntas?</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#03346E] to-[#1e40af] mx-auto mb-8"></div>
            <p className="text-slate-700 max-w-3xl mx-auto text-lg leading-relaxed">
              Envíanos un mensaje y te responderemos lo antes posible. Estamos aquí para ayudarte.
            </p>
          </div>
            
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 border border-slate-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#03346E] focus:border-transparent transition duration-300 ${
                      errors.name ? 'border-red-500' : 'border-slate-300'
                    }`}
                    placeholder="Tu nombre completo"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#03346E] focus:border-transparent transition duration-300 ${
                      errors.email ? 'border-red-500' : 'border-slate-300'
                    }`}
                    placeholder="tu@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
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
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#03346E] focus:border-transparent transition duration-300 ${
                    errors.subject ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="¿En qué podemos ayudarte?"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#03346E] focus:border-transparent transition duration-300 resize-vertical ${
                    errors.message ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#03346E] to-[#1e40af] text-white px-8 py-4 rounded-xl font-semibold hover:from-[#1e40af] hover:to-[#03346E] disabled:bg-slate-400 disabled:cursor-not-allowed transition duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#021526] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¡Te Esperamos!</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Ven y únete a nosotros este domingo. Serás recibido con los brazos abiertos 
            y encontrarás una comunidad amorosa y acogedora.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
            <Link
              to="/prayer"
              className="inline-block bg-[#03346E] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#03346E]/80 transition duration-300 text-lg"
            >
              Petición de Oración
            </Link>
            <Link
              to="/donate"
              className="inline-block bg-transparent text-white border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#021526] transition duration-300 text-lg"
            >
              Apoyar el Ministerio
            </Link>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">✅</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">¡Mensaje Enviado!</h3>
            <p className="text-slate-600 mb-6">
              Tu mensaje ha sido enviado exitosamente. 
              Te responderemos lo antes posible.
            </p>
            <button 
              onClick={() => setShowSuccessModal(false)}
              className="w-full bg-[#03346E] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#03346E]/80 transition duration-300"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {showErrorModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">❌</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Error al Enviar</h3>
            <p className="text-slate-600 mb-6">
              {errorMessage}
            </p>
            <button 
              onClick={() => setShowErrorModal(false)}
              className="w-full bg-[#021526] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#021526]/80 transition duration-300"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisitUsPage; 