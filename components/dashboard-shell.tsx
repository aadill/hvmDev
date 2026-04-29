"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { CSSProperties, Fragment, ReactNode, useEffect, useState } from "react";

type DashboardShellProps = {
  children: ReactNode;
  pageClassName: string;
  title: string;
  breadcrumbCurrent: string;
  breadcrumbTrail?: Array<{ label: string; href?: string }>;
  entityTabs?: string[];
  activeEntityTab?: string;
  activeNav: "introduction" | "clinicalGenerator" | "overview" | "calendar" | "lifestage" | "subCondition" | "campaignDetails";
  defaultNavOpen?: boolean;
  headerTabsClassName?: string;
  bodyClassName?: string;
  eventCalendarHref?: string;
  eventCalendarActive?: boolean;
  showEventCalendar?: boolean;
  activeConditionStage?: "acquire" | "build" | "contain";
};

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5.64 4.22 12 10.59l6.36-6.37 1.42 1.42L13.41 12l6.37 6.36-1.42 1.42L12 13.41l-6.36 6.37-1.42-1.42L10.59 12 4.22 5.64Z" />
  </svg>
);

const IntroIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.75a9.25 9.25 0 1 0 9.25 9.25A9.26 9.26 0 0 0 12 2.75Zm0 16.5a7.25 7.25 0 1 1 7.25-7.25A7.26 7.26 0 0 1 12 19.25Zm-.9-10.1h1.8v6.15h-1.8Zm.9-3.1a1.15 1.15 0 1 1-1.15 1.15A1.15 1.15 0 0 1 12 6.05Z" />
  </svg>
);

const OverviewIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3.5 4.5h17v15h-17Zm1.5 1.5V18h14V6Zm2 9h2v2H7Zm0-4h2v3H7Zm4-3h2v7h-2Zm4 5h2v2h-2Zm0-3h2v2h-2Z" />
  </svg>
);

const ConditionIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 19h2v-5H4Zm4 0h2v-9H8Zm4 0h2v-3h-2Zm4 0h2V9h-2ZM5 11l3-2 4 2 6-5 1.2 1.6L12 13l-4-2-2.9 1.93Z" />
  </svg>
);

const CampaignIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 4h10l1.5 2H20v11h-6l-1.5-2H4Zm2 2v7h5.5l1.5 2H18V8h-3.5L13 6Zm1 10h10v2H7Zm10.08-9.8 2.12-2.12 1.42 1.42-2.12 2.12Z" />
  </svg>
);

const ClinicalGeneratorIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 2.75h7.2L19 7.55V21.25H7Zm1.8 1.8v14.9h8.4V8.3h-3.75V4.55Zm6.45 1.25v.7h.7Zm-4.95 5.1h5.4v1.5h-5.4Zm0 3h5.4v1.5h-5.4Zm0 3h3.65v1.5H10.3ZM3.5 6.25h1.8v13.2h-1.8Z" />
  </svg>
);

const LogoutIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 4.5h8v2H7v11h6v2H5Zm10.35 3.15 4.35 4.35-4.35 4.35-1.42-1.42 1.94-1.93H10v-2h5.87l-1.94-1.93Z" />
  </svg>
);

export function DashboardShell({
  children,
  pageClassName,
  title,
  breadcrumbCurrent,
  breadcrumbTrail,
  entityTabs,
  activeEntityTab,
  activeNav,
  defaultNavOpen = false,
  headerTabsClassName,
  bodyClassName,
  eventCalendarHref = "/campaign-calendar",
  eventCalendarActive = false,
  showEventCalendar = true,
  activeConditionStage,
}: DashboardShellProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [navOpen, setNavOpen] = useState(defaultNavOpen);
  const [authChecked, setAuthChecked] = useState(false);
  const [dashboardFit, setDashboardFit] = useState({ scale: 1, width: 1920, height: 1080 });
  const shouldFitDashboard = /overviewPage|calendarPage|lifestagePage|campaignDetailsPage|subConditionPage/.test(pageClassName);

  useEffect(() => {
    const isAuthenticated = window.sessionStorage.getItem("hvm-authenticated") === "true";

    if (!isAuthenticated) {
      router.replace("/");
      return;
    }

    setAuthChecked(true);
  }, [router]);

  useEffect(() => {
    if (!shouldFitDashboard) {
      return;
    }

    const updateScale = () => {
      const widthScale = window.innerWidth / 1920;
      const heightScale = window.innerHeight / 1080;
      const nextScale = Math.min(1.45, Math.max(0.64, Math.min(widthScale, heightScale)));
      const scale = Number(nextScale.toFixed(3));
      setDashboardFit({
        scale,
        width: Math.round(window.innerWidth / scale),
        height: Math.round(window.innerHeight / scale),
      });
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [shouldFitDashboard]);

  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!navOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setNavOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navOpen]);

  const breadcrumbItems = breadcrumbTrail?.length
    ? breadcrumbTrail
    : [{ label: breadcrumbCurrent }];

  const handleLogout = () => {
    window.sessionStorage.removeItem("hvm-authenticated");
    setNavOpen(false);
    router.replace("/");
  };

  if (!authChecked) {
    return null;
  }

  return (
    <main
      className={`${pageClassName} ${shouldFitDashboard ? "dashboardFitPage" : ""} ${navOpen ? "navOpen" : ""}`}
      style={
        shouldFitDashboard
          ? ({
              "--dashboard-fit-scale": dashboardFit.scale,
              "--dashboard-fit-width": `${dashboardFit.width}px`,
              "--dashboard-fit-height": `${dashboardFit.height}px`,
            } as CSSProperties)
          : undefined
      }
    >
      {navOpen ? (
        <>
          <button
            className="sideNavBackdrop"
            aria-label="Close navigation"
            onClick={() => setNavOpen(false)}
            type="button"
          />
          <aside className="sideNav">
            <div className="sideNavBody">
              <div className="navSectionLabel">Dashboard</div>
              <nav className="navSection">
                <Link
                  href="/introduction"
                  className={`sideNavItem ${activeNav === "introduction" ? "active" : ""}`}
                  onClick={() => setNavOpen(false)}
                >
                  <span className="sideNavIcon">
                    <IntroIcon />
                  </span>
                  <span>Introduction</span>
                </Link>
                <Link
                  href="/overview"
                  className={`sideNavItem ${activeNav === "overview" ? "active" : ""}`}
                  onClick={() => setNavOpen(false)}
                >
                  <span className="sideNavIcon">
                    <OverviewIcon />
                  </span>
                  <span>Overview</span>
                </Link>
                {/* <Link
                  href="/clinical-regulation-generator"
                  className={`sideNavItem ${activeNav === "clinicalGenerator" ? "active" : ""}`}
                  onClick={() => setNavOpen(false)}
                >
                  <span className="sideNavIcon">
                    <ClinicalGeneratorIcon />
                  </span>
                  <span>Clinical Generator</span>
                </Link> */}
              </nav>

              <div className="navSectionLabel">Conditions</div>
              <div className="navSection navTreeSection">
                <Link
                  href="/lifestage-overview/acquire"
                  className={`sideNavItem groupHeader ${activeNav === "lifestage" ? "active" : ""}`}
                  onClick={() => setNavOpen(false)}
                >
                  <span className="sideNavIcon">
                    <ConditionIcon />
                  </span>
                  <span>Condition Overview</span>
                  <span className="groupCaret">▾</span>
                </Link>
                <div className="sideBranch">
                  <span />
                  <Link
                    href="/lifestage-overview/acquire"
                    className={activeConditionStage === "acquire" ? "active" : ""}
                    onClick={() => setNavOpen(false)}
                  >
                    Acquire
                  </Link>
                  <Link
                    href="/lifestage-overview/build"
                    className={activeConditionStage === "build" ? "active" : ""}
                    onClick={() => setNavOpen(false)}
                  >
                    Build
                  </Link>
                  <Link
                    href="/lifestage-overview/contain"
                    className={activeConditionStage === "contain" ? "active" : ""}
                    onClick={() => setNavOpen(false)}
                  >
                    Contain
                  </Link>
                </div>
              </div>

              <div className="navSectionLabel">Campaigns</div>
              <nav className="navSection">
                <Link
                  href="/campaign-sub-condition"
                  className={`sideNavItem ${activeNav === "subCondition" ? "active" : ""}`}
                  onClick={() => setNavOpen(false)}
                >
                  <span className="sideNavIcon">
                    <CampaignIcon />
                  </span>
                  <span>Campaign Sub Condition</span>
                </Link>
                <Link
                  href="/campaign-details"
                  className={`sideNavItem ${activeNav === "campaignDetails" ? "active" : ""}`}
                  onClick={() => setNavOpen(false)}
                >
                  <span className="sideNavIcon">
                    <CampaignIcon />
                  </span>
                  <span>Campaign Details</span>
                </Link>
                <Link
                  href="/campaign-calendar"
                  className={`sideNavItem ${activeNav === "calendar" ? "active" : ""}`}
                  onClick={() => setNavOpen(false)}
                >
                  <span className="sideNavIcon">
                    <CampaignIcon />
                  </span>
                  <span>Campaign Calendar</span>
                </Link>
              </nav>

              <div className="navSectionLabel">Clinical Guidelines</div>
              <Link
                  href="/clinical-regulation-generator"
                  className={`sideNavItem ${activeNav === "clinicalGenerator" ? "active" : ""}`}
                  onClick={() => setNavOpen(false)}
                >
                  <span className="sideNavIcon">
                    <ClinicalGeneratorIcon />
                  </span>
                  <span>Guidelines Generator</span>
                </Link>
              <nav className="navSection sideNavAccount">
                <button type="button" className="sideNavItem sideNavLogout" onClick={handleLogout}>
                  <span className="sideNavIcon">
                    <LogoutIcon />
                  </span>
                  <span>Logout</span>
                </button>
              </nav>
            </div>
          </aside>
        </>
      ) : null}

      <div className={`overviewCanvas ${navOpen ? "isBlurred" : ""}`}>
        <header className="introHeader overviewHeader">
          <div className="introBrandArea">
            <button
              className={`menuButton ${navOpen ? "menuButtonOpen" : ""}`}
              aria-label={navOpen ? "Close navigation" : "Open navigation"}
              onClick={() => setNavOpen((value) => !value)}
              type="button"
            >
              {navOpen ? (
                <CloseIcon />
              ) : (
                <>
                  <span />
                  <span />
                  <span />
                </>
              )}
            </button>

            <div className="introLogoLockup" aria-label="HVM Health Value Management">
              <span className="introLogoWord">HVM</span>
              <span className="introLogoText">
                <span>HEALTH</span>
                <span>VALUE</span>
                <span>MANAGEMENT</span>
              </span>
            </div>

            <div className="introTitleWrap">
              <h1>{title}</h1>
              <p>
                {breadcrumbItems.map((item, index) => (
                  <Fragment key={item.label}>
                    {index > 0 ? <span>→</span> : null}
                    {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
                  </Fragment>
                ))}
              </p>
            </div>
          </div>

          <div className="introHeaderActions">
            {entityTabs?.length ? (
              <div className={`entityTabs ${headerTabsClassName ?? ""}`} aria-label="Entity tabs">
                {entityTabs.map((pill) => (
                  <button
                    key={pill}
                    className={pill === activeEntityTab ? "entityTab active" : "entityTab"}
                    type="button"
                  >
                    {pill}
                  </button>
                ))}
              </div>
            ) : null}

            {showEventCalendar ? (
              <Link
                href={eventCalendarHref}
                className={`calendarButton ${eventCalendarActive ? "calendarButtonActive" : ""}`}
              >
                <span aria-hidden="true">🗓</span>
                <span>Event Calendar</span>
              </Link>
            ) : null}
          </div>
        </header>

        <section className={`${bodyClassName} dashboardBodyArea ${navOpen ? "isBlurred" : ""}`}>{children}</section>
      </div>
    </main>
  );
}
