"use client";

import { useRef } from "react";

const links = [
  ["#soluciones", "Soluciones"],
  ["#metodo", "Método"],
  ["#caso", "Caso de uso"],
  ["#nosotros", "Nosotros"],
  ["#contacto", "Agendar diagnóstico"],
];

export function MobileNavigation() {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  return (
    <details className="mobile-nav" ref={detailsRef}>
      <summary aria-label="Abrir navegación"><span /><span /><span /></summary>
      <nav aria-label="Navegación móvil">
        {links.map(([href, label]) => (
          <a key={href} href={href} onClick={() => detailsRef.current?.removeAttribute("open")}>
            {label}
          </a>
        ))}
      </nav>
    </details>
  );
}