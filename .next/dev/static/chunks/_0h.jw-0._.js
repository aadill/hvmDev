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
            lineNumber: 27,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/dashboard-shell.tsx",
        lineNumber: 26,
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
            lineNumber: 33,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/dashboard-shell.tsx",
        lineNumber: 32,
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
            lineNumber: 39,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/dashboard-shell.tsx",
        lineNumber: 38,
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
            lineNumber: 45,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/dashboard-shell.tsx",
        lineNumber: 44,
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
            lineNumber: 51,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/dashboard-shell.tsx",
        lineNumber: 50,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = CampaignIcon;
const ClinicalGeneratorIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M7 2.75h7.2L19 7.55V21.25H7Zm1.8 1.8v14.9h8.4V8.3h-3.75V4.55Zm6.45 1.25v.7h.7Zm-4.95 5.1h5.4v1.5h-5.4Zm0 3h5.4v1.5h-5.4Zm0 3h3.65v1.5H10.3ZM3.5 6.25h1.8v13.2h-1.8Z"
        }, void 0, false, {
            fileName: "[project]/components/dashboard-shell.tsx",
            lineNumber: 57,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/dashboard-shell.tsx",
        lineNumber: 56,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c5 = ClinicalGeneratorIcon;
const LogoutIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M5 4.5h8v2H7v11h6v2H5Zm10.35 3.15 4.35 4.35-4.35 4.35-1.42-1.42 1.94-1.93H10v-2h5.87l-1.94-1.93Z"
        }, void 0, false, {
            fileName: "[project]/components/dashboard-shell.tsx",
            lineNumber: 63,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/dashboard-shell.tsx",
        lineNumber: 62,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c6 = LogoutIcon;
function DashboardShell({ children, pageClassName, title, breadcrumbCurrent, breadcrumbTrail, entityTabs, activeEntityTab, activeNav, defaultNavOpen = false, headerTabsClassName, bodyClassName, eventCalendarHref = "/campaign-calendar", eventCalendarActive = false, showEventCalendar = true, activeConditionStage }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [navOpen, setNavOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultNavOpen);
    const [authChecked, setAuthChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dashboardFit, setDashboardFit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        scale: 1,
        width: 1920,
        height: 1080
    });
    const shouldFitDashboard = /overviewPage|calendarPage|lifestagePage|campaignDetailsPage|subConditionPage/.test(pageClassName);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardShell.useEffect": ()=>{
            const isAuthenticated = window.sessionStorage.getItem("hvm-authenticated") === "true";
            if (!isAuthenticated) {
                router.replace("/");
                return;
            }
            setAuthChecked(true);
        }
    }["DashboardShell.useEffect"], [
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardShell.useEffect": ()=>{
            if (!shouldFitDashboard) {
                return;
            }
            const updateScale = {
                "DashboardShell.useEffect.updateScale": ()=>{
                    const widthScale = window.innerWidth / 1920;
                    const heightScale = window.innerHeight / 1080;
                    const nextScale = Math.min(1.45, Math.max(0.64, Math.min(widthScale, heightScale)));
                    const scale = Number(nextScale.toFixed(3));
                    setDashboardFit({
                        scale,
                        width: Math.round(window.innerWidth / scale),
                        height: Math.round(window.innerHeight / scale)
                    });
                }
            }["DashboardShell.useEffect.updateScale"];
            updateScale();
            window.addEventListener("resize", updateScale);
            return ({
                "DashboardShell.useEffect": ()=>window.removeEventListener("resize", updateScale)
            })["DashboardShell.useEffect"];
        }
    }["DashboardShell.useEffect"], [
        shouldFitDashboard
    ]);
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
    const handleLogout = ()=>{
        window.sessionStorage.removeItem("hvm-authenticated");
        setNavOpen(false);
        router.replace("/");
    };
    if (!authChecked) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: `${pageClassName} ${shouldFitDashboard ? "dashboardFitPage" : ""} ${navOpen ? "navOpen" : ""}`,
        style: shouldFitDashboard ? {
            "--dashboard-fit-scale": dashboardFit.scale,
            "--dashboard-fit-width": `${dashboardFit.width}px`,
            "--dashboard-fit-height": `${dashboardFit.height}px`
        } : undefined,
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
                        lineNumber: 172,
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
                                    lineNumber: 180,
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
                                                        lineNumber: 188,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Introduction"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/dashboard-shell.tsx",
                                            lineNumber: 182,
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
                                                        lineNumber: 198,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Overview"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/dashboard-shell.tsx",
                                            lineNumber: 192,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/dashboard-shell.tsx",
                                    lineNumber: 181,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "navSectionLabel",
                                    children: "Conditions"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard-shell.tsx",
                                    lineNumber: 214,
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
                                                        lineNumber: 222,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Condition Overview"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "groupCaret",
                                                    children: "▾"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 225,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/dashboard-shell.tsx",
                                            lineNumber: 216,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "sideBranch",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/lifestage-overview/acquire",
                                                    className: activeConditionStage === "acquire" ? "active" : "",
                                                    onClick: ()=>setNavOpen(false),
                                                    children: "Acquire"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/lifestage-overview/build",
                                                    className: activeConditionStage === "build" ? "active" : "",
                                                    onClick: ()=>setNavOpen(false),
                                                    children: "Build"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 236,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/lifestage-overview/contain",
                                                    className: activeConditionStage === "contain" ? "active" : "",
                                                    onClick: ()=>setNavOpen(false),
                                                    children: "Contain"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/dashboard-shell.tsx",
                                            lineNumber: 227,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/dashboard-shell.tsx",
                                    lineNumber: 215,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "navSectionLabel",
                                    children: "Campaigns"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard-shell.tsx",
                                    lineNumber: 253,
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
                                                        lineNumber: 261,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Campaign Sub Condition"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/dashboard-shell.tsx",
                                            lineNumber: 255,
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
                                                        lineNumber: 271,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Campaign Details"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/dashboard-shell.tsx",
                                            lineNumber: 265,
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
                                                        lineNumber: 281,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 280,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Campaign Calendar"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 283,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/dashboard-shell.tsx",
                                            lineNumber: 275,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/dashboard-shell.tsx",
                                    lineNumber: 254,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "navSectionLabel",
                                    children: "Clinical Guidelines"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard-shell.tsx",
                                    lineNumber: 287,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/clinical-regulation-generator",
                                    className: `sideNavItem ${activeNav === "clinicalGenerator" ? "active" : ""}`,
                                    onClick: ()=>setNavOpen(false),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "sideNavIcon",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ClinicalGeneratorIcon, {}, void 0, false, {
                                                fileName: "[project]/components/dashboard-shell.tsx",
                                                lineNumber: 294,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboard-shell.tsx",
                                            lineNumber: 293,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Guidelines Generator"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboard-shell.tsx",
                                            lineNumber: 296,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/dashboard-shell.tsx",
                                    lineNumber: 288,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "navSection sideNavAccount",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "sideNavItem sideNavLogout",
                                        onClick: handleLogout,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sideNavIcon",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoutIcon, {}, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard-shell.tsx",
                                                lineNumber: 300,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Logout"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard-shell.tsx",
                                                lineNumber: 303,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dashboard-shell.tsx",
                                        lineNumber: 299,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard-shell.tsx",
                                    lineNumber: 298,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dashboard-shell.tsx",
                            lineNumber: 179,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard-shell.tsx",
                        lineNumber: 178,
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
                                            lineNumber: 321,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 325,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 326,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard-shell.tsx",
                                        lineNumber: 314,
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
                                                lineNumber: 332,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "introLogoText",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "HEALTH"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboard-shell.tsx",
                                                        lineNumber: 334,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "VALUE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboard-shell.tsx",
                                                        lineNumber: 335,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "MANAGEMENT"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboard-shell.tsx",
                                                        lineNumber: 336,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dashboard-shell.tsx",
                                                lineNumber: 333,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dashboard-shell.tsx",
                                        lineNumber: 331,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "introTitleWrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                children: title
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard-shell.tsx",
                                                lineNumber: 341,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: breadcrumbItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            index > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "→"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/dashboard-shell.tsx",
                                                                lineNumber: 345,
                                                                columnNumber: 34
                                                            }, this) : null,
                                                            item.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: item.href,
                                                                children: item.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/dashboard-shell.tsx",
                                                                lineNumber: 346,
                                                                columnNumber: 34
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: item.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/dashboard-shell.tsx",
                                                                lineNumber: 346,
                                                                columnNumber: 79
                                                            }, this)
                                                        ]
                                                    }, item.label, true, {
                                                        fileName: "[project]/components/dashboard-shell.tsx",
                                                        lineNumber: 344,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard-shell.tsx",
                                                lineNumber: 342,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dashboard-shell.tsx",
                                        lineNumber: 340,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dashboard-shell.tsx",
                                lineNumber: 313,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "introHeaderActions",
                                children: [
                                    entityTabs?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `entityTabs ${headerTabsClassName ?? ""}`,
                                        "aria-label": "Entity tabs",
                                        children: entityTabs.map((pill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: pill === activeEntityTab ? "entityTab active" : "entityTab",
                                                type: "button",
                                                children: pill
                                            }, pill, false, {
                                                fileName: "[project]/components/dashboard-shell.tsx",
                                                lineNumber: 357,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard-shell.tsx",
                                        lineNumber: 355,
                                        columnNumber: 15
                                    }, this) : null,
                                    showEventCalendar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: eventCalendarHref,
                                        className: `calendarButton ${eventCalendarActive ? "calendarButtonActive" : ""}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": "true",
                                                children: "🗓"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard-shell.tsx",
                                                lineNumber: 373,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Event Calendar"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard-shell.tsx",
                                                lineNumber: 374,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dashboard-shell.tsx",
                                        lineNumber: 369,
                                        columnNumber: 15
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dashboard-shell.tsx",
                                lineNumber: 353,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard-shell.tsx",
                        lineNumber: 312,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: `${bodyClassName} dashboardBodyArea ${navOpen ? "isBlurred" : ""}`,
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard-shell.tsx",
                        lineNumber: 380,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard-shell.tsx",
                lineNumber: 311,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboard-shell.tsx",
        lineNumber: 158,
        columnNumber: 5
    }, this);
}
_s(DashboardShell, "fUubcalLUJZ8pTYzX7OpaWeEolc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c7 = DashboardShell;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "CloseIcon");
__turbopack_context__.k.register(_c1, "IntroIcon");
__turbopack_context__.k.register(_c2, "OverviewIcon");
__turbopack_context__.k.register(_c3, "ConditionIcon");
__turbopack_context__.k.register(_c4, "CampaignIcon");
__turbopack_context__.k.register(_c5, "ClinicalGeneratorIcon");
__turbopack_context__.k.register(_c6, "LogoutIcon");
__turbopack_context__.k.register(_c7, "DashboardShell");
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
    "ExportGroupedBarChart",
    ()=>ExportGroupedBarChart,
    "ExportHeatmap",
    ()=>ExportHeatmap,
    "ExportHorizontalBarChart",
    ()=>ExportHorizontalBarChart,
    "ExportLabeledDonutChart",
    ()=>ExportLabeledDonutChart,
    "ExportLineChart",
    ()=>ExportLineChart,
    "ExportMultiLineChart",
    ()=>ExportMultiLineChart,
    "ExportSankeyChart",
    ()=>ExportSankeyChart,
    "ExportStackedBarChart",
    ()=>ExportStackedBarChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Area.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/AreaChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ComposedChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/ComposedChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Funnel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$FunnelChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/FunnelChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$LabelList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/LabelList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Line.js [app-client] (ecmascript)");
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
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    point.value,
                    "% conversion"
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 132,
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
                lineNumber: 150,
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
                lineNumber: 151,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 149,
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
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    point.count,
                    " patients"
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    point.revenue,
                    " incremental revenue"
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 166,
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
        lineNumber: 189,
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
                lineNumber: 210,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    formatCompactAmount(point.value ?? 0),
                    " patients"
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 209,
        columnNumber: 5
    }, this);
}
_c4 = SankeyTooltip;
function ExportLineChart({ values, max, color = "#2563EB", area = false, width = 280, height = 140, labels, showDots = true }) {
    _s();
    const gradientId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])().replace(/:/g, "");
    const data = values.map((value, index)=>({
            label: labels?.[index] ?? `Point ${index + 1}`,
            value
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "linechart rechartsChart",
        style: {
            minHeight: height
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            width: "100%",
            height: "100%",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AreaChart"], {
                data: data,
                margin: {
                    top: 8,
                    right: 10,
                    bottom: 2,
                    left: -22
                },
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
                                    lineNumber: 249,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "58%",
                                    stopColor: color,
                                    stopOpacity: "0.12"
                                }, void 0, false, {
                                    fileName: "[project]/components/export-visuals.tsx",
                                    lineNumber: 250,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "100%",
                                    stopColor: color,
                                    stopOpacity: "0"
                                }, void 0, false, {
                                    fileName: "[project]/components/export-visuals.tsx",
                                    lineNumber: 251,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/export-visuals.tsx",
                            lineNumber: 248,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 247,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                        stroke: "#c7e0f8",
                        strokeOpacity: 0.85
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 254,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                        dataKey: "label",
                        tick: {
                            fill: "#64748B",
                            fontSize: 10
                        },
                        axisLine: {
                            stroke: "#7aa1c4"
                        },
                        tickLine: false,
                        interval: 0
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 255,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                        domain: [
                            0,
                            max
                        ],
                        tick: {
                            fill: "#64748B",
                            fontSize: 10
                        },
                        axisLine: {
                            stroke: "#7aa1c4"
                        },
                        tickLine: false,
                        width: 34
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 256,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                        cursor: {
                            stroke: "#8cbbe8",
                            strokeDasharray: "4 4"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 257,
                        columnNumber: 11
                    }, this),
                    area ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Area"], {
                        type: "monotone",
                        dataKey: "value",
                        stroke: color,
                        strokeWidth: 2.4,
                        fill: `url(#lineArea-${gradientId})`,
                        dot: showDots ? {
                            r: 3,
                            fill: color,
                            strokeWidth: 0
                        } : false,
                        activeDot: {
                            r: 5
                        },
                        name: "Value"
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 259,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                        type: "monotone",
                        dataKey: "value",
                        stroke: color,
                        strokeWidth: 2.4,
                        dot: showDots ? {
                            r: 3,
                            fill: color,
                            strokeWidth: 0
                        } : false,
                        activeDot: {
                            r: 5
                        },
                        name: "Value"
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 270,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 246,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 245,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 244,
        columnNumber: 5
    }, this);
}
_s(ExportLineChart, "xfMyHNFebGjSN1/YPqrD8z5EdLc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c5 = ExportLineChart;
function ExportMultiLineChart({ series, labels, periodLabels, colors, names, valueSuffix = "", yAxisLabel, width = 280, height = 140 }) {
    _s1();
    const gradientSeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])().replace(/:/g, "");
    const maxValue = Math.max(...series.flat(), 0);
    const maxY = Math.max(1, Math.ceil(maxValue * 1.18));
    const data = labels.map((label, index)=>({
            label,
            monthLabel: periodLabels?.[index]?.month ?? label,
            yearLabel: periodLabels?.[index]?.year ?? "",
            ...series.reduce((acc, row, rowIndex)=>{
                acc[`series${rowIndex + 1}`] = row[index] ?? 0;
                return acc;
            }, {})
        }));
    const renderPeriodTick = ({ x = 0, y = 0, payload, index = 0 })=>{
        const tickX = Number(x);
        const tickY = Number(y);
        const period = periodLabels?.[index];
        const shouldShowYear = Boolean(period?.showYear ?? (period && (index === 0 || period.year !== periodLabels?.[index - 1]?.year)));
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            transform: `translate(${Number.isFinite(tickX) ? tickX : 0},${Number.isFinite(tickY) ? tickY : 0})`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: 0,
                    y: 0,
                    dy: 10,
                    textAnchor: "middle",
                    fill: "#64748B",
                    fontSize: 10,
                    children: payload?.value
                }, void 0, false, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 327,
                    columnNumber: 9
                }, this),
                shouldShowYear ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: 0,
                    y: 0,
                    dy: 24,
                    textAnchor: "middle",
                    fill: "#1E3A5F",
                    fontSize: 10,
                    fontWeight: 800,
                    children: period?.year
                }, void 0, false, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 331,
                    columnNumber: 11
                }, this) : null
            ]
        }, void 0, true, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 326,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "linechart rechartsChart",
        style: {
            minHeight: height
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            width: "100%",
            height: "100%",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AreaChart"], {
                data: data,
                margin: {
                    top: 8,
                    right: 12,
                    bottom: periodLabels ? 12 : 2,
                    left: yAxisLabel ? 0 : -12
                },
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
                                        stopOpacity: "0.28"
                                    }, void 0, false, {
                                        fileName: "[project]/components/export-visuals.tsx",
                                        lineNumber: 346,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "58%",
                                        stopColor: color,
                                        stopOpacity: "0.1"
                                    }, void 0, false, {
                                        fileName: "[project]/components/export-visuals.tsx",
                                        lineNumber: 347,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: color,
                                        stopOpacity: "0"
                                    }, void 0, false, {
                                        fileName: "[project]/components/export-visuals.tsx",
                                        lineNumber: 348,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, color + index, true, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 345,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 343,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                        stroke: "#c7e0f8",
                        strokeOpacity: 0.85
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 352,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                        dataKey: periodLabels ? "monthLabel" : "label",
                        tick: periodLabels ? renderPeriodTick : {
                            fill: "#64748B",
                            fontSize: 10
                        },
                        axisLine: {
                            stroke: "#7aa1c4"
                        },
                        tickLine: false,
                        interval: 0,
                        height: periodLabels ? 34 : 24
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 353,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                        domain: [
                            0,
                            maxY
                        ],
                        tick: {
                            fill: "#64748B",
                            fontSize: 10
                        },
                        axisLine: {
                            stroke: "#7aa1c4"
                        },
                        tickLine: false,
                        tickFormatter: (value)=>`${value}${valueSuffix}`,
                        width: 44,
                        label: yAxisLabel ? {
                            value: yAxisLabel,
                            angle: -90,
                            position: "insideLeft",
                            fill: "#64748B",
                            fontSize: 10
                        } : undefined
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 361,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                        cursor: {
                            stroke: "#8cbbe8",
                            strokeDasharray: "4 4"
                        },
                        labelFormatter: (_label, payload)=>payload?.[0]?.payload?.label ?? _label,
                        formatter: (value, name)=>{
                            const numericValue = Number(value);
                            const formattedValue = Number.isFinite(numericValue) ? numericValue.toFixed(2).replace(/\.00$/, "").replace(/(\.\d)0$/, "$1") : String(value);
                            return [
                                `${formattedValue}${valueSuffix}`,
                                name
                            ];
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 370,
                        columnNumber: 11
                    }, this),
                    series.map((_, rowIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Area"], {
                            type: "monotone",
                            dataKey: `series${rowIndex + 1}`,
                            name: names?.[rowIndex] ?? `Series ${rowIndex + 1}`,
                            stroke: colors[rowIndex],
                            strokeWidth: 2.2,
                            fill: `url(#multiLineArea-${gradientSeed}-${rowIndex})`,
                            dot: {
                                r: 3,
                                fill: colors[rowIndex],
                                strokeWidth: 0
                            },
                            activeDot: {
                                r: 5
                            }
                        }, rowIndex, false, {
                            fileName: "[project]/components/export-visuals.tsx",
                            lineNumber: 383,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 342,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 341,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 340,
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
    const height = 140;
    const data = values.map((value, index)=>({
            label: labels[index],
            value
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "linechart rechartsChart",
        style: {
            minHeight: height
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            width: "100%",
            height: "100%",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                data: data,
                margin: {
                    top: 18,
                    right: 10,
                    bottom: 2,
                    left: -22
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                        stroke: "#c7e0f8",
                        strokeOpacity: 0.85
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 424,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                        dataKey: "label",
                        tick: {
                            fill: "#64748B",
                            fontSize: 10
                        },
                        axisLine: {
                            stroke: "#7aa1c4"
                        },
                        tickLine: false,
                        interval: 0
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 425,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                        domain: [
                            0,
                            max
                        ],
                        tick: {
                            fill: "#64748B",
                            fontSize: 10
                        },
                        axisLine: {
                            stroke: "#7aa1c4"
                        },
                        tickLine: false,
                        width: 34
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 426,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                        cursor: {
                            fill: "rgba(191, 219, 254, 0.22)"
                        },
                        formatter: (value)=>[
                                `${value}K`,
                                "Value"
                            ]
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 427,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                        dataKey: "value",
                        fill: color,
                        radius: [
                            3,
                            3,
                            0,
                            0
                        ],
                        name: "Value",
                        children: [
                            data.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                    fill: color
                                }, item.label, false, {
                                    fileName: "[project]/components/export-visuals.tsx",
                                    lineNumber: 430,
                                    columnNumber: 15
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$LabelList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabelList"], {
                                dataKey: "value",
                                position: "top",
                                formatter: (value)=>`${value ?? 0}K`,
                                fill: textColor,
                                fontSize: 10,
                                fontWeight: 700
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 432,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 428,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 423,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 422,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 421,
        columnNumber: 5
    }, this);
}
_c7 = ExportBarValueChart;
function ExportGroupedBarChart({ data, height = 190, targetColor = "#A8C2D9", contactedColor = "#2466E7", bookedColor = "#12BE7C" }) {
    const maxY = Math.max(...data.flatMap((item)=>[
            item.target,
            item.contacted,
            item.booked
        ]), 1);
    const formatAxisCount = (value)=>{
        if (value >= 1_000_000) {
            return `${(value / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
        }
        if (value >= 1_000) {
            return `${(value / 1_000).toFixed(0)}K`;
        }
        return String(value);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "linechart rechartsChart",
        style: {
            minHeight: height
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            width: "100%",
            height: "100%",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                data: data,
                margin: {
                    top: 18,
                    right: 10,
                    bottom: 0,
                    left: -22
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                        stroke: "#c7e0f8",
                        strokeOpacity: 0.85
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 470,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                        dataKey: "label",
                        tick: {
                            fill: "#64748B",
                            fontSize: 10
                        },
                        axisLine: {
                            stroke: "#7aa1c4"
                        },
                        tickLine: false,
                        interval: 0
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 471,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                        domain: [
                            0,
                            Math.ceil(maxY * 1.15)
                        ],
                        tick: {
                            fill: "#64748B",
                            fontSize: 10
                        },
                        axisLine: {
                            stroke: "#7aa1c4"
                        },
                        tickLine: false,
                        width: 42,
                        tickFormatter: (value)=>formatAxisCount(Number(value))
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 472,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                        cursor: {
                            fill: "rgba(191, 219, 254, 0.22)"
                        },
                        formatter: (value, name)=>[
                                Number(value).toLocaleString("en-US"),
                                name
                            ]
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 473,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                        dataKey: "target",
                        fill: targetColor,
                        radius: [
                            3,
                            3,
                            0,
                            0
                        ],
                        name: "Target",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$LabelList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabelList"], {
                            dataKey: "target",
                            position: "top",
                            formatter: (value)=>formatAxisCount(Number(value ?? 0)),
                            fill: "#64748B",
                            fontSize: 10,
                            fontWeight: 700
                        }, void 0, false, {
                            fileName: "[project]/components/export-visuals.tsx",
                            lineNumber: 475,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 474,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                        dataKey: "contacted",
                        fill: contactedColor,
                        radius: [
                            3,
                            3,
                            0,
                            0
                        ],
                        name: "Contacted",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$LabelList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabelList"], {
                            dataKey: "contacted",
                            position: "top",
                            formatter: (value)=>formatAxisCount(Number(value ?? 0)),
                            fill: "#64748B",
                            fontSize: 10,
                            fontWeight: 700
                        }, void 0, false, {
                            fileName: "[project]/components/export-visuals.tsx",
                            lineNumber: 478,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 477,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                        dataKey: "booked",
                        fill: bookedColor,
                        radius: [
                            3,
                            3,
                            0,
                            0
                        ],
                        name: "Booked",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$LabelList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabelList"], {
                            dataKey: "booked",
                            position: "top",
                            formatter: (value)=>formatAxisCount(Number(value ?? 0)),
                            fill: "#64748B",
                            fontSize: 10,
                            fontWeight: 700
                        }, void 0, false, {
                            fileName: "[project]/components/export-visuals.tsx",
                            lineNumber: 481,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 480,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 469,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 468,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 467,
        columnNumber: 5
    }, this);
}
_c8 = ExportGroupedBarChart;
function ExportHorizontalBarChart({ data, height = 190, color = "#20AEE4", max = 100 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "linechart rechartsChart",
        style: {
            minHeight: height
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            width: "100%",
            height: "100%",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                data: data,
                layout: "vertical",
                margin: {
                    top: 6,
                    right: 18,
                    bottom: 8,
                    left: 78
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                        stroke: "#c7e0f8",
                        strokeOpacity: 0.85
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 504,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                        type: "number",
                        domain: [
                            0,
                            max
                        ],
                        tick: {
                            fill: "#64748B",
                            fontSize: 10
                        },
                        axisLine: {
                            stroke: "#7aa1c4"
                        },
                        tickLine: false,
                        tickFormatter: (value)=>`${value}%`
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 505,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                        type: "category",
                        dataKey: "label",
                        tick: {
                            fill: "#64748B",
                            fontSize: 10
                        },
                        axisLine: {
                            stroke: "#7aa1c4"
                        },
                        tickLine: false,
                        width: 78
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 506,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                        cursor: {
                            fill: "rgba(191, 219, 254, 0.2)"
                        },
                        formatter: (value)=>[
                                `${value}%`,
                                "Conversion"
                            ]
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 507,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                        dataKey: "value",
                        fill: color,
                        radius: [
                            0,
                            4,
                            4,
                            0
                        ],
                        barSize: 12,
                        name: "Conversion"
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 508,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 503,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 502,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 501,
        columnNumber: 5
    }, this);
}
_c9 = ExportHorizontalBarChart;
function ExportStackedBarChart({ data, height = 210, max }) {
    const yMax = max ?? Math.max(...data.map((item)=>item.stopper + item.dropper), 1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "linechart rechartsChart",
        style: {
            minHeight: height
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            width: "100%",
            height: "100%",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                data: data,
                margin: {
                    top: 12,
                    right: 10,
                    bottom: 0,
                    left: -18
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                        stroke: "#c7e0f8",
                        strokeOpacity: 0.85
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 530,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                        dataKey: "label",
                        tick: {
                            fill: "#64748B",
                            fontSize: 10
                        },
                        axisLine: {
                            stroke: "#7aa1c4"
                        },
                        tickLine: false,
                        interval: 0
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 531,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                        domain: [
                            0,
                            yMax
                        ],
                        tick: {
                            fill: "#64748B",
                            fontSize: 10
                        },
                        axisLine: {
                            stroke: "#7aa1c4"
                        },
                        tickLine: false,
                        width: 38
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 532,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                        cursor: {
                            fill: "rgba(191, 219, 254, 0.22)"
                        },
                        formatter: (value, name)=>[
                                value,
                                name === "stopper" ? "Stopper" : "Dropper"
                            ],
                        labelFormatter: (label, payload)=>payload?.[0]?.payload?.tooltip ?? label
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 533,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                        dataKey: "dropper",
                        stackId: "patients",
                        fill: "#A8C2D9",
                        radius: [
                            3,
                            3,
                            0,
                            0
                        ],
                        name: "Dropper"
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 538,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                        dataKey: "stopper",
                        stackId: "patients",
                        fill: "#2563EB",
                        radius: [
                            3,
                            3,
                            0,
                            0
                        ],
                        name: "Stopper"
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 539,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 529,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 528,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 527,
        columnNumber: 5
    }, this);
}
_c10 = ExportStackedBarChart;
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
            lineNumber: 572,
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
                        lineNumber: 585,
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
                            lineNumber: 588,
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
                        lineNumber: 601,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 584,
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
                                lineNumber: 608,
                                columnNumber: 23
                            }, this)
                        ]
                    }, d.label, true, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 607,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 605,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 583,
        columnNumber: 5
    }, this);
}
_c11 = ExportDonutChart;
function renderDonutCallout({ cx, cy, midAngle, outerRadius, percent, name, value }) {
    const RADIAN = Math.PI / 180;
    const angle = midAngle ?? 0;
    const radius = outerRadius ?? 0;
    const centerX = cx ?? 0;
    const centerY = cy ?? 0;
    const sx = centerX + (radius - 4) * Math.cos(-angle * RADIAN);
    const sy = centerY + (radius - 4) * Math.sin(-angle * RADIAN);
    const mx = centerX + (radius + 8) * Math.cos(-angle * RADIAN);
    const my = centerY + (radius + 8) * Math.sin(-angle * RADIAN);
    const ex = mx + (Math.cos(-angle * RADIAN) >= 0 ? 18 : -18);
    const ey = my;
    const textAnchor = ex > centerX ? "start" : "end";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: `M${sx},${sy}L${mx},${my}L${ex},${ey}`,
                stroke: "#2f4357",
                strokeWidth: 1.2,
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 648,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: ex + (textAnchor === "start" ? 3 : -3),
                y: ey - 6,
                textAnchor: textAnchor,
                fontSize: "10",
                fill: "#5f778e",
                children: name
            }, void 0, false, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 649,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: ex + (textAnchor === "start" ? 3 : -3),
                y: ey + 10,
                textAnchor: textAnchor,
                fontSize: "12",
                fill: "#2f4357",
                fontWeight: "500",
                children: value ?? `${Math.round((percent ?? 0) * 100)}%`
            }, void 0, false, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 652,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 647,
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
            height: "100%",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                margin: {
                    top: 8,
                    right: 28,
                    bottom: 8,
                    left: 28
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                        data: data,
                        dataKey: "pct",
                        nameKey: "label",
                        cx: "50%",
                        cy: "53%",
                        innerRadius: "42%",
                        outerRadius: "60%",
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
                                lineNumber: 698,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 674,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "50%",
                        y: "53%",
                        textAnchor: "middle",
                        dominantBaseline: "middle",
                        fontSize: "28",
                        fontWeight: "500",
                        fill: "#2c3f52",
                        children: computedCenterValue
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 701,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 673,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 672,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 671,
        columnNumber: 5
    }, this);
}
_c12 = ExportLabeledDonutChart;
function ExportBubbleChart({ data, height = 260 }) {
    if (!data.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "exportChartEmpty",
            children: "No chart data available."
        }, void 0, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 718,
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
                        lineNumber: 725,
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
                        lineNumber: 726,
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
                        lineNumber: 727,
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
                        lineNumber: 728,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                        content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BubbleTooltip, {}, void 0, false, {
                            fileName: "[project]/components/export-visuals.tsx",
                            lineNumber: 729,
                            columnNumber: 29
                        }, this),
                        cursor: false
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 729,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Scatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scatter"], {
                        data: data,
                        shape: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BubbleShape, {}, void 0, false, {
                            fileName: "[project]/components/export-visuals.tsx",
                            lineNumber: 730,
                            columnNumber: 39
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 730,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 724,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 723,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 722,
        columnNumber: 5
    }, this);
}
_c13 = ExportBubbleChart;
function ExportFunnelChart({ data, height = 250, leftHeader, rightHeader }) {
    if (!data.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "exportChartEmpty",
            children: "No chart data available."
        }, void 0, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 749,
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
                                    lineNumber: 764,
                                    columnNumber: 31
                                }, this),
                                cursor: false
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 764,
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
                                            lineNumber: 766,
                                            columnNumber: 35
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/export-visuals.tsx",
                                        lineNumber: 766,
                                        columnNumber: 15
                                    }, this),
                                    prepared.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                            fill: item.fill,
                                            stroke: item.fill
                                        }, item.label, false, {
                                            fileName: "[project]/components/export-visuals.tsx",
                                            lineNumber: 768,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 765,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 763,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 762,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 761,
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
                                lineNumber: 778,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: rightHeader ?? ""
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 779,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 777,
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
                                            lineNumber: 786,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "exportFunnelMetaNotes",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: item.leftNote
                                                }, void 0, false, {
                                                    fileName: "[project]/components/export-visuals.tsx",
                                                    lineNumber: 790,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: item.rightNote
                                                }, void 0, false, {
                                                    fileName: "[project]/components/export-visuals.tsx",
                                                    lineNumber: 791,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/export-visuals.tsx",
                                            lineNumber: 789,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/export-visuals.tsx",
                                    lineNumber: 785,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "exportFunnelRevenue",
                                    children: item.revenue
                                }, void 0, false, {
                                    fileName: "[project]/components/export-visuals.tsx",
                                    lineNumber: 794,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, item.label, true, {
                            fileName: "[project]/components/export-visuals.tsx",
                            lineNumber: 784,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 775,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 760,
        columnNumber: 5
    }, this);
}
_c14 = ExportFunnelChart;
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
                    lineNumber: 859,
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
                    lineNumber: 860,
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
                    lineNumber: 863,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 858,
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
            lineNumber: 880,
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
                    lineNumber: 891,
                    columnNumber: 17
                }, this),
                node: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SankeyNode, {}, void 0, false, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 892,
                    columnNumber: 17
                }, this),
                iterations: 64,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                    content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SankeyTooltip, {}, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 895,
                        columnNumber: 29
                    }, this),
                    cursor: false
                }, void 0, false, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 895,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 886,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 885,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 884,
        columnNumber: 5
    }, this);
}
_c15 = ExportSankeyChart;
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
                        lineNumber: 911,
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
                        lineNumber: 920,
                        columnNumber: 11
                    }, this)
                ]
            }, segment.label, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 910,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 908,
        columnNumber: 5
    }, this);
}
_c16 = ExportBubbleSegments;
function ExportHeatmap({ values, columns, rows }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "campaignHeatmap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "campaignHeatHeaderSpacer"
            }, void 0, false, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 947,
                columnNumber: 7
            }, this),
            columns.map((column)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "campaignHeatHeader",
                    children: column
                }, column, false, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 949,
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
                            lineNumber: 955,
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
                                lineNumber: 957,
                                columnNumber: 13
                            }, this))
                    ]
                }, row, true, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 954,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 946,
        columnNumber: 5
    }, this);
}
_c17 = ExportHeatmap;
function ExportEntitiesSummary({ summary, series, chartHeight = 130 }) {
    const chartTop = 16;
    const chartBottom = 24;
    const availableHeight = chartHeight - chartTop - chartBottom;
    const lineMax = Math.max(...series.map((item)=>item.line), 1);
    const barMax = Math.max(...series.map((item)=>item.bar), 1);
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
                                lineNumber: 989,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 989,
                                columnNumber: 82
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "#64748B"
                                },
                                children: "Entities active"
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 989,
                                columnNumber: 88
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 989,
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
                                lineNumber: 990,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 990,
                                columnNumber: 82
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "#64748B"
                                },
                                children: "Total enrolled"
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 990,
                                columnNumber: 88
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 990,
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
                                lineNumber: 991,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 991,
                                columnNumber: 81
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "#64748B"
                                },
                                children: "Total Revenue"
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 991,
                                columnNumber: 87
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 991,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 988,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "linechart rechartsChart",
                style: {
                    height: '300px',
                    minHeight: chartHeight
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                    width: "100%",
                    height: "100%",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ComposedChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComposedChart"], {
                        data: series,
                        margin: {
                            top: 8,
                            right: 8,
                            bottom: 0,
                            left: -24
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                stroke: "#c7e0f8",
                                strokeOpacity: 0.85
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 996,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                dataKey: "name",
                                tick: {
                                    fill: "#64748B",
                                    fontSize: 9
                                },
                                axisLine: {
                                    stroke: "#7aa1c4"
                                },
                                tickLine: false,
                                interval: 0
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 997,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                yAxisId: "bar",
                                domain: [
                                    0,
                                    barMax
                                ],
                                tick: {
                                    fill: "#64748B",
                                    fontSize: 9
                                },
                                axisLine: {
                                    stroke: "#7aa1c4"
                                },
                                tickLine: false,
                                width: 34
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 998,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                yAxisId: "line",
                                orientation: "right",
                                domain: [
                                    0,
                                    lineMax
                                ],
                                tick: {
                                    fill: "#22C55E",
                                    fontSize: 9
                                },
                                axisLine: {
                                    stroke: "#22C55E"
                                },
                                tickLine: false,
                                width: 34
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 1006,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                cursor: {
                                    fill: "rgba(191, 219, 254, 0.18)"
                                },
                                formatter: (value, name)=>[
                                        `${value}K`,
                                        name === "bar" ? "Patients" : "Revenue"
                                    ]
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 1015,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                yAxisId: "bar",
                                dataKey: "bar",
                                fill: "#BFDBFE",
                                radius: [
                                    3,
                                    3,
                                    0,
                                    0
                                ],
                                name: "Patients"
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 1019,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                yAxisId: "line",
                                type: "monotone",
                                dataKey: "line",
                                stroke: "#22C55E",
                                strokeWidth: 2.2,
                                dot: {
                                    r: 3,
                                    fill: "#22C55E",
                                    strokeWidth: 0
                                },
                                activeDot: {
                                    r: 5
                                },
                                name: "Revenue"
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 1020,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 995,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 994,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 993,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c18 = ExportEntitiesSummary;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18;
__turbopack_context__.k.register(_c, "BubbleTooltip");
__turbopack_context__.k.register(_c1, "BubbleShape");
__turbopack_context__.k.register(_c2, "FunnelTooltip");
__turbopack_context__.k.register(_c3, "FunnelCenterLabel");
__turbopack_context__.k.register(_c4, "SankeyTooltip");
__turbopack_context__.k.register(_c5, "ExportLineChart");
__turbopack_context__.k.register(_c6, "ExportMultiLineChart");
__turbopack_context__.k.register(_c7, "ExportBarValueChart");
__turbopack_context__.k.register(_c8, "ExportGroupedBarChart");
__turbopack_context__.k.register(_c9, "ExportHorizontalBarChart");
__turbopack_context__.k.register(_c10, "ExportStackedBarChart");
__turbopack_context__.k.register(_c11, "ExportDonutChart");
__turbopack_context__.k.register(_c12, "ExportLabeledDonutChart");
__turbopack_context__.k.register(_c13, "ExportBubbleChart");
__turbopack_context__.k.register(_c14, "ExportFunnelChart");
__turbopack_context__.k.register(_c15, "ExportSankeyChart");
__turbopack_context__.k.register(_c16, "ExportBubbleSegments");
__turbopack_context__.k.register(_c17, "ExportHeatmap");
__turbopack_context__.k.register(_c18, "ExportEntitiesSummary");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/data/hvm-dataset.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = JSON.parse("[{\"campaignId\":\"Antenatal1\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"Antenatal\",\"condition\":\"Antenatal\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-1\",\"booked\":75,\"target\":163,\"contacted\":163,\"enrolled\":163,\"attended\":61,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":767841.47,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Antenatal1\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"Antenatal\",\"condition\":\"Antenatal\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":51,\"target\":340,\"contacted\":340,\"enrolled\":340,\"attended\":51,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1520183.0641873828,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Antenatal1\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"Antenatal\",\"condition\":\"Antenatal\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":119,\"target\":417,\"contacted\":417,\"enrolled\":417,\"attended\":70,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":2363961.489977023,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Antenatal1\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"Antenatal\",\"condition\":\"Antenatal\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":414,\"target\":414,\"contacted\":414,\"enrolled\":414,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Antenatal1\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"Antenatal\",\"condition\":\"Antenatal\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-2\",\"booked\":35,\"target\":140,\"contacted\":140,\"enrolled\":140,\"attended\":35,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":652951.2999999996,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Antenatal1\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"Antenatal\",\"condition\":\"Antenatal\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-3\",\"booked\":70,\"target\":583,\"contacted\":583,\"enrolled\":583,\"attended\":70,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1417079.8610084022,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Antenatal1\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"Antenatal\",\"condition\":\"Antenatal\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-4\",\"booked\":84,\"target\":400,\"contacted\":400,\"enrolled\":400,\"attended\":84,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":2114321.264884581,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Antenatal1\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"Antenatal\",\"condition\":\"Antenatal\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":14,\"target\":50,\"contacted\":50,\"enrolled\":50,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Antenatal1\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"Antenatal\",\"condition\":\"Antenatal\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":39,\"target\":325,\"contacted\":325,\"enrolled\":325,\"attended\":39,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1281570.2649908226,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Antenatal1\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"Antenatal\",\"condition\":\"Antenatal\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":87,\"target\":458,\"contacted\":458,\"enrolled\":458,\"attended\":87,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":2574062.9462444168,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Antenatal1\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"Antenatal\",\"condition\":\"Antenatal\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-8\",\"booked\":22,\"target\":122,\"contacted\":122,\"enrolled\":122,\"attended\":22,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":857208.486110056,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Antenatal1\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"Antenatal\",\"condition\":\"Antenatal\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":93,\"target\":207,\"contacted\":207,\"enrolled\":207,\"attended\":93,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":2743069.722317904,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Antenatal1\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"Antenatal\",\"condition\":\"Antenatal\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":117,\"target\":117,\"contacted\":117,\"enrolled\":117,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Antenatal1\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"Antenatal\",\"condition\":\"Antenatal\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2026-2\",\"booked\":119,\"target\":119,\"contacted\":119,\"enrolled\":119,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Antenatal1\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"Antenatal\",\"condition\":\"Antenatal\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2026-3\",\"booked\":48,\"target\":48,\"contacted\":48,\"enrolled\":48,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Antenatal1\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"Antenatal\",\"condition\":\"Antenatal\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":257,\"target\":257,\"contacted\":257,\"enrolled\":257,\"attended\":257,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":6283248.456452254,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Dyslipidemia1\",\"provider\":\"Al Rahba\",\"stage\":\"Acquire\",\"campaignName\":\"Dyslipidemia\",\"condition\":\"Dyslipidemia\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":4,\"target\":26,\"contacted\":21,\"enrolled\":21,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Dyslipidemia1\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"Dyslipidemia\",\"condition\":\"Dyslipidemia\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":168,\"target\":732,\"contacted\":575,\"enrolled\":575,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Dyslipidemia1\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"Dyslipidemia\",\"condition\":\"Dyslipidemia\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":40,\"target\":356,\"contacted\":290,\"enrolled\":290,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Dyslipidemia1\",\"provider\":\"STMC\",\"stage\":\"Acquire\",\"campaignName\":\"Dyslipidemia\",\"condition\":\"Dyslipidemia\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":15,\"target\":84,\"contacted\":71,\"enrolled\":71,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Dyslipidemia1\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"Dyslipidemia\",\"condition\":\"Dyslipidemia\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":32,\"target\":308,\"contacted\":254,\"enrolled\":254,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Dyslipidemia2\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"Dyslipidemia\",\"condition\":\"Dyslipidemia\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-2\",\"booked\":437,\"target\":3683,\"contacted\":1615,\"enrolled\":1615,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Dyslipidemia2\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"Dyslipidemia\",\"condition\":\"Dyslipidemia\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-3\",\"booked\":71,\"target\":842,\"contacted\":264,\"enrolled\":264,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Dyslipidemia3\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"Dyslipidemia\",\"condition\":\"Dyslipidemia\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-3\",\"booked\":48,\"target\":476,\"contacted\":215,\"enrolled\":215,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Dyslipidemia3\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"Dyslipidemia\",\"condition\":\"Dyslipidemia\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-4\",\"booked\":30,\"target\":244,\"contacted\":86,\"enrolled\":86,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management1\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2024-12\",\"booked\":null,\"target\":4,\"contacted\":2,\"enrolled\":2,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management1\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-1\",\"booked\":162,\"target\":518,\"contacted\":304,\"enrolled\":314,\"attended\":126,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":305008.88,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management1\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-2\",\"booked\":726,\"target\":2539,\"contacted\":1398,\"enrolled\":1405,\"attended\":499,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1232258.7800000005,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management1\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-3\",\"booked\":366,\"target\":1151,\"contacted\":851,\"enrolled\":851,\"attended\":236,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":521523.05999999994,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management1\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-4\",\"booked\":450,\"target\":1094,\"contacted\":1075,\"enrolled\":1075,\"attended\":313,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":623867.6699999999,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management1\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":354,\"target\":1059,\"contacted\":894,\"enrolled\":894,\"attended\":213,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":413919.4099999998,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management1\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":37,\"target\":321,\"contacted\":75,\"enrolled\":75,\"attended\":19,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":26425.76999999999,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management2\",\"provider\":\"Al Ain\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":2,\"target\":72,\"contacted\":32,\"enrolled\":32,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management2\",\"provider\":\"Al Ain\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":4,\"target\":31,\"contacted\":9,\"enrolled\":9,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1208.4,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management2\",\"provider\":\"Al Ain\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-8\",\"booked\":2,\"target\":15,\"contacted\":7,\"enrolled\":7,\"attended\":2,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":2343.8,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management2\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-3\",\"booked\":3,\"target\":12,\"contacted\":5,\"enrolled\":5,\"attended\":3,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":4635.139999999999,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management2\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":31,\"target\":139,\"contacted\":55,\"enrolled\":55,\"attended\":19,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":27292.99,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management2\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":603,\"target\":3611,\"contacted\":1532,\"enrolled\":1532,\"attended\":396,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":601692.97,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management2\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-8\",\"booked\":625,\"target\":3858,\"contacted\":1641,\"enrolled\":1641,\"attended\":449,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":657446.5799999998,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management2\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":11,\"target\":81,\"contacted\":32,\"enrolled\":32,\"attended\":5,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":5658.6,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management2\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":99,\"target\":681,\"contacted\":360,\"enrolled\":360,\"attended\":42,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":51517.54,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management2\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-8\",\"booked\":null,\"target\":1,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management2\",\"provider\":\"STMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-4\",\"booked\":1,\"target\":2,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management2\",\"provider\":\"STMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":74,\"target\":441,\"contacted\":232,\"enrolled\":232,\"attended\":57,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":79774.46999999996,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management2\",\"provider\":\"STMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":14,\"target\":124,\"contacted\":66,\"enrolled\":66,\"attended\":8,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":13045.28,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management2\",\"provider\":\"STMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-8\",\"booked\":7,\"target\":57,\"contacted\":18,\"enrolled\":18,\"attended\":5,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":6304,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management2\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-4\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management2\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":37,\"target\":288,\"contacted\":164,\"enrolled\":164,\"attended\":27,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":44680.500000000015,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management2\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":10,\"target\":89,\"contacted\":48,\"enrolled\":48,\"attended\":8,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":12983.30999999999,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management2\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-8\",\"booked\":4,\"target\":60,\"contacted\":22,\"enrolled\":22,\"attended\":2,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1810.5,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Al Ain\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":1,\"target\":22,\"contacted\":11,\"enrolled\":11,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":397.6,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Al Ain\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":6,\"target\":73,\"contacted\":32,\"enrolled\":32,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":420,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Al Ain\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-2\",\"booked\":2,\"target\":25,\"contacted\":12,\"enrolled\":12,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Al Ain\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-4\",\"booked\":3,\"target\":15,\"contacted\":9,\"enrolled\":9,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Al Dhafra\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":22,\"target\":148,\"contacted\":60,\"enrolled\":60,\"attended\":5,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":2343.3,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Al Dhafra\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":74,\"target\":505,\"contacted\":253,\"enrolled\":253,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Al Dhafra\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-2\",\"booked\":25,\"target\":184,\"contacted\":80,\"enrolled\":80,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Al Dhafra\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-3\",\"booked\":null,\"target\":5,\"contacted\":2,\"enrolled\":2,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Al Dhafra\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-4\",\"booked\":11,\"target\":66,\"contacted\":36,\"enrolled\":36,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Al Rahba\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":5,\"target\":42,\"contacted\":23,\"enrolled\":23,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":978,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Al Rahba\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":17,\"target\":172,\"contacted\":82,\"enrolled\":82,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Al Rahba\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-2\",\"booked\":2,\"target\":65,\"contacted\":26,\"enrolled\":26,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Al Rahba\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-4\",\"booked\":null,\"target\":20,\"contacted\":5,\"enrolled\":5,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Corniche\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":2,\"target\":31,\"contacted\":10,\"enrolled\":10,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Corniche\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":30,\"target\":225,\"contacted\":111,\"enrolled\":111,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Corniche\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-2\",\"booked\":4,\"target\":26,\"contacted\":17,\"enrolled\":17,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Corniche\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-3\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Corniche\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-4\",\"booked\":2,\"target\":3,\"contacted\":2,\"enrolled\":2,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Other\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":null,\"target\":1,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Other\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-2\",\"booked\":null,\"target\":4,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Other\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-4\",\"booked\":null,\"target\":2,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Salma\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":194,\"target\":1201,\"contacted\":551,\"enrolled\":551,\"attended\":42,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":28305.099999999995,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":580,\"target\":3895,\"contacted\":1906,\"enrolled\":1906,\"attended\":19,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":19734.11,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-2\",\"booked\":191,\"target\":1555,\"contacted\":685,\"enrolled\":685,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-3\",\"booked\":8,\"target\":82,\"contacted\":40,\"enrolled\":40,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-4\",\"booked\":71,\"target\":538,\"contacted\":236,\"enrolled\":236,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":23,\"target\":124,\"contacted\":65,\"enrolled\":65,\"attended\":5,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":3944.4,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":41,\"target\":360,\"contacted\":175,\"enrolled\":175,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-2\",\"booked\":10,\"target\":173,\"contacted\":66,\"enrolled\":66,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-3\",\"booked\":null,\"target\":8,\"contacted\":4,\"enrolled\":4,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-4\",\"booked\":4,\"target\":47,\"contacted\":21,\"enrolled\":21,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"SSMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":52,\"target\":257,\"contacted\":133,\"enrolled\":133,\"attended\":5,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":3298.4,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"SSMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":129,\"target\":865,\"contacted\":442,\"enrolled\":442,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"SSMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-2\",\"booked\":68,\"target\":409,\"contacted\":206,\"enrolled\":206,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"SSMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-3\",\"booked\":3,\"target\":20,\"contacted\":12,\"enrolled\":12,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"SSMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-4\",\"booked\":23,\"target\":131,\"contacted\":63,\"enrolled\":63,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"STMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":21,\"target\":98,\"contacted\":55,\"enrolled\":55,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":392,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"STMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":40,\"target\":332,\"contacted\":169,\"enrolled\":169,\"attended\":2,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1924.7,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"STMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-2\",\"booked\":25,\"target\":142,\"contacted\":72,\"enrolled\":72,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"STMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-3\",\"booked\":null,\"target\":7,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"STMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-4\",\"booked\":10,\"target\":48,\"contacted\":30,\"enrolled\":30,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":12,\"target\":89,\"contacted\":38,\"enrolled\":38,\"attended\":3,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":2178,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":46,\"target\":386,\"contacted\":209,\"enrolled\":209,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-2\",\"booked\":8,\"target\":119,\"contacted\":58,\"enrolled\":58,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-3\",\"booked\":null,\"target\":3,\"contacted\":2,\"enrolled\":2,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-4\",\"booked\":5,\"target\":38,\"contacted\":21,\"enrolled\":21,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Abu Dhabi\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":264,\"target\":2634,\"contacted\":1326,\"enrolled\":1326,\"attended\":123,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":345136.42000000004,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Abu Dhabi\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":280,\"target\":2796,\"contacted\":1441,\"enrolled\":1441,\"attended\":124,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":256755.60000000012,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Al Ain\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":22,\"target\":263,\"contacted\":106,\"enrolled\":106,\"attended\":12,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":70484.06,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Al Ain\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":26,\"target\":335,\"contacted\":162,\"enrolled\":162,\"attended\":12,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":24815.799999999992,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Al Ain\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":24,\"target\":371,\"contacted\":178,\"enrolled\":178,\"attended\":10,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":30155.59999999999,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Al Ain\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":1,\"target\":1709,\"contacted\":9,\"enrolled\":9,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":4539.4,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Al Ain\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-8\",\"booked\":13,\"target\":103,\"contacted\":43,\"enrolled\":43,\"attended\":10,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":53844.68,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Al Ain\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":86,\"target\":713,\"contacted\":404,\"enrolled\":404,\"attended\":62,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":463717.83,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Al Ain\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":7,\"target\":92,\"contacted\":38,\"enrolled\":38,\"attended\":2,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1783.6,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Al Dhafra\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":23,\"target\":230,\"contacted\":107,\"enrolled\":107,\"attended\":9,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":35590.24,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Al Dhafra\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":12,\"target\":225,\"contacted\":102,\"enrolled\":102,\"attended\":5,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":8152.3,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Al Dhafra\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":16,\"target\":214,\"contacted\":94,\"enrolled\":94,\"attended\":3,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1541.89,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Al Dhafra\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":1,\"target\":150,\"contacted\":17,\"enrolled\":17,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":266,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Al Dhafra\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-8\",\"booked\":2,\"target\":17,\"contacted\":9,\"enrolled\":9,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":3548.2,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Al Dhafra\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":9,\"target\":96,\"contacted\":56,\"enrolled\":56,\"attended\":8,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":9056.6,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Al Dhafra\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":3,\"target\":88,\"contacted\":37,\"enrolled\":37,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1283.5,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Al Rahba\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":15,\"target\":124,\"contacted\":49,\"enrolled\":49,\"attended\":9,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":12627.06,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Al Rahba\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":3,\"target\":39,\"contacted\":15,\"enrolled\":15,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":105,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Al Rahba\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":1,\"target\":27,\"contacted\":15,\"enrolled\":15,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Al Rahba\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":2,\"target\":72,\"contacted\":6,\"enrolled\":6,\"attended\":2,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":2846.4,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Al Rahba\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-8\",\"booked\":2,\"target\":14,\"contacted\":3,\"enrolled\":3,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":47021.7,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Al Rahba\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":3,\"target\":34,\"contacted\":15,\"enrolled\":15,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":3154.2,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Al Rahba\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":6,\"target\":64,\"contacted\":30,\"enrolled\":30,\"attended\":4,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1850.6,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Corniche\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":8,\"target\":102,\"contacted\":44,\"enrolled\":44,\"attended\":3,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":9276,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Corniche\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":4,\"target\":35,\"contacted\":20,\"enrolled\":20,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1196.5,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Corniche\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":3,\"target\":31,\"contacted\":14,\"enrolled\":14,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Corniche\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":null,\"target\":83,\"contacted\":7,\"enrolled\":7,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Corniche\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-8\",\"booked\":7,\"target\":24,\"contacted\":12,\"enrolled\":12,\"attended\":6,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":12002.58,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Corniche\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":9,\"target\":63,\"contacted\":34,\"enrolled\":34,\"attended\":6,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":11521.999999999987,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Corniche\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":5,\"target\":55,\"contacted\":23,\"enrolled\":23,\"attended\":2,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1658,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Fujariah\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":null,\"target\":10,\"contacted\":4,\"enrolled\":4,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Fujariah\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":null,\"target\":3,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Other\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":15,\"target\":84,\"contacted\":33,\"enrolled\":33,\"attended\":10,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":92270.07,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Other\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":4,\"target\":27,\"contacted\":14,\"enrolled\":14,\"attended\":2,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":4095.5,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Other\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":1,\"target\":11,\"contacted\":4,\"enrolled\":4,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":268,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Other\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":1,\"target\":40,\"contacted\":2,\"enrolled\":2,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":7326.1,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Other\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-8\",\"booked\":3,\"target\":21,\"contacted\":12,\"enrolled\":12,\"attended\":3,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":14463.499999999902,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Other\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":6,\"target\":64,\"contacted\":34,\"enrolled\":34,\"attended\":5,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":28791.499999999993,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Other\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":1,\"target\":39,\"contacted\":16,\"enrolled\":16,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Salma\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-8\",\"booked\":null,\"target\":1,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":189,\"target\":1694,\"contacted\":816,\"enrolled\":816,\"attended\":102,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":363287.6899999998,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":56,\"target\":554,\"contacted\":288,\"enrolled\":288,\"attended\":31,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":67947.44999999998,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":44,\"target\":496,\"contacted\":246,\"enrolled\":246,\"attended\":21,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":30500.699999999997,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":31,\"target\":3451,\"contacted\":140,\"enrolled\":140,\"attended\":21,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":47213.899999999994,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-8\",\"booked\":102,\"target\":803,\"contacted\":411,\"enrolled\":411,\"attended\":65,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":382028.44,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":346,\"target\":3351,\"contacted\":2169,\"enrolled\":2169,\"attended\":234,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":799745.9799999999,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":83,\"target\":915,\"contacted\":463,\"enrolled\":463,\"attended\":33,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":33493.97,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":37,\"target\":350,\"contacted\":128,\"enrolled\":128,\"attended\":26,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":101712.86,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":13,\"target\":81,\"contacted\":42,\"enrolled\":42,\"attended\":7,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":40699.5,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":9,\"target\":90,\"contacted\":34,\"enrolled\":34,\"attended\":4,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":5527.8,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":3,\"target\":251,\"contacted\":16,\"enrolled\":16,\"attended\":3,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":18660.18,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-8\",\"booked\":3,\"target\":39,\"contacted\":19,\"enrolled\":19,\"attended\":3,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":6272.4,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":17,\"target\":135,\"contacted\":77,\"enrolled\":77,\"attended\":15,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":124084.45,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":8,\"target\":143,\"contacted\":64,\"enrolled\":64,\"attended\":3,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":9697,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"SSMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":67,\"target\":631,\"contacted\":271,\"enrolled\":271,\"attended\":30,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":91383.69999999995,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"SSMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":20,\"target\":198,\"contacted\":88,\"enrolled\":88,\"attended\":7,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":19822,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"SSMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":13,\"target\":167,\"contacted\":80,\"enrolled\":80,\"attended\":4,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":6935.1,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"SSMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":9,\"target\":438,\"contacted\":37,\"enrolled\":37,\"attended\":3,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":6600.299999999999,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"SSMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-8\",\"booked\":16,\"target\":85,\"contacted\":43,\"enrolled\":43,\"attended\":11,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":84895.13,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"SSMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":45,\"target\":293,\"contacted\":152,\"enrolled\":152,\"attended\":28,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":67099.04000000001,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"SSMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":32,\"target\":306,\"contacted\":133,\"enrolled\":133,\"attended\":12,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":21306.3,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":14,\"target\":237,\"contacted\":91,\"enrolled\":91,\"attended\":4,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":12286.4,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":5,\"target\":63,\"contacted\":37,\"enrolled\":37,\"attended\":3,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":29959.5,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":3,\"target\":56,\"contacted\":26,\"enrolled\":26,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":255.8,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":null,\"target\":1176,\"contacted\":10,\"enrolled\":10,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-8\",\"booked\":39,\"target\":268,\"contacted\":129,\"enrolled\":129,\"attended\":26,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":224635.2999999999,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":91,\"target\":785,\"contacted\":425,\"enrolled\":425,\"attended\":50,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":168604.31000000003,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":9,\"target\":93,\"contacted\":38,\"enrolled\":38,\"attended\":5,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":3228.3,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"Al Ain\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":3,\"target\":87,\"contacted\":39,\"enrolled\":39,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"Al Ain\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-2\",\"booked\":7,\"target\":97,\"contacted\":49,\"enrolled\":49,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"Al Ain\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-3\",\"booked\":1,\"target\":20,\"contacted\":12,\"enrolled\":12,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"Al Ain\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-4\",\"booked\":1,\"target\":36,\"contacted\":16,\"enrolled\":16,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"Al Dhafra\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":3,\"target\":94,\"contacted\":35,\"enrolled\":35,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"Al Dhafra\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-2\",\"booked\":2,\"target\":81,\"contacted\":41,\"enrolled\":41,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"Al Dhafra\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-3\",\"booked\":1,\"target\":16,\"contacted\":4,\"enrolled\":4,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"Al Dhafra\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-4\",\"booked\":null,\"target\":28,\"contacted\":12,\"enrolled\":12,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"Al Rahba\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":6,\"target\":64,\"contacted\":32,\"enrolled\":32,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"Al Rahba\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-2\",\"booked\":3,\"target\":53,\"contacted\":33,\"enrolled\":33,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"Al Rahba\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-3\",\"booked\":null,\"target\":14,\"contacted\":9,\"enrolled\":9,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"Al Rahba\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-4\",\"booked\":1,\"target\":26,\"contacted\":11,\"enrolled\":11,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"Corniche\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":6,\"target\":44,\"contacted\":21,\"enrolled\":21,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":268,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"Corniche\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-2\",\"booked\":2,\"target\":26,\"contacted\":14,\"enrolled\":14,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"Corniche\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-3\",\"booked\":null,\"target\":12,\"contacted\":3,\"enrolled\":3,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"Corniche\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-4\",\"booked\":1,\"target\":16,\"contacted\":6,\"enrolled\":6,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"Other\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":null,\"target\":11,\"contacted\":2,\"enrolled\":2,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":63,\"target\":797,\"contacted\":438,\"enrolled\":438,\"attended\":6,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":2208,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-2\",\"booked\":38,\"target\":655,\"contacted\":467,\"enrolled\":467,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-3\",\"booked\":2,\"target\":127,\"contacted\":77,\"enrolled\":77,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-4\",\"booked\":13,\"target\":311,\"contacted\":209,\"enrolled\":209,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":10,\"target\":123,\"contacted\":47,\"enrolled\":47,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-2\",\"booked\":3,\"target\":76,\"contacted\":36,\"enrolled\":36,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-3\",\"booked\":1,\"target\":24,\"contacted\":4,\"enrolled\":4,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-4\",\"booked\":4,\"target\":35,\"contacted\":18,\"enrolled\":18,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"SSMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":26,\"target\":262,\"contacted\":137,\"enrolled\":137,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1206,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"SSMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-2\",\"booked\":13,\"target\":190,\"contacted\":115,\"enrolled\":115,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"SSMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-3\",\"booked\":1,\"target\":45,\"contacted\":20,\"enrolled\":20,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"SSMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-4\",\"booked\":2,\"target\":72,\"contacted\":29,\"enrolled\":29,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":4,\"target\":95,\"contacted\":42,\"enrolled\":42,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-2\",\"booked\":5,\"target\":64,\"contacted\":37,\"enrolled\":37,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-3\",\"booked\":null,\"target\":14,\"contacted\":4,\"enrolled\":4,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-4\",\"booked\":2,\"target\":30,\"contacted\":11,\"enrolled\":11,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_C_nFR1\",\"provider\":\"SEHA Clinics\",\"stage\":\"Build\",\"campaignName\":\"T2D_A_HM_C_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-1\",\"booked\":28,\"target\":122,\"contacted\":88,\"enrolled\":88,\"attended\":25,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":108037.87000000002,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_C_nFR1\",\"provider\":\"SEHA Kidney\",\"stage\":\"Build\",\"campaignName\":\"T2D_A_HM_C_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-1\",\"booked\":60,\"target\":91,\"contacted\":70,\"enrolled\":70,\"attended\":49,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":339702.8199999996,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_C_nFR1\",\"provider\":\"SEHA Kidney\",\"stage\":\"Build\",\"campaignName\":\"T2D_A_HM_C_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":null,\"target\":4,\"contacted\":4,\"enrolled\":4,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_C_nFR1\",\"provider\":\"SKMC\",\"stage\":\"Build\",\"campaignName\":\"T2D_A_HM_C_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-1\",\"booked\":121,\"target\":381,\"contacted\":244,\"enrolled\":244,\"attended\":80,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":383048.18999999994,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_C_nFR1\",\"provider\":\"SKMC\",\"stage\":\"Build\",\"campaignName\":\"T2D_A_HM_C_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":1,\"target\":15,\"contacted\":12,\"enrolled\":12,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_C_nFR1\",\"provider\":\"SKMC\",\"stage\":\"Build\",\"campaignName\":\"T2D_A_HM_C_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":1,\"target\":6,\"contacted\":2,\"enrolled\":2,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_C_nFR1\",\"provider\":\"Tawam\",\"stage\":\"Build\",\"campaignName\":\"T2D_A_HM_C_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-1\",\"booked\":361,\"target\":709,\"contacted\":584,\"enrolled\":584,\"attended\":285,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1020110.0600000008,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_C_nFR1\",\"provider\":\"Tawam\",\"stage\":\"Build\",\"campaignName\":\"T2D_A_HM_C_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":3,\"target\":12,\"contacted\":11,\"enrolled\":11,\"attended\":3,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":6370.6,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_C_nFR1\",\"provider\":\"Tawam\",\"stage\":\"Build\",\"campaignName\":\"T2D_A_HM_C_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":1,\"target\":10,\"contacted\":2,\"enrolled\":2,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":416,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR1\",\"provider\":\"SEHA Clinics\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-1\",\"booked\":3,\"target\":11,\"contacted\":6,\"enrolled\":6,\"attended\":2,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":9142.2,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR1\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-1\",\"booked\":1,\"target\":10,\"contacted\":6,\"enrolled\":6,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR1\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":null,\"target\":1,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR1\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-1\",\"booked\":9,\"target\":52,\"contacted\":30,\"enrolled\":30,\"attended\":3,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":8455.4,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR1\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR1\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":null,\"target\":1,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR1\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":3,\"target\":28,\"contacted\":24,\"enrolled\":27,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1343,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR1\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-8\",\"booked\":33,\"target\":394,\"contacted\":259,\"enrolled\":277,\"attended\":17,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":28443.14,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR1\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-1\",\"booked\":14,\"target\":89,\"contacted\":73,\"enrolled\":73,\"attended\":6,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":15193.19,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR1\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":1,\"target\":6,\"contacted\":4,\"enrolled\":4,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR1\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":null,\"target\":4,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":1,\"target\":6,\"contacted\":4,\"enrolled\":4,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":628,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":1,\"target\":30,\"contacted\":19,\"enrolled\":19,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":1,\"target\":54,\"contacted\":20,\"enrolled\":20,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":120,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":1,\"target\":19,\"contacted\":13,\"enrolled\":13,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":4780,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":32,\"target\":849,\"contacted\":396,\"enrolled\":396,\"attended\":19,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":18940.65,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":19,\"target\":546,\"contacted\":227,\"enrolled\":227,\"attended\":7,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":11846.7,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":6,\"target\":79,\"contacted\":60,\"enrolled\":60,\"attended\":5,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":9240.3,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":4,\"target\":55,\"contacted\":24,\"enrolled\":24,\"attended\":2,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":595.2,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":3,\"target\":19,\"contacted\":14,\"enrolled\":14,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1201,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":null,\"target\":16,\"contacted\":8,\"enrolled\":8,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"SEHA Clinics\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":null,\"target\":3,\"contacted\":2,\"enrolled\":2,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":7,\"target\":41,\"contacted\":36,\"enrolled\":36,\"attended\":7,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":30417.45999999999,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":1,\"target\":7,\"contacted\":5,\"enrolled\":5,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":5814.8,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":null,\"target\":3,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":14,\"target\":182,\"contacted\":149,\"enrolled\":149,\"attended\":9,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":30060.5,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":3,\"target\":59,\"contacted\":22,\"enrolled\":22,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":730,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":null,\"target\":1,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":1,\"target\":14,\"contacted\":14,\"enrolled\":14,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":470.8,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":16,\"target\":146,\"contacted\":113,\"enrolled\":113,\"attended\":9,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":10921.099999999988,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":1,\"target\":123,\"contacted\":54,\"enrolled\":54,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":650,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":6,\"target\":47,\"contacted\":41,\"enrolled\":41,\"attended\":2,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":2900.8,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":36,\"target\":425,\"contacted\":295,\"enrolled\":295,\"attended\":20,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":39956.569999999985,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":10,\"target\":353,\"contacted\":148,\"enrolled\":148,\"attended\":8,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":9814.65,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":null,\"target\":28,\"contacted\":16,\"enrolled\":16,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":null,\"target\":7,\"contacted\":5,\"enrolled\":5,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":null,\"target\":9,\"contacted\":7,\"enrolled\":7,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":2,\"target\":137,\"contacted\":81,\"enrolled\":81,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":551.8,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":1,\"target\":37,\"contacted\":18,\"enrolled\":18,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":null,\"target\":8,\"contacted\":3,\"enrolled\":3,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":null,\"target\":19,\"contacted\":9,\"enrolled\":9,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":null,\"target\":43,\"contacted\":18,\"enrolled\":18,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":null,\"target\":7,\"contacted\":3,\"enrolled\":3,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":null,\"target\":2,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":null,\"target\":17,\"contacted\":9,\"enrolled\":9,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":1,\"target\":14,\"contacted\":8,\"enrolled\":8,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1261,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":null,\"target\":4,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":null,\"target\":3,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Other\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":null,\"target\":6,\"contacted\":2,\"enrolled\":2,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Other\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":null,\"target\":4,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Sakina\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Salma\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":null,\"target\":3,\"contacted\":2,\"enrolled\":2,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Salma\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":null,\"target\":2,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"SEHA Clinics\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":69,\"target\":2013,\"contacted\":1105,\"enrolled\":1105,\"attended\":49,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":90358.29,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"SEHA Clinics\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":30,\"target\":686,\"contacted\":330,\"enrolled\":330,\"attended\":17,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":31422.699999999993,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"SEHA Clinics\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":4,\"target\":108,\"contacted\":54,\"enrolled\":54,\"attended\":2,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":2202.4,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"SEHA Clinics\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":12,\"target\":306,\"contacted\":174,\"enrolled\":174,\"attended\":8,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":14981.319999999989,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":1,\"target\":22,\"contacted\":11,\"enrolled\":11,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":3668,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":null,\"target\":22,\"contacted\":15,\"enrolled\":15,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":3,\"target\":199,\"contacted\":115,\"enrolled\":115,\"attended\":2,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":4314.4,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":null,\"target\":50,\"contacted\":33,\"enrolled\":33,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":1,\"target\":5,\"contacted\":2,\"enrolled\":2,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":null,\"target\":32,\"contacted\":22,\"enrolled\":22,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":12,\"target\":524,\"contacted\":274,\"enrolled\":274,\"attended\":6,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":7964.1,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":2,\"target\":163,\"contacted\":70,\"enrolled\":70,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1025,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":null,\"target\":29,\"contacted\":13,\"enrolled\":13,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":11,\"target\":85,\"contacted\":47,\"enrolled\":47,\"attended\":7,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":6963,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":6,\"target\":198,\"contacted\":103,\"enrolled\":103,\"attended\":4,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":6969.799999999999,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":null,\"target\":63,\"contacted\":34,\"enrolled\":34,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":null,\"target\":13,\"contacted\":4,\"enrolled\":4,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":null,\"target\":35,\"contacted\":22,\"enrolled\":22,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":4,\"target\":201,\"contacted\":110,\"enrolled\":110,\"attended\":3,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":4941.9,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":4,\"target\":57,\"contacted\":27,\"enrolled\":27,\"attended\":4,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":6765.8,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":null,\"target\":8,\"contacted\":2,\"enrolled\":2,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":null,\"target\":28,\"contacted\":17,\"enrolled\":17,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_N_nFR1\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"T2D_A_HM_N_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-1\",\"booked\":null,\"target\":3,\"contacted\":2,\"enrolled\":2,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_N_nFR1\",\"provider\":\"SEHA Kidney\",\"stage\":\"Acquire\",\"campaignName\":\"T2D_A_HM_N_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-1\",\"booked\":1,\"target\":2,\"contacted\":2,\"enrolled\":2,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":8559.2,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_N_nFR1\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"T2D_A_HM_N_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-1\",\"booked\":1,\"target\":9,\"contacted\":6,\"enrolled\":6,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":840,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_N_nFR1\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"T2D_A_HM_N_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":null,\"target\":1,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_N_nFR1\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"T2D_A_HM_N_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-1\",\"booked\":23,\"target\":39,\"contacted\":32,\"enrolled\":32,\"attended\":17,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":53046.61999999998,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_N_nFR1\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"T2D_A_HM_N_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR1\",\"provider\":\"SEHA Clinics\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-1\",\"booked\":1,\"target\":6,\"contacted\":4,\"enrolled\":4,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR1\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-1\",\"booked\":null,\"target\":6,\"contacted\":2,\"enrolled\":2,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR1\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-1\",\"booked\":6,\"target\":37,\"contacted\":13,\"enrolled\":13,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR1\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR1\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":1,\"target\":13,\"contacted\":10,\"enrolled\":10,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR1\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-8\",\"booked\":7,\"target\":120,\"contacted\":81,\"enrolled\":84,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1431,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR1\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-1\",\"booked\":10,\"target\":76,\"contacted\":53,\"enrolled\":53,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1980.22,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR3\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":null,\"target\":2,\"contacted\":2,\"enrolled\":2,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR3\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":1,\"target\":22,\"contacted\":12,\"enrolled\":12,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR3\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":1,\"target\":32,\"contacted\":10,\"enrolled\":10,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR3\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":12,\"target\":354,\"contacted\":145,\"enrolled\":145,\"attended\":3,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1431,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR3\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":3,\"target\":320,\"contacted\":122,\"enrolled\":122,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":568.8,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR3\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":4,\"target\":40,\"contacted\":23,\"enrolled\":23,\"attended\":3,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":3929,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR3\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":null,\"target\":25,\"contacted\":11,\"enrolled\":11,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR3\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":2,\"target\":26,\"contacted\":18,\"enrolled\":18,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":711,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR3\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":null,\"target\":10,\"contacted\":2,\"enrolled\":2,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR3\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":2,\"target\":23,\"contacted\":20,\"enrolled\":20,\"attended\":2,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":29557.77,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR3\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":null,\"target\":2,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR3\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR3\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":6,\"target\":96,\"contacted\":67,\"enrolled\":67,\"attended\":2,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":2905.2,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR3\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":1,\"target\":37,\"contacted\":18,\"enrolled\":18,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1931.54,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR3\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":1,\"target\":5,\"contacted\":4,\"enrolled\":4,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR3\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":5,\"target\":36,\"contacted\":27,\"enrolled\":27,\"attended\":5,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":9370.29999999999,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR3\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":1,\"target\":26,\"contacted\":11,\"enrolled\":11,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR3\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":4,\"target\":30,\"contacted\":29,\"enrolled\":29,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR3\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":21,\"target\":268,\"contacted\":172,\"enrolled\":172,\"attended\":11,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":10053.93,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR3\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":8,\"target\":278,\"contacted\":114,\"enrolled\":114,\"attended\":5,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":6024.610000000001,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":2,\"target\":23,\"contacted\":11,\"enrolled\":11,\"attended\":2,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":22657.6,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":null,\"target\":5,\"contacted\":4,\"enrolled\":4,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":null,\"target\":4,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":3,\"target\":46,\"contacted\":21,\"enrolled\":21,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":397.6,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":null,\"target\":15,\"contacted\":8,\"enrolled\":8,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":null,\"target\":2,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":null,\"target\":11,\"contacted\":5,\"enrolled\":5,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":null,\"target\":9,\"contacted\":4,\"enrolled\":4,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":null,\"target\":3,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":null,\"target\":2,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":1,\"target\":3,\"contacted\":2,\"enrolled\":2,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":null,\"target\":1,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"Other\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":null,\"target\":14,\"contacted\":6,\"enrolled\":6,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"Other\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":null,\"target\":4,\"contacted\":2,\"enrolled\":2,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"Salma\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":null,\"target\":3,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"Salma\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":null,\"target\":3,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"SEHA Clinics\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":43,\"target\":1487,\"contacted\":769,\"enrolled\":769,\"attended\":25,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":48121.82999999999,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"SEHA Clinics\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":12,\"target\":500,\"contacted\":246,\"enrolled\":246,\"attended\":6,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":14101.9,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"SEHA Clinics\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":2,\"target\":74,\"contacted\":39,\"enrolled\":39,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1273.4,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"SEHA Clinics\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":7,\"target\":228,\"contacted\":124,\"enrolled\":124,\"attended\":5,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":7107.5,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":1,\"target\":29,\"contacted\":19,\"enrolled\":19,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":null,\"target\":8,\"contacted\":4,\"enrolled\":4,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":null,\"target\":3,\"contacted\":2,\"enrolled\":2,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":2,\"target\":87,\"contacted\":55,\"enrolled\":55,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":null,\"target\":25,\"contacted\":16,\"enrolled\":16,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":null,\"target\":7,\"contacted\":3,\"enrolled\":3,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":2,\"target\":20,\"contacted\":13,\"enrolled\":13,\"attended\":2,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":3334.3,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":8,\"target\":310,\"contacted\":167,\"enrolled\":167,\"attended\":4,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":6665.6,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":2,\"target\":90,\"contacted\":47,\"enrolled\":47,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1629.1,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":1,\"target\":17,\"contacted\":7,\"enrolled\":7,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":1,\"target\":47,\"contacted\":27,\"enrolled\":27,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1520.5,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":null,\"target\":20,\"contacted\":15,\"enrolled\":15,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":null,\"target\":6,\"contacted\":3,\"enrolled\":3,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":null,\"target\":136,\"contacted\":75,\"enrolled\":75,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":null,\"target\":44,\"contacted\":21,\"enrolled\":21,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":null,\"target\":7,\"contacted\":3,\"enrolled\":3,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":null,\"target\":26,\"contacted\":19,\"enrolled\":19,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR1\",\"provider\":\"Other\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-1\",\"booked\":224,\"target\":733,\"contacted\":439,\"enrolled\":439,\"attended\":142,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":661030.29,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR1\",\"provider\":\"Other\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":1,\"target\":26,\"contacted\":16,\"enrolled\":16,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":4390.4,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR1\",\"provider\":\"Other\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":null,\"target\":13,\"contacted\":6,\"enrolled\":6,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR1\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-1\",\"booked\":null,\"target\":2,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR1\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":12,\"target\":117,\"contacted\":77,\"enrolled\":91,\"attended\":5,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":8064.6,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR1\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-8\",\"booked\":70,\"target\":634,\"contacted\":424,\"enrolled\":437,\"attended\":30,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":62471.7,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-3\",\"booked\":11,\"target\":68,\"contacted\":68,\"enrolled\":68,\"attended\":7,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":15198.100000000002,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-4\",\"booked\":21,\"target\":82,\"contacted\":71,\"enrolled\":71,\"attended\":11,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":13616.3,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":4,\"target\":75,\"contacted\":62,\"enrolled\":62,\"attended\":2,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1883,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":1,\"target\":21,\"contacted\":10,\"enrolled\":10,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":3816,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":1,\"target\":26,\"contacted\":7,\"enrolled\":7,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-3\",\"booked\":15,\"target\":36,\"contacted\":34,\"enrolled\":34,\"attended\":12,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":27399.29999999999,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-4\",\"booked\":138,\"target\":700,\"contacted\":623,\"enrolled\":623,\"attended\":65,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":86673.51999999997,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":24,\"target\":208,\"contacted\":176,\"enrolled\":176,\"attended\":14,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":25893.2,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":4,\"target\":237,\"contacted\":74,\"enrolled\":74,\"attended\":2,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":845.06,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":2,\"target\":120,\"contacted\":27,\"enrolled\":27,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-3\",\"booked\":3,\"target\":33,\"contacted\":33,\"enrolled\":33,\"attended\":3,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":6293.6,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-4\",\"booked\":2,\"target\":31,\"contacted\":23,\"enrolled\":23,\"attended\":2,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":263,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":1,\"target\":23,\"contacted\":20,\"enrolled\":20,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":null,\"target\":3,\"contacted\":2,\"enrolled\":2,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":null,\"target\":10,\"contacted\":3,\"enrolled\":3,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-3\",\"booked\":6,\"target\":36,\"contacted\":36,\"enrolled\":36,\"attended\":3,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":8221.9,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-4\",\"booked\":3,\"target\":55,\"contacted\":49,\"enrolled\":49,\"attended\":2,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":9583.68,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":5,\"target\":28,\"contacted\":26,\"enrolled\":26,\"attended\":5,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":8762.66,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":null,\"target\":15,\"contacted\":4,\"enrolled\":4,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":null,\"target\":12,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"SEHA Clinics\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-3\",\"booked\":60,\"target\":411,\"contacted\":397,\"enrolled\":397,\"attended\":54,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":258501.38999999984,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"SEHA Clinics\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-4\",\"booked\":52,\"target\":271,\"contacted\":212,\"enrolled\":212,\"attended\":48,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":94028.35999999991,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"SEHA Clinics\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":24,\"target\":314,\"contacted\":248,\"enrolled\":248,\"attended\":19,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":79076.49999999999,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"SEHA Clinics\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":null,\"target\":2,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"SEHA Clinics\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-3\",\"booked\":1,\"target\":2,\"contacted\":2,\"enrolled\":2,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":6349.6,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-4\",\"booked\":11,\"target\":101,\"contacted\":99,\"enrolled\":99,\"attended\":8,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":24589.3,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":5,\"target\":24,\"contacted\":19,\"enrolled\":19,\"attended\":5,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":12186.4,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":null,\"target\":1,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"SKFH\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-4\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-2\",\"booked\":12,\"target\":66,\"contacted\":66,\"enrolled\":66,\"attended\":7,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":34999.4,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-3\",\"booked\":20,\"target\":148,\"contacted\":148,\"enrolled\":148,\"attended\":15,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":41439.64999999998,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-4\",\"booked\":67,\"target\":516,\"contacted\":409,\"enrolled\":409,\"attended\":41,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":49988.07,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":22,\"target\":209,\"contacted\":169,\"enrolled\":169,\"attended\":16,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":72350.03,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":null,\"target\":9,\"contacted\":8,\"enrolled\":8,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":null,\"target\":10,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-3\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-4\",\"booked\":null,\"target\":1,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-3\",\"booked\":25,\"target\":125,\"contacted\":125,\"enrolled\":125,\"attended\":20,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":69725.83999999997,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-4\",\"booked\":4,\"target\":26,\"contacted\":25,\"enrolled\":25,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":3271.35,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":12,\"target\":107,\"contacted\":89,\"enrolled\":89,\"attended\":9,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":15927.89999999998,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":1,\"target\":9,\"contacted\":4,\"enrolled\":4,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":428.75,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":2,\"target\":9,\"contacted\":4,\"enrolled\":4,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":2671.7,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-2\",\"booked\":68,\"target\":346,\"contacted\":345,\"enrolled\":345,\"attended\":52,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":184209.85,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-3\",\"booked\":25,\"target\":123,\"contacted\":123,\"enrolled\":123,\"attended\":23,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":62657.07,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-4\",\"booked\":64,\"target\":264,\"contacted\":251,\"enrolled\":251,\"attended\":47,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":37821.73999999999,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":46,\"target\":397,\"contacted\":321,\"enrolled\":321,\"attended\":41,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":90131.48999999998,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":6,\"target\":117,\"contacted\":43,\"enrolled\":43,\"attended\":4,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":12364.1,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":1,\"target\":92,\"contacted\":30,\"enrolled\":30,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":1,\"target\":10,\"contacted\":9,\"enrolled\":9,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":6083.8,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":10,\"target\":76,\"contacted\":47,\"enrolled\":47,\"attended\":8,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":12778.49,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":2,\"target\":176,\"contacted\":70,\"enrolled\":70,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":891.6,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":1,\"target\":33,\"contacted\":20,\"enrolled\":20,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":2788.29999999999,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":55,\"target\":908,\"contacted\":488,\"enrolled\":488,\"attended\":34,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":41686.89999999999,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":19,\"target\":637,\"contacted\":266,\"enrolled\":266,\"attended\":8,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":8001.549999999999,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":1,\"target\":5,\"contacted\":5,\"enrolled\":5,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":669,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":11,\"target\":158,\"contacted\":91,\"enrolled\":91,\"attended\":7,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":11573.87,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":6,\"target\":130,\"contacted\":50,\"enrolled\":50,\"attended\":5,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":3233.3,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":null,\"target\":2,\"contacted\":2,\"enrolled\":2,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":12,\"target\":121,\"contacted\":89,\"enrolled\":89,\"attended\":7,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":8954,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":1,\"target\":76,\"contacted\":26,\"enrolled\":26,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"Salma\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":null,\"target\":2,\"contacted\":2,\"enrolled\":2,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":8,\"target\":66,\"contacted\":58,\"enrolled\":58,\"attended\":7,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":25411.299999999977,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":1,\"target\":26,\"contacted\":11,\"enrolled\":11,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":2,\"target\":58,\"contacted\":40,\"enrolled\":40,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1524.99999999999,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":38,\"target\":302,\"contacted\":250,\"enrolled\":250,\"attended\":20,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":41820.49999999999,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":7,\"target\":161,\"contacted\":61,\"enrolled\":61,\"attended\":5,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":13017.3,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":null,\"target\":1,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":5,\"target\":40,\"contacted\":35,\"enrolled\":35,\"attended\":4,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":11208.919999999998,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":19,\"target\":204,\"contacted\":139,\"enrolled\":139,\"attended\":15,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":22264.679999999997,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":8,\"target\":216,\"contacted\":103,\"enrolled\":103,\"attended\":6,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":11468.72,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":2,\"target\":57,\"contacted\":52,\"enrolled\":52,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1562,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":60,\"target\":596,\"contacted\":397,\"enrolled\":397,\"attended\":41,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":71983.26999999997,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":12,\"target\":876,\"contacted\":399,\"enrolled\":399,\"attended\":5,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":10255.84,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR1\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":2,\"target\":41,\"contacted\":30,\"enrolled\":36,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1858,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR1\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-8\",\"booked\":25,\"target\":274,\"contacted\":175,\"enrolled\":179,\"attended\":11,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":15905.9,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR2\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":null,\"target\":1,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR2\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-4\",\"booked\":null,\"target\":1,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR2\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":null,\"target\":1,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR2\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-3\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR2\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":null,\"target\":1,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR2\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-2\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":null,\"target\":3,\"contacted\":3,\"enrolled\":3,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":11,\"target\":85,\"contacted\":38,\"enrolled\":38,\"attended\":4,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":3953,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":5,\"target\":176,\"contacted\":64,\"enrolled\":64,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":266,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":21,\"target\":496,\"contacted\":269,\"enrolled\":269,\"attended\":12,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":13120.19999999999,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":8,\"target\":362,\"contacted\":173,\"enrolled\":173,\"attended\":3,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1259.3,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":7,\"target\":92,\"contacted\":59,\"enrolled\":59,\"attended\":4,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":4004.54,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":1,\"target\":94,\"contacted\":47,\"enrolled\":47,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":2755.9,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":8,\"target\":94,\"contacted\":71,\"enrolled\":71,\"attended\":2,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":4659.4,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":2,\"target\":61,\"contacted\":25,\"enrolled\":25,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":5,\"target\":42,\"contacted\":39,\"enrolled\":39,\"attended\":4,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":20804.44,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":null,\"target\":7,\"contacted\":3,\"enrolled\":3,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":2,\"target\":14,\"contacted\":13,\"enrolled\":13,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":3928,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":15,\"target\":222,\"contacted\":181,\"enrolled\":181,\"attended\":8,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":16848.6,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":2,\"target\":96,\"contacted\":38,\"enrolled\":38,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":219,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":null,\"target\":4,\"contacted\":4,\"enrolled\":4,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":12,\"target\":60,\"contacted\":47,\"enrolled\":47,\"attended\":4,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":5262.8,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":3,\"target\":43,\"contacted\":16,\"enrolled\":16,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":784,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":1,\"target\":39,\"contacted\":37,\"enrolled\":37,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":58,\"target\":523,\"contacted\":350,\"enrolled\":350,\"attended\":38,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":64617.29,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":19,\"target\":920,\"contacted\":415,\"enrolled\":415,\"attended\":10,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":21973.9,\"avgRevPatient\":null,\"costMember\":null}]");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/hvm-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getOverviewBookingOpportunity",
    ()=>getOverviewBookingOpportunity,
    "getOverviewCampaignActivity",
    ()=>getOverviewCampaignActivity,
    "getOverviewCampaignSummary",
    ()=>getOverviewCampaignSummary,
    "getOverviewDatasetDateRange",
    ()=>getOverviewDatasetDateRange,
    "getOverviewFilterOptions",
    ()=>getOverviewFilterOptions,
    "getOverviewIncrementalRevenueLabels",
    ()=>getOverviewIncrementalRevenueLabels,
    "getOverviewIncrementalRevenueSeries",
    ()=>getOverviewIncrementalRevenueSeries,
    "getOverviewKpiCards",
    ()=>getOverviewKpiCards,
    "getOverviewProviderCampaigns",
    ()=>getOverviewProviderCampaigns,
    "getOverviewTreeData",
    ()=>getOverviewTreeData,
    "hvmDataset",
    ()=>hvmDataset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$data$2f$hvm$2d$dataset$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public/data/hvm-dataset.json.[json].cjs [app-client] (ecmascript)");
;
const stageMeta = {
    acquire: {
        key: "acquire",
        label: "Acquire",
        subtitle: "New patients",
        color: "blue"
    },
    build: {
        key: "build",
        label: "Build",
        subtitle: "Enhance care",
        color: "green"
    },
    contain: {
        key: "contain",
        label: "Contain",
        subtitle: "Retain at-risk",
        color: "orange"
    }
};
const stageKeyMap = {
    acquire: "acquire",
    build: "build",
    contain: "contain"
};
const statusMap = {
    live: "active",
    active: "active",
    completed: "active",
    planned: "planned",
    upcoming: "planned",
    paused: "paused",
    hold: "paused"
};
const hvmDataset = __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$data$2f$hvm$2d$dataset$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const monthLabels = [
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
function toNumber(value) {
    if (typeof value === "number") {
        return Number.isFinite(value) ? value : 0;
    }
    if (typeof value === "string" && value.trim() !== "") {
        const parsed = Number(value.replace(/,/g, ""));
        return Number.isFinite(parsed) ? parsed : 0;
    }
    return 0;
}
function slugify(value) {
    return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
function formatCompact(value) {
    const abs = Math.abs(value);
    if (abs >= 1_000_000) {
        return `${(value / 1_000_000).toFixed(abs >= 10_000_000 ? 0 : 1)}M`;
    }
    if (abs >= 1_000) {
        return `${(value / 1_000).toFixed(abs >= 10_000 ? 0 : 1)}k`;
    }
    return Math.round(value).toLocaleString();
}
function getPeriodParts(period) {
    const [rawYear, rawMonth] = String(period).split("-");
    const year = Number(rawYear);
    const month = Number(rawMonth);
    if (!Number.isFinite(year) || !Number.isFinite(month)) {
        return null;
    }
    return {
        year,
        monthIndex: Math.max(0, Math.min(11, month - 1))
    };
}
function getPeriodIndex(year, monthIndex) {
    return year * 12 + monthIndex;
}
function getDatePeriodIndex(date, fallbackYear, fallbackMonthIndex) {
    const [rawYear, rawMonth] = date.split("-");
    const year = Number(rawYear);
    const month = Number(rawMonth);
    if (!Number.isFinite(year) || !Number.isFinite(month)) {
        return getPeriodIndex(fallbackYear, fallbackMonthIndex);
    }
    return getPeriodIndex(year, Math.max(0, Math.min(11, month - 1)));
}
function getPeriodBuckets(filters) {
    const availablePeriods = hvmDataset.map((row)=>getPeriodParts(row.period)).filter((period)=>Boolean(period));
    const fallbackStart = availablePeriods.reduce((current, period)=>Math.min(current, getPeriodIndex(period.year, period.monthIndex)), getPeriodIndex(2025, 0));
    const fallbackEnd = availablePeriods.reduce((current, period)=>Math.max(current, getPeriodIndex(period.year, period.monthIndex)), getPeriodIndex(2025, 11));
    const startIndex = getDatePeriodIndex(filters.startDate, Math.floor(fallbackStart / 12), fallbackStart % 12);
    const endIndex = getDatePeriodIndex(filters.endDate, Math.floor(fallbackEnd / 12), fallbackEnd % 12);
    const minIndex = Math.min(startIndex, endIndex);
    const maxIndex = Math.max(startIndex, endIndex);
    return Array.from({
        length: maxIndex - minIndex + 1
    }, (_, offset)=>{
        const periodIndex = minIndex + offset;
        const year = Math.floor(periodIndex / 12);
        const monthIndex = periodIndex % 12;
        return {
            key: `${year}-${monthIndex + 1}`,
            label: `${monthLabels[monthIndex]} ${year}`,
            year,
            monthIndex,
            periodIndex
        };
    });
}
function getOverviewDatasetDateRange() {
    const availablePeriods = hvmDataset.map((row)=>getPeriodParts(row.period)).filter((period)=>Boolean(period)).sort((a, b)=>getPeriodIndex(a.year, a.monthIndex) - getPeriodIndex(b.year, b.monthIndex));
    const start = availablePeriods[0] ?? {
        year: 2025,
        monthIndex: 0
    };
    const end = availablePeriods[availablePeriods.length - 1] ?? {
        year: 2025,
        monthIndex: 11
    };
    return {
        startDate: `${start.year}-${String(start.monthIndex + 1).padStart(2, "0")}-01`,
        endDate: `${end.year}-${String(end.monthIndex + 1).padStart(2, "0")}-28`
    };
}
function getOverviewFilteredRows(filters) {
    const buckets = getPeriodBuckets(filters);
    const minPeriodIndex = buckets[0]?.periodIndex ?? getPeriodIndex(2025, 0);
    const maxPeriodIndex = buckets[buckets.length - 1]?.periodIndex ?? getPeriodIndex(2025, 11);
    return hvmDataset.filter((row)=>{
        const period = getPeriodParts(row.period);
        const periodIndex = period ? getPeriodIndex(period.year, period.monthIndex) : null;
        const rowStage = stageKeyMap[String(row.stage).toLowerCase()];
        if (periodIndex === null || periodIndex < minPeriodIndex || periodIndex > maxPeriodIndex) {
            return false;
        }
        if (filters.region !== "all" && row.provider !== filters.region) {
            return false;
        }
        if (filters.lifestageType !== "all" && rowStage !== filters.lifestageType) {
            return false;
        }
        if (filters.condition !== "all" && row.condition !== filters.condition) {
            return false;
        }
        if (filters.status && filters.status !== "all" && row.status !== filters.status) {
            return false;
        }
        return true;
    });
}
function getOverviewFilterOptions() {
    return {
        providers: Array.from(new Set(hvmDataset.map((row)=>String(row.provider || "Unknown")))).sort(),
        conditions: Array.from(new Set(hvmDataset.map((row)=>String(row.condition || "Unknown")))).sort(),
        statuses: Array.from(new Set(hvmDataset.map((row)=>String(row.status || "Unknown")))).sort()
    };
}
function formatRevenueMillions(value) {
    return `${(value / 1_000_000).toFixed(value >= 10_000_000 ? 1 : 2).replace(/\.0$/, "")}M`;
}
function formatCurrencyShort(value) {
    const abs = Math.abs(value);
    if (abs >= 1_000_000) {
        return `${(value / 1_000_000).toFixed(abs >= 10_000_000 ? 1 : 2).replace(/\.0$/, "")}M`;
    }
    if (abs >= 1_000) {
        return `${(value / 1_000).toFixed(abs >= 10_000 ? 1 : 2).replace(/\.0$/, "")}K`;
    }
    return Math.round(value).toLocaleString("en-US");
}
function formatCurrencyDisplay(value) {
    return `Ð ${formatCurrencyShort(value)}`;
}
function formatCount(value) {
    return Math.round(value).toLocaleString("en-US");
}
function formatShare(value, total) {
    if (!total) {
        return "0.0%";
    }
    return `${(value / total * 100).toFixed(1)}%`;
}
function statusForRows(rows) {
    const statuses = rows.map((row)=>statusMap[String(row.status).toLowerCase()] ?? "planned");
    if (statuses.includes("active")) {
        return "active";
    }
    if (statuses.includes("paused")) {
        return "paused";
    }
    return "planned";
}
function getOverviewBookingOpportunity(filters) {
    const rows = getOverviewFilteredRows(filters);
    const identified = rows.reduce((sum, row)=>sum + toNumber(row.target), 0);
    const contacted = rows.reduce((sum, row)=>sum + toNumber(row.contacted), 0);
    const booked = rows.reduce((sum, row)=>sum + toNumber(row.booked), 0);
    const attended = rows.reduce((sum, row)=>sum + toNumber(row.attended), 0);
    const revenue = rows.reduce((sum, row)=>sum + toNumber(row.revenue), 0);
    const safeIdentified = Math.max(identified, 1);
    const items = [
        {
            label: "Identified",
            count: identified,
            status: "Active"
        },
        {
            label: "Contacted",
            count: contacted,
            status: "Active"
        },
        {
            label: "Appointment Booked",
            count: booked,
            status: "Planned"
        },
        {
            label: "Attended",
            count: attended,
            status: "Paused"
        }
    ];
    return items.map((item, index)=>{
        const percent = item.count / safeIdentified * 100;
        const previous = index === 0 ? safeIdentified : Math.max(items[index - 1].count, 1);
        const drop = index === 0 ? (safeIdentified - contacted) / safeIdentified * 100 : (previous - item.count) / previous * 100;
        return {
            label: item.label,
            count: formatCount(item.count),
            leftNote: index === 0 ? "100.0% of total" : `${percent.toFixed(1)}%`,
            rightNote: index === items.length - 1 ? "" : `${Math.max(0, drop).toFixed(1)}%`,
            revenue: formatRevenueMillions(revenue * (item.count / safeIdentified)),
            width: Math.max(8, Math.min(100, percent)),
            status: item.status
        };
    });
}
function getOverviewKpiCards(filters) {
    const rows = getOverviewFilteredRows(filters);
    const conditions = new Set(rows.map((row)=>String(row.condition || "Unknown")));
    const campaigns = new Set(rows.map((row)=>String(row.campaignId || row.campaignName || "Unknown Campaign")));
    const liveCampaigns = new Set(rows.filter((row)=>String(row.status).toLowerCase() === "live").map((row)=>String(row.campaignId || row.campaignName || "Unknown Campaign")));
    const eligiblePatients = rows.reduce((sum, row)=>sum + toNumber(row.target), 0);
    const booked = rows.reduce((sum, row)=>sum + toNumber(row.booked), 0);
    const attended = rows.reduce((sum, row)=>sum + toNumber(row.attended), 0);
    const revenue = rows.reduce((sum, row)=>sum + toNumber(row.revenue), 0);
    const averageRevenuePerPerson = eligiblePatients ? revenue / eligiblePatients : 0;
    const seenRate = attended ? booked / attended * 100 : 0;
    return [
        {
            title: "No. of Conditions",
            value: formatCount(conditions.size),
            icon: "/overview-conditions.png"
        },
        {
            title: "Eligible Patients",
            value: formatCompact(eligiblePatients).toUpperCase(),
            icon: "/overview-candidate.png"
        },
        {
            title: "Seen Rate",
            value: `${seenRate.toFixed(1)}%`,
            note: "Booked / attended",
            noteClass: "up",
            icon: "/overview-seen-rate.png"
        },
        {
            title: "Campaigns",
            value: formatCount(campaigns.size),
            secondary: formatCount(liveCampaigns.size),
            valueLabel: "Campaigns",
            secondaryLabel: "Live",
            icon: "/overview-announcement.png"
        },
        {
            title: "Incremental Revenue",
            value: formatCurrencyDisplay(revenue),
            icon: "/overview-revenue.png"
        },
        {
            title: "Avg. Incremental Rev/person",
            value: formatCurrencyDisplay(averageRevenuePerPerson),
            icon: "/overview-candidate.png"
        }
    ];
}
function getOverviewProviderCampaigns(filters) {
    const rows = getOverviewFilteredRows(filters);
    const byProvider = new Map();
    rows.forEach((row)=>{
        const stage = stageKeyMap[String(row.stage).toLowerCase()];
        if (!stage) {
            return;
        }
        if (!byProvider.has(row.provider)) {
            byProvider.set(row.provider, {
                acquire: new Set(),
                build: new Set(),
                contain: new Set()
            });
        }
        byProvider.get(row.provider)?.[stage].add(row.campaignId);
    });
    return Array.from(byProvider.entries()).map(([name, stages])=>{
        const acquire = stages.acquire.size;
        const build = stages.build.size;
        const contain = stages.contain.size;
        return {
            name,
            acquire,
            build,
            contain,
            total: acquire + build + contain
        };
    }).filter((row)=>row.total > 0).sort((a, b)=>b.total - a.total).slice(0, 10);
}
function getOverviewCampaignActivity(filters) {
    const rows = getOverviewFilteredRows(filters);
    const byCampaign = new Map();
    rows.forEach((row)=>{
        const label = String(row.campaignName || row.campaignId || "Unknown Campaign");
        if (!byCampaign.has(label)) {
            byCampaign.set(label, {
                label,
                target: 0,
                contacted: 0,
                booked: 0,
                sortValue: 0
            });
        }
        const current = byCampaign.get(label);
        if (!current) {
            return;
        }
        current.target += toNumber(row.target);
        current.contacted += toNumber(row.contacted);
        current.booked += toNumber(row.booked);
        current.sortValue += toNumber(row.revenue);
    });
    return Array.from(byCampaign.values()).sort((a, b)=>b.sortValue - a.sortValue).slice(0, 5).map(({ sortValue: _sortValue, ...row })=>({
            label: row.label.length > 16 ? `${row.label.slice(0, 14)}...` : row.label,
            target: Math.round(row.target),
            contacted: Math.round(row.contacted),
            booked: Math.round(row.booked)
        }));
}
function getOverviewIncrementalRevenueSeries(filters) {
    const rows = getOverviewFilteredRows(filters);
    const buckets = getPeriodBuckets(filters);
    const bucketIndexes = new Map(buckets.map((bucket, index)=>[
            bucket.periodIndex,
            index
        ]));
    const monthlyRevenueByStage = {
        acquire: Array(buckets.length).fill(0),
        build: Array(buckets.length).fill(0),
        contain: Array(buckets.length).fill(0)
    };
    rows.forEach((row)=>{
        const stage = stageKeyMap[String(row.stage).toLowerCase()];
        const period = getPeriodParts(row.period);
        const bucketIndex = period ? bucketIndexes.get(getPeriodIndex(period.year, period.monthIndex)) : undefined;
        if (!stage || bucketIndex === undefined) {
            return;
        }
        monthlyRevenueByStage[stage][bucketIndex] += toNumber(row.revenue);
    });
    return Object.keys(monthlyRevenueByStage).filter((key)=>filters.lifestageType === "all" || filters.lifestageType === key).map((key)=>({
            key,
            label: stageMeta[key].label,
            values: monthlyRevenueByStage[key].map((value)=>Number((value / 1_000_000).toFixed(2)))
        }));
}
function getOverviewIncrementalRevenueLabels(filters) {
    const buckets = getPeriodBuckets(filters);
    const yearGroups = buckets.reduce((groups, bucket, index)=>{
        const year = String(bucket.year);
        groups[year] = groups[year] ?? [];
        groups[year].push(index);
        return groups;
    }, {});
    const yearCenterIndexes = new Set(Object.values(yearGroups).map((indexes)=>indexes[Math.floor((indexes.length - 1) / 2)]));
    return buckets.map((bucket, index)=>({
            label: bucket.label,
            month: monthLabels[bucket.monthIndex],
            year: String(bucket.year),
            showYear: yearCenterIndexes.has(index)
        }));
}
function getOverviewCampaignSummary(filters) {
    const rows = getOverviewFilteredRows(filters);
    const groupedRows = new Map();
    rows.forEach((row)=>{
        const groupKey = `${row.condition || "Unknown"}::${row.subCondition || "Unknown"}`;
        if (!groupedRows.has(groupKey)) {
            groupedRows.set(groupKey, []);
        }
        groupedRows.get(groupKey)?.push(row);
    });
    return Array.from(groupedRows.entries()).map(([, groupRows])=>{
        const conditionName = String(groupRows[0]?.condition || "Unknown");
        const subConditionName = String(groupRows[0]?.subCondition || "Unknown");
        const eligible = groupRows.reduce((sum, row)=>sum + toNumber(row.target), 0);
        const revenue = groupRows.reduce((sum, row)=>sum + toNumber(row.revenue), 0);
        const seenBase = groupRows.reduce((sum, row)=>sum + toNumber(row.target), 0);
        const weightedSeen = groupRows.reduce((sum, row)=>sum + toNumber(row.seenRate) * toNumber(row.target), 0);
        const averageRevenue = groupRows.length ? groupRows.reduce((sum, row)=>sum + toNumber(row.avgRevPatient), 0) / groupRows.length : 0;
        const campaignCount = new Set(groupRows.map((row)=>row.campaignId)).size;
        const status = String(groupRows[0]?.status || "Unknown");
        return {
            condition: conditionName,
            stage: subConditionName === "Unknown" ? "Unknown" : `Cohort ${subConditionName}`,
            eligible: formatCount(eligible),
            seenRate: `${(seenBase ? weightedSeen / seenBase : 0).toFixed(1)}%`,
            campaigns: String(campaignCount).padStart(2, "0"),
            avgRevenue: formatCurrencyShort(averageRevenue),
            incrementalRevenue: formatCurrencyShort(revenue),
            status,
            sortValue: revenue
        };
    }).sort((a, b)=>b.sortValue - a.sortValue).slice(0, 6).map(({ sortValue: _sortValue, ...row })=>row);
}
function getOverviewTreeData() {
    return Object.keys(stageMeta).reduce((result, stageKey)=>{
        const stageRows = hvmDataset.filter((row)=>stageKeyMap[String(row.stage).toLowerCase()] === stageKey);
        const stageTotal = stageRows.reduce((sum, row)=>sum + toNumber(row.target), 0);
        const conditionNames = Array.from(new Set(stageRows.map((row)=>String(row.condition || "Unknown"))));
        const conditions = conditionNames.map((conditionName)=>{
            const conditionRows = stageRows.filter((row)=>String(row.condition || "Unknown") === conditionName);
            const conditionTotal = conditionRows.reduce((sum, row)=>sum + toNumber(row.target), 0);
            const segmentNames = Array.from(new Set(conditionRows.map((row)=>String(row.subCondition || "Unknown"))));
            const segments = segmentNames.map((segmentName)=>{
                const segmentRows = conditionRows.filter((row)=>String(row.subCondition || "Unknown") === segmentName);
                const segmentTotal = segmentRows.reduce((sum, row)=>sum + toNumber(row.target), 0);
                return {
                    total: segmentTotal,
                    id: `${slugify(conditionName)}-${slugify(segmentName)}`,
                    label: segmentName === "Unknown" ? "Unknown cohort" : `Cohort ${segmentName}`,
                    value: `${formatCompact(segmentTotal)} · ${formatShare(segmentTotal, stageTotal)}`,
                    status: statusForRows(segmentRows)
                };
            }).sort((a, b)=>b.total - a.total);
            return {
                id: slugify(conditionName),
                label: conditionName,
                value: `${formatCompact(conditionTotal)} · ${formatShare(conditionTotal, stageTotal)}`,
                total: conditionTotal,
                segments
            };
        }).sort((a, b)=>b.total - a.total);
        result[stageKey] = {
            ...stageMeta[stageKey],
            total: `${formatCompact(stageTotal)} pts`,
            conditions
        };
        return result;
    }, {});
}
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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hvm$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/hvm-data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const NODE_WIDTH = 132;
const NODE_HEIGHT = 48;
const CANVAS_WIDTH = 860;
const statusLabelMap = {
    active: "Active",
    planned: "Planned",
    paused: "Paused"
};
const stagePalette = {
    blue: "#2367E8",
    green: "#0B9F30",
    orange: "#FF6900"
};
const levelPalette = {
    stage: "#2367E8",
    condition: "#5FA8F5",
    segment: "#46C7DE",
    status: "#22C55E"
};
const statusPalette = {
    active: "#22C55E",
    planned: "#1D6CFF",
    paused: "#F59E0B"
};
function formatCompact(value) {
    const abs = Math.abs(value);
    if (abs >= 1_000_000) {
        return `${(value / 1_000_000).toFixed(abs >= 10_000_000 ? 0 : 1)}M`;
    }
    if (abs >= 1_000) {
        return `${(value / 1_000).toFixed(abs >= 10_000 ? 0 : 1)}k`;
    }
    return Math.round(value).toLocaleString();
}
function buildHierarchy(stage) {
    return {
        id: `stage-${stage.key}`,
        label: stage.label.toUpperCase(),
        valueLabel: stage.total,
        color: stagePalette[stage.color],
        type: "stage",
        children: stage.conditions.map((condition)=>({
                id: `condition-${condition.id}`,
                label: condition.label,
                valueLabel: condition.value,
                color: levelPalette.condition,
                type: "condition",
                children: condition.segments.map((segment)=>({
                        id: `segment-${condition.id}-${segment.id}`,
                        label: segment.label,
                        valueLabel: segment.value,
                        color: levelPalette.segment,
                        type: "segment",
                        children: [
                            {
                                id: `status-${condition.id}-${segment.id}-${segment.status}`,
                                label: statusLabelMap[segment.status],
                                valueLabel: formatCompact(segment.total),
                                color: statusPalette[segment.status],
                                type: "status"
                            }
                        ]
                    }))
            }))
    };
}
function visibleChildren(node, expandedIds) {
    if (!node.children?.length || !expandedIds.has(node.id)) {
        return [];
    }
    return node.children;
}
function layoutTree(root, expandedIds) {
    const nodes = [];
    const links = [];
    const rowGap = 54;
    const levelGap = 190;
    const startX = 58;
    const startY = 58;
    let leafIndex = 0;
    const walk = (node, depth, parent)=>{
        const children = visibleChildren(node, expandedIds);
        let y;
        if (children.length) {
            const childNodes = children.map((child)=>walk(child, depth + 1));
            y = childNodes.reduce((sum, child)=>sum + child.y, 0) / childNodes.length;
        } else {
            y = startY + leafIndex * rowGap;
            leafIndex += 1;
        }
        const positioned = {
            ...node,
            x: startX + depth * levelGap,
            y,
            depth,
            hasChildren: Boolean(node.children?.length)
        };
        nodes.push(positioned);
        if (parent) {
            links.push({
                id: `${parent.id}-${positioned.id}`,
                source: parent,
                target: positioned
            });
        }
        children.forEach((child)=>{
            const childNode = nodes.find((item)=>item.id === child.id);
            if (childNode) {
                links.push({
                    id: `${positioned.id}-${childNode.id}`,
                    source: positioned,
                    target: childNode
                });
            }
        });
        return positioned;
    };
    walk(root, 0);
    return {
        nodes,
        links: links.filter((link, index, all)=>all.findIndex((item)=>item.id === link.id) === index),
        height: Math.max(248, startY + 34 + Math.max(1, leafIndex) * rowGap),
        width: CANVAS_WIDTH
    };
}
function nodePath(source, target) {
    const sourceX = source.x + NODE_WIDTH;
    const sourceY = source.y;
    const targetX = target.x - 14;
    const targetY = target.y;
    const curve = Math.max(48, (targetX - sourceX) * 0.45);
    return `M ${sourceX} ${sourceY} C ${sourceX + curve} ${sourceY}, ${targetX - curve} ${targetY}, ${targetX} ${targetY}`;
}
function OverviewTree() {
    _s();
    const [activeStage, setActiveStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("acquire");
    const [expandedIds, setExpandedIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "OverviewTree.useState": ()=>new Set()
    }["OverviewTree.useState"]);
    const treeData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OverviewTree.useMemo[treeData]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hvm$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverviewTreeData"])()
    }["OverviewTree.useMemo[treeData]"], []);
    const stage = treeData[activeStage];
    const hierarchy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OverviewTree.useMemo[hierarchy]": ()=>buildHierarchy(stage)
    }["OverviewTree.useMemo[hierarchy]"], [
        stage
    ]);
    const layout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OverviewTree.useMemo[layout]": ()=>layoutTree(hierarchy, expandedIds)
    }["OverviewTree.useMemo[layout]"], [
        hierarchy,
        expandedIds
    ]);
    const visibleDepths = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OverviewTree.useMemo[visibleDepths]": ()=>new Set(layout.nodes.map({
                "OverviewTree.useMemo[visibleDepths]": (node)=>node.depth
            }["OverviewTree.useMemo[visibleDepths]"]))
    }["OverviewTree.useMemo[visibleDepths]"], [
        layout.nodes
    ]);
    const handleStageChange = (nextStage)=>{
        setActiveStage(nextStage);
        setExpandedIds(new Set());
    };
    const toggleNode = (node)=>{
        if (!node.hasChildren) {
            return;
        }
        setExpandedIds((current)=>{
            const next = new Set(current);
            if (next.has(node.id)) {
                next.delete(node.id);
            } else {
                next.add(node.id);
            }
            return next;
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overviewTree overviewTreeLibrary",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overviewTreeBody overviewTreeChartBody",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                    className: "overviewTreeStages",
                    children: Object.values(treeData).map((item)=>{
                        const isActive = item.key === activeStage;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: `overviewTreeStageButton ${item.color} ${isActive ? "active" : ""}`,
                            onClick: ()=>handleStageChange(item.key),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/components/overview-tree.tsx",
                                    lineNumber: 224,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: item.subtitle
                                }, void 0, false, {
                                    fileName: "[project]/components/overview-tree.tsx",
                                    lineNumber: 225,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, item.key, true, {
                            fileName: "[project]/components/overview-tree.tsx",
                            lineNumber: 218,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/overview-tree.tsx",
                    lineNumber: 214,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overviewDecompositionPanel",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overviewDecompositionHeader",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: [
                                                stage.label,
                                                " Decomposition"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/overview-tree.tsx",
                                            lineNumber: 234,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Click a parent node to expand or collapse the hierarchy"
                                        }, void 0, false, {
                                            fileName: "[project]/components/overview-tree.tsx",
                                            lineNumber: 235,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/overview-tree.tsx",
                                    lineNumber: 233,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setExpandedIds(new Set()),
                                    children: "Reset"
                                }, void 0, false, {
                                    fileName: "[project]/components/overview-tree.tsx",
                                    lineNumber: 237,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/overview-tree.tsx",
                            lineNumber: 232,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overviewDecompositionCanvas",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: `0 0 ${layout.width} ${layout.height}`,
                                preserveAspectRatio: "xMidYMid meet",
                                role: "img",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                            id: "overviewTreeShadow",
                                            x: "-20%",
                                            y: "-20%",
                                            width: "140%",
                                            height: "140%",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feDropShadow", {
                                                dx: "0",
                                                dy: "5",
                                                stdDeviation: "5",
                                                floodColor: "#8eb1d8",
                                                floodOpacity: "0.22"
                                            }, void 0, false, {
                                                fileName: "[project]/components/overview-tree.tsx",
                                                lineNumber: 246,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/overview-tree.tsx",
                                            lineNumber: 245,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/overview-tree.tsx",
                                        lineNumber: 244,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        className: "overviewDecompositionHeadings",
                                        children: [
                                            visibleDepths.has(1) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: 58 + 190 + NODE_WIDTH / 2,
                                                y: "20",
                                                textAnchor: "middle",
                                                children: "Condition"
                                            }, void 0, false, {
                                                fileName: "[project]/components/overview-tree.tsx",
                                                lineNumber: 251,
                                                columnNumber: 19
                                            }, this) : null,
                                            visibleDepths.has(2) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: 58 + 190 * 2 + NODE_WIDTH / 2,
                                                y: "20",
                                                textAnchor: "middle",
                                                children: "Sub-condition"
                                            }, void 0, false, {
                                                fileName: "[project]/components/overview-tree.tsx",
                                                lineNumber: 256,
                                                columnNumber: 19
                                            }, this) : null,
                                            visibleDepths.has(3) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: 58 + 190 * 3 + NODE_WIDTH / 2,
                                                y: "20",
                                                textAnchor: "middle",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/components/overview-tree.tsx",
                                                lineNumber: 261,
                                                columnNumber: 19
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/overview-tree.tsx",
                                        lineNumber: 249,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        children: layout.links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                className: "overviewDecompositionLink",
                                                d: nodePath(link.source, link.target)
                                            }, link.id, false, {
                                                fileName: "[project]/components/overview-tree.tsx",
                                                lineNumber: 268,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/overview-tree.tsx",
                                        lineNumber: 266,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        children: layout.nodes.map((node)=>{
                                            const isExpanded = expandedIds.has(node.id);
                                            const label = node.label.length > 42 ? `${node.label.slice(0, 39).trim()}...` : node.label;
                                            const value = node.valueLabel.length > 24 ? `${node.valueLabel.slice(0, 21).trim()}...` : node.valueLabel;
                                            const textWidth = node.hasChildren ? 92 : 108;
                                            const isStatusNode = node.type === "status";
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                className: `overviewDecompositionNode ${node.hasChildren ? "clickable" : ""}`,
                                                transform: `translate(${node.x}, ${node.y - NODE_HEIGHT / 2})`,
                                                onClick: ()=>toggleNode(node),
                                                role: node.hasChildren ? "button" : "img",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        width: NODE_WIDTH,
                                                        height: NODE_HEIGHT,
                                                        rx: "10",
                                                        fill: node.color,
                                                        opacity: node.type === "status" ? 0.18 : 0.95,
                                                        filter: "url(#overviewTreeShadow)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/overview-tree.tsx",
                                                        lineNumber: 287,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        width: NODE_WIDTH,
                                                        height: NODE_HEIGHT,
                                                        rx: "10",
                                                        fill: node.type === "status" ? "rgba(255,255,255,0.88)" : node.color,
                                                        stroke: node.color,
                                                        strokeWidth: "1.4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/overview-tree.tsx",
                                                        lineNumber: 288,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("foreignObject", {
                                                        x: "12",
                                                        y: "7",
                                                        width: textWidth,
                                                        height: "23",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `overviewNodeText overviewNodeLabel ${isStatusNode ? "status" : ""}`,
                                                            children: label
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/overview-tree.tsx",
                                                            lineNumber: 290,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/overview-tree.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("foreignObject", {
                                                        x: "12",
                                                        y: "31",
                                                        width: textWidth,
                                                        height: "11",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `overviewNodeText overviewNodeValue ${isStatusNode ? "status" : ""}`,
                                                            children: value
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/overview-tree.tsx",
                                                            lineNumber: 293,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/overview-tree.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 23
                                                    }, this),
                                                    node.hasChildren ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                        transform: "translate(111 14)",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "10",
                                                                cy: "10",
                                                                r: "10",
                                                                fill: "rgba(255,255,255,0.9)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/overview-tree.tsx",
                                                                lineNumber: 297,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: isExpanded ? "M5 10H15" : "M5 10H15M10 5V15",
                                                                stroke: node.color,
                                                                strokeWidth: "2",
                                                                strokeLinecap: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/overview-tree.tsx",
                                                                lineNumber: 298,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/overview-tree.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 25
                                                    }, this) : null
                                                ]
                                            }, node.id, true, {
                                                fileName: "[project]/components/overview-tree.tsx",
                                                lineNumber: 280,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/overview-tree.tsx",
                                        lineNumber: 271,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/overview-tree.tsx",
                                lineNumber: 243,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/overview-tree.tsx",
                            lineNumber: 242,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/overview-tree.tsx",
                    lineNumber: 231,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/overview-tree.tsx",
            lineNumber: 213,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/overview-tree.tsx",
        lineNumber: 212,
        columnNumber: 5
    }, this);
}
_s(OverviewTree, "0uBzdesR4RVxoouzhbdZ/O/E38M=");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hvm$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/hvm-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$overview$2d$tree$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/overview-tree.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const entityTabs = [
    "Entity 1",
    "Entity 2",
    "Entity 3",
    "Entity 4",
    "Entity 5",
    "Entity 6",
    "Entity 7",
    "Entity 8",
    "Entity 9"
];
const overviewDefaultDateRange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hvm$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverviewDatasetDateRange"])();
const overviewFilterOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hvm$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverviewFilterOptions"])();
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
                count: "432",
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
                name: "Entity 1",
                acquire: 20,
                build: 10,
                contain: 19,
                total: 49
            },
            {
                name: "Entity 2",
                acquire: 12,
                build: 25,
                contain: 9,
                total: 46
            },
            {
                name: "Entity 3",
                acquire: 15,
                build: 15,
                contain: 14,
                total: 44
            },
            {
                name: "Entity 4",
                acquire: 14,
                build: 19,
                contain: 9,
                total: 42
            },
            {
                name: "Entity 5",
                acquire: 8,
                build: 18,
                contain: 12,
                total: 38
            },
            {
                name: "Entity 6",
                acquire: 6,
                build: 23,
                contain: 6,
                total: 35
            },
            {
                name: "Entity 7",
                acquire: 11,
                build: 14,
                contain: 8,
                total: 33
            },
            {
                name: "Entity 8",
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
                name: "Entity 1",
                acquire: 10,
                build: 18,
                contain: 8,
                total: 36
            },
            {
                name: "Entity 2",
                acquire: 14,
                build: 9,
                contain: 10,
                total: 33
            },
            {
                name: "Entity 3",
                acquire: 13,
                build: 12,
                contain: 7,
                total: 32
            },
            {
                name: "Entity 4",
                acquire: 11,
                build: 15,
                contain: 5,
                total: 31
            },
            {
                name: "Entity 5",
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
                name: "Entity 6",
                acquire: 10,
                build: 15,
                contain: 8,
                total: 33
            },
            {
                name: "Entity 7",
                acquire: 9,
                build: 13,
                contain: 6,
                total: 28
            },
            {
                name: "Entity 8",
                acquire: 7,
                build: 10,
                contain: 5,
                total: 22
            },
            {
                name: "Entity 9",
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
        startDate: overviewDefaultDateRange.startDate,
        endDate: overviewDefaultDateRange.endDate,
        region: "all",
        lifestageType: "all",
        condition: "all",
        status: "all"
    });
    const [draftFilters, setDraftFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(appliedFilters);
    const { startDate, endDate, region, lifestageType, condition, status } = appliedFilters;
    const data = overviewRegionData[region] ?? overviewRegionData.all;
    const monthRatio = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonthRatio"])({
        startDate,
        endDate
    });
    const visibleMetrics = data.metrics.map((card)=>({
            ...card,
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scaleDisplayValue"])(card.value, monthRatio),
            secondary: card.secondary ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scaleDisplayValue"])(card.secondary, monthRatio) : undefined
        }));
    const datasetFilters = {
        startDate,
        endDate,
        region,
        lifestageType,
        condition,
        status
    };
    const datasetBooking = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hvm$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverviewBookingOpportunity"])(datasetFilters);
    const datasetProviders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hvm$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverviewProviderCampaigns"])(datasetFilters);
    const campaignActivity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hvm$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverviewCampaignActivity"])(datasetFilters);
    const visibleProviderRows = datasetProviders.map((row)=>({
            ...row,
            visibleAcquire: lifestageType === "all" || lifestageType === "acquire" ? row.acquire : 0,
            visibleBuild: lifestageType === "all" || lifestageType === "build" ? row.build : 0,
            visibleContain: lifestageType === "all" || lifestageType === "contain" ? row.contain : 0
        }));
    const providerScaleMax = Math.max(1, ...visibleProviderRows.map((row)=>row.visibleAcquire + row.visibleBuild + row.visibleContain));
    const filteredSummary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hvm$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverviewCampaignSummary"])(datasetFilters);
    const revenuePeriodLabels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hvm$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverviewIncrementalRevenueLabels"])(datasetFilters);
    const visibleRevenueSeries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hvm$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverviewIncrementalRevenueSeries"])(datasetFilters);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2d$shell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardShell"], {
        pageClassName: "overviewPage",
        title: "Overview",
        breadcrumbCurrent: "Overview",
        entityTabs: entityTabs,
        activeEntityTab: "Entity 1",
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
                                lineNumber: 297,
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
                                lineNumber: 298,
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
                                lineNumber: 304,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/overview/page.tsx",
                        lineNumber: 296,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "filterGroup overviewFilterGroup",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Regions"
                            }, void 0, false, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 312,
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
                                            lineNumber: 319,
                                            columnNumber: 15
                                        }, this),
                                        overviewFilterOptions.providers.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: option,
                                                children: option
                                            }, option, false, {
                                                fileName: "[project]/app/overview/page.tsx",
                                                lineNumber: 321,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/overview/page.tsx",
                                    lineNumber: 314,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 313,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/overview/page.tsx",
                        lineNumber: 311,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "filterGroup overviewFilterGroup",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Lifestage Type"
                            }, void 0, false, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 327,
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
                                            lineNumber: 334,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "acquire",
                                            children: "Acquire"
                                        }, void 0, false, {
                                            fileName: "[project]/app/overview/page.tsx",
                                            lineNumber: 335,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "build",
                                            children: "Build"
                                        }, void 0, false, {
                                            fileName: "[project]/app/overview/page.tsx",
                                            lineNumber: 336,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "contain",
                                            children: "Contain"
                                        }, void 0, false, {
                                            fileName: "[project]/app/overview/page.tsx",
                                            lineNumber: 337,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/overview/page.tsx",
                                    lineNumber: 329,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 328,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/overview/page.tsx",
                        lineNumber: 326,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "filterGroup overviewFilterGroup",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Conditions"
                            }, void 0, false, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 342,
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
                                            lineNumber: 354,
                                            columnNumber: 15
                                        }, this),
                                        overviewFilterOptions.conditions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: option,
                                                children: option
                                            }, option, false, {
                                                fileName: "[project]/app/overview/page.tsx",
                                                lineNumber: 356,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/overview/page.tsx",
                                    lineNumber: 344,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 343,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/overview/page.tsx",
                        lineNumber: 341,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "filterGroup overviewFilterGroup",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Status"
                            }, void 0, false, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 362,
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
                                            lineNumber: 374,
                                            columnNumber: 15
                                        }, this),
                                        overviewFilterOptions.statuses.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: option,
                                                children: option
                                            }, option, false, {
                                                fileName: "[project]/app/overview/page.tsx",
                                                lineNumber: 376,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/overview/page.tsx",
                                    lineNumber: 364,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 363,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/overview/page.tsx",
                        lineNumber: 361,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "applyButton",
                        onClick: ()=>setAppliedFilters(draftFilters),
                        children: "APPLY"
                    }, void 0, false, {
                        fileName: "[project]/app/overview/page.tsx",
                        lineNumber: 381,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/overview/page.tsx",
                lineNumber: 295,
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
                                lineNumber: 387,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "metricContent",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: card.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/overview/page.tsx",
                                        lineNumber: 389,
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
                                                        lineNumber: 393,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: card.valueLabel
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/overview/page.tsx",
                                                        lineNumber: 394,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/overview/page.tsx",
                                                lineNumber: 392,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "metricPair",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: card.secondary
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/overview/page.tsx",
                                                        lineNumber: 397,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: card.secondaryLabel
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/overview/page.tsx",
                                                        lineNumber: 398,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/overview/page.tsx",
                                                lineNumber: 396,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/overview/page.tsx",
                                        lineNumber: 391,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "metricValueRow",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: card.value
                                            }, void 0, false, {
                                                fileName: "[project]/app/overview/page.tsx",
                                                lineNumber: 403,
                                                columnNumber: 19
                                            }, this),
                                            card.note ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `metricNote ${card.noteClass ?? ""}`,
                                                children: card.note
                                            }, void 0, false, {
                                                fileName: "[project]/app/overview/page.tsx",
                                                lineNumber: 404,
                                                columnNumber: 32
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/overview/page.tsx",
                                        lineNumber: 402,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 388,
                                columnNumber: 13
                            }, this)
                        ]
                    }, card.title, true, {
                        fileName: "[project]/app/overview/page.tsx",
                        lineNumber: 386,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/overview/page.tsx",
                lineNumber: 384,
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
                                lineNumber: 414,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$overview$2d$tree$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OverviewTree"], {}, void 0, false, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 415,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/overview/page.tsx",
                        lineNumber: 413,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "glassCard overviewPanel bookingPanel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Booking Opportunity"
                            }, void 0, false, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 419,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bookingGrid",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$export$2d$visuals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExportFunnelChart"], {
                                    data: datasetBooking,
                                    height: 280,
                                    leftHeader: "Opportunity Distribution",
                                    rightHeader: "Incremental Revenue (AED)"
                                }, void 0, false, {
                                    fileName: "[project]/app/overview/page.tsx",
                                    lineNumber: 421,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 420,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/overview/page.tsx",
                        lineNumber: 418,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "glassCard overviewPanel providerPanel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Campaigns By Provider"
                            }, void 0, false, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 426,
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
                                        lineNumber: 428,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "legend build",
                                        children: "Build"
                                    }, void 0, false, {
                                        fileName: "[project]/app/overview/page.tsx",
                                        lineNumber: 429,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "legend contain",
                                        children: "Contain"
                                    }, void 0, false, {
                                        fileName: "[project]/app/overview/page.tsx",
                                        lineNumber: 430,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 427,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "providerRows",
                                children: visibleProviderRows.map((row)=>{
                                    const visibleTotal = row.visibleAcquire + row.visibleBuild + row.visibleContain;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "providerRow",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "providerName",
                                                children: row.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/overview/page.tsx",
                                                lineNumber: 438,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "providerBar",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "segment acquire",
                                                        style: {
                                                            width: `${row.visibleAcquire / providerScaleMax * 100}%`
                                                        },
                                                        title: `${row.name} Acquire: ${row.acquire}`,
                                                        children: row.visibleAcquire || ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/overview/page.tsx",
                                                        lineNumber: 440,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "segment build",
                                                        style: {
                                                            width: `${row.visibleBuild / providerScaleMax * 100}%`
                                                        },
                                                        title: `${row.name} Build: ${row.build}`,
                                                        children: row.visibleBuild || ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/overview/page.tsx",
                                                        lineNumber: 443,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "segment contain",
                                                        style: {
                                                            width: `${row.visibleContain / providerScaleMax * 100}%`
                                                        },
                                                        title: `${row.name} Contain: ${row.contain}`,
                                                        children: row.visibleContain || ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/overview/page.tsx",
                                                        lineNumber: 446,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/overview/page.tsx",
                                                lineNumber: 439,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "providerTotal",
                                                children: visibleTotal
                                            }, void 0, false, {
                                                fileName: "[project]/app/overview/page.tsx",
                                                lineNumber: 450,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, row.name, true, {
                                        fileName: "[project]/app/overview/page.tsx",
                                        lineNumber: 437,
                                        columnNumber: 15
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 432,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/overview/page.tsx",
                        lineNumber: 425,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/overview/page.tsx",
                lineNumber: 412,
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
                                lineNumber: 460,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "chartLegend",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "legend target",
                                        children: "Target"
                                    }, void 0, false, {
                                        fileName: "[project]/app/overview/page.tsx",
                                        lineNumber: 462,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "legend contacted",
                                        children: "Contacted"
                                    }, void 0, false, {
                                        fileName: "[project]/app/overview/page.tsx",
                                        lineNumber: 463,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "legend booked",
                                        children: "Booked"
                                    }, void 0, false, {
                                        fileName: "[project]/app/overview/page.tsx",
                                        lineNumber: 464,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 461,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "barChart rechartsBarChart",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$export$2d$visuals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExportGroupedBarChart"], {
                                    data: campaignActivity,
                                    height: 220
                                }, void 0, false, {
                                    fileName: "[project]/app/overview/page.tsx",
                                    lineNumber: 467,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 466,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/overview/page.tsx",
                        lineNumber: 459,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "glassCard overviewPanel lineChartPanel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Campaigns By Incremental Revenue"
                            }, void 0, false, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 475,
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
                                        lineNumber: 477,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "legend build",
                                        children: "Build"
                                    }, void 0, false, {
                                        fileName: "[project]/app/overview/page.tsx",
                                        lineNumber: 478,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "legend contain",
                                        children: "Contain"
                                    }, void 0, false, {
                                        fileName: "[project]/app/overview/page.tsx",
                                        lineNumber: 479,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 476,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lineChart",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$export$2d$visuals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExportMultiLineChart"], {
                                    series: visibleRevenueSeries.map((item)=>item.values),
                                    labels: revenuePeriodLabels.map((period)=>period.label),
                                    periodLabels: revenuePeriodLabels,
                                    colors: visibleRevenueSeries.map((item)=>item.key === "acquire" ? "#2563EB" : item.key === "build" ? "#22C55E" : "#F97316"),
                                    names: visibleRevenueSeries.map((item)=>item.label),
                                    valueSuffix: "M",
                                    yAxisLabel: "Revenue (M)"
                                }, void 0, false, {
                                    fileName: "[project]/app/overview/page.tsx",
                                    lineNumber: 482,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 481,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/overview/page.tsx",
                        lineNumber: 474,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "glassCard overviewPanel summaryPanel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Campaigns Summary"
                            }, void 0, false, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 495,
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
                                                lineNumber: 498,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Screening Stage"
                                            }, void 0, false, {
                                                fileName: "[project]/app/overview/page.tsx",
                                                lineNumber: 499,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Eligible Patients"
                                            }, void 0, false, {
                                                fileName: "[project]/app/overview/page.tsx",
                                                lineNumber: 500,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Seen Rate"
                                            }, void 0, false, {
                                                fileName: "[project]/app/overview/page.tsx",
                                                lineNumber: 501,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "No. Of Campaigns"
                                            }, void 0, false, {
                                                fileName: "[project]/app/overview/page.tsx",
                                                lineNumber: 502,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Avg. Rev per Person (AED)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/overview/page.tsx",
                                                lineNumber: 503,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Incremental Revenue"
                                            }, void 0, false, {
                                                fileName: "[project]/app/overview/page.tsx",
                                                lineNumber: 504,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/overview/page.tsx",
                                        lineNumber: 497,
                                        columnNumber: 13
                                    }, this),
                                    filteredSummary.map((row, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "summaryRow",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: row.condition
                                                }, void 0, false, {
                                                    fileName: "[project]/app/overview/page.tsx",
                                                    lineNumber: 508,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: row.stage
                                                }, void 0, false, {
                                                    fileName: "[project]/app/overview/page.tsx",
                                                    lineNumber: 509,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: row.eligible
                                                }, void 0, false, {
                                                    fileName: "[project]/app/overview/page.tsx",
                                                    lineNumber: 510,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    title: `Seen rate in ${region.replace("-", " ")}: ${row.seenRate}`,
                                                    children: row.seenRate
                                                }, void 0, false, {
                                                    fileName: "[project]/app/overview/page.tsx",
                                                    lineNumber: 511,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: row.campaigns
                                                }, void 0, false, {
                                                    fileName: "[project]/app/overview/page.tsx",
                                                    lineNumber: 512,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: row.avgRevenue
                                                }, void 0, false, {
                                                    fileName: "[project]/app/overview/page.tsx",
                                                    lineNumber: 513,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: row.incrementalRevenue
                                                }, void 0, false, {
                                                    fileName: "[project]/app/overview/page.tsx",
                                                    lineNumber: 514,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, `${row.condition}-${index}`, true, {
                                            fileName: "[project]/app/overview/page.tsx",
                                            lineNumber: 507,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/overview/page.tsx",
                                lineNumber: 496,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/overview/page.tsx",
                        lineNumber: 494,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/overview/page.tsx",
                lineNumber: 458,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/overview/page.tsx",
        lineNumber: 285,
        columnNumber: 5
    }, this);
}
_s(OverviewPage, "oa5EXEaBnHL9J5PiIvvUO2ifQ3g=");
_c = OverviewPage;
var _c;
__turbopack_context__.k.register(_c, "OverviewPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0h.jw-0._.js.map