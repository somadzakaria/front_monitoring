'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "b8a80820ce17afbcbe9c40334d06bb7f",
"index.html": "dbfaef044ee15ff1ab5957ae4e35cd45",
"/": "dbfaef044ee15ff1ab5957ae4e35cd45",
"main.dart.js": "cb88221f5f7b6fa0a9b885fd324cc96d",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d24724fb70d3e7acc85243071adff0aa",
".git/config": "d1b6f1f4ca3e0148655d1fcaf946d762",
".git/objects/61/7492ea083d6fb27e416f5399413e78ac0de028": "fcf71512e8557d58cf95aa7243d9ff24",
".git/objects/0c/4cb0b70bb883d22bc7006dec3b39eddf05aa66": "58d90c19c24af19e5c71bab81fc50ef5",
".git/objects/6f/e09cb4be2afe8aa6932028392332889eae7ca7": "ccc6cca78c348359b84d36ed70ee3d7f",
".git/objects/6f/eb6c08b45a1e22d467463614bd96cfe7988b5e": "94f246c33a0c12bab67a0652f3731ecf",
".git/objects/03/fc35dbd8271da7d69d4998773a8971d764add6": "47544f62f53cebc3c8c5f41cb22eb41f",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/9d/dc01dc6cafce52e6bd1757318de6d9f81c8cc2": "3e70bf598288ae5796fd27e6b03d2180",
".git/objects/9d/389596fc4cd4c5a7e37b0f4c18dbaae6f398c7": "58c70d62b4c3d07f4c4e240b5105bb3e",
".git/objects/a4/2ce31eaceb0655e1b5efc1e3d4d343fb788de9": "8451790c3179bbbb3df6a9821de3fecd",
".git/objects/d1/131e832f11b10c6509447587753fd203e06554": "1bb54d1d04b897be36e0cdd4ea0e60ab",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/0c4ba44277a7910b31e7a57be896bc9b0b683a": "c2bd3c1702b87bb7cab003d7b71eff40",
".git/objects/cf/ef4f95776e4ff19016190defceb23960d9ad7b": "9221bdb10a23ef76ff0420d2db915181",
".git/objects/ca/c4afe34aaf7ecdae4d33f71d1fd189ec2c52f6": "cf750439620dac7b321b2e3b1b32adc5",
".git/objects/ec/178d532e2b262778ffbb0806d41f12480237ed": "dc36942d94d5a3e436550246c84537d4",
".git/objects/27/73d54a06c52cba5cc96cc6f2977792fd39420d": "7653ad8eef1d318bedb663ec05ce2984",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/86/6282d9bb7b07f4db5d3e6383b5a5c2e2cf7696": "f47c4a6b6cb2f91183e73318485f9cfc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/65/8648a6a9ade7233105d80b37942d16d0173b99": "35b3d9463def8d689d82fcb763dd902a",
".git/objects/54/2565da671d05475850a9267755955e32510ce5": "7d32fe104f94ec453fec1bcd66e31a5e",
".git/objects/5b/a2b1239ee9499945180d600d9bc7b88c5967b8": "888d2f1feba5a6bfc88dde2491a609d9",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/99/f652f90fec9746c8d47d0fe02409a9fc557e04": "120cab5bd7037229e72d7bcbcbdc2174",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/aa/4a529b010cc784f8a7723f5fb2aa5fceff555f": "0e305f01c38af95dda0b51e97964c344",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/c7fb3565ab58fea9cfd1a811dba53190fad6a7": "88a096d31cb3312a6fb9d60ea24e6a6c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/3513ace6e3537da1c91785cb8350c3d057fcd6": "48fa70ca3f6a9047b2d4a86569bfa912",
".git/objects/77/2f69c725a84376297063c8a078a312e1cc52e6": "788d7eeacf503f3ee8297d09957474b6",
".git/objects/15/3423446fccdc13fbd101f9e70e35bf43ee4121": "e5792c3ab7c018e449ff8e30a3fd8733",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/85/91959aeb7d9701aedaca9c4563af05158696ef": "d0bb1deef7f2445bc0c0d73a421994fc",
".git/objects/7a/b6a78ce12a00c4b2a2919bd19430a163ce0289": "0e2edea5dbef108d588e6f2a18949c65",
".git/objects/8e/e9ff994a358d9a214e0a3a9b938fc3ee0b1365": "82e6a881113fe076414853fe3a5db704",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b8447adc4fb4fe886fe53ddfc3119c7d",
".git/logs/refs/heads/main": "b8447adc4fb4fe886fe53ddfc3119c7d",
".git/logs/refs/remotes/origin/main": "5f9a91da556103d2b21d0efeef772797",
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
".git/refs/heads/main": "d5ac4c3aea864688305e9dfc9a4bfbb5",
".git/refs/remotes/origin/main": "d5ac4c3aea864688305e9dfc9a4bfbb5",
".git/index": "e0c7aec880fd6e2708aae9ed323946c8",
".git/COMMIT_EDITMSG": "fb294d5e5d46694f74bd0fa498950830",
".git/FETCH_HEAD": "7a930b6d39adce277521118885ffadc3",
"assets/AssetManifest.json": "5b41c1a39e9e1571d261e3d089cee502",
"assets/NOTICES": "fbf03aa85c7036416479cfca893ac5d8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/audio/custom_sound.mp3": "c7555c7bcc050e7dce089cbb9257a568",
"assets/assets/audio/warning.mp3": "65a9ca0383f77420c33be7daddae5353",
"assets/assets/raw/sirine.json": "cae1d9b0658c511fa8dd24482cc58a91",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
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
