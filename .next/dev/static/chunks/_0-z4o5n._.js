(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/date-filter-utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_DATE_RANGE",
    ()=>DEFAULT_DATE_RANGE,
    "getMonthRatio",
    ()=>getMonthRatio,
    "getNormalizedDateRange",
    ()=>getNormalizedDateRange,
    "scaleDisplayValue",
    ()=>scaleDisplayValue,
    "sliceMonths",
    ()=>sliceMonths,
    "sliceWeeks",
    ()=>sliceWeeks
]);
const DEFAULT_DATE_RANGE = {
    startDate: "2025-01-12",
    endDate: "2025-12-31"
};
function getMonthIndex(value) {
    const parts = value.split("-");
    if (parts.length < 2) {
        return null;
    }
    const month = Number(parts[1]);
    if (!Number.isFinite(month) || month < 1 || month > 12) {
        return null;
    }
    return month - 1;
}
function getNormalizedDateRange(range) {
    const startMonth = getMonthIndex(range.startDate) ?? 0;
    const endMonth = getMonthIndex(range.endDate) ?? 11;
    return {
        startMonth: Math.max(0, Math.min(startMonth, endMonth)),
        endMonth: Math.min(11, Math.max(startMonth, endMonth))
    };
}
function getMonthRatio(range) {
    const { startMonth, endMonth } = getNormalizedDateRange(range);
    return (endMonth - startMonth + 1) / 12;
}
function sliceMonths(values, range) {
    const { startMonth, endMonth } = getNormalizedDateRange(range);
    return values.slice(startMonth, endMonth + 1);
}
function sliceWeeks(values, range) {
    const ratio = getMonthRatio(range);
    const count = Math.max(1, Math.round(values.length * ratio));
    return values.slice(0, count);
}
function scaleDisplayValue(raw, ratio) {
    if (raw.includes("%")) {
        return raw;
    }
    const match = raw.match(/^([^0-9-]*)([\d,.]+)([KMB]?)(.*)$/i);
    if (!match) {
        return raw;
    }
    const [, prefix, numberPart, suffix, tail] = match;
    const numeric = Number(numberPart.replace(/,/g, ""));
    if (!Number.isFinite(numeric)) {
        return raw;
    }
    const scaled = numeric * ratio;
    const normalizedSuffix = suffix.toUpperCase();
    let formatted;
    if (normalizedSuffix === "M" || normalizedSuffix === "K" || normalizedSuffix === "B") {
        formatted = scaled >= 10 ? scaled.toFixed(0) : scaled.toFixed(1);
        formatted = formatted.replace(/\.0$/, "");
    } else if (numeric >= 1000 || numberPart.includes(",")) {
        formatted = Math.round(scaled).toLocaleString("en-US");
    } else if (numeric >= 10) {
        formatted = Math.round(scaled).toString();
    } else {
        formatted = scaled.toFixed(1).replace(/\.0$/, "");
    }
    return `${prefix}${formatted}${suffix}${tail}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/dashboard-shell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardShell",
    ()=>DashboardShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const CloseIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M5.64 4.22 12 10.59l6.36-6.37 1.42 1.42L13.41 12l6.37 6.36-1.42 1.42L12 13.41l-6.36 6.37-1.42-1.42L10.59 12 4.22 5.64Z"
        }, void 0, false, {
            fileName: "[project]/components/dashboard-shell.tsx",
            lineNumber: 26,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/dashboard-shell.tsx",
        lineNumber: 25,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = CloseIcon;
const IntroIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2.75a9.25 9.25 0 1 0 9.25 9.25A9.26 9.26 0 0 0 12 2.75Zm0 16.5a7.25 7.25 0 1 1 7.25-7.25A7.26 7.26 0 0 1 12 19.25Zm-.9-10.1h1.8v6.15h-1.8Zm.9-3.1a1.15 1.15 0 1 1-1.15 1.15A1.15 1.15 0 0 1 12 6.05Z"
        }, void 0, false, {
            fileName: "[project]/components/dashboard-shell.tsx",
            lineNumber: 32,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/dashboard-shell.tsx",
        lineNumber: 31,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = IntroIcon;
const OverviewIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M3.5 4.5h17v15h-17Zm1.5 1.5V18h14V6Zm2 9h2v2H7Zm0-4h2v3H7Zm4-3h2v7h-2Zm4 5h2v2h-2Zm0-3h2v2h-2Z"
        }, void 0, false, {
            fileName: "[project]/components/dashboard-shell.tsx",
            lineNumber: 38,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/dashboard-shell.tsx",
        lineNumber: 37,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = OverviewIcon;
const ConditionIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4 19h2v-5H4Zm4 0h2v-9H8Zm4 0h2v-3h-2Zm4 0h2V9h-2ZM5 11l3-2 4 2 6-5 1.2 1.6L12 13l-4-2-2.9 1.93Z"
        }, void 0, false, {
            fileName: "[project]/components/dashboard-shell.tsx",
            lineNumber: 44,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/dashboard-shell.tsx",
        lineNumber: 43,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = ConditionIcon;
const CampaignIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4 4h10l1.5 2H20v11h-6l-1.5-2H4Zm2 2v7h5.5l1.5 2H18V8h-3.5L13 6Zm1 10h10v2H7Zm10.08-9.8 2.12-2.12 1.42 1.42-2.12 2.12Z"
        }, void 0, false, {
            fileName: "[project]/components/dashboard-shell.tsx",
            lineNumber: 50,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/dashboard-shell.tsx",
        lineNumber: 49,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = CampaignIcon;
function DashboardShell({ children, pageClassName, title, breadcrumbCurrent, breadcrumbTrail, entityTabs, activeEntityTab, activeNav, defaultNavOpen = false, headerTabsClassName, bodyClassName, eventCalendarHref = "/campaign-calendar", eventCalendarActive = false, activeConditionStage }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [navOpen, setNavOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultNavOpen);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardShell.useEffect": ()=>{
            setNavOpen(false);
        }
    }["DashboardShell.useEffect"], [
        pathname
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardShell.useEffect": ()=>{
            if (!navOpen) {
                return;
            }
            const handleKeyDown = {
                "DashboardShell.useEffect.handleKeyDown": (event)=>{
                    if (event.key === "Escape") {
                        setNavOpen(false);
                    }
                }
            }["DashboardShell.useEffect.handleKeyDown"];
            window.addEventListener("keydown", handleKeyDown);
            return ({
                "DashboardShell.useEffect": ()=>window.removeEventListener("keydown", handleKeyDown)
            })["DashboardShell.useEffect"];
        }
    }["DashboardShell.useEffect"], [
        navOpen
    ]);
    const breadcrumbItems = breadcrumbTrail?.length ? breadcrumbTrail : [
        {
            label: breadcrumbCurrent
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: `${pageClassName} ${navOpen ? "navOpen" : ""}`,
        children: [
            navOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "sideNavBackdrop",
                        "aria-label": "Close navigation",
                        onClick: ()=>setNavOpen(false),
                        type: "button"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard-shell.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "sideNav",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sideNavBody",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "navSectionLabel",
                                    children: "Dashboard"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard-shell.tsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "navSection",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/introduction",
                                            className: `sideNavItem ${activeNav === "introduction" ? "active" : ""}`,
                                            onClick: ()=>setNavOpen(false),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sideNavIcon",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IntroIcon, {}, void 0, false, {
                                                        fileName: "[project]/components/dashboard-shell.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Introduction"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/dashboard-shell.tsx",
                                            lineNumber: 110,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/overview",
                                            className: `sideNavItem ${activeNav === "overview" ? "active" : ""}`,
                                            onClick: ()=>setNavOpen(false),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sideNavIcon",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OverviewIcon, {}, void 0, false, {
                                                        fileName: "[project]/components/dashboard-shell.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Overview"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/dashboard-shell.tsx",
                                            lineNumber: 120,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/dashboard-shell.tsx",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "navSectionLabel",
                                    children: "Conditions"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard-shell.tsx",
                                    lineNumber: 132,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "navSection navTreeSection",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/lifestage-overview/acquire",
                                            className: `sideNavItem groupHeader ${activeNav === "lifestage" ? "active" : ""}`,
                                            onClick: ()=>setNavOpen(false),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sideNavIcon",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConditionIcon, {}, void 0, false, {
                                                        fileName: "[project]/components/dashboard-shell.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Condition Overview"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "groupCaret",
                                                    children: "▾"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/dashboard-shell.tsx",
                                            lineNumber: 134,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "sideBranch",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/lifestage-overview/acquire",
                                                    className: activeConditionStage === "acquire" ? "active" : "",
                                                    onClick: ()=>setNavOpen(false),
                                                    children: "Acquire"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/lifestage-overview/build",
                                                    className: activeConditionStage === "build" ? "active" : "",
                                                    onClick: ()=>setNavOpen(false),
                                                    children: "Build"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/lifestage-overview/contain",
                                                    className: activeConditionStage === "contain" ? "active" : "",
                                                    onClick: ()=>setNavOpen(false),
                                                    children: "Contain"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/dashboard-shell.tsx",
                                            lineNumber: 145,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/dashboard-shell.tsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "navSectionLabel",
                                    children: "Campaigns"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard-shell.tsx",
                                    lineNumber: 171,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "navSection",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/campaign-sub-condition",
                                            className: `sideNavItem ${activeNav === "subCondition" ? "active" : ""}`,
                                            onClick: ()=>setNavOpen(false),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sideNavIcon",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CampaignIcon, {}, void 0, false, {
                                                        fileName: "[project]/components/dashboard-shell.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Campaign Sub Condition"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/dashboard-shell.tsx",
                                            lineNumber: 173,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/campaign-details",
                                            className: `sideNavItem ${activeNav === "campaignDetails" ? "active" : ""}`,
                                            onClick: ()=>setNavOpen(false),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sideNavIcon",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CampaignIcon, {}, void 0, false, {
                                                        fileName: "[project]/components/dashboard-shell.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Campaign Details"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/dashboard-shell.tsx",
                                            lineNumber: 183,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/campaign-calendar",
                                            className: `sideNavItem ${activeNav === "calendar" ? "active" : ""}`,
                                            onClick: ()=>setNavOpen(false),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sideNavIcon",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CampaignIcon, {}, void 0, false, {
                                                        fileName: "[project]/components/dashboard-shell.tsx",
                                                        lineNumber: 199,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Campaign Calendar"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/dashboard-shell.tsx",
                                            lineNumber: 193,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/dashboard-shell.tsx",
                                    lineNumber: 172,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dashboard-shell.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard-shell.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `overviewCanvas ${navOpen ? "isBlurred" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "introHeader overviewHeader",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "introBrandArea",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `menuButton ${navOpen ? "menuButtonOpen" : ""}`,
                                        "aria-label": navOpen ? "Close navigation" : "Open navigation",
                                        onClick: ()=>setNavOpen((value)=>!value),
                                        type: "button",
                                        children: navOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CloseIcon, {}, void 0, false, {
                                            fileName: "[project]/components/dashboard-shell.tsx",
                                            lineNumber: 219,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard-shell.tsx",
                                        lineNumber: 212,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "introLogoLockup",
                                        "aria-label": "HVM Health Value Management",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "introLogoWord",
                                                children: "HVM"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard-shell.tsx",
                                                lineNumber: 230,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "introLogoText",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "HEALTH"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboard-shell.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "VALUE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboard-shell.tsx",
                                                        lineNumber: 233,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "MANAGEMENT"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboard-shell.tsx",
                                                        lineNumber: 234,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dashboard-shell.tsx",
                                                lineNumber: 231,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dashboard-shell.tsx",
                                        lineNumber: 229,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "introTitleWrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                children: title
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard-shell.tsx",
                                                lineNumber: 239,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/",
                                                        children: "Home"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboard-shell.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 17
                                                    }, this),
                                                    breadcrumbItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "→"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                                    lineNumber: 244,
                                                                    columnNumber: 21
                                                                }, this),
                                                                item.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: item.href,
                                                                    children: item.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                                    lineNumber: 245,
                                                                    columnNumber: 34
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: item.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                                    lineNumber: 245,
                                                                    columnNumber: 79
                                                                }, this)
                                                            ]
                                                        }, item.label, true, {
                                                            fileName: "[project]/components/dashboard-shell.tsx",
                                                            lineNumber: 243,
                                                            columnNumber: 19
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dashboard-shell.tsx",
                                                lineNumber: 240,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dashboard-shell.tsx",
                                        lineNumber: 238,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dashboard-shell.tsx",
                                lineNumber: 211,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "introHeaderActions",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `entityTabs ${headerTabsClassName ?? ""}`,
                                        "aria-label": "Entity tabs",
                                        children: entityTabs.map((pill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: pill === activeEntityTab ? "entityTab active" : "entityTab",
                                                type: "button",
                                                children: pill
                                            }, pill, false, {
                                                fileName: "[project]/components/dashboard-shell.tsx",
                                                lineNumber: 255,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard-shell.tsx",
                                        lineNumber: 253,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: eventCalendarHref,
                                        className: `calendarButton ${eventCalendarActive ? "calendarButtonActive" : ""}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": "true",
                                                children: "🗓"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard-shell.tsx",
                                                lineNumber: 269,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Event Calendar"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard-shell.tsx",
                                                lineNumber: 270,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dashboard-shell.tsx",
                                        lineNumber: 265,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dashboard-shell.tsx",
                                lineNumber: 252,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard-shell.tsx",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: `${bodyClassName} dashboardBodyArea ${navOpen ? "isBlurred" : ""}`,
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard-shell.tsx",
                        lineNumber: 275,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard-shell.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboard-shell.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_s(DashboardShell, "3gJc8WqxEuqkJmNJhB/v4gnUUZU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c5 = DashboardShell;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "CloseIcon");
__turbopack_context__.k.register(_c1, "IntroIcon");
__turbopack_context__.k.register(_c2, "OverviewIcon");
__turbopack_context__.k.register(_c3, "ConditionIcon");
__turbopack_context__.k.register(_c4, "CampaignIcon");
__turbopack_context__.k.register(_c5, "DashboardShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/export-visuals.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExportBarValueChart",
    ()=>ExportBarValueChart,
    "ExportBubbleChart",
    ()=>ExportBubbleChart,
    "ExportBubbleSegments",
    ()=>ExportBubbleSegments,
    "ExportDonutChart",
    ()=>ExportDonutChart,
    "ExportEntitiesSummary",
    ()=>ExportEntitiesSummary,
    "ExportFunnelChart",
    ()=>ExportFunnelChart,
    "ExportHeatmap",
    ()=>ExportHeatmap,
    "ExportLabeledDonutChart",
    ()=>ExportLabeledDonutChart,
    "ExportLineChart",
    ()=>ExportLineChart,
    "ExportMultiLineChart",
    ()=>ExportMultiLineChart,
    "ExportSankeyChart",
    ()=>ExportSankeyChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Funnel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$FunnelChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/FunnelChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$LabelList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/LabelList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/polar/Pie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/PieChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$Sankey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/Sankey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Scatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Scatter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ScatterChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/ScatterChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ZAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/ZAxis.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
function parseCompactAmount(raw) {
    const match = raw.replace(/,/g, "").match(/(\d+(?:\.\d+)?)\s*([KMB])?/i);
    if (!match) {
        return 0;
    }
    const base = Number(match[1]);
    const suffix = (match[2] ?? "").toUpperCase();
    if (suffix === "B") {
        return base * 1_000_000_000;
    }
    if (suffix === "M") {
        return base * 1_000_000;
    }
    if (suffix === "K") {
        return base * 1_000;
    }
    return base;
}
function formatCompactAmount(value) {
    if (value >= 1_000_000_000) {
        return `${(value / 1_000_000_000).toFixed(value >= 10_000_000_000 ? 0 : 1).replace(/\.0$/, "")}B`;
    }
    if (value >= 1_000_000) {
        return `${(value / 1_000_000).toFixed(value >= 10_000_000 ? 0 : 1).replace(/\.0$/, "")}M`;
    }
    if (value >= 1_000) {
        return `${(value / 1_000).toFixed(value >= 10_000 ? 0 : 1).replace(/\.0$/, "")}K`;
    }
    return `${Math.round(value)}`;
}
function BubbleTooltip({ active, payload }) {
    if (!active || !payload?.length) {
        return null;
    }
    const point = payload[0].payload;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "subConditionChartTooltip",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: point.label
            }, void 0, false, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    point.value,
                    "% conversion"
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_c = BubbleTooltip;
function BubbleShape(props) {
    const { cx = 0, cy = 0, payload } = props;
    if (!payload) {
        return null;
    }
    const radius = Math.max(payload.size / 3.2, 28);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: cx,
                cy: cy,
                r: radius,
                fill: `${payload.color}24`,
                stroke: payload.color,
                strokeWidth: 2
            }, void 0, false, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: cx,
                y: cy + 6,
                textAnchor: "middle",
                fill: payload.color,
                fontSize: "16",
                fontWeight: "700",
                children: [
                    payload.value,
                    "%"
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
_c1 = BubbleShape;
function FunnelTooltip({ active, payload }) {
    if (!active || !payload?.length) {
        return null;
    }
    const point = payload[0].payload;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "subConditionChartTooltip",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: point.label
            }, void 0, false, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    point.count,
                    " patients"
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    point.revenue,
                    " incremental revenue"
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
_c2 = FunnelTooltip;
function FunnelCenterLabel(props) {
    const { viewBox, payload } = props;
    if (!viewBox || !payload) {
        return null;
    }
    const x = (viewBox.x ?? 0) + (viewBox.width ?? 0) / 2;
    const y = (viewBox.y ?? 0) + (viewBox.height ?? 0) / 2;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
        x: x,
        y: y + 4,
        textAnchor: "middle",
        fill: "#35515f",
        fontSize: "12",
        fontWeight: "700",
        children: [
            payload.label,
            " · ",
            payload.count
        ]
    }, void 0, true, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 149,
        columnNumber: 5
    }, this);
}
_c3 = FunnelCenterLabel;
function SankeyTooltip({ active, payload }) {
    const point = payload?.[0]?.payload;
    if (!active || !point) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "subConditionChartTooltip",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: [
                    point.sourceLabel,
                    " to ",
                    point.targetLabel
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    formatCompactAmount(point.value ?? 0),
                    " patients"
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 169,
        columnNumber: 5
    }, this);
}
_c4 = SankeyTooltip;
function ExportLineChart({ values, max, color = "#2563EB", area = false, width = 280, height = 140, labels, showDots = true }) {
    _s();
    const gradientId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])().replace(/:/g, "");
    const p = 20;
    const x = (i)=>p + i / Math.max(values.length - 1, 1) * (width - p * 2);
    const y = (v)=>height - p - v / max * (height - p * 2);
    const path = values.map((v, i)=>`${i ? "L" : "M"}${x(i)} ${y(v)}`).join(" ");
    const areaPath = `${path} L ${x(values.length - 1)} ${height - p} L ${x(0)} ${height - p} Z`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "linechart",
        viewBox: `0 0 ${width} ${height}`,
        preserveAspectRatio: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: `lineArea-${gradientId}`,
                    x1: "0",
                    y1: "0",
                    x2: "0",
                    y2: "1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: color,
                            stopOpacity: "0.34"
                        }, void 0, false, {
                            fileName: "[project]/components/export-visuals.tsx",
                            lineNumber: 208,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "58%",
                            stopColor: color,
                            stopOpacity: "0.12"
                        }, void 0, false, {
                            fileName: "[project]/components/export-visuals.tsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: color,
                            stopOpacity: "0"
                        }, void 0, false, {
                            fileName: "[project]/components/export-visuals.tsx",
                            lineNumber: 210,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 207,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this),
            [
                0,
                1,
                2,
                3
            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    className: "grid-line",
                    x1: p,
                    y1: p + i * (height - p * 2) / 3,
                    x2: width - p,
                    y2: p + i * (height - p * 2) / 3
                }, i, false, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 214,
                    columnNumber: 9
                }, this)),
            area ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: areaPath,
                fill: `url(#lineArea-${gradientId})`
            }, void 0, false, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 223,
                columnNumber: 15
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: path,
                fill: "none",
                stroke: color,
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 224,
                columnNumber: 7
            }, this),
            showDots ? values.map((v, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: x(i),
                    cy: y(v),
                    r: "2.5",
                    fill: color
                }, i, false, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 226,
                    columnNumber: 32
                }, this)) : null,
            labels?.map((label, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    className: "tick",
                    x: x(i),
                    y: height - 5,
                    textAnchor: "middle",
                    children: label
                }, label, false, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 229,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 205,
        columnNumber: 5
    }, this);
}
_s(ExportLineChart, "xfMyHNFebGjSN1/YPqrD8z5EdLc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c5 = ExportLineChart;
function ExportMultiLineChart({ series, labels, colors, width = 280, height = 140 }) {
    _s1();
    const gradientSeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])().replace(/:/g, "");
    const p = 20;
    const maxY = Math.max(...series.flat(), 0) + 10;
    const x = (i)=>p + i / Math.max(labels.length - 1, 1) * (width - p * 2);
    const y = (v)=>height - p - v / maxY * (height - p * 2);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "linechart",
        viewBox: `0 0 ${width} ${height}`,
        preserveAspectRatio: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: colors.map((color, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: `multiLineArea-${gradientSeed}-${index}`,
                        x1: "0",
                        y1: "0",
                        x2: "0",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: color,
                                stopOpacity: "0.34"
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 260,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "58%",
                                stopColor: color,
                                stopOpacity: "0.12"
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 261,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: color,
                                stopOpacity: "0"
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 262,
                                columnNumber: 13
                            }, this)
                        ]
                    }, color + index, true, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 259,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 257,
                columnNumber: 7
            }, this),
            [
                0,
                1,
                2,
                3
            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    className: "grid-line",
                    x1: p,
                    y1: p + i * (height - p * 2) / 3,
                    x2: width - p,
                    y2: p + i * (height - p * 2) / 3
                }, i, false, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 267,
                    columnNumber: 9
                }, this)),
            series.map((row, rowIndex)=>{
                const d = row.map((v, i)=>`${i ? "L" : "M"}${x(i)} ${y(v)}`).join(" ");
                const areaD = `${d} L ${x(row.length - 1)} ${height - p} L ${x(0)} ${height - p} Z`;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: areaD,
                            fill: `url(#multiLineArea-${gradientSeed}-${rowIndex})`
                        }, void 0, false, {
                            fileName: "[project]/components/export-visuals.tsx",
                            lineNumber: 281,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: d,
                            fill: "none",
                            stroke: colors[rowIndex],
                            strokeWidth: "2"
                        }, void 0, false, {
                            fileName: "[project]/components/export-visuals.tsx",
                            lineNumber: 282,
                            columnNumber: 13
                        }, this)
                    ]
                }, rowIndex, true, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 280,
                    columnNumber: 11
                }, this);
            }),
            labels.map((label, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    className: "tick",
                    x: x(i),
                    y: height - 5,
                    textAnchor: "middle",
                    children: label
                }, label, false, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 287,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 256,
        columnNumber: 5
    }, this);
}
_s1(ExportMultiLineChart, "xfMyHNFebGjSN1/YPqrD8z5EdLc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c6 = ExportMultiLineChart;
function ExportBarValueChart({ values, labels, color = "#86EFAC", textColor = "#16A34A", max }) {
    const width = 280;
    const height = 140;
    const p = 20;
    const barW = (width - p * 2) / values.length - 6;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "linechart",
        viewBox: `0 0 ${width} ${height}`,
        preserveAspectRatio: "none",
        children: [
            [
                0,
                1,
                2,
                3
            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    className: "grid-line",
                    x1: p,
                    y1: p + i * (height - p * 2) / 3,
                    x2: width - p,
                    y2: p + i * (height - p * 2) / 3
                }, i, false, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 315,
                    columnNumber: 9
                }, this)),
            values.map((v, i)=>{
                const bx = p + i * ((width - p * 2) / values.length) + 3;
                const by = height - p - v / max * (height - p * 2);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: bx,
                            y: by,
                            width: barW,
                            height: height - p - by,
                            fill: color,
                            rx: "2"
                        }, void 0, false, {
                            fileName: "[project]/components/export-visuals.tsx",
                            lineNumber: 329,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: bx + barW / 2,
                            y: by - 3,
                            textAnchor: "middle",
                            fill: textColor,
                            fontSize: "8",
                            fontWeight: "600",
                            children: [
                                v,
                                "K"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/export-visuals.tsx",
                            lineNumber: 330,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            className: "tick",
                            x: bx + barW / 2,
                            y: height - 5,
                            textAnchor: "middle",
                            children: labels[i]
                        }, void 0, false, {
                            fileName: "[project]/components/export-visuals.tsx",
                            lineNumber: 333,
                            columnNumber: 13
                        }, this)
                    ]
                }, labels[i], true, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 328,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 313,
        columnNumber: 5
    }, this);
}
_c7 = ExportBarValueChart;
function ExportDonutChart({ data, centerValue, centerLabel }) {
    const cx = 75;
    const cy = 75;
    const r = 48;
    const sw = 16;
    let cum = 0;
    const slices = data.map((d)=>{
        const f = d.pct / 100;
        const sa = cum * 2 * Math.PI - Math.PI / 2;
        cum += f;
        const ea = cum * 2 * Math.PI - Math.PI / 2;
        const x1 = cx + r * Math.cos(sa);
        const y1 = cy + r * Math.sin(sa);
        const x2 = cx + r * Math.cos(ea);
        const y2 = cy + r * Math.sin(ea);
        const largeArc = f > 0.5 ? 1 : 0;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`,
            fill: "none",
            stroke: d.color,
            strokeWidth: sw
        }, d.label, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 369,
            columnNumber: 7
        }, this);
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "180",
                height: "150",
                viewBox: "0 0 180 150",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: cx,
                        cy: cy,
                        r: r,
                        fill: "none",
                        stroke: "#F1F5F9",
                        strokeWidth: sw
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 382,
                        columnNumber: 9
                    }, this),
                    slices,
                    centerLabel.map((line, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: cx,
                            y: cy - 6 + index * 10,
                            textAnchor: "middle",
                            fontSize: "7",
                            fill: "#94A3B8",
                            fontFamily: "Inter",
                            fontWeight: "500",
                            children: line
                        }, line, false, {
                            fileName: "[project]/components/export-visuals.tsx",
                            lineNumber: 385,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: cx,
                        y: cy + 18,
                        textAnchor: "middle",
                        fontSize: "16",
                        fontWeight: "700",
                        fill: "#1E3A5F",
                        fontFamily: "Inter",
                        children: centerValue
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 398,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 381,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px 12px",
                    justifyContent: "center",
                    marginTop: 4,
                    fontSize: 9.5,
                    color: "#64748B"
                },
                children: data.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            d.label,
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                style: {
                                    color: "#1E3A5F"
                                },
                                children: d.value
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 405,
                                columnNumber: 23
                            }, this)
                        ]
                    }, d.label, true, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 404,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 402,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 380,
        columnNumber: 5
    }, this);
}
_c8 = ExportDonutChart;
function renderDonutCallout({ cx, cy, midAngle, outerRadius, percent, name, value }) {
    const RADIAN = Math.PI / 180;
    const angle = midAngle ?? 0;
    const radius = outerRadius ?? 0;
    const centerX = cx ?? 0;
    const centerY = cy ?? 0;
    const sx = centerX + (radius - 4) * Math.cos(-angle * RADIAN);
    const sy = centerY + (radius - 4) * Math.sin(-angle * RADIAN);
    const mx = centerX + (radius + 12) * Math.cos(-angle * RADIAN);
    const my = centerY + (radius + 12) * Math.sin(-angle * RADIAN);
    const ex = mx + (Math.cos(-angle * RADIAN) >= 0 ? 28 : -28);
    const ey = my;
    const textAnchor = ex > centerX ? "start" : "end";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: `M${sx},${sy}L${mx},${my}L${ex},${ey}`,
                stroke: "#2f4357",
                strokeWidth: 1.6,
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 445,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: ex + (textAnchor === "start" ? 5 : -5),
                y: ey - 8,
                textAnchor: textAnchor,
                fontSize: "13",
                fill: "#5f778e",
                children: name
            }, void 0, false, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 446,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: ex + (textAnchor === "start" ? 5 : -5),
                y: ey + 14,
                textAnchor: textAnchor,
                fontSize: "17",
                fill: "#2f4357",
                fontWeight: "500",
                children: value ?? `${Math.round((percent ?? 0) * 100)}%`
            }, void 0, false, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 449,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 444,
        columnNumber: 5
    }, this);
}
function ExportLabeledDonutChart({ data, centerValue, height = 290 }) {
    const computedCenterValue = centerValue ?? formatCompactAmount(data.reduce((sum, item)=>sum + parseCompactAmount(item.value), 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "exportLabeledDonut",
        style: {
            height
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            width: "100%",
            height: height,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                margin: {
                    top: 18,
                    right: 56,
                    bottom: 18,
                    left: 56
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                        data: data,
                        dataKey: "pct",
                        nameKey: "label",
                        cx: "50%",
                        cy: "56%",
                        innerRadius: "48%",
                        outerRadius: "72%",
                        stroke: "#ffffff",
                        strokeWidth: 3,
                        labelLine: false,
                        label: (props)=>renderDonutCallout({
                                cx: props.cx,
                                cy: props.cy,
                                midAngle: props.midAngle,
                                outerRadius: props.outerRadius,
                                percent: props.percent,
                                name: props.name,
                                value: props.payload.value
                            }),
                        children: data.map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                fill: entry.color
                            }, entry.label, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 495,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 471,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "50%",
                        y: "56%",
                        textAnchor: "middle",
                        dominantBaseline: "middle",
                        fontSize: "34",
                        fontWeight: "500",
                        fill: "#2c3f52",
                        children: computedCenterValue
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 498,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 470,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 469,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 468,
        columnNumber: 5
    }, this);
}
_c9 = ExportLabeledDonutChart;
function ExportBubbleChart({ data, height = 260 }) {
    if (!data.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "exportChartEmpty",
            children: "No chart data available."
        }, void 0, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 515,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "exportBubbleChart",
        style: {
            height
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            width: "100%",
            height: height,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ScatterChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScatterChart"], {
                margin: {
                    top: 20,
                    right: 18,
                    bottom: 16,
                    left: 16
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                        stroke: "#d5e6f8",
                        strokeDasharray: "0"
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 522,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                        type: "number",
                        dataKey: "x",
                        domain: [
                            0,
                            100
                        ],
                        tick: false,
                        axisLine: false,
                        tickLine: false
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 523,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                        type: "number",
                        dataKey: "y",
                        domain: [
                            0,
                            100
                        ],
                        tick: false,
                        axisLine: false,
                        tickLine: false
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 524,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ZAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZAxis"], {
                        type: "number",
                        dataKey: "size",
                        range: [
                            1800,
                            16000
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 525,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                        content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BubbleTooltip, {}, void 0, false, {
                            fileName: "[project]/components/export-visuals.tsx",
                            lineNumber: 526,
                            columnNumber: 29
                        }, this),
                        cursor: false
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 526,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Scatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scatter"], {
                        data: data,
                        shape: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BubbleShape, {}, void 0, false, {
                            fileName: "[project]/components/export-visuals.tsx",
                            lineNumber: 527,
                            columnNumber: 39
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 527,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 521,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 520,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 519,
        columnNumber: 5
    }, this);
}
_c10 = ExportBubbleChart;
function ExportFunnelChart({ data, height = 250, leftHeader, rightHeader }) {
    if (!data.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "exportChartEmpty",
            children: "No chart data available."
        }, void 0, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 546,
            columnNumber: 12
        }, this);
    }
    const fills = [
        "#b6ebf5",
        "#9ee2ee",
        "#7ad5e6",
        "#62c9dd"
    ];
    const prepared = data.map((item, index)=>({
            ...item,
            value: item.width,
            fill: item.fill ?? fills[index % fills.length]
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "exportFunnelLayout",
        style: {
            minHeight: height
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "exportFunnelCanvas",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                    width: "100%",
                    height: height,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$FunnelChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunnelChart"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FunnelTooltip, {}, void 0, false, {
                                    fileName: "[project]/components/export-visuals.tsx",
                                    lineNumber: 561,
                                    columnNumber: 31
                                }, this),
                                cursor: false
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 561,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Funnel"], {
                                dataKey: "value",
                                data: prepared,
                                isAnimationActive: false,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$LabelList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabelList"], {
                                        content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FunnelCenterLabel, {}, void 0, false, {
                                            fileName: "[project]/components/export-visuals.tsx",
                                            lineNumber: 563,
                                            columnNumber: 35
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/export-visuals.tsx",
                                        lineNumber: 563,
                                        columnNumber: 15
                                    }, this),
                                    prepared.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                            fill: item.fill,
                                            stroke: item.fill
                                        }, item.label, false, {
                                            fileName: "[project]/components/export-visuals.tsx",
                                            lineNumber: 565,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 562,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 560,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 559,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 558,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "exportFunnelMeta",
                children: [
                    leftHeader || rightHeader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "exportFunnelMetaHead",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: leftHeader ?? ""
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 575,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: rightHeader ?? ""
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 576,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 574,
                        columnNumber: 11
                    }, this) : null,
                    prepared.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "exportFunnelMetaRow",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "exportFunnelMetaMain",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: [
                                                item.label,
                                                " · ",
                                                item.count
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/export-visuals.tsx",
                                            lineNumber: 583,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "exportFunnelMetaNotes",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: item.leftNote
                                                }, void 0, false, {
                                                    fileName: "[project]/components/export-visuals.tsx",
                                                    lineNumber: 587,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: item.rightNote
                                                }, void 0, false, {
                                                    fileName: "[project]/components/export-visuals.tsx",
                                                    lineNumber: 588,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/export-visuals.tsx",
                                            lineNumber: 586,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/export-visuals.tsx",
                                    lineNumber: 582,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "exportFunnelRevenue",
                                    children: item.revenue
                                }, void 0, false, {
                                    fileName: "[project]/components/export-visuals.tsx",
                                    lineNumber: 591,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, item.label, true, {
                            fileName: "[project]/components/export-visuals.tsx",
                            lineNumber: 581,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 572,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 557,
        columnNumber: 5
    }, this);
}
_c11 = ExportFunnelChart;
function ExportSankeyChart({ left, right }) {
    const nodeMeta = [
        {
            key: "acquire",
            label: "Acquire",
            color: "#2563EB",
            group: "left"
        },
        {
            key: "build",
            label: "Build",
            color: "#22C55E",
            group: "left"
        },
        {
            key: "contain",
            label: "Contain",
            color: "#F97316",
            group: "left"
        },
        {
            key: "acquire",
            label: "Acquire",
            color: "#2563EB",
            group: "right"
        },
        {
            key: "build",
            label: "Build",
            color: "#22C55E",
            group: "right"
        },
        {
            key: "contain",
            label: "Contain",
            color: "#F97316",
            group: "right"
        }
    ];
    const leftValues = [
        parseCompactAmount(left.acquire),
        parseCompactAmount(left.build),
        parseCompactAmount(left.contain)
    ];
    const ratios = [
        [
            0.68,
            0.22,
            0.1
        ],
        [
            0.18,
            0.62,
            0.2
        ],
        [
            0.08,
            0.26,
            0.66
        ]
    ];
    const links = leftValues.flatMap((value, rowIndex)=>ratios[rowIndex].map((ratio, columnIndex)=>{
            const amount = Math.max(0, Math.round(value * ratio));
            return {
                source: rowIndex,
                target: columnIndex + 3,
                value: amount,
                sourceLabel: nodeMeta[rowIndex].label,
                targetLabel: nodeMeta[columnIndex + 3].label,
                color: nodeMeta[rowIndex].color
            };
        }));
    const nodes = nodeMeta.map((item, index)=>({
            name: `${item.label} ${item.group === "left" ? [
                left.acquire,
                left.build,
                left.contain
            ][index] : [
                right.acquire,
                right.build,
                right.contain
            ][index - 3]}`,
            label: item.label,
            valueLabel: item.group === "left" ? [
                left.acquire,
                left.build,
                left.contain
            ][index] : [
                right.acquire,
                right.build,
                right.contain
            ][index - 3],
            color: item.color,
            group: item.group
        }));
    const SankeyNode = (props)=>{
        const { x, y, width, height, payload } = props;
        if (!payload) {
            return null;
        }
        const alignRight = payload.group === "right";
        const labelX = alignRight ? x - 8 : x + width + 8;
        const labelAnchor = alignRight ? "end" : "start";
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: x,
                    y: y,
                    width: width,
                    height: height,
                    rx: 4,
                    fill: payload.color,
                    opacity: "0.88"
                }, void 0, false, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 656,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: labelX,
                    y: y + height / 2 - 4,
                    textAnchor: labelAnchor,
                    fill: "#4b6177",
                    fontSize: "11",
                    fontWeight: "700",
                    children: payload.label
                }, void 0, false, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 657,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: labelX,
                    y: y + height / 2 + 11,
                    textAnchor: labelAnchor,
                    fill: payload.color,
                    fontSize: "11",
                    fontWeight: "700",
                    children: payload.valueLabel
                }, void 0, false, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 660,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 655,
            columnNumber: 7
        }, this);
    };
    const SankeyLink = (props)=>{
        const { sourceX, targetX, sourceY, targetY, sourceControlX, targetControlX, linkWidth, payload } = props;
        const path = `
      M${sourceX},${sourceY - linkWidth / 2}
      C${sourceControlX},${sourceY - linkWidth / 2} ${targetControlX},${targetY - linkWidth / 2} ${targetX},${targetY - linkWidth / 2}
      L${targetX},${targetY + linkWidth / 2}
      C${targetControlX},${targetY + linkWidth / 2} ${sourceControlX},${sourceY + linkWidth / 2} ${sourceX},${sourceY + linkWidth / 2}
      Z
    `;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: path,
            fill: payload.color,
            opacity: "0.22",
            stroke: "none"
        }, void 0, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 677,
            columnNumber: 12
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "exportSankeyWrap",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            width: "100%",
            height: "100%",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$Sankey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sankey"], {
                data: {
                    nodes,
                    links
                },
                nodePadding: 18,
                nodeWidth: 12,
                margin: {
                    top: 6,
                    right: 44,
                    bottom: 4,
                    left: 44
                },
                link: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SankeyLink, {}, void 0, false, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 688,
                    columnNumber: 17
                }, this),
                node: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SankeyNode, {}, void 0, false, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 689,
                    columnNumber: 17
                }, this),
                iterations: 64,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                    content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SankeyTooltip, {}, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 692,
                        columnNumber: 29
                    }, this),
                    cursor: false
                }, void 0, false, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 692,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 683,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 682,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 681,
        columnNumber: 5
    }, this);
}
_c12 = ExportSankeyChart;
function ExportBubbleSegments({ segments }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 280 180",
        style: {
            width: "100%",
            height: 180
        },
        children: segments.map((segment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: segment.x * 2.2,
                        cy: 180 - segment.y * 1.8,
                        r: Math.max(12, segment.size / 2.6),
                        fill: segment.color,
                        opacity: "0.28",
                        stroke: segment.color,
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 708,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: segment.x * 2.2,
                        y: 183 - segment.y * 1.8,
                        textAnchor: "middle",
                        fontSize: "18",
                        fontWeight: "700",
                        fill: segment.color,
                        children: [
                            segment.value,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 717,
                        columnNumber: 11
                    }, this)
                ]
            }, segment.label, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 707,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 705,
        columnNumber: 5
    }, this);
}
_c13 = ExportBubbleSegments;
function ExportHeatmap({ values, columns, rows }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "campaignHeatmap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "campaignHeatHeaderSpacer"
            }, void 0, false, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 744,
                columnNumber: 7
            }, this),
            columns.map((column)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "campaignHeatHeader",
                    children: column
                }, column, false, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 746,
                    columnNumber: 9
                }, this)),
            rows.map((row, rowIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "campaignHeatRow",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "campaignHeatTime",
                            children: row.replace(".", ":")
                        }, void 0, false, {
                            fileName: "[project]/components/export-visuals.tsx",
                            lineNumber: 752,
                            columnNumber: 11
                        }, this),
                        columns.map((column, columnIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "campaignHeatCell",
                                "data-val": `${Math.round(values[rowIndex][columnIndex] * 100)}%`,
                                style: {
                                    background: `rgba(33, 173, 214, ${Math.max(values[rowIndex][columnIndex], 0.18)})`
                                },
                                title: `${column} at ${row.replace(".", ":")}: ${Math.round(values[rowIndex][columnIndex] * 100)}%`
                            }, `${row}-${column}`, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 754,
                                columnNumber: 13
                            }, this))
                    ]
                }, row, true, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 751,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 743,
        columnNumber: 5
    }, this);
}
_c14 = ExportHeatmap;
function ExportEntitiesSummary({ summary, series, chartHeight = 130 }) {
    const chartTop = 16;
    const chartBottom = 24;
    const labelY = chartHeight - 5;
    const availableHeight = chartHeight - chartTop - chartBottom;
    const barMax = Math.max(...series.map((item)=>item.bar), 1);
    const lineMax = Math.max(...series.map((item)=>item.line), 1);
    const points = series.map((item, index)=>{
        const x = 40 + index / Math.max(series.length - 1, 1) * 180;
        const y = chartHeight - chartBottom - item.line / lineMax * availableHeight;
        return [
            x,
            y
        ];
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: 14,
                    fontSize: 10,
                    marginBottom: 8
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                style: {
                                    color: "#1E3A5F",
                                    fontSize: 16
                                },
                                children: summary.entities
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 792,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 792,
                                columnNumber: 82
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "#64748B"
                                },
                                children: "Entities active"
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 792,
                                columnNumber: 88
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 792,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                style: {
                                    color: "#1E3A5F",
                                    fontSize: 16
                                },
                                children: summary.enrolled
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 793,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 793,
                                columnNumber: 82
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "#64748B"
                                },
                                children: "Total enrolled"
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 793,
                                columnNumber: 88
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 793,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                style: {
                                    color: "#22C55E",
                                    fontSize: 16
                                },
                                children: summary.revenue
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 794,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 794,
                                columnNumber: 81
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "#64748B"
                                },
                                children: "Total Revenue"
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 794,
                                columnNumber: 87
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 794,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 791,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: `0 0 280 ${chartHeight}`,
                style: {
                    width: "100%",
                    height: chartHeight
                },
                preserveAspectRatio: "none",
                children: [
                    [
                        0,
                        1,
                        2,
                        3
                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            className: "grid-line",
                            x1: "20",
                            y1: chartTop + i * availableHeight / 3,
                            x2: "260",
                            y2: chartTop + i * availableHeight / 3
                        }, i, false, {
                            fileName: "[project]/components/export-visuals.tsx",
                            lineNumber: 798,
                            columnNumber: 11
                        }, this)),
                    series.map((item, index)=>{
                        const x = 40 + index / Math.max(series.length - 1, 1) * 180;
                        const h = item.bar / barMax * availableHeight;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: x - 10,
                                    y: chartHeight - chartBottom - h,
                                    width: "20",
                                    height: h,
                                    fill: "#BFDBFE",
                                    rx: "2"
                                }, void 0, false, {
                                    fileName: "[project]/components/export-visuals.tsx",
                                    lineNumber: 805,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: x,
                                    y: chartHeight - chartBottom - h - 4,
                                    textAnchor: "middle",
                                    fontSize: "8",
                                    fill: "#22C55E",
                                    fontWeight: "600",
                                    children: [
                                        item.bar,
                                        "K"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/export-visuals.tsx",
                                    lineNumber: 806,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: x,
                                    y: labelY,
                                    textAnchor: "middle",
                                    fontSize: "8",
                                    fill: "#64748B",
                                    children: item.name
                                }, void 0, false, {
                                    fileName: "[project]/components/export-visuals.tsx",
                                    lineNumber: 807,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, item.name, true, {
                            fileName: "[project]/components/export-visuals.tsx",
                            lineNumber: 804,
                            columnNumber: 13
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: points.map(([x, y], index)=>`${index ? "L" : "M"} ${x} ${y}`).join(" "),
                        fill: "none",
                        stroke: "#22C55E",
                        strokeWidth: "2"
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 811,
                        columnNumber: 9
                    }, this),
                    points.map(([x, y], index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: x,
                            cy: y,
                            r: "3",
                            fill: "#22C55E"
                        }, index, false, {
                            fileName: "[project]/components/export-visuals.tsx",
                            lineNumber: 818,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 796,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c15 = ExportEntitiesSummary;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15;
__turbopack_context__.k.register(_c, "BubbleTooltip");
__turbopack_context__.k.register(_c1, "BubbleShape");
__turbopack_context__.k.register(_c2, "FunnelTooltip");
__turbopack_context__.k.register(_c3, "FunnelCenterLabel");
__turbopack_context__.k.register(_c4, "SankeyTooltip");
__turbopack_context__.k.register(_c5, "ExportLineChart");
__turbopack_context__.k.register(_c6, "ExportMultiLineChart");
__turbopack_context__.k.register(_c7, "ExportBarValueChart");
__turbopack_context__.k.register(_c8, "ExportDonutChart");
__turbopack_context__.k.register(_c9, "ExportLabeledDonutChart");
__turbopack_context__.k.register(_c10, "ExportBubbleChart");
__turbopack_context__.k.register(_c11, "ExportFunnelChart");
__turbopack_context__.k.register(_c12, "ExportSankeyChart");
__turbopack_context__.k.register(_c13, "ExportBubbleSegments");
__turbopack_context__.k.register(_c14, "ExportHeatmap");
__turbopack_context__.k.register(_c15, "ExportEntitiesSummary");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/overview-tree.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OverviewTree",
    ()=>OverviewTree
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const treeData = {
    acquire: {
        key: "acquire",
        label: "Acquire",
        subtitle: "New patients",
        total: "12.4k pts",
        color: "blue",
        conditions: [
            {
                id: "diabetes",
                label: "Diabetes",
                value: "5.0k · 40.3%",
                segments: [
                    {
                        id: "dia-undiagnosed",
                        label: "Undiagnosed",
                        value: "3.2k · 25.9%",
                        status: "active"
                    },
                    {
                        id: "dia-prediabetic",
                        label: "Pre-diabetic",
                        value: "2.0k · 15.8%",
                        status: "planned"
                    }
                ]
            },
            {
                id: "hypertension",
                label: "Hypertension",
                value: "4.5k · 36.1%",
                segments: [
                    {
                        id: "hyp-undiagnosed",
                        label: "Undiagnosed",
                        value: "2.6k · 20.9%",
                        status: "active"
                    },
                    {
                        id: "hyp-risk",
                        label: "At-Risk",
                        value: "1.9k · 15.2%",
                        status: "paused"
                    }
                ]
            },
            {
                id: "obesity",
                label: "Obesity",
                value: "1.9k · 15.3%",
                segments: [
                    {
                        id: "obesity-bmi",
                        label: "BMI > 30",
                        value: "1.9k · 15.3%",
                        status: "planned"
                    }
                ]
            }
        ]
    },
    build: {
        key: "build",
        label: "Build",
        subtitle: "Enhance care",
        total: "9.8k pts",
        color: "green",
        conditions: [
            {
                id: "diabetes",
                label: "Diabetes",
                value: "3.6k · 36.7%",
                segments: [
                    {
                        id: "dia-followup",
                        label: "Follow-up Care",
                        value: "2.1k · 21.4%",
                        status: "active"
                    },
                    {
                        id: "dia-coaching",
                        label: "Lifestyle Coaching",
                        value: "1.5k · 15.3%",
                        status: "planned"
                    }
                ]
            },
            {
                id: "hypertension",
                label: "Hypertension",
                value: "2.8k · 28.4%",
                segments: [
                    {
                        id: "hyp-med",
                        label: "Medication Adherence",
                        value: "1.6k · 16.4%",
                        status: "active"
                    },
                    {
                        id: "hyp-monitor",
                        label: "Remote Monitoring",
                        value: "1.2k · 12.0%",
                        status: "planned"
                    }
                ]
            },
            {
                id: "obesity",
                label: "Obesity",
                value: "1.9k · 19.4%",
                segments: [
                    {
                        id: "obesity-nutrition",
                        label: "Nutrition Program",
                        value: "1.9k · 19.4%",
                        status: "active"
                    }
                ]
            }
        ]
    },
    contain: {
        key: "contain",
        label: "Contain",
        subtitle: "Retain at-risk",
        total: "7.3k pts",
        color: "orange",
        conditions: [
            {
                id: "diabetes",
                label: "Diabetes",
                value: "2.5k · 34.2%",
                segments: [
                    {
                        id: "dia-relapse",
                        label: "Relapse Risk",
                        value: "1.6k · 21.9%",
                        status: "paused"
                    },
                    {
                        id: "dia-reengage",
                        label: "Re-engagement",
                        value: "0.9k · 12.3%",
                        status: "planned"
                    }
                ]
            },
            {
                id: "hypertension",
                label: "Hypertension",
                value: "1.8k · 24.6%",
                segments: [
                    {
                        id: "hyp-watch",
                        label: "Watchlist",
                        value: "1.0k · 13.7%",
                        status: "active"
                    },
                    {
                        id: "hyp-return",
                        label: "Care Return",
                        value: "0.8k · 10.9%",
                        status: "planned"
                    }
                ]
            },
            {
                id: "obesity",
                label: "Obesity",
                value: "1.6k · 21.9%",
                segments: [
                    {
                        id: "obesity-drop",
                        label: "Drop-off Risk",
                        value: "1.6k · 21.9%",
                        status: "paused"
                    }
                ]
            }
        ]
    }
};
const statusLabelMap = {
    active: "Active",
    planned: "Planned",
    paused: "Paused"
};
const colorStrokeMap = {
    blue: "#8CA5C3",
    green: "#8FC3A1",
    orange: "#E9BE8C"
};
function makePath(x1, y1, x2, y2) {
    const curve = Math.max(32, Math.abs(x2 - x1) * 0.38);
    return `M ${x1} ${y1} C ${x1 + curve} ${y1}, ${x2 - curve} ${y2}, ${x2} ${y2}`;
}
function OverviewTree() {
    _s();
    const [activeStage, setActiveStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("acquire");
    const [paths, setPaths] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const nodeRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const stage = treeData[activeStage];
    const connectors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OverviewTree.useMemo[connectors]": ()=>{
            const branchConnectors = stage.conditions.flatMap({
                "OverviewTree.useMemo[connectors].branchConnectors": (condition)=>condition.segments.map({
                        "OverviewTree.useMemo[connectors].branchConnectors": (segment)=>({
                                from: `condition-${condition.id}`,
                                to: `segment-${segment.id}`,
                                color: stage.color
                            })
                    }["OverviewTree.useMemo[connectors].branchConnectors"])
            }["OverviewTree.useMemo[connectors].branchConnectors"]);
            return [
                ...stage.conditions.map({
                    "OverviewTree.useMemo[connectors]": (condition)=>({
                            from: "root",
                            to: `condition-${condition.id}`,
                            color: stage.color
                        })
                }["OverviewTree.useMemo[connectors]"]),
                ...branchConnectors
            ];
        }
    }["OverviewTree.useMemo[connectors]"], [
        stage
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "OverviewTree.useLayoutEffect": ()=>{
            const updatePaths = {
                "OverviewTree.useLayoutEffect.updatePaths": ()=>{
                    const canvas = canvasRef.current;
                    if (!canvas) {
                        return;
                    }
                    const bounds = canvas.getBoundingClientRect();
                    const nextPaths = connectors.map({
                        "OverviewTree.useLayoutEffect.updatePaths.nextPaths": (connector)=>{
                            const fromNode = nodeRefs.current[connector.from];
                            const toNode = nodeRefs.current[connector.to];
                            if (!fromNode || !toNode) {
                                return null;
                            }
                            const fromBounds = fromNode.getBoundingClientRect();
                            const toBounds = toNode.getBoundingClientRect();
                            const x1 = fromBounds.right - bounds.left;
                            const y1 = fromBounds.top - bounds.top + fromBounds.height / 2;
                            const x2 = toBounds.left - bounds.left;
                            const y2 = toBounds.top - bounds.top + toBounds.height / 2;
                            return {
                                id: `${connector.from}-${connector.to}`,
                                d: makePath(x1, y1, x2, y2),
                                color: connector.color
                            };
                        }
                    }["OverviewTree.useLayoutEffect.updatePaths.nextPaths"]).filter({
                        "OverviewTree.useLayoutEffect.updatePaths.nextPaths": (item)=>Boolean(item)
                    }["OverviewTree.useLayoutEffect.updatePaths.nextPaths"]);
                    setPaths(nextPaths);
                }
            }["OverviewTree.useLayoutEffect.updatePaths"];
            updatePaths();
            const resizeObserver = typeof ResizeObserver !== "undefined" ? new ResizeObserver(updatePaths) : null;
            if (resizeObserver && canvasRef.current) {
                resizeObserver.observe(canvasRef.current);
            }
            window.addEventListener("resize", updatePaths);
            return ({
                "OverviewTree.useLayoutEffect": ()=>{
                    resizeObserver?.disconnect();
                    window.removeEventListener("resize", updatePaths);
                }
            })["OverviewTree.useLayoutEffect"];
        }
    }["OverviewTree.useLayoutEffect"], [
        connectors,
        stage
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overviewTree",
        ref: canvasRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "overviewTreeSvg",
                "aria-hidden": "true",
                children: paths.map((path)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: path.d,
                        className: `overviewTreePath ${path.color}`,
                        vectorEffect: "non-scaling-stroke"
                    }, path.id, false, {
                        fileName: "[project]/components/overview-tree.tsx",
                        lineNumber: 238,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/overview-tree.tsx",
                lineNumber: 236,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overviewTreeHeaders",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "CONDITION"
                    }, void 0, false, {
                        fileName: "[project]/components/overview-tree.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "PATIENT SEGMENTS"
                    }, void 0, false, {
                        fileName: "[project]/components/overview-tree.tsx",
                        lineNumber: 249,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "STATUS"
                    }, void 0, false, {
                        fileName: "[project]/components/overview-tree.tsx",
                        lineNumber: 250,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/overview-tree.tsx",
                lineNumber: 247,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overviewTreeBody",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "overviewTreeStages",
                        children: Object.values(treeData).map((item)=>{
                            const isActive = item.key === activeStage;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: `overviewTreeStageButton ${item.color} ${isActive ? "active" : ""}`,
                                onClick: ()=>setActiveStage(item.key),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/overview-tree.tsx",
                                        lineNumber: 264,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: item.subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/components/overview-tree.tsx",
                                        lineNumber: 265,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, item.key, true, {
                                fileName: "[project]/components/overview-tree.tsx",
                                lineNumber: 258,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/overview-tree.tsx",
                        lineNumber: 254,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overviewTreeSelectedWrap",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: (node)=>{
                                nodeRefs.current.root = node;
                            },
                            className: `overviewTreeSelected ${stage.color}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: stage.label.toUpperCase()
                                }, void 0, false, {
                                    fileName: "[project]/components/overview-tree.tsx",
                                    lineNumber: 278,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: stage.total
                                }, void 0, false, {
                                    fileName: "[project]/components/overview-tree.tsx",
                                    lineNumber: 279,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/overview-tree.tsx",
                            lineNumber: 272,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/overview-tree.tsx",
                        lineNumber: 271,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overviewTreeColumns",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overviewTreeConditionColumn",
                                children: stage.conditions.map((condition)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overviewTreeBranchRow",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: (node)=>{
                                                nodeRefs.current[`condition-${condition.id}`] = node;
                                            },
                                            className: `overviewTreeBox overviewTreeCondition ${stage.color}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: condition.label
                                                }, void 0, false, {
                                                    fileName: "[project]/components/overview-tree.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: condition.value
                                                }, void 0, false, {
                                                    fileName: "[project]/components/overview-tree.tsx",
                                                    lineNumber: 294,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/overview-tree.tsx",
                                            lineNumber: 287,
                                            columnNumber: 17
                                        }, this)
                                    }, condition.id, false, {
                                        fileName: "[project]/components/overview-tree.tsx",
                                        lineNumber: 286,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/overview-tree.tsx",
                                lineNumber: 284,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overviewTreeSegmentsColumn",
                                children: stage.conditions.map((condition)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overviewTreeSegmentStack",
                                        children: condition.segments.map((segment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "overviewTreeSegmentRow",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        ref: (node)=>{
                                                            nodeRefs.current[`segment-${segment.id}`] = node;
                                                        },
                                                        className: `overviewTreeBox overviewTreeSegment ${stage.color}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: segment.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/overview-tree.tsx",
                                                                lineNumber: 311,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: segment.value
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/overview-tree.tsx",
                                                                lineNumber: 312,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/overview-tree.tsx",
                                                        lineNumber: 305,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `overviewTreeStatus ${segment.status}`,
                                                        children: statusLabelMap[segment.status]
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/overview-tree.tsx",
                                                        lineNumber: 314,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, segment.id, true, {
                                                fileName: "[project]/components/overview-tree.tsx",
                                                lineNumber: 304,
                                                columnNumber: 19
                                            }, this))
                                    }, condition.id, false, {
                                        fileName: "[project]/components/overview-tree.tsx",
                                        lineNumber: 302,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/overview-tree.tsx",
                                lineNumber: 300,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/overview-tree.tsx",
                        lineNumber: 283,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/overview-tree.tsx",
                lineNumber: 253,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/overview-tree.tsx",
        lineNumber: 235,
        columnNumber: 5
    }, this);
}
_s(OverviewTree, "AoS8HLGsk/dLs9IRcGxKDQlQXV8=");
_c = OverviewTree;
var _c;
__turbopack_context__.k.register(_c, "OverviewTree");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/overview/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OverviewPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/date-filter-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2d$shell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard-shell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$export$2d$visuals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/export-visuals.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$overview$2d$tree$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/overview-tree.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const entityTabs = [
    "SSMC",
    "SEHA",
    "SEHA Clinics",
    "PureLab",
    "Daman",
    "Rafed",
    "TMO",
    "One Health",
    "TLC"
];
const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
const overviewRegionData = {
    all: {
        metrics: [
            {
                title: "No. of Conditions",
                value: "25",
                note: "12.4% vs L.M",
                noteClass: "down",
                icon: "/overview-conditions.png"
            },
            {
                title: "Eligible Patients",
                value: "53K",
                note: "8.1% vs L.M",
                noteClass: "up",
                icon: "/overview-candidate.png"
            },
            {
                title: "Seen Rate",
                value: "67.3%",
                note: "3.2% vs target",
                noteClass: "up",
                icon: "/overview-seen-rate.png"
            },
            {
                title: "Campaigns",
                value: "08",
                secondary: "05",
                valueLabel: "Completed",
                secondaryLabel: "Ongoing",
                icon: "/overview-announcement.png"
            },
            {
                title: "Incremental Revenue",
                value: "Ð 4.2M",
                note: "19.7% YTD",
                noteClass: "up",
                icon: "/overview-revenue.png"
            },
            {
                title: "Avg. Incremental Rev/person",
                value: "Ð 22K",
                icon: "/overview-candidate.png"
            }
        ],
        booking: [
            {
                label: "Identified",
                count: "18,432",
                leftNote: "100.0% of total",
                rightNote: "22.5%",
                revenue: "405.5M",
                width: 100,
                status: "Active"
            },
            {
                label: "Contacted",
                count: "14,280",
                leftNote: "77.5%",
                rightNote: "18.5%",
                revenue: "314.2M",
                width: 77.5,
                status: "Active"
            },
            {
                label: "Appointment Booked",
                count: "10,120",
                leftNote: "54.9%",
                rightNote: "12.5%",
                revenue: "222.6M",
                width: 54.9,
                status: "Planned"
            },
            {
                label: "Attended",
                count: "8,850",
                leftNote: "48.0%",
                rightNote: "",
                revenue: "194.7M",
                width: 48,
                status: "Paused"
            }
        ],
        providers: [
            {
                name: "SKMC",
                acquire: 20,
                build: 10,
                contain: 19,
                total: 49
            },
            {
                name: "SSMC",
                acquire: 12,
                build: 25,
                contain: 9,
                total: 46
            },
            {
                name: "Cleveland",
                acquire: 15,
                build: 15,
                contain: 14,
                total: 44
            },
            {
                name: "Corniche",
                acquire: 14,
                build: 19,
                contain: 9,
                total: 42
            },
            {
                name: "Al Ain Hos.",
                acquire: 8,
                build: 18,
                contain: 12,
                total: 38
            },
            {
                name: "Mafraq",
                acquire: 6,
                build: 23,
                contain: 6,
                total: 35
            },
            {
                name: "Salma",
                acquire: 11,
                build: 14,
                contain: 8,
                total: 33
            },
            {
                name: "Tawam",
                acquire: 5,
                build: 15,
                contain: 9,
                total: 29
            }
        ],
        seenRate: [
            {
                campaign: "Campaign 1",
                actual: 88,
                target: 80,
                condition: "Diabetes"
            },
            {
                campaign: "Campaign 2",
                actual: 81,
                target: 62,
                condition: "Hypertension"
            },
            {
                campaign: "Campaign 3",
                actual: 64,
                target: 67,
                condition: "Obesity"
            },
            {
                campaign: "Campaign 4",
                actual: 44,
                target: 60,
                condition: "Cardiac"
            },
            {
                campaign: "Campaign 5",
                actual: 38,
                target: 45,
                condition: "Diabetes"
            }
        ],
        revenueSeries: {
            acquire: [
                36,
                27,
                33,
                17,
                32,
                28,
                39,
                27,
                19,
                35,
                27,
                19
            ],
            build: [
                45,
                50,
                56,
                45,
                50,
                57,
                51,
                53,
                43,
                53,
                50,
                55
            ],
            contain: [
                72,
                77,
                74,
                83,
                74,
                76,
                71,
                77,
                82,
                72,
                77,
                82
            ]
        },
        summary: [
            {
                condition: "Diabetes",
                stage: "Pre-diabetic",
                eligible: "15,231",
                seenRate: "57.5%",
                campaigns: "05",
                avgRevenue: "5.5K",
                incrementalRevenue: "15.2K",
                status: "Active"
            },
            {
                condition: "Diabetes",
                stage: "Pre-diabetic",
                eligible: "8,256",
                seenRate: "48.6%",
                campaigns: "02",
                avgRevenue: "2.5K",
                incrementalRevenue: "12.2K",
                status: "Planned"
            },
            {
                condition: "Hypertension",
                stage: "At-Risk",
                eligible: "3,564",
                seenRate: "23.8%",
                campaigns: "06",
                avgRevenue: "1.3K",
                incrementalRevenue: "5.6K",
                status: "Paused"
            },
            {
                condition: "Diabetes",
                stage: "Pre-diabetic",
                eligible: "10,519",
                seenRate: "79.4%",
                campaigns: "04",
                avgRevenue: "12.2K",
                incrementalRevenue: "15.2K",
                status: "Active"
            },
            {
                condition: "Hypertension",
                stage: "At-Risk",
                eligible: "12,145",
                seenRate: "63.5%",
                campaigns: "12",
                avgRevenue: "13.8K",
                incrementalRevenue: "12.2K",
                status: "Active"
            },
            {
                condition: "Diabetes",
                stage: "Pre-diabetic",
                eligible: "5,623",
                seenRate: "41.2%",
                campaigns: "09",
                avgRevenue: "5.6K",
                incrementalRevenue: "5.6K",
                status: "Planned"
            }
        ]
    },
    "abu-dhabi": {
        metrics: [
            {
                title: "No. of Conditions",
                value: "18",
                note: "5.8% vs L.M",
                noteClass: "up",
                icon: "/overview-conditions.png"
            },
            {
                title: "Eligible Patients",
                value: "31K",
                note: "6.4% vs L.M",
                noteClass: "up",
                icon: "/overview-candidate.png"
            },
            {
                title: "Seen Rate",
                value: "71.9%",
                note: "4.8% vs target",
                noteClass: "up",
                icon: "/overview-seen-rate.png"
            },
            {
                title: "Campaigns",
                value: "05",
                secondary: "03",
                valueLabel: "Completed",
                secondaryLabel: "Ongoing",
                icon: "/overview-announcement.png"
            },
            {
                title: "Incremental Revenue",
                value: "Ð 2.8M",
                note: "14.2% YTD",
                noteClass: "up",
                icon: "/overview-revenue.png"
            },
            {
                title: "Avg. Incremental Rev/person",
                value: "Ð 24K",
                icon: "/overview-candidate.png"
            }
        ],
        booking: [
            {
                label: "Identified",
                count: "10,884",
                leftNote: "100.0% of total",
                rightNote: "24.2%",
                revenue: "212.8M",
                width: 100,
                status: "Active"
            },
            {
                label: "Contacted",
                count: "8,456",
                leftNote: "77.7%",
                rightNote: "19.1%",
                revenue: "171.4M",
                width: 77.7,
                status: "Active"
            },
            {
                label: "Appointment Booked",
                count: "6,105",
                leftNote: "56.1%",
                rightNote: "12.9%",
                revenue: "128.6M",
                width: 56.1,
                status: "Planned"
            },
            {
                label: "Attended",
                count: "5,244",
                leftNote: "48.2%",
                rightNote: "",
                revenue: "101.2M",
                width: 48.2,
                status: "Paused"
            }
        ],
        providers: [
            {
                name: "SSMC",
                acquire: 10,
                build: 18,
                contain: 8,
                total: 36
            },
            {
                name: "SKMC",
                acquire: 14,
                build: 9,
                contain: 10,
                total: 33
            },
            {
                name: "Cleveland",
                acquire: 13,
                build: 12,
                contain: 7,
                total: 32
            },
            {
                name: "Corniche",
                acquire: 11,
                build: 15,
                contain: 5,
                total: 31
            },
            {
                name: "Mafraq",
                acquire: 5,
                build: 16,
                contain: 4,
                total: 25
            }
        ],
        seenRate: [
            {
                campaign: "Campaign 1",
                actual: 91,
                target: 82,
                condition: "Diabetes"
            },
            {
                campaign: "Campaign 2",
                actual: 84,
                target: 66,
                condition: "Hypertension"
            },
            {
                campaign: "Campaign 3",
                actual: 69,
                target: 70,
                condition: "Obesity"
            },
            {
                campaign: "Campaign 4",
                actual: 52,
                target: 58,
                condition: "Cardiac"
            },
            {
                campaign: "Campaign 5",
                actual: 43,
                target: 47,
                condition: "Diabetes"
            }
        ],
        revenueSeries: {
            acquire: [
                33,
                26,
                29,
                20,
                30,
                31,
                37,
                29,
                24,
                32,
                29,
                27
            ],
            build: [
                42,
                47,
                53,
                44,
                48,
                54,
                49,
                51,
                46,
                50,
                49,
                52
            ],
            contain: [
                65,
                69,
                71,
                74,
                72,
                74,
                76,
                78,
                80,
                78,
                79,
                81
            ]
        },
        summary: [
            {
                condition: "Diabetes",
                stage: "Pre-diabetic",
                eligible: "8,911",
                seenRate: "62.4%",
                campaigns: "03",
                avgRevenue: "6.4K",
                incrementalRevenue: "9.1K",
                status: "Active"
            },
            {
                condition: "Hypertension",
                stage: "At-Risk",
                eligible: "6,540",
                seenRate: "58.1%",
                campaigns: "04",
                avgRevenue: "4.1K",
                incrementalRevenue: "8.4K",
                status: "Active"
            },
            {
                condition: "Obesity",
                stage: "BMI > 30",
                eligible: "3,208",
                seenRate: "35.2%",
                campaigns: "02",
                avgRevenue: "2.9K",
                incrementalRevenue: "4.3K",
                status: "Planned"
            },
            {
                condition: "Cardiac",
                stage: "High Risk",
                eligible: "2,111",
                seenRate: "28.7%",
                campaigns: "02",
                avgRevenue: "3.8K",
                incrementalRevenue: "3.6K",
                status: "Paused"
            }
        ]
    },
    "al-ain": {
        metrics: [
            {
                title: "No. of Conditions",
                value: "14",
                note: "4.1% vs L.M",
                noteClass: "up",
                icon: "/overview-conditions.png"
            },
            {
                title: "Eligible Patients",
                value: "14K",
                note: "3.9% vs L.M",
                noteClass: "up",
                icon: "/overview-candidate.png"
            },
            {
                title: "Seen Rate",
                value: "63.1%",
                note: "1.8% vs target",
                noteClass: "up",
                icon: "/overview-seen-rate.png"
            },
            {
                title: "Campaigns",
                value: "03",
                secondary: "02",
                valueLabel: "Completed",
                secondaryLabel: "Ongoing",
                icon: "/overview-announcement.png"
            },
            {
                title: "Incremental Revenue",
                value: "Ð 985K",
                note: "11.3% YTD",
                noteClass: "up",
                icon: "/overview-revenue.png"
            },
            {
                title: "Avg. Incremental Rev/person",
                value: "Ð 19K",
                icon: "/overview-candidate.png"
            }
        ],
        booking: [
            {
                label: "Identified",
                count: "4,920",
                leftNote: "100.0% of total",
                rightNote: "19.4%",
                revenue: "88.5M",
                width: 100,
                status: "Active"
            },
            {
                label: "Contacted",
                count: "3,655",
                leftNote: "74.3%",
                rightNote: "15.0%",
                revenue: "63.7M",
                width: 74.3,
                status: "Planned"
            },
            {
                label: "Appointment Booked",
                count: "2,574",
                leftNote: "52.3%",
                rightNote: "10.8%",
                revenue: "44.8M",
                width: 52.3,
                status: "Planned"
            },
            {
                label: "Attended",
                count: "2,109",
                leftNote: "42.8%",
                rightNote: "",
                revenue: "35.1M",
                width: 42.8,
                status: "Paused"
            }
        ],
        providers: [
            {
                name: "Tawam",
                acquire: 10,
                build: 15,
                contain: 8,
                total: 33
            },
            {
                name: "Al Ain Hos.",
                acquire: 9,
                build: 13,
                contain: 6,
                total: 28
            },
            {
                name: "Salma",
                acquire: 7,
                build: 10,
                contain: 5,
                total: 22
            },
            {
                name: "Al Wagan Hos.",
                acquire: 5,
                build: 8,
                contain: 4,
                total: 17
            }
        ],
        seenRate: [
            {
                campaign: "Campaign 1",
                actual: 78,
                target: 73,
                condition: "Diabetes"
            },
            {
                campaign: "Campaign 2",
                actual: 72,
                target: 60,
                condition: "Hypertension"
            },
            {
                campaign: "Campaign 3",
                actual: 59,
                target: 64,
                condition: "Obesity"
            },
            {
                campaign: "Campaign 4",
                actual: 41,
                target: 52,
                condition: "Cardiac"
            }
        ],
        revenueSeries: {
            acquire: [
                21,
                24,
                28,
                23,
                27,
                31,
                36,
                32,
                26,
                30,
                27,
                29
            ],
            build: [
                37,
                40,
                43,
                42,
                46,
                47,
                49,
                50,
                45,
                47,
                46,
                48
            ],
            contain: [
                52,
                55,
                57,
                59,
                58,
                60,
                62,
                63,
                64,
                60,
                63,
                66
            ]
        },
        summary: [
            {
                condition: "Diabetes",
                stage: "Pre-diabetic",
                eligible: "4,203",
                seenRate: "54.9%",
                campaigns: "02",
                avgRevenue: "4.3K",
                incrementalRevenue: "4.9K",
                status: "Active"
            },
            {
                condition: "Hypertension",
                stage: "At-Risk",
                eligible: "3,455",
                seenRate: "48.7%",
                campaigns: "03",
                avgRevenue: "3.2K",
                incrementalRevenue: "4.2K",
                status: "Planned"
            },
            {
                condition: "Cardiac",
                stage: "High Risk",
                eligible: "1,405",
                seenRate: "26.2%",
                campaigns: "01",
                avgRevenue: "2.8K",
                incrementalRevenue: "1.7K",
                status: "Paused"
            }
        ]
    },
    "al-dhafra": {
        metrics: [
            {
                title: "No. of Conditions",
                value: "11",
                note: "2.9% vs L.M",
                noteClass: "up",
                icon: "/overview-conditions.png"
            },
            {
                title: "Eligible Patients",
                value: "8K",
                note: "2.4% vs L.M",
                noteClass: "up",
                icon: "/overview-candidate.png"
            },
            {
                title: "Seen Rate",
                value: "58.6%",
                note: "1.1% vs target",
                noteClass: "up",
                icon: "/overview-seen-rate.png"
            },
            {
                title: "Campaigns",
                value: "02",
                secondary: "01",
                valueLabel: "Completed",
                secondaryLabel: "Ongoing",
                icon: "/overview-announcement.png"
            },
            {
                title: "Incremental Revenue",
                value: "Ð 612K",
                note: "8.4% YTD",
                noteClass: "up",
                icon: "/overview-revenue.png"
            },
            {
                title: "Avg. Incremental Rev/person",
                value: "Ð 17K",
                icon: "/overview-candidate.png"
            }
        ],
        booking: [
            {
                label: "Identified",
                count: "2,628",
                leftNote: "100.0% of total",
                rightNote: "16.8%",
                revenue: "46.2M",
                width: 100,
                status: "Active"
            },
            {
                label: "Contacted",
                count: "1,930",
                leftNote: "73.4%",
                rightNote: "12.8%",
                revenue: "33.4M",
                width: 73.4,
                status: "Planned"
            },
            {
                label: "Appointment Booked",
                count: "1,441",
                leftNote: "54.8%",
                rightNote: "8.3%",
                revenue: "24.9M",
                width: 54.8,
                status: "Paused"
            },
            {
                label: "Attended",
                count: "1,098",
                leftNote: "41.8%",
                rightNote: "",
                revenue: "18.1M",
                width: 41.8,
                status: "Paused"
            }
        ],
        providers: [
            {
                name: "Ghayathi",
                acquire: 6,
                build: 8,
                contain: 4,
                total: 18
            },
            {
                name: "Madinat Zayed",
                acquire: 7,
                build: 9,
                contain: 5,
                total: 21
            },
            {
                name: "Liwa",
                acquire: 4,
                build: 7,
                contain: 3,
                total: 14
            }
        ],
        seenRate: [
            {
                campaign: "Campaign 1",
                actual: 70,
                target: 68,
                condition: "Diabetes"
            },
            {
                campaign: "Campaign 2",
                actual: 61,
                target: 57,
                condition: "Hypertension"
            },
            {
                campaign: "Campaign 3",
                actual: 49,
                target: 53,
                condition: "Obesity"
            }
        ],
        revenueSeries: {
            acquire: [
                17,
                19,
                20,
                18,
                22,
                24,
                27,
                26,
                21,
                22,
                23,
                24
            ],
            build: [
                30,
                33,
                34,
                33,
                36,
                39,
                41,
                40,
                38,
                37,
                39,
                40
            ],
            contain: [
                44,
                47,
                49,
                48,
                50,
                51,
                52,
                54,
                56,
                53,
                55,
                57
            ]
        },
        summary: [
            {
                condition: "Diabetes",
                stage: "Pre-diabetic",
                eligible: "2,110",
                seenRate: "47.3%",
                campaigns: "01",
                avgRevenue: "3.6K",
                incrementalRevenue: "2.7K",
                status: "Active"
            },
            {
                condition: "Obesity",
                stage: "BMI > 30",
                eligible: "1,285",
                seenRate: "32.9%",
                campaigns: "01",
                avgRevenue: "2.1K",
                incrementalRevenue: "1.5K",
                status: "Paused"
            }
        ]
    }
};
function OverviewPage() {
    _s();
    const [appliedFilters, setAppliedFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        startDate: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_DATE_RANGE"].startDate,
        endDate: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_DATE_RANGE"].endDate,
        region: "all",
        lifestageType: "all",
        condition: "all",
        status: "all"
    });
    const [draftFilters, setDraftFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(appliedFilters);
    const { startDate, endDate, region, lifestageType, condition, status } = appliedFilters;
    const data = overviewRegionData[region];
    const monthRatio = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonthRatio"])({
        startDate,
        endDate
    });
    const visibleMonths = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sliceMonths"])(months, {
        startDate,
        endDate
    });
    const visibleMetrics = data.metrics.map((card)=>({
            ...card,
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scaleDisplayValue"])(card.value, monthRatio),
            secondary: card.secondary ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scaleDisplayValue"])(card.secondary, monthRatio) : undefined
        }));
    const filteredBooking = data.booking.filter((item)=>status === "all" || item.status === status).map((item)=>({
            ...item,
            count: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scaleDisplayValue"])(item.count, monthRatio),
            revenue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scaleDisplayValue"])(item.revenue, monthRatio)
        }));
    const filteredSummary = data.summary.filter((item)=>(condition === "all" || item.condition === condition) && (status === "all" || item.status === status)).map((item)=>({
            ...item,
            eligible: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scaleDisplayValue"])(item.eligible, monthRatio),
            campaigns: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scaleDisplayValue"])(item.campaigns, monthRatio),
            avgRevenue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scaleDisplayValue"])(item.avgRevenue, monthRatio),
            incrementalRevenue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scaleDisplayValue"])(item.incrementalRevenue, monthRatio)
        }));
    const filteredSeenRate = data.seenRate.filter((item)=>condition === "all" || item.condition === condition);
    const visibleSeries = Object.entries(data.revenueSeries).filter(([key])=>lifestageType === "all" || key === lifestageType);
    const visibleRevenueSeries = visibleSeries.map(([key, values])=>[
            key,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sliceMonths"])(values, {
                startDate,
                endDate
            })
        ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2d$shell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardShell"], {
        pageClassName: "overviewPage",
        title: "Overview",
        breadcrumbCurrent: "Overview",
        entityTabs: entityTabs,
        activeEntityTab: "SSMC",
        activeNav: "overview",
        headerTabsClassName: "overviewTabs",
        bodyClassName: "overviewBody",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "filterRow overviewFilterRow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "filterGroup overviewFilterGroup",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Date Range"
                            }, void 0, false, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 293,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "date",
                                className: "filterInput short",
                                value: draftFilters.startDate,
                                onChange: (event)=>setDraftFilters((current)=>({
                                            ...current,
                                            startDate: event.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 294,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "date",
                                className: "filterInput short",
                                value: draftFilters.endDate,
                                onChange: (event)=>setDraftFilters((current)=>({
                                            ...current,
                                            endDate: event.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 300,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/overview/page.tsx",
                        lineNumber: 292,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "filterGroup overviewFilterGroup",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Regions"
                            }, void 0, false, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 308,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "filterSelectWrap",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: "filterInput filterSelect",
                                    value: draftFilters.region,
                                    onChange: (event)=>setDraftFilters((current)=>({
                                                ...current,
                                                region: event.target.value
                                            })),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "all",
                                            children: "All"
                                        }, void 0, false, {
                                            fileName: "[project]/app/overview/page.tsx",
                                            lineNumber: 315,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "abu-dhabi",
                                            children: "Abu Dhabi"
                                        }, void 0, false, {
                                            fileName: "[project]/app/overview/page.tsx",
                                            lineNumber: 316,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "al-ain",
                                            children: "Al Ain"
                                        }, void 0, false, {
                                            fileName: "[project]/app/overview/page.tsx",
                                            lineNumber: 317,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "al-dhafra",
                                            children: "Al Dhafra"
                                        }, void 0, false, {
                                            fileName: "[project]/app/overview/page.tsx",
                                            lineNumber: 318,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/overview/page.tsx",
                                    lineNumber: 310,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 309,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/overview/page.tsx",
                        lineNumber: 307,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "filterGroup overviewFilterGroup",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Lifestage Type"
                            }, void 0, false, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 323,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "filterSelectWrap",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: "filterInput filterSelect",
                                    value: draftFilters.lifestageType,
                                    onChange: (event)=>setDraftFilters((current)=>({
                                                ...current,
                                                lifestageType: event.target.value
                                            })),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "all",
                                            children: "All"
                                        }, void 0, false, {
                                            fileName: "[project]/app/overview/page.tsx",
                                            lineNumber: 330,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "acquire",
                                            children: "Acquire"
                                        }, void 0, false, {
                                            fileName: "[project]/app/overview/page.tsx",
                                            lineNumber: 331,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "build",
                                            children: "Build"
                                        }, void 0, false, {
                                            fileName: "[project]/app/overview/page.tsx",
                                            lineNumber: 332,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "contain",
                                            children: "Contain"
                                        }, void 0, false, {
                                            fileName: "[project]/app/overview/page.tsx",
                                            lineNumber: 333,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/overview/page.tsx",
                                    lineNumber: 325,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 324,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/overview/page.tsx",
                        lineNumber: 322,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "filterGroup overviewFilterGroup",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Conditions"
                            }, void 0, false, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 338,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "filterSelectWrap",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: "filterInput filterSelect",
                                    value: draftFilters.condition,
                                    onChange: (event)=>setDraftFilters((current)=>({
                                                ...current,
                                                condition: event.target.value
                                            })),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "all",
                                            children: "All"
                                        }, void 0, false, {
                                            fileName: "[project]/app/overview/page.tsx",
                                            lineNumber: 350,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Diabetes",
                                            children: "Diabetes"
                                        }, void 0, false, {
                                            fileName: "[project]/app/overview/page.tsx",
                                            lineNumber: 351,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Hypertension",
                                            children: "Hypertension"
                                        }, void 0, false, {
                                            fileName: "[project]/app/overview/page.tsx",
                                            lineNumber: 352,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Obesity",
                                            children: "Obesity"
                                        }, void 0, false, {
                                            fileName: "[project]/app/overview/page.tsx",
                                            lineNumber: 353,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Cardiac",
                                            children: "Cardiac"
                                        }, void 0, false, {
                                            fileName: "[project]/app/overview/page.tsx",
                                            lineNumber: 354,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/overview/page.tsx",
                                    lineNumber: 340,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 339,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/overview/page.tsx",
                        lineNumber: 337,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "filterGroup overviewFilterGroup",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Status"
                            }, void 0, false, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 359,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "filterSelectWrap",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: "filterInput filterSelect",
                                    value: draftFilters.status,
                                    onChange: (event)=>setDraftFilters((current)=>({
                                                ...current,
                                                status: event.target.value
                                            })),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "all",
                                            children: "All"
                                        }, void 0, false, {
                                            fileName: "[project]/app/overview/page.tsx",
                                            lineNumber: 371,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Active",
                                            children: "Active"
                                        }, void 0, false, {
                                            fileName: "[project]/app/overview/page.tsx",
                                            lineNumber: 372,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Planned",
                                            children: "Planned"
                                        }, void 0, false, {
                                            fileName: "[project]/app/overview/page.tsx",
                                            lineNumber: 373,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Paused",
                                            children: "Paused"
                                        }, void 0, false, {
                                            fileName: "[project]/app/overview/page.tsx",
                                            lineNumber: 374,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/overview/page.tsx",
                                    lineNumber: 361,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 360,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/overview/page.tsx",
                        lineNumber: 358,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "applyButton",
                        onClick: ()=>setAppliedFilters(draftFilters),
                        children: "APPLY"
                    }, void 0, false, {
                        fileName: "[project]/app/overview/page.tsx",
                        lineNumber: 378,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/overview/page.tsx",
                lineNumber: 291,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "metricGrid overviewMetricGrid",
                children: visibleMetrics.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "metricCard overviewMetricCard",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: card.icon,
                                alt: "",
                                className: "metricIcon"
                            }, void 0, false, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 384,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "metricContent",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: card.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/overview/page.tsx",
                                        lineNumber: 386,
                                        columnNumber: 15
                                    }, this),
                                    card.secondary ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "campaignMetricRow",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "metricPair",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: card.value
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/overview/page.tsx",
                                                        lineNumber: 390,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: card.valueLabel
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/overview/page.tsx",
                                                        lineNumber: 391,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/overview/page.tsx",
                                                lineNumber: 389,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "metricPair",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: card.secondary
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/overview/page.tsx",
                                                        lineNumber: 394,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: card.secondaryLabel
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/overview/page.tsx",
                                                        lineNumber: 395,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/overview/page.tsx",
                                                lineNumber: 393,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/overview/page.tsx",
                                        lineNumber: 388,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "metricValueRow",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: card.value
                                            }, void 0, false, {
                                                fileName: "[project]/app/overview/page.tsx",
                                                lineNumber: 400,
                                                columnNumber: 19
                                            }, this),
                                            card.note ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `metricNote ${card.noteClass ?? ""}`,
                                                children: card.note
                                            }, void 0, false, {
                                                fileName: "[project]/app/overview/page.tsx",
                                                lineNumber: 401,
                                                columnNumber: 32
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/overview/page.tsx",
                                        lineNumber: 399,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 385,
                                columnNumber: 13
                            }, this)
                        ]
                    }, card.title, true, {
                        fileName: "[project]/app/overview/page.tsx",
                        lineNumber: 383,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/overview/page.tsx",
                lineNumber: 381,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overviewMainGrid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "glassCard overviewPanel lifecyclePanel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Lifestage Decomposition Tree"
                            }, void 0, false, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 411,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$overview$2d$tree$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OverviewTree"], {}, void 0, false, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 412,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/overview/page.tsx",
                        lineNumber: 410,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "glassCard overviewPanel bookingPanel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Booking Opportunity"
                            }, void 0, false, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 416,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bookingGrid",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$export$2d$visuals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExportFunnelChart"], {
                                    data: filteredBooking,
                                    height: 280,
                                    leftHeader: "Opportunity Distribution",
                                    rightHeader: "Incremental Revenue (AED)"
                                }, void 0, false, {
                                    fileName: "[project]/app/overview/page.tsx",
                                    lineNumber: 418,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 417,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/overview/page.tsx",
                        lineNumber: 415,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "glassCard overviewPanel providerPanel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Campaigns By Provider"
                            }, void 0, false, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 423,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "providerLegend",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "legend acquire",
                                        children: "Acquire"
                                    }, void 0, false, {
                                        fileName: "[project]/app/overview/page.tsx",
                                        lineNumber: 425,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "legend build",
                                        children: "Build"
                                    }, void 0, false, {
                                        fileName: "[project]/app/overview/page.tsx",
                                        lineNumber: 426,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "legend contain",
                                        children: "Contain"
                                    }, void 0, false, {
                                        fileName: "[project]/app/overview/page.tsx",
                                        lineNumber: 427,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 424,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "providerRows",
                                children: data.providers.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "providerRow",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "providerName",
                                                children: row.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/overview/page.tsx",
                                                lineNumber: 432,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "providerBar",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "segment acquire",
                                                        style: {
                                                            width: `${lifestageType === "all" || lifestageType === "acquire" ? row.acquire * 2 : 0}%`
                                                        },
                                                        title: `${row.name} Acquire: ${row.acquire}`,
                                                        children: lifestageType === "all" || lifestageType === "acquire" ? row.acquire : ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/overview/page.tsx",
                                                        lineNumber: 434,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "segment build",
                                                        style: {
                                                            width: `${lifestageType === "all" || lifestageType === "build" ? row.build * 2 : 0}%`
                                                        },
                                                        title: `${row.name} Build: ${row.build}`,
                                                        children: lifestageType === "all" || lifestageType === "build" ? row.build : ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/overview/page.tsx",
                                                        lineNumber: 437,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "segment contain",
                                                        style: {
                                                            width: `${lifestageType === "all" || lifestageType === "contain" ? row.contain * 2 : 0}%`
                                                        },
                                                        title: `${row.name} Contain: ${row.contain}`,
                                                        children: lifestageType === "all" || lifestageType === "contain" ? row.contain : ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/overview/page.tsx",
                                                        lineNumber: 440,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/overview/page.tsx",
                                                lineNumber: 433,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "providerTotal",
                                                children: row.total
                                            }, void 0, false, {
                                                fileName: "[project]/app/overview/page.tsx",
                                                lineNumber: 444,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, row.name, true, {
                                        fileName: "[project]/app/overview/page.tsx",
                                        lineNumber: 431,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 429,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/overview/page.tsx",
                        lineNumber: 422,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/overview/page.tsx",
                lineNumber: 409,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overviewBottomGrid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "glassCard overviewPanel simpleChartPanel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Campaigns by Seen Rate"
                            }, void 0, false, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 453,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "chartLegend",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "legend actual",
                                        children: "Actual"
                                    }, void 0, false, {
                                        fileName: "[project]/app/overview/page.tsx",
                                        lineNumber: 455,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "legend target",
                                        children: "Target"
                                    }, void 0, false, {
                                        fileName: "[project]/app/overview/page.tsx",
                                        lineNumber: 456,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 454,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "barChart",
                                children: filteredSeenRate.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "barGroup",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bars",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bar actual",
                                                        style: {
                                                            height: `${item.actual}%`
                                                        },
                                                        title: `${item.campaign} actual seen rate: ${item.actual}%`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                item.actual,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/overview/page.tsx",
                                                            lineNumber: 463,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/overview/page.tsx",
                                                        lineNumber: 462,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bar target",
                                                        style: {
                                                            height: `${item.target}%`
                                                        },
                                                        title: `${item.campaign} target seen rate: ${item.target}%`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                item.target,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/overview/page.tsx",
                                                            lineNumber: 466,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/overview/page.tsx",
                                                        lineNumber: 465,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/overview/page.tsx",
                                                lineNumber: 461,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: item.campaign
                                            }, void 0, false, {
                                                fileName: "[project]/app/overview/page.tsx",
                                                lineNumber: 469,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, item.campaign, true, {
                                        fileName: "[project]/app/overview/page.tsx",
                                        lineNumber: 460,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 458,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/overview/page.tsx",
                        lineNumber: 452,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "glassCard overviewPanel lineChartPanel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Campaigns By Incremental Revenue"
                            }, void 0, false, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 476,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "chartLegend",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "legend acquire",
                                        children: "Acquire"
                                    }, void 0, false, {
                                        fileName: "[project]/app/overview/page.tsx",
                                        lineNumber: 478,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "legend build",
                                        children: "Build"
                                    }, void 0, false, {
                                        fileName: "[project]/app/overview/page.tsx",
                                        lineNumber: 479,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "legend contain",
                                        children: "Contain"
                                    }, void 0, false, {
                                        fileName: "[project]/app/overview/page.tsx",
                                        lineNumber: 480,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 477,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lineChart",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$export$2d$visuals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExportMultiLineChart"], {
                                    series: visibleRevenueSeries.map(([, values])=>values),
                                    labels: visibleMonths,
                                    colors: visibleRevenueSeries.map(([key])=>key === "acquire" ? "#2563EB" : key === "build" ? "#22C55E" : "#F97316")
                                }, void 0, false, {
                                    fileName: "[project]/app/overview/page.tsx",
                                    lineNumber: 483,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 482,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/overview/page.tsx",
                        lineNumber: 475,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "glassCard overviewPanel summaryPanel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Campaigns Summary"
                            }, void 0, false, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 492,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "summaryTable",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "summaryHead",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Condition"
                                            }, void 0, false, {
                                                fileName: "[project]/app/overview/page.tsx",
                                                lineNumber: 495,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Screening Stage"
                                            }, void 0, false, {
                                                fileName: "[project]/app/overview/page.tsx",
                                                lineNumber: 496,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Eligible Patients"
                                            }, void 0, false, {
                                                fileName: "[project]/app/overview/page.tsx",
                                                lineNumber: 497,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Seen Rate"
                                            }, void 0, false, {
                                                fileName: "[project]/app/overview/page.tsx",
                                                lineNumber: 498,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "No. Of Campaigns"
                                            }, void 0, false, {
                                                fileName: "[project]/app/overview/page.tsx",
                                                lineNumber: 499,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Avg. Rev per Person (AED)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/overview/page.tsx",
                                                lineNumber: 500,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Incremental Revenue"
                                            }, void 0, false, {
                                                fileName: "[project]/app/overview/page.tsx",
                                                lineNumber: 501,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/overview/page.tsx",
                                        lineNumber: 494,
                                        columnNumber: 13
                                    }, this),
                                    filteredSummary.map((row, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "summaryRow",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: row.condition
                                                }, void 0, false, {
                                                    fileName: "[project]/app/overview/page.tsx",
                                                    lineNumber: 505,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: row.stage
                                                }, void 0, false, {
                                                    fileName: "[project]/app/overview/page.tsx",
                                                    lineNumber: 506,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: row.eligible
                                                }, void 0, false, {
                                                    fileName: "[project]/app/overview/page.tsx",
                                                    lineNumber: 507,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    title: `Seen rate in ${region.replace("-", " ")}: ${row.seenRate}`,
                                                    children: row.seenRate
                                                }, void 0, false, {
                                                    fileName: "[project]/app/overview/page.tsx",
                                                    lineNumber: 508,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: row.campaigns
                                                }, void 0, false, {
                                                    fileName: "[project]/app/overview/page.tsx",
                                                    lineNumber: 509,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: row.avgRevenue
                                                }, void 0, false, {
                                                    fileName: "[project]/app/overview/page.tsx",
                                                    lineNumber: 510,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: row.incrementalRevenue
                                                }, void 0, false, {
                                                    fileName: "[project]/app/overview/page.tsx",
                                                    lineNumber: 511,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, `${row.condition}-${index}`, true, {
                                            fileName: "[project]/app/overview/page.tsx",
                                            lineNumber: 504,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 493,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/overview/page.tsx",
                        lineNumber: 491,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/overview/page.tsx",
                lineNumber: 451,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/overview/page.tsx",
        lineNumber: 281,
        columnNumber: 5
    }, this);
}
_s(OverviewPage, "OGydVvTSYsH2YTZKSClSRpjjyRU=");
_c = OverviewPage;
var _c;
__turbopack_context__.k.register(_c, "OverviewPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0-z4o5n._.js.map