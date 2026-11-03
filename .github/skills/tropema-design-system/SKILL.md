---
name: tropema-design-system
description: 'Sistema de diseño del sitio Tropema: tokens de color, escala tipográfica, espaciado, sombras duras, patrones de componentes (botones, cards, kickers, formularios, demos) y reglas de estilo editorial/geométrico. Úsalo al crear o modificar estilos en app/globals.css o componentes en app/components, al añadir secciones nuevas, o cuando el usuario pida que algo "se vea más profesional", "consistente", "alineado con la marca" o "más pulido".'
---

# Tropema Design System

Fuente de verdad: [app/globals.css](../../../app/globals.css). Este skill resume las reglas para que cualquier cambio visual respete la identidad. Detalle de tokens y componentes en [references/tokens.md](./references/tokens.md).

## Identidad en una línea

Editorial, geométrica y sobria. Bordes de 1px en tinta, sombras **duras** (offset sin blur), acentos ámbar/azul eléctrico/azul marino usados con moderación, mosaicos SVG como textura de fondo (nunca como protagonista). La marca viene de *tropos* + *teorema*: un giro que se demuestra. El logotipo es el cuadrado ∎ (QED) de un teorema, girado 22° dentro de su marco. El diseño debe sentirse preciso, no decorativo.

## Reglas no negociables

1. **Usa tokens, no valores sueltos.** Colores: `var(--ink|--paper|--white|--accent|--accent-soft|--signal|--deep|--line|--muted|--surface-alt)`; sobre fondos oscuros `--on-dark-*` y `--on-deep-*`. Tipografía: `var(--display)` para `h1-h3`, `.brand` y cifras destacadas; `var(--body)` para el resto. Sombras: `var(--offset-sm|--offset-md|--offset-lg)`.
2. **Tamaño mínimo de texto: 11px** en contenido real. Dentro de widgets ilustrativos (demo de producto, ventana de caso) el mínimo es **10px**. Nunca 8px ni 9px.
3. **Etiquetas en mayúsculas siempre llevan tracking.** `text-transform: uppercase` va acompañado de `letter-spacing: 0.12em` (o `0.14em` en kickers) y `font-weight: 800`.
4. **Titulares display:** `font-weight: 560-600`, `line-height: 0.96-1.08`, `letter-spacing: -0.02em`, `text-wrap: balance`. Cuerpo largo: `line-height: 1.65-1.8`, `text-wrap: pretty`, `max-width` de 55-70 caracteres.
5. **Sin border-radius** salvo pills circulares (`50%`) y el `2px` de `.button`. Nada de esquinas 8-16px: rompe el lenguaje geométrico.
6. **Sombras duras, nunca blur.** `box-shadow: var(--offset-md) var(--offset-md) 0 var(--ink)`. El color de la sombra es un acento de marca, no gris.
7. **Mosaicos como textura:** opacidad 0.08-0.14, `pointer-events: none`, rotados 6-12°, con máscara o degradado que los funda al fondo. Nunca compiten con texto o con el CTA.
8. **Movimiento con propósito:** 180-450ms, `ease` o `cubic-bezier(.2,.7,.2,1)`. Todo lo animado debe tener fallback en `@media (prefers-reduced-motion: reduce)`.
9. **Estados completos:** cada elemento interactivo define `:hover`, `:focus-visible` (hereda el outline coral global) y, en botones, `:active`.
10. **Un acento por bloque.** Ámbar (`--accent`) = acción primaria y énfasis; azul eléctrico (`--signal`) = detalle, flechas, focus; azul marino (`--deep`) = confianza/sistema. No mezcles los tres en el mismo componente pequeño.
11. **Logotipo:** usa siempre el componente `BrandMark` (`app/components/brand-mark.tsx`). Hereda `currentColor` para marco y pivote; el núcleo es `--accent`. Nunca lo redibujes con spans ni cambies su ángulo base (22°).

## Ritmo y layout

- Padding de sección: `clamp(80px, 10vw, 150px) 6vw`. Gutter horizontal: `6vw` desktop, `20px` móvil (≤820px).
- Encabezado de sección: `.section-kicker` (número en círculo + etiqueta) → `h2` display → párrafo `--muted` de 16-18px.
- Rejillas con líneas: usa `border-top` + `border-left` en el contenedor y `border-right` + `border-bottom` en cada celda (ver `.products-grid`, `.trust-flow`).
- Breakpoints: `1080px` (ajustes de columnas) y `820px` (colapso a una columna, nav móvil).

## Procedimiento al tocar estilos

1. Lee la regla existente en `globals.css` antes de añadir una nueva; probablemente ya existe el patrón.
2. Reutiliza clases (`.button`, `.section-kicker`, `.eyebrow`, `.illustrative-badge`) en vez de crear variantes.
3. Si introduces un valor repetido tres veces, conviértelo en token en `:root`.
4. Verifica contraste AA (≥4.5:1 texto normal). Combinaciones aprobadas en [references/tokens.md](./references/tokens.md).
5. Comprueba en 1440px y 390px de ancho. Ejecuta `pnpm lint` y `pnpm build` desde `app/`.

## Anti-patrones

- Gradientes de color saturado, glassmorphism pesado, sombras difusas, iconos de stock.
- Más de dos pesos tipográficos por bloque.
- Texto en mayúsculas sin tracking, o tracking negativo en mayúsculas.
- Animaciones de entrada en cada sección: solo el hero usa `.reveal`.
- Mostrar geometría/mosaicos como si fueran el servicio; son metáfora de método.
