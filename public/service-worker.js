const CACHE_NAME = 'church-website-v2';
const STATIC_CACHE = 'static-v2';
const DYNAMIC_CACHE = 'dynamic-v2';

// Assets to cache immediately
const urlsToCache = [
  '/',
  '/videos/church-background.mp4',
  '/community.jpg',
  '/teaching.jpg',
  '/service.jpg',
  '/Adulam Logo.jpg',
  '/Orange and Blue Modern Festive Worship Event Instagram Post.jpg',
  '/IMG_0998.PNG'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Caching static assets');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('Static assets cached successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Error caching static assets:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service worker activated');
      return self.clients.claim();
    })
  );
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Handle different types of requests
  if (request.destination === 'image') {
    event.respondWith(handleImageRequest(request));
  } else if (request.destination === 'video') {
    event.respondWith(handleVideoRequest(request));
  } else if (url.pathname.startsWith('/static/')) {
    event.respondWith(handleStaticRequest(request));
  } else {
    event.respondWith(handlePageRequest(request));
  }
});

// Handle image requests with cache-first strategy
async function handleImageRequest(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('Error handling image request:', error);
    return new Response('Image not available', { status: 404 });
  }
}

// Handle video requests with cache-first strategy
async function handleVideoRequest(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('Error handling video request:', error);
    return new Response('Video not available', { status: 404 });
  }
}

// Handle static assets with cache-first strategy
async function handleStaticRequest(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('Error handling static request:', error);
    return new Response('Asset not available', { status: 404 });
  }
}

// Handle page requests with network-first strategy
async function handlePageRequest(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('Network failed, trying cache:', error);
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline page for navigation requests
    if (request.destination === 'document') {
      return caches.match('/');
    }
    
    return new Response('Page not available', { status: 404 });
  }
}

// Background sync for offline form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  try {
    // Handle any pending requests
    console.log('Background sync completed');
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

// Push notifications (if needed in the future)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/Adulam Logo.jpg',
      badge: '/Adulam Logo.jpg',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      }
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/')
  );
});

// Cache cleanup - remove old entries
async function cleanupCache() {
  const cacheNames = await caches.keys();
  const cachePromises = cacheNames.map(async (cacheName) => {
    const cache = await caches.open(cacheName);
    const keys = await cache.keys();
    
    // Remove entries older than 30 days
    const oldEntries = keys.filter(async (request) => {
      const response = await cache.match(request);
      const date = response.headers.get('date');
      if (date) {
        const age = Date.now() - new Date(date).getTime();
        return age > 30 * 24 * 60 * 60 * 1000; // 30 days
      }
      return false;
    });
    
    await Promise.all(oldEntries.map(request => cache.delete(request)));
  });
  
  await Promise.all(cachePromises);
}

// Run cache cleanup periodically
setInterval(cleanupCache, 24 * 60 * 60 * 1000); // Every 24 hours 