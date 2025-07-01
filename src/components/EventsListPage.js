import React from 'react';
import { Link } from 'react-router-dom';

const EventsListPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 font-sans py-16">
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#03346E]">Eventos</h1>
      <ul className="space-y-6">
        <li className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#03346E] mb-2">Visita Apostólica 2025</h2>
            <div className="text-slate-700 mb-1">Sábado Julio 26: 6pm</div>
            <div className="text-slate-700 mb-1">Domingo Julio 27: 4:30pm</div>
            <div className="text-slate-500">255 16th St. Richmond, CA 94806</div>
          </div>
          <Link
            to="/events/visita-apostolica-2025"
            className="mt-4 md:mt-0 md:ml-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Ver Detalles
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default EventsListPage; 