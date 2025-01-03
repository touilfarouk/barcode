self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('ml5-barcode-scanner-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/icons/icon-192x192.png',
        '/icons/icon-512x512.png',
        'https://cdn.jsdelivr.net/npm/ml5@2.3.0/dist/ml5.min.js'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
