"use client";

import { useState } from "react";

const steps = [
  ["Entender", "Problema, contexto y restricciones", "Un mapa compartido del reto y de aquello que no debe romperse."],
  ["Medir", "Datos disponibles y criterio de éxito", "Una línea base y métricas que permiten saber si la inversión funciona."],
  ["Diseñar", "Enfoque técnico adecuado al caso", "Una arquitectura explicable, proporcional al riesgo y lista para integrarse."],
  ["Construir", "Modelo, producto e integraciones", "Un sistema utilizable dentro del flujo real, no una demostración aislada."],
  ["Validar", "Casos reales y métricas acordadas", "Evidencia de calidad, límites conocidos y decisiones de salida claras."],
  ["Evolucionar", "Seguimiento y mejora controlada", "Observabilidad y un ciclo de cambios con trazabilidad."],
];

export function MethodExplorer() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="method-explorer">
      <ol className="method-list" aria-label="Etapas del método Musivo">
        {steps.map(([title, description], index) => (
          <li key={title} className={activeStep === index ? "active" : ""}>
            <button type="button" onClick={() => setActiveStep(index)} aria-pressed={activeStep === index}>
              <span className="method-number">0{index + 1}</span>
              <span><strong>{title}</strong><small>{description}</small></span>
              <i aria-hidden="true">↗</i>
            </button>
          </li>
        ))}
      </ol>
      <div className="method-output" aria-live="polite">
        <span>Resultado de la etapa 0{activeStep + 1}</span>
        <p>{steps[activeStep][2]}</p>
        <div className="method-progress"><i style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }} /></div>
      </div>
    </div>
  );
}