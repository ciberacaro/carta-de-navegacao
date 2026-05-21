const CACHE = 'cartanav-v2';

const PRECACHE = [
	'/',
	'/competencias',
	'/recursos',
	'/ferramentas',
	'/glossario',
	'/sobre',
	'/emergencia',
	'/pre-escolar',
	'/primeiro-ciclo',
	'/segundo-ciclo',
	'/terceiro-ciclo',
	'/secundario',
	'/adultos',
	'/seniores',
	'/manifest.json',
];

self.addEventListener('install', e =>
	e.waitUntil(caches.open(CACHE).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting()))
);

self.addEventListener('activate', e =>
	e.waitUntil(caches.keys().then(keys =>
		Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
	).then(() => self.clients.claim()))
);

self.addEventListener('fetch', e => {
	if (e.request.method !== 'GET' || !e.request.url.startsWith(self.location.origin)) return;
	e.respondWith(
		caches.open(CACHE).then(async cache => {
			const cached = await cache.match(e.request);
			const networkPromise = fetch(e.request).then(res => {
				if (res.ok) cache.put(e.request, res.clone());
				return res;
			}).catch(() => null);
			return cached ?? await networkPromise;
		})
	);
});
