import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  useEffect(() => {
    const video1 = videoRef1.current;
    const video2 = videoRef2.current;

    const handleVideoLoad = () => {
      if (video1) {
        video1.currentTime = 0; // First video starts at beginning
      }
      if (video2) {
        video2.currentTime = 8; // Second video starts at 8 seconds (halfway through)
      }
    };

    if (video1) {
      video1.addEventListener('loadedmetadata', handleVideoLoad);
    }
    if (video2) {
      video2.addEventListener('loadedmetadata', handleVideoLoad);
    }

    return () => {
      if (video1) {
        video1.removeEventListener('loadedmetadata', handleVideoLoad);
      }
      if (video2) {
        video2.removeEventListener('loadedmetadata', handleVideoLoad);
      }
    };
  }, []);

  const handleVideoLoad = (videoRef) => {
    if (videoRef.current) {
      videoRef.current.currentTime = 30;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Dual Background Videos */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Dual Background Videos Container */}
        <div className="absolute inset-0 flex">
          {/* First Video */}
          <div className="w-1/2 h-full">
            <video
              ref={videoRef1}
              autoPlay
              muted
              loop
              playsInline
              onLoadedData={() => handleVideoLoad(videoRef1)}
              className="w-full h-full object-cover"
              style={{
                objectPosition: 'center 30%', // Move video up to show less chest area
              }}
            >
              <source src="/videos/church-background.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          {/* Second Video */}
          <div className="w-1/2 h-full">
            <video
              ref={videoRef2}
              autoPlay
              muted
              loop
              playsInline
              onLoadedData={() => handleVideoLoad(videoRef2)}
              className="w-full h-full object-cover"
              style={{
                objectPosition: 'center 30%', // Move video up to show less chest area
              }}
            >
              <source src="/videos/church-background.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        
        {/* Video Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Content Overlay */}
        <div className="relative z-10 text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Obra de Adulam
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light mb-8 text-gray-200 max-w-3xl mx-auto">
              Para glorificar a Dios haciendo discípulos de todas las naciones
            </h2>
            <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
              <Link
                to="/visit"
                className="inline-block bg-white text-gray-900 px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition duration-300 text-lg"
              >
                ¿Nuevo en Obra de Adulam? EMPIEZA AQUÍ
              </Link>
              <button className="inline-block bg-transparent text-white border-2 border-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-gray-900 transition duration-300 text-lg">
                Ver Sermón Actual
              </button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Campus Locations */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Nuestras Ubicacion</h2>
            <p className="text-slate-700 max-w-2xl mx-auto">
              Únete a nosotros en nuestro culto presencial para adoración, comunidad y crecimiento.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center border-l-4 border-[#03346E]">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Obra de Adulam</h3>
              <p className="text-slate-600 mb-4">Campus Principal</p>
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

      {/* Current Sermon Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Sucediendo en Obra de Adulam</h2>
              <div className="w-24 h-1 bg-[#03346E] mx-auto"></div>
            </div>
            
            <div className="bg-[#021526] text-white rounded-lg overflow-hidden shadow-xl">
              <div className="md:flex">
                <div className="md:w-1/2 bg-[#021526] p-8 md:p-12">
                  <h3 className="text-2xl font-bold mb-4 text-[#03346E]">Sermón Actual</h3>
                  <p className="text-slate-300 mb-6">
                    Únete a nosotros este domingo mientras continuamos nuestra serie sobre vivir nuestra fe en la vida cotidiana.
                  </p>
                  <button className="bg-[#03346E] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#03346E]/80 transition duration-300">
                    Haz clic para saber más
                  </button>
                </div>
                <div className="md:w-1/2 bg-[#021526] p-8 md:p-12">
                  <h3 className="text-2xl font-bold mb-4 text-[#03346E]">¡Mira lo que viene!</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-[#03346E] pl-4">
                      <h4 className="font-semibold">Reunión de Varones</h4>
                      <p className="text-slate-300 text-sm">Martes, 7:00 PM</p>
                    </div>
                    <div className="border-l-4 border-[#03346E] pl-4">
                      <h4 className="font-semibold">Reunion de Mujeres</h4>
                      <p className="text-slate-300 text-sm">Viernes, 7:00 PM</p>
                    </div>
                    <div className="border-l-4 border-[#03346E] pl-4">
                      <h4 className="font-semibold">Evangelismo</h4>
                      <p className="text-slate-300 text-sm">Sábado, 9:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Life in the Harvest Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Vida en Obra de Adulam</h2>
            <p className="text-slate-700 max-w-2xl mx-auto">
              Descubre las diferentes maneras en que puedes conectarte y crecer en nuestra comunidad.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-[#021526] to-[#021526] flex items-center justify-center">
                <span className="text-6xl">🙏</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Grupos de Oración</h3>
                <p className="text-slate-600 mb-4">
                  Únete a nuestros grupos de oración semanales para orar juntos y apoyarnos mutuamente.
                </p>
                <button className="text-[#03346E] font-semibold hover:text-[#03346E]/80 transition duration-300">
                  Conoce más →
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-[#03346E] to-[#03346E] flex items-center justify-center">
                <span className="text-6xl">👥</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Grupos Pequeños</h3>
                <p className="text-slate-600 mb-4">
                  Conecta con otros creyentes en un ambiente más íntimo para estudio bíblico y compañerismo.
                </p>
                <button className="text-[#03346E] font-semibold hover:text-[#03346E]/80 transition duration-300">
                  Conoce más →
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-[#021526] to-[#021526] flex items-center justify-center">
                <span className="text-6xl">🎵</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Ministerio de Música</h3>
                <p className="text-slate-600 mb-4">
                  Usa tus dones musicales para glorificar a Dios y bendecir a nuestra congregación.
                </p>
                <button className="text-[#03346E] font-semibold hover:text-[#03346E]/80 transition duration-300">
                  Conoce más →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-[#021526] to-[#021526] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para tu próximo paso?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Ya sea que estés explorando la fe o buscando crecer más en tu relación con Cristo, 
            tenemos un lugar para ti en Obra de Adulam.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
            <Link
              to="/visit"
              className="inline-block bg-[#03346E] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#03346E]/80 transition duration-300 text-lg"
            >
              Visítanos este Domingo
            </Link>
            <Link
              to="/prayer"
              className="inline-block bg-transparent text-white border-2 border-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-[#021526] transition duration-300 text-lg"
            >
              Envía una Petición de Oración
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 
