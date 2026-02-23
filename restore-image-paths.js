/**
 * Una sola ejecución: reemplaza data URIs (base64) en index.html por rutas ./assets/img/...
 * Uso: node restore-image-paths.js
 */

const fs = require('fs');
const path = require('path');

const dir = __dirname;
const assets = path.join(dir, 'assets', 'img');
const htmlPath = path.join(dir, 'index.html');

const mimeByExt = {
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.webp': 'image/webp', '.gif': 'image/gif', '.svg': 'image/svg+xml',
};

const images = [
  '2023_Facebook_icon.svg.png', 'Instagram_logo_2022.svg.png', 'Tiktok-logo-on-transparent-PNG.png',
  'bnr-footer.png', 'bnr1.png', 'bnr2.png', 'chat-preview.png', 'country-flags.jpg',
  'croacia-icon.png', 'england-icon.png', 'fifa-icon.jpg', 'imagen-carrusel.png',
  'img-min-min.png', 'img1.png', 'img2.png', 'instagram-icon-logo-free-png.webp',
  'live-stream.png', 'logo-emisoras-unidas.png', 'logo-universo-futbol-footer.png', 'logo-universo-futbol.png',
  'paraguay-icon.png', 'podcast-preview.png', 'scotland-icon.png',
  'screen-facebook.png', 'screen-instagram.png', 'screen-podcast.png', 'screen-tik-tok.png', 'screen-youtube.png',
  'szech-republic-icon.png', 'trama.png', 'usa-icon.png', 'youtube-preview.png',
];

let html = fs.readFileSync(htmlPath, 'utf8');

images.forEach((file) => {
  const filePath = path.join(assets, file);
  if (!fs.existsSync(filePath)) return;
  const ext = path.extname(file).toLowerCase();
  const mime = mimeByExt[ext] || 'image/png';
  const buf = fs.readFileSync(filePath);
  const dataUri = `data:${mime};base64,${buf.toString('base64')}`;
  const placeholder = `./assets/img/${file}`;
  if (html.includes(dataUri)) {
    html = html.split(dataUri).join(placeholder);
    console.log('Restaurada ruta:', placeholder);
  }
});

fs.writeFileSync(htmlPath, html);
console.log('Listo. index.html usa rutas a archivos.');
