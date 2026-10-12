import type { Metadata } from "next";
import { LegalPage } from "../components/legal-page";
import { privacyEmail } from "../site";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Privacidad" title="Aviso de privacidad integral" updated="12 de octubre de 2026">
      <p>Aviso emitido en cumplimiento de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), su Reglamento y los Lineamientos del Aviso de Privacidad.</p>

      <h2>1. Identidad y domicilio del responsable</h2>
      <p>[Razón social o nombre del responsable], en adelante “Musivo”, con domicilio en [calle, número, colonia, alcaldía, C.P.], Ciudad de México, México, es responsable del tratamiento de los datos personales que nos proporcionas a través del formulario de contacto o por correo electrónico.</p>

      <h2>2. Datos personales que recabamos</h2>
      <p>Al contactarnos recabamos los siguientes datos de identificación y contacto: nombre completo, correo electrónico, nombre de la empresa u organización, puesto (opcional) y la descripción del proceso o reto que deseas mejorar. También registramos la fecha y hora en que otorgaste tu consentimiento.</p>
      <p>No solicitamos datos personales sensibles. Te pedimos no incluir en tu mensaje información confidencial, datos de salud, financieros, de terceros ni secretos comerciales.</p>

      <h2>3. Finalidades del tratamiento</h2>
      <p><strong>Finalidades primarias</strong> (necesarias para atender tu solicitud): responder tu mensaje, evaluar si Musivo puede apoyar tu proyecto, agendar y dar seguimiento a una conversación inicial y, en su caso, elaborar una propuesta de servicios.</p>
      <p><strong>Finalidades secundarias</strong> (no necesarias para la relación): enviarte información sobre servicios, contenidos o novedades de Musivo. Si no deseas que tus datos se traten para estas finalidades, indícalo en tu primer mensaje o escribe a {privacyEmail}. Tu negativa no será motivo para dejar de atender tu solicitud.</p>

      <h2>4. Transferencias de datos</h2>
      <p>Tus datos no se venden ni se comparten con terceros para fines distintos a los descritos. Únicamente podrán ser tratados por proveedores que prestan servicios a Musivo (alojamiento, correo electrónico y gestión de formularios) bajo acuerdos de confidencialidad, o cuando una autoridad competente lo requiera conforme a la ley. En estos casos no se requiere tu consentimiento según el artículo 37 de la LFPDPPP.</p>

      <h2>5. Conservación de los datos</h2>
      <p>Conservaremos tus datos durante el tiempo necesario para cumplir las finalidades descritas y, en su caso, por un plazo máximo de [12] meses después del último contacto, salvo que exista una obligación legal de conservarlos por más tiempo o inicies una relación comercial con Musivo.</p>

      <h2>6. Derechos ARCO</h2>
      <p>Tienes derecho a conocer qué datos personales tenemos de ti y para qué los usamos (Acceso); a solicitar su corrección cuando sean inexactos o incompletos (Rectificación); a que los eliminemos de nuestros registros cuando consideres que no se usan conforme a la ley (Cancelación), y a oponerte a su uso para fines específicos (Oposición).</p>
      <p>Para ejercer estos derechos envía una solicitud a {privacyEmail} indicando: tu nombre completo, un medio para comunicarte la respuesta, copia de una identificación oficial, la descripción clara del derecho que deseas ejercer y cualquier dato que facilite localizar tu información. Responderemos en un plazo máximo de 20 días hábiles y, de resultar procedente, haremos efectiva la solicitud dentro de los 15 días hábiles siguientes.</p>

      <h2>7. Revocación del consentimiento y limitación de uso</h2>
      <p>Puedes revocar en cualquier momento el consentimiento otorgado para el tratamiento de tus datos, así como solicitar que limitemos su uso o divulgación, escribiendo a {privacyEmail}. Ten en cuenta que, en algunos casos, la revocación impedirá que continuemos atendiendo tu solicitud.</p>

      <h2>8. Uso de cookies y tecnologías de rastreo</h2>
      <p>Este sitio no utiliza cookies de seguimiento ni herramientas de analítica que identifiquen a las personas visitantes. Si en el futuro se incorporan, este aviso se actualizará y se habilitará un mecanismo para aceptarlas o rechazarlas.</p>

      <h2>9. Cambios al aviso de privacidad</h2>
      <p>Este aviso puede modificarse para atender cambios legislativos, de nuestras prácticas o de los servicios que ofrecemos. Cualquier cambio se publicará en esta misma página indicando la fecha de última actualización.</p>

      <h2>10. Autoridad</h2>
      <p>Si consideras que tu derecho a la protección de datos personales ha sido vulnerado, puedes acudir ante la autoridad competente en materia de protección de datos personales en México.</p>

      <h2>11. Consentimiento</h2>
      <p>Al enviar el formulario de contacto o escribirnos por correo electrónico, manifiestas que has leído este aviso y otorgas tu consentimiento para el tratamiento de tus datos personales conforme a lo aquí descrito.</p>
    </LegalPage>
  );
}