import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const EventsListPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 font-sans">
    <Helmet>
      <title>Eventos - Próximos Eventos de la Iglesia</title>
      <meta name="description" content="Encuentra información sobre los próximos eventos, actividades y servicios especiales de Obra de Adulam. Únete a nosotros en nuestros eventos y ministerios." />
      <meta name="keywords" content="eventos, iglesia, actividades, servicios, ministerios, Obra de Adulam" />
      <meta property="og:title" content="Eventos - Próximos Eventos de la Iglesia" />
      <meta property="og:description" content="Encuentra información sobre los próximos eventos, actividades y servicios especiales de Obra de Adulam. Únete a nosotros en nuestros eventos y ministerios." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.obradeadulam.org/events" />
      <meta property="og:image" content="/Adulam%20Logo.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Eventos - Próximos Eventos de la Iglesia" />
      <meta name="twitter:description" content="Encuentra información sobre los próximos eventos, actividades y servicios especiales de Obra de Adulam. Únete a nosotros en nuestros eventos y ministerios." />
      <meta name="twitter:image" content="/Adulam%20Logo.jpg" />
    </Helmet>

    {/* Hero Section */}
    <section className="bg-gradient-to-br from-[#021526] via-[#03346E] to-[#1e40af] text-white py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Eventos</h1>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-8"></div>
        <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed font-light">
          Mantente al día con nuestros próximos eventos, actividades y servicios especiales
        </p>
      </div>
    </section>

    {/* Events Content */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Empty State */}
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="text-4xl">📅</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">No Hay Eventos Programados</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Actualmente no tenemos eventos programados. Te invitamos a visitarnos en nuestros servicios dominicales 
            y mantente conectado con nosotros para conocer nuestros próximos eventos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/visit"
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Visítanos
            </Link>
            <Link
              to="/"
              className="bg-white border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 hover:text-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Ir al Inicio
            </Link>
          </div>
        </div>

        {/* Future Events Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Próximamente</h3>
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-blue-100">
            <p className="text-slate-600 text-center leading-relaxed">
              Estamos preparando eventos especiales para nuestra comunidad. 
              Síguenos en nuestras redes sociales para estar al tanto de las próximas actividades.
            </p>
            <div className="flex justify-center mt-6 space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=100093414965081" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                Facebook
              </a>
              <a 
                href="https://www.instagram.com/obradeadulam/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                Instagram
              </a>
              <a 
                href="https://www.youtube.com/@obradeadulam9857" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default EventsListPage; 