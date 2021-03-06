declare var self: ServiceWorkerGlobalScope;
export {};

interface ManifestEntry {
  revision?: string;
  url: string;
}

declare global {
  interface ServiceWorkerGlobalScope {
    __WB_MANIFEST: ManifestEntry[];
    __WB_INJECT_MANIFEST: ManifestEntry[];
  }
}

import { precacheAndRoute } from "workbox-precaching/precacheAndRoute";

self.addEventListener("message", event => {
  if (!event.data || !event.data.type) return;
  const port = event.ports[0];
  switch (event.data.type) {
    case "SKIP_WAITING":
      self.skipWaiting();
      break;
    case "CLIENTS_COUNT":
      self.clients.matchAll().then(allClients => {
        port.postMessage(allClients.length);
      });
      break;
  }
});

precacheAndRoute(
  ([] as ManifestEntry[]).concat(
    self.__WB_MANIFEST || [],
    self.__WB_INJECT_MANIFEST || []
  )
);

// Make sure this is the last fetch event listener
self.addEventListener("fetch", event => {
  if (
    event.request.mode !== "navigate" ||
    event.request.method !== "GET" ||
    !self.registration.waiting
  ) {
    return;
  }

  event.respondWith(
    self.clients.matchAll().then(clients => {
      if (clients.length < 2 && self.registration.waiting) {
        self.registration.waiting.postMessage({ type: "SKIP_WAITING" });
        return new Response("", { headers: { Refresh: "0" } });
      }
      return fetch(event.request);
    })
  );
});
