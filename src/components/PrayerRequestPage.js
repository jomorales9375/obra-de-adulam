import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { SECURITY_CONFIG } from '../config/security';
import { 
  sanitizeInput, 
  validateEmail, 
  validatePhone, 
  validateName, 
  validatePrayerRequest,
  checkRateLimit 
} from '../utils/validation';
import { Link } from 'react-router-dom';

const PrayerRequestPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    request: '',
    isConfidential: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    // Validate name
    if (!validateName(formData.name)) {
      newErrors.name = 'Por favor ingresa un nombre válido (2-50 caracteres)';
    }
    
    // Validate email (optional but if provided, must be valid)
    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = 'Por favor ingresa un correo electrónico válido';
    }
    
    // Validate phone (optional but if provided, must be valid)
    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Por favor ingresa un número de teléfono válido';
    }
    
    // Validate prayer request
    if (!validatePrayerRequest(formData.request)) {
      newErrors.request = 'La petición de oración debe tener entre 10 y 1000 caracteres';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const sanitizedValue = type === 'checkbox' ? checked : sanitizeInput(value);
    
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
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    // Check rate limiting
    const userIdentifier = formData.email || 'anonymous';
    if (!checkRateLimit(userIdentifier, 5, 60000)) { // 5 requests per minute
      setSubmitStatus('rate_limit');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await emailjs.send(
        SECURITY_CONFIG.EMAILJS.SERVICE_ID,
        SECURITY_CONFIG.EMAILJS.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          prayer_request: formData.request,
          is_confidential: formData.isConfidential ? 'Sí' : 'No',
          timestamp: new Date().toISOString(),
          user_agent: navigator.userAgent
        },
        SECURITY_CONFIG.EMAILJS.PUBLIC_KEY
      );

      console.log('SUCCESS!', result.text);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        request: '',
        isConfidential: false
      });
      setShowSuccessModal(true);
    } catch (error) {
      console.log('FAILED...', error.text);
      setSubmitStatus('error');
      setShowErrorModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#021526] to-[#021526] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Peticiones de Oración</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Estamos aquí para orar contigo. Tu petición será tratada con confidencialidad 
            y será compartida con nuestro equipo de oración dedicado.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Prayer Request Form */}
              <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Envía tu Petición de Oración</h2>
                  <div className="w-24 h-1 bg-[#03346E] mx-auto mb-6"></div>
                  <p className="text-slate-700">
                    Estamos aquí para orar contigo. Tu petición será tratada con confidencialidad 
                    y será compartida con nuestro equipo de oración.
                  </p>
                </div>

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
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-[#03346E] focus:border-transparent transition duration-300"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                      Teléfono (opcional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-[#03346E] focus:border-transparent transition duration-300"
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div>
                    <label htmlFor="requestType" className="block text-sm font-semibold text-slate-700 mb-2">
                      Tipo de Petición *
                    </label>
                    <select
                      id="requestType"
                      name="requestType"
                      value={formData.requestType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-[#03346E] focus:border-transparent transition duration-300"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="salud">Salud</option>
                      <option value="familia">Familia</option>
                      <option value="trabajo">Trabajo</option>
                      <option value="finanzas">Finanzas</option>
                      <option value="relacion">Relación</option>
                      <option value="espiritual">Crecimiento Espiritual</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="prayerRequest" className="block text-sm font-semibold text-slate-700 mb-2">
                      Petición de Oración *
                    </label>
                    <textarea
                      id="prayerRequest"
                      name="prayerRequest"
                      value={formData.prayerRequest}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-[#03346E] focus:border-transparent transition duration-300 resize-vertical"
                      placeholder="Describe tu petición de oración aquí..."
                    ></textarea>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="confidential"
                      name="confidential"
                      checked={formData.confidential}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 text-[#03346E] focus:ring-[#03346E] border-slate-300 rounded"
                    />
                    <label htmlFor="confidential" className="text-sm text-slate-600">
                      Marca esta casilla si prefieres que tu petición sea completamente confidencial 
                      y solo sea compartida con el pastor.
                    </label>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="followUp"
                      name="followUp"
                      checked={formData.followUp}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 text-[#03346E] focus:ring-[#03346E] border-slate-300 rounded"
                    />
                    <label htmlFor="followUp" className="text-sm text-slate-600">
                      Me gustaría recibir seguimiento sobre mi petición de oración.
                    </label>
                  </div>

                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#03346E] text-white py-4 px-6 rounded-md font-semibold hover:bg-[#03346E]/80 disabled:bg-slate-400 disabled:cursor-not-allowed transition duration-300 text-lg"
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar Petición de Oración'}
                    </button>
                  </div>
                </form>
              </div>

              {/* Information Sidebar */}
              <div className="space-y-8">
                <div className="bg-[#03346E]/10 rounded-lg p-6 border-l-4 border-[#03346E]">
                  <h3 className="text-xl font-semibold text-[#021526] mb-4">¿Cómo Funciona?</h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start">
                      <span className="text-[#03346E] mr-2">✓</span>
                      Tu petición es recibida por nuestro equipo de oración
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#03346E] mr-2">✓</span>
                      Oramos por ti durante la semana
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#03346E] mr-2">✓</span>
                      Te contactamos si proporcionaste información de contacto
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#03346E] mr-2">✓</span>
                      Continuamos orando hasta que veamos respuestas
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#03346E]">
                  <h3 className="text-xl font-semibold text-[#021526] mb-4">Versículos de Esperanza</h3>
                  <div className="space-y-4 text-slate-700">
                    <blockquote className="italic border-l-4 border-[#03346E] pl-4">
                      "No se inquieten por nada; más bien, en toda ocasión, con oración y ruego, 
                      presenten sus peticiones a Dios y denle gracias." - Filipenses 4:6
                    </blockquote>
                    <blockquote className="italic border-l-4 border-[#03346E] pl-4">
                      "Porque donde dos o tres se reúnen en mi nombre, allí estoy yo en medio de ellos." - Mateo 18:20
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-[#021526] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Necesitas Hablar con Alguien?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Si necesitas hablar con alguien en persona o tienes una emergencia, 
            no dudes en contactarnos directamente.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
            <Link
              to="/visit"
              className="inline-block bg-[#03346E] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#03346E]/80 transition duration-300 text-lg"
            >
              Visítanos
            </Link>
            <button className="inline-block bg-transparent text-white border-2 border-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-[#021526] transition duration-300 text-lg">
              Llamar al Pastor
            </button>
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
            <h3 className="text-xl font-bold text-slate-900 mb-4">¡Petición Enviada!</h3>
            <p className="text-slate-600 mb-6">
              Tu petición de oración ha sido enviada exitosamente. 
              Nuestro equipo de oración comenzará a orar por ti inmediatamente.
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
              Hubo un problema al enviar tu petición. Por favor, intenta nuevamente 
              o contacta directamente con la iglesia.
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

export default PrayerRequestPage; 