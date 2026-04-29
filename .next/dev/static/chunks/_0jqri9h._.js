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
    "ExportDualAxisLineChart",
    ()=>ExportDualAxisLineChart,
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
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
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
                    "Seen Rate: ",
                    point.value,
                    "% (Attended / Booked)"
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    point.y,
                    "M revenue"
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 135,
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
    const { cx = 0, cy = 0, payload, showValueLabel = true } = props;
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
                lineNumber: 151,
                columnNumber: 7
            }, this),
            showValueLabel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
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
                lineNumber: 153,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 150,
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
                lineNumber: 170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    point.count,
                    " patients"
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    point.revenue,
                    " incremental revenue"
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 169,
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
        lineNumber: 192,
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
                lineNumber: 213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    formatCompactAmount(point.value ?? 0),
                    " patients"
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 212,
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
                                    lineNumber: 252,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "58%",
                                    stopColor: color,
                                    stopOpacity: "0.12"
                                }, void 0, false, {
                                    fileName: "[project]/components/export-visuals.tsx",
                                    lineNumber: 253,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "100%",
                                    stopColor: color,
                                    stopOpacity: "0"
                                }, void 0, false, {
                                    fileName: "[project]/components/export-visuals.tsx",
                                    lineNumber: 254,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/export-visuals.tsx",
                            lineNumber: 251,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 250,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                        stroke: "#c7e0f8",
                        strokeOpacity: 0.85
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 257,
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
                        lineNumber: 258,
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
                        lineNumber: 259,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                        cursor: {
                            stroke: "#8cbbe8",
                            strokeDasharray: "4 4"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 260,
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
                        lineNumber: 262,
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
                        lineNumber: 273,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 249,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 248,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 247,
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
                    lineNumber: 330,
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
                    lineNumber: 334,
                    columnNumber: 11
                }, this) : null
            ]
        }, void 0, true, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 329,
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
                                        lineNumber: 349,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "58%",
                                        stopColor: color,
                                        stopOpacity: "0.1"
                                    }, void 0, false, {
                                        fileName: "[project]/components/export-visuals.tsx",
                                        lineNumber: 350,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: color,
                                        stopOpacity: "0"
                                    }, void 0, false, {
                                        fileName: "[project]/components/export-visuals.tsx",
                                        lineNumber: 351,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, color + index, true, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 348,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 346,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                        stroke: "#c7e0f8",
                        strokeOpacity: 0.85
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 355,
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
                        lineNumber: 356,
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
                        lineNumber: 364,
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
                        lineNumber: 373,
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
                            lineNumber: 386,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 345,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 344,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 343,
        columnNumber: 5
    }, this);
}
_s1(ExportMultiLineChart, "xfMyHNFebGjSN1/YPqrD8z5EdLc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c6 = ExportMultiLineChart;
function ExportDualAxisLineChart({ patientValues, revenueValues, labels, periodLabels, patientColor = "#2563EB", revenueColor = "#14B8A6", height = 140 }) {
    _s2();
    const gradientSeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])().replace(/:/g, "");
    const maxPatients = Math.max(...patientValues, 1);
    const maxRevenue = Math.max(...revenueValues, 1);
    const data = labels.map((label, index)=>({
            label,
            monthLabel: periodLabels?.[index]?.month ?? label,
            yearLabel: periodLabels?.[index]?.year ?? "",
            patients: patientValues[index] ?? 0,
            revenue: revenueValues[index] ?? 0
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
                    lineNumber: 439,
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
                    lineNumber: 443,
                    columnNumber: 11
                }, this) : null
            ]
        }, void 0, true, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 438,
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
                    right: 6,
                    bottom: periodLabels ? 12 : 2,
                    left: -8
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: `dualPatients-${gradientSeed}`,
                                x1: "0",
                                y1: "0",
                                x2: "0",
                                y2: "1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: patientColor,
                                        stopOpacity: "0.26"
                                    }, void 0, false, {
                                        fileName: "[project]/components/export-visuals.tsx",
                                        lineNumber: 457,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: patientColor,
                                        stopOpacity: "0"
                                    }, void 0, false, {
                                        fileName: "[project]/components/export-visuals.tsx",
                                        lineNumber: 458,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 456,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: `dualRevenue-${gradientSeed}`,
                                x1: "0",
                                y1: "0",
                                x2: "0",
                                y2: "1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: revenueColor,
                                        stopOpacity: "0.24"
                                    }, void 0, false, {
                                        fileName: "[project]/components/export-visuals.tsx",
                                        lineNumber: 461,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: revenueColor,
                                        stopOpacity: "0"
                                    }, void 0, false, {
                                        fileName: "[project]/components/export-visuals.tsx",
                                        lineNumber: 462,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 460,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 455,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                        stroke: "#c7e0f8",
                        strokeOpacity: 0.85
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 465,
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
                        lineNumber: 466,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                        yAxisId: "patients",
                        domain: [
                            0,
                            Math.ceil(maxPatients * 1.18)
                        ],
                        tick: {
                            fill: patientColor,
                            fontSize: 10
                        },
                        axisLine: {
                            stroke: "#7aa1c4"
                        },
                        tickLine: false,
                        tickFormatter: (value)=>`${value}K`,
                        width: 38
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 474,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                        yAxisId: "revenue",
                        orientation: "right",
                        domain: [
                            0,
                            Math.ceil(maxRevenue * 1.18)
                        ],
                        tick: {
                            fill: revenueColor,
                            fontSize: 10
                        },
                        axisLine: {
                            stroke: "#7aa1c4"
                        },
                        tickLine: false,
                        tickFormatter: (value)=>`${value}M`,
                        width: 38
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 483,
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
                            const suffix = name === "Eligible Patients" ? "K" : "M";
                            const formatted = Number.isFinite(numericValue) ? numericValue.toFixed(2).replace(/\.00$/, "").replace(/(\.\d)0$/, "$1") : String(value);
                            return [
                                `${formatted}${suffix}`,
                                name
                            ];
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 493,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Area"], {
                        yAxisId: "patients",
                        type: "monotone",
                        dataKey: "patients",
                        name: "Eligible Patients",
                        stroke: patientColor,
                        strokeWidth: 2.3,
                        fill: `url(#dualPatients-${gradientSeed})`,
                        dot: {
                            r: 3,
                            fill: patientColor,
                            strokeWidth: 0
                        },
                        activeDot: {
                            r: 5
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 506,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Area"], {
                        yAxisId: "revenue",
                        type: "monotone",
                        dataKey: "revenue",
                        name: "Revenue",
                        stroke: revenueColor,
                        strokeWidth: 2.3,
                        fill: `url(#dualRevenue-${gradientSeed})`,
                        dot: {
                            r: 3,
                            fill: revenueColor,
                            strokeWidth: 0
                        },
                        activeDot: {
                            r: 5
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 517,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 454,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 453,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 452,
        columnNumber: 5
    }, this);
}
_s2(ExportDualAxisLineChart, "xfMyHNFebGjSN1/YPqrD8z5EdLc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c7 = ExportDualAxisLineChart;
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
                        lineNumber: 557,
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
                        lineNumber: 558,
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
                        lineNumber: 559,
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
                        lineNumber: 560,
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
                                    lineNumber: 563,
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
                                lineNumber: 565,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 561,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 556,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 555,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 554,
        columnNumber: 5
    }, this);
}
_c8 = ExportBarValueChart;
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
                        lineNumber: 603,
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
                        lineNumber: 604,
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
                        lineNumber: 605,
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
                        lineNumber: 606,
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
                            lineNumber: 608,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 607,
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
                            lineNumber: 611,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 610,
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
                            lineNumber: 614,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 613,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 602,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 601,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 600,
        columnNumber: 5
    }, this);
}
_c9 = ExportGroupedBarChart;
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
                        lineNumber: 637,
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
                        lineNumber: 638,
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
                        lineNumber: 639,
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
                        lineNumber: 640,
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
                        lineNumber: 641,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 636,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 635,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 634,
        columnNumber: 5
    }, this);
}
_c10 = ExportHorizontalBarChart;
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
                        lineNumber: 663,
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
                        lineNumber: 664,
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
                        lineNumber: 665,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                        cursor: {
                            fill: "rgba(191, 219, 254, 0.22)"
                        },
                        formatter: (value, name)=>{
                            const seriesName = String(name).toLowerCase();
                            return [
                                Math.round(Number(value ?? 0)).toLocaleString("en-US"),
                                seriesName === "stopper" ? "Stopper" : "Dropper"
                            ];
                        },
                        labelFormatter: (label, payload)=>payload?.[0]?.payload?.tooltip ?? label
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 666,
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
                        lineNumber: 678,
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
                        lineNumber: 679,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 662,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 661,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 660,
        columnNumber: 5
    }, this);
}
_c11 = ExportStackedBarChart;
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
            lineNumber: 712,
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
                        lineNumber: 725,
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
                            lineNumber: 728,
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
                        lineNumber: 741,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 724,
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
                                lineNumber: 748,
                                columnNumber: 23
                            }, this)
                        ]
                    }, d.label, true, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 747,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 745,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 723,
        columnNumber: 5
    }, this);
}
_c12 = ExportDonutChart;
function renderDonutCallout({ cx, cy, midAngle, outerRadius, percent, name, value, index = 0, total = 1 }) {
    const RADIAN = Math.PI / 180;
    const angle = midAngle ?? 0;
    const radius = outerRadius ?? 0;
    const centerX = cx ?? 0;
    const centerY = cy ?? 0;
    const sourceX = centerX + (radius - 2) * Math.cos(-angle * RADIAN);
    const sourceY = centerY + (radius - 2) * Math.sin(-angle * RADIAN);
    const elbowX = centerX + (radius + 10) * Math.cos(-angle * RADIAN);
    const elbowY = centerY + (radius + 10) * Math.sin(-angle * RADIAN);
    const fallbackPercent = `${Math.round((percent ?? 0) * 100)}%`;
    const safeName = name && name.length > 17 ? `${name.slice(0, 16)}…` : name;
    const slotMap = [
        {
            side: 1,
            offsetY: -46
        },
        {
            side: 1,
            offsetY: 42
        },
        {
            side: -1,
            offsetY: 42
        },
        {
            side: -1,
            offsetY: -46
        },
        {
            side: 1,
            offsetY: 0
        },
        {
            side: -1,
            offsetY: 0
        }
    ];
    const overflowIndex = Math.max(0, index - slotMap.length);
    const slot = slotMap[index] ?? {
        side: index % 2 === 0 ? 1 : -1,
        offsetY: -58 + overflowIndex % Math.max(total, 1) * 22
    };
    const horizontalReach = Math.max(42, radius * 0.78);
    const labelX = centerX + slot.side * horizontalReach;
    const labelY = centerY + slot.offsetY;
    const textAnchor = slot.side > 0 ? "start" : "end";
    const textX = labelX + slot.side * 5;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: `M${sourceX},${sourceY}L${elbowX},${elbowY}L${labelX},${labelY}`,
                stroke: "#2f4357",
                strokeWidth: 1.05,
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 809,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: textX,
                y: labelY - 5,
                textAnchor: textAnchor,
                fontSize: "9.5",
                fill: "#5f778e",
                fontWeight: "600",
                children: safeName
            }, void 0, false, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 810,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: textX,
                y: labelY + 9,
                textAnchor: textAnchor,
                fontSize: "10.5",
                fill: "#2f4357",
                fontWeight: "500",
                children: value ?? fallbackPercent
            }, void 0, false, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 813,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 808,
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
                    top: 12,
                    right: 58,
                    bottom: 12,
                    left: 58
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                        data: data,
                        dataKey: "pct",
                        nameKey: "label",
                        cx: "50%",
                        cy: "53%",
                        innerRadius: "39%",
                        outerRadius: "52%",
                        paddingAngle: 1.5,
                        minAngle: 2,
                        stroke: "#ffffff",
                        strokeWidth: 3,
                        labelLine: false,
                        isAnimationActive: false,
                        label: (props)=>{
                            const labelProps = props;
                            const index = Number(labelProps.index ?? 0);
                            return renderDonutCallout({
                                ...labelProps,
                                index,
                                total: data.length,
                                name: data[index]?.label ?? labelProps.name,
                                value: data[index]?.value
                            });
                        },
                        children: data.map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                fill: entry.color
                            }, entry.label, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 871,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 835,
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
                        lineNumber: 874,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 834,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 833,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 832,
        columnNumber: 5
    }, this);
}
_c13 = ExportLabeledDonutChart;
function ExportBubbleChart({ data, height = 260, showValueLabels = true }) {
    if (!data.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "exportChartEmpty",
            children: "No chart data available."
        }, void 0, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 893,
            columnNumber: 12
        }, this);
    }
    const maxY = Math.max(...data.map((item)=>item.y), 1);
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
                    top: 18,
                    right: 18,
                    bottom: 22,
                    left: 18
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                        stroke: "#d5e6f8",
                        strokeDasharray: "0"
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 902,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                        type: "number",
                        dataKey: "x",
                        domain: [
                            0,
                            100
                        ],
                        tick: {
                            fill: "#64748B",
                            fontSize: 10
                        },
                        axisLine: {
                            stroke: "#7aa1c4"
                        },
                        tickLine: false,
                        tickFormatter: (value)=>`${value}%`,
                        name: "Seen Rate"
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 903,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                        type: "number",
                        dataKey: "y",
                        domain: [
                            0,
                            Math.ceil(maxY * 1.2)
                        ],
                        tick: {
                            fill: "#64748B",
                            fontSize: 10
                        },
                        axisLine: {
                            stroke: "#7aa1c4"
                        },
                        tickLine: false,
                        tickFormatter: (value)=>`${value}M`,
                        name: "Revenue"
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 913,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ZAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZAxis"], {
                        type: "number",
                        dataKey: "size",
                        range: [
                            900,
                            6500
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 923,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                        content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BubbleTooltip, {}, void 0, false, {
                            fileName: "[project]/components/export-visuals.tsx",
                            lineNumber: 924,
                            columnNumber: 29
                        }, this),
                        cursor: false
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 924,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Scatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scatter"], {
                        data: data,
                        shape: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BubbleShape, {
                            showValueLabel: showValueLabels
                        }, void 0, false, {
                            fileName: "[project]/components/export-visuals.tsx",
                            lineNumber: 925,
                            columnNumber: 39
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 925,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 901,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 900,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 899,
        columnNumber: 5
    }, this);
}
_c14 = ExportBubbleChart;
function ExportFunnelChart({ data, height = 250, leftHeader, rightHeader }) {
    if (!data.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "exportChartEmpty",
            children: "No chart data available."
        }, void 0, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 944,
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
                                    lineNumber: 959,
                                    columnNumber: 31
                                }, this),
                                cursor: false
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 959,
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
                                            lineNumber: 961,
                                            columnNumber: 35
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/export-visuals.tsx",
                                        lineNumber: 961,
                                        columnNumber: 15
                                    }, this),
                                    prepared.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                            fill: item.fill,
                                            stroke: item.fill
                                        }, item.label, false, {
                                            fileName: "[project]/components/export-visuals.tsx",
                                            lineNumber: 963,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 960,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 958,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 957,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 956,
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
                                lineNumber: 973,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: rightHeader ?? ""
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 974,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 972,
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
                                            lineNumber: 981,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "exportFunnelMetaNotes",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: item.leftNote
                                                }, void 0, false, {
                                                    fileName: "[project]/components/export-visuals.tsx",
                                                    lineNumber: 985,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: item.rightNote
                                                }, void 0, false, {
                                                    fileName: "[project]/components/export-visuals.tsx",
                                                    lineNumber: 986,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/export-visuals.tsx",
                                            lineNumber: 984,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/export-visuals.tsx",
                                    lineNumber: 980,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "exportFunnelRevenue",
                                    children: item.revenue
                                }, void 0, false, {
                                    fileName: "[project]/components/export-visuals.tsx",
                                    lineNumber: 989,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, item.label, true, {
                            fileName: "[project]/components/export-visuals.tsx",
                            lineNumber: 979,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 970,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 955,
        columnNumber: 5
    }, this);
}
_c15 = ExportFunnelChart;
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
                    lineNumber: 1054,
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
                    lineNumber: 1055,
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
                    lineNumber: 1058,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 1053,
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
            lineNumber: 1075,
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
                    lineNumber: 1086,
                    columnNumber: 17
                }, this),
                node: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SankeyNode, {}, void 0, false, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 1087,
                    columnNumber: 17
                }, this),
                iterations: 64,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                    content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SankeyTooltip, {}, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 1090,
                        columnNumber: 29
                    }, this),
                    cursor: false
                }, void 0, false, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 1090,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 1081,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 1080,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 1079,
        columnNumber: 5
    }, this);
}
_c16 = ExportSankeyChart;
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
                        lineNumber: 1106,
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
                        lineNumber: 1115,
                        columnNumber: 11
                    }, this)
                ]
            }, segment.label, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 1105,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 1103,
        columnNumber: 5
    }, this);
}
_c17 = ExportBubbleSegments;
function ExportHeatmap({ values, columns, rows }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "campaignHeatmap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "campaignHeatHeaderSpacer"
            }, void 0, false, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 1142,
                columnNumber: 7
            }, this),
            columns.map((column)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "campaignHeatHeader",
                    children: column
                }, column, false, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 1144,
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
                            lineNumber: 1150,
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
                                lineNumber: 1152,
                                columnNumber: 13
                            }, this))
                    ]
                }, row, true, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 1149,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 1141,
        columnNumber: 5
    }, this);
}
_c18 = ExportHeatmap;
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
                                lineNumber: 1184,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 1184,
                                columnNumber: 82
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "#64748B"
                                },
                                children: "Entities active"
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 1184,
                                columnNumber: 88
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 1184,
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
                                lineNumber: 1185,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 1185,
                                columnNumber: 82
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "#64748B"
                                },
                                children: "Total enrolled"
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 1185,
                                columnNumber: 88
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 1185,
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
                                lineNumber: 1186,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 1186,
                                columnNumber: 81
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "#64748B"
                                },
                                children: "Total Revenue"
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 1186,
                                columnNumber: 87
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 1186,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 1183,
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
                                lineNumber: 1191,
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
                                lineNumber: 1192,
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
                                lineNumber: 1193,
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
                                lineNumber: 1201,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                cursor: {
                                    fill: "rgba(191, 219, 254, 0.18)"
                                },
                                formatter: (value, name)=>{
                                    const seriesName = String(name).toLowerCase();
                                    return [
                                        `${value}K`,
                                        seriesName === "bar" || seriesName === "total enrolled" ? "Total Enrolled" : "Revenue"
                                    ];
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 1210,
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
                                name: "Total Enrolled"
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 1218,
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
                                lineNumber: 1219,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 1190,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 1189,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 1188,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c19 = ExportEntitiesSummary;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19;
__turbopack_context__.k.register(_c, "BubbleTooltip");
__turbopack_context__.k.register(_c1, "BubbleShape");
__turbopack_context__.k.register(_c2, "FunnelTooltip");
__turbopack_context__.k.register(_c3, "FunnelCenterLabel");
__turbopack_context__.k.register(_c4, "SankeyTooltip");
__turbopack_context__.k.register(_c5, "ExportLineChart");
__turbopack_context__.k.register(_c6, "ExportMultiLineChart");
__turbopack_context__.k.register(_c7, "ExportDualAxisLineChart");
__turbopack_context__.k.register(_c8, "ExportBarValueChart");
__turbopack_context__.k.register(_c9, "ExportGroupedBarChart");
__turbopack_context__.k.register(_c10, "ExportHorizontalBarChart");
__turbopack_context__.k.register(_c11, "ExportStackedBarChart");
__turbopack_context__.k.register(_c12, "ExportDonutChart");
__turbopack_context__.k.register(_c13, "ExportLabeledDonutChart");
__turbopack_context__.k.register(_c14, "ExportBubbleChart");
__turbopack_context__.k.register(_c15, "ExportFunnelChart");
__turbopack_context__.k.register(_c16, "ExportSankeyChart");
__turbopack_context__.k.register(_c17, "ExportBubbleSegments");
__turbopack_context__.k.register(_c18, "ExportHeatmap");
__turbopack_context__.k.register(_c19, "ExportEntitiesSummary");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/campaign-details/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CampaignDetailsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/date-filter-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2d$shell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard-shell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$export$2d$visuals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/export-visuals.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
const weeks = [
    "Wk 1",
    "Wk 2",
    "Wk 3",
    "Wk 4",
    "Wk 5",
    "Wk 6",
    "Wk 7",
    "Wk 8"
];
const days = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri"
];
const times = [
    "09.00",
    "10.00",
    "11.00",
    "12.00",
    "13.00",
    "14.00",
    "15.00",
    "16.00",
    "17.00",
    "18.00"
];
const XHTML_NS = "http://www.w3.org/1999/xhtml";
const campaignData = {
    all: {
        campaignName: "Diabetes Prevention Program",
        metrics: [
            {
                title: "Total Eligible Patients",
                value: "5,480",
                icon: "/overview-candidate.png"
            },
            {
                title: "Patients Contacted",
                value: "2,104",
                icon: "/overview-announcement.png"
            },
            {
                title: "Engagement Rate",
                value: "55%",
                icon: "/overview-conditions.png"
            },
            {
                title: "Conversion",
                value: "1,872",
                note: "(42.5%)",
                icon: "/overview-candidate.png"
            },
            {
                title: "Seen Rate",
                value: "58.3%",
                icon: "/overview-seen-rate.png"
            },
            {
                title: "Campaign Status",
                value: "Active",
                icon: "/overview-announcement.png",
                tone: "success"
            }
        ],
        patientsAttended: [
            800,
            1600,
            1240,
            1900,
            2380,
            2360,
            2980,
            4060,
            4820,
            4550,
            4480,
            4510
        ],
        revenueTarget: 500,
        revenueCurrent: 442,
        revenueBars: [
            52,
            71,
            56,
            82,
            62,
            23,
            58,
            38
        ],
        channelBreakdown: [
            {
                label: "SMS",
                value: 38,
                amount: "721K (38%)",
                color: "#8668e0"
            },
            {
                label: "Call",
                value: 32,
                amount: "608K (32%)",
                color: "#3b8df1"
            },
            {
                label: "App",
                value: 18,
                amount: "342K (18%)",
                color: "#47cfc3"
            },
            {
                label: "Walk-in",
                value: 12,
                amount: "228K (12%)",
                color: "#fb4c8e"
            }
        ],
        dropoff: [
            {
                label: "Identified",
                count: "18,432",
                leftNote: "100.0% of total",
                rightNote: "22.5%",
                revenue: "405.5M",
                width: 100
            },
            {
                label: "Contacted",
                count: "14,280",
                leftNote: "77.5%",
                rightNote: "18.5%",
                revenue: "314.2M",
                width: 77.5
            },
            {
                label: "Appointment Booked",
                count: "10,120",
                leftNote: "54.9%",
                rightNote: "12.5%",
                revenue: "222.6M",
                width: 54.9
            },
            {
                label: "Attended",
                count: "8,850",
                leftNote: "48.0%",
                rightNote: "",
                revenue: "194.7M",
                width: 48
            }
        ],
        entitySummary: {
            entities: "5",
            enrolled: "3,872",
            revenue: "Ð 528K"
        },
        entitySeries: [
            {
                name: "Entity 1",
                bar: 52,
                line: 108
            },
            {
                name: "Entity 2",
                bar: 71,
                line: 92
            },
            {
                name: "Entity 3",
                bar: 56,
                line: 91
            },
            {
                name: "Entity 4",
                bar: 82,
                line: 142
            },
            {
                name: "Entity 5",
                bar: 62,
                line: 94
            }
        ],
        conversionSegments: [
            {
                label: "Chronic care",
                value: 54,
                color: "#8f24ff",
                x: 69,
                y: 78,
                size: 180
            },
            {
                label: "Preventive",
                value: 41,
                color: "#156cff",
                x: 31,
                y: 60,
                size: 158
            },
            {
                label: "Wellness",
                value: 29,
                color: "#11a761",
                x: 56,
                y: 25,
                size: 118
            },
            {
                label: "At-risk",
                value: 22,
                color: "#ff1f3d",
                x: 35,
                y: 10,
                size: 78
            }
        ],
        heatmap: [
            [
                0.82,
                0.8,
                0.52,
                0.47,
                0.78
            ],
            [
                0.4,
                0.25,
                0.24,
                0.82,
                0.48
            ],
            [
                0.38,
                0.82,
                0.86,
                0.48,
                0.5
            ],
            [
                0.22,
                0.83,
                0.24,
                0.48,
                0.52
            ],
            [
                0.8,
                0.42,
                0.4,
                0.45,
                0.77
            ],
            [
                0.48,
                0.52,
                0.26,
                0.46,
                0.24
            ],
            [
                0.46,
                0.24,
                0.42,
                0.29,
                0.4
            ],
            [
                0.24,
                0.82,
                0.42,
                0.24,
                0.21
            ],
            [
                0.43,
                0.27,
                0.5,
                0.46,
                0.31
            ],
            [
                0.82,
                0.24,
                0.83,
                0.8,
                0.22
            ]
        ],
        costCurrent: "Ð 98M",
        costTarget: "Ð 100M",
        costSeries: [
            171,
            164,
            150,
            138,
            129,
            111,
            103,
            88
        ],
        targetLine: 88
    },
    "abu-dhabi": {
        campaignName: "Abu Dhabi Diabetes Prevention",
        metrics: [
            {
                title: "Total Eligible Patients",
                value: "3,920",
                icon: "/overview-candidate.png"
            },
            {
                title: "Patients Contacted",
                value: "1,584",
                icon: "/overview-announcement.png"
            },
            {
                title: "Engagement Rate",
                value: "58%",
                icon: "/overview-conditions.png"
            },
            {
                title: "Conversion",
                value: "1,144",
                note: "(44.6%)",
                icon: "/overview-candidate.png"
            },
            {
                title: "Seen Rate",
                value: "61.8%",
                icon: "/overview-seen-rate.png"
            },
            {
                title: "Campaign Status",
                value: "Active",
                icon: "/overview-announcement.png",
                tone: "success"
            }
        ],
        patientsAttended: [
            620,
            1290,
            1010,
            1510,
            1880,
            1920,
            2470,
            3380,
            3960,
            3790,
            3680,
            3710
        ],
        revenueTarget: 340,
        revenueCurrent: 298,
        revenueBars: [
            36,
            54,
            42,
            68,
            50,
            18,
            44,
            31
        ],
        channelBreakdown: [
            {
                label: "SMS",
                value: 41,
                amount: "482K (41%)",
                color: "#8668e0"
            },
            {
                label: "Call",
                value: 29,
                amount: "341K (29%)",
                color: "#3b8df1"
            },
            {
                label: "App",
                value: 19,
                amount: "224K (19%)",
                color: "#47cfc3"
            },
            {
                label: "Walk-in",
                value: 11,
                amount: "129K (11%)",
                color: "#fb4c8e"
            }
        ],
        dropoff: [
            {
                label: "Identified",
                count: "11,240",
                leftNote: "100.0% of total",
                rightNote: "24.1%",
                revenue: "228.2M",
                width: 100
            },
            {
                label: "Contacted",
                count: "8,640",
                leftNote: "76.8%",
                rightNote: "19.3%",
                revenue: "171.8M",
                width: 76.8
            },
            {
                label: "Appointment Booked",
                count: "6,232",
                leftNote: "55.4%",
                rightNote: "13.2%",
                revenue: "120.9M",
                width: 55.4
            },
            {
                label: "Attended",
                count: "5,212",
                leftNote: "46.4%",
                rightNote: "",
                revenue: "94.7M",
                width: 46.4
            }
        ],
        entitySummary: {
            entities: "5",
            enrolled: "2,516",
            revenue: "Ð 316K"
        },
        entitySeries: [
            {
                name: "Entity 1",
                bar: 48,
                line: 96
            },
            {
                name: "Entity 2",
                bar: 63,
                line: 87
            },
            {
                name: "Entity 3",
                bar: 46,
                line: 84
            },
            {
                name: "Entity 4",
                bar: 75,
                line: 132
            },
            {
                name: "Entity 5",
                bar: 59,
                line: 93
            }
        ],
        conversionSegments: [
            {
                label: "Chronic care",
                value: 57,
                color: "#8f24ff",
                x: 70,
                y: 78,
                size: 182
            },
            {
                label: "Preventive",
                value: 44,
                color: "#156cff",
                x: 31,
                y: 61,
                size: 160
            },
            {
                label: "Wellness",
                value: 27,
                color: "#11a761",
                x: 57,
                y: 25,
                size: 112
            },
            {
                label: "At-risk",
                value: 19,
                color: "#ff1f3d",
                x: 35,
                y: 10,
                size: 74
            }
        ],
        heatmap: [
            [
                0.9,
                0.86,
                0.6,
                0.53,
                0.82
            ],
            [
                0.45,
                0.3,
                0.28,
                0.86,
                0.56
            ],
            [
                0.42,
                0.86,
                0.89,
                0.53,
                0.56
            ],
            [
                0.26,
                0.87,
                0.29,
                0.52,
                0.58
            ],
            [
                0.85,
                0.46,
                0.44,
                0.51,
                0.79
            ],
            [
                0.52,
                0.58,
                0.31,
                0.5,
                0.28
            ],
            [
                0.49,
                0.29,
                0.5,
                0.33,
                0.44
            ],
            [
                0.28,
                0.86,
                0.46,
                0.29,
                0.24
            ],
            [
                0.48,
                0.31,
                0.56,
                0.49,
                0.38
            ],
            [
                0.87,
                0.28,
                0.85,
                0.84,
                0.25
            ]
        ],
        costCurrent: "Ð 68M",
        costTarget: "Ð 74M",
        costSeries: [
            138,
            131,
            123,
            117,
            109,
            100,
            93,
            74
        ],
        targetLine: 74
    },
    "al-ain": {
        campaignName: "Entity 7 Community Coaching",
        metrics: [
            {
                title: "Total Eligible Patients",
                value: "1,140",
                icon: "/overview-candidate.png"
            },
            {
                title: "Patients Contacted",
                value: "412",
                icon: "/overview-announcement.png"
            },
            {
                title: "Engagement Rate",
                value: "47%",
                icon: "/overview-conditions.png"
            },
            {
                title: "Conversion",
                value: "318",
                note: "(38.1%)",
                icon: "/overview-candidate.png"
            },
            {
                title: "Seen Rate",
                value: "49.2%",
                icon: "/overview-seen-rate.png"
            },
            {
                title: "Campaign Status",
                value: "Active",
                icon: "/overview-announcement.png",
                tone: "success"
            }
        ],
        patientsAttended: [
            210,
            460,
            390,
            580,
            720,
            750,
            910,
            1120,
            1320,
            1260,
            1180,
            1200
        ],
        revenueTarget: 110,
        revenueCurrent: 96,
        revenueBars: [
            12,
            21,
            18,
            24,
            19,
            8,
            14,
            11
        ],
        channelBreakdown: [
            {
                label: "SMS",
                value: 36,
                amount: "121K (36%)",
                color: "#8668e0"
            },
            {
                label: "Call",
                value: 33,
                amount: "111K (33%)",
                color: "#3b8df1"
            },
            {
                label: "App",
                value: 20,
                amount: "68K (20%)",
                color: "#47cfc3"
            },
            {
                label: "Walk-in",
                value: 11,
                amount: "37K (11%)",
                color: "#fb4c8e"
            }
        ],
        dropoff: [
            {
                label: "Identified",
                count: "4,230",
                leftNote: "100.0% of total",
                rightNote: "18.3%",
                revenue: "92.4M",
                width: 100
            },
            {
                label: "Contacted",
                count: "3,044",
                leftNote: "72.0%",
                rightNote: "14.9%",
                revenue: "66.8M",
                width: 72
            },
            {
                label: "Appointment Booked",
                count: "1,883",
                leftNote: "44.5%",
                rightNote: "9.4%",
                revenue: "37.5M",
                width: 44.5
            },
            {
                label: "Attended",
                count: "1,222",
                leftNote: "28.9%",
                rightNote: "",
                revenue: "21.7M",
                width: 28.9
            }
        ],
        entitySummary: {
            entities: "4",
            enrolled: "812",
            revenue: "Ð 121K"
        },
        entitySeries: [
            {
                name: "Entity 6",
                bar: 27,
                line: 43
            },
            {
                name: "Entity 7",
                bar: 39,
                line: 58
            },
            {
                name: "Entity 8",
                bar: 24,
                line: 38
            },
            {
                name: "Entity 9",
                bar: 18,
                line: 25
            }
        ],
        conversionSegments: [
            {
                label: "Chronic care",
                value: 42,
                color: "#8f24ff",
                x: 69,
                y: 78,
                size: 154
            },
            {
                label: "Preventive",
                value: 34,
                color: "#156cff",
                x: 31,
                y: 60,
                size: 132
            },
            {
                label: "Wellness",
                value: 25,
                color: "#11a761",
                x: 56,
                y: 25,
                size: 104
            },
            {
                label: "At-risk",
                value: 18,
                color: "#ff1f3d",
                x: 35,
                y: 10,
                size: 70
            }
        ],
        heatmap: [
            [
                0.52,
                0.48,
                0.31,
                0.28,
                0.5
            ],
            [
                0.26,
                0.18,
                0.16,
                0.53,
                0.33
            ],
            [
                0.23,
                0.54,
                0.56,
                0.31,
                0.36
            ],
            [
                0.17,
                0.55,
                0.2,
                0.3,
                0.35
            ],
            [
                0.53,
                0.27,
                0.25,
                0.28,
                0.49
            ],
            [
                0.29,
                0.34,
                0.18,
                0.28,
                0.16
            ],
            [
                0.28,
                0.17,
                0.32,
                0.22,
                0.25
            ],
            [
                0.15,
                0.51,
                0.26,
                0.17,
                0.14
            ],
            [
                0.27,
                0.18,
                0.34,
                0.26,
                0.22
            ],
            [
                0.54,
                0.16,
                0.52,
                0.51,
                0.15
            ]
        ],
        costCurrent: "Ð 19M",
        costTarget: "Ð 21M",
        costSeries: [
            44,
            41,
            38,
            35,
            32,
            29,
            25,
            21
        ],
        targetLine: 21
    },
    "al-dhafra": {
        campaignName: "Dhafra Preventive Outreach",
        metrics: [
            {
                title: "Total Eligible Patients",
                value: "420",
                icon: "/overview-candidate.png"
            },
            {
                title: "Patients Contacted",
                value: "108",
                icon: "/overview-announcement.png"
            },
            {
                title: "Engagement Rate",
                value: "39%",
                icon: "/overview-conditions.png"
            },
            {
                title: "Conversion",
                value: "92",
                note: "(30.2%)",
                icon: "/overview-candidate.png"
            },
            {
                title: "Seen Rate",
                value: "42.8%",
                icon: "/overview-seen-rate.png"
            },
            {
                title: "Campaign Status",
                value: "Active",
                icon: "/overview-announcement.png",
                tone: "success"
            }
        ],
        patientsAttended: [
            92,
            210,
            184,
            246,
            318,
            304,
            360,
            420,
            498,
            472,
            450,
            460
        ],
        revenueTarget: 44,
        revenueCurrent: 39,
        revenueBars: [
            5,
            9,
            7,
            11,
            8,
            4,
            7,
            5
        ],
        channelBreakdown: [
            {
                label: "SMS",
                value: 43,
                amount: "39K (43%)",
                color: "#8668e0"
            },
            {
                label: "Call",
                value: 27,
                amount: "24K (27%)",
                color: "#3b8df1"
            },
            {
                label: "App",
                value: 17,
                amount: "15K (17%)",
                color: "#47cfc3"
            },
            {
                label: "Walk-in",
                value: 13,
                amount: "12K (13%)",
                color: "#fb4c8e"
            }
        ],
        dropoff: [
            {
                label: "Identified",
                count: "2,962",
                leftNote: "100.0% of total",
                rightNote: "16.4%",
                revenue: "48.7M",
                width: 100
            },
            {
                label: "Contacted",
                count: "2,150",
                leftNote: "72.6%",
                rightNote: "13.0%",
                revenue: "34.2M",
                width: 72.6
            },
            {
                label: "Appointment Booked",
                count: "1,120",
                leftNote: "37.8%",
                rightNote: "8.8%",
                revenue: "18.8M",
                width: 37.8
            },
            {
                label: "Attended",
                count: "786",
                leftNote: "26.5%",
                rightNote: "",
                revenue: "11.4M",
                width: 26.5
            }
        ],
        entitySummary: {
            entities: "3",
            enrolled: "284",
            revenue: "Ð 42K"
        },
        entitySeries: [
            {
                name: "Madinat Zayed",
                bar: 12,
                line: 18
            },
            {
                name: "Ghayathi",
                bar: 16,
                line: 24
            },
            {
                name: "Liwa",
                bar: 11,
                line: 15
            }
        ],
        conversionSegments: [
            {
                label: "Chronic care",
                value: 33,
                color: "#8f24ff",
                x: 68,
                y: 76,
                size: 126
            },
            {
                label: "Preventive",
                value: 27,
                color: "#156cff",
                x: 30,
                y: 60,
                size: 108
            },
            {
                label: "Wellness",
                value: 18,
                color: "#11a761",
                x: 56,
                y: 25,
                size: 90
            },
            {
                label: "At-risk",
                value: 14,
                color: "#ff1f3d",
                x: 35,
                y: 10,
                size: 62
            }
        ],
        heatmap: [
            [
                0.28,
                0.26,
                0.18,
                0.17,
                0.27
            ],
            [
                0.15,
                0.12,
                0.11,
                0.29,
                0.2
            ],
            [
                0.13,
                0.31,
                0.34,
                0.18,
                0.19
            ],
            [
                0.1,
                0.34,
                0.13,
                0.18,
                0.2
            ],
            [
                0.31,
                0.16,
                0.15,
                0.18,
                0.29
            ],
            [
                0.17,
                0.19,
                0.12,
                0.17,
                0.1
            ],
            [
                0.16,
                0.11,
                0.19,
                0.13,
                0.15
            ],
            [
                0.11,
                0.29,
                0.15,
                0.1,
                0.08
            ],
            [
                0.16,
                0.12,
                0.21,
                0.16,
                0.13
            ],
            [
                0.31,
                0.11,
                0.28,
                0.29,
                0.09
            ]
        ],
        costCurrent: "Ð 8M",
        costTarget: "Ð 9M",
        costSeries: [
            19,
            18,
            17,
            15,
            14,
            12,
            10,
            9
        ],
        targetLine: 9
    }
};
function inlineComputedStyles(source, target) {
    const sourceNodes = [
        source,
        ...Array.from(source.querySelectorAll("*"))
    ];
    const targetNodes = [
        target,
        ...Array.from(target.querySelectorAll("*"))
    ];
    sourceNodes.forEach((sourceNode, index)=>{
        const targetNode = targetNodes[index];
        if (!targetNode) {
            return;
        }
        const computed = window.getComputedStyle(sourceNode);
        const styleText = Array.from(computed).map((property)=>`${property}:${computed.getPropertyValue(property)};`).join("");
        targetNode.setAttribute("style", styleText);
        if (sourceNode instanceof HTMLImageElement && targetNode instanceof HTMLImageElement) {
            targetNode.src = sourceNode.currentSrc || sourceNode.src;
            targetNode.srcset = "";
            targetNode.loading = "eager";
        }
    });
}
async function convertImageToDataUrl(src) {
    const response = await fetch(src);
    const blob = await response.blob();
    return await new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.onloadend = ()=>resolve(String(reader.result));
        reader.onerror = ()=>reject(new Error(`Failed to embed image: ${src}`));
        reader.readAsDataURL(blob);
    });
}
async function inlineImagesAsDataUrls(source, target) {
    const sourceImages = Array.from(source.querySelectorAll("img"));
    const targetImages = Array.from(target.querySelectorAll("img"));
    await Promise.all(sourceImages.map(async (sourceImage, index)=>{
        const targetImage = targetImages[index];
        if (!targetImage) {
            return;
        }
        const src = sourceImage.currentSrc || sourceImage.src;
        if (!src) {
            return;
        }
        const dataUrl = await convertImageToDataUrl(src);
        targetImage.src = dataUrl;
        targetImage.srcset = "";
        targetImage.setAttribute("src", dataUrl);
    }));
}
async function captureElementSnapshot(element) {
    const rect = element.getBoundingClientRect();
    const width = Math.ceil(rect.width);
    const height = Math.ceil(rect.height);
    const clone = element.cloneNode(true);
    clone.setAttribute("xmlns", XHTML_NS);
    clone.style.margin = "0";
    clone.style.width = `${width}px`;
    clone.style.height = `${height}px`;
    clone.style.maxWidth = "none";
    clone.style.maxHeight = "none";
    clone.style.transform = "none";
    inlineComputedStyles(element, clone);
    await inlineImagesAsDataUrls(element, clone);
    const serialized = new XMLSerializer().serializeToString(clone);
    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <foreignObject x="0" y="0" width="100%" height="100%">${serialized}</foreignObject>
    </svg>
  `;
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}
function buildPdfPrintViewHtml(imageUrl, title) {
    const exportedAt = new Intl.DateTimeFormat("en-AE", {
        dateStyle: "medium",
        timeStyle: "short"
    }).format(new Date());
    return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>${title} PDF Export</title>
        <style>
          @page { size: A4 landscape; margin: 14mm; }
          * { box-sizing: border-box; }
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            color: #1f3347;
            background: #ffffff;
          }
          .page {
            width: 100%;
          }
          .header {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 24px;
            margin-bottom: 14px;
            padding-bottom: 10px;
            border-bottom: 2px solid #d4e5f6;
          }
          .brand {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }
          .brand strong {
            font-size: 24px;
            letter-spacing: 0.02em;
            color: #235fe8;
          }
          .brand span {
            font-size: 12px;
            font-weight: 700;
            color: #5a7087;
          }
          .meta {
            text-align: right;
          }
          .meta h1 {
            margin: 0 0 4px;
            font-size: 24px;
            font-weight: 700;
            color: #2e455d;
          }
          .meta p {
            margin: 0;
            font-size: 12px;
            color: #6d8499;
          }
          .capture {
            width: 100%;
            display: block;
            border: 1px solid #dbe8f6;
            border-radius: 12px;
          }
          @media print {
            body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          }
        </style>
      </head>
      <body>
        <div class="page">
          <div class="header">
            <div class="brand">
              <strong>HVM</strong>
              <span>HEALTH VALUE MANAGEMENT</span>
            </div>
            <div class="meta">
              <h1>${title}</h1>
              <p>Exported ${exportedAt}</p>
            </div>
          </div>
          <img class="capture" src="${imageUrl}" alt="${title}" />
        </div>
        <script>
          window.addEventListener('load', () => {
            setTimeout(() => window.print(), 250);
          });
        </script>
      </body>
    </html>
  `;
}
async function printPdfInHiddenFrame(html) {
    await new Promise((resolve, reject)=>{
        const frame = document.createElement("iframe");
        frame.setAttribute("aria-hidden", "true");
        frame.style.position = "fixed";
        frame.style.right = "0";
        frame.style.bottom = "0";
        frame.style.width = "0";
        frame.style.height = "0";
        frame.style.border = "0";
        frame.style.opacity = "0";
        frame.style.pointerEvents = "none";
        document.body.appendChild(frame);
        const cleanup = ()=>{
            frame.onload = null;
            frame.onerror = null;
            if (frame.parentNode) {
                frame.parentNode.removeChild(frame);
            }
        };
        frame.onload = ()=>{
            try {
                const printWindow = frame.contentWindow;
                if (!printWindow) {
                    cleanup();
                    reject(new Error("Unable to open print frame."));
                    return;
                }
                printWindow.focus();
                printWindow.print();
                setTimeout(()=>{
                    cleanup();
                    resolve();
                }, 1000);
            } catch (error) {
                cleanup();
                reject(error instanceof Error ? error : new Error("Unable to print PDF."));
            }
        };
        frame.onerror = ()=>{
            cleanup();
            reject(new Error("Unable to load export frame."));
        };
        const frameDoc = frame.contentDocument;
        if (!frameDoc) {
            cleanup();
            reject(new Error("Unable to initialize export frame."));
            return;
        }
        frameDoc.open();
        frameDoc.write(html);
        frameDoc.close();
    });
}
function CampaignDetailsPage() {
    _s();
    const [appliedFilters, setAppliedFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        startDate: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_DATE_RANGE"].startDate,
        endDate: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_DATE_RANGE"].endDate,
        region: "all",
        campaignType: "All",
        condition: "All"
    });
    const [draftFilters, setDraftFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(appliedFilters);
    const [campaignInfoOpen, setCampaignInfoOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isExporting, setIsExporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const exportRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { startDate, endDate, region, campaignType, condition } = appliedFilters;
    const data = campaignData[region];
    const monthRatio = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonthRatio"])({
        startDate,
        endDate
    });
    const visibleMonths = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sliceMonths"])(months, {
        startDate,
        endDate
    });
    const visibleWeeks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sliceWeeks"])(weeks, {
        startDate,
        endDate
    });
    const visiblePatientsAttended = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sliceMonths"])(data.patientsAttended, {
        startDate,
        endDate
    });
    const visibleRevenueBars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sliceWeeks"])(data.revenueBars, {
        startDate,
        endDate
    });
    const visibleCostSeries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sliceWeeks"])(data.costSeries, {
        startDate,
        endDate
    });
    const visibleMetrics = data.metrics.map((metric)=>({
            ...metric,
            value: metric.tone === "success" ? metric.value : (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scaleDisplayValue"])(metric.value, monthRatio)
        }));
    const visibleChannels = data.channelBreakdown.map((channel)=>({
            ...channel,
            amount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scaleDisplayValue"])(channel.amount, monthRatio)
        }));
    const visibleDropoff = data.dropoff.map((item)=>({
            ...item,
            count: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scaleDisplayValue"])(item.count, monthRatio),
            revenue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scaleDisplayValue"])(item.revenue, monthRatio)
        }));
    const visibleEntitySummary = {
        entities: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scaleDisplayValue"])(data.entitySummary.entities, monthRatio),
        enrolled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scaleDisplayValue"])(data.entitySummary.enrolled, monthRatio),
        revenue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scaleDisplayValue"])(data.entitySummary.revenue, monthRatio)
    };
    const visibleEntitySeries = data.entitySeries.map((item)=>({
            ...item,
            bar: Number((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scaleDisplayValue"])(String(item.bar), monthRatio).replace(/,/g, "")),
            line: Number((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scaleDisplayValue"])(String(item.line), monthRatio).replace(/,/g, ""))
        }));
    const visibleRevenueCurrent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scaleDisplayValue"])(`Ð ${data.revenueCurrent}K`, monthRatio);
    const visibleRevenueTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scaleDisplayValue"])(`Ð ${data.revenueTarget}K`, monthRatio);
    const visibleCostCurrent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scaleDisplayValue"])(data.costCurrent, monthRatio);
    const visibleCostTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scaleDisplayValue"])(data.costTarget, monthRatio);
    const channels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CampaignDetailsPage.useMemo[channels]": ()=>visibleChannels.filter({
                "CampaignDetailsPage.useMemo[channels]": (channel)=>campaignType === "All" || channel.label === campaignType
            }["CampaignDetailsPage.useMemo[channels]"])
    }["CampaignDetailsPage.useMemo[channels]"], [
        campaignType,
        visibleChannels
    ]);
    const conversionSegments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CampaignDetailsPage.useMemo[conversionSegments]": ()=>data.conversionSegments.filter({
                "CampaignDetailsPage.useMemo[conversionSegments]": (segment)=>condition === "All" ? true : condition === "Diabetes" ? [
                        "Chronic care",
                        "Preventive"
                    ].includes(segment.label) : condition === "Hypertension" ? [
                        "Preventive",
                        "At-risk"
                    ].includes(segment.label) : [
                        "Wellness",
                        "At-risk"
                    ].includes(segment.label)
            }["CampaignDetailsPage.useMemo[conversionSegments]"])
    }["CampaignDetailsPage.useMemo[conversionSegments]"], [
        condition,
        data.conversionSegments
    ]);
    const handleExportPdf = async ()=>{
        if (!exportRef.current || isExporting) {
            return;
        }
        setIsExporting(true);
        try {
            const imageUrl = await captureElementSnapshot(exportRef.current);
            const html = buildPdfPrintViewHtml(imageUrl, data.campaignName);
            await printPdfInHiddenFrame(html);
        } catch (error) {
            console.error(error);
            window.alert(error instanceof Error ? error.message : "Unable to export the PDF right now.");
        } finally{
            setIsExporting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2d$shell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardShell"], {
        pageClassName: "overviewPage campaignDetailsPage",
        title: "Campaign Details",
        breadcrumbCurrent: "Campaign Details",
        breadcrumbTrail: [
            {
                label: "Overview",
                href: "/overview"
            },
            {
                label: "Life Stage",
                href: "/lifestage-overview/acquire"
            },
            {
                label: "Sub Condition Details",
                href: "/campaign-sub-condition"
            },
            {
                label: "Campaign Details"
            }
        ],
        entityTabs: entityTabs,
        activeEntityTab: "Entity 1",
        activeNav: "campaignDetails",
        headerTabsClassName: "overviewTabs",
        bodyClassName: "campaignDetailsBody",
        eventCalendarActive: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: exportRef,
                className: "campaignDetailsExportFrame",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "campaignDetailsFilterRow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "filterGroup campaignNameFilter",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Campaign Name"
                                    }, void 0, false, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 647,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "filterSelectWrap",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "filterInput filterSelect campaignNameSelect",
                                            value: data.campaignName,
                                            onChange: ()=>undefined,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: data.campaignName
                                            }, void 0, false, {
                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                lineNumber: 650,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/campaign-details/page.tsx",
                                            lineNumber: 649,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 648,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/campaign-details/page.tsx",
                                lineNumber: 646,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "subConditionDivider"
                            }, void 0, false, {
                                fileName: "[project]/app/campaign-details/page.tsx",
                                lineNumber: 654,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "filterGroup",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Date Range"
                                    }, void 0, false, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 656,
                                        columnNumber: 13
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
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 657,
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
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 663,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/campaign-details/page.tsx",
                                lineNumber: 655,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "filterGroup",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Regions"
                                    }, void 0, false, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 671,
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
                                                    fileName: "[project]/app/campaign-details/page.tsx",
                                                    lineNumber: 678,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "abu-dhabi",
                                                    children: "Abu Dhabi"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/campaign-details/page.tsx",
                                                    lineNumber: 679,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "al-ain",
                                                    children: "Al Ain"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/campaign-details/page.tsx",
                                                    lineNumber: 680,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "al-dhafra",
                                                    children: "Al Dhafra"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/campaign-details/page.tsx",
                                                    lineNumber: 681,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/campaign-details/page.tsx",
                                            lineNumber: 673,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 672,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/campaign-details/page.tsx",
                                lineNumber: 670,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "filterGroup",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Campaign Type"
                                    }, void 0, false, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 686,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "filterSelectWrap",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "filterInput filterSelect",
                                            value: draftFilters.campaignType,
                                            onChange: (event)=>setDraftFilters((current)=>({
                                                        ...current,
                                                        campaignType: event.target.value
                                                    })),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "All",
                                                    children: "All"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/campaign-details/page.tsx",
                                                    lineNumber: 693,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "SMS",
                                                    children: "SMS"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/campaign-details/page.tsx",
                                                    lineNumber: 694,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Call",
                                                    children: "Call"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/campaign-details/page.tsx",
                                                    lineNumber: 695,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "App",
                                                    children: "App"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/campaign-details/page.tsx",
                                                    lineNumber: 696,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Walk-in",
                                                    children: "Walk-in"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/campaign-details/page.tsx",
                                                    lineNumber: 697,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/campaign-details/page.tsx",
                                            lineNumber: 688,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 687,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/campaign-details/page.tsx",
                                lineNumber: 685,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "filterGroup",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Condition"
                                    }, void 0, false, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 702,
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
                                                    value: "All",
                                                    children: "All"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/campaign-details/page.tsx",
                                                    lineNumber: 709,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Diabetes",
                                                    children: "Diabetes"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/campaign-details/page.tsx",
                                                    lineNumber: 710,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Hypertension",
                                                    children: "Hypertension"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/campaign-details/page.tsx",
                                                    lineNumber: 711,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Obesity",
                                                    children: "Obesity"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/campaign-details/page.tsx",
                                                    lineNumber: 712,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/campaign-details/page.tsx",
                                            lineNumber: 704,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 703,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/campaign-details/page.tsx",
                                lineNumber: 701,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "applyButton",
                                onClick: ()=>setAppliedFilters(draftFilters),
                                children: "APPLY"
                            }, void 0, false, {
                                fileName: "[project]/app/campaign-details/page.tsx",
                                lineNumber: 716,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/campaign-details/page.tsx",
                        lineNumber: 645,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "campaignDetailsMetricGrid",
                        children: visibleMetrics.map((metric)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "metricCard campaignDetailsMetricCard",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: metric.icon,
                                        alt: "",
                                        className: "metricIcon"
                                    }, void 0, false, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 722,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "metricContent",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: metric.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                lineNumber: 724,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "metricValueRow campaignDetailsMetricValue",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: metric.tone === "success" ? "successValue" : undefined,
                                                        children: metric.value
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/campaign-details/page.tsx",
                                                        lineNumber: 726,
                                                        columnNumber: 17
                                                    }, this),
                                                    metric.note ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "campaignDetailsMetricNote",
                                                        children: metric.note
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/campaign-details/page.tsx",
                                                        lineNumber: 727,
                                                        columnNumber: 32
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                lineNumber: 725,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 723,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, metric.title, true, {
                                fileName: "[project]/app/campaign-details/page.tsx",
                                lineNumber: 721,
                                columnNumber: 11
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/campaign-details/page.tsx",
                        lineNumber: 719,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "campaignDetailsTopGrid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "glassCard campaignPatientsPanel",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Patients Attended"
                                    }, void 0, false, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 736,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "campaignDetailsLineChart",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$export$2d$visuals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExportLineChart"], {
                                                values: visiblePatientsAttended,
                                                max: 5000,
                                                labels: visibleMonths,
                                                color: "#2563EB",
                                                area: true
                                            }, void 0, false, {
                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                lineNumber: 738,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "campaignYearLabel",
                                                children: "2025"
                                            }, void 0, false, {
                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                lineNumber: 739,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "campaignAxisLabel",
                                                children: "Patients"
                                            }, void 0, false, {
                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                lineNumber: 740,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 737,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/campaign-details/page.tsx",
                                lineNumber: 735,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "glassCard campaignRevenuePanel",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Revenue Generated"
                                    }, void 0, false, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 745,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "campaignRevenueSummary",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: visibleRevenueCurrent
                                            }, void 0, false, {
                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                lineNumber: 747,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "of ",
                                                    visibleRevenueTarget,
                                                    " target"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                lineNumber: 748,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 746,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "campaignRevenueProgress",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                width: `${data.revenueCurrent / data.revenueTarget * 100}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/campaign-details/page.tsx",
                                            lineNumber: 751,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 750,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "campaignRevenueBars",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$export$2d$visuals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExportBarValueChart"], {
                                            values: visibleRevenueBars,
                                            labels: visibleWeeks,
                                            max: 100
                                        }, void 0, false, {
                                            fileName: "[project]/app/campaign-details/page.tsx",
                                            lineNumber: 754,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 753,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/campaign-details/page.tsx",
                                lineNumber: 744,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "glassCard campaignChannelPanel",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Channel Breakdown"
                                    }, void 0, false, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 759,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "donutLegend campaignDonutLegend",
                                        children: channels.map((channel)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "legend donut",
                                                style: {
                                                    color: channel.color
                                                },
                                                children: channel.label
                                            }, channel.label, false, {
                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                lineNumber: 762,
                                                columnNumber: 15
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 760,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$export$2d$visuals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExportLabeledDonutChart"], {
                                        data: channels.map((channel)=>({
                                                label: channel.label,
                                                pct: channel.value,
                                                color: channel.color,
                                                value: channel.amount
                                            })),
                                        height: 320
                                    }, void 0, false, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 767,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/campaign-details/page.tsx",
                                lineNumber: 758,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "glassCard campaignDropoffPanel",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Drop-off Rate"
                                    }, void 0, false, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 779,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$export$2d$visuals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExportFunnelChart"], {
                                        data: visibleDropoff,
                                        height: 285
                                    }, void 0, false, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 780,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/campaign-details/page.tsx",
                                lineNumber: 778,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/campaign-details/page.tsx",
                        lineNumber: 734,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "campaignDetailsBottomGrid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "glassCard campaignEntitiesPanel",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Entities in Campaign"
                                    }, void 0, false, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 786,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$export$2d$visuals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExportEntitiesSummary"], {
                                        summary: visibleEntitySummary,
                                        series: visibleEntitySeries,
                                        chartHeight: 190
                                    }, void 0, false, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 787,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/campaign-details/page.tsx",
                                lineNumber: 785,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "glassCard campaignConversionPanel",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Conversion by Segment"
                                    }, void 0, false, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 791,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "chartLegend",
                                        children: conversionSegments.map((segment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "legend donut",
                                                style: {
                                                    color: segment.color
                                                },
                                                children: segment.label
                                            }, segment.label, false, {
                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                lineNumber: 794,
                                                columnNumber: 15
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 792,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$export$2d$visuals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExportBubbleChart"], {
                                        data: conversionSegments,
                                        height: 300
                                    }, void 0, false, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 799,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/campaign-details/page.tsx",
                                lineNumber: 790,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "glassCard campaignHeatmapPanel",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Booked Appointment Heatmap"
                                    }, void 0, false, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 803,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "campaignHeatLegend",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Low"
                                            }, void 0, false, {
                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                lineNumber: 805,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    0.15,
                                                    0.3,
                                                    0.45,
                                                    0.6,
                                                    0.8
                                                ].map((value)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            background: `rgba(18, 182, 224, ${value})`
                                                        }
                                                    }, value, false, {
                                                        fileName: "[project]/app/campaign-details/page.tsx",
                                                        lineNumber: 808,
                                                        columnNumber: 17
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                lineNumber: 806,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "High"
                                            }, void 0, false, {
                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                lineNumber: 811,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 804,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$export$2d$visuals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExportHeatmap"], {
                                        values: data.heatmap,
                                        columns: days,
                                        rows: times
                                    }, void 0, false, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 813,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/campaign-details/page.tsx",
                                lineNumber: 802,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "glassCard campaignCostPanel",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Campaign Cost Efficiency"
                                    }, void 0, false, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 817,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "campaignCostLegend",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "legend acquire",
                                                children: "Cost/ Conv"
                                            }, void 0, false, {
                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                lineNumber: 819,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "legend target",
                                                children: "Target"
                                            }, void 0, false, {
                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                lineNumber: 820,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 818,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "campaignCostSummary",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "successValue",
                                                        children: visibleCostCurrent
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/campaign-details/page.tsx",
                                                        lineNumber: 824,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Current"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/campaign-details/page.tsx",
                                                        lineNumber: 825,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                lineNumber: 823,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "dangerValue",
                                                        children: visibleCostTarget
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/campaign-details/page.tsx",
                                                        lineNumber: 828,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Target"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/campaign-details/page.tsx",
                                                        lineNumber: 829,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                lineNumber: 827,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 822,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "campaignCostChart",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$export$2d$visuals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExportLineChart"], {
                                            values: visibleCostSeries,
                                            max: 180,
                                            labels: visibleWeeks,
                                            color: "#22C55E",
                                            area: true
                                        }, void 0, false, {
                                            fileName: "[project]/app/campaign-details/page.tsx",
                                            lineNumber: 833,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 832,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/campaign-details/page.tsx",
                                lineNumber: 816,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/campaign-details/page.tsx",
                        lineNumber: 784,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/campaign-details/page.tsx",
                lineNumber: 644,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "campaignInfoFab",
                onClick: ()=>setCampaignInfoOpen(true),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "campaignInfoFabIcon",
                        children: "i"
                    }, void 0, false, {
                        fileName: "[project]/app/campaign-details/page.tsx",
                        lineNumber: 840,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Campaign info"
                    }, void 0, false, {
                        fileName: "[project]/app/campaign-details/page.tsx",
                        lineNumber: 841,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/campaign-details/page.tsx",
                lineNumber: 839,
                columnNumber: 7
            }, this),
            campaignInfoOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "campaignInfoBackdrop",
                        "aria-label": "Close campaign info",
                        onClick: ()=>setCampaignInfoOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/app/campaign-details/page.tsx",
                        lineNumber: 846,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "campaignInfoDrawer",
                        "aria-label": "Campaign info",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "campaignInfoDrawerHeader",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "CAMPAIGN INFO"
                                    }, void 0, false, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 849,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "campaignInfoClose",
                                        "aria-label": "Close campaign info",
                                        onClick: ()=>setCampaignInfoOpen(false),
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 850,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/campaign-details/page.tsx",
                                lineNumber: 848,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "campaignInfoHero",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: data.campaignName
                                    }, void 0, false, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 856,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "ID: CMP-2025-DPP-001"
                                    }, void 0, false, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 857,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/campaign-details/page.tsx",
                                lineNumber: 855,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "campaignInfoSection",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "campaignInfoSectionTitle",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                children: "TIMELINE"
                                            }, void 0, false, {
                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                lineNumber: 862,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                lineNumber: 863,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 861,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "campaignInfoTimelineGrid",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                className: "campaignInfoMiniCard",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/overview-seen-rate.png",
                                                        alt: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/campaign-details/page.tsx",
                                                        lineNumber: 867,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Start Date"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                                lineNumber: 869,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "12 Jan 2025"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                                lineNumber: 870,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/campaign-details/page.tsx",
                                                        lineNumber: 868,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                lineNumber: 866,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                className: "campaignInfoMiniCard",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/overview-seen-rate.png",
                                                        alt: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/campaign-details/page.tsx",
                                                        lineNumber: 874,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "End Date"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                                lineNumber: 876,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "12 Mar 2025"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                                lineNumber: 877,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/campaign-details/page.tsx",
                                                        lineNumber: 875,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                lineNumber: 873,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 865,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "campaignInfoProgressRow",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Duration & Progress"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/campaign-details/page.tsx",
                                                        lineNumber: 884,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "90 days total · 76 days elapsed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/campaign-details/page.tsx",
                                                        lineNumber: 885,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Review Checkpoint"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/campaign-details/page.tsx",
                                                        lineNumber: 886,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "15 February 2025 · Completed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/campaign-details/page.tsx",
                                                        lineNumber: 887,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                lineNumber: 883,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "campaignInfoProgressRing",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "campaignInfoProgressCircle",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "84%"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                                lineNumber: 892,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "COMPLETED"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                                lineNumber: 893,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/campaign-details/page.tsx",
                                                        lineNumber: 891,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/campaign-details/page.tsx",
                                                    lineNumber: 890,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                lineNumber: 889,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 882,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/campaign-details/page.tsx",
                                lineNumber: 860,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "campaignInfoSection",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "campaignInfoSectionTitle",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                children: "FINANCIALS"
                                            }, void 0, false, {
                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                lineNumber: 902,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                lineNumber: 903,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 901,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        className: "campaignInfoWideCard",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/overview-candidate.png",
                                                alt: ""
                                            }, void 0, false, {
                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                lineNumber: 906,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Targeted Patients"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/campaign-details/page.tsx",
                                                        lineNumber: 908,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "4,000"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/campaign-details/page.tsx",
                                                        lineNumber: 909,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                lineNumber: 907,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 905,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "campaignInfoStatsGrid",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                className: "campaignInfoMiniCard",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/overview-announcement.png",
                                                        alt: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/campaign-details/page.tsx",
                                                        lineNumber: 914,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Contacted"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                                lineNumber: 916,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "2,800"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                                lineNumber: 917,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/campaign-details/page.tsx",
                                                        lineNumber: 915,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                lineNumber: 913,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                className: "campaignInfoMiniCard",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/overview-candidate.png",
                                                        alt: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/campaign-details/page.tsx",
                                                        lineNumber: 921,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Attend"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                                lineNumber: 923,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "2,349"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                                lineNumber: 924,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/campaign-details/page.tsx",
                                                        lineNumber: 922,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                lineNumber: 920,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 912,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/campaign-details/page.tsx",
                                lineNumber: 900,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "campaignInfoSection",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "campaignInfoSectionTitle",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                children: "OPERATIONS"
                                            }, void 0, false, {
                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                lineNumber: 932,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                lineNumber: 933,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 931,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "campaignInfoOperationsGrid",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                className: "campaignInfoListCard",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Running Locations"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/campaign-details/page.tsx",
                                                        lineNumber: 937,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "Entity 1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                                lineNumber: 939,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "Entity 2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                                lineNumber: 940,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "Entity 3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                                lineNumber: 941,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "Entity 4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                                lineNumber: 942,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "Entity 5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                                lineNumber: 943,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/campaign-details/page.tsx",
                                                        lineNumber: 938,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                lineNumber: 936,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                className: "campaignInfoListCard",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Active channels"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/campaign-details/page.tsx",
                                                        lineNumber: 947,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "SMS"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                                lineNumber: 949,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "Phone Call"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                                lineNumber: 950,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "Whatsapp"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                                lineNumber: 951,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "Patient app"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                                lineNumber: 952,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/campaign-details/page.tsx",
                                                        lineNumber: 948,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                lineNumber: 946,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 935,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/campaign-details/page.tsx",
                                lineNumber: 930,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "campaignInfoSection",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "campaignInfoSectionTitle",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                children: "CAMPAIGN DESCRIPTION"
                                            }, void 0, false, {
                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                lineNumber: 960,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                fileName: "[project]/app/campaign-details/page.tsx",
                                                lineNumber: 961,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 959,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "campaignInfoDescription",
                                        children: "A structured 90-day outreach program targeting patients at elevated risk of Type 2 diabetes across five entities facilities in Abu Dhabi. The campaign focuses on early screening, lifestyle intervention referrals, and medication adherence tracking. Patients are contacted via multi-channel outreach and routed into the Build segment for long-term health management. Success is measured by screening completion rates, referral uptake, and revenue realisation against the allocated budget."
                                    }, void 0, false, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 963,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/campaign-details/page.tsx",
                                lineNumber: 958,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "campaignInfoActions",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "campaignInfoGhostButton",
                                        onClick: ()=>setCampaignInfoOpen(false),
                                        children: "Close"
                                    }, void 0, false, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 973,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "campaignInfoPrimaryButton",
                                        onClick: handleExportPdf,
                                        disabled: isExporting,
                                        children: isExporting ? "Exporting..." : "Export PDF"
                                    }, void 0, false, {
                                        fileName: "[project]/app/campaign-details/page.tsx",
                                        lineNumber: 976,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/campaign-details/page.tsx",
                                lineNumber: 972,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/campaign-details/page.tsx",
                        lineNumber: 847,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true) : null
        ]
    }, void 0, true, {
        fileName: "[project]/app/campaign-details/page.tsx",
        lineNumber: 627,
        columnNumber: 5
    }, this);
}
_s(CampaignDetailsPage, "2GSnmzui1ynSXMeFgE+k6Red6bA=");
_c = CampaignDetailsPage;
var _c;
__turbopack_context__.k.register(_c, "CampaignDetailsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0jqri9h._.js.map