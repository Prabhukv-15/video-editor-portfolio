import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const dynamic = "force-static";

export const alt = `${site.name} — ${site.role}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#070706",
          color: "#f4efe6",
          padding: "64px 72px",
          fontFamily: "Times New Roman, serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 18, letterSpacing: 6 }}>
          <span style={{ color: "#c9a36a" }}>EP</span>
          <span style={{ color: "#cfc6b8" }}>{site.location.toUpperCase()}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 22, letterSpacing: 8, color: "#c9a36a", marginBottom: 18 }}>
            VIDEO EDITOR & COLORIST
          </div>
          <div style={{ fontSize: 96, lineHeight: 0.9 }}>{site.firstName}</div>
          <div style={{ fontSize: 96, lineHeight: 0.9, fontStyle: "italic", color: "#e8c99a" }}>
            {site.lastName}
          </div>
          <div style={{ marginTop: 28, fontSize: 28, color: "#cfc6b8", maxWidth: 760 }}>
            {site.tagline}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 18, color: "#cfc6b8" }}>
          <span>DAVINCI RESOLVE</span>
          <span>{site.email}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
