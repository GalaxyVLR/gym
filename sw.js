const CACHE = 'ironpulse-v4';
const SHELL = ['./', './index.html', './diet-plan.js', './manifest.webmanifest', './icon-192.png', './icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });

// network first, cache fallback: used for the page and the diet plan so edits on GitHub arrive on next open
const networkFirst = (req, key) => fetch(req).then(r => { if (r.ok) { const c = r.clone(); caches.open(CACHE).then(x => x.put(key || req, c)); } return r; })
  .catch(() => caches.match(key || req, {ignoreSearch: true}));

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.hostname.includes('generativelanguage')) return;
  if (e.request.mode === 'navigate') { e.respondWith(networkFirst(e.request, './index.html')); return; }
  if (url.origin === location.origin && url.pathname.endsWith('/diet-plan.js')) { e.respondWith(networkFirst(e.request, './diet-plan.js')); return; }
  e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request).then(r => {
    if (r.ok || r.type === 'opaque') { const c = r.clone(); caches.open(CACHE).then(x => x.put(e.request, c)); }
    return r;
  })));
});
