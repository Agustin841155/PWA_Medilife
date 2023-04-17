
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/serviceWorker.js').then(function (registration) {
      console.log('ServiceWorker registrado con éxito: ', registration.scope);
    }, function (err) {
      console.log('Error en el registro de ServiceWorker: ', err);
    });
  });
}

// Instalar el Service Worker
self.addEventListener('install', function (event) {
  console.log('ServiceWorker instalado correctamente');
  event.waitUntil(
    caches.open('cache-v1').then(function (cache) {
      return cache.addAll([
        "/",
        "/index.html",
        "/css/estilos.css",
        "/css/estilo.css",
        "js/main.js",
        "js/swiper.min.js",
        "iconos/icon-72x72.png",
        "iconos/icon-128x128.png",
        "iconos/icon-256x256.png",
        "iconos/icon-512x512.png",
        "imagenes/logo.png",
        "imagenes/quees.jpg",
        "imagenes/areas-de-opotunidad.jpg",
      ]);
    })
  );
});

// Activar el Service Worker
self.addEventListener('activate', function (event) {
  console.log('ServiceWorker activado correctamente');
});

// Escuchar las solicitudes de recuperación
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

if (navigator.setAppBadge) {
  console.log("The App Badging API is supported!");
}

// To display an empty badge
navigator.setAppBadge();

// To display a number in the badge
navigator.setAppBadge(2);


function enviarNotificacion() {
  if (Notification.permission === "granted") {
    var notification = new Notification("Medicina nueva agregada", {
      body: "El producto que buscaste recientemente llego en la farmacia Guadalajara",
      icon: "imagenes/icono.png",
      onClick: function () {
        window.location="./html/Noticias.html";
        this.close();
     }
    })
  }
}
setInterval(enviarNotificacion, 80 * 1000);