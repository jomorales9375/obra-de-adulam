// Cache management utilities for Obra de Adulam
// Helps ensure users see the latest version of the website

export const clearAllCaches = async () => {
  if ('caches' in window) {
    const cacheNames = await caches.keys();
    await Promise.all(
      cacheNames.map(cacheName => caches.delete(cacheName))
    );
    console.log('All caches cleared');
  }
};

export const forceUpdate = async () => {
  // Clear all caches
  await clearAllCaches();
  
  // Reload the page to get fresh content
  window.location.reload(true);
};

export const checkForUpdates = () => {
  // Check if service worker is available
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistration().then(registration => {
      if (registration && registration.waiting) {
        // Send message to service worker to skip waiting
        registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      }
    });
  }
};

export const addUpdateNotification = () => {
  // Listen for service worker updates
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      // Show a notification that the app has been updated
      const notification = document.createElement('div');
      notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #021526;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        z-index: 9999;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        font-family: sans-serif;
        font-size: 14px;
      `;
      notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
          <span>🔄 Nueva versión disponible</span>
          <button onclick="this.parentElement.parentElement.remove()" 
                  style="background: none; border: none; color: white; cursor: pointer; font-size: 18px;">
            ×
          </button>
        </div>
      `;
      document.body.appendChild(notification);
      
      // Auto-remove after 5 seconds
      setTimeout(() => {
        if (notification.parentElement) {
          notification.remove();
        }
      }, 5000);
    });
  }
};

// Initialize update checking
if (typeof window !== 'undefined') {
  // Check for updates when the page loads
  window.addEventListener('load', () => {
    checkForUpdates();
    addUpdateNotification();
  });
} 