import React, { useState, useEffect } from 'react';

const CacheManager = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClearing, setIsClearing] = useState(false);
  const [lastCleared, setLastCleared] = useState(null);

  useEffect(() => {
    // Show cache manager if user holds Ctrl+Shift+C
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        setIsVisible(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const clearCache = async () => {
    setIsClearing(true);
    try {
      // Clear service worker cache
      if ('serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.getRegistration();
        if (registration && registration.active) {
          registration.active.postMessage({ type: 'CLEAR_CACHE' });
        }
      }

      // Clear browser cache for the site
      if ('caches' in window) {
        const cacheNames = await caches.keys();
        await Promise.all(
          cacheNames.map(cacheName => caches.delete(cacheName))
        );
      }

      // Clear localStorage and sessionStorage
      localStorage.clear();
      sessionStorage.clear();

      setLastCleared(new Date());
      
      // Reload the page after a short delay
      setTimeout(() => {
        window.location.reload();
      }, 1000);

    } catch (error) {
      console.error('Error clearing cache:', error);
    } finally {
      setIsClearing(false);
    }
  };

  const checkForUpdates = async () => {
    try {
      if ('serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.getRegistration();
        if (registration) {
          await registration.update();
          console.log('Service worker updated');
        }
      }
    } catch (error) {
      console.error('Error checking for updates:', error);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-sm">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-800">
            Gestión de Caché
          </h3>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        <div className="space-y-3">
          <div className="text-sm text-gray-600">
            <p>Si tienes problemas con contenido desactualizado:</p>
            {lastCleared && (
              <p className="text-xs text-green-600 mt-1">
                Última limpieza: {lastCleared.toLocaleTimeString()}
              </p>
            )}
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={clearCache}
              disabled={isClearing}
              className="flex-1 bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white text-sm py-2 px-3 rounded transition-colors"
            >
              {isClearing ? 'Limpiando...' : 'Limpiar Caché'}
            </button>
            
            <button
              onClick={checkForUpdates}
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 px-3 rounded transition-colors"
            >
              Buscar Actualizaciones
            </button>
          </div>
          
          <div className="text-xs text-gray-500">
            <p>Atajo: Ctrl+Shift+C para abrir</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CacheManager; 