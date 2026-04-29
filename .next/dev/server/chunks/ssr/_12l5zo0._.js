module.exports = [
"[project]/components/date-filter-utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/components/dashboard-shell.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardShell",
    ()=>DashboardShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const CloseIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
const IntroIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
const OverviewIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
const ConditionIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
const CampaignIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
const ClinicalGeneratorIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
const LogoutIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
function DashboardShell({ children, pageClassName, title, breadcrumbCurrent, breadcrumbTrail, entityTabs, activeEntityTab, activeNav, defaultNavOpen = false, headerTabsClassName, bodyClassName, eventCalendarHref = "/campaign-calendar", eventCalendarActive = false, showEventCalendar = true, activeConditionStage }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [navOpen, setNavOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultNavOpen);
    const [authChecked, setAuthChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dashboardFit, setDashboardFit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        scale: 1,
        width: 1920,
        height: 1080
    });
    const shouldFitDashboard = /overviewPage|calendarPage|lifestagePage|campaignDetailsPage|subConditionPage/.test(pageClassName);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const isAuthenticated = window.sessionStorage.getItem("hvm-authenticated") === "true";
        if (!isAuthenticated) {
            router.replace("/");
            return;
        }
        setAuthChecked(true);
    }, [
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!shouldFitDashboard) {
            return;
        }
        const updateScale = ()=>{
            const widthScale = window.innerWidth / 1920;
            const heightScale = window.innerHeight / 1080;
            const nextScale = Math.min(1.45, Math.max(0.64, Math.min(widthScale, heightScale)));
            const scale = Number(nextScale.toFixed(3));
            setDashboardFit({
                scale,
                width: Math.round(window.innerWidth / scale),
                height: Math.round(window.innerHeight / scale)
            });
        };
        updateScale();
        window.addEventListener("resize", updateScale);
        return ()=>window.removeEventListener("resize", updateScale);
    }, [
        shouldFitDashboard
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setNavOpen(false);
    }, [
        pathname
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!navOpen) {
            return;
        }
        const handleKeyDown = (event)=>{
            if (event.key === "Escape") {
                setNavOpen(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return ()=>window.removeEventListener("keydown", handleKeyDown);
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: `${pageClassName} ${shouldFitDashboard ? "dashboardFitPage" : ""} ${navOpen ? "navOpen" : ""}`,
        style: shouldFitDashboard ? {
            "--dashboard-fit-scale": dashboardFit.scale,
            "--dashboard-fit-width": `${dashboardFit.width}px`,
            "--dashboard-fit-height": `${dashboardFit.height}px`
        } : undefined,
        children: [
            navOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "sideNavBackdrop",
                        "aria-label": "Close navigation",
                        onClick: ()=>setNavOpen(false),
                        type: "button"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard-shell.tsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "sideNav",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sideNavBody",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "navSectionLabel",
                                    children: "Dashboard"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard-shell.tsx",
                                    lineNumber: 180,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "navSection",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/introduction",
                                            className: `sideNavItem ${activeNav === "introduction" ? "active" : ""}`,
                                            onClick: ()=>setNavOpen(false),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sideNavIcon",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IntroIcon, {}, void 0, false, {
                                                        fileName: "[project]/components/dashboard-shell.tsx",
                                                        lineNumber: 188,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/overview",
                                            className: `sideNavItem ${activeNav === "overview" ? "active" : ""}`,
                                            onClick: ()=>setNavOpen(false),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sideNavIcon",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(OverviewIcon, {}, void 0, false, {
                                                        fileName: "[project]/components/dashboard-shell.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "navSectionLabel",
                                    children: "Conditions"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard-shell.tsx",
                                    lineNumber: 214,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "navSection navTreeSection",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/lifestage-overview/acquire",
                                            className: `sideNavItem groupHeader ${activeNav === "lifestage" ? "active" : ""}`,
                                            onClick: ()=>setNavOpen(false),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sideNavIcon",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ConditionIcon, {}, void 0, false, {
                                                        fileName: "[project]/components/dashboard-shell.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Condition Overview"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "sideBranch",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/lifestage-overview/acquire",
                                                    className: activeConditionStage === "acquire" ? "active" : "",
                                                    onClick: ()=>setNavOpen(false),
                                                    children: "Acquire"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/lifestage-overview/build",
                                                    className: activeConditionStage === "build" ? "active" : "",
                                                    onClick: ()=>setNavOpen(false),
                                                    children: "Build"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 236,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "navSectionLabel",
                                    children: "Campaigns"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard-shell.tsx",
                                    lineNumber: 253,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "navSection",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/campaign-sub-condition",
                                            className: `sideNavItem ${activeNav === "subCondition" ? "active" : ""}`,
                                            onClick: ()=>setNavOpen(false),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sideNavIcon",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CampaignIcon, {}, void 0, false, {
                                                        fileName: "[project]/components/dashboard-shell.tsx",
                                                        lineNumber: 261,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/campaign-details",
                                            className: `sideNavItem ${activeNav === "campaignDetails" ? "active" : ""}`,
                                            onClick: ()=>setNavOpen(false),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sideNavIcon",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CampaignIcon, {}, void 0, false, {
                                                        fileName: "[project]/components/dashboard-shell.tsx",
                                                        lineNumber: 271,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/campaign-calendar",
                                            className: `sideNavItem ${activeNav === "calendar" ? "active" : ""}`,
                                            onClick: ()=>setNavOpen(false),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sideNavIcon",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CampaignIcon, {}, void 0, false, {
                                                        fileName: "[project]/components/dashboard-shell.tsx",
                                                        lineNumber: 281,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 280,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "navSectionLabel",
                                    children: "Clinical Guidelines"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard-shell.tsx",
                                    lineNumber: 287,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/clinical-regulation-generator",
                                    className: `sideNavItem ${activeNav === "clinicalGenerator" ? "active" : ""}`,
                                    onClick: ()=>setNavOpen(false),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "sideNavIcon",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ClinicalGeneratorIcon, {}, void 0, false, {
                                                fileName: "[project]/components/dashboard-shell.tsx",
                                                lineNumber: 294,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboard-shell.tsx",
                                            lineNumber: 293,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "navSection sideNavAccount",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "sideNavItem sideNavLogout",
                                        onClick: handleLogout,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sideNavIcon",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoutIcon, {}, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard-shell.tsx",
                                                lineNumber: 300,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `overviewCanvas ${navOpen ? "isBlurred" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "introHeader overviewHeader",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "introBrandArea",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `menuButton ${navOpen ? "menuButtonOpen" : ""}`,
                                        "aria-label": navOpen ? "Close navigation" : "Open navigation",
                                        onClick: ()=>setNavOpen((value)=>!value),
                                        type: "button",
                                        children: navOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CloseIcon, {}, void 0, false, {
                                            fileName: "[project]/components/dashboard-shell.tsx",
                                            lineNumber: 321,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                    fileName: "[project]/components/dashboard-shell.tsx",
                                                    lineNumber: 325,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "introLogoLockup",
                                        "aria-label": "HVM Health Value Management",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "introLogoWord",
                                                children: "HVM"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard-shell.tsx",
                                                lineNumber: 332,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "introLogoText",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "HEALTH"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboard-shell.tsx",
                                                        lineNumber: 334,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "VALUE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboard-shell.tsx",
                                                        lineNumber: 335,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "introTitleWrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                children: title
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard-shell.tsx",
                                                lineNumber: 341,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: breadcrumbItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            index > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "→"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/dashboard-shell.tsx",
                                                                lineNumber: 345,
                                                                columnNumber: 34
                                                            }, this) : null,
                                                            item.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: item.href,
                                                                children: item.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/dashboard-shell.tsx",
                                                                lineNumber: 346,
                                                                columnNumber: 34
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "introHeaderActions",
                                children: [
                                    entityTabs?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `entityTabs ${headerTabsClassName ?? ""}`,
                                        "aria-label": "Entity tabs",
                                        children: entityTabs.map((pill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                    showEventCalendar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: eventCalendarHref,
                                        className: `calendarButton ${eventCalendarActive ? "calendarButtonActive" : ""}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": "true",
                                                children: "🗓"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard-shell.tsx",
                                                lineNumber: 373,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
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
}),
"[project]/components/export-visuals.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Area.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/AreaChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Cell.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ComposedChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/ComposedChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Funnel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$FunnelChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/FunnelChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$LabelList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/LabelList.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Line.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/polar/Pie.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/PieChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$Sankey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/Sankey.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Scatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Scatter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ScatterChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/ScatterChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ZAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/ZAxis.js [app-ssr] (ecmascript)");
"use client";
;
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
function BubbleTooltip({ active, payload, metricLabel = "Seen Rate", detailLabel = "(Attended / Booked)" }) {
    if (!active || !payload?.length) {
        return null;
    }
    const point = payload[0].payload;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "subConditionChartTooltip",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: point.label
            }, void 0, false, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    metricLabel,
                    ": ",
                    point.value,
                    "% ",
                    detailLabel
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    point.y,
                    "M revenue"
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 142,
        columnNumber: 5
    }, this);
}
function BubbleShape(props) {
    const { cx = 0, cy = 0, payload, showValueLabel = true } = props;
    if (!payload) {
        return null;
    }
    const radius = Math.max(payload.size / 3.2, 28);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: cx,
                cy: cy,
                r: radius,
                fill: `${payload.color}24`,
                stroke: payload.color,
                strokeWidth: 2
            }, void 0, false, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            showValueLabel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
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
                lineNumber: 165,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 162,
        columnNumber: 5
    }, this);
}
function FunnelTooltip({ active, payload }) {
    if (!active || !payload?.length) {
        return null;
    }
    const point = payload[0].payload;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "subConditionChartTooltip",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: point.label
            }, void 0, false, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    point.count,
                    " patients"
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    point.revenue,
                    " incremental revenue"
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 181,
        columnNumber: 5
    }, this);
}
function FunnelCenterLabel(props) {
    const { viewBox, payload } = props;
    if (!viewBox || !payload) {
        return null;
    }
    const x = (viewBox.x ?? 0) + (viewBox.width ?? 0) / 2;
    const y = (viewBox.y ?? 0) + (viewBox.height ?? 0) / 2;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
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
        lineNumber: 204,
        columnNumber: 5
    }, this);
}
function SankeyTooltip({ active, payload }) {
    const point = payload?.[0]?.payload;
    if (!active || !point) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "subConditionChartTooltip",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: [
                    point.sourceLabel,
                    " to ",
                    point.targetLabel
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 225,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    formatCompactAmount(point.value ?? 0),
                    " patients"
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 228,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 224,
        columnNumber: 5
    }, this);
}
function ExportLineChart({ values, max, color = "#2563EB", area = false, width = 280, height = 140, labels, showDots = true }) {
    const gradientId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])().replace(/:/g, "");
    const data = values.map((value, index)=>({
            label: labels?.[index] ?? `Point ${index + 1}`,
            value
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "linechart rechartsChart",
        style: {
            minHeight: height
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            width: "100%",
            height: "100%",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AreaChart"], {
                data: data,
                margin: {
                    top: 8,
                    right: 12,
                    bottom: 12,
                    left: 4
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: `lineArea-${gradientId}`,
                            x1: "0",
                            y1: "0",
                            x2: "0",
                            y2: "1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0%",
                                    stopColor: color,
                                    stopOpacity: "0.34"
                                }, void 0, false, {
                                    fileName: "[project]/components/export-visuals.tsx",
                                    lineNumber: 264,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "58%",
                                    stopColor: color,
                                    stopOpacity: "0.12"
                                }, void 0, false, {
                                    fileName: "[project]/components/export-visuals.tsx",
                                    lineNumber: 265,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "100%",
                                    stopColor: color,
                                    stopOpacity: "0"
                                }, void 0, false, {
                                    fileName: "[project]/components/export-visuals.tsx",
                                    lineNumber: 266,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/export-visuals.tsx",
                            lineNumber: 263,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 262,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                        stroke: "#c7e0f8",
                        strokeOpacity: 0.85
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 269,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
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
                        lineNumber: 270,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
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
                        width: 42
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 271,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                        cursor: {
                            stroke: "#8cbbe8",
                            strokeDasharray: "4 4"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 272,
                        columnNumber: 11
                    }, this),
                    area ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Area"], {
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
                        lineNumber: 274,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Line"], {
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
                        lineNumber: 285,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 261,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 260,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 259,
        columnNumber: 5
    }, this);
}
function ExportMultiLineChart({ series, labels, periodLabels, colors, names, valueSuffix = "", yAxisLabel, width = 280, height = 140 }) {
    const gradientSeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])().replace(/:/g, "");
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            transform: `translate(${Number.isFinite(tickX) ? tickX : 0},${Number.isFinite(tickY) ? tickY : 0})`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: 0,
                    y: 0,
                    dy: 10,
                    textAnchor: "middle",
                    fill: "#64748B",
                    fontSize: 10,
                    children: payload?.value
                }, void 0, false, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 342,
                    columnNumber: 9
                }, this),
                shouldShowYear ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
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
                    lineNumber: 346,
                    columnNumber: 11
                }, this) : null
            ]
        }, void 0, true, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 341,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "linechart rechartsChart",
        style: {
            minHeight: height
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            width: "100%",
            height: "100%",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AreaChart"], {
                data: data,
                margin: {
                    top: 8,
                    right: 12,
                    bottom: periodLabels ? 12 : 2,
                    left: yAxisLabel ? 0 : -12
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: colors.map((color, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: `multiLineArea-${gradientSeed}-${index}`,
                                x1: "0",
                                y1: "0",
                                x2: "0",
                                y2: "1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: color,
                                        stopOpacity: "0.28"
                                    }, void 0, false, {
                                        fileName: "[project]/components/export-visuals.tsx",
                                        lineNumber: 361,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "58%",
                                        stopColor: color,
                                        stopOpacity: "0.1"
                                    }, void 0, false, {
                                        fileName: "[project]/components/export-visuals.tsx",
                                        lineNumber: 362,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: color,
                                        stopOpacity: "0"
                                    }, void 0, false, {
                                        fileName: "[project]/components/export-visuals.tsx",
                                        lineNumber: 363,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, color + index, true, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 360,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 358,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                        stroke: "#c7e0f8",
                        strokeOpacity: 0.85
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 367,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
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
                        lineNumber: 368,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
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
                        lineNumber: 376,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
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
                        lineNumber: 385,
                        columnNumber: 11
                    }, this),
                    series.map((_, rowIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Area"], {
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
                            lineNumber: 398,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 357,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 356,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 355,
        columnNumber: 5
    }, this);
}
function ExportDualAxisLineChart({ patientValues, revenueValues, labels, periodLabels, patientColor = "#2563EB", revenueColor = "#14B8A6", height = 140 }) {
    const gradientSeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])().replace(/:/g, "");
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            transform: `translate(${Number.isFinite(tickX) ? tickX : 0},${Number.isFinite(tickY) ? tickY : 0})`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: 0,
                    y: 0,
                    dy: 10,
                    textAnchor: "middle",
                    fill: "#64748B",
                    fontSize: 10,
                    children: payload?.value
                }, void 0, false, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 451,
                    columnNumber: 9
                }, this),
                shouldShowYear ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
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
                    lineNumber: 455,
                    columnNumber: 11
                }, this) : null
            ]
        }, void 0, true, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 450,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "linechart rechartsChart",
        style: {
            minHeight: height
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            width: "100%",
            height: "100%",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AreaChart"], {
                data: data,
                margin: {
                    top: 8,
                    right: 6,
                    bottom: periodLabels ? 12 : 2,
                    left: -8
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: `dualPatients-${gradientSeed}`,
                                x1: "0",
                                y1: "0",
                                x2: "0",
                                y2: "1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: patientColor,
                                        stopOpacity: "0.26"
                                    }, void 0, false, {
                                        fileName: "[project]/components/export-visuals.tsx",
                                        lineNumber: 469,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: patientColor,
                                        stopOpacity: "0"
                                    }, void 0, false, {
                                        fileName: "[project]/components/export-visuals.tsx",
                                        lineNumber: 470,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 468,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: `dualRevenue-${gradientSeed}`,
                                x1: "0",
                                y1: "0",
                                x2: "0",
                                y2: "1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: revenueColor,
                                        stopOpacity: "0.24"
                                    }, void 0, false, {
                                        fileName: "[project]/components/export-visuals.tsx",
                                        lineNumber: 473,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: revenueColor,
                                        stopOpacity: "0"
                                    }, void 0, false, {
                                        fileName: "[project]/components/export-visuals.tsx",
                                        lineNumber: 474,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 472,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 467,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                        stroke: "#c7e0f8",
                        strokeOpacity: 0.85
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 477,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
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
                        lineNumber: 478,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
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
                        lineNumber: 486,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
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
                        lineNumber: 495,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
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
                        lineNumber: 505,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Area"], {
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
                        lineNumber: 518,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Area"], {
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
                        lineNumber: 529,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 466,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 465,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 464,
        columnNumber: 5
    }, this);
}
function ExportBarValueChart({ values, labels, color = "#86EFAC", textColor = "#16A34A", max }) {
    const height = 140;
    const data = values.map((value, index)=>({
            label: labels[index],
            value
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "linechart rechartsChart",
        style: {
            minHeight: height
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            width: "100%",
            height: "100%",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BarChart"], {
                data: data,
                margin: {
                    top: 18,
                    right: 12,
                    bottom: 12,
                    left: 4
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                        stroke: "#c7e0f8",
                        strokeOpacity: 0.85
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 569,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
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
                        lineNumber: 570,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
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
                        width: 42
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 571,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                        cursor: {
                            fill: "rgba(191, 219, 254, 0.22)"
                        },
                        formatter: (value)=>[
                                `${value}K`,
                                "Value"
                            ]
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 572,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"], {
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
                            data.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cell"], {
                                    fill: color
                                }, item.label, false, {
                                    fileName: "[project]/components/export-visuals.tsx",
                                    lineNumber: 575,
                                    columnNumber: 15
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$LabelList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LabelList"], {
                                dataKey: "value",
                                position: "top",
                                formatter: (value)=>`${value ?? 0}K`,
                                fill: textColor,
                                fontSize: 10,
                                fontWeight: 700
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 577,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 573,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 568,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 567,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 566,
        columnNumber: 5
    }, this);
}
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "linechart rechartsChart",
        style: {
            minHeight: height
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            width: "100%",
            height: "100%",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BarChart"], {
                data: data,
                margin: {
                    top: 18,
                    right: 10,
                    bottom: 0,
                    left: -22
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                        stroke: "#c7e0f8",
                        strokeOpacity: 0.85
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 615,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
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
                        lineNumber: 616,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
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
                        lineNumber: 617,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                        cursor: {
                            fill: "rgba(191, 219, 254, 0.22)"
                        },
                        formatter: (value, name)=>[
                                Number(value).toLocaleString("en-US"),
                                name
                            ]
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 618,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"], {
                        dataKey: "target",
                        fill: targetColor,
                        radius: [
                            3,
                            3,
                            0,
                            0
                        ],
                        name: "Target",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$LabelList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LabelList"], {
                            dataKey: "target",
                            position: "top",
                            formatter: (value)=>formatAxisCount(Number(value ?? 0)),
                            fill: "#64748B",
                            fontSize: 10,
                            fontWeight: 700
                        }, void 0, false, {
                            fileName: "[project]/components/export-visuals.tsx",
                            lineNumber: 620,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 619,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"], {
                        dataKey: "contacted",
                        fill: contactedColor,
                        radius: [
                            3,
                            3,
                            0,
                            0
                        ],
                        name: "Contacted",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$LabelList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LabelList"], {
                            dataKey: "contacted",
                            position: "top",
                            formatter: (value)=>formatAxisCount(Number(value ?? 0)),
                            fill: "#64748B",
                            fontSize: 10,
                            fontWeight: 700
                        }, void 0, false, {
                            fileName: "[project]/components/export-visuals.tsx",
                            lineNumber: 623,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 622,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"], {
                        dataKey: "booked",
                        fill: bookedColor,
                        radius: [
                            3,
                            3,
                            0,
                            0
                        ],
                        name: "Booked",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$LabelList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LabelList"], {
                            dataKey: "booked",
                            position: "top",
                            formatter: (value)=>formatAxisCount(Number(value ?? 0)),
                            fill: "#64748B",
                            fontSize: 10,
                            fontWeight: 700
                        }, void 0, false, {
                            fileName: "[project]/components/export-visuals.tsx",
                            lineNumber: 626,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 625,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 614,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 613,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 612,
        columnNumber: 5
    }, this);
}
function ExportHorizontalBarChart({ data, height = 190, color = "#20AEE4", max = 100 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "linechart rechartsChart",
        style: {
            minHeight: height
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            width: "100%",
            height: "100%",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BarChart"], {
                data: data,
                layout: "vertical",
                margin: {
                    top: 6,
                    right: 18,
                    bottom: 8,
                    left: 78
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                        stroke: "#c7e0f8",
                        strokeOpacity: 0.85
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 649,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
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
                        lineNumber: 650,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
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
                        lineNumber: 651,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                        cursor: {
                            fill: "rgba(191, 219, 254, 0.2)"
                        },
                        formatter: (value)=>[
                                `${value}%`,
                                "Conversion"
                            ]
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 652,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"], {
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
                        lineNumber: 653,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 648,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 647,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 646,
        columnNumber: 5
    }, this);
}
function ExportStackedBarChart({ data, height = 210, max }) {
    const yMax = max ?? Math.max(...data.map((item)=>item.stopper + item.dropper), 1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "linechart rechartsChart",
        style: {
            minHeight: height
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            width: "100%",
            height: "100%",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BarChart"], {
                data: data,
                margin: {
                    top: 12,
                    right: 10,
                    bottom: 0,
                    left: -18
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                        stroke: "#c7e0f8",
                        strokeOpacity: 0.85
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 675,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
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
                        lineNumber: 676,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
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
                        lineNumber: 677,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
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
                        lineNumber: 678,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"], {
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
                        lineNumber: 690,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"], {
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
                        lineNumber: 691,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 674,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 673,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 672,
        columnNumber: 5
    }, this);
}
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`,
            fill: "none",
            stroke: d.color,
            strokeWidth: sw
        }, d.label, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 724,
            columnNumber: 7
        }, this);
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "180",
                height: "150",
                viewBox: "0 0 180 150",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: cx,
                        cy: cy,
                        r: r,
                        fill: "none",
                        stroke: "#F1F5F9",
                        strokeWidth: sw
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 737,
                        columnNumber: 9
                    }, this),
                    slices,
                    centerLabel.map((line, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
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
                            lineNumber: 740,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
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
                        lineNumber: 753,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 736,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px 12px",
                    justifyContent: "center",
                    marginTop: 4,
                    fontSize: 9.5,
                    color: "#64748B"
                },
                children: data.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            d.label,
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                style: {
                                    color: "#1E3A5F"
                                },
                                children: d.value
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 760,
                                columnNumber: 23
                            }, this)
                        ]
                    }, d.label, true, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 759,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 757,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 735,
        columnNumber: 5
    }, this);
}
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: `M${sourceX},${sourceY}L${elbowX},${elbowY}L${labelX},${labelY}`,
                stroke: "#2f4357",
                strokeWidth: 1.05,
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 821,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: textX,
                y: labelY - 5,
                textAnchor: textAnchor,
                fontSize: "9.5",
                fill: "#5f778e",
                fontWeight: "600",
                children: safeName
            }, void 0, false, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 822,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: textX,
                y: labelY + 9,
                textAnchor: textAnchor,
                fontSize: "10.5",
                fill: "#2f4357",
                fontWeight: "500",
                children: value ?? fallbackPercent
            }, void 0, false, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 825,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 820,
        columnNumber: 5
    }, this);
}
function ExportLabeledDonutChart({ data, centerValue, height = 290 }) {
    const computedCenterValue = centerValue ?? formatCompactAmount(data.reduce((sum, item)=>sum + parseCompactAmount(item.value), 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "exportLabeledDonut",
        style: {
            height
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            width: "100%",
            height: "100%",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PieChart"], {
                margin: {
                    top: 12,
                    right: 58,
                    bottom: 12,
                    left: 58
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pie"], {
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
                        children: data.map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cell"], {
                                fill: entry.color
                            }, entry.label, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 883,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 847,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
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
                        lineNumber: 886,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 846,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 845,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 844,
        columnNumber: 5
    }, this);
}
function ExportBubbleChart({ data, height = 260, showValueLabels = true, metricLabel = "Seen Rate", detailLabel = "(Attended / Booked)" }) {
    if (!data.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "exportChartEmpty",
            children: "No chart data available."
        }, void 0, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 909,
            columnNumber: 12
        }, this);
    }
    const maxY = Math.max(...data.map((item)=>item.y), 1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "exportBubbleChart",
        style: {
            height
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            width: "100%",
            height: height,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ScatterChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScatterChart"], {
                margin: {
                    top: 18,
                    right: 18,
                    bottom: 22,
                    left: 18
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                        stroke: "#d5e6f8",
                        strokeDasharray: "0"
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 918,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
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
                        lineNumber: 919,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
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
                        lineNumber: 929,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ZAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZAxis"], {
                        type: "number",
                        dataKey: "size",
                        range: [
                            900,
                            6500
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 939,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                        content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BubbleTooltip, {
                            metricLabel: metricLabel,
                            detailLabel: detailLabel
                        }, void 0, false, {
                            fileName: "[project]/components/export-visuals.tsx",
                            lineNumber: 940,
                            columnNumber: 29
                        }, this),
                        cursor: false
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 940,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Scatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scatter"], {
                        data: data,
                        shape: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BubbleShape, {
                            showValueLabel: showValueLabels
                        }, void 0, false, {
                            fileName: "[project]/components/export-visuals.tsx",
                            lineNumber: 941,
                            columnNumber: 39
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 941,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 917,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 916,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 915,
        columnNumber: 5
    }, this);
}
function ExportFunnelChart({ data, height = 250, leftHeader, rightHeader }) {
    if (!data.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "exportChartEmpty",
            children: "No chart data available."
        }, void 0, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 960,
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "exportFunnelLayout",
        style: {
            minHeight: height
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "exportFunnelCanvas",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                    width: "100%",
                    height: height,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$FunnelChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FunnelChart"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FunnelTooltip, {}, void 0, false, {
                                    fileName: "[project]/components/export-visuals.tsx",
                                    lineNumber: 975,
                                    columnNumber: 31
                                }, this),
                                cursor: false
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 975,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Funnel"], {
                                dataKey: "value",
                                data: prepared,
                                isAnimationActive: false,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$LabelList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LabelList"], {
                                        content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FunnelCenterLabel, {}, void 0, false, {
                                            fileName: "[project]/components/export-visuals.tsx",
                                            lineNumber: 977,
                                            columnNumber: 35
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/export-visuals.tsx",
                                        lineNumber: 977,
                                        columnNumber: 15
                                    }, this),
                                    prepared.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cell"], {
                                            fill: item.fill,
                                            stroke: item.fill
                                        }, item.label, false, {
                                            fileName: "[project]/components/export-visuals.tsx",
                                            lineNumber: 979,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 976,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 974,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 973,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 972,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "exportFunnelMeta",
                children: [
                    leftHeader || rightHeader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "exportFunnelMetaHead",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: leftHeader ?? ""
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 989,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: rightHeader ?? ""
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 990,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 988,
                        columnNumber: 11
                    }, this) : null,
                    prepared.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "exportFunnelMetaRow",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "exportFunnelMetaMain",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: [
                                                item.label,
                                                " · ",
                                                item.count
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/export-visuals.tsx",
                                            lineNumber: 997,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "exportFunnelMetaNotes",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: item.leftNote
                                                }, void 0, false, {
                                                    fileName: "[project]/components/export-visuals.tsx",
                                                    lineNumber: 1001,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: item.rightNote
                                                }, void 0, false, {
                                                    fileName: "[project]/components/export-visuals.tsx",
                                                    lineNumber: 1002,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/export-visuals.tsx",
                                            lineNumber: 1000,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/export-visuals.tsx",
                                    lineNumber: 996,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "exportFunnelRevenue",
                                    children: item.revenue
                                }, void 0, false, {
                                    fileName: "[project]/components/export-visuals.tsx",
                                    lineNumber: 1005,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, item.label, true, {
                            fileName: "[project]/components/export-visuals.tsx",
                            lineNumber: 995,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 986,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 971,
        columnNumber: 5
    }, this);
}
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: x,
                    y: y,
                    width: width,
                    height: height,
                    rx: 4,
                    fill: payload.color,
                    opacity: "0.88"
                }, void 0, false, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 1070,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: labelX,
                    y: y + height / 2 - 4,
                    textAnchor: labelAnchor,
                    fill: "#4b6177",
                    fontSize: "11",
                    fontWeight: "700",
                    children: payload.label
                }, void 0, false, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 1071,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: labelX,
                    y: y + height / 2 + 11,
                    textAnchor: labelAnchor,
                    fill: payload.color,
                    fontSize: "11",
                    fontWeight: "700",
                    children: payload.valueLabel
                }, void 0, false, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 1074,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 1069,
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: path,
            fill: payload.color,
            opacity: "0.22",
            stroke: "none"
        }, void 0, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 1091,
            columnNumber: 12
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "exportSankeyWrap",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            width: "100%",
            height: "100%",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$Sankey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sankey"], {
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
                link: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SankeyLink, {}, void 0, false, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 1102,
                    columnNumber: 17
                }, this),
                node: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SankeyNode, {}, void 0, false, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 1103,
                    columnNumber: 17
                }, this),
                iterations: 64,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                    content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SankeyTooltip, {}, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 1106,
                        columnNumber: 29
                    }, this),
                    cursor: false
                }, void 0, false, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 1106,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 1097,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/export-visuals.tsx",
            lineNumber: 1096,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 1095,
        columnNumber: 5
    }, this);
}
function ExportBubbleSegments({ segments }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 280 180",
        style: {
            width: "100%",
            height: 180
        },
        children: segments.map((segment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: segment.x * 2.2,
                        cy: 180 - segment.y * 1.8,
                        r: Math.max(12, segment.size / 2.6),
                        fill: segment.color,
                        opacity: "0.28",
                        stroke: segment.color,
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 1122,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
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
                        lineNumber: 1131,
                        columnNumber: 11
                    }, this)
                ]
            }, segment.label, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 1121,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 1119,
        columnNumber: 5
    }, this);
}
function ExportHeatmap({ values, columns, rows }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "campaignHeatmap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "campaignHeatHeaderSpacer"
            }, void 0, false, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 1158,
                columnNumber: 7
            }, this),
            columns.map((column)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "campaignHeatHeader",
                    children: column
                }, column, false, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 1160,
                    columnNumber: 9
                }, this)),
            rows.map((row, rowIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "campaignHeatRow",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "campaignHeatTime",
                            children: row.replace(".", ":")
                        }, void 0, false, {
                            fileName: "[project]/components/export-visuals.tsx",
                            lineNumber: 1166,
                            columnNumber: 11
                        }, this),
                        columns.map((column, columnIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "campaignHeatCell",
                                "data-val": `${Math.round(values[rowIndex][columnIndex] * 100)}%`,
                                style: {
                                    background: `rgba(33, 173, 214, ${Math.max(values[rowIndex][columnIndex], 0.18)})`
                                },
                                title: `${column} at ${row.replace(".", ":")}: ${Math.round(values[rowIndex][columnIndex] * 100)}%`
                            }, `${row}-${column}`, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 1168,
                                columnNumber: 13
                            }, this))
                    ]
                }, row, true, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 1165,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/export-visuals.tsx",
        lineNumber: 1157,
        columnNumber: 5
    }, this);
}
function ExportEntitiesSummary({ summary, series, chartHeight = 130 }) {
    const chartTop = 16;
    const chartBottom = 24;
    const availableHeight = chartHeight - chartTop - chartBottom;
    const lineMax = Math.max(...series.map((item)=>item.line), 1);
    const barMax = Math.max(...series.map((item)=>item.bar), 1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: 14,
                    fontSize: 10,
                    marginBottom: 8
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                style: {
                                    color: "#1E3A5F",
                                    fontSize: 16
                                },
                                children: summary.entities
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 1200,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 1200,
                                columnNumber: 82
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "#64748B"
                                },
                                children: "Entities active"
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 1200,
                                columnNumber: 88
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 1200,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                style: {
                                    color: "#1E3A5F",
                                    fontSize: 16
                                },
                                children: summary.enrolled
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 1201,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 1201,
                                columnNumber: 82
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "#64748B"
                                },
                                children: "Total enrolled"
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 1201,
                                columnNumber: 88
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 1201,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                style: {
                                    color: "#22C55E",
                                    fontSize: 16
                                },
                                children: summary.revenue
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 1202,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 1202,
                                columnNumber: 81
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "#64748B"
                                },
                                children: "Total Revenue"
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 1202,
                                columnNumber: 87
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 1202,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 1199,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "linechart rechartsChart",
                style: {
                    height: '300px',
                    minHeight: chartHeight
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                    width: "100%",
                    height: "100%",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ComposedChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ComposedChart"], {
                        data: series,
                        margin: {
                            top: 8,
                            right: 8,
                            bottom: 0,
                            left: -24
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                stroke: "#c7e0f8",
                                strokeOpacity: 0.85
                            }, void 0, false, {
                                fileName: "[project]/components/export-visuals.tsx",
                                lineNumber: 1207,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
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
                                lineNumber: 1208,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
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
                                lineNumber: 1209,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
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
                                lineNumber: 1217,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
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
                                lineNumber: 1226,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"], {
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
                                lineNumber: 1234,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Line"], {
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
                                lineNumber: 1235,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/export-visuals.tsx",
                        lineNumber: 1206,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/export-visuals.tsx",
                    lineNumber: 1205,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/export-visuals.tsx",
                lineNumber: 1204,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/public/data/hvm-dataset.json.[json].cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = JSON.parse("[{\"campaignId\":\"Antenatal1\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"Antenatal\",\"condition\":\"Antenatal\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-1\",\"booked\":75,\"target\":163,\"contacted\":163,\"enrolled\":163,\"attended\":61,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":767841.47,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Antenatal1\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"Antenatal\",\"condition\":\"Antenatal\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":51,\"target\":340,\"contacted\":340,\"enrolled\":340,\"attended\":51,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1520183.0641873828,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Antenatal1\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"Antenatal\",\"condition\":\"Antenatal\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":119,\"target\":417,\"contacted\":417,\"enrolled\":417,\"attended\":70,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":2363961.489977023,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Antenatal1\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"Antenatal\",\"condition\":\"Antenatal\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":414,\"target\":414,\"contacted\":414,\"enrolled\":414,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Antenatal1\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"Antenatal\",\"condition\":\"Antenatal\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-2\",\"booked\":35,\"target\":140,\"contacted\":140,\"enrolled\":140,\"attended\":35,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":652951.2999999996,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Antenatal1\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"Antenatal\",\"condition\":\"Antenatal\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-3\",\"booked\":70,\"target\":583,\"contacted\":583,\"enrolled\":583,\"attended\":70,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1417079.8610084022,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Antenatal1\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"Antenatal\",\"condition\":\"Antenatal\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-4\",\"booked\":84,\"target\":400,\"contacted\":400,\"enrolled\":400,\"attended\":84,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":2114321.264884581,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Antenatal1\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"Antenatal\",\"condition\":\"Antenatal\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":14,\"target\":50,\"contacted\":50,\"enrolled\":50,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Antenatal1\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"Antenatal\",\"condition\":\"Antenatal\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":39,\"target\":325,\"contacted\":325,\"enrolled\":325,\"attended\":39,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1281570.2649908226,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Antenatal1\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"Antenatal\",\"condition\":\"Antenatal\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":87,\"target\":458,\"contacted\":458,\"enrolled\":458,\"attended\":87,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":2574062.9462444168,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Antenatal1\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"Antenatal\",\"condition\":\"Antenatal\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-8\",\"booked\":22,\"target\":122,\"contacted\":122,\"enrolled\":122,\"attended\":22,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":857208.486110056,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Antenatal1\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"Antenatal\",\"condition\":\"Antenatal\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":93,\"target\":207,\"contacted\":207,\"enrolled\":207,\"attended\":93,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":2743069.722317904,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Antenatal1\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"Antenatal\",\"condition\":\"Antenatal\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":117,\"target\":117,\"contacted\":117,\"enrolled\":117,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Antenatal1\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"Antenatal\",\"condition\":\"Antenatal\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2026-2\",\"booked\":119,\"target\":119,\"contacted\":119,\"enrolled\":119,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Antenatal1\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"Antenatal\",\"condition\":\"Antenatal\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2026-3\",\"booked\":48,\"target\":48,\"contacted\":48,\"enrolled\":48,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Antenatal1\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"Antenatal\",\"condition\":\"Antenatal\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":257,\"target\":257,\"contacted\":257,\"enrolled\":257,\"attended\":257,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":6283248.456452254,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Dyslipidemia1\",\"provider\":\"Al Rahba\",\"stage\":\"Acquire\",\"campaignName\":\"Dyslipidemia\",\"condition\":\"Dyslipidemia\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":4,\"target\":26,\"contacted\":21,\"enrolled\":21,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Dyslipidemia1\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"Dyslipidemia\",\"condition\":\"Dyslipidemia\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":168,\"target\":732,\"contacted\":575,\"enrolled\":575,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Dyslipidemia1\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"Dyslipidemia\",\"condition\":\"Dyslipidemia\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":40,\"target\":356,\"contacted\":290,\"enrolled\":290,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Dyslipidemia1\",\"provider\":\"STMC\",\"stage\":\"Acquire\",\"campaignName\":\"Dyslipidemia\",\"condition\":\"Dyslipidemia\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":15,\"target\":84,\"contacted\":71,\"enrolled\":71,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Dyslipidemia1\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"Dyslipidemia\",\"condition\":\"Dyslipidemia\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":32,\"target\":308,\"contacted\":254,\"enrolled\":254,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Dyslipidemia2\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"Dyslipidemia\",\"condition\":\"Dyslipidemia\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-2\",\"booked\":437,\"target\":3683,\"contacted\":1615,\"enrolled\":1615,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Dyslipidemia2\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"Dyslipidemia\",\"condition\":\"Dyslipidemia\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-3\",\"booked\":71,\"target\":842,\"contacted\":264,\"enrolled\":264,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Dyslipidemia3\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"Dyslipidemia\",\"condition\":\"Dyslipidemia\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-3\",\"booked\":48,\"target\":476,\"contacted\":215,\"enrolled\":215,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"Dyslipidemia3\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"Dyslipidemia\",\"condition\":\"Dyslipidemia\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-4\",\"booked\":30,\"target\":244,\"contacted\":86,\"enrolled\":86,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management1\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2024-12\",\"booked\":null,\"target\":4,\"contacted\":2,\"enrolled\":2,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management1\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-1\",\"booked\":162,\"target\":518,\"contacted\":304,\"enrolled\":314,\"attended\":126,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":305008.88,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management1\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-2\",\"booked\":726,\"target\":2539,\"contacted\":1398,\"enrolled\":1405,\"attended\":499,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1232258.7800000005,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management1\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-3\",\"booked\":366,\"target\":1151,\"contacted\":851,\"enrolled\":851,\"attended\":236,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":521523.05999999994,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management1\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-4\",\"booked\":450,\"target\":1094,\"contacted\":1075,\"enrolled\":1075,\"attended\":313,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":623867.6699999999,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management1\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":354,\"target\":1059,\"contacted\":894,\"enrolled\":894,\"attended\":213,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":413919.4099999998,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management1\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":37,\"target\":321,\"contacted\":75,\"enrolled\":75,\"attended\":19,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":26425.76999999999,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management2\",\"provider\":\"Al Ain\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":2,\"target\":72,\"contacted\":32,\"enrolled\":32,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management2\",\"provider\":\"Al Ain\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":4,\"target\":31,\"contacted\":9,\"enrolled\":9,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1208.4,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management2\",\"provider\":\"Al Ain\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-8\",\"booked\":2,\"target\":15,\"contacted\":7,\"enrolled\":7,\"attended\":2,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":2343.8,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management2\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-3\",\"booked\":3,\"target\":12,\"contacted\":5,\"enrolled\":5,\"attended\":3,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":4635.139999999999,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management2\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":31,\"target\":139,\"contacted\":55,\"enrolled\":55,\"attended\":19,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":27292.99,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management2\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":603,\"target\":3611,\"contacted\":1532,\"enrolled\":1532,\"attended\":396,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":601692.97,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management2\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-8\",\"booked\":625,\"target\":3858,\"contacted\":1641,\"enrolled\":1641,\"attended\":449,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":657446.5799999998,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management2\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":11,\"target\":81,\"contacted\":32,\"enrolled\":32,\"attended\":5,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":5658.6,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management2\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":99,\"target\":681,\"contacted\":360,\"enrolled\":360,\"attended\":42,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":51517.54,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management2\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-8\",\"booked\":null,\"target\":1,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management2\",\"provider\":\"STMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-4\",\"booked\":1,\"target\":2,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management2\",\"provider\":\"STMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":74,\"target\":441,\"contacted\":232,\"enrolled\":232,\"attended\":57,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":79774.46999999996,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management2\",\"provider\":\"STMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":14,\"target\":124,\"contacted\":66,\"enrolled\":66,\"attended\":8,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":13045.28,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management2\",\"provider\":\"STMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-8\",\"booked\":7,\"target\":57,\"contacted\":18,\"enrolled\":18,\"attended\":5,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":6304,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management2\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-4\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management2\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":37,\"target\":288,\"contacted\":164,\"enrolled\":164,\"attended\":27,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":44680.500000000015,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management2\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":10,\"target\":89,\"contacted\":48,\"enrolled\":48,\"attended\":8,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":12983.30999999999,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management2\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-8\",\"booked\":4,\"target\":60,\"contacted\":22,\"enrolled\":22,\"attended\":2,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1810.5,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Al Ain\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":1,\"target\":22,\"contacted\":11,\"enrolled\":11,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":397.6,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Al Ain\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":6,\"target\":73,\"contacted\":32,\"enrolled\":32,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":420,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Al Ain\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-2\",\"booked\":2,\"target\":25,\"contacted\":12,\"enrolled\":12,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Al Ain\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-4\",\"booked\":3,\"target\":15,\"contacted\":9,\"enrolled\":9,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Al Dhafra\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":22,\"target\":148,\"contacted\":60,\"enrolled\":60,\"attended\":5,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":2343.3,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Al Dhafra\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":74,\"target\":505,\"contacted\":253,\"enrolled\":253,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Al Dhafra\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-2\",\"booked\":25,\"target\":184,\"contacted\":80,\"enrolled\":80,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Al Dhafra\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-3\",\"booked\":null,\"target\":5,\"contacted\":2,\"enrolled\":2,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Al Dhafra\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-4\",\"booked\":11,\"target\":66,\"contacted\":36,\"enrolled\":36,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Al Rahba\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":5,\"target\":42,\"contacted\":23,\"enrolled\":23,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":978,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Al Rahba\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":17,\"target\":172,\"contacted\":82,\"enrolled\":82,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Al Rahba\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-2\",\"booked\":2,\"target\":65,\"contacted\":26,\"enrolled\":26,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Al Rahba\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-4\",\"booked\":null,\"target\":20,\"contacted\":5,\"enrolled\":5,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Corniche\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":2,\"target\":31,\"contacted\":10,\"enrolled\":10,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Corniche\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":30,\"target\":225,\"contacted\":111,\"enrolled\":111,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Corniche\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-2\",\"booked\":4,\"target\":26,\"contacted\":17,\"enrolled\":17,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Corniche\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-3\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Corniche\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-4\",\"booked\":2,\"target\":3,\"contacted\":2,\"enrolled\":2,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Other\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":null,\"target\":1,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Other\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-2\",\"booked\":null,\"target\":4,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Other\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-4\",\"booked\":null,\"target\":2,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Salma\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":194,\"target\":1201,\"contacted\":551,\"enrolled\":551,\"attended\":42,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":28305.099999999995,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":580,\"target\":3895,\"contacted\":1906,\"enrolled\":1906,\"attended\":19,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":19734.11,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-2\",\"booked\":191,\"target\":1555,\"contacted\":685,\"enrolled\":685,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-3\",\"booked\":8,\"target\":82,\"contacted\":40,\"enrolled\":40,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-4\",\"booked\":71,\"target\":538,\"contacted\":236,\"enrolled\":236,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":23,\"target\":124,\"contacted\":65,\"enrolled\":65,\"attended\":5,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":3944.4,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":41,\"target\":360,\"contacted\":175,\"enrolled\":175,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-2\",\"booked\":10,\"target\":173,\"contacted\":66,\"enrolled\":66,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-3\",\"booked\":null,\"target\":8,\"contacted\":4,\"enrolled\":4,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-4\",\"booked\":4,\"target\":47,\"contacted\":21,\"enrolled\":21,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"SSMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":52,\"target\":257,\"contacted\":133,\"enrolled\":133,\"attended\":5,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":3298.4,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"SSMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":129,\"target\":865,\"contacted\":442,\"enrolled\":442,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"SSMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-2\",\"booked\":68,\"target\":409,\"contacted\":206,\"enrolled\":206,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"SSMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-3\",\"booked\":3,\"target\":20,\"contacted\":12,\"enrolled\":12,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"SSMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-4\",\"booked\":23,\"target\":131,\"contacted\":63,\"enrolled\":63,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"STMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":21,\"target\":98,\"contacted\":55,\"enrolled\":55,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":392,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"STMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":40,\"target\":332,\"contacted\":169,\"enrolled\":169,\"attended\":2,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1924.7,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"STMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-2\",\"booked\":25,\"target\":142,\"contacted\":72,\"enrolled\":72,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"STMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-3\",\"booked\":null,\"target\":7,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"STMC\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-4\",\"booked\":10,\"target\":48,\"contacted\":30,\"enrolled\":30,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":12,\"target\":89,\"contacted\":38,\"enrolled\":38,\"attended\":3,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":2178,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":46,\"target\":386,\"contacted\":209,\"enrolled\":209,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-2\",\"booked\":8,\"target\":119,\"contacted\":58,\"enrolled\":58,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-3\",\"booked\":null,\"target\":3,\"contacted\":2,\"enrolled\":2,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"HVM Weight Management3\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"HVM Weight Management\",\"condition\":\"HVM Weight Management\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2026-4\",\"booked\":5,\"target\":38,\"contacted\":21,\"enrolled\":21,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Abu Dhabi\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":264,\"target\":2634,\"contacted\":1326,\"enrolled\":1326,\"attended\":123,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":345136.42000000004,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Abu Dhabi\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":280,\"target\":2796,\"contacted\":1441,\"enrolled\":1441,\"attended\":124,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":256755.60000000012,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Al Ain\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":22,\"target\":263,\"contacted\":106,\"enrolled\":106,\"attended\":12,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":70484.06,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Al Ain\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":26,\"target\":335,\"contacted\":162,\"enrolled\":162,\"attended\":12,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":24815.799999999992,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Al Ain\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":24,\"target\":371,\"contacted\":178,\"enrolled\":178,\"attended\":10,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":30155.59999999999,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Al Ain\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":1,\"target\":1709,\"contacted\":9,\"enrolled\":9,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":4539.4,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Al Ain\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-8\",\"booked\":13,\"target\":103,\"contacted\":43,\"enrolled\":43,\"attended\":10,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":53844.68,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Al Ain\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":86,\"target\":713,\"contacted\":404,\"enrolled\":404,\"attended\":62,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":463717.83,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Al Ain\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":7,\"target\":92,\"contacted\":38,\"enrolled\":38,\"attended\":2,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1783.6,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Al Dhafra\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":23,\"target\":230,\"contacted\":107,\"enrolled\":107,\"attended\":9,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":35590.24,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Al Dhafra\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":12,\"target\":225,\"contacted\":102,\"enrolled\":102,\"attended\":5,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":8152.3,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Al Dhafra\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":16,\"target\":214,\"contacted\":94,\"enrolled\":94,\"attended\":3,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1541.89,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Al Dhafra\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":1,\"target\":150,\"contacted\":17,\"enrolled\":17,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":266,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Al Dhafra\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-8\",\"booked\":2,\"target\":17,\"contacted\":9,\"enrolled\":9,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":3548.2,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Al Dhafra\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":9,\"target\":96,\"contacted\":56,\"enrolled\":56,\"attended\":8,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":9056.6,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Al Dhafra\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":3,\"target\":88,\"contacted\":37,\"enrolled\":37,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1283.5,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Al Rahba\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":15,\"target\":124,\"contacted\":49,\"enrolled\":49,\"attended\":9,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":12627.06,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Al Rahba\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":3,\"target\":39,\"contacted\":15,\"enrolled\":15,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":105,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Al Rahba\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":1,\"target\":27,\"contacted\":15,\"enrolled\":15,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Al Rahba\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":2,\"target\":72,\"contacted\":6,\"enrolled\":6,\"attended\":2,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":2846.4,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Al Rahba\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-8\",\"booked\":2,\"target\":14,\"contacted\":3,\"enrolled\":3,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":47021.7,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Al Rahba\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":3,\"target\":34,\"contacted\":15,\"enrolled\":15,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":3154.2,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Al Rahba\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":6,\"target\":64,\"contacted\":30,\"enrolled\":30,\"attended\":4,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1850.6,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Corniche\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":8,\"target\":102,\"contacted\":44,\"enrolled\":44,\"attended\":3,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":9276,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Corniche\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":4,\"target\":35,\"contacted\":20,\"enrolled\":20,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1196.5,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Corniche\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":3,\"target\":31,\"contacted\":14,\"enrolled\":14,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Corniche\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":null,\"target\":83,\"contacted\":7,\"enrolled\":7,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Corniche\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-8\",\"booked\":7,\"target\":24,\"contacted\":12,\"enrolled\":12,\"attended\":6,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":12002.58,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Corniche\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":9,\"target\":63,\"contacted\":34,\"enrolled\":34,\"attended\":6,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":11521.999999999987,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Corniche\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":5,\"target\":55,\"contacted\":23,\"enrolled\":23,\"attended\":2,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1658,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Fujariah\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":null,\"target\":10,\"contacted\":4,\"enrolled\":4,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Fujariah\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":null,\"target\":3,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Other\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":15,\"target\":84,\"contacted\":33,\"enrolled\":33,\"attended\":10,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":92270.07,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Other\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":4,\"target\":27,\"contacted\":14,\"enrolled\":14,\"attended\":2,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":4095.5,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Other\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":1,\"target\":11,\"contacted\":4,\"enrolled\":4,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":268,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Other\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":1,\"target\":40,\"contacted\":2,\"enrolled\":2,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":7326.1,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Other\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-8\",\"booked\":3,\"target\":21,\"contacted\":12,\"enrolled\":12,\"attended\":3,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":14463.499999999902,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Other\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":6,\"target\":64,\"contacted\":34,\"enrolled\":34,\"attended\":5,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":28791.499999999993,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Other\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":1,\"target\":39,\"contacted\":16,\"enrolled\":16,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Salma\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-8\",\"booked\":null,\"target\":1,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":189,\"target\":1694,\"contacted\":816,\"enrolled\":816,\"attended\":102,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":363287.6899999998,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":56,\"target\":554,\"contacted\":288,\"enrolled\":288,\"attended\":31,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":67947.44999999998,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":44,\"target\":496,\"contacted\":246,\"enrolled\":246,\"attended\":21,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":30500.699999999997,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":31,\"target\":3451,\"contacted\":140,\"enrolled\":140,\"attended\":21,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":47213.899999999994,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-8\",\"booked\":102,\"target\":803,\"contacted\":411,\"enrolled\":411,\"attended\":65,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":382028.44,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":346,\"target\":3351,\"contacted\":2169,\"enrolled\":2169,\"attended\":234,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":799745.9799999999,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":83,\"target\":915,\"contacted\":463,\"enrolled\":463,\"attended\":33,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":33493.97,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":37,\"target\":350,\"contacted\":128,\"enrolled\":128,\"attended\":26,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":101712.86,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":13,\"target\":81,\"contacted\":42,\"enrolled\":42,\"attended\":7,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":40699.5,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":9,\"target\":90,\"contacted\":34,\"enrolled\":34,\"attended\":4,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":5527.8,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":3,\"target\":251,\"contacted\":16,\"enrolled\":16,\"attended\":3,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":18660.18,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-8\",\"booked\":3,\"target\":39,\"contacted\":19,\"enrolled\":19,\"attended\":3,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":6272.4,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":17,\"target\":135,\"contacted\":77,\"enrolled\":77,\"attended\":15,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":124084.45,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":8,\"target\":143,\"contacted\":64,\"enrolled\":64,\"attended\":3,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":9697,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"SSMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":67,\"target\":631,\"contacted\":271,\"enrolled\":271,\"attended\":30,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":91383.69999999995,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"SSMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":20,\"target\":198,\"contacted\":88,\"enrolled\":88,\"attended\":7,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":19822,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"SSMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":13,\"target\":167,\"contacted\":80,\"enrolled\":80,\"attended\":4,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":6935.1,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"SSMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":9,\"target\":438,\"contacted\":37,\"enrolled\":37,\"attended\":3,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":6600.299999999999,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"SSMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-8\",\"booked\":16,\"target\":85,\"contacted\":43,\"enrolled\":43,\"attended\":11,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":84895.13,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"SSMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":45,\"target\":293,\"contacted\":152,\"enrolled\":152,\"attended\":28,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":67099.04000000001,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"SSMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":32,\"target\":306,\"contacted\":133,\"enrolled\":133,\"attended\":12,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":21306.3,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":14,\"target\":237,\"contacted\":91,\"enrolled\":91,\"attended\":4,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":12286.4,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":5,\"target\":63,\"contacted\":37,\"enrolled\":37,\"attended\":3,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":29959.5,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":3,\"target\":56,\"contacted\":26,\"enrolled\":26,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":255.8,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":null,\"target\":1176,\"contacted\":10,\"enrolled\":10,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-8\",\"booked\":39,\"target\":268,\"contacted\":129,\"enrolled\":129,\"attended\":26,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":224635.2999999999,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":91,\"target\":785,\"contacted\":425,\"enrolled\":425,\"attended\":50,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":168604.31000000003,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS1\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":9,\"target\":93,\"contacted\":38,\"enrolled\":38,\"attended\":5,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":3228.3,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"Al Ain\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":3,\"target\":87,\"contacted\":39,\"enrolled\":39,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"Al Ain\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-2\",\"booked\":7,\"target\":97,\"contacted\":49,\"enrolled\":49,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"Al Ain\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-3\",\"booked\":1,\"target\":20,\"contacted\":12,\"enrolled\":12,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"Al Ain\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-4\",\"booked\":1,\"target\":36,\"contacted\":16,\"enrolled\":16,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"Al Dhafra\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":3,\"target\":94,\"contacted\":35,\"enrolled\":35,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"Al Dhafra\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-2\",\"booked\":2,\"target\":81,\"contacted\":41,\"enrolled\":41,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"Al Dhafra\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-3\",\"booked\":1,\"target\":16,\"contacted\":4,\"enrolled\":4,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"Al Dhafra\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-4\",\"booked\":null,\"target\":28,\"contacted\":12,\"enrolled\":12,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"Al Rahba\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":6,\"target\":64,\"contacted\":32,\"enrolled\":32,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"Al Rahba\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-2\",\"booked\":3,\"target\":53,\"contacted\":33,\"enrolled\":33,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"Al Rahba\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-3\",\"booked\":null,\"target\":14,\"contacted\":9,\"enrolled\":9,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"Al Rahba\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-4\",\"booked\":1,\"target\":26,\"contacted\":11,\"enrolled\":11,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"Corniche\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":6,\"target\":44,\"contacted\":21,\"enrolled\":21,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":268,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"Corniche\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-2\",\"booked\":2,\"target\":26,\"contacted\":14,\"enrolled\":14,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"Corniche\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-3\",\"booked\":null,\"target\":12,\"contacted\":3,\"enrolled\":3,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"Corniche\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-4\",\"booked\":1,\"target\":16,\"contacted\":6,\"enrolled\":6,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"Other\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":null,\"target\":11,\"contacted\":2,\"enrolled\":2,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":63,\"target\":797,\"contacted\":438,\"enrolled\":438,\"attended\":6,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":2208,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-2\",\"booked\":38,\"target\":655,\"contacted\":467,\"enrolled\":467,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-3\",\"booked\":2,\"target\":127,\"contacted\":77,\"enrolled\":77,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-4\",\"booked\":13,\"target\":311,\"contacted\":209,\"enrolled\":209,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":10,\"target\":123,\"contacted\":47,\"enrolled\":47,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-2\",\"booked\":3,\"target\":76,\"contacted\":36,\"enrolled\":36,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-3\",\"booked\":1,\"target\":24,\"contacted\":4,\"enrolled\":4,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-4\",\"booked\":4,\"target\":35,\"contacted\":18,\"enrolled\":18,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"SSMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":26,\"target\":262,\"contacted\":137,\"enrolled\":137,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1206,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"SSMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-2\",\"booked\":13,\"target\":190,\"contacted\":115,\"enrolled\":115,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"SSMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-3\",\"booked\":1,\"target\":45,\"contacted\":20,\"enrolled\":20,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"SSMC\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-4\",\"booked\":2,\"target\":72,\"contacted\":29,\"enrolled\":29,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-1\",\"booked\":4,\"target\":95,\"contacted\":42,\"enrolled\":42,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-2\",\"booked\":5,\"target\":64,\"contacted\":37,\"enrolled\":37,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-3\",\"booked\":null,\"target\":14,\"contacted\":4,\"enrolled\":4,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"IFHAS2\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"IFHAS\",\"condition\":\"IFHAS\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2026-4\",\"booked\":2,\"target\":30,\"contacted\":11,\"enrolled\":11,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_C_nFR1\",\"provider\":\"SEHA Clinics\",\"stage\":\"Build\",\"campaignName\":\"T2D_A_HM_C_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-1\",\"booked\":28,\"target\":122,\"contacted\":88,\"enrolled\":88,\"attended\":25,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":108037.87000000002,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_C_nFR1\",\"provider\":\"SEHA Kidney\",\"stage\":\"Build\",\"campaignName\":\"T2D_A_HM_C_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-1\",\"booked\":60,\"target\":91,\"contacted\":70,\"enrolled\":70,\"attended\":49,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":339702.8199999996,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_C_nFR1\",\"provider\":\"SEHA Kidney\",\"stage\":\"Build\",\"campaignName\":\"T2D_A_HM_C_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":null,\"target\":4,\"contacted\":4,\"enrolled\":4,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_C_nFR1\",\"provider\":\"SKMC\",\"stage\":\"Build\",\"campaignName\":\"T2D_A_HM_C_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-1\",\"booked\":121,\"target\":381,\"contacted\":244,\"enrolled\":244,\"attended\":80,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":383048.18999999994,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_C_nFR1\",\"provider\":\"SKMC\",\"stage\":\"Build\",\"campaignName\":\"T2D_A_HM_C_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":1,\"target\":15,\"contacted\":12,\"enrolled\":12,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_C_nFR1\",\"provider\":\"SKMC\",\"stage\":\"Build\",\"campaignName\":\"T2D_A_HM_C_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":1,\"target\":6,\"contacted\":2,\"enrolled\":2,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_C_nFR1\",\"provider\":\"Tawam\",\"stage\":\"Build\",\"campaignName\":\"T2D_A_HM_C_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-1\",\"booked\":361,\"target\":709,\"contacted\":584,\"enrolled\":584,\"attended\":285,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1020110.0600000008,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_C_nFR1\",\"provider\":\"Tawam\",\"stage\":\"Build\",\"campaignName\":\"T2D_A_HM_C_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":3,\"target\":12,\"contacted\":11,\"enrolled\":11,\"attended\":3,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":6370.6,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_C_nFR1\",\"provider\":\"Tawam\",\"stage\":\"Build\",\"campaignName\":\"T2D_A_HM_C_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":1,\"target\":10,\"contacted\":2,\"enrolled\":2,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":416,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR1\",\"provider\":\"SEHA Clinics\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-1\",\"booked\":3,\"target\":11,\"contacted\":6,\"enrolled\":6,\"attended\":2,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":9142.2,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR1\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-1\",\"booked\":1,\"target\":10,\"contacted\":6,\"enrolled\":6,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR1\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":null,\"target\":1,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR1\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-1\",\"booked\":9,\"target\":52,\"contacted\":30,\"enrolled\":30,\"attended\":3,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":8455.4,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR1\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR1\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":null,\"target\":1,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR1\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":3,\"target\":28,\"contacted\":24,\"enrolled\":27,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1343,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR1\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-8\",\"booked\":33,\"target\":394,\"contacted\":259,\"enrolled\":277,\"attended\":17,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":28443.14,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR1\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-1\",\"booked\":14,\"target\":89,\"contacted\":73,\"enrolled\":73,\"attended\":6,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":15193.19,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR1\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":1,\"target\":6,\"contacted\":4,\"enrolled\":4,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR1\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":null,\"target\":4,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":1,\"target\":6,\"contacted\":4,\"enrolled\":4,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":628,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":1,\"target\":30,\"contacted\":19,\"enrolled\":19,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":1,\"target\":54,\"contacted\":20,\"enrolled\":20,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":120,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":1,\"target\":19,\"contacted\":13,\"enrolled\":13,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":4780,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":32,\"target\":849,\"contacted\":396,\"enrolled\":396,\"attended\":19,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":18940.65,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":19,\"target\":546,\"contacted\":227,\"enrolled\":227,\"attended\":7,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":11846.7,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":6,\"target\":79,\"contacted\":60,\"enrolled\":60,\"attended\":5,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":9240.3,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":4,\"target\":55,\"contacted\":24,\"enrolled\":24,\"attended\":2,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":595.2,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":3,\"target\":19,\"contacted\":14,\"enrolled\":14,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1201,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":null,\"target\":16,\"contacted\":8,\"enrolled\":8,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"SEHA Clinics\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":null,\"target\":3,\"contacted\":2,\"enrolled\":2,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":7,\"target\":41,\"contacted\":36,\"enrolled\":36,\"attended\":7,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":30417.45999999999,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":1,\"target\":7,\"contacted\":5,\"enrolled\":5,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":5814.8,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":null,\"target\":3,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":14,\"target\":182,\"contacted\":149,\"enrolled\":149,\"attended\":9,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":30060.5,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":3,\"target\":59,\"contacted\":22,\"enrolled\":22,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":730,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":null,\"target\":1,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":1,\"target\":14,\"contacted\":14,\"enrolled\":14,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":470.8,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":16,\"target\":146,\"contacted\":113,\"enrolled\":113,\"attended\":9,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":10921.099999999988,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":1,\"target\":123,\"contacted\":54,\"enrolled\":54,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":650,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":6,\"target\":47,\"contacted\":41,\"enrolled\":41,\"attended\":2,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":2900.8,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":36,\"target\":425,\"contacted\":295,\"enrolled\":295,\"attended\":20,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":39956.569999999985,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR3\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":10,\"target\":353,\"contacted\":148,\"enrolled\":148,\"attended\":8,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":9814.65,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":null,\"target\":28,\"contacted\":16,\"enrolled\":16,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":null,\"target\":7,\"contacted\":5,\"enrolled\":5,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":null,\"target\":9,\"contacted\":7,\"enrolled\":7,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":2,\"target\":137,\"contacted\":81,\"enrolled\":81,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":551.8,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":1,\"target\":37,\"contacted\":18,\"enrolled\":18,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":null,\"target\":8,\"contacted\":3,\"enrolled\":3,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":null,\"target\":19,\"contacted\":9,\"enrolled\":9,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":null,\"target\":43,\"contacted\":18,\"enrolled\":18,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":null,\"target\":7,\"contacted\":3,\"enrolled\":3,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":null,\"target\":2,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":null,\"target\":17,\"contacted\":9,\"enrolled\":9,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":1,\"target\":14,\"contacted\":8,\"enrolled\":8,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1261,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":null,\"target\":4,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":null,\"target\":3,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Other\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":null,\"target\":6,\"contacted\":2,\"enrolled\":2,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Other\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":null,\"target\":4,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Sakina\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Salma\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":null,\"target\":3,\"contacted\":2,\"enrolled\":2,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Salma\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":null,\"target\":2,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"SEHA Clinics\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":69,\"target\":2013,\"contacted\":1105,\"enrolled\":1105,\"attended\":49,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":90358.29,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"SEHA Clinics\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":30,\"target\":686,\"contacted\":330,\"enrolled\":330,\"attended\":17,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":31422.699999999993,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"SEHA Clinics\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":4,\"target\":108,\"contacted\":54,\"enrolled\":54,\"attended\":2,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":2202.4,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"SEHA Clinics\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":12,\"target\":306,\"contacted\":174,\"enrolled\":174,\"attended\":8,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":14981.319999999989,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":1,\"target\":22,\"contacted\":11,\"enrolled\":11,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":3668,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":null,\"target\":22,\"contacted\":15,\"enrolled\":15,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":3,\"target\":199,\"contacted\":115,\"enrolled\":115,\"attended\":2,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":4314.4,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":null,\"target\":50,\"contacted\":33,\"enrolled\":33,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":1,\"target\":5,\"contacted\":2,\"enrolled\":2,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":null,\"target\":32,\"contacted\":22,\"enrolled\":22,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":12,\"target\":524,\"contacted\":274,\"enrolled\":274,\"attended\":6,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":7964.1,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":2,\"target\":163,\"contacted\":70,\"enrolled\":70,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1025,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":null,\"target\":29,\"contacted\":13,\"enrolled\":13,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":11,\"target\":85,\"contacted\":47,\"enrolled\":47,\"attended\":7,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":6963,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":6,\"target\":198,\"contacted\":103,\"enrolled\":103,\"attended\":4,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":6969.799999999999,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":null,\"target\":63,\"contacted\":34,\"enrolled\":34,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":null,\"target\":13,\"contacted\":4,\"enrolled\":4,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":null,\"target\":35,\"contacted\":22,\"enrolled\":22,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":4,\"target\":201,\"contacted\":110,\"enrolled\":110,\"attended\":3,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":4941.9,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":4,\"target\":57,\"contacted\":27,\"enrolled\":27,\"attended\":4,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":6765.8,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":null,\"target\":8,\"contacted\":2,\"enrolled\":2,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_D_nFR4\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":null,\"target\":28,\"contacted\":17,\"enrolled\":17,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_N_nFR1\",\"provider\":\"SEHA Clinics\",\"stage\":\"Acquire\",\"campaignName\":\"T2D_A_HM_N_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-1\",\"booked\":null,\"target\":3,\"contacted\":2,\"enrolled\":2,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_N_nFR1\",\"provider\":\"SEHA Kidney\",\"stage\":\"Acquire\",\"campaignName\":\"T2D_A_HM_N_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-1\",\"booked\":1,\"target\":2,\"contacted\":2,\"enrolled\":2,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":8559.2,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_N_nFR1\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"T2D_A_HM_N_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-1\",\"booked\":1,\"target\":9,\"contacted\":6,\"enrolled\":6,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":840,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_N_nFR1\",\"provider\":\"SKMC\",\"stage\":\"Acquire\",\"campaignName\":\"T2D_A_HM_N_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":null,\"target\":1,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_N_nFR1\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"T2D_A_HM_N_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-1\",\"booked\":23,\"target\":39,\"contacted\":32,\"enrolled\":32,\"attended\":17,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":53046.61999999998,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_N_nFR1\",\"provider\":\"Tawam\",\"stage\":\"Acquire\",\"campaignName\":\"T2D_A_HM_N_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR1\",\"provider\":\"SEHA Clinics\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-1\",\"booked\":1,\"target\":6,\"contacted\":4,\"enrolled\":4,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR1\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-1\",\"booked\":null,\"target\":6,\"contacted\":2,\"enrolled\":2,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR1\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-1\",\"booked\":6,\"target\":37,\"contacted\":13,\"enrolled\":13,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR1\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR1\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":1,\"target\":13,\"contacted\":10,\"enrolled\":10,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR1\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-8\",\"booked\":7,\"target\":120,\"contacted\":81,\"enrolled\":84,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1431,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR1\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-1\",\"booked\":10,\"target\":76,\"contacted\":53,\"enrolled\":53,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1980.22,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR3\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":null,\"target\":2,\"contacted\":2,\"enrolled\":2,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR3\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":1,\"target\":22,\"contacted\":12,\"enrolled\":12,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR3\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":1,\"target\":32,\"contacted\":10,\"enrolled\":10,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR3\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":12,\"target\":354,\"contacted\":145,\"enrolled\":145,\"attended\":3,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1431,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR3\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":3,\"target\":320,\"contacted\":122,\"enrolled\":122,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":568.8,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR3\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":4,\"target\":40,\"contacted\":23,\"enrolled\":23,\"attended\":3,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":3929,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR3\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":null,\"target\":25,\"contacted\":11,\"enrolled\":11,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR3\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":2,\"target\":26,\"contacted\":18,\"enrolled\":18,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":711,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR3\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":null,\"target\":10,\"contacted\":2,\"enrolled\":2,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR3\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":2,\"target\":23,\"contacted\":20,\"enrolled\":20,\"attended\":2,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":29557.77,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR3\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":null,\"target\":2,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR3\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR3\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":6,\"target\":96,\"contacted\":67,\"enrolled\":67,\"attended\":2,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":2905.2,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR3\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":1,\"target\":37,\"contacted\":18,\"enrolled\":18,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1931.54,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR3\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":1,\"target\":5,\"contacted\":4,\"enrolled\":4,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR3\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":5,\"target\":36,\"contacted\":27,\"enrolled\":27,\"attended\":5,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":9370.29999999999,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR3\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":1,\"target\":26,\"contacted\":11,\"enrolled\":11,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR3\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":4,\"target\":30,\"contacted\":29,\"enrolled\":29,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR3\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":21,\"target\":268,\"contacted\":172,\"enrolled\":172,\"attended\":11,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":10053.93,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR3\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":8,\"target\":278,\"contacted\":114,\"enrolled\":114,\"attended\":5,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":6024.610000000001,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":2,\"target\":23,\"contacted\":11,\"enrolled\":11,\"attended\":2,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":22657.6,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":null,\"target\":5,\"contacted\":4,\"enrolled\":4,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":null,\"target\":4,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":3,\"target\":46,\"contacted\":21,\"enrolled\":21,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":397.6,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":null,\"target\":15,\"contacted\":8,\"enrolled\":8,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":null,\"target\":2,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":null,\"target\":11,\"contacted\":5,\"enrolled\":5,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":null,\"target\":9,\"contacted\":4,\"enrolled\":4,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":null,\"target\":3,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":null,\"target\":2,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":1,\"target\":3,\"contacted\":2,\"enrolled\":2,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":null,\"target\":1,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"Other\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":null,\"target\":14,\"contacted\":6,\"enrolled\":6,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"Other\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":null,\"target\":4,\"contacted\":2,\"enrolled\":2,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"Salma\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":null,\"target\":3,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"Salma\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":null,\"target\":3,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"SEHA Clinics\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":43,\"target\":1487,\"contacted\":769,\"enrolled\":769,\"attended\":25,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":48121.82999999999,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"SEHA Clinics\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":12,\"target\":500,\"contacted\":246,\"enrolled\":246,\"attended\":6,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":14101.9,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"SEHA Clinics\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":2,\"target\":74,\"contacted\":39,\"enrolled\":39,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1273.4,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"SEHA Clinics\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":7,\"target\":228,\"contacted\":124,\"enrolled\":124,\"attended\":5,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":7107.5,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":1,\"target\":29,\"contacted\":19,\"enrolled\":19,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":null,\"target\":8,\"contacted\":4,\"enrolled\":4,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":null,\"target\":3,\"contacted\":2,\"enrolled\":2,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":2,\"target\":87,\"contacted\":55,\"enrolled\":55,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":null,\"target\":25,\"contacted\":16,\"enrolled\":16,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":null,\"target\":7,\"contacted\":3,\"enrolled\":3,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":2,\"target\":20,\"contacted\":13,\"enrolled\":13,\"attended\":2,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":3334.3,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":8,\"target\":310,\"contacted\":167,\"enrolled\":167,\"attended\":4,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":6665.6,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":2,\"target\":90,\"contacted\":47,\"enrolled\":47,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1629.1,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":1,\"target\":17,\"contacted\":7,\"enrolled\":7,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":1,\"target\":47,\"contacted\":27,\"enrolled\":27,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1520.5,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":null,\"target\":20,\"contacted\":15,\"enrolled\":15,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":null,\"target\":6,\"contacted\":3,\"enrolled\":3,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-10\",\"booked\":null,\"target\":136,\"contacted\":75,\"enrolled\":75,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-11\",\"booked\":null,\"target\":44,\"contacted\":21,\"enrolled\":21,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-12\",\"booked\":null,\"target\":7,\"contacted\":3,\"enrolled\":3,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_HM_S_nFR4\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_HM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":4,\"status\":\"Live\",\"period\":\"2025-9\",\"booked\":null,\"target\":26,\"contacted\":19,\"enrolled\":19,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR1\",\"provider\":\"Other\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-1\",\"booked\":224,\"target\":733,\"contacted\":439,\"enrolled\":439,\"attended\":142,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":661030.29,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR1\",\"provider\":\"Other\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":1,\"target\":26,\"contacted\":16,\"enrolled\":16,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":4390.4,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR1\",\"provider\":\"Other\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":null,\"target\":13,\"contacted\":6,\"enrolled\":6,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR1\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-1\",\"booked\":null,\"target\":2,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR1\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":12,\"target\":117,\"contacted\":77,\"enrolled\":91,\"attended\":5,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":8064.6,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR1\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-8\",\"booked\":70,\"target\":634,\"contacted\":424,\"enrolled\":437,\"attended\":30,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":62471.7,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-3\",\"booked\":11,\"target\":68,\"contacted\":68,\"enrolled\":68,\"attended\":7,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":15198.100000000002,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-4\",\"booked\":21,\"target\":82,\"contacted\":71,\"enrolled\":71,\"attended\":11,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":13616.3,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":4,\"target\":75,\"contacted\":62,\"enrolled\":62,\"attended\":2,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1883,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":1,\"target\":21,\"contacted\":10,\"enrolled\":10,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":3816,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":1,\"target\":26,\"contacted\":7,\"enrolled\":7,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-3\",\"booked\":15,\"target\":36,\"contacted\":34,\"enrolled\":34,\"attended\":12,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":27399.29999999999,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-4\",\"booked\":138,\"target\":700,\"contacted\":623,\"enrolled\":623,\"attended\":65,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":86673.51999999997,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":24,\"target\":208,\"contacted\":176,\"enrolled\":176,\"attended\":14,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":25893.2,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":4,\"target\":237,\"contacted\":74,\"enrolled\":74,\"attended\":2,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":845.06,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":2,\"target\":120,\"contacted\":27,\"enrolled\":27,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-3\",\"booked\":3,\"target\":33,\"contacted\":33,\"enrolled\":33,\"attended\":3,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":6293.6,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-4\",\"booked\":2,\"target\":31,\"contacted\":23,\"enrolled\":23,\"attended\":2,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":263,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":1,\"target\":23,\"contacted\":20,\"enrolled\":20,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":null,\"target\":3,\"contacted\":2,\"enrolled\":2,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":null,\"target\":10,\"contacted\":3,\"enrolled\":3,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-3\",\"booked\":6,\"target\":36,\"contacted\":36,\"enrolled\":36,\"attended\":3,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":8221.9,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-4\",\"booked\":3,\"target\":55,\"contacted\":49,\"enrolled\":49,\"attended\":2,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":9583.68,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":5,\"target\":28,\"contacted\":26,\"enrolled\":26,\"attended\":5,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":8762.66,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":null,\"target\":15,\"contacted\":4,\"enrolled\":4,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":null,\"target\":12,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"SEHA Clinics\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-3\",\"booked\":60,\"target\":411,\"contacted\":397,\"enrolled\":397,\"attended\":54,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":258501.38999999984,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"SEHA Clinics\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-4\",\"booked\":52,\"target\":271,\"contacted\":212,\"enrolled\":212,\"attended\":48,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":94028.35999999991,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"SEHA Clinics\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":24,\"target\":314,\"contacted\":248,\"enrolled\":248,\"attended\":19,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":79076.49999999999,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"SEHA Clinics\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":null,\"target\":2,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"SEHA Clinics\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-3\",\"booked\":1,\"target\":2,\"contacted\":2,\"enrolled\":2,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":6349.6,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-4\",\"booked\":11,\"target\":101,\"contacted\":99,\"enrolled\":99,\"attended\":8,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":24589.3,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":5,\"target\":24,\"contacted\":19,\"enrolled\":19,\"attended\":5,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":12186.4,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":null,\"target\":1,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"SKFH\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-4\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-2\",\"booked\":12,\"target\":66,\"contacted\":66,\"enrolled\":66,\"attended\":7,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":34999.4,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-3\",\"booked\":20,\"target\":148,\"contacted\":148,\"enrolled\":148,\"attended\":15,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":41439.64999999998,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-4\",\"booked\":67,\"target\":516,\"contacted\":409,\"enrolled\":409,\"attended\":41,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":49988.07,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":22,\"target\":209,\"contacted\":169,\"enrolled\":169,\"attended\":16,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":72350.03,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":null,\"target\":9,\"contacted\":8,\"enrolled\":8,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":null,\"target\":10,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-3\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-4\",\"booked\":null,\"target\":1,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-3\",\"booked\":25,\"target\":125,\"contacted\":125,\"enrolled\":125,\"attended\":20,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":69725.83999999997,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-4\",\"booked\":4,\"target\":26,\"contacted\":25,\"enrolled\":25,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":3271.35,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":12,\"target\":107,\"contacted\":89,\"enrolled\":89,\"attended\":9,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":15927.89999999998,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":1,\"target\":9,\"contacted\":4,\"enrolled\":4,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":428.75,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":2,\"target\":9,\"contacted\":4,\"enrolled\":4,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":2671.7,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-2\",\"booked\":68,\"target\":346,\"contacted\":345,\"enrolled\":345,\"attended\":52,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":184209.85,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-3\",\"booked\":25,\"target\":123,\"contacted\":123,\"enrolled\":123,\"attended\":23,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":62657.07,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-4\",\"booked\":64,\"target\":264,\"contacted\":251,\"enrolled\":251,\"attended\":47,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":37821.73999999999,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":46,\"target\":397,\"contacted\":321,\"enrolled\":321,\"attended\":41,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":90131.48999999998,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":6,\"target\":117,\"contacted\":43,\"enrolled\":43,\"attended\":4,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":12364.1,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR2\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":1,\"target\":92,\"contacted\":30,\"enrolled\":30,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":1,\"target\":10,\"contacted\":9,\"enrolled\":9,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":6083.8,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":10,\"target\":76,\"contacted\":47,\"enrolled\":47,\"attended\":8,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":12778.49,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":2,\"target\":176,\"contacted\":70,\"enrolled\":70,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":891.6,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":1,\"target\":33,\"contacted\":20,\"enrolled\":20,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":2788.29999999999,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":55,\"target\":908,\"contacted\":488,\"enrolled\":488,\"attended\":34,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":41686.89999999999,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":19,\"target\":637,\"contacted\":266,\"enrolled\":266,\"attended\":8,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":8001.549999999999,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":1,\"target\":5,\"contacted\":5,\"enrolled\":5,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":669,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":11,\"target\":158,\"contacted\":91,\"enrolled\":91,\"attended\":7,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":11573.87,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":6,\"target\":130,\"contacted\":50,\"enrolled\":50,\"attended\":5,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":3233.3,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":null,\"target\":2,\"contacted\":2,\"enrolled\":2,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":12,\"target\":121,\"contacted\":89,\"enrolled\":89,\"attended\":7,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":8954,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":1,\"target\":76,\"contacted\":26,\"enrolled\":26,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"Salma\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":null,\"target\":2,\"contacted\":2,\"enrolled\":2,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":8,\"target\":66,\"contacted\":58,\"enrolled\":58,\"attended\":7,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":25411.299999999977,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":1,\"target\":26,\"contacted\":11,\"enrolled\":11,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":2,\"target\":58,\"contacted\":40,\"enrolled\":40,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1524.99999999999,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":38,\"target\":302,\"contacted\":250,\"enrolled\":250,\"attended\":20,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":41820.49999999999,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":7,\"target\":161,\"contacted\":61,\"enrolled\":61,\"attended\":5,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":13017.3,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":null,\"target\":1,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":5,\"target\":40,\"contacted\":35,\"enrolled\":35,\"attended\":4,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":11208.919999999998,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":19,\"target\":204,\"contacted\":139,\"enrolled\":139,\"attended\":15,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":22264.679999999997,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":8,\"target\":216,\"contacted\":103,\"enrolled\":103,\"attended\":6,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":11468.72,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":2,\"target\":57,\"contacted\":52,\"enrolled\":52,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1562,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":60,\"target\":596,\"contacted\":397,\"enrolled\":397,\"attended\":41,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":71983.26999999997,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_D_nFR3\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_D_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":12,\"target\":876,\"contacted\":399,\"enrolled\":399,\"attended\":5,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":10255.84,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR1\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":2,\"target\":41,\"contacted\":30,\"enrolled\":36,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1858,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR1\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":1,\"status\":\"Live\",\"period\":\"2025-8\",\"booked\":25,\"target\":274,\"contacted\":175,\"enrolled\":179,\"attended\":11,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":15905.9,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR2\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":null,\"target\":1,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR2\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-4\",\"booked\":null,\"target\":1,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR2\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":null,\"target\":1,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR2\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-3\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR2\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":null,\"target\":1,\"contacted\":0,\"enrolled\":0,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR2\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":2,\"status\":\"Live\",\"period\":\"2025-2\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":null,\"target\":3,\"contacted\":3,\"enrolled\":3,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":11,\"target\":85,\"contacted\":38,\"enrolled\":38,\"attended\":4,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":3953,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"Al Ain\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":5,\"target\":176,\"contacted\":64,\"enrolled\":64,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":266,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":21,\"target\":496,\"contacted\":269,\"enrolled\":269,\"attended\":12,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":13120.19999999999,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"Al Dhafra\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":8,\"target\":362,\"contacted\":173,\"enrolled\":173,\"attended\":3,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":1259.3,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":7,\"target\":92,\"contacted\":59,\"enrolled\":59,\"attended\":4,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":4004.54,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"Al Rahba\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":1,\"target\":94,\"contacted\":47,\"enrolled\":47,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":2755.9,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":8,\"target\":94,\"contacted\":71,\"enrolled\":71,\"attended\":2,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":4659.4,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"Corniche\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":2,\"target\":61,\"contacted\":25,\"enrolled\":25,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":5,\"target\":42,\"contacted\":39,\"enrolled\":39,\"attended\":4,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":20804.44,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"SEHA Kidney\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":null,\"target\":7,\"contacted\":3,\"enrolled\":3,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":2,\"target\":14,\"contacted\":13,\"enrolled\":13,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":3928,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":15,\"target\":222,\"contacted\":181,\"enrolled\":181,\"attended\":8,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":16848.6,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"SKMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":2,\"target\":96,\"contacted\":38,\"enrolled\":38,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":219,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"SSMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":null,\"target\":1,\"contacted\":1,\"enrolled\":1,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":null,\"target\":4,\"contacted\":4,\"enrolled\":4,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":12,\"target\":60,\"contacted\":47,\"enrolled\":47,\"attended\":4,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":5262.8,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"STMC\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":3,\"target\":43,\"contacted\":16,\"enrolled\":16,\"attended\":1,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":784,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-5\",\"booked\":1,\"target\":39,\"contacted\":37,\"enrolled\":37,\"attended\":\"\",\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":0,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-6\",\"booked\":58,\"target\":523,\"contacted\":350,\"enrolled\":350,\"attended\":38,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":64617.29,\"avgRevPatient\":null,\"costMember\":null},{\"campaignId\":\"T2D_A_nHM_S_nFR3\",\"provider\":\"Tawam\",\"stage\":\"Contain\",\"campaignName\":\"T2D_A_nHM_S_nFR\",\"condition\":\"Diabetes\",\"subCondition\":3,\"status\":\"Live\",\"period\":\"2025-7\",\"booked\":19,\"target\":920,\"contacted\":415,\"enrolled\":415,\"attended\":10,\"seenRate\":null,\"engagement\":null,\"conversion\":null,\"revenue\":21973.9,\"avgRevPatient\":null,\"costMember\":null}]");
}),
"[project]/components/hvm-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCampaignDetailsDataset",
    ()=>getCampaignDetailsDataset,
    "getCampaignDetailsFilterOptions",
    ()=>getCampaignDetailsFilterOptions,
    "getLifestageCampaignList",
    ()=>getLifestageCampaignList,
    "getLifestageConversionByCampaign",
    ()=>getLifestageConversionByCampaign,
    "getLifestageKpiCards",
    ()=>getLifestageKpiCards,
    "getLifestagePatientFlow",
    ()=>getLifestagePatientFlow,
    "getLifestagePeriodLabels",
    ()=>getLifestagePeriodLabels,
    "getLifestageProviderPerformance",
    ()=>getLifestageProviderPerformance,
    "getLifestageTopConditions",
    ()=>getLifestageTopConditions,
    "getLifestageTrendData",
    ()=>getLifestageTrendData,
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
    "getSubConditionChannelBreakdown",
    ()=>getSubConditionChannelBreakdown,
    "getSubConditionConversionSegments",
    ()=>getSubConditionConversionSegments,
    "getSubConditionDropoff",
    ()=>getSubConditionDropoff,
    "getSubConditionEntities",
    ()=>getSubConditionEntities,
    "getSubConditionFilterOptions",
    ()=>getSubConditionFilterOptions,
    "getSubConditionMetrics",
    ()=>getSubConditionMetrics,
    "getSubConditionPatientBars",
    ()=>getSubConditionPatientBars,
    "getSubConditionPeriodLabels",
    ()=>getSubConditionPeriodLabels,
    "getSubConditionRevenueSeries",
    ()=>getSubConditionRevenueSeries,
    "getSubConditionSeenRate",
    ()=>getSubConditionSeenRate,
    "hvmDataset",
    ()=>hvmDataset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$data$2f$hvm$2d$dataset$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public/data/hvm-dataset.json.[json].cjs [app-ssr] (ecmascript)");
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
const hvmDataset = __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$data$2f$hvm$2d$dataset$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
const legacyRegionProviderMap = {
    "abu-dhabi": "Abu Dhabi",
    "al-ain": "Al Ain",
    "al-dhafra": "Al Dhafra"
};
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
function getLifestageFilteredRows(filters) {
    const provider = legacyRegionProviderMap[filters.region] ?? filters.region;
    return getOverviewFilteredRows({
        startDate: filters.startDate,
        endDate: filters.endDate,
        region: provider === "All" ? "all" : provider,
        lifestageType: filters.stage,
        condition: filters.condition === "All" ? "all" : filters.condition
    });
}
function getLifestageBaseFilteredRows(filters) {
    const provider = legacyRegionProviderMap[filters.region] ?? filters.region;
    return getOverviewFilteredRows({
        startDate: filters.startDate,
        endDate: filters.endDate,
        region: provider === "All" ? "all" : provider,
        lifestageType: "all",
        condition: filters.condition === "All" ? "all" : filters.condition
    });
}
function getOverviewFilterOptions() {
    return {
        providers: Array.from(new Set(hvmDataset.map((row)=>String(row.provider || "Unknown")))).sort(),
        conditions: Array.from(new Set(hvmDataset.map((row)=>String(row.condition || "Unknown")))).sort(),
        statuses: Array.from(new Set(hvmDataset.map((row)=>String(row.status || "Unknown")))).sort()
    };
}
function getSubConditionFilterOptions() {
    return {
        providers: Array.from(new Set(hvmDataset.map((row)=>String(row.provider || "Unknown")))).sort(),
        conditions: Array.from(new Set(hvmDataset.map((row)=>String(row.condition || "Unknown")))).sort(),
        subConditions: Array.from(new Set(hvmDataset.map((row)=>String(row.subCondition || "Unknown")))).sort((a, b)=>Number(a) - Number(b)),
        campaignTypes: [
            "All",
            ...Array.from(new Set(hvmDataset.map((row)=>String(row.stage || "Unknown")))).sort()
        ]
    };
}
function getSubConditionBaseRows(filters) {
    return getOverviewFilteredRows({
        startDate: filters.startDate,
        endDate: filters.endDate,
        region: filters.region === "All" ? "all" : filters.region,
        lifestageType: filters.campaignType === "All" ? "all" : stageKeyMap[filters.campaignType.toLowerCase()] ?? "all",
        condition: filters.condition === "All" ? "all" : filters.condition,
        status: "all"
    }).filter((row)=>filters.subCondition === "All" || String(row.subCondition || "Unknown") === filters.subCondition);
}
function channelShare(row, channel) {
    const seed = Array.from(`${row.campaignId}-${row.provider}-${row.period}`).reduce((sum, char)=>sum + char.charCodeAt(0), 0);
    const sms = 0.28 + seed % 9 / 100;
    const call = 0.24 + seed % 7 / 100;
    const app = 0.18 + seed % 6 / 100;
    const walkIn = Math.max(0.08, 1 - sms - call - app);
    const shares = {
        SMS: sms,
        Call: call,
        App: app,
        "Walk-in": walkIn
    };
    return channel === "All" ? 1 : shares[channel] ?? 1;
}
function channelWeightedTotal(rows, field, channel) {
    return rows.reduce((sum, row)=>sum + toNumber(row[field]) * channelShare(row, channel), 0);
}
function getSubConditionPeriodLabels(filters) {
    const buckets = getPeriodBuckets({
        startDate: filters.startDate,
        endDate: filters.endDate,
        region: "all",
        lifestageType: "all",
        condition: "all"
    });
    return buckets.map((bucket, index)=>{
        const sameYearIndexes = buckets.map((item, itemIndex)=>item.year === bucket.year ? itemIndex : -1).filter((itemIndex)=>itemIndex >= 0);
        const midpoint = sameYearIndexes[Math.floor((sameYearIndexes.length - 1) / 2)] ?? index;
        return {
            label: bucket.label,
            month: monthLabels[bucket.monthIndex],
            year: String(bucket.year),
            showYear: index === midpoint
        };
    });
}
function getSubConditionMetrics(filters) {
    const rows = getSubConditionBaseRows(filters);
    const channel = filters.campaignType;
    const eligible = channelWeightedTotal(rows, "target", channel);
    const contacted = channelWeightedTotal(rows, "contacted", channel);
    const booked = channelWeightedTotal(rows, "booked", channel);
    const attended = channelWeightedTotal(rows, "attended", channel);
    const engagementRate = eligible ? contacted / eligible * 100 : 0;
    const conversionRate = contacted ? booked / contacted * 100 : 0;
    const seenRate = booked ? attended / booked * 100 : 0;
    const campaigns = new Set(rows.map((row)=>row.campaignId || row.campaignName)).size;
    return [
        {
            title: "Total Eligible Patients",
            value: formatCount(eligible),
            icon: "/overview-candidate.png"
        },
        {
            title: "Patients Contacted",
            value: formatCount(contacted),
            icon: "/overview-revenue.png"
        },
        {
            title: "Engagement Rate",
            value: `${engagementRate.toFixed(1)}%`,
            icon: "/overview-conditions.png"
        },
        {
            title: "Conversion",
            value: formatCount(booked),
            subValue: `(${conversionRate.toFixed(1)}%)`,
            icon: "/overview-candidate.png"
        },
        {
            title: "Seen Rate",
            value: `${seenRate.toFixed(1)}%`,
            icon: "/overview-seen-rate.png"
        },
        {
            title: "Campaigns",
            value: formatCount(campaigns),
            icon: "/overview-announcement.png"
        }
    ];
}
function getSubConditionPatientBars(filters) {
    const rows = getSubConditionBaseRows(filters);
    const bySubCondition = new Map();
    rows.forEach((row)=>{
        const label = `Cohort ${row.subCondition || "Unknown"}`;
        bySubCondition.set(label, [
            ...bySubCondition.get(label) ?? [],
            row
        ]);
    });
    return Array.from(bySubCondition.entries()).map(([label, segmentRows])=>{
        const contacted = channelWeightedTotal(segmentRows, "contacted", filters.campaignType);
        const booked = channelWeightedTotal(segmentRows, "booked", filters.campaignType);
        const attended = channelWeightedTotal(segmentRows, "attended", filters.campaignType);
        const notBooked = Math.max(0, contacted - booked);
        const noShow = Math.max(0, booked - attended);
        const didNotConvert = Math.max(0, attended - booked);
        const dropper = Math.round(notBooked + noShow + didNotConvert);
        const stopper = Math.round(notBooked * 0.48 + noShow * 0.34 + didNotConvert * 0.28);
        return {
            month: label,
            stopper,
            dropper,
            tooltip: `${label} · Stopper: ${formatCount(stopper)} · Dropper: ${formatCount(dropper)}`
        };
    });
}
function getSubConditionRevenueSeries(filters) {
    const rows = getSubConditionBaseRows(filters);
    const buckets = getPeriodBuckets({
        startDate: filters.startDate,
        endDate: filters.endDate,
        region: "all",
        lifestageType: "all",
        condition: "all"
    });
    return buckets.map((bucket)=>{
        const bucketRows = rows.filter((row)=>row.period === bucket.key);
        return Number((channelWeightedTotal(bucketRows, "revenue", filters.campaignType) / 1_000_000).toFixed(2));
    });
}
function getSubConditionDropoff(filters) {
    const rows = getSubConditionBaseRows(filters);
    const eligible = channelWeightedTotal(rows, "target", filters.campaignType);
    const contacted = channelWeightedTotal(rows, "contacted", filters.campaignType);
    const booked = channelWeightedTotal(rows, "booked", filters.campaignType);
    const attended = channelWeightedTotal(rows, "attended", filters.campaignType);
    const revenue = channelWeightedTotal(rows, "revenue", filters.campaignType);
    const safeEligible = Math.max(eligible, 1);
    const items = [
        {
            label: "Identified",
            count: eligible,
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
        const percent = item.count / safeEligible * 100;
        const previous = index === 0 ? safeEligible : Math.max(items[index - 1].count, 1);
        const drop = index === 0 ? (safeEligible - contacted) / safeEligible * 100 : (previous - item.count) / previous * 100;
        return {
            label: item.label,
            count: formatCount(item.count),
            leftNote: index === 0 ? "100.0% of total" : `${percent.toFixed(1)}%`,
            rightNote: index === items.length - 1 ? "" : `${Math.max(0, drop).toFixed(1)}%`,
            revenue: formatRevenueMillions(revenue * (item.count / safeEligible)),
            width: Math.max(8, Math.min(100, percent)),
            status: item.status
        };
    });
}
function getSubConditionChannelBreakdown(filters) {
    const rows = getSubConditionBaseRows({
        ...filters,
        campaignType: "All"
    });
    const channels = [
        {
            label: "SMS",
            color: "#8668e0"
        },
        {
            label: "Call",
            color: "#3b8df1"
        },
        {
            label: "App",
            color: "#47cfc3"
        },
        {
            label: "Walk-in",
            color: "#fb4c8e"
        }
    ];
    const totals = channels.map((channel)=>({
            ...channel,
            rawCount: channelWeightedTotal(rows, "contacted", channel.label)
        }));
    const visible = totals;
    const denominator = Math.max(visible.reduce((sum, channel)=>sum + channel.rawCount, 0), 1);
    return visible.map((channel)=>({
            label: channel.label,
            value: Number((channel.rawCount / denominator * 100).toFixed(1)),
            count: formatCount(channel.rawCount),
            color: channel.color
        }));
}
function getSubConditionSeenRate(filters) {
    const rows = getSubConditionBaseRows(filters);
    const booked = channelWeightedTotal(rows, "booked", filters.campaignType);
    const attended = channelWeightedTotal(rows, "attended", filters.campaignType);
    const segments = new Map();
    rows.forEach((row)=>{
        const label = `Cohort ${row.subCondition || "Unknown"}`;
        segments.set(label, [
            ...segments.get(label) ?? [],
            row
        ]);
    });
    return {
        total: Number((booked ? attended / booked * 100 : 0).toFixed(1)),
        target: 80,
        segments: Array.from(segments.entries()).map(([label, segmentRows])=>{
            const segmentBooked = channelWeightedTotal(segmentRows, "booked", filters.campaignType);
            const segmentAttended = channelWeightedTotal(segmentRows, "attended", filters.campaignType);
            return {
                label,
                value: Number((segmentBooked ? segmentAttended / segmentBooked * 100 : 0).toFixed(1))
            };
        })
    };
}
function getSubConditionConversionSegments(filters) {
    const rows = getSubConditionBaseRows(filters);
    const byCondition = new Map();
    const colors = [
        "#8f24ff",
        "#156cff",
        "#11a761",
        "#ff1f3d",
        "#f59e0b"
    ];
    rows.forEach((row)=>{
        const label = String(row.condition || "Unknown");
        byCondition.set(label, [
            ...byCondition.get(label) ?? [],
            row
        ]);
    });
    const clusterSlots = [
        {
            x: 36,
            y: 45
        },
        {
            x: 64,
            y: 45
        },
        {
            x: 50,
            y: 66
        },
        {
            x: 78,
            y: 66
        },
        {
            x: 22,
            y: 66
        }
    ];
    return Array.from(byCondition.entries()).map(([label, conditionRows], index)=>{
        const contacted = channelWeightedTotal(conditionRows, "contacted", filters.campaignType);
        const booked = channelWeightedTotal(conditionRows, "booked", filters.campaignType);
        const conversion = contacted ? booked / contacted * 100 : 0;
        const slot = clusterSlots[index % clusterSlots.length];
        const clampedConversion = Math.max(8, Math.min(100, conversion));
        return {
            label,
            value: Math.round(conversion),
            color: colors[index % colors.length],
            x: slot.x,
            y: slot.y,
            size: Math.max(74, Math.min(128, 60 + clampedConversion * 0.82)),
            sortValue: conversion
        };
    }).sort((a, b)=>b.sortValue - a.sortValue).map(({ sortValue: _sortValue, ...row })=>row);
}
function getSubConditionEntities(filters) {
    const rows = getSubConditionBaseRows(filters);
    const byProvider = new Map();
    rows.forEach((row)=>{
        const provider = String(row.provider || "Unknown");
        byProvider.set(provider, [
            ...byProvider.get(provider) ?? [],
            row
        ]);
    });
    const enrolled = channelWeightedTotal(rows, "enrolled", filters.campaignType);
    const revenue = channelWeightedTotal(rows, "revenue", filters.campaignType);
    const series = Array.from(byProvider.entries()).map(([name, providerRows])=>({
            name,
            patients: Number((channelWeightedTotal(providerRows, "enrolled", filters.campaignType) / 1_000).toFixed(1)),
            revenue: Number((channelWeightedTotal(providerRows, "revenue", filters.campaignType) / 1_000).toFixed(1)),
            sortValue: channelWeightedTotal(providerRows, "revenue", filters.campaignType)
        })).sort((a, b)=>b.sortValue - a.sortValue).slice(0, 5).map(({ sortValue: _sortValue, ...row })=>row);
    return {
        summary: {
            entities: formatCount(byProvider.size),
            enrolled: formatCount(enrolled),
            revenue: formatCurrencyDisplay(revenue)
        },
        series
    };
}
function getCampaignDetailsFilterOptions() {
    return {
        providers: Array.from(new Set(hvmDataset.map((row)=>String(row.provider || "Unknown")))).sort(),
        conditions: Array.from(new Set(hvmDataset.map((row)=>String(row.condition || "Unknown")))).sort(),
        campaignStages: Array.from(new Set(hvmDataset.map((row)=>String(row.stage || "Unknown")))).sort(),
        campaignNames: Array.from(new Set(hvmDataset.map((row)=>String(row.campaignName || "Unknown Campaign")))).sort()
    };
}
function getCampaignDetailsRows(filters) {
    return getOverviewFilteredRows({
        startDate: filters.startDate,
        endDate: filters.endDate,
        region: filters.region === "All" ? "all" : filters.region,
        lifestageType: filters.campaignStage === "All" ? "all" : stageKeyMap[filters.campaignStage.toLowerCase()] ?? "all",
        condition: filters.condition === "All" ? "all" : filters.condition,
        status: "all"
    }).filter((row)=>filters.campaignName === "All" || row.campaignName === filters.campaignName);
}
function distributeToEightSlots(total, seedText) {
    const seed = Array.from(seedText).reduce((sum, char)=>sum + char.charCodeAt(0), 0);
    const weights = Array.from({
        length: 8
    }, (_, index)=>0.76 + (seed + index * 11) % 36 / 100);
    const denominator = weights.reduce((sum, value)=>sum + value, 0) || 1;
    return weights.map((weight)=>Number((total * weight / denominator).toFixed(1)));
}
function estimateCampaignSpend(rows) {
    return rows.reduce((sum, row)=>{
        const stage = stageKeyMap[String(row.stage).toLowerCase()];
        const contactUnitCost = stage === "contain" ? 12 : stage === "build" ? 16 : 10;
        const bookingUnitCost = stage === "contain" ? 30 : stage === "build" ? 34 : 26;
        const attendanceUnitCost = stage === "contain" ? 44 : stage === "build" ? 52 : 38;
        return sum + toNumber(row.contacted) * contactUnitCost + toNumber(row.booked) * bookingUnitCost + toNumber(row.attended) * attendanceUnitCost;
    }, 0);
}
function buildCostEfficiencySeries(rows, fallbackCostPerConversion, seedText) {
    const seed = Array.from(seedText).reduce((sum, char)=>sum + char.charCodeAt(0), 0);
    const slots = Array.from({
        length: 8
    }, ()=>[]);
    rows.forEach((row, index)=>{
        slots[(index + seed) % slots.length].push(row);
    });
    return slots.map((slotRows, index)=>{
        const slotSpend = estimateCampaignSpend(slotRows);
        const slotBooked = slotRows.reduce((sum, row)=>sum + toNumber(row.booked), 0);
        const baseline = slotBooked ? slotSpend / slotBooked : fallbackCostPerConversion;
        const variation = 1 + ((seed + index * 13) % 19 - 9) / 100;
        return Number(Math.max(1, baseline * variation).toFixed(1));
    });
}
function formatDrawerDate(date) {
    const parsed = new Date(date);
    if (Number.isNaN(parsed.getTime())) {
        return date;
    }
    return new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    }).format(parsed);
}
function getCampaignDetailsDataset(filters) {
    const rows = getCampaignDetailsRows(filters);
    const fallbackRows = rows.length ? rows : hvmDataset.slice(0, 1);
    const first = fallbackRows[0];
    const campaignName = filters.campaignName === "All" ? String(first?.campaignName || "All Campaigns") : filters.campaignName;
    const campaignId = String(first?.campaignId || "CMP-2025-HVM-001");
    const eligible = fallbackRows.reduce((sum, row)=>sum + toNumber(row.target), 0);
    const contacted = fallbackRows.reduce((sum, row)=>sum + toNumber(row.contacted), 0);
    const booked = fallbackRows.reduce((sum, row)=>sum + toNumber(row.booked), 0);
    const enrolled = fallbackRows.reduce((sum, row)=>sum + toNumber(row.enrolled), 0);
    const attended = fallbackRows.reduce((sum, row)=>sum + toNumber(row.attended), 0);
    const revenue = fallbackRows.reduce((sum, row)=>sum + toNumber(row.revenue), 0);
    const rawCost = fallbackRows.reduce((sum, row)=>sum + toNumber(row.costMember), 0);
    const engagementRate = eligible ? contacted / eligible * 100 : 0;
    const conversionRate = contacted ? booked / contacted * 100 : 0;
    const seenRate = booked ? attended / booked * 100 : 0;
    const periods = fallbackRows.map((row)=>getPeriodParts(row.period)).filter((period)=>Boolean(period)).sort((a, b)=>getPeriodIndex(a.year, a.monthIndex) - getPeriodIndex(b.year, b.monthIndex));
    const start = periods[0] ?? {
        year: 2025,
        monthIndex: 0
    };
    const end = periods[periods.length - 1] ?? {
        year: 2025,
        monthIndex: 11
    };
    const buckets = getPeriodBuckets({
        startDate: filters.startDate,
        endDate: filters.endDate,
        region: "all",
        lifestageType: "all",
        condition: "all"
    });
    const bucketIndexes = new Map(buckets.map((bucket, index)=>[
            bucket.periodIndex,
            index
        ]));
    const attendedByPeriod = Array(buckets.length).fill(0);
    fallbackRows.forEach((row)=>{
        const period = getPeriodParts(row.period);
        const bucketIndex = period ? bucketIndexes.get(getPeriodIndex(period.year, period.monthIndex)) : undefined;
        if (bucketIndex !== undefined) {
            attendedByPeriod[bucketIndex] += toNumber(row.attended);
        }
    });
    const byProvider = new Map();
    const byCondition = new Map();
    fallbackRows.forEach((row)=>{
        const provider = String(row.provider || "Unknown");
        const conditionName = String(row.condition || "Unknown");
        byProvider.set(provider, [
            ...byProvider.get(provider) ?? [],
            row
        ]);
        byCondition.set(conditionName, [
            ...byCondition.get(conditionName) ?? [],
            row
        ]);
    });
    const channelColors = {
        SMS: "#8668e0",
        Call: "#3b8df1",
        App: "#47cfc3",
        "Walk-in": "#fb4c8e"
    };
    const channelBreakdown = Object.entries(channelColors).map(([label, color])=>{
        const amount = channelWeightedTotal(fallbackRows, "revenue", label);
        return {
            label,
            value: Number((revenue ? amount / revenue * 100 : 0).toFixed(1)),
            amount: `${formatCurrencyShort(amount)} (${(revenue ? amount / revenue * 100 : 0).toFixed(0)}%)`,
            color
        };
    });
    const conversionSlots = [
        {
            x: 34,
            y: 58
        },
        {
            x: 64,
            y: 66
        },
        {
            x: 50,
            y: 36
        },
        {
            x: 76,
            y: 44
        },
        {
            x: 24,
            y: 34
        }
    ];
    const conversionColors = [
        "#8f24ff",
        "#156cff",
        "#11a761",
        "#ff1f3d",
        "#f59e0b"
    ];
    const conversionSegments = Array.from(byCondition.entries()).map(([label, conditionRows], index)=>{
        const conditionContacted = conditionRows.reduce((sum, row)=>sum + toNumber(row.contacted), 0);
        const conditionBooked = conditionRows.reduce((sum, row)=>sum + toNumber(row.booked), 0);
        const conversion = conditionContacted ? conditionBooked / conditionContacted * 100 : 0;
        const slot = conversionSlots[index % conversionSlots.length];
        return {
            label,
            value: Number(conversion.toFixed(1)),
            color: conversionColors[index % conversionColors.length],
            x: slot.x,
            y: slot.y,
            size: Math.max(64, Math.min(138, 58 + conversion * 1.2)),
            sortValue: conversion
        };
    }).sort((a, b)=>b.sortValue - a.sortValue).slice(0, 5).map(({ sortValue: _sortValue, ...row })=>row);
    const entitySeries = Array.from(byProvider.entries()).map(([name, providerRows])=>({
            name,
            bar: Number((providerRows.reduce((sum, row)=>sum + toNumber(row.enrolled), 0) / 1_000).toFixed(1)),
            line: Number((providerRows.reduce((sum, row)=>sum + toNumber(row.revenue), 0) / 1_000).toFixed(1)),
            sortValue: providerRows.reduce((sum, row)=>sum + toNumber(row.revenue), 0)
        })).sort((a, b)=>b.sortValue - a.sortValue).slice(0, 5).map(({ sortValue: _sortValue, ...row })=>row);
    const revenueK = revenue / 1_000;
    const estimatedSpend = rawCost > 0 ? rawCost : estimateCampaignSpend(fallbackRows);
    const costPerConversion = booked ? estimatedSpend / booked : 0;
    const targetRevenueK = Math.max(revenueK * 1.14, revenueK + 1);
    const targetCostPerConversion = Math.max(1, costPerConversion * 0.9);
    const costSeries = buildCostEfficiencySeries(fallbackRows, Math.max(costPerConversion, 1), `${campaignId}-cost`);
    const safeEligible = Math.max(eligible, 1);
    const dropoffItems = [
        {
            label: "Identified",
            count: eligible,
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
    const dropoff = dropoffItems.map((item, index)=>{
        const percent = item.count / safeEligible * 100;
        const previous = index === 0 ? safeEligible : Math.max(dropoffItems[index - 1].count, 1);
        const drop = index === 0 ? (safeEligible - contacted) / safeEligible * 100 : (previous - item.count) / previous * 100;
        return {
            label: item.label,
            count: formatCount(item.count),
            leftNote: index === 0 ? "100.0% of total" : `${percent.toFixed(1)}%`,
            rightNote: index === dropoffItems.length - 1 ? "" : `${Math.max(0, drop).toFixed(1)}%`,
            revenue: formatRevenueMillions(revenue * (item.count / safeEligible)),
            width: Math.max(8, Math.min(100, percent)),
            status: item.status
        };
    });
    return {
        campaignName,
        campaignId,
        metrics: [
            {
                title: "Total Eligible Patients",
                value: formatCount(eligible),
                icon: "/overview-candidate.png"
            },
            {
                title: "Patients Contacted",
                value: formatCount(contacted),
                icon: "/overview-announcement.png"
            },
            {
                title: "Engagement Rate",
                value: `${engagementRate.toFixed(1)}%`,
                icon: "/overview-conditions.png"
            },
            {
                title: "Conversion",
                value: formatCount(booked),
                note: `(${conversionRate.toFixed(1)}%)`,
                icon: "/overview-candidate.png"
            },
            {
                title: "Seen Rate",
                value: `${seenRate.toFixed(1)}%`,
                icon: "/overview-seen-rate.png"
            },
            {
                title: "Campaign Status",
                value: String(first?.status || "Live") === "Live" ? "Active" : String(first?.status || "Active"),
                icon: "/overview-announcement.png",
                tone: "success"
            }
        ],
        periodLabels: buckets.map((bucket)=>monthLabels[bucket.monthIndex]),
        patientsAttended: attendedByPeriod.map((value)=>Math.round(value)),
        revenueTarget: Number(targetRevenueK.toFixed(1)),
        revenueCurrent: Number(revenueK.toFixed(1)),
        revenueBars: distributeToEightSlots(revenueK, `${campaignId}-revenue`),
        channelBreakdown,
        dropoff,
        entitySummary: {
            entities: formatCount(byProvider.size),
            enrolled: formatCount(enrolled),
            revenue: formatCurrencyDisplay(revenue)
        },
        entitySeries,
        conversionSegments,
        costCurrent: formatCurrencyDisplay(costPerConversion),
        costTarget: formatCurrencyDisplay(targetCostPerConversion),
        costSeries,
        targetLine: Number(targetCostPerConversion.toFixed(1)),
        timeline: {
            startDate: formatDrawerDate(`${start.year}-${String(start.monthIndex + 1).padStart(2, "0")}-01`),
            endDate: formatDrawerDate(`${end.year}-${String(end.monthIndex + 1).padStart(2, "0")}-28`),
            progress: Math.max(35, Math.min(96, Math.round(attended / Math.max(booked, 1) * 100)))
        },
        locations: Array.from(byProvider.keys()).slice(0, 5)
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
    const seenRate = booked ? attended / booked * 100 : 0;
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
function getLifestagePeriodLabels(filters) {
    return getOverviewIncrementalRevenueLabels({
        startDate: filters.startDate,
        endDate: filters.endDate,
        region: legacyRegionProviderMap[filters.region] ?? filters.region,
        lifestageType: filters.stage,
        condition: filters.condition === "All" ? "all" : filters.condition
    });
}
function getLifestageTrendData(filters) {
    const rows = getLifestageFilteredRows(filters);
    const buckets = getPeriodBuckets({
        startDate: filters.startDate,
        endDate: filters.endDate,
        region: "all",
        lifestageType: filters.stage,
        condition: "all"
    });
    const bucketIndexes = new Map(buckets.map((bucket, index)=>[
            bucket.periodIndex,
            index
        ]));
    const patientValues = Array(buckets.length).fill(0);
    const revenueValues = Array(buckets.length).fill(0);
    rows.forEach((row)=>{
        const period = getPeriodParts(row.period);
        const bucketIndex = period ? bucketIndexes.get(getPeriodIndex(period.year, period.monthIndex)) : undefined;
        if (bucketIndex === undefined) {
            return;
        }
        patientValues[bucketIndex] += toNumber(row.target);
        revenueValues[bucketIndex] += toNumber(row.revenue);
    });
    return {
        patientValues: patientValues.map((value)=>Number((value / 1_000_000).toFixed(2))),
        revenueValues: revenueValues.map((value)=>Number((value / 1_000_000).toFixed(2))),
        gainValues: revenueValues.map((value)=>Number((value / 1_000_000).toFixed(2)))
    };
}
function getLifestageKpiCards(filters) {
    const rows = getLifestageFilteredRows(filters);
    const conditions = new Set(rows.map((row)=>String(row.condition || "Unknown")));
    const segments = new Set(rows.map((row)=>`${row.condition || "Unknown"}::${row.subCondition || "Unknown"}`));
    const eligible = rows.reduce((sum, row)=>sum + toNumber(row.target), 0);
    const booked = rows.reduce((sum, row)=>sum + toNumber(row.booked), 0);
    const attended = rows.reduce((sum, row)=>sum + toNumber(row.attended), 0);
    const revenue = rows.reduce((sum, row)=>sum + toNumber(row.revenue), 0);
    const avgRevenue = eligible ? revenue / eligible : 0;
    const seenRate = booked ? attended / booked * 100 : 0;
    return [
        {
            title: "No. of Conditions",
            value: formatCount(conditions.size),
            icon: "/overview-conditions.png"
        },
        {
            title: "Patient Segments",
            value: formatCount(segments.size),
            icon: "/overview-conditions.png"
        },
        {
            title: "Eligible Patients",
            value: formatCompact(eligible).toUpperCase(),
            icon: "/overview-candidate.png"
        },
        {
            title: "Seen Rate",
            value: `${seenRate.toFixed(1)}%`,
            icon: "/overview-seen-rate.png"
        },
        {
            title: "Total Incremen. Rev.",
            value: formatCurrencyDisplay(revenue),
            icon: "/overview-revenue.png"
        },
        {
            title: "Avg. Rev/Patient",
            value: formatCurrencyDisplay(avgRevenue),
            icon: "/overview-candidate.png"
        }
    ];
}
function getLifestagePatientFlow(filters) {
    const rows = getLifestageBaseFilteredRows(filters);
    const totals = [
        "acquire",
        "build",
        "contain"
    ].reduce((result, stage)=>{
        const stageRows = rows.filter((row)=>stageKeyMap[String(row.stage).toLowerCase()] === stage);
        result.left[stage] = formatCompact(stageRows.reduce((sum, row)=>sum + toNumber(row.target), 0));
        result.right[stage] = formatCompact(stageRows.reduce((sum, row)=>sum + toNumber(row.attended), 0));
        return result;
    }, {
        left: {
            acquire: "0",
            build: "0",
            contain: "0"
        },
        right: {
            acquire: "0",
            build: "0",
            contain: "0"
        }
    });
    return totals;
}
function getLifestageTopConditions(filters) {
    const rows = getLifestageFilteredRows(filters);
    const byCondition = new Map();
    rows.forEach((row)=>{
        const label = String(row.condition || "Unknown");
        byCondition.set(label, (byCondition.get(label) ?? 0) + toNumber(row.revenue));
    });
    const total = Array.from(byCondition.values()).reduce((sum, value)=>sum + value, 0);
    return Array.from(byCondition.entries()).map(([label, value])=>({
            label,
            value: formatCurrencyShort(value),
            share: `${(total ? value / total * 100 : 0).toFixed(0)}%`,
            sortValue: value
        })).sort((a, b)=>b.sortValue - a.sortValue).slice(0, 4).map(({ sortValue: _sortValue, ...row })=>row);
}
function getLifestageProviderPerformance(filters) {
    const rows = getLifestageFilteredRows(filters);
    const byProvider = new Map();
    rows.forEach((row)=>{
        const provider = String(row.provider || "Unknown");
        byProvider.set(provider, [
            ...byProvider.get(provider) ?? [],
            row
        ]);
    });
    const maxRevenue = Math.max(...Array.from(byProvider.values()).map((providerRows)=>providerRows.reduce((sum, row)=>sum + toNumber(row.revenue), 0)), 1);
    return Array.from(byProvider.entries()).map(([provider, providerRows])=>{
        const target = providerRows.reduce((sum, row)=>sum + toNumber(row.target), 0);
        const booked = providerRows.reduce((sum, row)=>sum + toNumber(row.booked), 0);
        const attended = providerRows.reduce((sum, row)=>sum + toNumber(row.attended), 0);
        const revenue = providerRows.reduce((sum, row)=>sum + toNumber(row.revenue), 0);
        const seenRate = booked ? attended / booked * 100 : 0;
        const revenueMillions = revenue / 1_000_000;
        return {
            label: `${provider} · ${formatCurrencyShort(revenue)} revenue · ${formatCompact(target).toUpperCase()} eligible`,
            value: Math.round(seenRate),
            color: "#2563EB",
            x: Math.max(5, Math.min(95, seenRate)),
            y: Number(revenueMillions.toFixed(2)),
            size: Math.max(12, Math.min(62, 16 + revenue / maxRevenue * 46)),
            sortValue: revenue
        };
    }).sort((a, b)=>b.sortValue - a.sortValue).slice(0, 9).map(({ sortValue: _sortValue, ...row })=>row);
}
function getLifestageConversionByCampaign(filters) {
    const rows = getLifestageFilteredRows(filters);
    const byCampaign = new Map();
    rows.forEach((row)=>{
        const label = String(row.campaignName || row.campaignId || "Unknown Campaign");
        byCampaign.set(label, [
            ...byCampaign.get(label) ?? [],
            row
        ]);
    });
    return Array.from(byCampaign.entries()).map(([label, campaignRows])=>{
        const contacted = campaignRows.reduce((sum, row)=>sum + toNumber(row.contacted), 0);
        const booked = campaignRows.reduce((sum, row)=>sum + toNumber(row.booked), 0);
        const revenue = campaignRows.reduce((sum, row)=>sum + toNumber(row.revenue), 0);
        return {
            label: label.length > 18 ? `${label.slice(0, 16)}...` : label,
            value: Number((contacted ? booked / contacted * 100 : 0).toFixed(1)),
            sortValue: revenue
        };
    }).sort((a, b)=>b.sortValue - a.sortValue).slice(0, 6).map(({ sortValue: _sortValue, ...row })=>row);
}
function getLifestageCampaignList(filters) {
    const rows = getLifestageFilteredRows(filters);
    const byCampaign = new Map();
    rows.forEach((row)=>{
        const key = `${row.campaignId || row.campaignName}::${row.condition || "Unknown"}::${row.subCondition || "Unknown"}`;
        byCampaign.set(key, [
            ...byCampaign.get(key) ?? [],
            row
        ]);
    });
    return Array.from(byCampaign.values()).map((campaignRows)=>{
        const first = campaignRows[0];
        const eligible = campaignRows.reduce((sum, row)=>sum + toNumber(row.target), 0);
        const booked = campaignRows.reduce((sum, row)=>sum + toNumber(row.booked), 0);
        const attended = campaignRows.reduce((sum, row)=>sum + toNumber(row.attended), 0);
        const revenue = campaignRows.reduce((sum, row)=>sum + toNumber(row.revenue), 0);
        const avgRevenue = campaignRows.length ? campaignRows.reduce((sum, row)=>sum + toNumber(row.avgRevPatient), 0) / campaignRows.length : 0;
        return {
            campaign: String(first?.campaignName || "Unknown"),
            stage: String(first?.subCondition ? `Cohort ${first.subCondition}` : first?.condition || "Unknown"),
            eligible: formatCount(eligible),
            seenRate: `${(booked ? attended / booked * 100 : 0).toFixed(1)}%`,
            avgRevenue: formatCurrencyShort(avgRevenue),
            incrementalRevenue: formatCurrencyShort(revenue),
            sortValue: revenue
        };
    }).sort((a, b)=>b.sortValue - a.sortValue).slice(0, 6).map(({ sortValue: _sortValue, ...row })=>row);
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
        const booked = groupRows.reduce((sum, row)=>sum + toNumber(row.booked), 0);
        const attended = groupRows.reduce((sum, row)=>sum + toNumber(row.attended), 0);
        const revenue = groupRows.reduce((sum, row)=>sum + toNumber(row.revenue), 0);
        const averageRevenue = groupRows.length ? groupRows.reduce((sum, row)=>sum + toNumber(row.avgRevPatient), 0) / groupRows.length : 0;
        const campaignCount = new Set(groupRows.map((row)=>row.campaignId)).size;
        const status = String(groupRows[0]?.status || "Unknown");
        return {
            condition: conditionName,
            stage: subConditionName === "Unknown" ? "Unknown" : `Cohort ${subConditionName}`,
            eligible: formatCount(eligible),
            seenRate: `${(booked ? attended / booked * 100 : 0).toFixed(1)}%`,
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
}),
"[project]/components/lifestage-dashboard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LifestageDashboard",
    ()=>LifestageDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/date-filter-utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2d$shell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard-shell.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$export$2d$visuals$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/export-visuals.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hvm$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/hvm-data.ts [app-ssr] (ecmascript)");
"use client";
;
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
const stageMeta = {
    acquire: {
        label: "Acquire",
        title: "Lifestage Overview - Acquire",
        colorClass: "blue"
    },
    build: {
        label: "Build",
        title: "Lifestage Overview - Build",
        colorClass: "green"
    },
    contain: {
        label: "Contain",
        title: "Lifestage Overview - Contain",
        colorClass: "orange"
    }
};
const stageVisualColors = {
    acquire: {
        primary: "#2563EB",
        soft: "#14B8A6",
        legend: "acquire"
    },
    build: {
        primary: "#0B9F30",
        soft: "#14B8A6",
        legend: "build"
    },
    contain: {
        primary: "#FF6900",
        soft: "#14B8A6",
        legend: "contain"
    }
};
const lifestageData = {
    all: {
        acquire: {
            metrics: {
                segments: "52",
                eligible: "4.2M",
                seenRate: "Ð 22K",
                revenue: "Ð 2.1M",
                avgRevenue: "Ð 148K"
            },
            patientSeries: [
                0.6,
                1.4,
                1.1,
                1.8,
                2.2,
                2.2,
                2.8,
                3.0,
                4.0,
                4.8,
                4.6,
                4.6
            ],
            revenueSeries: [
                0.5,
                1.3,
                0.9,
                1.4,
                1.7,
                1.8,
                2.6,
                3.1,
                4.2,
                3.8,
                3.6,
                4.2
            ],
            gainSeries: [
                10,
                26,
                38,
                47,
                52,
                48,
                59,
                55,
                74,
                46,
                71,
                91
            ],
            flow: {
                left: {
                    acquire: "8.2K",
                    build: "2.8K",
                    contain: "1.4K"
                },
                right: {
                    acquire: "8.2K",
                    build: "2.8K",
                    contain: "1.4K"
                }
            },
            conversionRows: [
                {
                    label: "HbA1c Screening",
                    value: 94,
                    condition: "Diabetes",
                    campaignType: "Outreach"
                },
                {
                    label: "GP Referral",
                    value: 82,
                    condition: "Hypertension",
                    campaignType: "Referral"
                },
                {
                    label: "Lifestyle Coaching",
                    value: 74,
                    condition: "Obesity",
                    campaignType: "Follow-up"
                },
                {
                    label: "BP Drive",
                    value: 68,
                    condition: "Hypertension",
                    campaignType: "Outreach"
                },
                {
                    label: "Nutrition Program",
                    value: 60,
                    condition: "Obesity",
                    campaignType: "Follow-up"
                },
                {
                    label: "Pharmacy Screen",
                    value: 54,
                    condition: "Diabetes",
                    campaignType: "Referral"
                }
            ],
            topConditions: [
                {
                    label: "Diabetes",
                    value: "721K",
                    share: "38%"
                },
                {
                    label: "Hypertension",
                    value: "608K",
                    share: "32%"
                },
                {
                    label: "Obesity",
                    value: "342K",
                    share: "18%"
                },
                {
                    label: "Cardiac",
                    value: "228K",
                    share: "12%"
                }
            ],
            nextConditions: [
                {
                    title: "Re-engage via SMS",
                    priority: "HIGH",
                    text: "432 patients overdue for HbA1c check",
                    pills: [
                        "Diabetes",
                        "Abu Dhabi"
                    ],
                    condition: "Diabetes",
                    region: "abu-dhabi"
                },
                {
                    title: "GP Referral Push",
                    priority: "MEDIUM",
                    text: "280 undiagnosed identified this week",
                    pills: [
                        "Hypertension",
                        "Entity 7"
                    ],
                    condition: "Hypertension",
                    region: "al-ain"
                },
                {
                    title: "Re-engage via SMS",
                    priority: "LOW",
                    text: "432 patients overdue for HbA1c check",
                    pills: [
                        "Diabetes",
                        "Zayed City"
                    ],
                    condition: "Diabetes",
                    region: "al-dhafra"
                }
            ],
            interventions: [
                {
                    badge: "HIGHEST ROI",
                    title: "Diabetes Care Pack",
                    text: "AED 148 avg rev · 3.2k eligible",
                    pills: [
                        "ROI 34%",
                        "Active"
                    ],
                    condition: "Diabetes",
                    campaignType: "Outreach"
                },
                {
                    badge: "RECOMMENDED",
                    title: "BP Reduction Bundle",
                    text: "AED 134 avg rev · 2.6k eligible",
                    pills: [
                        "ROI 28%",
                        "Active"
                    ],
                    condition: "Hypertension",
                    campaignType: "Referral"
                },
                {
                    badge: "RECOMMENDED",
                    title: "Cardiac Screen Offer",
                    text: "AED 210 avg rev · 2.1k eligible",
                    pills: [
                        "ROI 22%",
                        "Active"
                    ],
                    condition: "Cardiac",
                    campaignType: "Referral"
                },
                {
                    badge: "PLANNED",
                    title: "Wellness Starter Pack",
                    text: "AED 98 avg rev · 1.9k eligible",
                    pills: [
                        "ROI 18%",
                        "Planned"
                    ],
                    condition: "Obesity",
                    campaignType: "Follow-up"
                }
            ],
            bubblePoints: [
                {
                    x: 55,
                    y: 110,
                    size: 18,
                    label: "Entity 1 · SR 55% · Rev 110K",
                    region: "abu-dhabi"
                },
                {
                    x: 62,
                    y: 220,
                    size: 28,
                    label: "Entity 2 · SR 62% · Rev 220K",
                    region: "al-ain"
                },
                {
                    x: 69,
                    y: 345,
                    size: 46,
                    label: "Entity 3 · SR 69% · Rev 345K",
                    region: "abu-dhabi"
                },
                {
                    x: 75,
                    y: 420,
                    size: 52,
                    label: "Entity 4 · SR 75% · Rev 420K",
                    region: "abu-dhabi"
                },
                {
                    x: 84,
                    y: 305,
                    size: 50,
                    label: "Entity 5 · SR 84% · Rev 305K",
                    region: "abu-dhabi"
                },
                {
                    x: 85,
                    y: 425,
                    size: 64,
                    label: "Entity 6 · SR 85% · Rev 425K",
                    region: "abu-dhabi"
                }
            ],
            campaigns: [
                {
                    campaign: "Diabetes",
                    stage: "Pre-diabetic",
                    eligible: "15,231",
                    seenRate: "57.5%",
                    avgRevenue: "5.5K",
                    incrementalRevenue: "15.2K",
                    condition: "Diabetes",
                    campaignType: "Outreach"
                },
                {
                    campaign: "Diabetes",
                    stage: "Pre-diabetic",
                    eligible: "8,256",
                    seenRate: "48.6%",
                    avgRevenue: "2.5K",
                    incrementalRevenue: "12.2K",
                    condition: "Diabetes",
                    campaignType: "Referral"
                },
                {
                    campaign: "Hypertension",
                    stage: "At-Risk",
                    eligible: "3,564",
                    seenRate: "23.8%",
                    avgRevenue: "1.3K",
                    incrementalRevenue: "5.6K",
                    condition: "Hypertension",
                    campaignType: "Referral"
                },
                {
                    campaign: "Diabetes",
                    stage: "Pre-diabetic",
                    eligible: "10,519",
                    seenRate: "79.4%",
                    avgRevenue: "12.2K",
                    incrementalRevenue: "15.2K",
                    condition: "Diabetes",
                    campaignType: "Outreach"
                },
                {
                    campaign: "Hypertension",
                    stage: "At-Risk",
                    eligible: "12,145",
                    seenRate: "63.5%",
                    avgRevenue: "13.8K",
                    incrementalRevenue: "12.2K",
                    condition: "Hypertension",
                    campaignType: "Follow-up"
                },
                {
                    campaign: "Diabetes",
                    stage: "Pre-diabetic",
                    eligible: "5,623",
                    seenRate: "41.2%",
                    avgRevenue: "5.6K",
                    incrementalRevenue: "5.6K",
                    condition: "Diabetes",
                    campaignType: "Follow-up"
                }
            ]
        },
        build: {
            metrics: {
                segments: "34",
                eligible: "2.8M",
                seenRate: "Ð 18K",
                revenue: "Ð 1.6M",
                avgRevenue: "Ð 102K"
            },
            patientSeries: [
                0.5,
                1.0,
                1.2,
                1.6,
                1.8,
                2.1,
                2.3,
                2.5,
                2.7,
                2.8,
                2.8,
                2.9
            ],
            revenueSeries: [
                0.4,
                0.8,
                1.0,
                1.3,
                1.4,
                1.7,
                1.9,
                2.0,
                2.3,
                2.5,
                2.6,
                2.8
            ],
            gainSeries: [
                8,
                18,
                29,
                34,
                39,
                45,
                49,
                46,
                58,
                61,
                66,
                72
            ],
            flow: {
                left: {
                    acquire: "4.6K",
                    build: "5.1K",
                    contain: "1.2K"
                },
                right: {
                    acquire: "3.4K",
                    build: "5.1K",
                    contain: "2.4K"
                }
            },
            conversionRows: [
                {
                    label: "Diabetic Monitoring",
                    value: 86,
                    condition: "Diabetes",
                    campaignType: "Follow-up"
                },
                {
                    label: "Mental Wellness",
                    value: 73,
                    condition: "Cardiac",
                    campaignType: "Follow-up"
                },
                {
                    label: "Nutrition Program",
                    value: 68,
                    condition: "Obesity",
                    campaignType: "Follow-up"
                },
                {
                    label: "Post-Op Follow-up",
                    value: 66,
                    condition: "Cardiac",
                    campaignType: "Follow-up"
                }
            ],
            topConditions: [
                {
                    label: "Diabetes",
                    value: "612K",
                    share: "34%"
                },
                {
                    label: "Hypertension",
                    value: "504K",
                    share: "28%"
                },
                {
                    label: "Obesity",
                    value: "401K",
                    share: "22%"
                },
                {
                    label: "Cardiac",
                    value: "279K",
                    share: "16%"
                }
            ],
            nextConditions: [
                {
                    title: "Lifestyle Recall",
                    priority: "HIGH",
                    text: "301 active care plans require coaching",
                    pills: [
                        "Obesity",
                        "Abu Dhabi"
                    ],
                    condition: "Obesity",
                    region: "abu-dhabi"
                },
                {
                    title: "Medication Follow-ups",
                    priority: "MEDIUM",
                    text: "174 patients missed second follow-up",
                    pills: [
                        "Hypertension",
                        "Entity 7"
                    ],
                    condition: "Hypertension",
                    region: "al-ain"
                },
                {
                    title: "Medication Follow-up",
                    priority: "MEDIUM",
                    text: "174 patients missed second follow-up",
                    pills: [
                        "Hypertension",
                        "Entity 7"
                    ],
                    condition: "Hypertension",
                    region: "al-ain"
                }
            ],
            interventions: [
                {
                    badge: "RECOMMENDED",
                    title: "Cardio Coaching Serieses",
                    text: "AED 119 avg rev · 1.3k eligible",
                    pills: [
                        "ROI 24%",
                        "Active"
                    ],
                    condition: "Cardiac",
                    campaignType: "Follow-up"
                },
                {
                    badge: "RECOMMENDED",
                    title: "Cardio Coaching Seriez",
                    text: "AED 119 avg rev · 1.3k eligible",
                    pills: [
                        "ROI 24%",
                        "Active"
                    ],
                    condition: "Cardiac",
                    campaignType: "Follow-up"
                },
                {
                    badge: "HIGHEST ROI",
                    title: "Lifestyle Booster Pack",
                    text: "AED 126 avg rev · 2.1k eligible",
                    pills: [
                        "ROI 31%",
                        "Active"
                    ],
                    condition: "Obesity",
                    campaignType: "Follow-up"
                },
                {
                    badge: "HIGHEST ROI",
                    title: "Cardio Coaching Series",
                    text: "AED 119 avg rev · 1.3k eligible",
                    pills: [
                        "ROI 24%",
                        "Active"
                    ],
                    condition: "Cardiac",
                    campaignType: "Follow-up"
                }
            ],
            bubblePoints: [
                {
                    x: 58,
                    y: 145,
                    size: 20,
                    label: "Entity 1 · SR 58% · Rev 145K",
                    region: "abu-dhabi"
                },
                {
                    x: 67,
                    y: 255,
                    size: 34,
                    label: "Entity 2 · SR 67% · Rev 255K",
                    region: "abu-dhabi"
                },
                {
                    x: 76,
                    y: 365,
                    size: 48,
                    label: "Entity 3 · SR 76% · Rev 365K",
                    region: "abu-dhabi"
                }
            ],
            campaigns: [
                {
                    campaign: "Nutrition",
                    stage: "Lifestyle",
                    eligible: "6,214",
                    seenRate: "61.5%",
                    avgRevenue: "4.2K",
                    incrementalRevenue: "8.6K",
                    condition: "Obesity",
                    campaignType: "Follow-up"
                },
                {
                    campaign: "Post-Op",
                    stage: "Care Plan",
                    eligible: "4,102",
                    seenRate: "58.4%",
                    avgRevenue: "3.1K",
                    incrementalRevenue: "5.4K",
                    condition: "Cardiac",
                    campaignType: "Follow-up"
                }
            ]
        },
        contain: {
            metrics: {
                segments: "21",
                eligible: "1.4M",
                seenRate: "Ð 14K",
                revenue: "Ð 980K",
                avgRevenue: "Ð 81K"
            },
            patientSeries: [
                0.4,
                0.7,
                0.9,
                1.0,
                1.1,
                1.15,
                1.2,
                1.25,
                1.3,
                1.34,
                1.38,
                1.4
            ],
            revenueSeries: [
                0.3,
                0.6,
                0.8,
                0.88,
                0.92,
                0.96,
                1.01,
                1.04,
                1.11,
                1.21,
                1.31,
                1.4
            ],
            gainSeries: [
                6,
                14,
                21,
                27,
                33,
                37,
                42,
                45,
                52,
                57,
                61,
                68
            ],
            flow: {
                left: {
                    acquire: "2.1K",
                    build: "1.7K",
                    contain: "3.4K"
                },
                right: {
                    acquire: "1.2K",
                    build: "1.8K",
                    contain: "4.2K"
                }
            },
            conversionRows: [
                {
                    label: "At-Risk Re-engagement",
                    value: 78,
                    condition: "Hypertension",
                    campaignType: "Retention"
                },
                {
                    label: "Obesity Intervention",
                    value: 66,
                    condition: "Obesity",
                    campaignType: "Retention"
                },
                {
                    label: "Readmit Prevention",
                    value: 61,
                    condition: "Cardiac",
                    campaignType: "Retention"
                }
            ],
            topConditions: [
                {
                    label: "Obesity",
                    value: "398K",
                    share: "35%"
                },
                {
                    label: "Diabetes",
                    value: "321K",
                    share: "28%"
                },
                {
                    label: "Cardiac",
                    value: "235K",
                    share: "21%"
                },
                {
                    label: "Hypertension",
                    value: "186K",
                    share: "16%"
                }
            ],
            nextConditions: [
                {
                    title: "Medication Adherences",
                    priority: "LOW",
                    text: "72 patients due for refill outreach",
                    pills: [
                        "Diabetes",
                        "Al Dhafra"
                    ],
                    condition: "Diabetes",
                    region: "al-dhafra"
                },
                {
                    title: "Medication Adherence",
                    priority: "LOW",
                    text: "72 patients due for refill outreach",
                    pills: [
                        "Diabetes",
                        "Al Dhafra"
                    ],
                    condition: "Diabetes",
                    region: "al-dhafra"
                },
                {
                    title: "Care Gap Reminder",
                    priority: "HIGH",
                    text: "126 at-risk members require intervention",
                    pills: [
                        "Cardiac",
                        "Abu Dhabi"
                    ],
                    condition: "Cardiac",
                    region: "abu-dhabi"
                },
                {
                    title: "Medication Adherencez",
                    priority: "LOW",
                    text: "72 patients due for refill outreach",
                    pills: [
                        "Diabetes",
                        "Al Dhafra"
                    ],
                    condition: "Diabetes",
                    region: "al-dhafra"
                }
            ],
            interventions: [
                {
                    badge: "RECOMMENDED",
                    title: "Readmit Prevention Bundle",
                    text: "AED 88 avg rev · 980 eligible",
                    pills: [
                        "ROI 21%",
                        "Active"
                    ],
                    condition: "Cardiac",
                    campaignType: "Retention"
                },
                {
                    badge: "HIGHEST ROI",
                    title: "Readmit Bundle",
                    text: "AED 88 avg rev · 980 eligible",
                    pills: [
                        "ROI 21%",
                        "Active"
                    ],
                    condition: "Cardiac",
                    campaignType: "Retention"
                },
                {
                    badge: "HIGHEST ROI",
                    title: "Readmit Prevention",
                    text: "AED 88 avg rev · 980 eligible",
                    pills: [
                        "ROI 21%",
                        "Active"
                    ],
                    condition: "Cardiac",
                    campaignType: "Retention"
                }
            ],
            bubblePoints: [
                {
                    x: 61,
                    y: 210,
                    size: 30,
                    label: "Entity 1 · SR 61% · Rev 210K",
                    region: "al-ain"
                },
                {
                    x: 73,
                    y: 280,
                    size: 44,
                    label: "Entity 2 · SR 73% · Rev 280K",
                    region: "abu-dhabi"
                }
            ],
            campaigns: [
                {
                    campaign: "Readmit",
                    stage: "Re-engagement",
                    eligible: "2,188",
                    seenRate: "52.8%",
                    avgRevenue: "2.9K",
                    incrementalRevenue: "4.1K",
                    condition: "Cardiac",
                    campaignType: "Retention"
                }
            ]
        }
    },
    "abu-dhabi": {},
    "al-ain": {},
    "al-dhafra": {}
};
lifestageData["abu-dhabi"] = {
    acquire: {
        ...lifestageData.all.acquire,
        metrics: {
            segments: "31",
            eligible: "2.5M",
            seenRate: "Ð 24K",
            revenue: "Ð 1.4M",
            avgRevenue: "Ð 152K"
        },
        patientSeries: [
            0.5,
            1.2,
            0.9,
            1.5,
            1.8,
            2.0,
            2.4,
            2.8,
            3.6,
            4.2,
            4.0,
            4.1
        ],
        revenueSeries: [
            0.4,
            1.1,
            0.8,
            1.2,
            1.6,
            1.7,
            2.1,
            2.6,
            3.3,
            3.1,
            3.0,
            3.4
        ],
        gainSeries: [
            12,
            28,
            39,
            48,
            52,
            49,
            58,
            55,
            71,
            48,
            70,
            84
        ],
        flow: {
            left: {
                acquire: "5.4K",
                build: "1.9K",
                contain: "0.8K"
            },
            right: {
                acquire: "5.4K",
                build: "2.1K",
                contain: "1.1K"
            }
        }
    },
    build: {
        ...lifestageData.all.build,
        metrics: {
            segments: "20",
            eligible: "1.6M",
            seenRate: "Ð 17K",
            revenue: "Ð 1.0M",
            avgRevenue: "Ð 108K"
        }
    },
    contain: {
        ...lifestageData.all.contain,
        metrics: {
            segments: "13",
            eligible: "820K",
            seenRate: "Ð 12K",
            revenue: "Ð 620K",
            avgRevenue: "Ð 84K"
        }
    }
};
lifestageData["al-ain"] = {
    acquire: {
        ...lifestageData.all.acquire,
        metrics: {
            segments: "12",
            eligible: "1.1M",
            seenRate: "Ð 19K",
            revenue: "Ð 540K",
            avgRevenue: "Ð 118K"
        },
        patientSeries: [
            0.4,
            0.9,
            0.8,
            1.2,
            1.3,
            1.5,
            1.8,
            2.0,
            2.4,
            2.8,
            2.7,
            2.9
        ],
        revenueSeries: [
            0.3,
            0.8,
            0.7,
            1.0,
            1.2,
            1.3,
            1.6,
            1.9,
            2.2,
            2.5,
            2.4,
            2.6
        ],
        gainSeries: [
            8,
            19,
            27,
            35,
            41,
            44,
            48,
            52,
            58,
            55,
            61,
            72
        ],
        flow: {
            left: {
                acquire: "2.1K",
                build: "0.9K",
                contain: "0.5K"
            },
            right: {
                acquire: "2.1K",
                build: "0.8K",
                contain: "0.7K"
            }
        }
    },
    build: {
        ...lifestageData.all.build,
        metrics: {
            segments: "9",
            eligible: "740K",
            seenRate: "Ð 14K",
            revenue: "Ð 420K",
            avgRevenue: "Ð 93K"
        }
    },
    contain: {
        ...lifestageData.all.contain,
        metrics: {
            segments: "6",
            eligible: "360K",
            seenRate: "Ð 9K",
            revenue: "Ð 230K",
            avgRevenue: "Ð 67K"
        }
    }
};
lifestageData["al-dhafra"] = {
    acquire: {
        ...lifestageData.all.acquire,
        metrics: {
            segments: "9",
            eligible: "620K",
            seenRate: "Ð 16K",
            revenue: "Ð 260K",
            avgRevenue: "Ð 91K"
        },
        patientSeries: [
            0.2,
            0.5,
            0.6,
            0.7,
            0.85,
            0.92,
            1.05,
            1.16,
            1.23,
            1.3,
            1.36,
            1.4
        ],
        revenueSeries: [
            0.18,
            0.4,
            0.5,
            0.6,
            0.72,
            0.78,
            0.9,
            1.0,
            1.06,
            1.12,
            1.2,
            1.28
        ],
        gainSeries: [
            6,
            12,
            18,
            25,
            29,
            31,
            36,
            39,
            44,
            42,
            48,
            54
        ],
        flow: {
            left: {
                acquire: "0.8K",
                build: "0.4K",
                contain: "0.2K"
            },
            right: {
                acquire: "0.8K",
                build: "0.3K",
                contain: "0.3K"
            }
        }
    },
    build: {
        ...lifestageData.all.build,
        metrics: {
            segments: "5",
            eligible: "280K",
            seenRate: "Ð 10K",
            revenue: "Ð 180K",
            avgRevenue: "Ð 72K"
        }
    },
    contain: {
        ...lifestageData.all.contain,
        metrics: {
            segments: "3",
            eligible: "140K",
            seenRate: "Ð 7K",
            revenue: "Ð 92K",
            avgRevenue: "Ð 53K"
        }
    }
};
function LifestageDashboard({ stage }) {
    const [appliedFilters, setAppliedFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        startDate: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_DATE_RANGE"].startDate,
        endDate: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_DATE_RANGE"].endDate,
        region: "all",
        campaignType: "All",
        condition: "All"
    });
    const [draftFilters, setDraftFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(appliedFilters);
    const { startDate, endDate, region, campaignType, condition } = appliedFilters;
    const meta = stageMeta[stage];
    const stageColors = stageVisualColors[stage];
    const data = lifestageData[region][stage];
    const monthRatio = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMonthRatio"])({
        startDate,
        endDate
    });
    const visibleMonths = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sliceMonths"])(months, {
        startDate,
        endDate
    });
    const lifestageTrendFilters = {
        startDate,
        endDate,
        stage,
        region,
        condition,
        campaignType
    };
    const lifestagePeriodLabels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hvm$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLifestagePeriodLabels"])(lifestageTrendFilters);
    const lifestageTrendData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hvm$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLifestageTrendData"])(lifestageTrendFilters);
    const datasetKpis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hvm$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLifestageKpiCards"])(lifestageTrendFilters);
    const datasetPatientFlow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hvm$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLifestagePatientFlow"])(lifestageTrendFilters);
    const datasetTopConditions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hvm$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLifestageTopConditions"])(lifestageTrendFilters);
    const datasetProviderBubbles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hvm$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLifestageProviderPerformance"])(lifestageTrendFilters);
    const datasetCampaigns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hvm$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLifestageCampaignList"])(lifestageTrendFilters);
    const datasetConversions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hvm$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLifestageConversionByCampaign"])(lifestageTrendFilters);
    const topConditions = data.topConditions.filter((item)=>condition === "All" || item.label === condition);
    const filteredConversions = data.conversionRows.filter((item)=>(condition === "All" || item.condition === condition) && (campaignType === "All" || item.campaignType === campaignType));
    const filteredConditions = data.nextConditions.filter((item)=>(condition === "All" || item.condition === condition) && (region === "all" || item.region === region || item.region === "all"));
    const filteredInterventions = data.interventions.filter((item)=>(condition === "All" || item.condition === condition) && (campaignType === "All" || item.campaignType === campaignType));
    const filteredCampaigns = data.campaigns.filter((item)=>(condition === "All" || item.condition === condition) && (campaignType === "All" || item.campaignType === campaignType));
    const visiblePatientSeries = stage === "acquire" ? lifestageTrendData.patientValues : (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sliceMonths"])(data.patientSeries, {
        startDate,
        endDate
    });
    const visibleRevenueSeries = stage === "acquire" ? lifestageTrendData.revenueValues : (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sliceMonths"])(data.revenueSeries, {
        startDate,
        endDate
    });
    const visibleGainSeries = stage === "acquire" ? lifestageTrendData.gainValues : (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sliceMonths"])(data.gainSeries, {
        startDate,
        endDate
    });
    const visibleChartLabels = stage === "acquire" ? lifestagePeriodLabels.map((period)=>period.label) : visibleMonths;
    const visiblePeriodLabels = stage === "acquire" ? lifestagePeriodLabels : undefined;
    const visibleMetrics = datasetKpis;
    const visibleTopConditions = datasetTopConditions.length ? datasetTopConditions : topConditions.map((item)=>({
            ...item,
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scaleDisplayValue"])(item.value, monthRatio)
        }));
    const visibleCampaigns = datasetCampaigns.length ? datasetCampaigns : filteredCampaigns.map((item)=>({
            ...item,
            eligible: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scaleDisplayValue"])(item.eligible, monthRatio),
            avgRevenue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scaleDisplayValue"])(item.avgRevenue, monthRatio),
            incrementalRevenue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2d$filter$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scaleDisplayValue"])(item.incrementalRevenue, monthRatio)
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2d$shell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DashboardShell"], {
        pageClassName: "overviewPage lifestagePage",
        title: meta.title,
        breadcrumbCurrent: meta.title,
        breadcrumbTrail: [
            {
                label: "Overview",
                href: "/overview"
            },
            {
                label: meta.title
            }
        ],
        entityTabs: entityTabs,
        activeEntityTab: "Entity 1",
        activeNav: "lifestage",
        activeConditionStage: stage,
        headerTabsClassName: "overviewTabs",
        bodyClassName: "lifestageBody",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lifestageFilterRow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `lifestageStageTabs stage-${stage}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "lifestageStageTabsIndicator",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/lifestage-dashboard.tsx",
                                lineNumber: 336,
                                columnNumber: 11
                            }, this),
                            [
                                "acquire",
                                "build",
                                "contain"
                            ].map((stageKey)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/lifestage-overview/${stageKey}`,
                                    className: `lifestageStageTab ${stageMeta[stageKey].colorClass} ${stage === stageKey ? "active" : ""}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: stageMeta[stageKey].label.toUpperCase()
                                    }, void 0, false, {
                                        fileName: "[project]/components/lifestage-dashboard.tsx",
                                        lineNumber: 343,
                                        columnNumber: 15
                                    }, this)
                                }, stageKey, false, {
                                    fileName: "[project]/components/lifestage-dashboard.tsx",
                                    lineNumber: 338,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lifestage-dashboard.tsx",
                        lineNumber: 335,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lifestageFilters",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "filterGroup",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Date Range"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lifestage-dashboard.tsx",
                                        lineNumber: 350,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        className: "filterInput short",
                                        value: draftFilters.startDate,
                                        onChange: (event)=>setDraftFilters((current)=>({
                                                    ...current,
                                                    startDate: event.target.value
                                                }))
                                    }, void 0, false, {
                                        fileName: "[project]/components/lifestage-dashboard.tsx",
                                        lineNumber: 351,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        className: "filterInput short",
                                        value: draftFilters.endDate,
                                        onChange: (event)=>setDraftFilters((current)=>({
                                                    ...current,
                                                    endDate: event.target.value
                                                }))
                                    }, void 0, false, {
                                        fileName: "[project]/components/lifestage-dashboard.tsx",
                                        lineNumber: 357,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lifestage-dashboard.tsx",
                                lineNumber: 349,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "filterGroup",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Regions"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lifestage-dashboard.tsx",
                                        lineNumber: 365,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "filterSelectWrap",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "filterInput filterSelect",
                                            value: draftFilters.region,
                                            onChange: (event)=>setDraftFilters((current)=>({
                                                        ...current,
                                                        region: event.target.value
                                                    })),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "all",
                                                    children: "All"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/lifestage-dashboard.tsx",
                                                    lineNumber: 372,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "abu-dhabi",
                                                    children: "Abu Dhabi"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/lifestage-dashboard.tsx",
                                                    lineNumber: 373,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "al-ain",
                                                    children: "Al Ain"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/lifestage-dashboard.tsx",
                                                    lineNumber: 374,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "al-dhafra",
                                                    children: "Al Dhafra"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/lifestage-dashboard.tsx",
                                                    lineNumber: 375,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/lifestage-dashboard.tsx",
                                            lineNumber: 367,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/lifestage-dashboard.tsx",
                                        lineNumber: 366,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lifestage-dashboard.tsx",
                                lineNumber: 364,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "filterGroup",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Campaign Type"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lifestage-dashboard.tsx",
                                        lineNumber: 380,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "filterSelectWrap",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "filterInput filterSelect",
                                            value: draftFilters.campaignType,
                                            onChange: (event)=>setDraftFilters((current)=>({
                                                        ...current,
                                                        campaignType: event.target.value
                                                    })),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "All",
                                                    children: "All"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/lifestage-dashboard.tsx",
                                                    lineNumber: 387,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Outreach",
                                                    children: "Outreach"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/lifestage-dashboard.tsx",
                                                    lineNumber: 388,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Referral",
                                                    children: "Referral"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/lifestage-dashboard.tsx",
                                                    lineNumber: 389,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Follow-up",
                                                    children: "Follow-up"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/lifestage-dashboard.tsx",
                                                    lineNumber: 390,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Retention",
                                                    children: "Retention"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/lifestage-dashboard.tsx",
                                                    lineNumber: 391,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/lifestage-dashboard.tsx",
                                            lineNumber: 382,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/lifestage-dashboard.tsx",
                                        lineNumber: 381,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lifestage-dashboard.tsx",
                                lineNumber: 379,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "filterGroup",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Condition"
                                    }, void 0, false, {
                                        fileName: "[project]/components/lifestage-dashboard.tsx",
                                        lineNumber: 396,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "filterSelectWrap",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "filterInput filterSelect",
                                            value: draftFilters.condition,
                                            onChange: (event)=>setDraftFilters((current)=>({
                                                        ...current,
                                                        condition: event.target.value
                                                    })),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "All",
                                                    children: "All"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/lifestage-dashboard.tsx",
                                                    lineNumber: 403,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Diabetes",
                                                    children: "Diabetes"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/lifestage-dashboard.tsx",
                                                    lineNumber: 404,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Hypertension",
                                                    children: "Hypertension"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/lifestage-dashboard.tsx",
                                                    lineNumber: 405,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Obesity",
                                                    children: "Obesity"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/lifestage-dashboard.tsx",
                                                    lineNumber: 406,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Cardiac",
                                                    children: "Cardiac"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/lifestage-dashboard.tsx",
                                                    lineNumber: 407,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/lifestage-dashboard.tsx",
                                            lineNumber: 398,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/lifestage-dashboard.tsx",
                                        lineNumber: 397,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lifestage-dashboard.tsx",
                                lineNumber: 395,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "applyButton",
                                onClick: ()=>setAppliedFilters(draftFilters),
                                children: "APPLY"
                            }, void 0, false, {
                                fileName: "[project]/components/lifestage-dashboard.tsx",
                                lineNumber: 411,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lifestage-dashboard.tsx",
                        lineNumber: 348,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lifestage-dashboard.tsx",
                lineNumber: 334,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lifestageMainGrid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lifestageContentColumn",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lifestageMetricGrid",
                                children: visibleMetrics.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        className: "metricCard",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: card.icon,
                                                alt: "",
                                                className: "metricIcon"
                                            }, void 0, false, {
                                                fileName: "[project]/components/lifestage-dashboard.tsx",
                                                lineNumber: 441,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "metricContent",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        children: card.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/lifestage-dashboard.tsx",
                                                        lineNumber: 443,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "metricValueRow",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: card.value
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/lifestage-dashboard.tsx",
                                                            lineNumber: 445,
                                                            columnNumber: 17
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/lifestage-dashboard.tsx",
                                                        lineNumber: 444,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/lifestage-dashboard.tsx",
                                                lineNumber: 442,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, card.title, true, {
                                        fileName: "[project]/components/lifestage-dashboard.tsx",
                                        lineNumber: 440,
                                        columnNumber: 11
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/lifestage-dashboard.tsx",
                                lineNumber: 438,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lifestageTopGrid",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "glassCard eligiblePanel",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: "Eligible Patient Base"
                                            }, void 0, false, {
                                                fileName: "[project]/components/lifestage-dashboard.tsx",
                                                lineNumber: 453,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "chartLegend",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `legend ${stageColors.legend}`,
                                                        children: "Patients"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/lifestage-dashboard.tsx",
                                                        lineNumber: 455,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "legend revenue",
                                                        children: "Revenue"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/lifestage-dashboard.tsx",
                                                        lineNumber: 456,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/lifestage-dashboard.tsx",
                                                lineNumber: 454,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "eligibleChart",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$export$2d$visuals$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExportDualAxisLineChart"], {
                                                    patientValues: visiblePatientSeries.map((value)=>Number((value * 1000).toFixed(2))),
                                                    revenueValues: visibleRevenueSeries,
                                                    labels: visibleChartLabels,
                                                    periodLabels: visiblePeriodLabels,
                                                    patientColor: stageColors.primary,
                                                    revenueColor: stageColors.soft
                                                }, void 0, false, {
                                                    fileName: "[project]/components/lifestage-dashboard.tsx",
                                                    lineNumber: 459,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/lifestage-dashboard.tsx",
                                                lineNumber: 458,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/lifestage-dashboard.tsx",
                                        lineNumber: 452,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "glassCard flowPanel",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: "Patient Flow"
                                            }, void 0, false, {
                                                fileName: "[project]/components/lifestage-dashboard.tsx",
                                                lineNumber: 471,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$export$2d$visuals$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExportSankeyChart"], {
                                                left: datasetPatientFlow.left,
                                                right: datasetPatientFlow.right
                                            }, void 0, false, {
                                                fileName: "[project]/components/lifestage-dashboard.tsx",
                                                lineNumber: 472,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/lifestage-dashboard.tsx",
                                        lineNumber: 470,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "glassCard revenueGainPanel",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: "Revenue Gain"
                                            }, void 0, false, {
                                                fileName: "[project]/components/lifestage-dashboard.tsx",
                                                lineNumber: 476,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "lineChart",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$export$2d$visuals$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExportMultiLineChart"], {
                                                    series: [
                                                        visibleGainSeries
                                                    ],
                                                    labels: visibleChartLabels,
                                                    periodLabels: visiblePeriodLabels,
                                                    colors: [
                                                        stageColors.primary
                                                    ],
                                                    names: [
                                                        "Revenue Gain"
                                                    ],
                                                    valueSuffix: stage === "acquire" ? "M" : "",
                                                    yAxisLabel: stage === "acquire" ? "Revenue (M)" : undefined
                                                }, void 0, false, {
                                                    fileName: "[project]/components/lifestage-dashboard.tsx",
                                                    lineNumber: 478,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/lifestage-dashboard.tsx",
                                                lineNumber: 477,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/lifestage-dashboard.tsx",
                                        lineNumber: 475,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "glassCard conversionPanel",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: "Conversion Rate by Campaign"
                                            }, void 0, false, {
                                                fileName: "[project]/components/lifestage-dashboard.tsx",
                                                lineNumber: 491,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "conversionBars rechartsHorizontalBars",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$export$2d$visuals$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExportHorizontalBarChart"], {
                                                    data: (datasetConversions.length ? datasetConversions : filteredConversions).map((item)=>({
                                                            label: item.label,
                                                            value: item.value
                                                        })),
                                                    height: 235,
                                                    color: stageColors.primary
                                                }, void 0, false, {
                                                    fileName: "[project]/components/lifestage-dashboard.tsx",
                                                    lineNumber: 493,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/lifestage-dashboard.tsx",
                                                lineNumber: 492,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/lifestage-dashboard.tsx",
                                        lineNumber: 490,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lifestage-dashboard.tsx",
                                lineNumber: 451,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lifestageBottomGrid",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "glassCard donutPanel",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: "Top Conditions by Revenue"
                                            }, void 0, false, {
                                                fileName: "[project]/components/lifestage-dashboard.tsx",
                                                lineNumber: 507,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "donutLegend",
                                                children: visibleTopConditions.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `legend donut donut-${index + 1}`,
                                                        children: item.label
                                                    }, item.label, false, {
                                                        fileName: "[project]/components/lifestage-dashboard.tsx",
                                                        lineNumber: 510,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/lifestage-dashboard.tsx",
                                                lineNumber: 508,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$export$2d$visuals$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExportLabeledDonutChart"], {
                                                data: visibleTopConditions.map((item, index)=>({
                                                        label: item.label,
                                                        pct: Number(item.share.replace("%", "")),
                                                        color: [
                                                            "#8A68E8",
                                                            "#3B8DF1",
                                                            "#47CFC3",
                                                            "#FB4C8E"
                                                        ][index % 4],
                                                        value: `${item.value} (${item.share})`
                                                    })),
                                                height: 320
                                            }, void 0, false, {
                                                fileName: "[project]/components/lifestage-dashboard.tsx",
                                                lineNumber: 515,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/lifestage-dashboard.tsx",
                                        lineNumber: 506,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "glassCard providerBubblePanel",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: "Provider Performance"
                                            }, void 0, false, {
                                                fileName: "[project]/components/lifestage-dashboard.tsx",
                                                lineNumber: 527,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$export$2d$visuals$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExportBubbleChart"], {
                                                data: datasetProviderBubbles,
                                                height: 300,
                                                showValueLabels: false
                                            }, void 0, false, {
                                                fileName: "[project]/components/lifestage-dashboard.tsx",
                                                lineNumber: 528,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/lifestage-dashboard.tsx",
                                        lineNumber: 526,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "glassCard campaignListPanel",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: "Campaigns List"
                                            }, void 0, false, {
                                                fileName: "[project]/components/lifestage-dashboard.tsx",
                                                lineNumber: 532,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "summaryTable",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "summaryHead lifestageSummaryHead",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Campaign"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/lifestage-dashboard.tsx",
                                                                lineNumber: 535,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Screening Stage"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/lifestage-dashboard.tsx",
                                                                lineNumber: 536,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Eligible Patients"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/lifestage-dashboard.tsx",
                                                                lineNumber: 537,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Seen Rate"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/lifestage-dashboard.tsx",
                                                                lineNumber: 538,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Avg. Rev per Person (AED)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/lifestage-dashboard.tsx",
                                                                lineNumber: 539,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Incremental Revenue"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/lifestage-dashboard.tsx",
                                                                lineNumber: 540,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/lifestage-dashboard.tsx",
                                                        lineNumber: 534,
                                                        columnNumber: 17
                                                    }, this),
                                                    visibleCampaigns.map((row, rowIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "summaryRow lifestageSummaryRow",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: row.campaign
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/lifestage-dashboard.tsx",
                                                                    lineNumber: 544,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: row.stage
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/lifestage-dashboard.tsx",
                                                                    lineNumber: 545,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: row.eligible
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/lifestage-dashboard.tsx",
                                                                    lineNumber: 546,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    title: `${row.campaign} seen rate: ${row.seenRate}`,
                                                                    children: row.seenRate
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/lifestage-dashboard.tsx",
                                                                    lineNumber: 547,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: row.avgRevenue
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/lifestage-dashboard.tsx",
                                                                    lineNumber: 548,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: row.incrementalRevenue
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/lifestage-dashboard.tsx",
                                                                    lineNumber: 549,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, `${row.campaign}-${rowIndex}`, true, {
                                                            fileName: "[project]/components/lifestage-dashboard.tsx",
                                                            lineNumber: 543,
                                                            columnNumber: 19
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/lifestage-dashboard.tsx",
                                                lineNumber: 533,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/lifestage-dashboard.tsx",
                                        lineNumber: 531,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lifestage-dashboard.tsx",
                                lineNumber: 505,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lifestage-dashboard.tsx",
                        lineNumber: 437,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "lifestageAside",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "lifestageRailSection asidePanel nextConditionPanel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Next Condition"
                                }, void 0, false, {
                                    fileName: "[project]/components/lifestage-dashboard.tsx",
                                    lineNumber: 559,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "conditionCards",
                                    children: filteredConditions.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "conditionCard",
                                            title: `${card.title} · ${card.text}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "conditionCardHeader",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            children: card.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/lifestage-dashboard.tsx",
                                                            lineNumber: 564,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `conditionBadge ${card.priority.toLowerCase()}`,
                                                            children: card.priority
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/lifestage-dashboard.tsx",
                                                            lineNumber: 565,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/lifestage-dashboard.tsx",
                                                    lineNumber: 563,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "conditionCardText",
                                                    children: card.text
                                                }, void 0, false, {
                                                    fileName: "[project]/components/lifestage-dashboard.tsx",
                                                    lineNumber: 567,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "conditionPills",
                                                    children: card.pills.map((pill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: pill
                                                        }, pill, false, {
                                                            fileName: "[project]/components/lifestage-dashboard.tsx",
                                                            lineNumber: 570,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/lifestage-dashboard.tsx",
                                                    lineNumber: 568,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, `${card.title}-${card.priority}-${card.region}`, true, {
                                            fileName: "[project]/components/lifestage-dashboard.tsx",
                                            lineNumber: 562,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/lifestage-dashboard.tsx",
                                    lineNumber: 560,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/components/lifestage-dashboard.tsx",
                                    lineNumber: 576,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Next Intervention"
                                }, void 0, false, {
                                    fileName: "[project]/components/lifestage-dashboard.tsx",
                                    lineNumber: 577,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "asideCards",
                                    children: filteredInterventions.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "asideCard",
                                            title: `${card.title} · ${card.text}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `miniFlag ${card.badge.toLowerCase().replace(/\s+/g, "-")}`,
                                                    children: card.badge
                                                }, void 0, false, {
                                                    fileName: "[project]/components/lifestage-dashboard.tsx",
                                                    lineNumber: 581,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: card.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/lifestage-dashboard.tsx",
                                                    lineNumber: 582,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: card.text
                                                }, void 0, false, {
                                                    fileName: "[project]/components/lifestage-dashboard.tsx",
                                                    lineNumber: 583,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "asidePills",
                                                    children: card.pills.map((pill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: pill
                                                        }, pill, false, {
                                                            fileName: "[project]/components/lifestage-dashboard.tsx",
                                                            lineNumber: 586,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/lifestage-dashboard.tsx",
                                                    lineNumber: 584,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, card.title, true, {
                                            fileName: "[project]/components/lifestage-dashboard.tsx",
                                            lineNumber: 580,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/lifestage-dashboard.tsx",
                                    lineNumber: 578,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/lifestage-dashboard.tsx",
                            lineNumber: 558,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/lifestage-dashboard.tsx",
                        lineNumber: 557,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lifestage-dashboard.tsx",
                lineNumber: 436,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/lifestage-dashboard.tsx",
        lineNumber: 319,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_12l5zo0._.js.map