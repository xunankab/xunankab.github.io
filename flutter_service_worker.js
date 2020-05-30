'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/xunankab.jpg": "c55f606a0b24152ee778a4769726d65b",
"assets/assets/images/xunankab.png": "877a699a9a5db0d45a9bdde637a442d0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "8d0d74fa070d25f1d57e29df18800b8a",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/AssetManifest.json": "c5c727be5b5e30f6b1b3710c2274c8fe",
"assets/LICENSE": "d4efa58893e6b7e625e9f8997fc19c15",
"assets/FontManifest.json": "3b88ded64dd599a6fd51214483163f4b",
"main.dart.js": "650c1da9a6c24c9a9490c2baaf26176c",
"manifest.json": "bbf096d4b21132e3de3a45fec751771a",
"index.html": "581ff3868289c94a12b2d3de931cb27f",
"/": "581ff3868289c94a12b2d3de931cb27f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1"
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
