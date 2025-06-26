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
    } catch (error) {
      console.log('FAILED...', error.text);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Peticiones de Oración</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Nos encantaría orar por ti. Comparte tu petición de oración y nuestro equipo de oración se compromete a interceder por ti.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Prayer Request Form */}
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Enviar Petición de Oración</h2>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
                    <p className="text-green-800">
                      ¡Gracias! Tu petición de oración ha sido enviada. Nuestro equipo de oración orará por ti.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-red-800">
                      Lo sentimos, hubo un error al enviar tu petición. Por favor intenta de nuevo o contáctanos directamente.
                    </p>
                  </div>
                )}

                {submitStatus === 'rate_limit' && (
                  <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                    <p className="text-yellow-800">
                      Has enviado demasiadas peticiones. Por favor espera un momento antes de intentar de nuevo.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.name ? 'border-red-300' : 'border-gray-300'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.email ? 'border-red-300' : 'border-gray-300'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.phone ? 'border-red-300' : 'border-gray-300'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Petición de Oración *
                    </label>
                    <textarea
                      name="request"
                      value={formData.request}
                      onChange={handleChange}
                      required
                      rows="6"
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.request ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Comparte tu petición de oración aquí..."
                    ></textarea>
                    {errors.request && (
                      <p className="mt-1 text-sm text-red-600">{errors.request}</p>
                    )}
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="isConfidential"
                      checked={formData.isConfidential}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label className="text-sm text-gray-700">
                      Marca esta casilla si prefieres que tu petición sea confidencial y solo sea compartida con nuestro equipo de oración.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Petición de Oración'}
                  </button>
                </form>
              </div>

              {/* Information Sidebar */}
              <div className="space-y-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">¿Cómo Funciona?</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span>Envía tu petición usando el formulario</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span>Nuestro equipo de oración recibe tu petición</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span>Oramos por ti durante la semana</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span>Te contactamos si proporcionas información de contacto</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Privacidad</h3>
                  <p className="text-blue-800 text-sm">
                    Todas las peticiones de oración son tratadas con confidencialidad. 
                    Solo nuestro equipo de oración dedicado tendrá acceso a tu información.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Otras Formas de Contacto</h3>
                  <div className="space-y-3 text-sm text-gray-700">
                    <p><strong>Teléfono:</strong> (317) 900-7200</p>
                    <p><strong>Correo:</strong> oracion@obradeadulam.org</p>
                    <p><strong>En Persona:</strong> Durante nuestros servicios dominicales</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrayerRequestPage; 