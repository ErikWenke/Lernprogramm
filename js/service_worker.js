const cache = "lernprogramm";
const items = [
  "/",
  "/index.html",
  "/js/conQuest.js",
  "/js/getElementByIdPlus.js",
  "/js/main.js",
  "/js/model.js",
  "/js/presenter.js",
  "/js/service_worker.js",
  "/js/shuffle.js",
  "/data/quizes.js",
  "/css/default.css",
  "/data/manifest.json", // TODO: find out why
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(cache)
      .then((cache) => cache.addAll(items))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request)),
  );
});

self.addEventListener("activate", (event) => {
  const cacheWhitelist = [cache];
  event.waitUntil(
    caches
      .keys()
      .then((keyList) =>
        Promise.all(
          keyList.map((key) => {
            if (!cacheWhitelist.includes(key)) {
              return caches.delete(key);
            }
          }),
        ),
      )
      .then(() => self.clients.claim()),
  );
});
