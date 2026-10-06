"use client";

export function ContactForm() {
  return (
    <div className="contact-form" role="region" aria-label="Canales de contacto">
      <div className="form-heading"><span>Diagnóstico inicial</span><span>15–20 min</span></div>
      <p>
        Escríbenos directamente para agendar una conversación inicial.
      </p>
      <div className="contact-facts" style={{ marginTop: "1rem" }}>
        <span>
          <strong>Francisco Perez Carbajal</strong>
          <a href="mailto:frankmathtohuman@gmail.com">frankmathtohuman@gmail.com</a>
        </span>
        <span>
          <strong>Jose Eduardo Rodriguez Barrios</strong>
          <a href="mailto:jrbeduardo@gmail.com">jrbeduardo@gmail.com</a>
        </span>
      </div>
      <div className="form-submit-row">
        <a className="button button-primary" href="mailto:frankmathtohuman@gmail.com?subject=Diagnostico%20inicial%20Musivo">
          Solicitar diagnostico <span aria-hidden="true">↗</span>
        </a>
        <span>Sin compromiso · Respuesta personal</span>
      </div>
      <p className="form-message idle" aria-live="polite">Tambien puedes escribir a jrbeduardo@gmail.com para coordinar.</p>
    </div>
  );
}