"use client";

import { useState, useTransition } from "react";

const scenarios = [
  {
    id: "legal",
    label: "Legal",
    query: "¿Qué obligaciones aplican al conservar expedientes digitales?",
    response: "El plazo depende del tipo de expediente y la regulación aplicable. Encontramos tres disposiciones relevantes para revisar antes de definir la política.",
    confidence: "92%",
    sources: 3,
  },
  {
    id: "operations",
    label: "Operaciones",
    query: "¿Qué casos necesitan revisión humana antes de continuar?",
    response: "Detectamos 14 casos fuera de política. Nueve pueden resolverse con reglas existentes y cinco requieren validación de un responsable.",
    confidence: "89%",
    sources: 4,
  },
  {
    id: "forecast",
    label: "Predicción",
    query: "¿Dónde aumentará la demanda durante las próximas semanas?",
    response: "La región centro concentra el mayor incremento esperado. El modelo recomienda ajustar capacidad antes del siguiente ciclo operativo.",
    confidence: "87%",
    sources: 5,
  },
];

function MiniMark() {
  return <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>;
}

export function KnowledgeDemo() {
  const [activeId, setActiveId] = useState(scenarios[0].id);
  const [isPending, startTransition] = useTransition();
  const scenario = scenarios.find(({ id }) => id === activeId) ?? scenarios[0];

  return (
    <div className="hero-demo reveal delay-1" aria-label="Demostración interactiva de un sistema de conocimiento">
      <div className="demo-topbar">
        <div className="demo-title"><MiniMark /><span>Motor de conocimiento</span></div>
        <span className="status-pill"><i /> En línea</span>
      </div>
      <div className="demo-scenarios" role="group" aria-label="Seleccionar escenario">
        {scenarios.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            aria-pressed={activeId === id}
            onClick={() => startTransition(() => setActiveId(id))}
          >
            {label}
          </button>
        ))}
      </div>
      <div
        className={`demo-body ${isPending ? "is-pending" : ""}`}
        key={scenario.id}
        aria-live="polite"
      >
        <div className="demo-query"><span className="demo-label">Consulta</span><p>{scenario.query}</p></div>
        <div className="demo-processing" aria-hidden="true"><span>Clasificando</span><span>Buscando fuentes</span><span>Validando</span></div>
        <div className="demo-response">
          <div className="response-head"><span className="demo-label">Respuesta fundamentada</span><strong>{scenario.confidence} confianza</strong></div>
          <p>{scenario.response}</p>
          <div className="source-row">
            {Array.from({ length: scenario.sources }, (_, index) => <span key={index}>Fuente 0{index + 1}</span>)}
          </div>
        </div>
      </div>
      <div className="demo-footer"><span>Consulta registrada</span><span>Escenario: {scenario.label}</span></div>
    </div>
  );
}