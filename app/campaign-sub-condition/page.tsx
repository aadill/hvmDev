"use client";

import { useMemo, useState } from "react";
import { DashboardShell } from "../../components/dashboard-shell";
import { ExportEntitiesSummary, ExportFunnelChart, ExportLabeledDonutChart, ExportMultiLineChart, ExportStackedBarChart } from "../../components/export-visuals";
import {
  getOverviewDatasetDateRange,
  getSubConditionChannelBreakdown,
  getSubConditionConversionSegments,
  getSubConditionDropoff,
  getSubConditionEntities,
  getSubConditionFilterOptions,
  getSubConditionMetrics,
  getSubConditionPatientBars,
  getSubConditionPeriodLabels,
  getSubConditionRevenueSeries,
  getSubConditionSeenRate,
} from "../../components/hvm-data";
import { CartesianGrid, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis, ZAxis } from "recharts";

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

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

type RegionKey = string;
type CampaignType = string;
type ConditionKey = string;
type SubConditionKey = string;

type RegionData = {
  metrics: Array<{ title: string; value: string; subValue?: string; icon: string }>;
  patientBars: Array<{ month: string; stopper: number; dropper: number; tooltip: string }>;
  revenueSeries: number[];
  dropoff: Array<{ label: string; count: string; leftNote: string; rightNote: string; revenue: string; width: number }>;
  channelBreakdown: Array<{ label: string; value: number; count: string; color: string }>;
  seenRate: { total: number; target: number; segments: Array<{ label: string; value: number }> };
  conversionSegments: Array<{ label: string; value: number; color: string; x: number; y: number; size: number }>;
  entities: Array<{ name: string; patients: number; revenue: number }>;
};

const subConditionDefaultDateRange = getOverviewDatasetDateRange();
const subConditionFilterOptions = getSubConditionFilterOptions();
const subConditionOptions: SubConditionKey[] = ["All", ...subConditionFilterOptions.subConditions];
const defaultBubbleSegments = [
  { label: "Chronic care", value: 54, color: "#8f24ff", x: 72, y: 78, size: 168 },
  { label: "Preventive", value: 41, color: "#156cff", x: 34, y: 66, size: 150 },
  { label: "Wellness", value: 29, color: "#11a761", x: 60, y: 36, size: 110 },
  { label: "At-risk", value: 22, color: "#ff1f3d", x: 38, y: 22, size: 72 },
] as const;

function BubbleTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Array<{ payload?: { label: string; value: number; x: number; y: number } }>;
}) {
  if (!active || !payload?.[0]?.payload) {
    return null;
  }

  const point = payload[0].payload;

  return (
    <div className="subConditionChartTooltip">
      <strong>{point.label}</strong>
      <span>{point.value}% conversion</span>
    </div>
  );
}

function BubbleShape(props: {
  cx?: number;
  cy?: number;
  size?: number;
  payload?: { label: string; value: number; color: string; size: number };
}) {
  const { cx = 0, cy = 0, payload } = props;
  if (!payload) {
    return null;
  }

  const radius = Math.max(28, Math.min(54, payload.size / 2.35));
  const shortLabel = payload.label.length > 12 ? `${payload.label.slice(0, 11)}...` : payload.label;

  return (
    <g>
      <circle cx={cx} cy={cy} r={radius} fill={payload.color} fillOpacity={0.2} stroke={payload.color} strokeWidth={2.8} />
      <text x={cx} y={cy - 1} textAnchor="middle" fontSize="16" fontWeight="800" fill={payload.color}>
        {payload.value}%
      </text>
      <text x={cx} y={cy + 15} textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#5a6f87">
        {shortLabel}
      </text>
    </g>
  );
}

const regionData: Record<RegionKey, RegionData> = {
  all: {
    metrics: [
      { title: "Total Eligible Patients", value: "12,480", icon: "/overview-candidate.png" },
      { title: "Patients Contacted", value: "9,104", icon: "/overview-revenue.png" },
      { title: "Engagement Rate", value: "61%", icon: "/overview-conditions.png" },
      { title: "Conversion", value: "3,872", subValue: "(42.5%)", icon: "/overview-candidate.png" },
      { title: "Seen Rate", value: "62.3%", icon: "/overview-seen-rate.png" },
      { title: "Campaigns", value: "5", icon: "/overview-announcement.png" },
    ],
    patientBars: [
      { month: "Jan", stopper: 1700, dropper: 2050, tooltip: "Jan: 3.75K total patients" },
      { month: "Feb", stopper: 2000, dropper: 2850, tooltip: "Feb: 4.85K total patients" },
      { month: "Mar", stopper: 1300, dropper: 2140, tooltip: "Mar: 3.44K total patients" },
      { month: "Apr", stopper: 1220, dropper: 3340, tooltip: "Apr: 4.56K total patients" },
      { month: "May", stopper: 1110, dropper: 2390, tooltip: "May: 3.50K total patients" },
      { month: "Jun", stopper: 1710, dropper: 2050, tooltip: "Jun: 3.76K total patients" },
      { month: "Jul", stopper: 1110, dropper: 2320, tooltip: "Jul: 3.43K total patients" },
      { month: "Aug", stopper: 2080, dropper: 1540, tooltip: "Aug: 3.62K total patients" },
      { month: "Sep", stopper: 2520, dropper: 2040, tooltip: "Sep: 4.56K total patients" },
      { month: "Oct", stopper: 2050, dropper: 1560, tooltip: "Oct: 3.61K total patients" },
      { month: "Nov", stopper: 1390, dropper: 2740, tooltip: "Nov: 4.13K total patients" },
      { month: "Dec", stopper: 1510, dropper: 2030, tooltip: "Dec: 3.54K total patients" },
    ],
    revenueSeries: [80, 180, 140, 220, 280, 275, 350, 480, 575, 548, 528, 532],
    dropoff: [
      { label: "Identified", count: "18,432", leftNote: "100.0% of total", rightNote: "22.5%", revenue: "405.5M", width: 100 },
      { label: "Contacted", count: "14,280", leftNote: "77.5%", rightNote: "18.5%", revenue: "314.2M", width: 77.5 },
      { label: "Appointment Booked", count: "10,120", leftNote: "54.9%", rightNote: "12.5%", revenue: "222.6M", width: 54.9 },
      { label: "Attended", count: "8,850", leftNote: "48.0%", rightNote: "", revenue: "194.7M", width: 48 },
    ],
    channelBreakdown: [
      { label: "SMS", value: 38, count: "72", color: "#8668e0" },
      { label: "Call", value: 32, count: "60", color: "#3b8df1" },
      { label: "App", value: 18, count: "34", color: "#47cfc3" },
      { label: "Walk-in", value: 12, count: "22", color: "#fb4c8e" },
    ],
    seenRate: { total: 73, target: 80, segments: [{ label: "Undiagnosed", value: 78 }, { label: "Pre-diabetic", value: 66 }] },
    conversionSegments: [
      { label: "Chronic care", value: 54, color: "#8f24ff", x: 72, y: 78, size: 168 },
      { label: "Preventive", value: 41, color: "#156cff", x: 34, y: 66, size: 150 },
      { label: "Wellness", value: 29, color: "#11a761", x: 60, y: 36, size: 110 },
      { label: "At-risk", value: 22, color: "#ff1f3d", x: 38, y: 22, size: 72 },
    ],
    entities: [
      { name: "Entity 1", patients: 52, revenue: 110 },
      { name: "Entity 2", patients: 71, revenue: 93 },
      { name: "Entity 3", patients: 56, revenue: 92 },
      { name: "Entity 4", patients: 82, revenue: 142 },
      { name: "Entity 5", patients: 62, revenue: 96 },
    ],
  },
  "abu-dhabi": {
    metrics: [
      { title: "Total Eligible Patients", value: "7,860", icon: "/overview-candidate.png" },
      { title: "Patients Contacted", value: "5,930", icon: "/overview-revenue.png" },
      { title: "Engagement Rate", value: "65%", icon: "/overview-conditions.png" },
      { title: "Conversion", value: "2,540", subValue: "(42.8%)", icon: "/overview-candidate.png" },
      { title: "Seen Rate", value: "66.1%", icon: "/overview-seen-rate.png" },
      { title: "Campaigns", value: "3", icon: "/overview-announcement.png" },
    ],
    patientBars: [
      { month: "Jan", stopper: 1100, dropper: 1640, tooltip: "Jan Abu Dhabi: 2.74K" },
      { month: "Feb", stopper: 1420, dropper: 2140, tooltip: "Feb Abu Dhabi: 3.56K" },
      { month: "Mar", stopper: 980, dropper: 1710, tooltip: "Mar Abu Dhabi: 2.69K" },
      { month: "Apr", stopper: 1020, dropper: 2450, tooltip: "Apr Abu Dhabi: 3.47K" },
      { month: "May", stopper: 990, dropper: 1880, tooltip: "May Abu Dhabi: 2.87K" },
      { month: "Jun", stopper: 1310, dropper: 1690, tooltip: "Jun Abu Dhabi: 3.00K" },
      { month: "Jul", stopper: 950, dropper: 1740, tooltip: "Jul Abu Dhabi: 2.69K" },
      { month: "Aug", stopper: 1530, dropper: 1390, tooltip: "Aug Abu Dhabi: 2.92K" },
      { month: "Sep", stopper: 1820, dropper: 1760, tooltip: "Sep Abu Dhabi: 3.58K" },
      { month: "Oct", stopper: 1640, dropper: 1320, tooltip: "Oct Abu Dhabi: 2.96K" },
      { month: "Nov", stopper: 1030, dropper: 2260, tooltip: "Nov Abu Dhabi: 3.29K" },
      { month: "Dec", stopper: 1180, dropper: 1710, tooltip: "Dec Abu Dhabi: 2.89K" },
    ],
    revenueSeries: [62, 148, 126, 192, 244, 238, 308, 412, 498, 482, 468, 474],
    dropoff: [
      { label: "Identified", count: "11,240", leftNote: "100.0% of total", rightNote: "24.1%", revenue: "228.2M", width: 100 },
      { label: "Contacted", count: "8,640", leftNote: "76.8%", rightNote: "19.3%", revenue: "171.8M", width: 76.8 },
      { label: "Appointment Booked", count: "6,232", leftNote: "55.4%", rightNote: "13.2%", revenue: "120.9M", width: 55.4 },
      { label: "Attended", count: "5,212", leftNote: "46.4%", rightNote: "", revenue: "94.7M", width: 46.4 },
    ],
    channelBreakdown: [
      { label: "SMS", value: 41, count: "68", color: "#8668e0" },
      { label: "Call", value: 29, count: "49", color: "#3b8df1" },
      { label: "App", value: 19, count: "31", color: "#47cfc3" },
      { label: "Walk-in", value: 11, count: "18", color: "#fb4c8e" },
    ],
    seenRate: { total: 76, target: 80, segments: [{ label: "Undiagnosed", value: 81 }, { label: "Pre-diabetic", value: 69 }] },
    conversionSegments: [
      { label: "Chronic care", value: 58, color: "#8f24ff", x: 72, y: 78, size: 170 },
      { label: "Preventive", value: 43, color: "#156cff", x: 36, y: 67, size: 154 },
      { label: "Wellness", value: 27, color: "#11a761", x: 60, y: 35, size: 108 },
      { label: "At-risk", value: 19, color: "#ff1f3d", x: 40, y: 21, size: 68 },
    ],
    entities: [
      { name: "Entity 1", patients: 45, revenue: 98 },
      { name: "Entity 2", patients: 63, revenue: 89 },
      { name: "Entity 3", patients: 51, revenue: 85 },
      { name: "Entity 4", patients: 74, revenue: 135 },
      { name: "Entity 5", patients: 59, revenue: 93 },
    ],
  },
  "al-ain": {
    metrics: [
      { title: "Total Eligible Patients", value: "3,120", icon: "/overview-candidate.png" },
      { title: "Patients Contacted", value: "2,142", icon: "/overview-revenue.png" },
      { title: "Engagement Rate", value: "57%", icon: "/overview-conditions.png" },
      { title: "Conversion", value: "902", subValue: "(36.4%)", icon: "/overview-candidate.png" },
      { title: "Seen Rate", value: "58.7%", icon: "/overview-seen-rate.png" },
      { title: "Campaigns", value: "1", icon: "/overview-announcement.png" },
    ],
    patientBars: [
      { month: "Jan", stopper: 430, dropper: 780, tooltip: "Jan Entity 7: 1.21K" },
      { month: "Feb", stopper: 620, dropper: 1080, tooltip: "Feb Entity 7: 1.70K" },
      { month: "Mar", stopper: 410, dropper: 840, tooltip: "Mar Entity 7: 1.25K" },
      { month: "Apr", stopper: 470, dropper: 920, tooltip: "Apr Entity 7: 1.39K" },
      { month: "May", stopper: 420, dropper: 760, tooltip: "May Entity 7: 1.18K" },
      { month: "Jun", stopper: 520, dropper: 880, tooltip: "Jun Entity 7: 1.40K" },
      { month: "Jul", stopper: 460, dropper: 930, tooltip: "Jul Entity 7: 1.39K" },
      { month: "Aug", stopper: 390, dropper: 690, tooltip: "Aug Entity 7: 1.08K" },
      { month: "Sep", stopper: 520, dropper: 980, tooltip: "Sep Entity 7: 1.50K" },
      { month: "Oct", stopper: 410, dropper: 820, tooltip: "Oct Entity 7: 1.23K" },
      { month: "Nov", stopper: 310, dropper: 1020, tooltip: "Nov Entity 7: 1.33K" },
      { month: "Dec", stopper: 330, dropper: 890, tooltip: "Dec Entity 7: 1.22K" },
    ],
    revenueSeries: [22, 74, 58, 102, 140, 138, 188, 242, 306, 298, 284, 290],
    dropoff: [
      { label: "Identified", count: "4,230", leftNote: "100.0% of total", rightNote: "18.3%", revenue: "92.4M", width: 100 },
      { label: "Contacted", count: "3,044", leftNote: "72.0%", rightNote: "14.9%", revenue: "66.8M", width: 72.0 },
      { label: "Appointment Booked", count: "1,883", leftNote: "44.5%", rightNote: "9.4%", revenue: "37.5M", width: 44.5 },
      { label: "Attended", count: "1,222", leftNote: "28.9%", rightNote: "", revenue: "21.7M", width: 28.9 },
    ],
    channelBreakdown: [
      { label: "SMS", value: 35, count: "29", color: "#8668e0" },
      { label: "Call", value: 34, count: "28", color: "#3b8df1" },
      { label: "App", value: 21, count: "17", color: "#47cfc3" },
      { label: "Walk-in", value: 10, count: "8", color: "#fb4c8e" },
    ],
    seenRate: { total: 69, target: 80, segments: [{ label: "Undiagnosed", value: 74 }, { label: "Pre-diabetic", value: 61 }] },
    conversionSegments: [
      { label: "Chronic care", value: 47, color: "#8f24ff", x: 72, y: 78, size: 148 },
      { label: "Preventive", value: 38, color: "#156cff", x: 34, y: 67, size: 132 },
      { label: "Wellness", value: 26, color: "#11a761", x: 58, y: 34, size: 104 },
      { label: "At-risk", value: 18, color: "#ff1f3d", x: 39, y: 22, size: 64 },
    ],
    entities: [
      { name: "Entity 6", patients: 38, revenue: 62 },
      { name: "Entity 7", patients: 52, revenue: 83 },
      { name: "Entity 8", patients: 33, revenue: 55 },
      { name: "Entity 9", patients: 27, revenue: 42 },
    ],
  },
  "al-dhafra": {
    metrics: [
      { title: "Total Eligible Patients", value: "1,500", icon: "/overview-candidate.png" },
      { title: "Patients Contacted", value: "1,032", icon: "/overview-revenue.png" },
      { title: "Engagement Rate", value: "51%", icon: "/overview-conditions.png" },
      { title: "Conversion", value: "430", subValue: "(33.6%)", icon: "/overview-candidate.png" },
      { title: "Seen Rate", value: "54.1%", icon: "/overview-seen-rate.png" },
      { title: "Campaigns", value: "1", icon: "/overview-announcement.png" },
    ],
    patientBars: [
      { month: "Jan", stopper: 190, dropper: 430, tooltip: "Jan Al Dhafra: 620" },
      { month: "Feb", stopper: 230, dropper: 620, tooltip: "Feb Al Dhafra: 850" },
      { month: "Mar", stopper: 180, dropper: 470, tooltip: "Mar Al Dhafra: 650" },
      { month: "Apr", stopper: 210, dropper: 530, tooltip: "Apr Al Dhafra: 740" },
      { month: "May", stopper: 190, dropper: 470, tooltip: "May Al Dhafra: 660" },
      { month: "Jun", stopper: 220, dropper: 510, tooltip: "Jun Al Dhafra: 730" },
      { month: "Jul", stopper: 205, dropper: 460, tooltip: "Jul Al Dhafra: 665" },
      { month: "Aug", stopper: 160, dropper: 390, tooltip: "Aug Al Dhafra: 550" },
      { month: "Sep", stopper: 240, dropper: 580, tooltip: "Sep Al Dhafra: 820" },
      { month: "Oct", stopper: 190, dropper: 420, tooltip: "Oct Al Dhafra: 610" },
      { month: "Nov", stopper: 150, dropper: 520, tooltip: "Nov Al Dhafra: 670" },
      { month: "Dec", stopper: 170, dropper: 470, tooltip: "Dec Al Dhafra: 640" },
    ],
    revenueSeries: [12, 42, 36, 61, 82, 80, 101, 128, 164, 156, 148, 152],
    dropoff: [
      { label: "Identified", count: "2,962", leftNote: "100.0% of total", rightNote: "16.4%", revenue: "48.7M", width: 100 },
      { label: "Contacted", count: "2,150", leftNote: "72.6%", rightNote: "13.0%", revenue: "34.2M", width: 72.6 },
      { label: "Appointment Booked", count: "1,120", leftNote: "37.8%", rightNote: "8.8%", revenue: "18.8M", width: 37.8 },
      { label: "Attended", count: "786", leftNote: "26.5%", rightNote: "", revenue: "11.4M", width: 26.5 },
    ],
    channelBreakdown: [
      { label: "SMS", value: 43, count: "21", color: "#8668e0" },
      { label: "Call", value: 27, count: "13", color: "#3b8df1" },
      { label: "App", value: 17, count: "8", color: "#47cfc3" },
      { label: "Walk-in", value: 13, count: "6", color: "#fb4c8e" },
    ],
    seenRate: { total: 64, target: 80, segments: [{ label: "Undiagnosed", value: 69 }, { label: "Pre-diabetic", value: 58 }] },
    conversionSegments: [
      { label: "Chronic care", value: 42, color: "#8f24ff", x: 72, y: 78, size: 132 },
      { label: "Preventive", value: 31, color: "#156cff", x: 34, y: 67, size: 118 },
      { label: "Wellness", value: 22, color: "#11a761", x: 58, y: 34, size: 90 },
      { label: "At-risk", value: 15, color: "#ff1f3d", x: 39, y: 22, size: 58 },
    ],
    entities: [
      { name: "Madinat Zayed", patients: 22, revenue: 30 },
      { name: "Ghayathi", patients: 28, revenue: 41 },
      { name: "Liwa", patients: 19, revenue: 27 },
    ],
  },
};

export default function CampaignSubConditionPage() {
  const [appliedFilters, setAppliedFilters] = useState<{
    startDate: string;
    endDate: string;
    region: RegionKey;
    campaignType: CampaignType;
    condition: ConditionKey;
    subCondition: SubConditionKey;
  }>({
    startDate: subConditionDefaultDateRange.startDate,
    endDate: subConditionDefaultDateRange.endDate,
    region: "all",
    campaignType: "All",
    condition: "All",
    subCondition: subConditionOptions[0] ?? "All",
  });
  const [draftFilters, setDraftFilters] = useState(appliedFilters);

  const { startDate, endDate, region, campaignType, condition, subCondition } = appliedFilters;
  const datasetFilters = { startDate, endDate, region, campaignType, condition, subCondition };
  const periodLabels = getSubConditionPeriodLabels(datasetFilters);
  const visibleMonths = periodLabels.map((period) => period.label);
  const visiblePatientBars = getSubConditionPatientBars(datasetFilters);
  const visibleRevenueSeries = getSubConditionRevenueSeries(datasetFilters);
  const visibleMetrics = getSubConditionMetrics(datasetFilters);
  const visibleDropoff = getSubConditionDropoff(datasetFilters);
  const channels = getSubConditionChannelBreakdown(datasetFilters);
  const seenRateData = getSubConditionSeenRate(datasetFilters);
  const conversions = useMemo(() => getSubConditionConversionSegments(datasetFilters), [startDate, endDate, region, campaignType, condition, subCondition]);
  const bubbleSegments = conversions.length > 0 ? conversions : defaultBubbleSegments;
  const visibleEntities = getSubConditionEntities(datasetFilters);
  const patientBarsMax = Math.max(1, Math.ceil(Math.max(...visiblePatientBars.map((item) => item.stopper + item.dropper), 1) * 1.18));

  return (
    <DashboardShell
      pageClassName="overviewPage subConditionPage"
      title="Sub Condition Details"
      breadcrumbCurrent="Sub Condition Details"
      breadcrumbTrail={[
        { label: "Overview", href: "/overview" },
        { label: "Life Stage", href: "/lifestage-overview/acquire" },
        { label: "Sub Condition Details" },
      ]}
      entityTabs={entityTabs}
      activeEntityTab="Entity 1"
      activeNav="subCondition"
      headerTabsClassName="overviewTabs"
      bodyClassName="subConditionBody"
    >
      <div className="subConditionFilterRow">
        <div className="filterGroup subConditionLeadFilter">
          <span>Sub Condition</span>
          <label className="filterSelectWrap">
            <select
              className="filterInput filterSelect subConditionSelect"
              value={draftFilters.subCondition}
              onChange={(event) => setDraftFilters((current) => ({ ...current, subCondition: event.target.value as SubConditionKey }))}
            >
              {subConditionOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>
        </div>
        <span className="subConditionDivider" />
        <div className="filterGroup">
          <span>Date Range</span>
          <input
            type="date"
            className="filterInput short"
            value={draftFilters.startDate}
            onChange={(event) => setDraftFilters((current) => ({ ...current, startDate: event.target.value }))}
          />
          <input
            type="date"
            className="filterInput short"
            value={draftFilters.endDate}
            onChange={(event) => setDraftFilters((current) => ({ ...current, endDate: event.target.value }))}
          />
        </div>
        <div className="filterGroup">
          <span>Regions</span>
          <label className="filterSelectWrap">
            <select
              className="filterInput filterSelect"
              value={draftFilters.region}
              onChange={(event) => setDraftFilters((current) => ({ ...current, region: event.target.value as RegionKey }))}
            >
              <option value="all">All</option>
              {subConditionFilterOptions.providers.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="filterGroup">
          <span>Campaign Type</span>
          <label className="filterSelectWrap">
            <select
              className="filterInput filterSelect"
              value={draftFilters.campaignType}
              onChange={(event) => setDraftFilters((current) => ({ ...current, campaignType: event.target.value as CampaignType }))}
            >
              <option value="All">All</option>
              {subConditionFilterOptions.campaignTypes.filter((option) => option !== "All").map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="filterGroup">
          <span>Condition</span>
          <label className="filterSelectWrap">
            <select
              className="filterInput filterSelect"
              value={draftFilters.condition}
              onChange={(event) => setDraftFilters((current) => ({ ...current, condition: event.target.value as ConditionKey }))}
            >
              <option value="All">All</option>
              {subConditionFilterOptions.conditions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>
        </div>
        <button type="button" className="applyButton" onClick={() => setAppliedFilters(draftFilters)}>APPLY</button>
      </div>

      <div className="subConditionMetricGrid">
        {visibleMetrics.map((card) => (
          <article key={card.title} className="metricCard">
            <img src={card.icon} alt="" className="metricIcon" />
            <div className="metricContent">
              <h2>{card.title}</h2>
              <div className="metricValueRow subConditionMetricValue">
                <strong>{card.value}</strong>
                {card.subValue ? <span className="subConditionMetricNote">{card.subValue}</span> : null}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="subConditionTopGrid">
        <section className="glassCard subConditionStackedPanel">
          <h2>Patients by Sub-condition</h2>
          <div className="chartLegend">
            <span className="legend acquire">Stopper</span>
            <span className="legend target">Dropper</span>
          </div>
          <div className="subConditionStackedChart rechartsStackedChart">
            <ExportStackedBarChart
              data={visiblePatientBars.map((item) => ({
                label: item.month,
                stopper: item.stopper,
                dropper: item.dropper,
                tooltip: item.tooltip,
              }))}
              max={patientBarsMax}
              height={245}
            />
          </div>
        </section>

        <section className="glassCard subConditionRevenuePanel">
          <h2>Revenue by Sub-condition</h2>
          <div className="lineChart">
            <ExportMultiLineChart
              series={[visibleRevenueSeries]}
              labels={visibleMonths}
              periodLabels={periodLabels}
              colors={["#2563EB"]}
              names={["Revenue"]}
              valueSuffix="M"
              yAxisLabel="Revenue (M)"
              height={180}
            />
          </div>
        </section>

        <section className="glassCard dropoffPanel">
          <h2>Drop-off Rate</h2>
          <ExportFunnelChart data={visibleDropoff} height={285} />
        </section>
      </div>

      <div className="subConditionBottomGrid">
        <section className="glassCard channelPanel">
          <h2>Channel Breakdown</h2>
          <div className="donutLegend subConditionDonutLegend">
            {channels.map((channel) => (
              <span key={channel.label} className="legend donut" style={{ color: channel.color }}>
                {channel.label}
              </span>
            ))}
          </div>
          <ExportLabeledDonutChart
            data={channels.map((channel) => ({
              label: channel.label,
              pct: channel.value,
              color: channel.color,
              value: `${channel.count} (${channel.value}%)`,
            }))}
            height={320}
          />
        </section>

        <section className="glassCard seenRatePanel">
          <h2>Seen Rate</h2>
          <div className="subConditionSeenGaugeWrap">
            <div className="subConditionSeenGauge">
              <div
                className="subConditionSeenArc"
                style={{ background: `conic-gradient(#8668e0 0 ${seenRateData.total}%, #c7dffa ${seenRateData.total}% 100%)` }}
              />
              <div className="subConditionSeenCenter">
                <span>Total Seen Rate</span>
                <strong>{seenRateData.total}%</strong>
              </div>
              <div className="subConditionSeenTarget">Target {seenRateData.target}%</div>
            </div>
            <div className="subConditionSeenList">
              {seenRateData.segments.map((item) => (
                <div key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}%</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="glassCard segmentPanel">
          <h2>Conversion by Segment</h2>
          <div className="chartLegend">
            {bubbleSegments.map((segment) => (
              <span key={segment.label} className="legend donut" style={{ color: segment.color }}>
                {segment.label}
              </span>
            ))}
          </div>
          <div className="subConditionBubbleCanvas">
            <ResponsiveContainer width="100%" height={260}>
              <ScatterChart margin={{ top: 12, right: 12, bottom: 12, left: 12 }}>
                <CartesianGrid stroke="transparent" />
                <XAxis
                  type="number"
                  dataKey="x"
                  domain={[0, 100]}
                  hide
                />
                <YAxis
                  type="number"
                  dataKey="y"
                  domain={[0, 100]}
                  hide
                />
                <ZAxis type="number" dataKey="size" range={[1, 1]} />
                <Tooltip content={<BubbleTooltip />} cursor={{ strokeDasharray: "4 4", stroke: "#9fc4e9" }} />
                <Scatter data={bubbleSegments} shape={<BubbleShape />} />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="glassCard entitiesPanel">
          <h2>Entities Summery</h2>
          <ExportEntitiesSummary
            summary={visibleEntities.summary}
            series={visibleEntities.series.map((entity) => ({
              name: entity.name,
              bar: entity.patients,
              line: entity.revenue,
            }))}
          />
        </section>
      </div>
    </DashboardShell>
  );
}
