var CACHE = "cache-v1";

var urls = [
  "/",
  "style.css",
  "favicon-dark.svg",
  "favicon-light.svg",
  "manifest.webmanifest",
  "average-color.js",
  "icons/icon-192x192.png", // Default favicon size fetched by Chrome on desktop
  "icons/apple-touch-icon-512x512.png", // Apple touch icon
  "icons/about-icon-192x192.png", // PWA shortcut icon
  "icons/home-icon-192x192.png", // PWA shortcut icon
  "sw.js",
  "about",
];

self.addEventListener("install", function (event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return cache.addAll(urls);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
