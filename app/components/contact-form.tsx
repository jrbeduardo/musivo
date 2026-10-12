const contacts = [
  {
    number: "01",
    name: "Francisco Pérez Carbajal",
    role: "Matemático (UNAM) · IA aplicada",
    email: "francisco@musivo.mx",
    tone: "lime",
  },
  {
    number: "02",
    name: "José Eduardo Rodríguez Barrios",
    role: "Matemático (UNAM) · Ingeniería de datos y ML",
    email: "eduardo@musivo.mx",
    tone: "coral",
  },
] as const;

const subject = encodeURIComponent("Diagnóstico inicial · Musivo");

export function ContactForm() {
  return (
    <div className="contact-form contact-panel" role="region" aria-label="Canales de contacto">
      <div className="form-heading"><span>Diagnóstico inicial</span><span>15–20 min</span></div>
      <p className="contact-panel-lead">Escríbenos directamente. Una conversación corta basta para saber si podemos ayudarte.</p>
      <ul className="contact-people">
        {contacts.map(({ number, name, role, email, tone }) => (
          <li className={`contact-person tone-${tone}`} key={email}>
            <span className="contact-person-tile" aria-hidden="true"><span /><span /><span /></span>
            <div className="contact-person-body">
              <span className="contact-person-number">{number}</span>
              <strong>{name}</strong>
              <small>{role}</small>
              <a href={`mailto:${email}?subject=${subject}`}>{email} <span aria-hidden="true">↗</span></a>
            </div>
          </li>
        ))}
      </ul>
      <p className="contact-credentials">Ambos formados en Matemáticas en la UNAM, con experiencia previa liderando proyectos de datos e inteligencia artificial en empresas de gran escala en México.</p>
      <div className="form-submit-row">
        <a className="button button-primary" href={`mailto:${contacts.map((c) => c.email).join(",")}?subject=${subject}`}>
          Solicitar diagnóstico <span aria-hidden="true">↗</span>
        </a>
        <span>Sin compromiso · Respuesta personal</span>
      </div>
    </div>
  );
}