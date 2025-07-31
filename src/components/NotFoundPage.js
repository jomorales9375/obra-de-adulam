import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 font-sans">
      <Helmet>
        <title>Página No Encontrada - Obra de Adulam</title>
        <meta name="description" content="La página que buscas no existe. Regresa al inicio de Obra de Adulam." />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content="Página No Encontrada - Obra de Adulam" />
        <meta property="og:description" content="La página que buscas no existe. Regresa al inicio de Obra de Adulam." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://obradeadulam.org/404" />
        <meta property="og:image" content="/Adulam%20Logo.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Página No Encontrada - Obra de Adulam" />
        <meta name="twitter:description" content="La página que buscas no existe. Regresa al inicio de Obra de Adulam." />
        <meta name="twitter:image" content="/Adulam%20Logo.jpg" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#021526] via-[#03346E] to-[#1e40af] text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* 404 Number */}
            <div className="text-8xl md:text-9xl font-bold text-white/20 mb-8">
              404
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Página No Encontrada
            </h1>
            
            {/* Divider */}
            <div className="w-32 h-1 bg-gradient-to-r from-[#03346E] to-[#1e40af] mx-auto mb-8"></div>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-light mb-8">
              Lo sentimos, la página que buscas no existe o ha sido movida.
            </p>
            
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 flex items-center justify-center shadow-lg overflow-hidden rounded-full">
                <img 
                  src="/Adulam Logo.jpg" 
                  alt="Obra de Adulam Logo" 
                  className="w-24 h-24 object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 border border-blue-100">
            
            {/* Helpful Message */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#03346E] mb-6">
                ¿Te Perdiste?
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                No te preocupes, aquí tienes algunas opciones para encontrar lo que buscas:
              </p>
            </div>

            {/* Navigation Options */}
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Home */}
              <div className="bg-gradient-to-br from-[#021526] to-[#03346E] rounded-2xl p-8 text-white text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col justify-between">
                <div>
                  <div className="text-4xl mb-4">🏠</div>
                  <h3 className="text-xl font-bold mb-4">Ir al Inicio</h3>
                  <p className="text-slate-200 mb-6">
                    Regresa a la página principal para explorar nuestro sitio
                  </p>
                </div>
                <Link
                  to="/"
                  className="inline-block bg-white text-[#021526] px-6 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-300"
                >
                  Ir al Inicio
                </Link>
              </div>

              {/* Visit Us */}
              <div className="bg-gradient-to-br from-[#03346E] to-[#1e40af] rounded-2xl p-8 text-white text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col justify-between">
                <div>
                  <div className="text-4xl mb-4">📍</div>
                  <h3 className="text-xl font-bold mb-4">Visítanos</h3>
                  <p className="text-slate-200 mb-6">
                    Encuentra información sobre nuestra ubicación y horarios
                  </p>
                </div>
                <Link
                  to="/visit"
                  className="inline-block bg-white text-[#03346E] px-6 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-300"
                >
                  Visítanos
                </Link>
              </div>

              {/* Prayer */}
              <div className="bg-gradient-to-br from-[#021526] to-[#03346E] rounded-2xl p-8 text-white text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col justify-between">
                <div>
                  <div className="text-4xl mb-4">🙏</div>
                  <h3 className="text-xl font-bold mb-4">Peticiones de Oración</h3>
                  <p className="text-slate-200 mb-6">
                    Envía tu petición de oración y nuestro equipo orará por ti
                  </p>
                </div>
                <Link
                  to="/prayer"
                  className="inline-block bg-white text-[#021526] px-6 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-300"
                >
                  Enviar Petición
                </Link>
              </div>

              {/* About */}
              <div className="bg-gradient-to-br from-[#03346E] to-[#1e40af] rounded-2xl p-8 text-white text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col justify-between">
                <div>
                  <div className="text-4xl mb-4">ℹ️</div>
                  <h3 className="text-xl font-bold mb-4">Acerca de Nosotros</h3>
                  <p className="text-slate-200 mb-6">
                    Conoce más sobre nuestra iglesia y nuestras creencias
                  </p>
                </div>
                <Link
                  to="/about"
                  className="inline-block bg-white text-[#03346E] px-6 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-300"
                >
                  Conocer Más
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage; 