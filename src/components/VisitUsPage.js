import React from 'react';

const VisitUsPage = () => {
  const churchAddress = "14550 River Road, Carmel, IN 46033";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(churchAddress)}`;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Visítanos</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Te invitamos a unirte a nosotros para adoración, comunidad y crecimiento espiritual. 
            ¡Nos encantaría conocerte!
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
                <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Información de la Iglesia</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Dirección</h3>
                      <p className="text-gray-700">
                        14550 River Road<br />
                        Carmel, IN 46033<br />
                        Estados Unidos
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Horarios de Servicios</h3>
                      <div className="space-y-2">
                        <p className="text-gray-700">
                          <strong>Domingo:</strong> 9:00 AM & 11:00 AM
                        </p>
                        <p className="text-gray-700">
                          <strong>Miércoles:</strong> 6:30 PM (Reunión de Jóvenes)
                        </p>
                        <p className="text-gray-700">
                          <strong>Viernes:</strong> 7:00 PM (Noche de Oración)
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Contacto</h3>
                      <div className="space-y-2">
                        <p className="text-gray-700">
                          <strong>Teléfono:</strong> (317) 900-7200
                        </p>
                        <p className="text-gray-700">
                          <strong>Correo:</strong> info@obradeadulam.org
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">¿Qué Esperar?</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span>Servicio de adoración dinámico y relevante</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span>Comunidad acogedora y amigable</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span>Programas para todas las edades</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span>Estacionamiento gratuito disponible</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Para Nuevos Visitantes</h3>
                  <p className="text-blue-800 text-sm mb-4">
                    ¡Bienvenido! No hay código de vestimenta especial. Ven como eres y únete a nosotros 
                    para una experiencia de adoración significativa.
                  </p>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition duration-300">
                    Planifica tu Visita
                  </button>
                </div>
              </div>

              {/* Map Section */}
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Ubicación</h2>
                  
                  <div className="bg-gray-200 rounded-lg h-64 mb-6 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <p className="text-gray-600">Mapa de Google Maps</p>
                      <p className="text-sm text-gray-500">14550 River Road, Carmel, IN 46033</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-blue-600 text-white py-3 px-6 rounded-md font-semibold text-center hover:bg-blue-700 transition duration-300"
                    >
                      Obtener Direcciones
                    </a>
                    
                    <button className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-md font-semibold hover:bg-gray-200 transition duration-300">
                      Descargar Mapa
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Transporte Público</h3>
                  <div className="space-y-3 text-sm text-gray-700">
                    <p><strong>Autobús:</strong> Línea 19 - Parada en River Road</p>
                    <p><strong>Bicicleta:</strong> Carril bici disponible en River Road</p>
                    <p><strong>Estacionamiento:</strong> Gratuito en el campus de la iglesia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Preguntas?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Si tienes preguntas sobre visitarnos o quieres más información, 
            no dudes en contactarnos. ¡Estamos aquí para ayudarte!
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-300">
              Llamar: (317) 900-7200
            </button>
            <button className="bg-transparent text-white px-8 py-3 rounded-md font-semibold border border-white hover:bg-white hover:text-gray-900 transition duration-300">
              Enviar Correo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisitUsPage; 