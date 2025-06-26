import React, { useMemo, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import DonatePage from './components/DonatePage';
import PrayerRequestPage from './components/PrayerRequestPage';
import VisitUsPage from './components/VisitUsPage';
import './App.css';

const AboutPage = React.memo(() => {
  const beliefs = useMemo(() => [
    {
      title: "Dones Ministeriales",
      content: "Creemos en la existencia de los regalos del hijo de Dios para su pueblo, denominados como dones ministeriales, que están funcionando hasta que todos lleguemos a la unidad de la fe y del conocimiento pleno del hijo de Dios — a la condición de un hombre maduro, a la medida de la estatura de la plenitud de Cristo. Estos dones son gracias depositadas en vasos humanos que se denominan de la siguiente manera: Apóstoles, Profetas, Evangelistas, Pastores y Maestros."
    },
    {
      title: "Cinco Ministerios Primarios",
      content: "Creemos que estos cinco ministerios primarios están en función en la actualidad y son constituidos por Dios, y no por designación humana. Estos ejercen la función de coberturas ministeriales sobre el cuerpo de Cristo."
    },
    {
      title: "Cobertura Apostólica",
      content: "Creemos que no debe haber oveja sin pastor y pastor sin cobertura apostólica. Creemos que la cobertura de los ministerios auténticos del Señor ministran bendición, protección y orden dentro del cuerpo de Cristo que es su iglesia (Is. 4:5 y 6)."
    },
    {
      title: "Salvos del Reino vs Iglesia del Señor",
      content: "Establecemos la diferencia entre los salvos del Reino y la Iglesia del Señor, determinando que los aspectos de cobertura ministerial no influirán en la salvación eterna del creyente, pero sí en su función en el cuerpo de Cristo, si es parte del mismo."
    },
    {
      title: "Señal de Autoridad",
      content: "Creemos que la mujer cristiana debe tener señal de autoridad sobre su cabeza en el momento de la oración y ejecución de los dones del Espíritu (I Co. 11:5 y 6). Esta cubierta creemos que es la imposición de un velo, por causa de los ángeles (verso 10). Este velo difiere del velo natural que es el cabello, por la razón de que debe ser usado solamente para orar o profetizar."
    }
  ], []);

  const [openAccordion, setOpenAccordion] = React.useState(0);

  const toggleAccordion = useCallback((index) => {
    setOpenAccordion(prev => prev === index ? -1 : index);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Acerca de Obra de Adulam
            </h1>
            <div className="w-24 h-1 bg-gray-300 mx-auto"></div>
          </div>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              ¡Bienvenido a Obra de Adulam! Somos una congregación acogedora e inclusiva 
              dedicada a difundir el amor de Dios y servir a nuestra comunidad. Fundada en 1985, 
              hemos sido una piedra angular de fe y compañerismo en nuestra área por más de 35 años.
            </p>
            
            <p>
              Nuestra misión es glorificar a Dios haciendo discípulos de todas las naciones. Creemos en 
              crear un lugar donde todos se sientan bienvenidos, donde se animen las preguntas, 
              y donde la fe crezca a través de la comunidad, el servicio y la adoración.
            </p>
            
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Nuestras Creencias Fundamentales</h3>
              <div className="space-y-4">
                {beliefs.map((belief, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors duration-200"
                    >
                      <span className="font-semibold text-gray-900 text-lg">{belief.title}</span>
                      <svg
                        className={`w-5 h-5 text-gray-600 transform transition-transform duration-200 ${
                          openAccordion === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openAccordion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 pb-4">
                        <p className="text-gray-700 leading-relaxed">{belief.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

AboutPage.displayName = 'AboutPage';

const App = React.memo(() => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/prayer" element={<PrayerRequestPage />} />
          <Route path="/visit" element={<VisitUsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
});

App.displayName = 'App';

export default App;
