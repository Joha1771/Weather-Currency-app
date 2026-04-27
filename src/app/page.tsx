import Link from "next/link";
import { fetchWeather } from "@/lib/weather";
import { fetchCurrency } from "@/lib/currency";

export const revalidate = 300;

export default async function HomePage() {
  let weather = null;
  let currency = null;

  try {
    weather = await fetchWeather(41.2995, 69.2401, "Toshkent");
  } catch {}
  try {
    currency = await fetchCurrency();
  } catch {}

  const topRates =
    currency?.rates.filter((r) => ["USD", "EUR", "RUB"].includes(r.code)) || [];

  return (
    <div
      style={{ paddingTop: "88px", minHeight: "100vh", background: "#f5f6f8" }}
    >
      <style>{`
        * { box-sizing: border-box; font-family: 'DM Sans', system-ui, sans-serif; }
        .wr { max-width: 1080px; margin: 0 auto; padding: 2.5rem 1.5rem 5rem; }
        .hero-section { text-align: center; margin-bottom: 3.5rem; }
        .live-pill { display: inline-flex; align-items: center; gap: 7px; padding: 5px 14px; border-radius: 99px; background: #e8f5e9; border: 1.5px solid #c8e6c9; margin-bottom: 1.5rem; }
        .live-dot { width: 7px; height: 7px; border-radius: 50%; background: #43a047; }
        .live-text { font-size: 0.75rem; color: #2e7d32; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; }
        .hero-title { font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 700; color: #0f1923; letter-spacing: -0.035em; line-height: 1.1; margin-bottom: 1rem; }
        .hero-sub { font-size: 1rem; color: #7a8799; max-width: 440px; margin: 0 auto 2.5rem; line-height: 1.6; }
        .cta-row { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; }
        .btn-primary { text-decoration: none; padding: 13px 28px; border-radius: 10px; background: #0f1923; color: #fff; font-weight: 600; font-size: 0.9rem; transition: opacity 0.15s; }
        .btn-primary:hover { opacity: 0.85; }
        .btn-secondary { text-decoration: none; padding: 13px 28px; border-radius: 10px; background: #fff; color: #0f1923; font-weight: 600; font-size: 0.9rem; border: 1.5px solid #e0e4e9; transition: border-color 0.15s; }
        .btn-secondary:hover { border-color: #aab3bd; }
        .cards { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2rem; }
        @media(max-width:680px){ .cards{ grid-template-columns:1fr; } }
        .card { background: #fff; border-radius: 15px; border: 1.5px solid #e6eaed; padding: 1.6rem; }
        .card-label { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.09em; text-transform: uppercase; color: #9aa3ad; margin-bottom: 0.25rem; }
        .card-title { font-size: 0.85rem; color: #5a6370; margin-bottom: 1.4rem; }
        .w-main { display: flex; align-items: flex-end; gap: 10px; margin-bottom: 1rem; }
        .w-temp { font-size: 3.5rem; font-weight: 700; letter-spacing: -0.04em; line-height: 1; color: #0f1923; font-family: 'DM Mono', monospace; }
        .w-cond { font-size: 1rem; color: #7a8799; padding-bottom: 6px; }
        .w-icon { font-size: 2.8rem; margin-bottom: 1rem; }
        .stats { display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem; margin-bottom: 1.2rem; }
        .stat { background: #f5f6f8; border-radius: 9px; padding: 9px 11px; }
        .stat-val { font-size: 0.88rem; font-weight: 600; color: #0f1923; font-family: 'DM Mono', monospace; }
        .stat-name { font-size: 0.68rem; color: #9aa3ad; margin-top: 1px; }
        .link-btn { display: block; text-align: center; padding: 9px; border-radius: 9px; background: #f5f6f8; border: 1.5px solid #e6eaed; color: #5a6370; text-decoration: none; font-size: 0.82rem; font-weight: 500; transition: border-color 0.13s; }
        .link-btn:hover { border-color: #aab3bd; color: #0f1923; }
        .rate-row { display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; border-radius: 10px; border: 1.5px solid #f0f2f5; margin-bottom: 0.6rem; }
        .rate-row:last-of-type { margin-bottom: 0; }
        .rate-left { display: flex; align-items: center; gap: 9px; }
        .rate-flag { font-size: 1.4rem; }
        .rate-code { font-weight: 700; font-size: 0.9rem; color: #0f1923; }
        .rate-name { font-size: 0.72rem; color: #9aa3ad; margin-top: 1px; }
        .rate-val { font-family: 'DM Mono', monospace; font-size: 1.05rem; font-weight: 600; color: #0f1923; }
        .rate-uzs { font-size: 0.68rem; color: #9aa3ad; }
        .features { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.85rem; }
        .feat { background: #fff; border-radius: 13px; border: 1.5px solid #e6eaed; padding: 1.3rem 1.4rem; }
        .feat-icon { font-size: 1.6rem; margin-bottom: 0.6rem; }
        .feat-title { font-size: 0.85rem; font-weight: 600; color: #0f1923; margin-bottom: 3px; }
        .feat-desc { font-size: 0.78rem; color: #9aa3ad; }
      `}</style>

      <div className="wr">
        {/* Hero */}
        <div className="hero-section">
          <div className="live-pill">
            <div className="live-dot" />
            <span className="live-text">Live ma'lumotlar</span>
          </div>
          <h1 className="hero-title">
            Ob-havo &amp; Valyuta
            <br />
            Kurslari
          </h1>
          <p className="hero-sub">
            Real vaqtda Toshkent ob-havosi va jahon valyuta kurslarini kuzating
          </p>
          <div className="cta-row">
            <Link href="/weather" className="btn-primary">
              🌤 Ob-havo
            </Link>
            <Link href="/currency" className="btn-secondary">
              💱 Valyuta kurslari
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="cards">
          {/* Weather */}
          <div className="card">
            <div className="card-label">Toshkent · O'zbekiston</div>
            <div className="card-title">Hozirgi ob-havo</div>
            {weather ? (
              <>
                <div className="w-icon">{weather.icon}</div>
                <div className="w-main">
                  <span className="w-temp">{weather.temp}°</span>
                  <span className="w-cond">{weather.condition}</span>
                </div>
                <div className="stats">
                  {[
                    { label: "Namliq", value: `${weather.humidity}%` },
                    { label: "Shamol", value: `${weather.windSpeed} km/h` },
                    { label: "Seziladi", value: `${weather.feelsLike}°C` },
                    { label: "Ko'rinish", value: `${weather.visibility} km` },
                  ].map((s) => (
                    <div key={s.label} className="stat">
                      <div className="stat-val">{s.value}</div>
                      <div className="stat-name">{s.label}</div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div
                style={{
                  color: "#9aa3ad",
                  fontSize: "0.9rem",
                  marginBottom: "1rem",
                }}
              >
                Yuklanmoqda...
              </div>
            )}
            <Link href="/weather" className="link-btn">
              Batafsil ob-havo →
            </Link>
          </div>

          {/* Currency */}
          <div className="card">
            <div className="card-label">Markaziy Bank</div>
            <div className="card-title">Valyuta kurslari (UZS)</div>
            {topRates.length > 0 ? (
              <>
                {topRates.map((r) => (
                  <div key={r.code} className="rate-row">
                    <div className="rate-left">
                      <span className="rate-flag">{r.flag}</span>
                      <div>
                        <div className="rate-code">{r.code}</div>
                        <div className="rate-name">{r.name}</div>
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div className="rate-val">{r.rate.toLocaleString()}</div>
                      <div className="rate-uzs">so'm</div>
                    </div>
                  </div>
                ))}
                <div style={{ marginTop: "1rem" }}>
                  <Link href="/currency" className="link-btn">
                    Barcha valyutalar →
                  </Link>
                </div>
              </>
            ) : (
              <div style={{ color: "#9aa3ad", fontSize: "0.9rem" }}>
                Yuklanmoqda...
              </div>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="features">
          {[
            {
              icon: "🛰️",
              title: "Real-time ma'lumotlar",
              desc: "Har 5 daqiqada yangilanadi",
            },
            {
              icon: "📊",
              title: "7 kunlik prognoz",
              desc: "Haftalik ob-havo bashorati",
            },
            {
              icon: "💱",
              title: "10+ valyuta",
              desc: "Jahon valyuta kurslari",
            },
            { icon: "📍", title: "4 shahar", desc: "O'zbekiston bo'yicha" },
          ].map((f) => (
            <div key={f.title} className="feat">
              <div className="feat-icon">{f.icon}</div>
              <div className="feat-title">{f.title}</div>
              <div className="feat-desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
