import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-900 text-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold">
              Obra de Adulam
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link
                to="/"
                className={`hover:text-gray-300 transition duration-300 ${
                  isActive('/') ? 'text-white border-b-2 border-white' : 'text-gray-300'
                }`}
              >
                INICIO
              </Link>
              <Link
                to="/about"
                className={`hover:text-gray-300 transition duration-300 ${
                  isActive('/about') ? 'text-white border-b-2 border-white' : 'text-gray-300'
                }`}
              >
                ACERCA DE
              </Link>
              <Link
                to="/prayer"
                className={`hover:text-gray-300 transition duration-300 ${
                  isActive('/prayer') ? 'text-white border-b-2 border-white' : 'text-gray-300'
                }`}
              >
                ORACIÓN
              </Link>
              <Link
                to="/visit"
                className={`hover:text-gray-300 transition duration-300 ${
                  isActive('/visit') ? 'text-white border-b-2 border-white' : 'text-gray-300'
                }`}
              >
                VISÍTANOS
              </Link>
              <Link
                to="/donate"
                className={`hover:text-gray-300 transition duration-300 ${
                  isActive('/donate') ? 'text-white border-b-2 border-white' : 'text-gray-300'
                }`}
              >
                DAR
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t border-gray-700">
              <div className="flex flex-col space-y-4">
                <Link
                  to="/"
                  className={`px-4 py-2 rounded-md transition duration-300 ${
                    isActive('/') ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-800'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  INICIO
                </Link>
                <Link
                  to="/about"
                  className={`px-4 py-2 rounded-md transition duration-300 ${
                    isActive('/about') ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-800'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  ACERCA DE
                </Link>
                <Link
                  to="/prayer"
                  className={`px-4 py-2 rounded-md transition duration-300 ${
                    isActive('/prayer') ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-800'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  ORACIÓN
                </Link>
                <Link
                  to="/visit"
                  className={`px-4 py-2 rounded-md transition duration-300 ${
                    isActive('/visit') ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-800'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  VISÍTANOS
                </Link>
                <Link
                  to="/donate"
                  className={`px-4 py-2 rounded-md transition duration-300 ${
                    isActive('/donate') ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-800'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  DAR
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Church Info */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Obra de Adulam</h3>
              <p className="text-gray-300 mb-4">
                4 Marina Way,<br />
                Richmond, CA, 94806,<br />
                Estados Unidos
              </p>
              <p className="text-gray-300">Horarios: Servicios Dominicales 3:00 PM</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition duration-300">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-white transition duration-300">
                    Acerca de
                  </Link>
                </li>
                <li>
                  <Link to="/prayer" className="text-gray-300 hover:text-white transition duration-300">
                    Peticiones de Oración
                  </Link>
                </li>
                <li>
                  <Link to="/visit" className="text-gray-300 hover:text-white transition duration-300">
                    Visítanos
                  </Link>
                </li>
                <li>
                  <Link to="/donate" className="text-gray-300 hover:text-white transition duration-300">
                    Dar
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                    Descarga Nuestra App
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                    Archivo de Sermones
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                    Actualización Semanal
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              Copyright 2024 Obra de Adulam. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 