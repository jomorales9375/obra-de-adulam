import React from 'react';
import { Link } from 'react-router-dom';

const EventDetailsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#021526] via-[#03346E] to-[#1e40af] text-white py-10 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">Visita Apostólica 2025</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-4"></div>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-light mb-4">
            ¡Acompáñanos para un tiempo especial de ministración, palabra profética y adoración!
          </p>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 border border-blue-100">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-10">
              <img
                src="/Orange and Blue Modern Festive Worship Event Instagram Post.jpg"
                alt="Visita Apostólica"
                className="w-full md:w-80 h-60 object-cover rounded-2xl shadow-lg"
              />
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold text-[#03346E] mb-4">Visita Apostólica</h2>
                <div className="text-lg text-slate-700 mb-2">Sábado Julio 26: 6pm</div>
                <div className="text-lg text-slate-700 mb-2">Domingo Julio 27: 4:30pm</div>
                <div className="text-base text-slate-500 mb-2">255 16th St. Richmond, CA 94806</div>
              </div>
            </div>
            <div className="text-slate-700 text-lg leading-relaxed mb-8">
              <p className="mb-4">
                Prepárate para un fin de semana de bendición, palabra profética y ministración especial con nuestros invitados apostólicos. ¡No te pierdas este tiempo de avivamiento y comunión!
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Palabra profética y enseñanza</li>
                <li>Adoración en vivo</li>
                <li>Ministerio para toda la familia</li>
                <li>Entrada gratuita</li>
              </ul>
              <p>
                Para más información llamar al: <a href="tel:4158274473" className="text-blue-700 underline">(415) 827-4473</a>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
              <a
                href="https://maps.google.com/?q=255+16th+St,+Richmond,+CA+94806"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 text-base shadow-lg hover:shadow-xl transform hover:scale-105 border border-blue-700"
              >
                Cómo llegar
              </a>
              <Link
                to="/"
                className="bg-white border-2 border-blue-700 text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 hover:text-blue-800 transition-all duration-300 text-base shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetailsPage; 