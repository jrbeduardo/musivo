"use client";

import { useState } from "react";
import { MosaicPattern } from "./mosaic-pattern";

const transformations = [
  ["translate", "Trasladar", "La forma cambia de posición sin alterar sus relaciones."],
  ["rotate", "Rotar", "La orientación cambia; la estructura y las distancias permanecen."],
  ["reflect", "Reflejar", "El sistema adopta otra dirección sin perder su lógica interna."],
];

export function MosaicExplorer() {
  const [mode, setMode] = useState(transformations[0][0]);
  const active = transformations.find(([id]) => id === mode) ?? transformations[0];

  return (
    <div className={`isometry-stage mosaic-mode-${mode}`}>
      <MosaicPattern id="story-mosaic" className="story-mosaic" />
      <div className="iso-controls" role="group" aria-label="Transformar el mosaico">
        {transformations.map(([id, label]) => (
          <button key={id} type="button" aria-pressed={mode === id} onClick={() => setMode(id)}>{label}</button>
        ))}
      </div>
      <div className="mosaic-legend" aria-live="polite">
        <span>{active[1]}</span>
        <strong>Una forma.<br />Múltiples movimientos.</strong>
        <small>{active[2]}</small>
      </div>
    </div>
  );
}