import Link from "next/link";
import { DashboardShell } from "../../components/dashboard-shell";

const moduleCards = [
  { title: "ABC of HVM", subtitle: "Introduction to HVM", href: "/introduction" },
  { title: "ACQUIRE", subtitle: "New Patients", href: "/overview" },
  { title: "BUILD", subtitle: "Enhance care", href: "/overview" },
  { title: "CONTAIN", subtitle: "Retain at-risk", href: "/overview" },
  { title: "REVENUE", subtitle: "Revenue by Patients", href: "/overview" },
  { title: "Obesity/IFHAS", subtitle: "Detail by Campaigns" },
  { title: "Diabetes/Antenatal", subtitle: "Detail by Campaigns" },
];

export default function IntroductionPage() {
  return (
    <DashboardShell
      pageClassName="introPage"
      title="Introduction to HVM"
      breadcrumbCurrent="Introduction to HVM"
      activeNav="introduction"
      bodyClassName="introContent"
    >
      <div className="introLeftColumn">
        <div className="introLeftVisual">
          <img
            src="/intro-left.png"
            alt="HVM introduction pillars for Acquire, Build, and Contain"
          />
        </div>

        <Link href="/overview" className="skipIntroButton">
          SKIP INTRO
        </Link>
      </div>

      <div className="introRightColumn">
        <section className="infoPanel">
          <h2>INTRODUCTION</h2>
          <p>
            This interactive dashboard provides a consolidated view of HVM M&amp;E and the live
            campaigns across Pure Health entities for the Health Value Management Project.
          </p>
          <p>
            The dashboard is designed to show and clarify the progress and impact of each campaign
            under the HVM Project, by providing multiple detailed views that reflect the up to date
            data.
          </p>

          <div className="moduleGrid">
            {moduleCards.map((card) =>
              card.href ? (
                <Link key={card.title} href={card.href} className="moduleCard moduleCardLink">
                  <h3>{card.title}</h3>
                  <p>{card.subtitle}</p>
                </Link>
              ) : (
                <article key={card.title} className="moduleCard">
                  <h3>{card.title}</h3>
                  <p>{card.subtitle}</p>
                </article>
              ),
            )}
          </div>
        </section>

        <section className="infoPanel">
          <h2>NOTES</h2>
          <p>
            When going on the next main page of the dashboard, kindly note that the 3 main pillars
            titles (ACQUIRE, BUILD, CONTAIN, Revenue) are clickable and will take you further
            throughout the dashboard.
          </p>
          <p>For the navigation throughout the dashboard Left navigation will help</p>
          <p>
            Home button in the breadcrumb also available to go back to the main ABC&apos;s of HVM
            page.
          </p>
        </section>

        <section className="infoPanel">
          <h2>IMPORTANT DEFINITIONS</h2>
          <div className="definitionCard">
            <strong>Total Targeted Patients</strong>
            <p>
              Total number of unique patients included in the HVM campaign population (eligible /
              targeted patients), based on the selected filters (Year, Entity, HCF Level, Campaign
              Group, etc.).
            </p>
          </div>
        </section>
      </div>
    </DashboardShell>
  );
}
