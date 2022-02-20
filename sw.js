var CACHE_NAME = 'cache-v1';

var urlsToCache = [
  '/',
  'style.css',
  'favicon.svg',
  'manifest.webmanifest',
  'average-color.js',
  'icon-192x192.png',
  'sw.js',
  'about'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});