import type { Metadata } from "next";
import { LegalPage } from "../components/legal-page";
import { contactEmail } from "../site";

export const metadata: Metadata = {
  title: "Términos de uso",
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Condiciones" title="Términos de uso" updated="12 de octubre de 2026">
      <h2>Contenido informativo</h2>
      <p>El contenido de este sitio describe capacidades y enfoques generales. No constituye una oferta vinculante, garantía de resultados ni asesoría legal, financiera o profesional.</p>
      <h2>Casos y demostraciones</h2>
      <p>Las interfaces, métricas y flujos mostrados (por ejemplo, porcentajes de confianza o número de fuentes) son ejemplos ilustrativos de interfaz, salvo que se indique expresamente lo contrario. No representan resultados de un cliente ni compromisos de desempeño.</p>
      <h2>Uso permitido</h2>
      <p>Puedes consultar el sitio para conocer a Musivo y solicitar una conversación. No debes intentar vulnerar el servicio, automatizar envíos abusivos ni introducir información ilícita o de terceros sin autorización.</p>
      <h2>Propiedad y disponibilidad</h2>
      <p>La identidad, textos y materiales de Musivo no pueden reutilizarse como propios. El sitio puede cambiar o interrumpirse sin previo aviso.</p>
      <h2>Contacto</h2>
      <p>Para dudas sobre estos términos escribe a {contactEmail}. La razón social, jurisdicción y condiciones definitivas de [Razón social] se incorporarán tras la revisión jurídica.</p>
    </LegalPage>
  );
}