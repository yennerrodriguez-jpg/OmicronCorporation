self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('omicron-cache').then(cache => {
      return cache.addAll([
        './',
        './icon-192.png',
        './icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
