---
name: ui-polish-review
description: 'Auditoría y pulido visual del sitio Tropema (Next.js). Workflow paso a paso para revisar jerarquía, tipografía, espaciado, contraste, estados interactivos, responsive y movimiento, y aplicar correcciones. Úsalo cuando el usuario pida que el sitio "se vea más profesional", "pulir la UI", "revisar el diseño", "mejorar la primera impresión", "consistencia de componentes" o "revisión de accesibilidad visual".'
argument-hint: 'Sección o alcance a revisar, p. ej. "hero", "cards de soluciones", "todo el sitio"'
---

# UI Polish Review

Workflow para elevar la calidad percibida del sitio sin romper su identidad. Aplica siempre las reglas de [tropema-design-system](../tropema-design-system/SKILL.md). Checklist detallada en [references/checklist.md](./references/checklist.md).

## Cuándo usarlo

- "Que se vea más profesional / pulido / premium"
- Revisar una sección nueva antes de darla por terminada
- Inconsistencias entre componentes (tamaños, pesos, bordes)
- Problemas de legibilidad o contraste

## Procedimiento

### 1. Capturar el estado actual
1. Arranca el servidor desde `app/` con `pnpm dev` (URL: `http://localhost:3000/tropema/`).
2. Con las herramientas de navegador, abre la página a **1440×900** y a **390×844**.
3. Toma capturas de cada sección del alcance (`#inicio`, `#problema`, `#soluciones`, `#metodo`, `#nosotros`, `#caso`, `#confianza`, `#contacto`, `footer`).
4. Anota hallazgos en tres niveles: **crítico** (legibilidad, contraste, layout roto), **consistencia** (tokens, tamaños, estados), **refinamiento** (ritmo, micro-interacciones).

### 2. Diagnosticar con la checklist
Recorre [references/checklist.md](./references/checklist.md). Para cada ítem fallido, identifica el selector en `app/globals.css` o el componente en `app/components/`. Prioriza cambios que afectan a varios bloques (tokens, reglas base) sobre ajustes puntuales.

### 3. Aplicar correcciones
- Edita `globals.css` respetando los tokens. Si necesitas un valor nuevo repetido, créalo en `:root`.
- Cambios de marcado solo cuando el CSS no basta (p. ej. añadir un `aria-label` o envolver un grupo).
- No introduzcas librerías de UI ni frameworks de animación: el sitio es CSS puro + React.
- Agrupa las ediciones en un solo lote por archivo.

### 4. Verificar
1. Recarga en el navegador y vuelve a capturar las mismas secciones en ambos anchos.
2. Comprueba teclado: `Tab` por header → hero → formulario; el focus ring coral debe ser visible siempre.
3. Activa `prefers-reduced-motion` (emulación de Playwright) y confirma que no hay animaciones continuas.
4. Ejecuta `pnpm lint` y `pnpm build` desde `app/`.

### 5. Reportar
Lista breve: qué se cambió, por qué (regla del sistema o hallazgo), y qué queda pendiente que requiera decisión humana (p. ej. logotipo, imágenes reales).

## Señales de "profesional" en este sitio

- Jerarquía clara en el primer viewport: eyebrow → titular → lead → CTA primario + secundario. El fondo nunca compite con el titular.
- Pocas escalas tipográficas, bien espaciadas; ningún texto por debajo de 11px.
- Alineación consistente a la rejilla de 6vw; bordes de 1px continuos entre celdas.
- Estados hover/focus/active definidos y sutiles; sombras duras que responden al hover.
- Mosaicos como textura con máscara, no como bloque pegado al borde.
- Copy sin viudas en titulares (`text-wrap: balance`) y párrafos de 55-70 caracteres.
