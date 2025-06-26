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

      {/* Featured Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Video Destacado</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Mira nuestro último mensaje y descubre cómo Dios está trabajando en nuestra comunidad.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Video Player */}
              <div className="relative">
                <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-xl">
                  {/* Replace the src with your actual video URL */}
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Video Destacado - Obra de Adulam"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                
                {/* Video Overlay for Custom Thumbnail (optional) */}
                {/* Uncomment this if you want to use a custom thumbnail instead of YouTube embed */}
                {/*
                <div className="absolute inset-0 bg-gray-900 rounded-lg overflow-hidden cursor-pointer group">
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                */}
              </div>

              {/* Video Information */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Vivir Nuestra Fe en la Vida Cotidiana
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    En este mensaje, exploramos cómo llevar nuestra fe más allá de los domingos 
                    y aplicarla en cada aspecto de nuestra vida diaria. Descubre cómo Dios 
                    quiere usar tu vida ordinaria para hacer cosas extraordinarias.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Duración</p>
                      <p className="font-semibold text-gray-900">45 minutos</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Pastor</p>
                      <p className="font-semibold text-gray-900">Pastor Oscar Morales</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Fecha</p>
                      <p className="font-semibold text-gray-900">Domingo, 15 de Diciembre 2024</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300 flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    <span>Ver Video Completo</span>
                  </button>
                  <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition duration-300 flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Descargar Notas</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Locations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestras Ubicacion</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Únete a nosotros en nuestro culto presencial para adoración, comunidad y crecimiento.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Obra de Adulam</h3>
              <p className="text-gray-600 mb-4">Campus Principal</p>
              <p className="text-sm text-gray-500 mb-4">4 Marina Way<br />Richmond, CA 94806</p>
              <p className="text-sm text-gray-500">Servicios Dominicales: 3:00 PM</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sucediendo en Obra de Adulam</h2>
              <div className="w-24 h-1 bg-gray-300 mx-auto"></div>
            </div>
            
            <div className="bg-gray-900 text-white rounded-lg overflow-hidden shadow-xl">
              <div className="md:flex">
                <div className="md:w-1/2 bg-gray-800 p-8 md:p-12">
                  <h3 className="text-2xl font-bold mb-4">Sermón Actual</h3>
                  <p className="text-gray-300 mb-6">
                    Únete a nosotros este domingo mientras continuamos nuestra serie sobre vivir nuestra fe en la vida cotidiana.
                  </p>
                  <button className="bg-white text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-300">
                    Haz clic para saber más
                  </button>
                </div>
                <div className="md:w-1/2 bg-gray-700 p-8 md:p-12">
                  <h3 className="text-2xl font-bold mb-4">¡Mira lo que viene!</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-white pl-4">
                      <h4 className="font-semibold">Reunión de Varones</h4>
                      <p className="text-gray-300 text-sm">Martes, 7:00 PM</p>
                    </div>
                    <div className="border-l-4 border-white pl-4">
                      <h4 className="font-semibold">Reunion de Mujeres</h4>
                      <p className="text-gray-300 text-sm">Viernes, 7:00 PM</p>
                    </div>
                    <div className="border-l-4 border-white pl-4">
                      <h4 className="font-semibold">Evangelismo</h4>
                      <p className="text-gray-300 text-sm">Sábado, 9:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Life in the Harvest Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">#VidaEnAdulam</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ve lo que Dios está haciendo en nuestra comunidad y cómo las vidas están siendo transformadas.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Bienvenido</h3>
                <p className="text-gray-600 text-sm">¿Nuevo en nuestra iglesia? Aquí está lo que necesitas saber.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Próximos Eventos</h3>
                <p className="text-gray-600 text-sm">Mantente conectado con lo que está sucediendo en nuestra comunidad.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Tienda de Productos</h3>
                <p className="text-gray-600 text-sm">Obtén productos de Obra de Adulam y apoya nuestra misión.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Todo sobre Obra de Adulam en un correo semanal</h2>
            <p className="text-gray-300 mb-8">¡Suscríbete a la Actualización Semanal!</p>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Dirección de correo"
                className="flex-1 px-4 py-3 rounded-md text-gray-900"
              />
              <button className="bg-white text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-300">
                Suscribirse
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              ¡Gracias! Por favor revisa tu bandeja de entrada para el correo de confirmación y busca La Actualización Semanal los miércoles.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 