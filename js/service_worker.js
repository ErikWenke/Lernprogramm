self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("quiz").then((cache) => {
      return cache.addAll(["/index.html", "/quiz.json"]);
    }),
  );
});
