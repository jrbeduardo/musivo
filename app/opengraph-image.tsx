import { ImageResponse } from "next/og";

export const alt = "Musivo — Transformamos problemas complejos en soluciones inteligentes";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        padding: "64px",
        background: "#f7f8f3",
        color: "#161b18",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", width: "100%", flexDirection: "column", justifyContent: "space-between", border: "2px solid #161b18", padding: "42px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "18px", fontSize: "34px", fontWeight: 700 }}>
          <div style={{ display: "flex", gap: "5px", transform: "skewY(-25deg)" }}>
            <span style={{ width: "18px", height: "32px", background: "#b9f227", border: "2px solid #161b18" }} />
            <span style={{ width: "18px", height: "32px", background: "#f46b4f", border: "2px solid #161b18", transform: "translateY(7px)" }} />
            <span style={{ width: "18px", height: "32px", background: "#176b64", border: "2px solid #161b18", transform: "translateY(14px)" }} />
          </div>
          musivo
        </div>
        <div style={{ display: "flex", maxWidth: "940px", flexDirection: "column", gap: "22px" }}>
          <span style={{ color: "#176b64", fontSize: "20px", fontWeight: 700, textTransform: "uppercase" }}>IA · ML · Ingeniería de datos</span>
          <span style={{ fontSize: "68px", fontWeight: 700, lineHeight: 1.02 }}>Transformamos problemas complejos en soluciones inteligentes.</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "18px" }}><span>Problema primero. Tecnología después.</span><span>Ciudad de México</span></div>
      </div>
    </div>,
    size,
  );
}