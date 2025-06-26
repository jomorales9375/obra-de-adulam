import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-gradient-to-r from-[#021526] via-[#021526] to-[#021526]'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="group">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 overflow-hidden">
                  <img 
                    src="/Adulam Logo.jpg" 
                    alt="Obra de Adulam Logo" 
                    className="w-12 h-12 object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className={`text-xl font-bold transition-colors duration-300 ${
                    isScrolled ? 'text-slate-900' : 'text-white'
                  }`}>
                    Obra de Adulam
                  </span>
                  <span className={`text-xs transition-colors duration-300 ${
                    isScrolled ? 'text-slate-600' : 'text-white'
                  }`}>
                    Ministerios Sobre El Final De Los Tiempos
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {[
                { path: '/', label: 'INICIO' },
                { path: '/about', label: 'ACERCA DE' },
                { path: '/prayer', label: 'ORACIÓN' },
                { path: '/visit', label: 'VISÍTANOS' },
                { path: '/donate', label: 'DAR' }
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 group ${
                    isActive(item.path)
                      ? isScrolled
                        ? 'bg-[#021526] text-white shadow-lg'
                        : 'bg-white/20 text-white backdrop-blur-sm'
                      : isScrolled
                        ? 'text-slate-700 hover:bg-slate-100'
                        : 'text-slate-200 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{item.label}</span>
                  </div>
                  
                  {/* Active indicator */}
                  {isActive(item.path) && (
                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${
                      isScrolled ? 'bg-[#021526]' : 'bg-[#03346E]'
                    }`}></div>
                  )}
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#03346E]/0 via-[#03346E]/10 to-[#03346E]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
                isScrolled 
                  ? 'text-slate-700 hover:bg-slate-100' 
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-6 h-6">
                <span className={`absolute left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : '-translate-y-1'
                }`}></span>
                <span className={`absolute left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : 'translate-y-1'
                }`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <nav className="py-4 border-t border-slate-700/30">
              <div className="flex flex-col space-y-2">
                {[
                  { path: '/', label: 'INICIO' },
                  { path: '/about', label: 'ACERCA DE' },
                  { path: '/prayer', label: 'ORACIÓN' },
                  { path: '/visit', label: 'VISÍTANOS' },
                  { path: '/donate', label: 'DAR' }
                ].map((item, index) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                      isActive(item.path)
                        ? isScrolled
                          ? 'bg-[#021526] text-white shadow-lg'
                          : 'bg-white/20 text-white backdrop-blur-sm'
                        : isScrolled
                          ? 'text-slate-700 hover:bg-slate-100'
                          : 'text-slate-200 hover:bg-white/10 hover:text-white'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="font-medium">{item.label}</span>
                    {isActive(item.path) && (
                      <div className={`ml-auto w-2 h-2 rounded-full ${
                        isScrolled ? 'bg-[#021526]' : 'bg-[#03346E]'
                      }`}></div>
                    )}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-20"></div>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#021526] text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Church Info */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-[#03346E]">Obra de Adulam</h3>
              <p className="text-slate-300 mb-4">
                4 Marina Way,<br />
                Richmond, CA, 94806,<br />
                Estados Unidos
              </p>
              <p className="text-slate-300">Horarios: Servicios Dominicales 3:00 PM</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#03346E]">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-slate-300 hover:text-[#03346E] transition duration-300">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-slate-300 hover:text-[#03346E] transition duration-300">
                    Acerca de
                  </Link>
                </li>
                <li>
                  <Link to="/prayer" className="text-slate-300 hover:text-[#03346E] transition duration-300">
                    Peticiones de Oración
                  </Link>
                </li>
                <li>
                  <Link to="/visit" className="text-slate-300 hover:text-[#03346E] transition duration-300">
                    Visítanos
                  </Link>
                </li>
                <li>
                  <Link to="/donate" className="text-slate-300 hover:text-[#03346E] transition duration-300">
                    Dar
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#03346E]">Recursos</h4>
              <ul className="space-y-2">
                <li>
                  <button className="text-slate-300 hover:text-[#03346E] transition duration-300 bg-transparent border-none p-0 text-left">
                    Descarga Nuestra App
                  </button>
                </li>
                <li>
                  <button className="text-slate-300 hover:text-[#03346E] transition duration-300 bg-transparent border-none p-0 text-left">
                    Archivo de Sermones
                  </button>
                </li>
                <li>
                  <button className="text-slate-300 hover:text-[#03346E] transition duration-300 bg-transparent border-none p-0 text-left">
                    Actualización Semanal
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-400">
              Copyright 2024 Obra de Adulam. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 