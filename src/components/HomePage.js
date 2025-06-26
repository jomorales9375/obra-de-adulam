import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  useEffect(() => {
    const handleVideoLoad = (videoRef) => {
      if (videoRef.current) {
        videoRef.current.play().catch(error => {
          console.log('Video autoplay failed:', error);
        });
      }
    };

    handleVideoLoad(videoRef1);
    handleVideoLoad(videoRef2);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex">
          <video
            ref={videoRef1}
            className="w-1/2 h-full object-cover"
            muted
            loop
            playsInline
            onLoadedMetadata={(e) => {
              e.target.currentTime = 0; // Start from beginning
            }}
          >
            <source src="/videos/church-background.mp4" type="video/mp4" />
          </video>
          <video
            ref={videoRef2}
            className="w-1/2 h-full object-cover"
            muted
            loop
            playsInline
            onLoadedMetadata={(e) => {
              e.target.currentTime = 30; // Start 30 seconds in
            }}
          >
            <source src="/videos/church-background.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Obra de Adulam</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Una comunidad de fe que busca glorificar a Dios y hacer discípulos de todas las naciones
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/visit-us"
              className="bg-[#03346E] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#03346E]/80 transition duration-300"
            >
              Visítanos
            </Link>
            <Link
              to="/about"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition duration-300"
            >
              Conoce Más
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Bienvenido a Obra de Adulam</h2>
            <p className="text-slate-700 max-w-2xl mx-auto">
              Somos una iglesia que cree en el poder transformador del evangelio de Jesucristo. 
              Nuestra misión es glorificar a Dios haciendo discípulos de todas las naciones.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#03346E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#03346E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Comunidad</h3>
              <p className="text-slate-600">
                Únete a una comunidad de fe donde encontrarás amor, apoyo y crecimiento espiritual.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#03346E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#03346E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Enseñanza</h3>
              <p className="text-slate-600">
                Aprende la palabra de Dios a través de sermones bíblicos y estudios profundos.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#03346E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#03346E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Servicio</h3>
              <p className="text-slate-600">
                Sirve a Dios y a otros a través de diferentes ministerios y oportunidades de voluntariado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Nuestra Ubicacion</h2>
            <p className="text-slate-700 max-w-2xl mx-auto">
              Únete a nosotros en nuestro culto presencial para adoración, comunidad y crecimiento.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center border-l-4 border-[#03346E]">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Obra de Adulam</h3>
              <p className="text-slate-600 mb-4"></p>
              <p className="text-sm text-slate-500 mb-4">4 Marina Way<br />Richmond, CA 94806</p>
              <p className="text-sm text-slate-500">Servicios Dominicales: 3:00 PM</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-[#03346E]">
              <div className="h-64 md:h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.1234567890123!2d-122.3456789!3d37.9876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e1234567890%3A0xabcdef1234567890!2s4+Marina+Way%2C+Richmond%2C+CA+94806!5e0!3m2!1sen!2sus!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Obra de Adulam - Richmond Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">¡Mira lo que viene!</h2>
            <p className="text-slate-700 max-w-2xl mx-auto text-lg">
              Próximo evento especial en nuestra iglesia
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
              <div className="md:flex">
                {/* Date Section */}
                <div className="md:w-1/3 bg-gradient-to-br from-[#03346E] to-[#1e40af] p-8 text-white text-center flex flex-col justify-center">
                  <div className="text-6xl font-bold mb-2">26 y 27</div>
                  <div className="text-xl font-semibold mb-4">JULIO</div>
                  <div className="text-sm opacity-90">2025</div>
                  <div className="mt-6">
                    <div className="flex items-center justify-center text-sm mb-2">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      6:00 PM
                    </div>
                    <div className="flex items-center justify-center text-sm">
                      
                      255 16th St, Richmond, CA 94801
                    </div>
                  </div>
                </div>
                
                {/* Event Details */}
                <div className="md:w-2/3 p-8">
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">Visita Apostólica</h3>
                  <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                    Únete a nosotros para celebrar el nacimiento de nuestro Salvador con música, 
                    adoración y un mensaje especial que tocará tu corazón. Una noche llena de 
                    bendiciones, comunidad y la verdadera razón de la temporada.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center text-sm text-slate-500 bg-slate-50 px-3 py-2 rounded-full">
                     
                    </div>
                    <div className="flex items-center text-sm text-slate-500 bg-slate-50 px-3 py-2 rounded-full">
                    
                    </div>
                    <div className="flex items-center text-sm text-slate-500 bg-slate-50 px-3 py-2 rounded-full">
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">¿No puedes asistir? No te preocupes</p>
            <a 
              href="/events" 
              className="inline-flex items-center text-[#03346E] font-semibold hover:text-[#03346E]/80 transition duration-300"
            >
              Ver otros eventos y actividades
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Síguenos en Redes Sociales</h2>
            <p className="text-slate-700 max-w-2xl mx-auto">
              Mantente conectado con nuestra comunidad a través de nuestras redes sociales
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* YouTube */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">YouTube</h3>
              <p className="text-slate-600 mb-6">
                Mira nuestros sermones, testimonios y contenido especial
              </p>
              <a 
                href="https://www.youtube.com/@obradeadulam9857" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition duration-300"
              >
                Suscribirse
              </a>
            </div>

            {/* Facebook */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Facebook</h3>
              <p className="text-slate-600 mb-6">
                Conecta con nuestra comunidad y mantente al día con eventos
              </p>
              <a 
                href="https://www.facebook.com/profile.php?id=100093414965081" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
              >
                Seguir
              </a>
            </div>

            {/* Instagram */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.875-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Instagram</h3>
              <p className="text-slate-600 mb-6">
                Ve momentos especiales de nuestra comunidad y ministerio
              </p>
              <a 
                href="https://www.instagram.com/obradeadulam/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-md font-semibold hover:from-purple-600 hover:to-pink-600 transition duration-300"
              >
                Seguir
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 
