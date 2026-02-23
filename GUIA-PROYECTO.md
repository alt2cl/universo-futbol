# Universo Fútbol — Guía del proyecto

Documento de lineamientos y estructura de la grilla para quien retome o mantenga este proyecto.

---

## 1. Lineamientos generales

### Stack
- **HTML5**, **CSS3** (vanilla) y **JavaScript** cuando haga falta.
- Sin preprocesadores ni compiladores.
- Framework CSS: **Bootstrap 5** (vía CDN). Se usa para utilidades y componentes; la grilla de página es custom.

### Layout vs contenido interno
- **Layout de página:** grilla propia con CSS Grid y Flexbox (contenedores `wrapper-*`, `block1-*`, `block2-*`). No se usan `.row` / `.col-*` de Bootstrap a nivel de secciones.
- **Contenido dentro de cada card:** sí se usan **convenciones de Bootstrap**: `.row`, `.col-*`, `.d-flex`, `.gap-*`, `.btn`, `.badge`, tipografía, etc., para todo lo que va *dentro* de cada módulo/card.

### Fuentes
- **Oswald** (Google Fonts): titulares y números.
- **Roboto** (Google Fonts): texto de lectura.

### Assets
- Imágenes en `assets/img/` con rutas relativas (placeholders o definitivas).

### Efectos e iconos
- **AOS** (Animate On Scroll) para animaciones al scroll.
- **Bootstrap Icons** para iconos.
- Estilos inline en `index.html` para que funcione al abrir por `file://`; en servidor puede usarse `styles.css` externo.

---

## 2. Estructura de la grilla

### Wrapper principal
- **`.app-wrapper`**: envuelve toda la página. `max-width: 1440px`, centrado. Define el ancho máximo en desktop.

### Bloque 1 (`wrapper-top`)
- **Desktop:** dos columnas: contenido principal (`block1-main`) + sidebar (`block1-row3`). Proporción `1fr 0.6fr`.
- **Dentro de `block1-main`:**
  - **`block1-row1`:** módulos 03, 04, 05. Grid 2 columnas: 03 y 04 arriba (`1.2fr 0.8fr`), 05 abajo a ancho completo.
  - **`block1-row2`:** módulos 06, 07, 08. Grid 3 columnas iguales.
- **`block1-row3` (sidebar):** módulos 09, 10, 11 en una sola columna, cada uno al 100% del ancho de la sidebar.
- **Mobile:** todo en una columna; orden visual 03 → 11.

### Bloque 2 (`wrapper-middle`)
- **Desktop:** grid de 3 columnas con proporción **1.2fr 0.8fr 1.2fr** (columnas "wide" y "narrow").
  - **Columna 1 (`block2-col1`):** 12 (ocupa 2 filas, misma altura que 14+15) y 13. Usa subgrid.
  - **Columna 2 (`block2-col2`):** 14, 15, 16 apilados.
  - **Columna 3 (`block2-col3`):** 17 y 18 repartiendo el alto al 50% (grid 2 filas `1fr 1fr`).
- **Mobile:** las tres columnas se apilan; orden 12 → 18.

### Bloque 3 (`wrapper-bottom`)
- **Desktop:** grid 3 columnas iguales para 19, 20, 21.
- **Mobile:** una columna; orden 19 → 21.

### Proporción de anchos (responsive)
- Módulos **3, 9, 10, 11, 12, 13, 17, 18** comparten proporción "ancha" (1.2fr o equivalente).
- Módulos **4, 14, 15, 16** comparten proporción "estrecha" (0.8fr). Se controla con `1.2fr` / `0.8fr` en los grids.

---

## 3. Grilla vertical (altura de cajas)

- Variable en **`:root`**: `--box-height-unit: 8rem`. Una sola variable para todo el sistema.
- Clases de utilidad: **`box-height-1`** … **`box-height-10`** y **`box-height-1.5`**, **`box-height-2.5`**, … **`box-height-9.5`**.
- Cada clase aplica `min-height: calc(N * var(--box-height-unit))`.
- Las cards tienen asignada una clase `box-height-*` según necesidad; en desktop, las que participan en subgrid (p. ej. 12, 14, 15, 17, 18) usan `min-height: 0` en el media query para que el grid controle la altura.

---

## 4. Orden de módulos (01–21) y responsividad

- El **DOM** sigue siempre el orden 01, 02, 03, … 21.
- En **mobile** los bloques pasan a una sola columna, por lo que el orden visual es exactamente 01 → 21 sin tocar el HTML.
- **Header:** 01 (logo pequeño), 02 (logo principal), widget en vivo (ocultable con clase `.is-hidden` en el contenedor).

---

## 5. Archivos principales

| Archivo      | Rol |
|-------------|-----|
| `index.html` | Estructura, comentarios por bloque, CSS crítico inline (por `file://`). |
| `styles.css` | Variables, grilla, cards, grilla vertical, media queries. |
| `assets/img/` | Imágenes del proyecto. |

Para **PHP**: cada bloque (header, wrapper-top, wrapper-middle, wrapper-bottom) puede convertirse en `include` (p. ej. `include 'bloque1.php'`) manteniendo las mismas clases y estructura.
