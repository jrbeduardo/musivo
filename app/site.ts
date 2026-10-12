// Defaults are production values so a local build still ships correct absolute URLs.
export const siteOrigin = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jrbeduardo.github.io";
export const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/musivo";
export const siteUrl = `${siteOrigin}${siteBasePath}`;

export const tagline = "IA práctica para que tu PyME opere mejor.";

export const contactEmail = "contacto@musivo.mx";
export const privacyEmail = "privacidad@musivo.mx";
