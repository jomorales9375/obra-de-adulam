import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const EVENT_DATA = {
  'visita-apostolica-2025': {
    title: 'Visita Apostólica 2025',
    date1: 'Sábado Julio 26: 6pm',
    date2: 'Domingo Julio 27: 4:30pm',
    address: '255 16th St. Richmond, CA 94806',
    phone: '(415) 827-4473',
    image: '/Orange and Blue Modern Festive Worship Event Instagram Post.jpg',
    maps: 'https://maps.google.com/?q=255+16th+St,+Richmond,+CA+94806',
  },
};

const EventDetailsPage = () => {
  const { slug } = useParams();
  const event = EVENT_DATA[slug];

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h1 className="text-3xl font-bold text-[#03346E] mb-4">Evento no encontrado</h1>
        <Link to="/events" className="text-blue-700 underline">Volver a eventos</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 font-sans">
      <Helmet>
        <title>{event.title} - Eventos</title>
        <meta name="description" content={`Detalles del evento: ${event.title}`} />
        <meta property="og:title" content={`${event.title} - Eventos`} />
        <meta property="og:description" content={`Detalles del evento: ${event.title}`} />
        <meta property="og:image" content={event.image} />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${event.title} - Eventos`} />
        <meta name="twitter:description" content={`Detalles del evento: ${event.title}`} />
        <meta name="twitter:image" content={event.image} />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#021526] via-[#03346E] to-[#1e40af] text-white py-10 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">{event.title}</h1>
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
                src={event.image}
                alt={event.title}
                className="w-full md:w-80 h-60 object-cover rounded-2xl shadow-lg"
              />
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold text-[#03346E] mb-4">{event.title}</h2>
                <div className="text-base text-blue-800 font-semibold mb-2">Apostol Andy Zamora</div>
                <div className="text-base font-semibold text-slate-700 mb-1">Hora de entrada</div>
                <div className="text-lg text-slate-700 mb-2">{event.date1}</div>
                <div className="text-lg text-slate-700 mb-2">{event.date2}</div>
                <div className="text-base text-slate-500 mb-2">{event.address}</div>
              </div>
            </div>
            <div className="text-slate-700 text-lg leading-relaxed mb-8">
              <p className="mb-4">
                Prepárate para un fin de semana de bendición, palabra profética y ministración especial con nuestros invitados apostólicos. ¡No te pierdas este tiempo de avivamiento y comunión!
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Adoración en vivo</li>
                <li>Ministerio para toda la familia</li>
                <li>Entrada gratuita</li>
              </ul>
              <p>
                Para más información llamar al: <a href="tel:4158274473" className="text-blue-700 underline">{event.phone}</a>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
              <a
                href={event.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 text-base shadow-lg hover:shadow-xl transform hover:scale-105 border border-blue-700"
              >
                Cómo llegar
              </a>
              <Link
                to="/events"
                className="bg-white border-2 border-blue-700 text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 hover:text-blue-800 transition-all duration-300 text-base shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Volver a eventos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetailsPage; 