import Link from "next/link";
import { DashboardShell } from "../../components/dashboard-shell";

const entityTabs = [
  "Entity 1",
  "Entity 2",
  "Entity 3",
  "Entity 4",
  "Entity 5",
  "Entity 6",
  "Entity 7",
  "Entity 8",
  "Entity 9",
];

const metricCards = [
  {
    title: "Total Campaigns",
    value: "25",
    icon: "/overview-conditions.png",
  },
  {
    title: "Active This Month",
    value: "05",
    icon: "/overview-announcement.png",
  },
  {
    title: "Upcoming Campaigns",
    value: "08",
    icon: "/overview-announcement.png",
    tone: "amber",
  },
  {
    title: "Completed",
    value: "07",
    secondaryLabel: "Completed",
    icon: "/overview-revenue.png",
  },
  {
    title: "Year Coverage",
    value: "100%",
    icon: "/overview-seen-rate.png",
  },
];

const timelineRows = [
  {
    group: "Acquire",
    color: "blue",
    items: [
      { label: "New Patient Outreach", start: 1, span: 2, tone: "solid" },
      { label: "Cardiac Risk Screening", start: 1, span: 3, tone: "muted" },
      { label: "Flu Vaccination Drive", start: 5, span: 4, tone: "muted" },
      { label: "BMI Awareness Month", start: 7, span: 4, tone: "solid" },
      { label: "Year-End Checkup Push", start: 9, span: 4, tone: "solid" },
    ],
  },
  {
    group: "Build",
    color: "green",
    items: [
      { label: "Diabetic Monitoring", start: 1, span: 4, tone: "solid" },
      { label: "Mental Wellness Program", start: 3, span: 3, tone: "solid" },
      { label: "Post-Op Follow-up", start: 2, span: 6, tone: "solid" },
      { label: "Maternal Health Support", start: 8, span: 3, tone: "muted" },
      { label: "Nutrition & Lifestyle", start: 10, span: 3, tone: "solid" },
    ],
  },
  {
    group: "Contain",
    color: "orange",
    items: [
      { label: "At-Risk Re-engagement", start: 2, span: 3, tone: "muted" },
      { label: "Obesity Intervention", start: 5, span: 3, tone: "solid" },
      { label: "Chronic Meds Adherence", start: 7, span: 2, tone: "muted" },
      { label: "Winter Readmit Prevention", start: 10, span: 2, tone: "solid" },
    ],
  },
];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function CampaignCalendarPage() {
  return (
    <DashboardShell
      pageClassName="overviewPage calendarPage"
      title="Campaign Calendar"
      breadcrumbCurrent="Campaign Calendar"
      entityTabs={entityTabs}
      activeEntityTab="Entity 1"
      activeNav="overview"
      headerTabsClassName="overviewTabs"
      bodyClassName="calendarBody"
      eventCalendarActive
    >
      <div className="calendarFilterRow">
        <div className="entityTabs modeTabs" aria-label="Calendar mode tabs">
          <button className="entityTab active" type="button">
            Timeline
          </button>
          <Link className="entityTab" href="/campaign-details">
            Campaign Details
          </Link>
        </div>

        <div className="calendarFilters">
          <div className="filterGroup">
            <span>Year</span>
            <button type="button" className="filterInput short">2026</button>
          </div>
          <div className="filterGroup">
            <span>Section</span>
            <button type="button" className="filterInput">All</button>
          </div>
          <div className="filterGroup">
            <span>Lifestage Type</span>
            <button type="button" className="filterInput">All</button>
          </div>
          <div className="filterGroup">
            <span>Conditions</span>
            <button type="button" className="filterInput">All</button>
          </div>
          <div className="filterGroup">
            <span>Status</span>
            <button type="button" className="filterInput">All</button>
          </div>
          <button type="button" className="applyButton">APPLY</button>
        </div>
      </div>

      <div className="calendarMetricGrid">
        {metricCards.map((card) => (
          <article key={card.title} className="metricCard calendarMetricCard">
            <img src={card.icon} alt="" className={`metricIcon ${card.tone === "amber" ? "amber" : ""}`} />
            <div className="metricContent">
              <h2>{card.title}</h2>
              <div className="metricValueRow">
                <strong>{card.value}</strong>
                {card.secondaryLabel ? <span className="metricInlineLabel">{card.secondaryLabel}</span> : null}
              </div>
            </div>
          </article>
        ))}
      </div>

      <section className="glassCard timelinePanel">
        <h2>Campaign Timeline — 2026</h2>
        <div className="timelineTable">
          <div className="timelineHead">
            <div className="timelineBandCol" />
            <div className="timelineLabelCol">Order Date</div>
            {months.map((month) => (
              <div key={month} className="timelineMonthCell">
                {month}
              </div>
            ))}
          </div>

          {timelineRows.map((group) => (
            <div key={group.group} className="timelineSection">
              <div className={`timelineSectionBand ${group.color}`}>{group.group}</div>
              <div className="timelineSectionRows">
                {group.items.map((item, itemIndex) => (
                  <div key={`${group.group}-${item.label}`} className="timelineRow">
                    <div className="timelineLabelCell">
                      <span className={`timelineDot ${group.color} ${item.tone === "muted" ? "muted" : ""}`} />
                      <span>{item.label}</span>
                    </div>

                    <div className="timelineTrack">
                      {months.map((month) => (
                        <span key={`${item.label}-${month}`} className="timelineGridCell" />
                      ))}
                      <div
                        className={`timelineBar ${group.color} ${item.tone === "muted" ? "muted" : ""}`}
                        style={{
                          gridColumn: `${item.start} / span ${item.span}`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </DashboardShell>
  );
}
