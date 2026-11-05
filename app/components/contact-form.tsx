import { contactEmail } from "../site";
import { BrandMark, TileGlyph } from "./brand-mark";

const contacts = [
  {
    number: "01",
    name: "Francisco Pérez Carbajal",
    role: "Matemático (UNAM) · IA aplicada",
    tone: "accent",
  },
  {
    number: "02",
    name: "José Eduardo Rodríguez Barrios",
    role: "Matemático (UNAM) · Ingeniería de datos y ML",
    tone: "signal",
  },
] as const;

const subject = encodeURIComponent("Diagnóstico inicial · Tropema");
const mailto = `mailto:${contactEmail}?subject=${subject}`;

export function ContactForm() {
  return (
    <div className="contact-form contact-panel" role="region" aria-label="Canales de contacto">
      <div className="form-heading"><span>Diagnóstico inicial</span><span>15–20 min</span></div>
      <p className="contact-panel-lead">Escríbenos a <a href={mailto}>{contactEmail}</a>. Una conversación corta basta para saber si podemos ayudarte.</p>
      <ul className="contact-people">
        {contacts.map(({ number, name, role, tone }) => (
          <li className={`contact-person tone-${tone}`} key={number}>
            <span className="contact-person-tile" aria-hidden="true"><BrandMark /></span>
            <div className="contact-person-body">
              <span className="contact-person-number">{number}</span>
              <strong>{name}</strong>
              <small>{role}</small>
            </div>
          </li>
        ))}
      </ul>
      <p className="contact-credentials">Ambos formados en Matemáticas en la UNAM, con experiencia previa liderando proyectos de datos e inteligencia artificial en empresas de gran escala en México.</p>
      <div className="form-submit-row">
        <a className="button button-primary" href={mailto}>
          <span className="button-label">Solicitar diagnóstico</span><span className="button-cap"><TileGlyph /></span>
        </a>
        <span>Sin compromiso · Respuesta personal</span>
      </div>
    </div>
  );
}