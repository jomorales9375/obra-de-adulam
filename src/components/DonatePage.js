import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DonatePage = () => {
  const [showZelleModal, setShowZelleModal] = useState(false);
  const [showCashAppModal, setShowCashAppModal] = useState(false);

  const handleZelleDonation = () => {
    setShowZelleModal(true);
  };

  const handleCashAppDonation = () => {
    setShowCashAppModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#021526] via-[#03346E] to-[#1e40af] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Apoya Nuestra Misión
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed font-light">
            Tu generosidad nos permite continuar predicando el evangelio, 
            haciendo discípulos y sirviendo a nuestra comunidad con amor y compasión.
          </p>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-20 bg-gradient-to-br from-white to-slate-50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Formas de Dar
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#03346E] to-[#1e40af] mx-auto mb-8"></div>
            <p className="text-slate-700 max-w-3xl mx-auto text-lg leading-relaxed">
              Elige la forma más conveniente para ti. Todas las donaciones son seguras y nos ayudan 
              a continuar nuestra misión de compartir el amor de Cristo.
            </p>
          </div>

          {/* Payment Methods Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Zelle Option */}
            <div className="bg-white rounded-2xl shadow-2xl p-10 text-center border border-slate-200 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#03346E]/5 to-transparent"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-[#6B46C1] to-[#805AD5] rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Donación por Zelle</h3>
                <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                  Transferencia directa sin comisiones. Envía tu donación directamente 
                  a nuestra cuenta bancaria usando Zelle.
                </p>
                <div className="text-sm text-slate-500 mb-8">
                  <p>• Sin comisiones</p>
                  <p>• Transferencia instantánea</p>
                  <p>• Directo a nuestra cuenta</p>
                </div>
                <button 
                  onClick={handleZelleDonation}
                  className="bg-gradient-to-r from-[#03346E] to-[#1e40af] text-white px-8 py-4 rounded-xl font-semibold hover:from-[#1e40af] hover:to-[#03346E] transition-all duration-300 w-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Ver Instrucciones Zelle
                </button>
              </div>
            </div>

            {/* Cash App Option */}
            <div className="bg-white rounded-2xl shadow-2xl p-10 text-center border border-slate-200 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00D632]/5 to-transparent"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-[#00D632] to-[#00B327] rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Donación por Cash App</h3>
                <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                  Envía tu donación usando Cash App. Rápido, seguro y fácil de usar 
                  desde tu teléfono.
                </p>
                <div className="text-sm text-slate-500 mb-8">
                  <p>• Rápido y fácil</p>
                  <p>• Seguro y confiable</p>
                  <p>• Disponible en móvil</p>
                </div>
                <button 
                  onClick={handleCashAppDonation}
                  className="bg-gradient-to-r from-[#00D632] to-[#00B327] text-white px-8 py-4 rounded-xl font-semibold hover:from-[#00B327] hover:to-[#00D632] transition-all duration-300 w-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Ver Instrucciones Cash App
                </button>
              </div>
            </div>

            {/* In-Person Giving */}
            <div className="bg-gradient-to-br from-[#021526] to-[#03346E] rounded-2xl shadow-2xl p-10 text-center text-white hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg backdrop-blur-sm">
                  <span className="text-3xl">🏛️</span>
                </div>
                <h3 className="text-2xl font-bold mb-6">Donación Presencial</h3>
                <p className="text-slate-200 mb-8 text-lg leading-relaxed">
                  Únete a nosotros en nuestros servicios dominicales y participa en la ofrenda 
                  durante el culto. Experimenta la bendición de dar en comunidad.
                </p>
                <Link 
                  to="/visit"
                  className="inline-block bg-white text-[#021526] px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-300 w-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Visítanos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-[#021526] via-[#03346E] to-[#1e40af] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">¿Tienes Preguntas?</h2>
          <div className="w-32 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-slate-200 mb-12 max-w-3xl mx-auto text-xl leading-relaxed">
            Si tienes preguntas sobre las donaciones o quieres saber más sobre cómo 
            se utilizan los fondos, no dudes en contactarnos. Estamos aquí para ayudarte.
          </p>
          <div className="space-y-6 md:space-y-0 md:space-x-8 md:flex md:justify-center">
            <Link
              to="/prayer"
              className="inline-block bg-white text-[#021526] px-10 py-5 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Envía un Mensaje
            </Link>
            <Link
              to="/visit"
              className="inline-block bg-transparent text-white border-2 border-white px-10 py-5 rounded-xl font-semibold hover:bg-white hover:text-[#021526] transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Visítanos
            </Link>
          </div>
        </div>
      </section>

      {/* Zelle Instructions Modal */}
      {showZelleModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
            <div className="w-16 h-16 bg-gradient-to-br from-[#6B46C1] to-[#805AD5] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Donación por Zelle</h3>
            <p className="text-slate-600 mb-6">
              Para donar por Zelle, sigue estos pasos:
            </p>
            <div className="bg-slate-50 rounded-xl p-6 mb-6 text-left">
              <h4 className="font-semibold text-slate-900 mb-4">Información de Zelle:</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-[#03346E] font-semibold w-20">Email:</span>
                  <span className="text-slate-700">obradeadulam@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#03346E] font-semibold w-20">Teléfono:</span>
                  <span className="text-slate-700">(510) 555-0123</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#03346E] font-semibold w-20">Nombre:</span>
                  <span className="text-slate-700">Obra de Adulam Church</span>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 mb-6 text-left">
              <h4 className="font-semibold text-slate-900 mb-3">Instrucciones:</h4>
              <ol className="text-sm text-slate-700 space-y-2">
                <li>1. Abre la aplicación de tu banco</li>
                <li>2. Busca la opción "Zelle" o "Send Money"</li>
                <li>3. Ingresa el email: <span className="font-mono bg-slate-200 px-2 py-1 rounded">obradeadulam@gmail.com</span></li>
                <li>4. Confirma el nombre: <span className="font-semibold">Obra de Adulam Church</span></li>
                <li>5. Ingresa el monto que deseas donar</li>
                <li>6. Completa la transferencia</li>
              </ol>
            </div>
            <div className="flex space-x-4">
              <button 
                onClick={() => {
                  navigator.clipboard.writeText('obradeadulam@gmail.com');
                  alert('Email copiado al portapapeles!');
                }}
                className="flex-1 bg-[#03346E] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#03346E]/80 transition duration-300"
              >
                Copiar Email
              </button>
              <button 
                onClick={() => setShowZelleModal(false)}
                className="flex-1 bg-slate-200 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:bg-slate-300 transition duration-300"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cash App Instructions Modal */}
      {showCashAppModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
            <div className="w-16 h-16 bg-gradient-to-br from-[#00D632] to-[#00B327] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Donación por Cash App</h3>
            <p className="text-slate-600 mb-6">
              Para donar por Cash App, sigue estos pasos:
            </p>
            <div className="bg-slate-50 rounded-xl p-6 mb-6 text-left">
              <h4 className="font-semibold text-slate-900 mb-4">Información de Cash App:</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-[#00D632] font-semibold w-20">$Cashtag:</span>
                  <span className="text-slate-700">$ObraDeAdulam</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#00D632] font-semibold w-20">Nombre:</span>
                  <span className="text-slate-700">Obra de Adulam Church</span>
                </div>
              </div>
            </div>
            <div className="bg-green-50 rounded-xl p-6 mb-6 text-left">
              <h4 className="font-semibold text-slate-900 mb-3">Instrucciones:</h4>
              <ol className="text-sm text-slate-700 space-y-2">
                <li>1. Abre la aplicación de Cash App</li>
                <li>2. Busca el $Cashtag: <span className="font-mono bg-slate-200 px-2 py-1 rounded">$ObraDeAdulam</span></li>
                <li>3. Ingresa el monto que deseas donar</li>
                <li>4. Confirma el nombre: <span className="font-semibold">Obra de Adulam Church</span></li>
                <li>5. Completa la transferencia</li>
              </ol>
            </div>
            <div className="flex space-x-4">
              <button 
                onClick={() => {
                  navigator.clipboard.writeText('$ObraDeAdulam');
                  alert('Cashtag copiado al portapapeles!');
                }}
                className="flex-1 bg-[#00D632] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#00D632]/80 transition duration-300"
              >
                Copiar $Cashtag
              </button>
              <button 
                onClick={() => setShowCashAppModal(false)}
                className="flex-1 bg-slate-200 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:bg-slate-300 transition duration-300"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonatePage; 