export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(0, 163, 255, 0.12)",
        padding: "2rem 1.5rem",
        marginTop: "4rem",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #00a3ff, #00e5ff)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "14px",
            }}
          >
            🌐
          </div>
          <span
            style={{
              fontWeight: 700,
              background: "linear-gradient(135deg, #00a3ff, #00e5ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            MeteoX
          </span>
        </div>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {["Open-Meteo API", "Exchange Rate API", "Next.js 14"].map((t) => (
            <span key={t} style={{ fontSize: "0.8rem", color: "#4a6580" }}>
              {t}
            </span>
          ))}
        </div>
        <span style={{ fontSize: "0.8rem", color: "#4a6580" }}>
          © 2024 MeteoX — Barcha huquqlar himoyalangan
        </span>
      </div>
    </footer>
  );
}
