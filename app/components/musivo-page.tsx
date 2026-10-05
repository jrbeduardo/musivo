import { ContactForm } from "./contact-form";
import { KnowledgeDemo } from "./knowledge-demo";
import { MethodExplorer } from "./method-explorer";
import { MobileNavigation } from "./mobile-navigation";
import { MosaicExplorer } from "./mosaic-explorer";
import { MosaicPattern } from "./mosaic-pattern";

const solutions = [
  ["01", "Inteligencia artificial aplicada", "Sistemas que comprenden, clasifican, generan y recomiendan desde el contexto real de tu operación.", "Comprender"],
  ["02", "Aprendizaje automático y predicción", "Modelos para anticipar demanda, detectar anomalías y convertir señales dispersas en mejores decisiones.", "Anticipar"],
  ["03", "Ingeniería y aprovechamiento de datos", "Datos integrados, estructurados y trazables que dejan de ser un archivo pendiente y se vuelven un activo.", "Conectar"],
  ["04", "Automatización inteligente", "Flujos que combinan modelos, reglas de negocio y tus sistemas existentes sin romper la operación.", "Acelerar"],
  ["05", "Asistentes y sistemas de conocimiento", "Experiencias conversacionales conectadas con fuentes verificables, controles y procesos reales.", "Responder"],
];

const trustSteps = [
  ["01", "Consulta", "Lenguaje natural"],
  ["02", "Clasificación", "Intención + reglas"],
  ["03", "Fuentes", "Recuperación curada"],
  ["04", "Generación", "Respuesta controlada"],
  ["05", "Validación", "Evidencia + confianza"],
];

function BrandMark() {
  return <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>;
}

export function MusivoPage() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Musivo, inicio"><BrandMark /><span>musivo</span></a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#soluciones">Soluciones</a><a href="#metodo">Método</a><a href="#caso">Caso de uso</a><a href="#nosotros">Nosotros</a>
        </nav>
        <a className="header-cta" href="#contacto">Agendar diagnóstico</a>
        <MobileNavigation />
      </header>

      <section className="hero" id="inicio">
        <div className="hero-pattern"><MosaicPattern id="hero-mosaic" density="large" /></div>
        <div className="hero-copy reveal">
          <p className="eyebrow">Consultoría de IA · ML · Datos</p>
          <h1>Transformamos problemas complejos en soluciones inteligentes.</h1>
          <p className="hero-lead">Diseñamos sistemas que mejoran decisiones, automatizan procesos y crean nuevas capacidades de negocio. La tecnología viene después de entender el problema.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contacto">Agendar diagnóstico <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#metodo">Conocer el método <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <KnowledgeDemo />
        <a className="hero-next" href="#problema" aria-label="Ir a la siguiente sección"><span>Empezamos por el problema</span><span aria-hidden="true">↓</span></a>
      </section>

      <section className="problem-section" id="problema">
        <div className="section-kicker"><span>01</span> El punto de partida</div>
        <div className="problem-grid">
          <h2>La IA no es el plan.<br />El resultado sí.</h2>
          <div className="problem-copy"><p>Una prueba técnica no crea valor por sí sola. El sistema tiene que entender tus reglas, conectarse con la operación y demostrar su impacto con evidencia.</p><div className="problem-list"><span>Datos fragmentados</span><span>Procesos manuales</span><span>Modelos sin contexto</span><span>Impacto sin medir</span></div></div>
        </div>
      </section>

      <section className="solutions-section" id="soluciones">
        <div className="section-pattern solutions-pattern"><MosaicPattern id="solutions-weave" variant="weave" density="large" /></div>
        <div className="section-heading"><div className="section-kicker"><span>02</span> Capacidades</div><h2>Una solución distinta para cada forma del problema.</h2><p>Combinamos disciplinas. No empujamos paquetes cerrados ni una herramienta única.</p></div>
        <div className="solutions-grid">
          {solutions.map(([number, title, description, tag]) => <article className="solution-card" key={number}><div className="solution-meta"><span>{number}</span><span>{tag}</span></div><h3>{title}</h3><p>{description}</p><span className="card-arrow" aria-hidden="true">↗</span></article>)}
        </div>
      </section>

      <section className="method-section" id="metodo">
        <div className="method-intro"><div className="section-kicker light"><span>03</span> Método Musivo</div><h2>Del reto operativo a un sistema que se puede comprobar.</h2><p>Cada etapa reduce incertidumbre. Antes de construir, acordamos qué significa que la solución funcione.</p></div>
        <MethodExplorer />
      </section>

      <section className="brand-story" id="nosotros">
        <MosaicExplorer />
        <div className="story-copy"><div className="section-kicker"><span>04</span> El nombre</div><h2>Cambiar la posición sin perder la esencia.</h2><p>En geometría, un movimiento isométrico transforma una figura y conserva su estructura. En Musivo hacemos lo mismo con los negocios: entendemos lo esencial, detectamos patrones y transformamos con tecnología sin perder aquello que ya funciona.</p><blockquote>Movimiento con estructura.<br />Cambio con evidencia.</blockquote></div>
      </section>

      <section className="use-case" id="caso">
        <div className="case-copy"><div className="section-kicker"><span>05</span> Caso de uso</div><p className="case-sector">Servicios legales</p><h2>Orientación fundamentada. Captación calificada.</h2><p>Un asistente especializado identifica el tema, consulta normativa vigente, aclara la solicitud y deriva el caso cuando requiere criterio profesional.</p><ul className="check-list"><li>Consulta en lenguaje natural</li><li>Citas y fuentes verificables</li><li>Manejo de preguntas ambiguas</li><li>Canalización y seguimiento</li></ul><p className="legal-note">La herramienta ofrece orientación informativa y no sustituye la asesoría de un profesional del derecho.</p></div>
        <div className="case-demo"><div className="case-window-head"><span>Consulta guiada</span><span>Fuentes activas: 18</span></div><div className="message user-message">¿Puedo rescindir un contrato si la otra parte incumplió una fecha?</div><div className="message assistant-message"><span className="message-author">Asistente Musivo</span><p>Para orientar la búsqueda necesito confirmar: ¿el contrato establece esa fecha como obligación esencial y existe una cláusula de rescisión?</p><div className="message-actions"><span>Revisar cláusula</span><span>Hablar con especialista</span></div></div><div className="case-confidence"><div><span>Contexto identificado</span><strong>Contrato civil</strong></div><div><span>Estado</span><strong>Requiere aclaración</strong></div></div></div>
      </section>

      <section className="trust-section" id="confianza">
        <div className="section-pattern trust-pattern"><MosaicPattern id="trust-octagons" variant="octagon" /></div>
        <div className="section-heading trust-heading"><div className="section-kicker light"><span>06</span> Arquitectura de confianza</div><h2>Una respuesta útil también sabe cuándo no responder.</h2><p>La generación es solo una etapa. Diseñamos controles antes, durante y después de cada respuesta.</p></div>
        <div className="trust-flow" aria-label="Flujo de generación controlada">{trustSteps.map(([number, title, detail], index) => <div className="trust-step" key={number}><span>{number}</span><strong>{title}</strong><small>{detail}</small>{index < trustSteps.length - 1 && <i aria-hidden="true">→</i>}</div>)}<div className="trust-decision"><span>Confianza suficiente</span><div><strong>Sí</strong> Respuesta con fuentes</div><div><strong>No</strong> Abstención o canalización</div></div></div>
        <div className="trust-controls">{["Fuentes curadas y versionadas", "Referencias validadas automáticamente", "Registro auditable de consultas", "Cifrado en tránsito y en reposo", "Separación de datos por cliente", "Control de acceso y prevención de abuso"].map((control) => <span key={control}>{control}</span>)}</div>
      </section>

      <section className="sectors-strip" aria-label="Sectores y problemas"><span>Servicios legales</span><i>◆</i><span>Operaciones reguladas</span><i>◆</i><span>Predicción de demanda</span><i>◆</i><span>Documentación especializada</span><i>◆</i><span>Automatización de conocimiento</span></section>

      <section className="contact-section" id="contacto">
        <div className="contact-pattern" aria-hidden="true"><MosaicPattern id="contact-octagons" variant="octagon" density="large" /></div>
        <div className="contact-copy"><div className="section-kicker"><span>07</span> Primer movimiento</div><h2>Conversemos sobre el proceso que necesitas mejorar.</h2><p>En una sesión inicial revisamos el problema, las fuentes disponibles, los riesgos y una ruta viable de implementación.</p><div className="contact-facts"><span><strong>01</strong> Sin propuesta genérica</span><span><strong>02</strong> Riesgos sobre la mesa</span><span><strong>03</strong> Siguiente paso concreto</span></div></div>
        <ContactForm />
      </section>

      <footer><div className="footer-brand"><a className="brand brand-light" href="#inicio"><BrandMark /><span>musivo</span></a><p>Inteligencia aplicada a problemas reales.</p></div><div className="footer-location"><span>Ciudad de México</span><span>Contacto mediante formulario</span></div><div className="footer-links"><a href="/privacidad">Aviso de privacidad</a><a href="/terminos">Términos de uso</a></div><p className="footer-note">© 2026 Musivo. Transformar sin perder la esencia.</p></footer>
    </main>
  );
}