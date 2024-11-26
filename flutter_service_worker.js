'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "b8a80820ce17afbcbe9c40334d06bb7f",
"index.html": "6cd4c549da084bed5cb4b5f1a6d848a0",
"/": "6cd4c549da084bed5cb4b5f1a6d848a0",
"main.dart.js": "0cf6b5d2fd1198164742f3039c57686d",
"flutter.js": "3c4c2ae0427ede41f4b84b8ed1ce3302",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d24724fb70d3e7acc85243071adff0aa",
".git/config": "d1b6f1f4ca3e0148655d1fcaf946d762",
".git/objects/95/f050c783f46caa0eda139173447126822e71cf": "fff012c588f5c716c1bc6f322eb4c091",
".git/objects/59/13f4427d9b638f4f244cd9e66e95e1a01b69c8": "74a2eb0a8b2873336183a4a0c08fc64c",
".git/objects/0c/4cb0b70bb883d22bc7006dec3b39eddf05aa66": "58d90c19c24af19e5c71bab81fc50ef5",
".git/objects/9b/a380c7bee64c5884fe4c8b2d00555ae580c6d3": "c33f022c26d6bf3884e75ffe9c536474",
".git/objects/6a/2f6c9cc4064ce9b93de428346d0fedc783b9c7": "26caeb76855457cbabd2a8e529168d21",
".git/objects/5a/622aa7d46e01508f2e6d4c8eb09a5c081fcf70": "7dcbbe9aa0b6ecec703afd1d12e2c827",
".git/objects/9d/dc01dc6cafce52e6bd1757318de6d9f81c8cc2": "3e70bf598288ae5796fd27e6b03d2180",
".git/objects/9d/389596fc4cd4c5a7e37b0f4c18dbaae6f398c7": "58c70d62b4c3d07f4c4e240b5105bb3e",
".git/objects/9c/eee27499c5c03ec4aaabde9d1ff9e45364b8e9": "ac90ffb9f699c9eb7c457bddfcf206b6",
".git/objects/a4/2ce31eaceb0655e1b5efc1e3d4d343fb788de9": "8451790c3179bbbb3df6a9821de3fecd",
".git/objects/b4/58faa51cfa1e5072d1e163f254f259bd0d3eb4": "37ccfcd0a542f5b7f7f91e4ee5c0ad13",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/1e9554276d43d00b6f54ac29f3169d3dea2847": "a37706a9c851fcfa1db78a36f48c76cb",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/e09feda1f3aa4169609d5a41bb4c2a06341254": "a04bda5261f64d6c29485224bad54920",
".git/objects/cf/ef4f95776e4ff19016190defceb23960d9ad7b": "9221bdb10a23ef76ff0420d2db915181",
".git/objects/ca/c4afe34aaf7ecdae4d33f71d1fd189ec2c52f6": "cf750439620dac7b321b2e3b1b32adc5",
".git/objects/ca/442f6c297e15cd7bca0f0835314933cae61ed9": "8d11b64c7260f4ce6ba9c39ccc3a950a",
".git/objects/ed/067034bf44e74f02e605f84f5a12a28f736af3": "5119761702ca054700b08e2e86a199a6",
".git/objects/ec/178d532e2b262778ffbb0806d41f12480237ed": "dc36942d94d5a3e436550246c84537d4",
".git/objects/27/6a79e3317ce645dedcdb2ba7ead8bca1a48351": "4afa4d2befc24d78e4deca273ff55bc7",
".git/objects/42/19b82a722de34f5e3620a3f9cb70b395ce7f92": "8fc2d2febdf4f922f8ea8582b2c00c75",
".git/objects/87/40982f6b5b49e89033224744f998f1f472ff90": "61b6aebb10c55fae3ed92cc85bad9129",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/e4ac143c21e2d3a24faaf2e70b181ebdae242a": "a672ff03dfa82ae29a105ae5a62eefe2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/be67b7a2ddd83948c4a1d7409cc02f4622dc89": "d01d83e9d4042a2cee58bdb1a4cb198f",
".git/objects/65/8648a6a9ade7233105d80b37942d16d0173b99": "35b3d9463def8d689d82fcb763dd902a",
".git/objects/6c/827cf739c8e3e27f8953c6a2cc543d2b7836e8": "9056fb7c8a23d73ae0b8dd8f7482e7e5",
".git/objects/90/d7e3866f83b34559a63b15f9aab6a66dbcb75b": "1e8f35f4e6f2036c4ddd1023781ba01f",
".git/objects/d3/df18d62a188769c1df9b139b8535232ba07574": "33b019919c957bf4a2cbd1993b164585",
".git/objects/dc/1a73098ddcef870d37bbcc1e8b2b86456d8436": "7646aabffa9b4cb13d29e1a27481e622",
".git/objects/aa/4a529b010cc784f8a7723f5fb2aa5fceff555f": "0e305f01c38af95dda0b51e97964c344",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/c7fb3565ab58fea9cfd1a811dba53190fad6a7": "88a096d31cb3312a6fb9d60ea24e6a6c",
".git/objects/e6/c0ec6b6be463a889ad7f56d5bc5dbddb4fdb85": "6b7c259bc9c182db924cb74d5b969d71",
".git/objects/cb/1b972d004ab2b9d9a3ed66e49bbdf66139aca5": "784b6ceb38df559fe81f019dfe6fb6a7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/1076b39a2fe5f66e6738c444f345777a105329": "c1cc6ee16ee3cb9275def970387e57dd",
".git/objects/8d/fd9d3aae34115f28552bdb34b9cb280993b543": "88b87bb7be4e4256e57f4853aebef3d9",
".git/objects/15/3423446fccdc13fbd101f9e70e35bf43ee4121": "e5792c3ab7c018e449ff8e30a3fd8733",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/85/91959aeb7d9701aedaca9c4563af05158696ef": "d0bb1deef7f2445bc0c0d73a421994fc",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "14d24adb760039d74c4a0abb1ffd350e",
".git/logs/refs/heads/main": "14d24adb760039d74c4a0abb1ffd350e",
".git/logs/refs/remotes/origin/main": "bad6eabce595e72d3994079367af87b9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "b0dcfa112a9bbb677aae1d8dc84a4646",
".git/refs/remotes/origin/main": "b0dcfa112a9bbb677aae1d8dc84a4646",
".git/index": "7b0f1cd375950e2d5e6e9c60827cb01d",
".git/COMMIT_EDITMSG": "4329305644a1642a381c67571a50aed9",
".git/FETCH_HEAD": "489da3a1a2297abeb9f8bee122da26fb",
"assets/AssetManifest.json": "5b41c1a39e9e1571d261e3d089cee502",
"assets/NOTICES": "6fda68e089f3057b9773d08a5f0822a5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/audio/custom_sound.mp3": "c7555c7bcc050e7dce089cbb9257a568",
"assets/assets/audio/warning.mp3": "65a9ca0383f77420c33be7daddae5353",
"assets/assets/raw/sirine.json": "cae1d9b0658c511fa8dd24482cc58a91"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
