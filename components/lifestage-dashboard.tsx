"use client";

import Link from "next/link";
import { useState } from "react";
import { DEFAULT_DATE_RANGE, getMonthRatio, scaleDisplayValue, sliceMonths } from "./date-filter-utils";
import { DashboardShell } from "./dashboard-shell";
import { ExportBubbleChart, ExportDualAxisLineChart, ExportHorizontalBarChart, ExportLabeledDonutChart, ExportMultiLineChart, ExportSankeyChart } from "./export-visuals";
import {
  getLifestageCampaignList,
  getLifestageConversionByCampaign,
  getLifestageKpiCards,
  getLifestagePatientFlow,
  getLifestagePeriodLabels,
  getLifestageProviderPerformance,
  getLifestageTopConditions,
  getLifestageTrendData,
} from "./hvm-data";

type StageKey = "acquire" | "build" | "contain";
type RegionKey = "all" | "abu-dhabi" | "al-ain" | "al-dhafra";

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

const stageMeta = {
  acquire: { label: "Acquire", title: "Lifestage Overview - Acquire", colorClass: "blue" },
  build: { label: "Build", title: "Lifestage Overview - Build", colorClass: "green" },
  contain: { label: "Contain", title: "Lifestage Overview - Contain", colorClass: "orange" },
} as const;

const stageVisualColors: Record<StageKey, { primary: string; soft: string; legend: string }> = {
  acquire: { primary: "#2563EB", soft: "#14B8A6", legend: "acquire" },
  build: { primary: "#0B9F30", soft: "#14B8A6", legend: "build" },
  contain: { primary: "#FF6900", soft: "#14B8A6", legend: "contain" },
};

type CardMetric = { title: string; value: string; icon: string };
type ConditionCard = {
  title: string;
  priority: "HIGH" | "MEDIUM" | "LOW";
  text: string;
  pills: string[];
  condition: string;
  region: string;
};
type InterventionCard = {
  badge: string;
  title: string;
  text: string;
  pills: string[];
  condition: string;
  campaignType: string;
};

type StageRegionData = {
  metrics: { segments: string; eligible: string; seenRate: string; revenue: string; avgRevenue: string };
  patientSeries: number[];
  revenueSeries: number[];
  gainSeries: number[];
  flow: {
    left: Record<StageKey, string>;
    right: Record<StageKey, string>;
  };
  conversionRows: Array<{ label: string; value: number; condition: string; campaignType: string }>;
  topConditions: Array<{ label: string; value: string; share: string }>;
  nextConditions: ConditionCard[];
  interventions: InterventionCard[];
  bubblePoints: Array<{ x: number; y: number; size: number; label: string; region: string }>;
  campaigns: Array<{ campaign: string; stage: string; eligible: string; seenRate: string; avgRevenue: string; incrementalRevenue: string; condition: string; campaignType: string }>;
};

const lifestageData: Record<RegionKey, Record<StageKey, StageRegionData>> = {
  all: {
    acquire: {
      metrics: { segments: "52", eligible: "4.2M", seenRate: "Ð 22K", revenue: "Ð 2.1M", avgRevenue: "Ð 148K" },
      patientSeries: [0.6, 1.4, 1.1, 1.8, 2.2, 2.2, 2.8, 3.0, 4.0, 4.8, 4.6, 4.6],
      revenueSeries: [0.5, 1.3, 0.9, 1.4, 1.7, 1.8, 2.6, 3.1, 4.2, 3.8, 3.6, 4.2],
      gainSeries: [10, 26, 38, 47, 52, 48, 59, 55, 74, 46, 71, 91],
      flow: { left: { acquire: "8.2K", build: "2.8K", contain: "1.4K" }, right: { acquire: "8.2K", build: "2.8K", contain: "1.4K" } },
      conversionRows: [
        { label: "HbA1c Screening", value: 94, condition: "Diabetes", campaignType: "Outreach" },
        { label: "GP Referral", value: 82, condition: "Hypertension", campaignType: "Referral" },
        { label: "Lifestyle Coaching", value: 74, condition: "Obesity", campaignType: "Follow-up" },
        { label: "BP Drive", value: 68, condition: "Hypertension", campaignType: "Outreach" },
        { label: "Nutrition Program", value: 60, condition: "Obesity", campaignType: "Follow-up" },
        { label: "Pharmacy Screen", value: 54, condition: "Diabetes", campaignType: "Referral" },
      ],
      topConditions: [
        { label: "Diabetes", value: "721K", share: "38%" },
        { label: "Hypertension", value: "608K", share: "32%" },
        { label: "Obesity", value: "342K", share: "18%" },
        { label: "Cardiac", value: "228K", share: "12%" },
      ],
      nextConditions: [
        { title: "Re-engage via SMS", priority: "HIGH", text: "432 patients overdue for HbA1c check", pills: ["Diabetes", "Abu Dhabi"], condition: "Diabetes", region: "abu-dhabi" },
        { title: "GP Referral Push", priority: "MEDIUM", text: "280 undiagnosed identified this week", pills: ["Hypertension", "Entity 7"], condition: "Hypertension", region: "al-ain" },
        { title: "Re-engage via SMS", priority: "LOW", text: "432 patients overdue for HbA1c check", pills: ["Diabetes", "Zayed City"], condition: "Diabetes", region: "al-dhafra" },
      ],
      interventions: [
        { badge: "HIGHEST ROI", title: "Diabetes Care Pack", text: "AED 148 avg rev · 3.2k eligible", pills: ["ROI 34%", "Active"], condition: "Diabetes", campaignType: "Outreach" },
        { badge: "RECOMMENDED", title: "BP Reduction Bundle", text: "AED 134 avg rev · 2.6k eligible", pills: ["ROI 28%", "Active"], condition: "Hypertension", campaignType: "Referral" },
        { badge: "RECOMMENDED", title: "Cardiac Screen Offer", text: "AED 210 avg rev · 2.1k eligible", pills: ["ROI 22%", "Active"], condition: "Cardiac", campaignType: "Referral" },
        { badge: "PLANNED", title: "Wellness Starter Pack", text: "AED 98 avg rev · 1.9k eligible", pills: ["ROI 18%", "Planned"], condition: "Obesity", campaignType: "Follow-up" },
      ],
      bubblePoints: [
        { x: 55, y: 110, size: 18, label: "Entity 1 · SR 55% · Rev 110K", region: "abu-dhabi" },
        { x: 62, y: 220, size: 28, label: "Entity 2 · SR 62% · Rev 220K", region: "al-ain" },
        { x: 69, y: 345, size: 46, label: "Entity 3 · SR 69% · Rev 345K", region: "abu-dhabi" },
        { x: 75, y: 420, size: 52, label: "Entity 4 · SR 75% · Rev 420K", region: "abu-dhabi" },
        { x: 84, y: 305, size: 50, label: "Entity 5 · SR 84% · Rev 305K", region: "abu-dhabi" },
        { x: 85, y: 425, size: 64, label: "Entity 6 · SR 85% · Rev 425K", region: "abu-dhabi" },
      ],
      campaigns: [
        { campaign: "Diabetes", stage: "Pre-diabetic", eligible: "15,231", seenRate: "57.5%", avgRevenue: "5.5K", incrementalRevenue: "15.2K", condition: "Diabetes", campaignType: "Outreach" },
        { campaign: "Diabetes", stage: "Pre-diabetic", eligible: "8,256", seenRate: "48.6%", avgRevenue: "2.5K", incrementalRevenue: "12.2K", condition: "Diabetes", campaignType: "Referral" },
        { campaign: "Hypertension", stage: "At-Risk", eligible: "3,564", seenRate: "23.8%", avgRevenue: "1.3K", incrementalRevenue: "5.6K", condition: "Hypertension", campaignType: "Referral" },
        { campaign: "Diabetes", stage: "Pre-diabetic", eligible: "10,519", seenRate: "79.4%", avgRevenue: "12.2K", incrementalRevenue: "15.2K", condition: "Diabetes", campaignType: "Outreach" },
        { campaign: "Hypertension", stage: "At-Risk", eligible: "12,145", seenRate: "63.5%", avgRevenue: "13.8K", incrementalRevenue: "12.2K", condition: "Hypertension", campaignType: "Follow-up" },
        { campaign: "Diabetes", stage: "Pre-diabetic", eligible: "5,623", seenRate: "41.2%", avgRevenue: "5.6K", incrementalRevenue: "5.6K", condition: "Diabetes", campaignType: "Follow-up" },
      ],
    },
    build: {
      metrics: { segments: "34", eligible: "2.8M", seenRate: "Ð 18K", revenue: "Ð 1.6M", avgRevenue: "Ð 102K" },
      patientSeries: [0.5, 1.0, 1.2, 1.6, 1.8, 2.1, 2.3, 2.5, 2.7, 2.8, 2.8, 2.9],
      revenueSeries: [0.4, 0.8, 1.0, 1.3, 1.4, 1.7, 1.9, 2.0, 2.3, 2.5, 2.6, 2.8],
      gainSeries: [8, 18, 29, 34, 39, 45, 49, 46, 58, 61, 66, 72],
      flow: { left: { acquire: "4.6K", build: "5.1K", contain: "1.2K" }, right: { acquire: "3.4K", build: "5.1K", contain: "2.4K" } },
      conversionRows: [
        { label: "Diabetic Monitoring", value: 86, condition: "Diabetes", campaignType: "Follow-up" },
        { label: "Mental Wellness", value: 73, condition: "Cardiac", campaignType: "Follow-up" },
        { label: "Nutrition Program", value: 68, condition: "Obesity", campaignType: "Follow-up" },
        { label: "Post-Op Follow-up", value: 66, condition: "Cardiac", campaignType: "Follow-up" },
      ],
      topConditions: [
        { label: "Diabetes", value: "612K", share: "34%" },
        { label: "Hypertension", value: "504K", share: "28%" },
        { label: "Obesity", value: "401K", share: "22%" },
        { label: "Cardiac", value: "279K", share: "16%" },
      ],
      nextConditions: [
        { title: "Lifestyle Recall", priority: "HIGH", text: "301 active care plans require coaching", pills: ["Obesity", "Abu Dhabi"], condition: "Obesity", region: "abu-dhabi" },
        { title: "Medication Follow-ups", priority: "MEDIUM", text: "174 patients missed second follow-up", pills: ["Hypertension", "Entity 7"], condition: "Hypertension", region: "al-ain" },
        { title: "Medication Follow-up", priority: "MEDIUM", text: "174 patients missed second follow-up", pills: ["Hypertension", "Entity 7"], condition: "Hypertension", region: "al-ain" },
      ],
      interventions: [
        { badge: "RECOMMENDED", title: "Cardio Coaching Serieses", text: "AED 119 avg rev · 1.3k eligible", pills: ["ROI 24%", "Active"], condition: "Cardiac", campaignType: "Follow-up" },
        { badge: "RECOMMENDED", title: "Cardio Coaching Seriez", text: "AED 119 avg rev · 1.3k eligible", pills: ["ROI 24%", "Active"], condition: "Cardiac", campaignType: "Follow-up" },

        { badge: "HIGHEST ROI", title: "Lifestyle Booster Pack", text: "AED 126 avg rev · 2.1k eligible", pills: ["ROI 31%", "Active"], condition: "Obesity", campaignType: "Follow-up" },
        { badge: "HIGHEST ROI", title: "Cardio Coaching Series", text: "AED 119 avg rev · 1.3k eligible", pills: ["ROI 24%", "Active"], condition: "Cardiac", campaignType: "Follow-up" },
      ],
      bubblePoints: [
        { x: 58, y: 145, size: 20, label: "Entity 1 · SR 58% · Rev 145K", region: "abu-dhabi" },
        { x: 67, y: 255, size: 34, label: "Entity 2 · SR 67% · Rev 255K", region: "abu-dhabi" },
        { x: 76, y: 365, size: 48, label: "Entity 3 · SR 76% · Rev 365K", region: "abu-dhabi" },
      ],
      campaigns: [
        { campaign: "Nutrition", stage: "Lifestyle", eligible: "6,214", seenRate: "61.5%", avgRevenue: "4.2K", incrementalRevenue: "8.6K", condition: "Obesity", campaignType: "Follow-up" },
        { campaign: "Post-Op", stage: "Care Plan", eligible: "4,102", seenRate: "58.4%", avgRevenue: "3.1K", incrementalRevenue: "5.4K", condition: "Cardiac", campaignType: "Follow-up" },
      ],
    },
    contain: {
      metrics: { segments: "21", eligible: "1.4M", seenRate: "Ð 14K", revenue: "Ð 980K", avgRevenue: "Ð 81K" },
      patientSeries: [0.4, 0.7, 0.9, 1.0, 1.1, 1.15, 1.2, 1.25, 1.3, 1.34, 1.38, 1.4],
      revenueSeries: [0.3, 0.6, 0.8, 0.88, 0.92, 0.96, 1.01, 1.04, 1.11, 1.21, 1.31, 1.4],
      gainSeries: [6, 14, 21, 27, 33, 37, 42, 45, 52, 57, 61, 68],
      flow: { left: { acquire: "2.1K", build: "1.7K", contain: "3.4K" }, right: { acquire: "1.2K", build: "1.8K", contain: "4.2K" } },
      conversionRows: [
        { label: "At-Risk Re-engagement", value: 78, condition: "Hypertension", campaignType: "Retention" },
        { label: "Obesity Intervention", value: 66, condition: "Obesity", campaignType: "Retention" },
        { label: "Readmit Prevention", value: 61, condition: "Cardiac", campaignType: "Retention" },
      ],
      topConditions: [
        { label: "Obesity", value: "398K", share: "35%" },
        { label: "Diabetes", value: "321K", share: "28%" },
        { label: "Cardiac", value: "235K", share: "21%" },
        { label: "Hypertension", value: "186K", share: "16%" },
      ],
      nextConditions: [
        { title: "Medication Adherences", priority: "LOW", text: "72 patients due for refill outreach", pills: ["Diabetes", "Al Dhafra"], condition: "Diabetes", region: "al-dhafra" },
        { title: "Medication Adherence", priority: "LOW", text: "72 patients due for refill outreach", pills: ["Diabetes", "Al Dhafra"], condition: "Diabetes", region: "al-dhafra" },

        { title: "Care Gap Reminder", priority: "HIGH", text: "126 at-risk members require intervention", pills: ["Cardiac", "Abu Dhabi"], condition: "Cardiac", region: "abu-dhabi" },
        { title: "Medication Adherencez", priority: "LOW", text: "72 patients due for refill outreach", pills: ["Diabetes", "Al Dhafra"], condition: "Diabetes", region: "al-dhafra" },
      ],
      interventions: [
        { badge: "RECOMMENDED", title: "Readmit Prevention Bundle", text: "AED 88 avg rev · 980 eligible", pills: ["ROI 21%", "Active"], condition: "Cardiac", campaignType: "Retention" },
        { badge: "HIGHEST ROI", title: "Readmit Bundle", text: "AED 88 avg rev · 980 eligible", pills: ["ROI 21%", "Active"], condition: "Cardiac", campaignType: "Retention" },

        { badge: "HIGHEST ROI", title: "Readmit Prevention", text: "AED 88 avg rev · 980 eligible", pills: ["ROI 21%", "Active"], condition: "Cardiac", campaignType: "Retention" },
      ],
      bubblePoints: [
        { x: 61, y: 210, size: 30, label: "Entity 1 · SR 61% · Rev 210K", region: "al-ain" },
        { x: 73, y: 280, size: 44, label: "Entity 2 · SR 73% · Rev 280K", region: "abu-dhabi" },
      ],
      campaigns: [
        { campaign: "Readmit", stage: "Re-engagement", eligible: "2,188", seenRate: "52.8%", avgRevenue: "2.9K", incrementalRevenue: "4.1K", condition: "Cardiac", campaignType: "Retention" },
      ],
    },
  },
  "abu-dhabi": {} as Record<StageKey, StageRegionData>,
  "al-ain": {} as Record<StageKey, StageRegionData>,
  "al-dhafra": {} as Record<StageKey, StageRegionData>,
};

lifestageData["abu-dhabi"] = {
  acquire: {
    ...lifestageData.all.acquire,
    metrics: { segments: "31", eligible: "2.5M", seenRate: "Ð 24K", revenue: "Ð 1.4M", avgRevenue: "Ð 152K" },
    patientSeries: [0.5, 1.2, 0.9, 1.5, 1.8, 2.0, 2.4, 2.8, 3.6, 4.2, 4.0, 4.1],
    revenueSeries: [0.4, 1.1, 0.8, 1.2, 1.6, 1.7, 2.1, 2.6, 3.3, 3.1, 3.0, 3.4],
    gainSeries: [12, 28, 39, 48, 52, 49, 58, 55, 71, 48, 70, 84],
    flow: { left: { acquire: "5.4K", build: "1.9K", contain: "0.8K" }, right: { acquire: "5.4K", build: "2.1K", contain: "1.1K" } },
  },
  build: { ...lifestageData.all.build, metrics: { segments: "20", eligible: "1.6M", seenRate: "Ð 17K", revenue: "Ð 1.0M", avgRevenue: "Ð 108K" } },
  contain: { ...lifestageData.all.contain, metrics: { segments: "13", eligible: "820K", seenRate: "Ð 12K", revenue: "Ð 620K", avgRevenue: "Ð 84K" } },
};

lifestageData["al-ain"] = {
  acquire: {
    ...lifestageData.all.acquire,
    metrics: { segments: "12", eligible: "1.1M", seenRate: "Ð 19K", revenue: "Ð 540K", avgRevenue: "Ð 118K" },
    patientSeries: [0.4, 0.9, 0.8, 1.2, 1.3, 1.5, 1.8, 2.0, 2.4, 2.8, 2.7, 2.9],
    revenueSeries: [0.3, 0.8, 0.7, 1.0, 1.2, 1.3, 1.6, 1.9, 2.2, 2.5, 2.4, 2.6],
    gainSeries: [8, 19, 27, 35, 41, 44, 48, 52, 58, 55, 61, 72],
    flow: { left: { acquire: "2.1K", build: "0.9K", contain: "0.5K" }, right: { acquire: "2.1K", build: "0.8K", contain: "0.7K" } },
  },
  build: { ...lifestageData.all.build, metrics: { segments: "9", eligible: "740K", seenRate: "Ð 14K", revenue: "Ð 420K", avgRevenue: "Ð 93K" } },
  contain: { ...lifestageData.all.contain, metrics: { segments: "6", eligible: "360K", seenRate: "Ð 9K", revenue: "Ð 230K", avgRevenue: "Ð 67K" } },
};

lifestageData["al-dhafra"] = {
  acquire: {
    ...lifestageData.all.acquire,
    metrics: { segments: "9", eligible: "620K", seenRate: "Ð 16K", revenue: "Ð 260K", avgRevenue: "Ð 91K" },
    patientSeries: [0.2, 0.5, 0.6, 0.7, 0.85, 0.92, 1.05, 1.16, 1.23, 1.3, 1.36, 1.4],
    revenueSeries: [0.18, 0.4, 0.5, 0.6, 0.72, 0.78, 0.9, 1.0, 1.06, 1.12, 1.2, 1.28],
    gainSeries: [6, 12, 18, 25, 29, 31, 36, 39, 44, 42, 48, 54],
    flow: { left: { acquire: "0.8K", build: "0.4K", contain: "0.2K" }, right: { acquire: "0.8K", build: "0.3K", contain: "0.3K" } },
  },
  build: { ...lifestageData.all.build, metrics: { segments: "5", eligible: "280K", seenRate: "Ð 10K", revenue: "Ð 180K", avgRevenue: "Ð 72K" } },
  contain: { ...lifestageData.all.contain, metrics: { segments: "3", eligible: "140K", seenRate: "Ð 7K", revenue: "Ð 92K", avgRevenue: "Ð 53K" } },
};

export function LifestageDashboard({ stage }: { stage: StageKey }) {
  const [appliedFilters, setAppliedFilters] = useState<{
    startDate: string;
    endDate: string;
    region: RegionKey;
    campaignType: string;
    condition: string;
  }>({
    startDate: DEFAULT_DATE_RANGE.startDate,
    endDate: DEFAULT_DATE_RANGE.endDate,
    region: "all",
    campaignType: "All",
    condition: "All",
  });
  const [draftFilters, setDraftFilters] = useState(appliedFilters);

  const { startDate, endDate, region, campaignType, condition } = appliedFilters;
  const meta = stageMeta[stage];
  const stageColors = stageVisualColors[stage];
  const data = lifestageData[region][stage];
  const monthRatio = getMonthRatio({ startDate, endDate });
  const visibleMonths = sliceMonths(months, { startDate, endDate });
  const lifestageTrendFilters = { startDate, endDate, stage, region, condition, campaignType };
  const lifestagePeriodLabels = getLifestagePeriodLabels(lifestageTrendFilters);
  const lifestageTrendData = getLifestageTrendData(lifestageTrendFilters);
  const datasetKpis = getLifestageKpiCards(lifestageTrendFilters);
  const datasetPatientFlow = getLifestagePatientFlow(lifestageTrendFilters);
  const datasetTopConditions = getLifestageTopConditions(lifestageTrendFilters);
  const datasetProviderBubbles = getLifestageProviderPerformance(lifestageTrendFilters);
  const datasetCampaigns = getLifestageCampaignList(lifestageTrendFilters);
  const datasetConversions = getLifestageConversionByCampaign(lifestageTrendFilters);
  const topConditions = data.topConditions.filter((item) => condition === "All" || item.label === condition);
  const filteredConversions = data.conversionRows.filter(
    (item) => (condition === "All" || item.condition === condition) && (campaignType === "All" || item.campaignType === campaignType),
  );
  const filteredConditions = data.nextConditions.filter(
    (item) => (condition === "All" || item.condition === condition) && (region === "all" || item.region === region || item.region === "all"),
  );
  const filteredInterventions = data.interventions.filter(
    (item) => (condition === "All" || item.condition === condition) && (campaignType === "All" || item.campaignType === campaignType),
  );
  const filteredCampaigns = data.campaigns.filter(
    (item) => (condition === "All" || item.condition === condition) && (campaignType === "All" || item.campaignType === campaignType),
  );
  const visiblePatientSeries = stage === "acquire" ? lifestageTrendData.patientValues : sliceMonths(data.patientSeries, { startDate, endDate });
  const visibleRevenueSeries = stage === "acquire" ? lifestageTrendData.revenueValues : sliceMonths(data.revenueSeries, { startDate, endDate });
  const visibleGainSeries = stage === "acquire" ? lifestageTrendData.gainValues : sliceMonths(data.gainSeries, { startDate, endDate });
  const visibleChartLabels = stage === "acquire" ? lifestagePeriodLabels.map((period) => period.label) : visibleMonths;
  const visiblePeriodLabels = stage === "acquire" ? lifestagePeriodLabels : undefined;
  const visibleMetrics = datasetKpis;
  const visibleTopConditions = datasetTopConditions.length
    ? datasetTopConditions
    : topConditions.map((item) => ({ ...item, value: scaleDisplayValue(item.value, monthRatio) }));
  const visibleCampaigns = datasetCampaigns.length
    ? datasetCampaigns
    : filteredCampaigns.map((item) => ({
        ...item,
        eligible: scaleDisplayValue(item.eligible, monthRatio),
        avgRevenue: scaleDisplayValue(item.avgRevenue, monthRatio),
        incrementalRevenue: scaleDisplayValue(item.incrementalRevenue, monthRatio),
      }));

  return (
    <DashboardShell
      pageClassName="overviewPage lifestagePage"
      title={meta.title}
      breadcrumbCurrent={meta.title}
      breadcrumbTrail={[
        { label: "Overview", href: "/overview" },
        { label: meta.title },
      ]}
      entityTabs={entityTabs}
      activeEntityTab="Entity 1"
      activeNav="lifestage"
      activeConditionStage={stage}
      headerTabsClassName="overviewTabs"
      bodyClassName="lifestageBody"
    >
      <div className="lifestageFilterRow">
        <div className={`lifestageStageTabs stage-${stage}`}>
          <span className="lifestageStageTabsIndicator" aria-hidden="true" />
          {(["acquire", "build", "contain"] as StageKey[]).map((stageKey) => (
            <Link
              key={stageKey}
              href={`/lifestage-overview/${stageKey}`}
              className={`lifestageStageTab ${stageMeta[stageKey].colorClass} ${stage === stageKey ? "active" : ""}`}
            >
              <span>{stageMeta[stageKey].label.toUpperCase()}</span>
            </Link>
          ))}
        </div>

        <div className="lifestageFilters">
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
                <option value="abu-dhabi">Abu Dhabi</option>
                <option value="al-ain">Al Ain</option>
                <option value="al-dhafra">Al Dhafra</option>
              </select>
            </label>
          </div>
          <div className="filterGroup">
            <span>Campaign Type</span>
            <label className="filterSelectWrap">
              <select
                className="filterInput filterSelect"
                value={draftFilters.campaignType}
                onChange={(event) => setDraftFilters((current) => ({ ...current, campaignType: event.target.value }))}
              >
                <option value="All">All</option>
                <option value="Outreach">Outreach</option>
                <option value="Referral">Referral</option>
                <option value="Follow-up">Follow-up</option>
                <option value="Retention">Retention</option>
              </select>
            </label>
          </div>
          <div className="filterGroup">
            <span>Condition</span>
            <label className="filterSelectWrap">
              <select
                className="filterInput filterSelect"
                value={draftFilters.condition}
                onChange={(event) => setDraftFilters((current) => ({ ...current, condition: event.target.value }))}
              >
                <option value="All">All</option>
                <option value="Diabetes">Diabetes</option>
                <option value="Hypertension">Hypertension</option>
                <option value="Obesity">Obesity</option>
                <option value="Cardiac">Cardiac</option>
              </select>
            </label>
          </div>
          <button type="button" className="applyButton" onClick={() => setAppliedFilters(draftFilters)}>APPLY</button>
        </div>
      </div>

      {/* <div className="lifestageMetricGrid">
        {[
          { title: "No. of Conditions", value: region === "all" ? "25" : region === "abu-dhabi" ? "18" : region === "al-ain" ? "12" : "8", icon: "/overview-conditions.png" },
          { title: "Patient Segments", value: data.metrics.segments, icon: "/overview-conditions.png" },
          { title: "Eligible Patients", value: data.metrics.eligible, icon: "/overview-candidate.png" },
          { title: "Seen Rate", value: data.metrics.seenRate, icon: "/overview-seen-rate.png" },
          { title: "Total Incremen. Rev.", value: data.metrics.revenue, icon: "/overview-revenue.png" },
          { title: "Avg. Rev/Patient", value: data.metrics.avgRevenue, icon: "/overview-candidate.png" },
        ].map((card) => (
          <article key={card.title} className="metricCard">
            <img src={card.icon} alt="" className="metricIcon" />
            <div className="metricContent">
              <h2>{card.title}</h2>
              <div className="metricValueRow">
                <strong>{card.value}</strong>
              </div>
            </div>
          </article>
        ))}
      </div> */}

      <div className="lifestageMainGrid">
        <div className="lifestageContentColumn">
        <div className="lifestageMetricGrid">
        {visibleMetrics.map((card) => (
          <article key={card.title} className="metricCard">
            <img src={card.icon} alt="" className="metricIcon" />
            <div className="metricContent">
              <h2>{card.title}</h2>
              <div className="metricValueRow">
                <strong>{card.value}</strong>
              </div>
            </div>
          </article>
        ))}
      </div>
          <div className="lifestageTopGrid">
            <section className="glassCard eligiblePanel">
              <h2>Eligible Patient Base</h2>
              <div className="chartLegend">
                <span className={`legend ${stageColors.legend}`}>Patients</span>
                <span className="legend revenue">Revenue</span>
              </div>
              <div className="eligibleChart">
                <ExportDualAxisLineChart
                  patientValues={visiblePatientSeries.map((value) => Number((value * 1000).toFixed(2)))}
                  revenueValues={visibleRevenueSeries}
                  labels={visibleChartLabels}
                  periodLabels={visiblePeriodLabels}
                  patientColor={stageColors.primary}
                  revenueColor={stageColors.soft}
                />
              </div>
            </section>

            <section className="glassCard flowPanel">
              <h2>Patient Flow</h2>
              <ExportSankeyChart left={datasetPatientFlow.left} right={datasetPatientFlow.right} />
            </section>

            <section className="glassCard revenueGainPanel">
              <h2>Revenue Gain</h2>
              <div className="lineChart">
                <ExportMultiLineChart
                  series={[visibleGainSeries]}
                  labels={visibleChartLabels}
                  periodLabels={visiblePeriodLabels}
                  colors={[stageColors.primary]}
                  names={["Revenue Gain"]}
                  valueSuffix={stage === "acquire" ? "M" : ""}
                  yAxisLabel={stage === "acquire" ? "Revenue (M)" : undefined}
                />
              </div>
            </section>

            <section className="glassCard conversionPanel">
              <h2>Conversion Rate by Campaign</h2>
              <div className="conversionBars rechartsHorizontalBars">
                <ExportHorizontalBarChart
                  data={(datasetConversions.length ? datasetConversions : filteredConversions).map((item) => ({
                    label: item.label,
                    value: item.value,
                  }))}
                  height={235}
                  color={stageColors.primary}
                />
              </div>
            </section>
          </div>

          <div className="lifestageBottomGrid">
            <section className="glassCard donutPanel">
              <h2>Top Conditions by Revenue</h2>
              <div className="donutLegend">
                {visibleTopConditions.map((item, index) => (
                  <span key={item.label} className={`legend donut donut-${index + 1}`}>
                    {item.label}
                  </span>
                ))}
              </div>
              <ExportLabeledDonutChart
                data={visibleTopConditions.map((item, index) => ({
                  label: item.label,
                  pct: Number(item.share.replace("%", "")),
                  color: ["#8A68E8", "#3B8DF1", "#47CFC3", "#FB4C8E"][index % 4],
                  value: `${item.value} (${item.share})`,
                }))}
                height={320}
              />
            </section>

            <section className="glassCard providerBubblePanel">
              <h2>Provider Performance</h2>
              <ExportBubbleChart data={datasetProviderBubbles} height={300} showValueLabels={false} />
            </section>

            <section className="glassCard campaignListPanel">
              <h2>Campaigns List</h2>
              <div className="summaryTable">
                <div className="summaryHead lifestageSummaryHead">
                  <span>Campaign</span>
                  <span>Screening Stage</span>
                  <span>Eligible Patients</span>
                  <span>Seen Rate</span>
                  <span>Avg. Rev per Person (AED)</span>
                  <span>Incremental Revenue</span>
                </div>
                {visibleCampaigns.map((row, rowIndex) => (
                  <div key={`${row.campaign}-${rowIndex}`} className="summaryRow lifestageSummaryRow">
                    <span>{row.campaign}</span>
                    <span>{row.stage}</span>
                    <span>{row.eligible}</span>
                    <span title={`${row.campaign} seen rate: ${row.seenRate}`}>{row.seenRate}</span>
                    <span>{row.avgRevenue}</span>
                    <span>{row.incrementalRevenue}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        <aside className="lifestageAside">
          <section className="lifestageRailSection asidePanel nextConditionPanel">
            <h2>Next Condition</h2>
            <div className="conditionCards">
              {filteredConditions.map((card) => (
                <article key={`${card.title}-${card.priority}-${card.region}`} className="conditionCard" title={`${card.title} · ${card.text}`}>
                  <div className="conditionCardHeader">
                    <h3>{card.title}</h3>
                    <span className={`conditionBadge ${card.priority.toLowerCase()}`}>{card.priority}</span>
                  </div>
                  <p className="conditionCardText">{card.text}</p>
                  <div className="conditionPills">
                    {card.pills.map((pill) => (
                      <span key={pill}>{pill}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <br/>
            <h2>Next Intervention</h2>
            <div className="asideCards">
              {filteredInterventions.map((card) => (
                <article key={card.title} className="asideCard" title={`${card.title} · ${card.text}`}>
                  <span className={`miniFlag ${card.badge.toLowerCase().replace(/\s+/g, "-")}`}>{card.badge}</span>
                  <strong>{card.title}</strong>
                  <p>{card.text}</p>
                  <div className="asidePills">
                    {card.pills.map((pill) => (
                      <span key={pill}>{pill}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </aside>
      </div>

      
    </DashboardShell>
  );
}
