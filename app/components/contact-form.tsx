"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "../actions";

const initialContactState: ContactState = { status: "idle", message: "" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialContactState);

  if (state.status === "success") {
    return (
      <div className="form-success" role="status">
        <span aria-hidden="true">✓</span>
        <p className="eyebrow">Solicitud recibida</p>
        <h3>Ya tenemos el primer punto de contexto.</h3>
        <p>{state.message}</p>
      </div>
    );
  }

  return (
    <form className="contact-form" action={formAction}>
      <div className="form-heading"><span>Diagnóstico inicial</span><span>15–20 min</span></div>
      <div className="field-row">
        <label>
          <span>Nombre *</span>
          <input name="name" type="text" autoComplete="name" minLength={2} maxLength={80} required aria-invalid={Boolean(state.errors?.name)} />
          {state.errors?.name && <small>{state.errors.name}</small>}
        </label>
        <label>
          <span>Correo de trabajo *</span>
          <input name="email" type="email" autoComplete="email" maxLength={160} required aria-invalid={Boolean(state.errors?.email)} />
          {state.errors?.email && <small>{state.errors.email}</small>}
        </label>
      </div>
      <label>
        <span>Organización</span>
        <input name="company" type="text" autoComplete="organization" maxLength={120} />
        {state.errors?.company && <small>{state.errors.company}</small>}
      </label>
      <label>
        <span>¿Qué proceso necesitas mejorar? *</span>
        <textarea name="challenge" rows={4} minLength={20} maxLength={1200} placeholder="Describe brevemente el reto, los datos disponibles o el resultado que buscas." required aria-invalid={Boolean(state.errors?.challenge)} />
        {state.errors?.challenge && <small>{state.errors.challenge}</small>}
      </label>
      <label className="honeypot" aria-hidden="true">
        Sitio web<input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>
      <label className="consent-row">
        <input name="consent" type="checkbox" required />
        <span>Acepto que Musivo use estos datos para responder mi solicitud de acuerdo con el <a href="/privacidad">aviso de privacidad</a>.</span>
      </label>
      {state.errors?.consent && <small className="field-error">{state.errors.consent}</small>}
      <div className="form-submit-row">
        <button className="button button-primary" type="submit" disabled={pending}>
          {pending ? "Enviando…" : "Solicitar diagnóstico"} {!pending && <span aria-hidden="true">↗</span>}
        </button>
        <span>Sin compromiso · Respuesta personal</span>
      </div>
      <p className={`form-message ${state.status}`} aria-live="polite">{state.message}</p>
    </form>
  );
}