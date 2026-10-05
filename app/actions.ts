"use server";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<"name" | "email" | "company" | "challenge" | "consent", string>>;
};

function field(formData: FormData, name: string) {
  return String(formData.get(name) ?? "").trim();
}

export async function submitContact(
  _previousState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = field(formData, "name");
  const email = field(formData, "email");
  const company = field(formData, "company");
  const challenge = field(formData, "challenge");
  const consent = formData.get("consent") === "on";
  const website = field(formData, "website");

  if (website) return { status: "success", message: "Gracias. Recibimos tu solicitud." };

  const errors: ContactState["errors"] = {};
  if (name.length < 2 || name.length > 80) errors.name = "Escribe tu nombre completo.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 160) {
    errors.email = "Usa un correo válido.";
  }
  if (company.length > 120) errors.company = "El nombre es demasiado largo.";
  if (challenge.length < 20 || challenge.length > 1200) {
    errors.challenge = "Cuéntanos el reto en al menos 20 caracteres.";
  }
  if (!consent) errors.consent = "Necesitamos tu consentimiento para responder.";

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Revisa los campos señalados.", errors };
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (!webhookUrl) {
    return {
      status: "error",
      message: "El canal de envío está en configuración. Intenta de nuevo más tarde.",
    };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        company,
        challenge,
        consentAt: new Date().toISOString(),
        source: "musivo-website",
      }),
      cache: "no-store",
    });
    if (!response.ok) throw new Error("Contact webhook rejected the request");
  } catch {
    return {
      status: "error",
      message: "No pudimos enviar tu solicitud. Intenta de nuevo en unos minutos.",
    };
  }

  return {
    status: "success",
    message: "Recibimos tu solicitud. Te contactaremos para definir el siguiente paso.",
  };
}