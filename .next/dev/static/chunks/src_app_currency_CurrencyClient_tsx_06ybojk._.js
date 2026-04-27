(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/currency/CurrencyClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CurrencyClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function CurrencyClient({ data }) {
    _s();
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("1");
    const [baseCurrency, setBaseCurrency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("USD");
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CurrencyClient.useMemo[filtered]": ()=>{
            if (!data) return [];
            return data.rates.filter({
                "CurrencyClient.useMemo[filtered]": (r)=>r.code.toLowerCase().includes(search.toLowerCase()) || r.name.toLowerCase().includes(search.toLowerCase())
            }["CurrencyClient.useMemo[filtered]"]);
        }
    }["CurrencyClient.useMemo[filtered]"], [
        data,
        search
    ]);
    const baseRate = data?.rates.find((r)=>r.code === baseCurrency)?.rate || 1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            paddingTop: "88px",
            minHeight: "100vh",
            background: "#f5f6f8"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
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
      `
            }, void 0, false, {
                fileName: "[project]/src/app/currency/CurrencyClient.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wr",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "ptitle",
                        children: "💱 Valyuta Kurslari"
                    }, void 0, false, {
                        fileName: "[project]/src/app/currency/CurrencyClient.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "psub",
                        children: "O'zbekiston so'mi (UZS) asosida real vaqt valyuta kurslari"
                    }, void 0, false, {
                        fileName: "[project]/src/app/currency/CurrencyClient.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "conv-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "conv-label",
                                children: "Valyuta Konvertor"
                            }, void 0, false, {
                                fileName: "[project]/src/app/currency/CurrencyClient.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "conv-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "conv-field",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "field-label",
                                                children: "Miqdor"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/currency/CurrencyClient.tsx",
                                                lineNumber: 81,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                value: amount,
                                                onChange: (e)=>setAmount(e.target.value),
                                                className: "field-input"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/currency/CurrencyClient.tsx",
                                                lineNumber: 82,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/currency/CurrencyClient.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "conv-field",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "field-label",
                                                children: "Valyuta"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/currency/CurrencyClient.tsx",
                                                lineNumber: 90,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: baseCurrency,
                                                onChange: (e)=>setBaseCurrency(e.target.value),
                                                className: "field-select",
                                                children: data?.rates.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: r.code,
                                                        children: [
                                                            r.flag,
                                                            " ",
                                                            r.code
                                                        ]
                                                    }, r.code, true, {
                                                        fileName: "[project]/src/app/currency/CurrencyClient.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/currency/CurrencyClient.tsx",
                                                lineNumber: 91,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/currency/CurrencyClient.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "conv-result",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "result-label",
                                                children: "= O'zbek so'mi"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/currency/CurrencyClient.tsx",
                                                lineNumber: 104,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "result-val",
                                                        children: data ? (parseFloat(amount || "0") * baseRate).toLocaleString("uz-UZ") : "—"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/currency/CurrencyClient.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "result-unit",
                                                        children: "UZS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/currency/CurrencyClient.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/currency/CurrencyClient.tsx",
                                                lineNumber: 105,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/currency/CurrencyClient.tsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/currency/CurrencyClient.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/currency/CurrencyClient.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "search-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "search-icon",
                                children: "🔍"
                            }, void 0, false, {
                                fileName: "[project]/src/app/currency/CurrencyClient.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Valyuta qidirish...",
                                value: search,
                                onChange: (e)=>setSearch(e.target.value),
                                className: "search-input"
                            }, void 0, false, {
                                fileName: "[project]/src/app/currency/CurrencyClient.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/currency/CurrencyClient.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    data ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rates-grid",
                                children: filtered.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `rate-card${baseCurrency === r.code ? " active" : ""}`,
                                        onClick: ()=>setBaseCurrency(r.code),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rc-top",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rc-left",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "rc-flag",
                                                                children: r.flag
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/currency/CurrencyClient.tsx",
                                                                lineNumber: 143,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "rc-code",
                                                                        children: r.code
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/currency/CurrencyClient.tsx",
                                                                        lineNumber: 145,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "rc-name",
                                                                        children: r.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/currency/CurrencyClient.tsx",
                                                                        lineNumber: 146,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/currency/CurrencyClient.tsx",
                                                                lineNumber: 144,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/currency/CurrencyClient.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `rc-change${r.change >= 0 ? " up" : " dn"}`,
                                                        children: [
                                                            r.change >= 0 ? "▲" : "▼",
                                                            " ",
                                                            Math.abs(r.change).toFixed(2),
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/currency/CurrencyClient.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/currency/CurrencyClient.tsx",
                                                lineNumber: 141,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rc-rate",
                                                children: r.rate.toLocaleString()
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/currency/CurrencyClient.tsx",
                                                lineNumber: 156,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rc-sub",
                                                children: [
                                                    "1 ",
                                                    r.code,
                                                    " = ",
                                                    r.rate.toLocaleString(),
                                                    " UZS"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/currency/CurrencyClient.tsx",
                                                lineNumber: 157,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rc-bar",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rc-bar-fill"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/currency/CurrencyClient.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/currency/CurrencyClient.tsx",
                                                lineNumber: 160,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, r.code, true, {
                                        fileName: "[project]/src/app/currency/CurrencyClient.tsx",
                                        lineNumber: 136,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/currency/CurrencyClient.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "footer-note",
                                children: [
                                    "Oxirgi yangilanish: ",
                                    data.updatedAt,
                                    " · Manba: Exchange Rate API"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/currency/CurrencyClient.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "empty",
                        children: "Ma'lumot yuklanmadi. Internet aloqasini tekshiring."
                    }, void 0, false, {
                        fileName: "[project]/src/app/currency/CurrencyClient.tsx",
                        lineNumber: 171,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/currency/CurrencyClient.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/currency/CurrencyClient.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(CurrencyClient, "MJBmVXTzWhxRFHiYa0CH/gx/YdM=");
_c = CurrencyClient;
var _c;
__turbopack_context__.k.register(_c, "CurrencyClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_currency_CurrencyClient_tsx_06ybojk._.js.map