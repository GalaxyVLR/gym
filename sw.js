const CACHE = 'ironpulse-v5';
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

/* Rest-over alert. The page sends {type:'rest', at, title, body} when a rest timer starts.
   The worker waits until `at` and shows a notification unless the app is on screen (the page chimes itself then).
   Chrome keeps a worker alive for up to ~5 minutes while an event is pending, which covers normal rest times.
   A newer message (or 'rest-cancel') replaces the pending one. */
let restGen = 0;
self.addEventListener('message', e => {
  const m = e.data || {};
  if (m.type === 'rest-cancel') { restGen++; return; }
  if (m.type !== 'rest' || !(m.at > 0)) return;
  const gen = ++restGen, wait = Math.max(0, m.at - Date.now());
  e.waitUntil(new Promise(res => setTimeout(res, wait)).then(async () => {
    if (gen !== restGen) return;
    const wins = await self.clients.matchAll({type: 'window', includeUncontrolled: true});
    if (wins.some(w => w.visibilityState === 'visible' && w.focused)) return;
    await self.registration.showNotification(m.title || 'Rest over', {
      body: m.body || 'Next set', tag: 'rest', renotify: true, requireInteraction: false,
      vibrate: [300, 120, 300, 120, 300], icon: 'icon-192.png', badge: 'icon-192.png'
    });
  }));
});
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({type: 'window', includeUncontrolled: true}).then(ws => ws.length ? ws[0].focus() : self.clients.openWindow('./')));
});
