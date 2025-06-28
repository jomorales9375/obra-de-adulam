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
    <div className="min-h-screen font-sans">
      {/* Hero Section - Black */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
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
        
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">Obra de Adulam</h1>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Una comunidad de fe que busca glorificar a Dios y hacer discípulos de todas las naciones
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/visit"
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-10 py-4 font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Visítanos
            </Link>
            <Link
              to="/about"
              className="bg-transparent border-2 border-white text-white px-10 py-4 font-semibold hover:bg-white hover:text-black transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Conoce Más
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section - White */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Bienvenido a Obra de Adulam</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-8"></div>
            <p className="text-gray-700 max-w-3xl mx-auto text-xl leading-relaxed">
              Somos una iglesia que cree en el poder transformador del evangelio de Jesucristo. 
              Nuestra misión es glorificar a Dios haciendo discípulos de todas las naciones.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="relative overflow-hidden shadow-xl border border-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img 
                src="/community.jpg" 
                alt="Comunidad" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-4 text-center">Comunidad</h3>
                <p className="text-gray-200 text-lg leading-relaxed text-center">
                  Únete a una comunidad de fe donde encontrarás amor, apoyo y crecimiento espiritual.
                </p>
              </div>
            </div>
            
            <div className="relative overflow-hidden shadow-xl border border-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img 
                src="/teaching.jpg" 
                alt="Enseñanza" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-4 text-center">Enseñanza</h3>
                <p className="text-gray-200 text-lg leading-relaxed text-center">
                  Aprende la palabra de Dios a través de sermones bíblicos y estudios profundos.
                </p>
              </div>
            </div>
            
            <div className="relative overflow-hidden shadow-xl border border-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img 
                src="/service.jpg" 
                alt="Servicio" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-4 text-center">Servicio</h3>
                <p className="text-gray-200 text-lg leading-relaxed text-center">
                  Sirve a Dios y a otros a través de diferentes ministerios y oportunidades de voluntariado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section - Black */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Nuestra Ubicacion</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-8"></div>
            <p className="text-gray-300 max-w-3xl mx-auto text-xl leading-relaxed">
              Únete a nosotros en nuestro culto presencial para adoración, comunidad y crecimiento.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-gray-900/80 backdrop-blur-sm shadow-xl p-10 text-center border border-gray-800 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-3xl font-bold text-white mb-6">Obra de Adulam</h3>
              <p className="text-gray-300 mb-8 text-lg">Campus Principal</p>
              <p className="text-gray-400 mb-8 text-lg">4 Marina Way<br />Richmond, CA 94806</p>
              <p className="text-gray-400 text-lg">Servicios Dominicales: 3:00 PM</p>
            </div>
            <div className="bg-gray-900/80 backdrop-blur-sm shadow-xl overflow-hidden border border-gray-800 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-80 md:h-full">
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

      {/* Upcoming Events Section - White */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Title and Description - Left Side */}
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                <span className="font-light">Próximo</span> <span className="font-bold">Evento</span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto md:mx-0 mb-8"></div>
              <p className="text-gray-700 text-xl leading-relaxed">
                Únete a nosotros en nuestro próximo evento especial
              </p>
            </div>
            
            {/* Event Card - Right Side */}
            <div className="relative overflow-hidden shadow-2xl">
              <img 
                src="/Orange and Blue Modern Festive Worship Event Instagram Post.jpg" 
                alt="Próximo Evento - Visita Apostólica" 
                className="w-full h-80 object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex items-center">
                <div className="grid grid-cols-3 gap-6 items-center w-full">
                  {/* Date */}
                  <div className="text-center text-white">
                    <div className="text-4xl font-bold mb-1">26-27</div>
                    <div className="text-lg font-semibold mb-1">JULIO</div>
                    <div className="text-sm opacity-90">2025</div>
                  </div>
                  
                  {/* Event Info */}
                  <div className="col-span-2 text-white">
                    <h3 className="text-2xl font-bold mb-3">Visita Apostólica</h3>
                    <p className="text-sm mb-4 leading-relaxed opacity-90">
                      Una experiencia única de adoración, enseñanza y comunidad. 
                      Ven y sé parte de este momento especial en nuestra iglesia.
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <div className="flex items-center text-xs bg-white/20 px-2 py-1">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        6:00 PM
                      </div>
                      <div className="flex items-center text-xs bg-white/20 px-2 py-1">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        255 16th St
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2">
                      <a 
                        href="/events" 
                        className="bg-white text-blue-600 px-4 py-2 font-semibold hover:bg-gray-100 transition-all duration-300 text-center text-sm"
                      >
                        Más Info
                      </a>
                      <a 
                        href="https://maps.google.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="border border-white text-white px-4 py-2 font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 text-center text-sm"
                      >
                        Cómo Llegar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6 text-lg">¿No puedes asistir? No te preocupes</p>
            <a 
              href="/events" 
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition duration-300 text-lg"
            >
              Ver otros eventos y actividades
              <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Social Media Section - Black */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#021526] to-[#03346E]">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto relative flex flex-col lg:flex-row items-center lg:items-start">
            <div className="flex-1 w-full">
              <div className="text-center lg:text-left mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Síguenos en Redes Sociales</h2>
                <div className="w-32 h-1 bg-gradient-to-r from-[#03346E] to-[#1e40af] mx-auto lg:mx-0 mb-8"></div>
                <p className="text-slate-200 text-xl leading-relaxed max-w-3xl mx-auto lg:mx-0">
                  Mantente conectado con nuestra comunidad a través de nuestras redes sociales
                </p>
              </div>
              <div className="space-y-8">
                {/* YouTube */}
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-600 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white text-xl font-bold">YouTube</div>
                    <div className="text-slate-200 text-base mb-2">Mira nuestros sermones, testimonios y contenido especial</div>
                    <a 
                      href="https://www.youtube.com/@obradeadulam9857" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block mt-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 font-semibold rounded-full hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg"
                    >
                      Suscribirse
                    </a>
                  </div>
                </div>
                {/* Facebook */}
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white text-xl font-bold">Facebook</div>
                    <div className="text-slate-200 text-base mb-2">Conecta con nuestra comunidad y mantente al día con eventos</div>
                    <a 
                      href="https://www.facebook.com/profile.php?id=100093414965081" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block mt-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 font-semibold rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg"
                    >
                      Seguir
                    </a>
                  </div>
                </div>
                {/* Instagram */}
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.875-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                      </svg>
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white text-xl font-bold">Instagram</div>
                    <div className="text-slate-200 text-base mb-2">Ve momentos especiales de nuestra comunidad y ministerio</div>
                    <a 
                      href="https://www.instagram.com/obradeadulam/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block mt-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
                    >
                      Seguir
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Overlapping Phone SVG with image inside screen - right side, hidden on small screens */}
            <div className="hidden lg:block flex-shrink-0 absolute right-0 top-1/2 transform -translate-y-1/2 z-0 pr-8" style={{width: '288px', height: '576px'}}>
              <svg width="288" height="576" viewBox="0 0 288 576" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.96436 40.5964C4.96436 18.1756 23.1493 0 45.5808 0H244.382C266.813 0 284.998 18.1748 284.998 40.5964V535.404C284.998 557.824 266.813 576 244.382 576H45.5808C23.1489 576 4.96436 557.825 4.96436 535.404V40.5964Z" fill="#374151"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M115.083 22.1018C116.578 22.1018 117.79 20.8901 117.79 19.3955C117.79 17.9008 116.578 16.6891 115.083 16.6891C113.587 16.6891 112.375 17.9008 112.375 19.3955C112.375 20.8901 113.587 22.1018 115.083 22.1018Z" fill="#1F2937"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M177.814 23.906C180.307 23.906 182.327 21.8866 182.327 19.3954C182.327 16.9043 180.307 14.8849 177.814 14.8849C175.322 14.8849 173.301 16.9043 173.301 19.3954C173.301 21.8866 175.322 23.906 177.814 23.906Z" fill="#1F2937"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M129.976 17.5912H160.213C161.21 17.5912 162.018 18.3991 162.018 19.3955C162.018 20.3919 161.21 21.1997 160.213 21.1997H129.976C128.979 21.1997 128.17 20.3919 128.17 19.3955C128.17 18.3991 128.979 17.5912 129.976 17.5912Z" fill="#1F2937"/>
                <path d="M2.96265 117.05C2.96265 116.551 3.36665 116.147 3.86501 116.147H5.21916V158.998H3.86501C3.36665 158.998 2.96265 158.594 2.96265 158.095V117.05Z" fill="#1F2937"/>
                <path d="M2.96265 170.725C2.96265 170.227 3.36665 169.823 3.86501 169.823H5.21916V212.673H3.86501C3.36665 212.673 2.96265 212.269 2.96265 211.771V170.725Z" fill="#1F2937"/>
                <path d="M2.96265 75.1013C2.96265 74.6029 3.36665 74.1989 3.86501 74.1989H5.21916V97.6539H3.86501C3.36665 97.6539 2.96265 97.2499 2.96265 96.7516V75.1013Z" fill="#1F2937"/>
                <path d="M285.106 130.251H286.872C287.495 130.251 288 130.756 288 131.379V198.591C288 199.214 287.495 199.719 286.872 199.719H285.106V130.251Z" fill="#1F2937"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M73.1113 16.2389V16.0143C73.1113 14.5194 71.9006 13.3075 70.4059 13.3062C70.4051 13.3062 70.4043 13.3062 70.4035 13.3062L70.4011 13.3062C70.3259 13.3062 70.2514 13.3094 70.1778 13.3154V13.3062L42.8731 13.3062C29.1639 13.3062 18.0518 24.4132 18.0518 38.1144V537.886C18.0518 551.588 29.1646 562.694 42.8731 562.694H247.089C260.798 562.694 271.91 551.587 271.91 537.886V38.1144C271.91 24.4124 260.797 13.3062 247.089 13.3062L219.784 13.3062V13.3154C219.711 13.3094 219.636 13.3062 219.561 13.3062L219.559 13.3062L219.556 13.3062C218.081 13.3075 216.883 14.4878 216.851 15.9555V17.3657C216.851 26.3337 209.566 33.6038 200.581 33.6038H89.3816C80.3958 33.6038 73.1113 26.3357 73.1113 17.3657V16.2389Z" fill="white"/>
                <mask id="mask0_25_2" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="18" y="13" width="254" height="550">
                  <path fillRule="evenodd" clipRule="evenodd" d="M73.1113 16.2389V16.0143C73.1113 14.5194 71.9006 13.3075 70.4059 13.3062C70.4051 13.3062 70.4043 13.3062 70.4035 13.3062L70.4011 13.3062C70.3259 13.3062 70.2514 13.3094 70.1778 13.3154V13.3062L42.8731 13.3062C29.1639 13.3062 18.0518 24.4132 18.0518 38.1144V537.886C18.0518 551.588 29.1646 562.694 42.8731 562.694H247.089C260.798 562.694 271.91 551.587 271.91 537.886V38.1144C271.91 24.4123 260.797 13.3062 247.089 13.3062L219.784 13.3062V13.3154C219.711 13.3094 219.636 13.3062 219.561 13.3062L219.559 13.3062L219.556 13.3062C218.081 13.3075 216.883 14.4878 216.851 15.9554V17.3657C216.851 26.3337 209.566 33.6037 200.581 33.6037H89.3816C80.3958 33.6037 73.1113 26.3357 73.1113 17.3657V16.2389Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_25_2)">
                  <image href="/IMG_0998.PNG" x="18" y="13" width="254" height="550" preserveAspectRatio="xMidYMid slice" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        {/* SVG Wave at Bottom */}
        <svg className="absolute left-0 bottom-0 w-full h-24" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,120 1080,-40 1440,60 L1440,100 L0,100 Z" fill="#fff" />
        </svg>
      </section>
    </div>
  );
};

export default HomePage; 
