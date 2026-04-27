"use client";
import { useState } from "react";
import type { WeatherData } from "@/lib/weather";

interface CityWeather {
  name: string;
  lat: number;
  lon: number;
  flag: string;
  data: WeatherData | null;
}

export default function WeatherClient({ cities }: { cities: CityWeather[] }) {
  const [selectedCity, setSelectedCity] = useState(0);
  const [selectedDay, setSelectedDay] = useState(0);
  const w = cities[selectedCity].data;
  const day = w ? w.daily[selectedDay] : null;

  // For the hero block: if today selected show current data, else show day forecast
  const heroTemp = selectedDay === 0 ? w?.temp : day?.max;
  const heroIcon = selectedDay === 0 ? w?.icon : day?.icon;
  const heroCond = selectedDay === 0 ? w?.condition : day?.condition;
  const heroFeels =
    selectedDay === 0
      ? `Seziladi: ${w?.feelsLike}°C`
      : `Min: ${day?.min}° · Max: ${day?.max}°`;
  const showStats = selectedDay === 0;

  return (
    <div
      style={{ paddingTop: "88px", minHeight: "100vh", background: "#f5f6f8" }}
    >
      <style>{`
        * { box-sizing: border-box; }
        .wr { max-width: 1080px; margin: 0 auto; padding: 2rem 1.5rem 5rem; font-family: 'DM Sans', system-ui, sans-serif; }
        .ptitle { font-size: clamp(1.5rem,3vw,1.9rem); font-weight:700; color:#111820; letter-spacing:-0.03em; margin-bottom:0.2rem; }
        .psub { font-size:0.83rem; color:#9aa3ad; margin-bottom:1.6rem; }
        .ctabs { display:flex; gap:0.45rem; flex-wrap:wrap; margin-bottom:1.4rem; }
        .ctab { padding:8px 15px; border-radius:9px; border:1.5px solid #e0e4e9; background:#fff; color:#5a6370; font-size:0.83rem; font-weight:500; cursor:pointer; transition:all 0.13s; display:flex; align-items:center; gap:5px; font-family:inherit; }
        .ctab:hover { border-color:#aab3bd; color:#111820; }
        .ctab.on { background:#111820; border-color:#111820; color:#fff; }
        .tbadge { font-family:'DM Mono',monospace; font-size:0.76rem; opacity:0.6; }
        .grid { display:grid; grid-template-columns:1fr 1fr; gap:0.9rem; }
        @media(max-width:680px){ .grid{ grid-template-columns:1fr; } .span2{ grid-column:span 1 !important; } }
        .span2 { grid-column: span 2; }
        .card { background:#fff; border-radius:15px; border:1.5px solid #e6eaed; }
        /* Hero */
        .hero { background:#111820; border-color:transparent; }
        .hi { padding:1.75rem 2rem; display:flex; gap:2.5rem; flex-wrap:wrap; align-items:center; }
        .hleft { flex:1; min-width:170px; }
        .hday-badge { display:inline-block; font-size:0.68rem; font-weight:700; letter-spacing:0.07em; text-transform:uppercase; color:#4a6080; margin-bottom:0.7rem; }
        .hrow { display:flex; align-items:center; gap:0.9rem; margin-bottom:0.35rem; }
        .hicon { font-size:3rem; line-height:1; }
        .htemp { font-size:4.2rem; font-weight:700; letter-spacing:-0.04em; line-height:1; color:#fff; font-family:'DM Mono',monospace; }
        .hcond { font-size:1rem; color:#6a8099; margin-bottom:0.2rem; }
        .hfeel { font-size:0.8rem; color:#3d5570; }
        .hright { display:grid; grid-template-columns:repeat(3,1fr); gap:0.6rem; min-width:250px; }
        @media(max-width:500px){ .hright{ grid-template-columns:1fr 1fr; min-width:unset; width:100%; } }
        .spill { background:rgba(255,255,255,0.055); border-radius:9px; padding:10px 12px; border:1px solid rgba(255,255,255,0.07); }
        .si { font-size:0.9rem; margin-bottom:4px; }
        .sv { font-size:0.9rem; font-weight:600; color:#fff; font-family:'DM Mono',monospace; }
        .sn { font-size:0.67rem; color:#3d5570; margin-top:1px; }
        /* No stats placeholder */
        .no-stats { display:flex; align-items:center; justify-content:center; min-width:250px; padding:1rem; }
        .no-stats-inner { text-align:center; color:#3d5570; font-size:0.82rem; line-height:1.6; }
        /* Cards */
        .ci { padding:1.2rem 1.4rem; }
        .clabel { font-size:0.67rem; font-weight:700; letter-spacing:0.09em; text-transform:uppercase; color:#9aa3ad; margin-bottom:0.85rem; }
        /* Forecast rows */
        .frow { display:flex; align-items:center; padding:9px 8px; border-radius:8px; cursor:pointer; transition:background 0.1s; margin:0 -8px; border-bottom:1px solid #f0f2f5; }
        .frow:last-child{ border-bottom:none; }
        .frow:hover { background:#f5f7f9; }
        .frow.sel { background:#e8f0fe; }
        .fday { min-width:58px; font-size:0.83rem; font-weight:600; color:#111820; }
        .fday.td { color:#2d55dd; }
        .fic { font-size:1.15rem; margin:0 9px; }
        .fcond { flex:1; font-size:0.77rem; color:#9aa3ad; }
        .ftemps { display:flex; gap:7px; font-family:'DM Mono',monospace; font-size:0.83rem; }
        .fmax { font-weight:600; color:#111820; }
        .fmin { color:#c5cdd6; }
        .farr { margin-left:7px; font-size:0.7rem; color:#c5cdd6; transition:color 0.1s; }
        .frow.sel .farr { color:#2d55dd; }
        /* Hourly */
        .hscroll { display:flex; gap:0.5rem; overflow-x:auto; padding-bottom:0.2rem; scrollbar-width:thin; }
        .hpill { min-width:62px; flex-shrink:0; text-align:center; padding:10px 6px; border-radius:10px; border:1.5px solid #e6eaed; background:#fff; }
        .hpill.now { background:#111820; border-color:#111820; }
        .htime { font-size:0.67rem; color:#9aa3ad; margin-bottom:4px; font-family:'DM Mono',monospace; }
        .hpill.now .htime { color:#3d5570; }
        .hem { font-size:1.15rem; margin-bottom:4px; }
        .htp { font-size:0.83rem; font-weight:600; color:#111820; font-family:'DM Mono',monospace; }
        .hpill.now .htp { color:#fff; }
        .empty { padding:3rem; text-align:center; color:#9aa3ad; }
      `}</style>

      <div className="wr">
        <h1 className="ptitle">🌤 Ob-havo</h1>
        <p className="psub">
          O'zbekiston shaharlari bo'yicha real vaqt ob-havosi
        </p>

        <div className="ctabs">
          {cities.map((c, i) => (
            <button
              key={c.name}
              onClick={() => {
                setSelectedCity(i);
                setSelectedDay(0);
              }}
              className={`ctab${selectedCity === i ? " on" : ""}`}
            >
              {c.flag} {c.name}
              {c.data && <span className="tbadge">{c.data.temp}°</span>}
            </button>
          ))}
        </div>

        {w ? (
          <div className="grid">
            {/* Hero — shows today OR selected day */}
            <div className="card hero span2">
              <div className="hi">
                <div className="hleft">
                  <div className="hday-badge">
                    {selectedDay === 0
                      ? `${w.city} · Hozir`
                      : `${w.city} · ${day?.day}`}
                  </div>
                  <div className="hrow">
                    <span className="hicon">{heroIcon}</span>
                    <span className="htemp">{heroTemp}°</span>
                  </div>
                  <div className="hcond">{heroCond}</div>
                  <div className="hfeel">{heroFeels}</div>
                </div>

                {showStats ? (
                  <div className="hright">
                    {[
                      { icon: "💧", label: "Namliq", val: `${w.humidity}%` },
                      {
                        icon: "💨",
                        label: "Shamol",
                        val: `${w.windSpeed} km/h`,
                      },
                      {
                        icon: "👁️",
                        label: "Ko'rinish",
                        val: `${w.visibility} km`,
                      },
                      { icon: "🔵", label: "Bosim", val: `${w.pressure}` },
                      { icon: "☀️", label: "UV", val: `${w.uvIndex}` },
                    ].map((s) => (
                      <div key={s.label} className="spill">
                        <div className="si">{s.icon}</div>
                        <div className="sv">{s.val}</div>
                        <div className="sn">{s.label}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="no-stats">
                    <div className="no-stats-inner">
                      <div
                        style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}
                      >
                        {day?.icon}
                      </div>
                      <div
                        style={{
                          fontSize: "2rem",
                          fontWeight: 700,
                          color: "#fff",
                          fontFamily: "'DM Mono',monospace",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {day?.min}° — {day?.max}°
                      </div>
                      <div style={{ color: "#6a8099" }}>{day?.condition}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 7-day */}
            <div className="card">
              <div className="ci">
                <div className="clabel">7 Kunlik Prognoz</div>
                {w.daily.map((d, i) => (
                  <div
                    key={i}
                    className={`frow${selectedDay === i ? " sel" : ""}`}
                    onClick={() => setSelectedDay(i)}
                  >
                    <span className={`fday${i === 0 ? " td" : ""}`}>
                      {d.day}
                    </span>
                    <span className="fic">{d.icon}</span>
                    <span className="fcond">{d.condition}</span>
                    <div className="ftemps">
                      <span className="fmin">{d.min}°</span>
                      <span className="fmax">{d.max}°</span>
                    </div>
                    <span className="farr">
                      {selectedDay === i ? "▲" : "›"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hourly */}
            <div className="card">
              <div className="ci">
                <div className="clabel">Soatlik Prognoz</div>
                <div className="hscroll">
                  {w.hourly.map((h, i) => (
                    <div key={i} className={`hpill${i === 0 ? " now" : ""}`}>
                      <div className="htime">{i === 0 ? "Hozir" : h.time}</div>
                      <div className="hem">{h.icon}</div>
                      <div className="htp">{h.temp}°</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="card empty">
            Ma'lumot yuklanmadi. Internet aloqasini tekshiring.
          </div>
        )}
      </div>
    </div>
  );
}
