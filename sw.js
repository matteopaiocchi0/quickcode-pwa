// Service Worker per QuickCode PC PWA
const CACHE_NAME = 'quickcode-pc-v1.0.0';
const urlsToCache = [
  './',
  './index.html',
  './manifest.webmanifest',
  './assets/icon-192.png',
  './assets/icon-512.png'
];

// Install event
self.addEventListener('install', (event) => {
  console.log('Service Worker: Install');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching files');
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.log('Service Worker: Cache failed', error);
      })
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        if (response) {
          console.log('Service Worker: Serving from cache', event.request.url);
          return response;
        }
        console.log('Service Worker: Fetching from network', event.request.url);
        return fetch(event.request);
      })
      .catch((error) => {
        console.log('Service Worker: Fetch failed', error);
      })
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activate');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Background sync (opzionale)
self.addEventListener('sync', (event) => {
  console.log('Service Worker: Background sync', event.tag);
});

// Push notifications (opzionale)
self.addEventListener('push', (event) => {
  console.log('Service Worker: Push received', event);
});
