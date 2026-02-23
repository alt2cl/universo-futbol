# Universo Fútbol — Guía del proyecto

Documento de lineamientos y estructura para quien retome o mantenga este proyecto.

---

## 1. Lineamientos generales

### Stack
- **HTML5**, **CSS3** (vanilla) y **JavaScript** solo donde haga falta.
- Sin preprocesadores ni compiladores.
- **Bootstrap 5** (vía CDN) para utilidades y componentes; la grilla de página es custom (CSS Grid + Flexbox).

### Layout vs contenido interno
- **Layout de página:** grilla propia con contenedores `wrapper-*`, `block1-*`, `block2-*`. No se usan `.row` / `.col-*` de Bootstrap a nivel de secciones.
- **Dentro de cada card:** se usan clases de Bootstrap (`.d-flex`, `.gap-*`, `.position-absolute`, tipografía, etc.) para el contenido interno.

### Fuentes
- **Oswald** (Google Fonts): titulares y números.
- **Roboto** (Google Fonts): texto de lectura.

### Estilos
- **`styles.css`** contiene todo el CSS del proyecto (variables, grilla, cards, media queries).
- **`index.html`** enlaza la hoja con `<link rel="stylesheet" href="styles.css">`. Para que todo funcione bien (sobre todo las imágenes), conviene servir la carpeta con un servidor local (p. ej. `npx serve .`) en lugar de abrir el HTML por `file://`.

### Assets
- Imágenes en **`assets/img/`** con rutas relativas **`./assets/img/nombre.ext`**.
- No se usan imágenes incrustadas en base64. Si al abrir por `file://` alguna imagen falla (ERR_ACCESS_DENIED), es una restricción del navegador; usar un servidor local lo evita.

### Efectos e iconos
- **AOS** (Animate On Scroll) para animaciones al hacer scroll.
- **Bootstrap Icons** para iconos (si se usan en el HTML).

### Scripts al final del body
- **Bootstrap 5** (`bootstrap.bundle.min.js`): componentes como el carrusel.
- **AOS** (`aos.js`): inicialización con `AOS.init({ offset: 40, duration: 400, once: true })`.

---

## 2. Header

- **`.site-header`**: contiene `.header-inner` (flex, wrap, space-between).
- **`.header-logos`**: los dos logos (Emisoras Unidas + Universo Fútbol). En **mobile** (`max-width: 768px`) tiene `justify-content: space-between` para que queden a los extremos.
- **`.live-widget`**: bloque “EN VIVO” + marcador (equipos, banderas, resultado) + “90:00” + grupo (GRUPO A, banderas, POSICIONES). En **mobile**:
  - El widget pasa a columna; el pill “EN VIVO” va arriba y centrado, con estilo amarillo sólido (como “90:00”).
  - Marcador y grupo a ancho completo (`width: 100%`).
- Para ocultar el widget: añadir clase `.is-hidden` al contenedor `.live-widget`.

---

## 3. Carrusel (Cards 03 y 12)

- **Bootstrap 5 Carousel**; no hay JavaScript propio.
- **Card 03:** `id="card03Carousel"`. **Card 12:** `id="card12Carousel"`.
- Atributos clave: `data-bs-ride="carousel"`, `data-bs-interval="5000"`, `data-bs-target="#card03Carousel"` o `#card12Carousel`, `data-bs-slide-to="0"|"1"|"2"`, `data-bs-slide="prev"|"next"`.
- Para más slides: duplicar un `.carousel-item` y añadir un `<button>` en `.carousel-indicators` con `data-bs-slide-to="N"` y `aria-label="Slide N+1"`.

---

## 4. Estructura de la grilla

### Wrapper principal
- **`.app-wrapper`**: envuelve toda la página. `max-width: 1440px`, centrado.

### Bloque 1 (`wrapper-top`)
- **Desktop:** dos columnas: contenido principal (`block1-main`) + sidebar (`block1-row3`). Proporción `1fr 0.6fr`.
- **Dentro de `block1-main`:**
  - **`block1-row1`:** cards 03, 04, 05. Grid 2 columnas: 03 y 04 arriba (`1.2fr 0.8fr`), 05 abajo a ancho completo.
  - **`block1-row2`:** cards 06, 07, 08. Grid 3 columnas iguales.
- **`block1-row3` (sidebar):** cards 09, 10, 11 en una columna.
- **Mobile:** todo en una columna; orden visual 03 → 11.

### Bloque 2 (`wrapper-middle`)
- **Desktop:** grid 3 columnas (1.2fr 0.8fr 1.2fr).
  - **Columna 1 (`block2-col1`):** card 12 (carrusel, 2 filas) y card 13. Subgrid.
  - **Columna 2 (`block2-col2`):** cards 14, 15, 16.
  - **Columna 3 (`block2-col3`):** cards 17 y 18 (2 filas 1fr 1fr).
- **Mobile:** columnas apiladas; orden 12 → 18.

### Bloque 3 (`wrapper-bottom`)
- **Desktop:** grid 3 columnas; **card 19** ocupa ancho completo (`grid-column: 1 / -1`) con tres columnas internas (2 imágenes + 1 con fondo y botones “Ver todo” / “Enviar nota”).
- **Mobile:** una columna; card 19 con una sola columna interna.

### Grilla vertical (altura de cajas)
- Variable en **`:root`**: `--box-height-unit: 8rem`.
- Clases **`box-height-1`** … **`box-height-10`** y **`box-height-1.5`**, **`box-height-2.5`**, … **`box-height-9.5`**.
- Cada una aplica `min-height: calc(N * var(--box-height-unit))`.

---

## 5. Tipos de cards (resumen)

| Módulo | Clase / tipo | Descripción breve |
|--------|----------------|-------------------|
| 01–02 | Header | Logos Emisoras Unidas y Universo Fútbol |
| 03, 12 | `card-03--carousel` / `card-12--carousel` | Carrusel Bootstrap (slides con imagen + título + bajada) |
| 04 | `card-04--minuto` | Minuto a minuto: imagen de fondo + cabecera con botón Actualizar |
| 05 | `card-bnr` | Banner (imagen) |
| 06, 07, 08 | `card--social` | Red social: cabecera (logo red + separador + logo emisora) + screenshot |
| 09 | `card-09--banner` | Banner publicitario (enlace + imagen) |
| 10 | `card-10--resultados` | Resultados en tiempo real (lista de partidos con grupo, banderas, resultado) |
| 11 | `card-11--tabla` | Tabla de posiciones (pestaña GRUPO A + lista con bandera, equipo, puntos) |
| 13–18 | `card-14-15--hero` | Hero: imagen de fondo + titular amarillo sobre gradiente negro |
| 19 | `card-19--full` | Tres columnas: 2 imágenes + 1 con imagen de fondo y botones |

---

## 6. Archivos principales

| Archivo | Rol |
|---------|-----|
| `index.html` | Estructura, comentarios por bloque, enlace a `styles.css` y a scripts (Bootstrap, AOS). |
| `styles.css` | Variables, grilla, estilos de cards, header, live-widget, media queries (desktop 769px+, mobile 768px-). |
| `assets/img/` | Imágenes del proyecto (logos, banderas, screens, banners, etc.). |

### Archivos opcionales / obsoletos
- **`embed-images.js`**: solo lista rutas de imágenes; no modifica el HTML. Puede usarse como referencia o eliminarse.
- **`restore-image-paths.js`**: servía para reemplazar data URIs por rutas en el HTML. Con el proyecto usando solo rutas, no es necesario; puede eliminarse.

---

## 7. Cómo correr el proyecto

- **Con servidor (recomendado):** desde la raíz del proyecto, `npx serve .` (o cualquier servidor estático). Abrir la URL que indique (p. ej. `http://localhost:3000`).
- **Sin servidor:** abrir `index.html` con doble clic. Las imágenes y el CSS pueden fallar en algunos navegadores por restricciones de `file://`; en ese caso usar siempre un servidor local.

---

## 8. PHP (futuro)

Cada bloque (header, wrapper-top, wrapper-middle, wrapper-bottom) puede convertirse en `include` (p. ej. `include 'bloque1.php'`) manteniendo las mismas clases y estructura.
