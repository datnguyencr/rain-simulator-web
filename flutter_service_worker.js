'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "faa8e62116142126d14761ef97ccf8d2",
"assets/AssetManifest.bin.json": "06df09ccc8307a1006c35da0ac33ec70",
"assets/AssetManifest.json": "5e7b5cdfb55cc32d5649a62fe623cd51",
"assets/assets/audios/cricket_1.mp3": "ceeaa9d0abaaf19695b424d252cbd033",
"assets/assets/audios/cricket_2.mp3": "ee49134270a781eaf0c471d3d2003b19",
"assets/assets/audios/cricket_3.mp3": "bbc85f2d9ed805fc6b78424d5ccc28b4",
"assets/assets/audios/cricket_4.mp3": "cb652ab077de2c2b95bca310b134eafe",
"assets/assets/audios/cricket_5.mp3": "a1e6bbc26a074aa33a205b221e723db4",
"assets/assets/audios/cricket_6.mp3": "8cfe7c38e157f2ae9848c860ed8aee7b",
"assets/assets/audios/cricket_7.mp3": "b78540410e8a43076f88de95375028c6",
"assets/assets/audios/forest.mp3": "d28bc97d1ec530744649322e6bc7749e",
"assets/assets/audios/forest_2.mp3": "0bc11ecf44eb4a2e1d43f07c3858b00e",
"assets/assets/audios/frog.mp3": "40a3a0e271ad315e16a31518f6614511",
"assets/assets/audios/night.mp3": "2313efde23f7f427bee3e431dd0301de",
"assets/assets/audios/owl_1.mp3": "768069cfcc622b5f1593a0280b9e312b",
"assets/assets/audios/owl_2.mp3": "2fda0a09b3d2005046399149b7dc5355",
"assets/assets/audios/owl_3.mp3": "dad6c7a5a964ea776e410536e256655c",
"assets/assets/audios/rain_1.mp3": "61e29cc90c1f4dc7ca80274641f967c3",
"assets/assets/audios/rain_2.mp3": "d1f93c7c133f16348e8c2c453671a576",
"assets/assets/audios/rain_3.mp3": "40fe6a1e4ea770f855c45113a8104952",
"assets/assets/audios/rain_5.mp3": "c0bb82b0925fff71cbb6bad7c3287eb1",
"assets/assets/audios/rain_6.mp3": "492a1c52c5791ea91554a4cf641f81ce",
"assets/assets/audios/thunder_1.mp3": "c128eba0c120f4e8847a002dbbcff232",
"assets/assets/audios/thunder_2.mp3": "b63396699a2d7a2f90c0fdd015109566",
"assets/assets/audios/thunder_3.mp3": "f51a6749a172d773aba76f0c62d6cbd7",
"assets/assets/audios/toard_1.mp3": "9fae3e5d2fd52838ad815aa7b7b55471",
"assets/assets/fonts/digi.ttf": "63f874d192fb3892d88d5e26f942b5e2",
"assets/assets/fonts/oswald_light.ttf": "4be970a1b24aa834afff4b16842c8981",
"assets/assets/images/city.webp": "31c6c39e27acaa2b44198a241dd60810",
"assets/assets/images/city_2.webp": "5fe9e96f096989330ab139192f3bd587",
"assets/assets/images/city_3.webp": "f8ef42d903ddc379692ca50ddc7d4c28",
"assets/assets/images/city_4.webp": "000fa012a7f5360cd4c1d5d088623c3f",
"assets/assets/images/city_5.webp": "61c541c3d316f2198ae0fa7fbbac0fed",
"assets/assets/images/city_6.webp": "74e978ffe180a9243d4a4b63b293105d",
"assets/assets/images/country_side.webp": "7dbeea4959220baf6c57f4858ed7cae6",
"assets/assets/images/forest.webp": "b1d8a6d89bdd1dc4940284bdb7e297c2",
"assets/assets/images/forest_2.webp": "4882207487b260f1e5a852271cdcd1c0",
"assets/assets/images/forest_3.webp": "d8a64c8431d1ae2f5ee30d4c36739a35",
"assets/assets/images/forest_4.webp": "c6d40a2ec1c38c3d5717ce091881ade4",
"assets/assets/images/forest_5.webp": "1f90f5ee2ad5c663546c1a0d16739f4c",
"assets/assets/images/forest_6.webp": "185e5716ab43c45998f2ece1ba8b2cbe",
"assets/assets/images/forest_7.webp": "80191d7819cd92d25ca7208518aa5cae",
"assets/assets/images/forest_8.webp": "607f0a12f04e38701aa97d58de9e45f4",
"assets/assets/images/icons/ic_add.webp": "1c132fadd23c864b6c2aef30b23dac16",
"assets/assets/images/icons/ic_back.webp": "e93c672d15c15cd83f5dab867a1ad5ab",
"assets/assets/images/icons/ic_edit.webp": "0504f013c2e4b980bf32f3b39228658c",
"assets/assets/images/icons/ic_image.webp": "849f2cf008cde17f8287f0011a11c7bc",
"assets/assets/images/icons/ic_lock.webp": "a1ba031d34a7d7500f08f115abeab11d",
"assets/assets/images/icons/ic_more_apps.webp": "a60c8bc5f103de2305d6608095036362",
"assets/assets/images/icons/ic_sound.webp": "02fa1cf7e613cb72df0aa67a26fac177",
"assets/assets/images/ic_logo.webp": "b7f57770a81d5965b96568b1500d4204",
"assets/assets/images/mountain_1.webp": "04f46be15f42e302436ec31f97fbeb32",
"assets/assets/images/mountain_2.webp": "6f2189b5eb7209ba0e385e311c917e65",
"assets/assets/images/night.webp": "d88902f376ce3aebe53c3bc9672c6aff",
"assets/assets/images/night_2.webp": "6e2ba90c275bd24355bd9086ce114c9a",
"assets/assets/images/night_3.webp": "4565995927b6af17f907e50d19fe9694",
"assets/assets/images/night_4.webp": "62213646d86f409b41e121a954325ed7",
"assets/assets/images/night_5.webp": "017c2d3e00dfdccb113c8b0b13147d07",
"assets/assets/images/night_6.webp": "7a4c4545afb1aca85f310eab3c506e6c",
"assets/assets/images/radiant.webp": "68d5f9aa5463d7a1b9b95fcb2ae715a9",
"assets/assets/translations/de.json": "1be7877bad168d82d8a64133cc77ad02",
"assets/assets/translations/en.json": "bdeb48bff791e4263a75c6ece19f5ed9",
"assets/assets/translations/es.json": "472773002d10526ee06a0cc21f64e83c",
"assets/assets/translations/fr.json": "9a6521b478713309314e8ddc37b8a361",
"assets/assets/translations/ja.json": "a326e3efe323280bcd6c1399258c75b6",
"assets/assets/translations/ko.json": "91cacc200e6d805b89e86d7dbfd8475f",
"assets/assets/translations/pt.json": "706bddfdaa745055429511b63bec6ae0",
"assets/assets/translations/ru.json": "2ed0938d12a66d3784f1e7c1c60981e1",
"assets/assets/translations/vi.json": "1c40c795626f161be1155ac5c6aef8a0",
"assets/assets/translations/zh.json": "9646b8bb018040ae31173a7667d214b3",
"assets/FontManifest.json": "6b130b5c0cc6d708ec054324ad1cbb9d",
"assets/fonts/MaterialIcons-Regular.otf": "4dbac531e83d3fd143b924d45925b77d",
"assets/NOTICES": "462477740ba126a95af03e73a5679c73",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/sst_base/assets/fonts/NotoSans-Bold.ttf": "28c191ce33ca36e0f75106491846de68",
"assets/packages/sst_base/assets/fonts/NotoSans-Regular.ttf": "f46b08cc90d994b34b647ae24c46d504",
"assets/packages/sst_base/assets/images/achievement.webp": "179e1bc0c88d378ff4cb011d92be044b",
"assets/packages/sst_base/assets/translations/de.json": "6a131aa6505813fa9b3aaa51c83ae0c5",
"assets/packages/sst_base/assets/translations/en.json": "0f178be98183c23d7c655ece5dc6c8d9",
"assets/packages/sst_base/assets/translations/es.json": "03b9863885ed312128e4c4556a45a1dc",
"assets/packages/sst_base/assets/translations/fr.json": "f9c59ab9412b4d626dc6de3ebe8db00c",
"assets/packages/sst_base/assets/translations/ja.json": "71f3c4708d59f761f0cc60661d18be4a",
"assets/packages/sst_base/assets/translations/ko.json": "657b17a760d136f9384e922b155c311f",
"assets/packages/sst_base/assets/translations/pt.json": "cc7f26174da1332ca3c625184a5c25d0",
"assets/packages/sst_base/assets/translations/ru.json": "f8bac1550fc4c6fabd6f950eae5adf2f",
"assets/packages/sst_base/assets/translations/vi.json": "49a5e33822b876f46ae44927326be247",
"assets/packages/sst_base/assets/translations/zh.json": "972a3d708c456eda1e4a3308cd81e41e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "3014fbe53b15d5e6833581ae40a87eee",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "1d9f1f35edd65d79e3b654daba4320b8",
"icons/Icon-192.png": "f82d3468759e84ea8e0659c1ec0e05c4",
"icons/Icon-512.png": "7831697af182ca2282d3036f854e3111",
"icons/Icon-maskable-192.png": "f82d3468759e84ea8e0659c1ec0e05c4",
"icons/Icon-maskable-512.png": "7831697af182ca2282d3036f854e3111",
"index.html": "f32baa90c912d4e9a406507b8e2718c9",
"/": "f32baa90c912d4e9a406507b8e2718c9",
"main.dart.js": "a9d3b87e3e097870b471cbc01ff285e9",
"manifest.json": "d91ca7058bc494750a9f21154da0641c",
"version.json": "e107dd58e4c7654d94c06db075b9af9a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
