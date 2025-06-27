const CACHE_NAME = 'church-website-v1';
const urlsToCache = [
  '/',
  '/videos/church-background.mp4',
  '/community.jpg',
  '/teaching.jpg',
  '/service.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});

// Cache video files aggressively for better performance
self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('/videos/')) {
    event.respondWith(
      caches.open(CACHE_NAME)
        .then((cache) => {
          return cache.match(event.request)
            .then((response) => {
              if (response) {
                return response;
              }
              return fetch(event.request)
                .then((response) => {
                  cache.put(event.request, response.clone());
                  return response;
                });
            });
        })
    );
  }
}); 