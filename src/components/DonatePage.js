import React from 'react';
import { Link } from 'react-router-dom';

const DonatePage = () => {
  const [showMailInfo, setShowMailInfo] = React.useState(false);

  const handlePayPalDonation = () => {
    // Implementation of handlePayPalDonation
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#021526] to-[#021526] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Apoya Nuestra Misión</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            Tu generosidad nos permite continuar predicando el evangelio, 
            haciendo discípulos y sirviendo a nuestra comunidad.
          </p>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Formas de Dar</h2>
            <p className="text-slate-700 max-w-2xl mx-auto">
              Tu generosidad nos permite continuar nuestra misión de compartir el amor de Cristo 
              y servir a nuestra comunidad.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Online Giving */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center border-t-4 border-[#03346E] hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#03346E]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Donación en Línea</h3>
              <p className="text-slate-600 mb-6">
                Donación segura y fácil a través de PayPal. Puedes hacer una donación única 
                o configurar donaciones recurrentes.
              </p>
              <button 
                onClick={handlePayPalDonation}
                className="bg-[#03346E] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#03346E]/80 transition duration-300 w-full"
              >
                Donar Ahora
              </button>
            </div>

            {/* In-Person Giving */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center border-t-4 border-[#021526] hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#021526]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Donación Presencial</h3>
              <p className="text-slate-600 mb-6">
                Únete a nosotros en nuestros servicios dominicales y participa en la ofrenda 
                durante el culto.
              </p>
              <Link 
                to="/visit"
                className="inline-block bg-[#021526] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#021526]/80 transition duration-300 w-full"
              >
                Visítanos
              </Link>
            </div>

            {/* Mail Giving */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center border-t-4 border-[#021526] hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#021526]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📮</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Donación por Correo</h3>
              <p className="text-slate-600 mb-6">
                Envía tu ofrenda por correo postal a nuestra dirección. 
                Incluye tu información de contacto para recibir un recibo.
              </p>
              <button 
                onClick={() => setShowMailInfo(true)}
                className="bg-[#021526] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#021526]/80 transition duration-300 w-full"
              >
                Ver Dirección
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Give Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">¿Por Qué Dar?</h2>
              <div className="w-24 h-1 bg-[#03346E] mx-auto mb-6"></div>
              <p className="text-slate-700 text-lg">
                Tu generosidad hace posible que continuemos nuestra misión de compartir el evangelio 
                y servir a nuestra comunidad.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 rounded-lg p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <span className="text-[#03346E] mr-3">🎯</span>
                  Nuestra Misión
                </h3>
                <p className="text-slate-600">
                  Proclamar el evangelio de Jesucristo, hacer discípulos y servir a nuestra 
                  comunidad con amor y compasión.
                </p>
              </div>
              
              <div className="bg-slate-50 rounded-lg p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <span className="text-[#03346E] mr-3">💝</span>
                  Tu Impacto
                </h3>
                <p className="text-slate-600">
                  Cada donación nos ayuda a mantener nuestros programas, ministerios y 
                  servicios a la comunidad.
                </p>
              </div>
              
              <div className="bg-slate-50 rounded-lg p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <span className="text-[#03346E] mr-3">🤝</span>
                  Transparencia
                </h3>
                <p className="text-slate-600">
                  Nos comprometemos a usar sabiamente cada donación y mantener la 
                  transparencia en nuestras finanzas.
                </p>
              </div>
              
              <div className="bg-slate-50 rounded-lg p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <span className="text-[#03346E] mr-3">🙏</span>
                  Agradecimiento
                </h3>
                <p className="text-slate-600">
                  Valoramos cada donación y oramos por nuestros donantes. Tu generosidad 
                  es una bendición para nosotros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Transparency */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#021526] mb-4">Transparencia Financiera</h2>
              <p className="text-slate-700 max-w-2xl mx-auto">
                Creemos en la responsabilidad y transparencia en el uso de los fondos donados.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-[#021526] mb-4">Cómo Usamos las Donaciones</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700">Ministerio y Programas</span>
                      <span className="font-semibold text-[#021526]">60%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-[#03346E] h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700">Operaciones y Mantenimiento</span>
                      <span className="font-semibold text-[#021526]">25%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-[#021526] h-2 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700">Misiones y Evangelismo</span>
                      <span className="font-semibold text-[#021526]">15%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-[#03346E] h-2 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#021526] mb-4">Compromisos</h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start">
                      <span className="text-[#03346E] mr-2">✓</span>
                      Auditorías financieras anuales independientes
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#03346E] mr-2">✓</span>
                      Reportes financieros trimestrales disponibles
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#03346E] mr-2">✓</span>
                      Uso responsable de todos los fondos donados
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#03346E] mr-2">✓</span>
                      Transparencia total en el manejo de recursos
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#021526] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Tienes Preguntas?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Si tienes preguntas sobre las donaciones o quieres saber más sobre cómo 
            se utilizan los fondos, no dudes en contactarnos.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
            <Link
              to="/prayer"
              className="inline-block bg-[#03346E] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#03346E]/80 transition duration-300 text-lg"
            >
              Envía un Mensaje
            </Link>
            <Link
              to="/visit"
              className="inline-block bg-transparent text-white border-2 border-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-[#021526] transition duration-300 text-lg"
            >
              Visítanos
            </Link>
          </div>
        </div>
      </section>

      {/* Mail Information Modal */}
      {showMailInfo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Donación por Correo</h3>
            <div className="bg-slate-50 rounded-lg p-6 mb-6">
              <p className="text-slate-700 font-semibold mb-2">Envía tu ofrenda a:</p>
              <p className="text-slate-600">
                Obra de Adulam<br />
                4 Marina Way<br />
                Richmond, CA 94806<br />
                Estados Unidos
              </p>
            </div>
            <p className="text-slate-600 text-sm mb-6">
              Por favor incluye tu nombre y dirección para recibir un recibo de donación.
            </p>
            <button 
              onClick={() => setShowMailInfo(false)}
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

export default DonatePage; 