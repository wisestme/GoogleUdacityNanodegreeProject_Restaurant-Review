const cacheName = 'v1';

const cacheAssets = [
'/index.html',
'/restaurant.html',
'/css/styles.css',
'/css/responsive.css',
'/js/main.js',
'/js/restaurant_info.js',
'/js/dbhelper.js',
'/data/restaurants.json',
'/img/1.jpg',
'/img/2.jpg',
'/img/3.jpg',
'/img/4.jpg',
'/img/5.jpg',
'/img/6.jpg',
'/img/7.jpg',
'/img/8.jpg',
'/img/9.jpg',
'/img/10.jpg'
];
// call Install Event
self.addEventListener('install', (e) => {
	console.log('Service Worker: installed');
e.waitUntil(
	caches
	.open(cacheName)
	.then(cache => {
		console.log('Service Worker: Caching Files');
		cache.addAll(cacheAssets);
	})
	.then(() => self.skipWaiting())
	);
});

// Call Activate Event
self.addEventListener('activate', e => {
	console.log('Service Worker: Activated');
	// Remove unwanted caches
	e.waitUntil(
		caches.keys().then(cacheNames => {
			return Promise.all(
				cacheNames.map(cache => {
					if (cache !== cacheName) {
						console.log('Service Worker: Clearing old Cache');
						return caches.delete(cache);
					}
				}))
		}))
});

// Show cached files when offline
self.addEventListener('fetch', e => {
	console.log('Service Worker: Fetching');
	e.respondWith(
		fetch(e.request)
			.then(res => {
				//create response copy
				const responseCopy = response.copy();
				// open cache
				.open(cacheName)
				.then(cache => {
					// respond to cache
					cache.put(e.request, responseCopy);
				});
				return response;
			}).catch(err => caches.match(e.request).then(response => response))
		);
});
