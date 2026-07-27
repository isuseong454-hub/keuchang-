// 크창 서비스워커 — «앱 설치»만 켜고 캐시는 안 함(항상 최신 보이게)
self.addEventListener('install', function (e) { self.skipWaiting(); });
self.addEventListener('activate', function (e) { self.clients.claim(); });
self.addEventListener('fetch', function (e) { /* 네트워크 그대로 통과 · 캐시 없음 */ });
