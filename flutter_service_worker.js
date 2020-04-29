'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e02541a7edd57552e1c727d55d6fa262",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/lib/themes/def/assets/netflix.png": "8f1c7fff5a3697916a80133cffa101b9",
"assets/lib/themes/def/assets/splitter.png": "bd6cdb841041548bd2903e5d5f94a698",
"assets/lib/themes/def/assets/splitterTurned.png": "d231c2d2f60ceff06302b954af6c2e6c",
"assets/LICENSE": "e6145f60d8cb28e5c6a85a24fa87247a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "1db374b377a7aa36cecdbdafa14372ce",
"/": "1db374b377a7aa36cecdbdafa14372ce",
"main.dart.js": "64a071bc34f28970d2404cd1d0b3a420",
"manifest.json": "554dea90180322e8c3b95389b07bd12a"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
