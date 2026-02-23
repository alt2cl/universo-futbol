/**
 * Lista de rutas de imágenes en assets/img (referencia para el proyecto).
 * Las imágenes se usan en index.html con rutas relativas: ./assets/img/<archivo>
 *
 * Para que la página funcione al abrir con file:// sin errores de acceso,
 * sirve la carpeta con un servidor local, por ejemplo: npx serve .
 */

const path = require('path');

const dir = __dirname;
const assetsImg = path.join(dir, 'assets', 'img');

const imageRoutes = [
  './assets/img/2023_Facebook_icon.svg.png',
  './assets/img/Instagram_logo_2022.svg.png',
  './assets/img/Tiktok-logo-on-transparent-PNG.png',
  './assets/img/bnr-footer.png',
  './assets/img/bnr1.png',
  './assets/img/bnr2.png',
  './assets/img/chat-preview.png',
  './assets/img/country-flags.jpg',
  './assets/img/croacia-icon.png',
  './assets/img/england-icon.png',
  './assets/img/fifa-icon.jpg',
  './assets/img/imagen-carrusel.png',
  './assets/img/img-min-min.png',
  './assets/img/img1.png',
  './assets/img/img2.png',
  './assets/img/instagram-icon-logo-free-png.webp',
  './assets/img/live-stream.png',
  './assets/img/logo-emisoras-unidas.png',
  './assets/img/logo-universo-futbol-footer.png',
  './assets/img/logo-universo-futbol.png',
  './assets/img/paraguay-icon.png',
  './assets/img/podcast-preview.png',
  './assets/img/scotland-icon.png',
  './assets/img/screen-facebook.png',
  './assets/img/screen-instagram.png',
  './assets/img/screen-podcast.png',
  './assets/img/screen-tik-tok.png',
  './assets/img/screen-youtube.png',
  './assets/img/szech-republic-icon.png',
  './assets/img/trama.png',
  './assets/img/usa-icon.png',
  './assets/img/youtube-preview.png',
];

module.exports = { imageRoutes, assetsImg };
