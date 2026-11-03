# Checklist de pulido visual

Marca cada ítem como ✓ / ✗ / n/a. Un ✗ en **Crítico** bloquea el cierre de la tarea.

## Crítico

- [ ] Contraste AA en todo texto (≥4.5:1; ≥3:1 para ≥18px o ≥14px bold).
- [ ] Ningún texto de contenido por debajo de 11px (10px solo en widgets ilustrativos).
- [ ] Sin desbordes horizontales a 390px ni a 1440px.
- [ ] CTA primario visible sin scroll en ambos anchos.
- [ ] Focus visible en todos los elementos interactivos (outline coral 3px).
- [ ] Formulario: labels asociados, errores con texto, `aria-invalid` en campos fallidos.

## Jerarquía y tipografía

- [ ] Una sola `h1`; `h2` por sección; `h3` en cards.
- [ ] Display con `letter-spacing: -0.02em` y `text-wrap: balance`.
- [ ] Párrafos con `text-wrap: pretty` y `max-width` ≤ 70ch.
- [ ] Máximo dos pesos por bloque (p. ej. 560 + 800).
- [ ] Uppercase siempre con tracking 0.12-0.14em.
- [ ] Tamaños provenientes de los tokens `--text-*`.

## Espaciado y rejilla

- [ ] Padding de sección = `var(--section-y) var(--gutter)`.
- [ ] Separación kicker → h2 → párrafo consistente entre secciones (≈45px / 25px).
- [ ] Rejillas con líneas 1px continuas (sin dobles bordes ni huecos).
- [ ] Alineación de columnas de texto con el gutter de 6vw.

## Componentes y estados

- [ ] Botones: hover (sube 2px, sombra crece), active (baja, sombra 2px), focus.
- [ ] Cards: hover con cambio de fondo y color de meta; flecha coral alineada.
- [ ] Nav: subrayado animado en hover; CTA del header invierte color.
- [ ] Inputs: focus teal, error rojo, placeholder no usado como label.
- [ ] Sombras duras con tokens `--offset-*` y color de marca.
- [ ] Sin `border-radius` ajeno al sistema.

## Fondos y texturas

- [ ] Mosaicos con opacidad 0.08-0.14 y `pointer-events: none`.
- [ ] Mosaicos fundidos con `mask-image` o degradado, nunca cortados en seco sobre el texto.
- [ ] El hero: la textura no pasa por detrás del titular ni del CTA.

## Movimiento

- [ ] Duraciones 180-450ms; una sola curva (`ease` o `cubic-bezier(.2,.7,.2,1)`).
- [ ] `@media (prefers-reduced-motion: reduce)` desactiva animaciones continuas y transforms.
- [ ] Solo el hero usa animación de entrada.

## Responsive

- [ ] 1080px: columnas reducidas sin solapes.
- [ ] 820px: una columna, nav móvil funcional, sticky desactivado.
- [ ] Demo del hero y ventana de caso legibles a 390px.
- [ ] Footer apilado con separación clara.

## Meta y detalles

- [ ] `title`, `description`, OG image coherentes con la marca Tropema.
- [ ] `lang="es"`, `scroll-padding-top` igual a la altura del header.
- [ ] Favicon y color de tema presentes.
