import type { Metadata } from "next";
import { LegalPage } from "../components/legal-page";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Privacidad" title="Aviso de privacidad" updated="15 de septiembre de 2026">
      <h2>Datos que recibe el sitio</h2>
      <p>El formulario de contacto solicita nombre, correo electrónico, organización y una descripción del proceso que deseas mejorar. No escribas información confidencial, datos sensibles ni secretos comerciales.</p>
      <h2>Finalidad</h2>
      <p>Los datos se utilizarán únicamente para responder la solicitud, evaluar si Musivo puede apoyar el proyecto y coordinar una conversación inicial.</p>
      <h2>Tratamiento y proveedores</h2>
      <p>La entrega del formulario se realizará mediante un proveedor técnico configurado por Musivo. Antes de publicación se documentarán el responsable legal, los plazos de conservación, las transferencias aplicables y el mecanismo formal para ejercer derechos sobre los datos.</p>
      <h2>Tus decisiones</h2>
      <p>Puedes evitar el tratamiento no enviando el formulario. El consentimiento solicitado en el formulario es obligatorio para que Musivo pueda responder.</p>
      <h2>Contacto de privacidad</h2>
      <p>Para solicitudes de acceso, rectificacion, cancelacion u oposicion puedes escribir a frankmathtohuman@gmail.com o a jrbeduardo@gmail.com.</p>
    </LegalPage>
  );
}