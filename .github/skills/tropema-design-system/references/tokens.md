# Tokens y componentes — Tropema

## Color

| Token | Valor | Uso |
|---|---|---|
| `--ink` | `#0f141c` | Texto, bordes, fondos oscuros (método, footer, card destacada) |
| `--paper` | `#f4f2ed` | Fondo base (piedra cálida) |
| `--white` | `#ffffff` | Superficies elevadas (demo, formulario) |
| `--accent` | `#ffb31a` | Ámbar: CTA primario, énfasis, beneficios de producto, núcleo del logo |
| `--accent-strong` | `#ffc247` | Hover del CTA |
| `--accent-soft` | `#fff1c9` | Hover suave, estados en proceso |
| `--signal` | `#2b59ff` | Azul eléctrico: detalles, flechas, bordes de nota, focus ring |
| `--deep` | `#14213d` | Azul marino: confianza, sistema, sección de arquitectura, sombra del demo |
| `--line` | `#d6d3cb` | Divisores finos sobre paper |
| `--muted` | `#5f6470` | Texto secundario sobre paper/white |
| `--surface-alt` | `#ebe9e2` | Fondo de sección alterna y paneles ilustrativos |
| `--surface-tint` | `#f3f5ff` | Fondo de respuesta del sistema |
| `--on-dark-text` / `--on-dark-muted` | `#c3c8d2` / `#8e95a3` | Texto sobre `--ink` |
| `--on-dark-line` / `--on-dark-active` | `#2c333e` / `#171d27` | Divisores y fila activa sobre `--ink` |
| `--on-deep-text` / `--on-deep-line` | `#c9d2e6` / `#3b4a6b` | Texto y divisores sobre `--deep` |
| `--mosaic-c` / `--mosaic-d` | `#a7b8e6` / `#e2c48f` | Colores terciarios de las teselas |

### Contraste aprobado (AA)

- `--ink` sobre `--paper`, `--white`, `--accent`, `--accent-soft`, `--surface-alt`: ✓
- `--muted` sobre `--paper` / `--white`: ✓ (≈5.6:1)
- `--deep` sobre `--paper` / `--white`: ✓
- `white` y `--on-dark-text` sobre `--ink`; `white` y `--on-deep-text` sobre `--deep`: ✓
- `--accent` sobre `--ink` / `--deep`: ✓ (solo texto ≥11px, 800)
- `--signal` sobre `--paper`: ✓ para texto ≥11px bold (≈5.2:1); evitar párrafos largos.

## Tipografía

Familias: `--display` = Space Grotesk; `--body` = Manrope.

| Token | Tamaño | Uso |
|---|---|---|
| `--text-label` | `11px` | Kickers, eyebrows, etiquetas uppercase, meta de cards, notas de footer |
| `--text-sm` | `13px` | Nav, botones, texto en cards, mensajes de demo |
| `--text-base` | `16px` | Párrafos de apoyo en encabezados de sección |
| `--text-lead` | `clamp(17px, 1.35vw, 21px)` | Lead del hero, párrafos de historia y contacto |
| `--text-h3` | `clamp(22px, 2vw, 27px)` | Títulos de card |
| `--text-h2` | `clamp(38px, 4.4vw, 64px)` | Títulos de sección |
| `--text-h1` | `clamp(48px, 5.8vw, 88px)` | Hero |

Reglas: display con `letter-spacing: -0.02em` y `text-wrap: balance`; cuerpo con `text-wrap: pretty`. Mínimo 11px en contenido; 10px solo en widgets ilustrativos.

## Espaciado y sombras

| Token | Valor |
|---|---|
| `--section-y` | `clamp(80px, 10vw, 150px)` |
| `--gutter` | `6vw` (móvil: `20px`) |
| `--offset-sm` | `5px` (botones) |
| `--offset-md` | `12px` (formulario, cards elevadas) |
| `--offset-lg` | `18px` (demo del hero) |

## Componentes

### Botón `.button`
- `min-height: 50px`, `padding: 12px 20px`, `border: 1px solid var(--ink)`, `border-radius: 2px`, `font-size: var(--text-sm)`, `font-weight: 800`.
- `.button-primary`: fondo `--accent`, sombra `var(--offset-sm) var(--offset-sm) 0 var(--ink)`. Hover: `--accent-strong`, sube 2px y la sombra crece 2px. Active: baja a 0 y sombra 2px.
- Acompañar con `.text-link` como acción secundaria (subrayado 1px, flecha `--signal`).

### Logotipo `BrandMark`
SVG 32×32: marco cuadrado (`stroke: currentColor`), núcleo 13×13 relleno `--accent` girado 22° y pivote central. Hover en `.brand` o `.contact-person` gira el núcleo a 67°. Tamaños: 28px (header/footer), 18px (demo), 32px (tiles de contacto). Favicon en `app/icon.svg`.

### Kicker `.section-kicker`
Número en círculo de 28px + etiqueta uppercase 11px/0.14em en `--muted`. Variante `.light` para fondos oscuros (etiqueta `--on-dark-muted`, número `--accent`).

### Card de producto `.product-card`
Celda de rejilla con líneas de 1px en tinta. Meta uppercase arriba, `h3` display abajo (`margin-top: auto`), párrafo `--muted`, `.product-benefit` en `--accent`. Hover: fondo tinta + texto blanco (o `--deep` si es destacada). Flecha `--signal` `.card-arrow` en la esquina.

### Badge ilustrativo `.illustrative-badge`
Borde discontinuo `--muted`, 10px uppercase. Obligatorio en cualquier interfaz simulada (demo, ventana de caso).

### Formulario `.contact-form`
Panel blanco con sombra dura tinta `--offset-md`. Labels uppercase 11px `--muted`; inputs solo con `border-bottom` 1px tinta; focus → `--deep` con sombra inferior 2px; error → `#9e2e20`.

### Divisor de sección con mosaico `.section-pattern`
Absoluto, `pointer-events: none`, opacidad 0.08-0.14, rotación 6-12°, `mask-image` o `::after` con degradado hacia el fondo para fundirlo.
