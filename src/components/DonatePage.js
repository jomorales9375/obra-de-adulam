import React from 'react';
import { Link } from 'react-router-dom';

const DonatePage = () => {
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
          
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto justify-center">
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
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Nuestra Misión
                </h3>
                <p className="text-slate-600">
                  Proclamar el evangelio de Jesucristo, hacer discípulos y servir a nuestra 
                  comunidad con amor y compasión.
                </p>
              </div>
              
              <div className="bg-slate-50 rounded-lg p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Tu Impacto
                </h3>
                <p className="text-slate-600">
                  Cada donación nos ayuda a mantener nuestros programas, ministerios y 
                  servicios a la comunidad.
                </p>
              </div>
              
              <div className="bg-slate-50 rounded-lg p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Transparencia
                </h3>
                <p className="text-slate-600">
                  Nos comprometemos a usar sabiamente cada donación y mantener la 
                  transparencia en nuestras finanzas.
                </p>
              </div>
              
              <div className="bg-slate-50 rounded-lg p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
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
    </div>
  );
};

export default DonatePage; 