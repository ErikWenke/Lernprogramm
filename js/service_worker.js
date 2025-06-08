self.addEventListener("install", (event) => {
  self.skipWaiting();
});

// Activate and clean up old caches
self.addEventListener("activate", (event) => {});
