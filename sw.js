const CACHE_NAME = 'football-hub-v1';
const assets = [
  './',
  './index.html',
  './manifest.json'
];

// সার্ভিস ওয়ার্কার ইনস্টল করা এবং ফাইল ক্যাশ করা
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// অফলাইনে বা ইন্টারনেট স্লো থাকলে ক্যাশ থেকে ফাইল দেখানো
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
