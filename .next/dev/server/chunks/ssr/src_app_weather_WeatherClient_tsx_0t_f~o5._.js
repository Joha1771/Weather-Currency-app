module.exports = [
"[project]/src/app/weather/WeatherClient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WeatherClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function WeatherClient({ cities }) {
    const [selectedCity, setSelectedCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [selectedDay, setSelectedDay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const w = cities[selectedCity].data;
    const day = w ? w.daily[selectedDay] : null;
    // For the hero block: if today selected show current data, else show day forecast
    const heroTemp = selectedDay === 0 ? w?.temp : day?.max;
    const heroIcon = selectedDay === 0 ? w?.icon : day?.icon;
    const heroCond = selectedDay === 0 ? w?.condition : day?.condition;
    const heroFeels = selectedDay === 0 ? `Seziladi: ${w?.feelsLike}°C` : `Min: ${day?.min}° · Max: ${day?.max}°`;
    const showStats = selectedDay === 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            paddingTop: "88px",
            minHeight: "100vh",
            background: "#f5f6f8"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
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
      `
            }, void 0, false, {
                fileName: "[project]/src/app/weather/WeatherClient.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wr",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "ptitle",
                        children: "🌤 Ob-havo"
                    }, void 0, false, {
                        fileName: "[project]/src/app/weather/WeatherClient.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "psub",
                        children: "O'zbekiston shaharlari bo'yicha real vaqt ob-havosi"
                    }, void 0, false, {
                        fileName: "[project]/src/app/weather/WeatherClient.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ctabs",
                        children: cities.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setSelectedCity(i);
                                    setSelectedDay(0);
                                },
                                className: `ctab${selectedCity === i ? " on" : ""}`,
                                children: [
                                    c.flag,
                                    " ",
                                    c.name,
                                    c.data && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "tbadge",
                                        children: [
                                            c.data.temp,
                                            "°"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/weather/WeatherClient.tsx",
                                        lineNumber: 112,
                                        columnNumber: 26
                                    }, this)
                                ]
                            }, c.name, true, {
                                fileName: "[project]/src/app/weather/WeatherClient.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/weather/WeatherClient.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    w ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card hero span2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hi",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hleft",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hday-badge",
                                                    children: selectedDay === 0 ? `${w.city} · Hozir` : `${w.city} · ${day?.day}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/weather/WeatherClient.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hrow",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "hicon",
                                                            children: heroIcon
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/weather/WeatherClient.tsx",
                                                            lineNumber: 129,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "htemp",
                                                            children: [
                                                                heroTemp,
                                                                "°"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/weather/WeatherClient.tsx",
                                                            lineNumber: 130,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/weather/WeatherClient.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hcond",
                                                    children: heroCond
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/weather/WeatherClient.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hfeel",
                                                    children: heroFeels
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/weather/WeatherClient.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/weather/WeatherClient.tsx",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, this),
                                        showStats ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hright",
                                            children: [
                                                {
                                                    icon: "💧",
                                                    label: "Namliq",
                                                    val: `${w.humidity}%`
                                                },
                                                {
                                                    icon: "💨",
                                                    label: "Shamol",
                                                    val: `${w.windSpeed} km/h`
                                                },
                                                {
                                                    icon: "👁️",
                                                    label: "Ko'rinish",
                                                    val: `${w.visibility} km`
                                                },
                                                {
                                                    icon: "🔵",
                                                    label: "Bosim",
                                                    val: `${w.pressure}`
                                                },
                                                {
                                                    icon: "☀️",
                                                    label: "UV",
                                                    val: `${w.uvIndex}`
                                                }
                                            ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "spill",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "si",
                                                            children: s.icon
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/weather/WeatherClient.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "sv",
                                                            children: s.val
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/weather/WeatherClient.tsx",
                                                            lineNumber: 155,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "sn",
                                                            children: s.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/weather/WeatherClient.tsx",
                                                            lineNumber: 156,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, s.label, true, {
                                                    fileName: "[project]/src/app/weather/WeatherClient.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/weather/WeatherClient.tsx",
                                            lineNumber: 137,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "no-stats",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "no-stats-inner",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "2.5rem",
                                                            marginBottom: "0.5rem"
                                                        },
                                                        children: day?.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/weather/WeatherClient.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "2rem",
                                                            fontWeight: 700,
                                                            color: "#fff",
                                                            fontFamily: "'DM Mono',monospace",
                                                            marginBottom: "0.25rem"
                                                        },
                                                        children: [
                                                            day?.min,
                                                            "° — ",
                                                            day?.max,
                                                            "°"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/weather/WeatherClient.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            color: "#6a8099"
                                                        },
                                                        children: day?.condition
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/weather/WeatherClient.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/weather/WeatherClient.tsx",
                                                lineNumber: 162,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/weather/WeatherClient.tsx",
                                            lineNumber: 161,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/weather/WeatherClient.tsx",
                                    lineNumber: 121,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/weather/WeatherClient.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ci",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "clabel",
                                            children: "7 Kunlik Prognoz"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/weather/WeatherClient.tsx",
                                            lineNumber: 189,
                                            columnNumber: 17
                                        }, this),
                                        w.daily.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `frow${selectedDay === i ? " sel" : ""}`,
                                                onClick: ()=>setSelectedDay(i),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `fday${i === 0 ? " td" : ""}`,
                                                        children: d.day
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/weather/WeatherClient.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "fic",
                                                        children: d.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/weather/WeatherClient.tsx",
                                                        lineNumber: 199,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "fcond",
                                                        children: d.condition
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/weather/WeatherClient.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "ftemps",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "fmin",
                                                                children: [
                                                                    d.min,
                                                                    "°"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/weather/WeatherClient.tsx",
                                                                lineNumber: 202,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "fmax",
                                                                children: [
                                                                    d.max,
                                                                    "°"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/weather/WeatherClient.tsx",
                                                                lineNumber: 203,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/weather/WeatherClient.tsx",
                                                        lineNumber: 201,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "farr",
                                                        children: selectedDay === i ? "▲" : "›"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/weather/WeatherClient.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/src/app/weather/WeatherClient.tsx",
                                                lineNumber: 191,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/weather/WeatherClient.tsx",
                                    lineNumber: 188,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/weather/WeatherClient.tsx",
                                lineNumber: 187,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ci",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "clabel",
                                            children: "Soatlik Prognoz"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/weather/WeatherClient.tsx",
                                            lineNumber: 216,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hscroll",
                                            children: w.hourly.map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `hpill${i === 0 ? " now" : ""}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "htime",
                                                            children: i === 0 ? "Hozir" : h.time
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/weather/WeatherClient.tsx",
                                                            lineNumber: 220,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "hem",
                                                            children: h.icon
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/weather/WeatherClient.tsx",
                                                            lineNumber: 221,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "htp",
                                                            children: [
                                                                h.temp,
                                                                "°"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/weather/WeatherClient.tsx",
                                                            lineNumber: 222,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/src/app/weather/WeatherClient.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/weather/WeatherClient.tsx",
                                            lineNumber: 217,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/weather/WeatherClient.tsx",
                                    lineNumber: 215,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/weather/WeatherClient.tsx",
                                lineNumber: 214,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/weather/WeatherClient.tsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card empty",
                        children: "Ma'lumot yuklanmadi. Internet aloqasini tekshiring."
                    }, void 0, false, {
                        fileName: "[project]/src/app/weather/WeatherClient.tsx",
                        lineNumber: 230,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/weather/WeatherClient.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/weather/WeatherClient.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_app_weather_WeatherClient_tsx_0t_f~o5._.js.map