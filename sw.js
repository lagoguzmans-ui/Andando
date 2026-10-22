const CACHE='andando-v9';
const SHELL=['./','./index.html','./Andando%20App.dc.html','./firebase-config.js','./support.js','./manifest.webmanifest','./icon-192.png','./icon-512.png','./Travel%20Map%20Options.html'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).catch(()=>{}));self.skipWaiting();});
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;const u=e.request.url;if(u.includes('cdn.jsdelivr.net')){e.respondWith(caches.match(e.request).then(h=>h||fetch(e.request).then(r=>{const cp=r.clone();caches.open(CACHE).then(c=>c.put(e.request,cp));return r;})));return;}if(u.includes('googleapis.com')||u.includes('firestore')||u.includes('identitytoolkit')||u.includes('securetoken'))return;
  e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(CACHE).then(c=>c.put(e.request,cp)).catch(()=>{});return r;}).catch(()=>caches.match(e.request)));});
