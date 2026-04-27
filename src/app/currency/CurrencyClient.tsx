"use client";
import { useState, useMemo } from "react";
import type { CurrencyData } from "@/lib/currency";

export default function CurrencyClient({
  data,
}: {
  data: CurrencyData | null;
}) {
  const [search, setSearch] = useState("");
  const [amount, setAmount] = useState("1");
  const [baseCurrency, setBaseCurrency] = useState("USD");

  const filtered = useMemo(() => {
    if (!data) return [];
    return data.rates.filter(
      (r) =>
        r.code.toLowerCase().includes(search.toLowerCase()) ||
        r.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [data, search]);

  const baseRate = data?.rates.find((r) => r.code === baseCurrency)?.rate || 1;

  return (
    <div
      style={{ paddingTop: "88px", minHeight: "100vh", background: "#f5f6f8" }}
    >
      <style>{`
        * { box-sizing: border-box; font-family: 'DM Sans', system-ui, sans-serif; }
        .wr { max-width: 1080px; margin: 0 auto; padding: 2rem 1.5rem 5rem; }
        .ptitle { font-size: clamp(1.5rem,3vw,1.9rem); font-weight:700; color:#111820; letter-spacing:-0.03em; margin-bottom:0.2rem; }
        .psub { font-size:0.83rem; color:#9aa3ad; margin-bottom:1.8rem; }
        .conv-card { background:#fff; border-radius:15px; border:1.5px solid #e6eaed; padding:1.5rem; margin-bottom:1.5rem; }
        .conv-label { font-size:0.68rem; font-weight:700; letter-spacing:0.09em; text-transform:uppercase; color:#9aa3ad; margin-bottom:1.1rem; }
        .conv-row { display:flex; gap:0.85rem; flex-wrap:wrap; align-items:flex-end; }
        .conv-field { flex:1; min-width:130px; }
        .field-label { display:block; font-size:0.78rem; color:#7a8799; font-weight:500; margin-bottom:5px; }
        .field-input { width:100%; padding:10px 13px; border-radius:9px; border:1.5px solid #e6eaed; background:#f9fafb; color:#111820; font-size:1rem; font-family:'DM Mono',monospace; font-weight:600; outline:none; transition:border-color 0.13s; }
        .field-input:focus { border-color:#aab3bd; }
        .field-select { width:100%; padding:10px 13px; border-radius:9px; border:1.5px solid #e6eaed; background:#f9fafb; color:#111820; font-size:0.9rem; outline:none; cursor:pointer; }
        .conv-result { flex:2; min-width:180px; padding:10px 14px; border-radius:9px; background:#f5f6f8; border:1.5px solid #e6eaed; }
        .result-label { font-size:0.75rem; color:#9aa3ad; margin-bottom:3px; }
        .result-val { font-family:'DM Mono',monospace; font-size:1.3rem; font-weight:700; color:#111820; }
        .result-unit { font-size:0.78rem; color:#9aa3ad; margin-left:5px; }
        .search-wrap { position:relative; margin-bottom:1.3rem; }
        .search-icon { position:absolute; left:12px; top:50%; transform:translateY(-50%); color:#9aa3ad; font-size:0.9rem; pointer-events:none; }
        .search-input { width:100%; padding:10px 14px 10px 36px; border-radius:10px; border:1.5px solid #e6eaed; background:#fff; color:#111820; font-size:0.88rem; outline:none; transition:border-color 0.13s; font-family:inherit; }
        .search-input:focus { border-color:#aab3bd; }
        .rates-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(260px,1fr)); gap:0.85rem; }
        .rate-card { background:#fff; border-radius:13px; border:1.5px solid #e6eaed; padding:1.3rem; cursor:pointer; transition:border-color 0.13s, box-shadow 0.13s; }
        .rate-card:hover { border-color:#aab3bd; box-shadow:0 2px 12px rgba(0,0,0,0.06); }
        .rate-card.active { border-color:#111820; }
        .rc-top { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.85rem; }
        .rc-left { display:flex; align-items:center; gap:9px; }
        .rc-flag { font-size:1.7rem; }
        .rc-code { font-weight:700; font-size:0.92rem; color:#111820; }
        .rc-name { font-size:0.72rem; color:#9aa3ad; margin-top:1px; }
        .rc-change { padding:3px 9px; border-radius:99px; font-size:0.72rem; font-weight:600; }
        .rc-change.up { background:#e8f5e9; color:#2e7d32; border:1px solid #c8e6c9; }
        .rc-change.dn { background:#fde8e8; color:#c62828; border:1px solid #f5c6c6; }
        .rc-rate { font-family:'DM Mono',monospace; font-size:1.6rem; font-weight:700; color:#111820; margin-bottom:3px; }
        .rc-sub { font-size:0.73rem; color:#9aa3ad; }
        .rc-bar { margin-top:10px; height:3px; border-radius:2px; background:#f0f2f5; overflow:hidden; }
        .rc-bar-fill { height:100%; width:60%; background:#111820; border-radius:2px; opacity:0.15; }
        .empty { background:#fff; border-radius:15px; border:1.5px solid #e6eaed; padding:3rem; text-align:center; color:#9aa3ad; }
        .footer-note { margin-top:1.5rem; text-align:center; color:#9aa3ad; font-size:0.78rem; }
      `}</style>

      <div className="wr">
        <h1 className="ptitle">💱 Valyuta Kurslari</h1>
        <p className="psub">
          O'zbekiston so'mi (UZS) asosida real vaqt valyuta kurslari
        </p>

        {/* Converter */}
        <div className="conv-card">
          <div className="conv-label">Valyuta Konvertor</div>
          <div className="conv-row">
            <div className="conv-field">
              <label className="field-label">Miqdor</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="field-input"
              />
            </div>
            <div className="conv-field">
              <label className="field-label">Valyuta</label>
              <select
                value={baseCurrency}
                onChange={(e) => setBaseCurrency(e.target.value)}
                className="field-select"
              >
                {data?.rates.map((r) => (
                  <option key={r.code} value={r.code}>
                    {r.flag} {r.code}
                  </option>
                ))}
              </select>
            </div>
            <div className="conv-result">
              <div className="result-label">= O'zbek so'mi</div>
              <div>
                <span className="result-val">
                  {data
                    ? (parseFloat(amount || "0") * baseRate).toLocaleString(
                        "uz-UZ",
                      )
                    : "—"}
                </span>
                <span className="result-unit">UZS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="search-wrap">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Valyuta qidirish..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Grid */}
        {data ? (
          <>
            <div className="rates-grid">
              {filtered.map((r) => (
                <div
                  key={r.code}
                  className={`rate-card${baseCurrency === r.code ? " active" : ""}`}
                  onClick={() => setBaseCurrency(r.code)}
                >
                  <div className="rc-top">
                    <div className="rc-left">
                      <span className="rc-flag">{r.flag}</span>
                      <div>
                        <div className="rc-code">{r.code}</div>
                        <div className="rc-name">{r.name}</div>
                      </div>
                    </div>
                    <div
                      className={`rc-change${r.change >= 0 ? " up" : " dn"}`}
                    >
                      {r.change >= 0 ? "▲" : "▼"}{" "}
                      {Math.abs(r.change).toFixed(2)}%
                    </div>
                  </div>
                  <div className="rc-rate">{r.rate.toLocaleString()}</div>
                  <div className="rc-sub">
                    1 {r.code} = {r.rate.toLocaleString()} UZS
                  </div>
                  <div className="rc-bar">
                    <div className="rc-bar-fill" />
                  </div>
                </div>
              ))}
            </div>
            <div className="footer-note">
              Oxirgi yangilanish: {data.updatedAt} · Manba: Exchange Rate API
            </div>
          </>
        ) : (
          <div className="empty">
            Ma'lumot yuklanmadi. Internet aloqasini tekshiring.
          </div>
        )}
      </div>
    </div>
  );
}
