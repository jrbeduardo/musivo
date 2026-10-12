import Link from "next/link";
import { ContactForm } from "./contact-form";
import { KnowledgeDemo } from "./knowledge-demo";
import { MethodExplorer } from "./method-explorer";
import { MobileNavigation } from "./mobile-navigation";
import { MosaicExplorer } from "./mosaic-explorer";
import { MosaicPattern } from "./mosaic-pattern";
import { contactEmail, tagline } from "../site";

const products = [
  {
    number: "01",
    tag: "Producto estrella",
    title: "Asistente Legal",
    description: "Atiende las consultas de tus clientes a cualquier hora con respuestas basadas únicamente en la normativa vigente y en tus documentos. Indica de qué ley, cláusula o página salió cada respuesta y canaliza el caso a un abogado cuando hace falta criterio profesional.",
    benefit: "Más consultas atendidas sin saturar a tu equipo.",
    featured: true,
  },
  {
    number: "02",
    tag: "Conocimiento interno",
    title: "Asistente para tu equipo",
    description: "Tu equipo pregunta en lenguaje natural y recibe respuestas basadas únicamente en los manuales, políticas y documentos oficiales y vigentes de tu empresa, con la referencia exacta de dónde salió cada una.",
    benefit: "Menos tiempo buscando y menos errores por información desactualizada.",
    featured: false,
  },
  {
    number: "03",
    tag: "Operación diaria",
    title: "Automatización de procesos repetitivos",
    description: "Flujos que capturan, clasifican y dan seguimiento a solicitudes, documentos y pedidos sin intervención manual, respetando las políticas de tu negocio y conectados a las herramientas que ya usas.",
    benefit: "Horas recuperadas cada semana y menos retrabajo.",
    featured: false,
  },
];

const alsoWeDo = [
  ["Predicción de demanda", "para planear inventario, compras y personal con anticipación."],
  ["Orden e integración de datos", "para que tus sistemas hablen entre sí y la información sea confiable."],
  ["Detección de anomalías", "para identificar errores, fraudes o desviaciones antes de que cuesten."],
  ["Modelos a la medida", "cuando tu problema no encaja en una herramienta estándar."],
];

const trustSteps = [
  ["01", "Consulta", "Lenguaje natural"],
  ["02", "Clasificación", "Intención + reglas"],
  ["03", "Fuentes", "Recuperación curada"],
  ["04", "Generación", "Respuesta controlada"],
  ["05", "Validación", "Evidencia + confianza"],
];

const trustGlossary = [
  ["Recuperación curada", "Respuestas basadas únicamente en los documentos oficiales y vigentes de tu empresa."],
  ["Intención + reglas", "El sistema entiende qué necesita tu cliente y respeta las políticas de tu negocio sin improvisar."],
  ["Trazabilidad", "Sabes exactamente de qué documento, cláusula o página salió cada respuesta."],
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
          <p className="eyebrow">Asistentes · Automatización · Datos para PyMEs</p>
          <h1>{tagline}</h1>
          <p className="hero-lead">¿Tu equipo pierde horas respondiendo las mismas preguntas, buscando información en archivos dispersos o decidiendo sin datos confiables? Diseñamos asistentes y sistemas que se integran a cómo ya trabajas y demuestran su valor con resultados que puedes comprobar.</p>
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
          <div className="problem-copy"><p>Contratar una herramienta de IA no resuelve nada por sí solo. El sistema tiene que conocer tus reglas, conectarse con la operación diaria de tu PyME y demostrar su impacto con evidencia.</p><div className="problem-list"><span>Información dispersa</span><span>Procesos manuales</span><span>Herramientas sin contexto</span><span>Resultados sin medir</span></div></div>
        </div>
      </section>

      <section className="solutions-section" id="soluciones">
        <div className="section-pattern solutions-pattern"><MosaicPattern id="solutions-weave" variant="weave" density="large" /></div>
        <div className="section-heading"><div className="section-kicker"><span>02</span> Soluciones</div><h2>Empezamos por lo que más tiempo le quita a tu negocio.</h2><p>Productos concretos que se adaptan a tu operación. Sin paquetes cerrados ni promesas genéricas.</p></div>
        <div className="products-grid">
          {products.map(({ number, tag, title, description, benefit, featured }) => (
            <article className={`solution-card product-card${featured ? " is-featured" : ""}`} key={number}>
              <div className="solution-meta"><span>{number}</span><span>{tag}</span></div>
              <h3>{title}</h3>
              <p>{description}</p>
              <strong className="product-benefit">{benefit}</strong>
              <span className="card-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
        <div className="also-block">
          <span className="also-title">También hacemos</span>
          <ul>
            {alsoWeDo.map(([title, detail]) => <li key={title}><strong>{title}</strong> {detail}</li>)}
          </ul>
        </div>
      </section>

      <section className="method-section" id="metodo">
        <div className="method-intro"><div className="section-kicker light"><span>03</span> Método Musivo</div><h2>Del reto operativo a un sistema que se puede comprobar.</h2><p>Cada etapa reduce incertidumbre. Antes de construir, acordamos qué significa que la solución funcione.</p></div>
        <MethodExplorer />
      </section>

      <section className="brand-story" id="nosotros">
        <MosaicExplorer />
        <div className="story-copy">
          <div className="section-kicker"><span>04</span> El nombre</div>
          <h2>Piezas independientes. Una imagen coherente.</h2>
          <p>Musivo viene del <em>arte musivo</em>, el arte del mosaico: piezas independientes que, al unirse, forman una imagen coherente. Así vemos a un negocio. Personas, procesos, datos y herramientas que solo cobran sentido cuando encajan.</p>
          <p>Los mosaicos que cubren un plano no son infinitos en su variedad. Las matemáticas los clasifican por sus simetrías en exactamente 17 grupos cristalográficos planos: detrás de cada patrón, por complejo que parezca, hay una estructura que se puede reconocer y nombrar.</p>
          <p>Esa estructura se construye con movimientos isométricos: trasladar, rotar y reflejar. Transformaciones que cambian la posición de cada pieza y conservan distancias y proporciones sin deformar la esencia. Es exactamente lo que hacemos con tu operación: la transformamos con tecnología sin perder aquello que ya funciona.</p>
          <blockquote>Movimiento con estructura.<br />Cambio con evidencia.</blockquote>
        </div>
      </section>

      <section className="use-case" id="caso">
        <div className="case-copy"><div className="section-kicker"><span>05</span> Caso de uso</div><p className="case-sector">Servicios legales</p><h2>Orientación fundamentada. Captación calificada.</h2><p>Un asistente especializado identifica el tema, consulta normativa vigente, aclara la solicitud y deriva el caso cuando requiere criterio profesional.</p><ul className="check-list"><li>Consulta en lenguaje natural</li><li>Cada respuesta indica de qué ley, cláusula o página salió</li><li>Pide aclaraciones cuando la pregunta es ambigua</li><li>Canaliza el caso a tu equipo y da seguimiento</li></ul><p className="legal-note">La herramienta ofrece orientación informativa y no sustituye la asesoría de un profesional del derecho.</p></div>
        <div className="case-demo"><div className="case-window-head"><span>Consulta guiada</span><span className="illustrative-badge">Ejemplo ilustrativo de interfaz</span><span>Fuentes activas: 18</span></div><div className="message user-message">¿Puedo rescindir un contrato si la otra parte incumplió una fecha?</div><div className="message assistant-message"><span className="message-author">Asistente Musivo</span><p>Para orientar la búsqueda necesito confirmar: ¿el contrato establece esa fecha como obligación esencial y existe una cláusula de rescisión?</p><div className="message-actions"><span>Revisar cláusula</span><span>Hablar con especialista</span></div></div><div className="case-confidence"><div><span>Contexto identificado</span><strong>Contrato civil</strong></div><div><span>Estado</span><strong>Requiere aclaración</strong></div></div></div>
      </section>

      <section className="trust-section" id="confianza">
        <div className="section-pattern trust-pattern"><MosaicPattern id="trust-octagons" variant="octagon" /></div>
        <div className="section-heading trust-heading"><div className="section-kicker light"><span>06</span> Arquitectura de confianza</div><h2>Una respuesta útil también sabe cuándo no responder.</h2><p>La generación es solo una etapa. Diseñamos controles antes, durante y después de cada respuesta.</p></div>
        <div className="trust-flow" aria-label="Flujo de generación controlada">{trustSteps.map(([number, title, detail], index) => <div className="trust-step" key={number}><span>{number}</span><strong>{title}</strong><small>{detail}</small>{index < trustSteps.length - 1 && <i aria-hidden="true">→</i>}</div>)}<div className="trust-decision"><span>Confianza suficiente</span><div><strong>Sí</strong> Respuesta con fuentes</div><div><strong>No</strong> Abstención o canalización</div></div></div>
        <div className="trust-controls">{["Fuentes curadas y versionadas", "Referencias validadas automáticamente", "Registro auditable de consultas", "Cifrado en tránsito y en reposo", "Separación de datos por cliente", "Control de acceso y prevención de abuso"].map((control) => <span key={control}>{control}</span>)}</div>
        <div className="trust-glossary" aria-label="Qué significa cada término para tu negocio">
          <span className="trust-glossary-title">Qué significa para tu negocio</span>
          <dl>{trustGlossary.map(([term, meaning]) => <div key={term}><dt>{term}</dt><dd>{meaning}</dd></div>)}</dl>
        </div>
      </section>

      <section className="sectors-strip" aria-label="Sectores y problemas"><span>Servicios legales</span><i>◆</i><span>Operaciones reguladas</span><i>◆</i><span>Predicción de demanda</span><i>◆</i><span>Documentación especializada</span><i>◆</i><span>Automatización de conocimiento</span></section>

      <section className="contact-section" id="contacto">
        <div className="contact-pattern" aria-hidden="true"><MosaicPattern id="contact-octagons" variant="octagon" density="large" /></div>
        <div className="contact-copy"><div className="section-kicker"><span>07</span> Primer movimiento</div><h2>Conversemos sobre el proceso que necesitas mejorar.</h2><p>En una sesión inicial revisamos el problema, la información con la que cuentas, los riesgos y una ruta viable de implementación para tu PyME.</p><div className="contact-facts"><span><strong>01</strong> Sin propuesta genérica</span><span><strong>02</strong> Riesgos sobre la mesa</span><span><strong>03</strong> Siguiente paso concreto</span></div></div>
        <ContactForm />
      </section>

      <footer><div className="footer-brand"><a className="brand brand-light" href="#inicio"><BrandMark /><span>musivo</span></a><p>{tagline}</p></div><div className="footer-location"><span>Ciudad de México</span><a href={`mailto:${contactEmail}`}>{contactEmail}</a></div><div className="footer-links"><Link href="/privacidad/">Aviso de privacidad</Link><Link href="/terminos/">Términos de uso</Link></div><p className="footer-note">© 2026 Musivo. Transformar sin perder la esencia.</p></footer>
    </main>
  );
}