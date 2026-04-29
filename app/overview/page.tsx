"use client";

import { useState } from "react";
import { DashboardShell } from "../../components/dashboard-shell";
import { ExportFunnelChart, ExportGroupedBarChart, ExportMultiLineChart } from "../../components/export-visuals";
import {
  getOverviewBookingOpportunity,
  getOverviewCampaignActivity,
  getOverviewCampaignSummary,
  getOverviewDatasetDateRange,
  getOverviewFilterOptions,
  getOverviewIncrementalRevenueLabels,
  getOverviewIncrementalRevenueSeries,
  getOverviewKpiCards,
  getOverviewProviderCampaigns,
} from "../../components/hvm-data";
import { OverviewTree } from "../../components/overview-tree";

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

const overviewDefaultDateRange = getOverviewDatasetDateRange();
const overviewFilterOptions = getOverviewFilterOptions();

type StageKey = "acquire" | "build" | "contain";
type MockRegionKey = "all" | "abu-dhabi" | "al-ain" | "al-dhafra";

type MetricCard = {
  title: string;
  value: string;
  note?: string;
  noteClass?: "up" | "down";
  secondary?: string;
  valueLabel?: string;
  secondaryLabel?: string;
  icon: string;
};

type RegionOverviewData = {
  metrics: MetricCard[];
  booking: Array<{
    label: string;
    count: string;
    leftNote: string;
    rightNote: string;
    revenue: string;
    width: number;
    status: "Active" | "Planned" | "Paused";
  }>;
  providers: Array<{
    name: string;
    acquire: number;
    build: number;
    contain: number;
    total: number;
  }>;
  seenRate: Array<{ campaign: string; actual: number; target: number; condition: string }>;
  revenueSeries: Record<StageKey, number[]>;
  summary: Array<{
    condition: string;
    stage: string;
    eligible: string;
    seenRate: string;
    campaigns: string;
    avgRevenue: string;
    incrementalRevenue: string;
    status: "Active" | "Planned" | "Paused";
  }>;
};

const overviewRegionData: Record<MockRegionKey, RegionOverviewData> = {
  all: {
    metrics: [
      { title: "No. of Conditions", value: "25", note: "12.4% vs L.M", noteClass: "down", icon: "/overview-conditions.png" },
      { title: "Eligible Patients", value: "53K", note: "8.1% vs L.M", noteClass: "up", icon: "/overview-candidate.png" },
      { title: "Seen Rate", value: "67.3%", note: "3.2% vs target", noteClass: "up", icon: "/overview-seen-rate.png" },
      { title: "Campaigns", value: "08", secondary: "05", valueLabel: "Completed", secondaryLabel: "Ongoing", icon: "/overview-announcement.png" },
      { title: "Incremental Revenue", value: "Ð 4.2M", note: "19.7% YTD", noteClass: "up", icon: "/overview-revenue.png" },
      { title: "Avg. Incremental Rev/person", value: "Ð 22K", icon: "/overview-candidate.png" },
    ],
    booking: [
      { label: "Identified", count: "432", leftNote: "100.0% of total", rightNote: "22.5%", revenue: "405.5M", width: 100, status: "Active" },
      { label: "Contacted", count: "14,280", leftNote: "77.5%", rightNote: "18.5%", revenue: "314.2M", width: 77.5, status: "Active" },
      { label: "Appointment Booked", count: "10,120", leftNote: "54.9%", rightNote: "12.5%", revenue: "222.6M", width: 54.9, status: "Planned" },
      { label: "Attended", count: "8,850", leftNote: "48.0%", rightNote: "", revenue: "194.7M", width: 48, status: "Paused" },
    ],
    providers: [
      { name: "Entity 1", acquire: 20, build: 10, contain: 19, total: 49 },
      { name: "Entity 2", acquire: 12, build: 25, contain: 9, total: 46 },
      { name: "Entity 3", acquire: 15, build: 15, contain: 14, total: 44 },
      { name: "Entity 4", acquire: 14, build: 19, contain: 9, total: 42 },
      { name: "Entity 5", acquire: 8, build: 18, contain: 12, total: 38 },
      { name: "Entity 6", acquire: 6, build: 23, contain: 6, total: 35 },
      { name: "Entity 7", acquire: 11, build: 14, contain: 8, total: 33 },
      { name: "Entity 8", acquire: 5, build: 15, contain: 9, total: 29 },
    ],
    seenRate: [
      { campaign: "Campaign 1", actual: 88, target: 80, condition: "Diabetes" },
      { campaign: "Campaign 2", actual: 81, target: 62, condition: "Hypertension" },
      { campaign: "Campaign 3", actual: 64, target: 67, condition: "Obesity" },
      { campaign: "Campaign 4", actual: 44, target: 60, condition: "Cardiac" },
      { campaign: "Campaign 5", actual: 38, target: 45, condition: "Diabetes" },
    ],
    revenueSeries: {
      acquire: [36, 27, 33, 17, 32, 28, 39, 27, 19, 35, 27, 19],
      build: [45, 50, 56, 45, 50, 57, 51, 53, 43, 53, 50, 55],
      contain: [72, 77, 74, 83, 74, 76, 71, 77, 82, 72, 77, 82],
    },
    summary: [
      { condition: "Diabetes", stage: "Pre-diabetic", eligible: "15,231", seenRate: "57.5%", campaigns: "05", avgRevenue: "5.5K", incrementalRevenue: "15.2K", status: "Active" },
      { condition: "Diabetes", stage: "Pre-diabetic", eligible: "8,256", seenRate: "48.6%", campaigns: "02", avgRevenue: "2.5K", incrementalRevenue: "12.2K", status: "Planned" },
      { condition: "Hypertension", stage: "At-Risk", eligible: "3,564", seenRate: "23.8%", campaigns: "06", avgRevenue: "1.3K", incrementalRevenue: "5.6K", status: "Paused" },
      { condition: "Diabetes", stage: "Pre-diabetic", eligible: "10,519", seenRate: "79.4%", campaigns: "04", avgRevenue: "12.2K", incrementalRevenue: "15.2K", status: "Active" },
      { condition: "Hypertension", stage: "At-Risk", eligible: "12,145", seenRate: "63.5%", campaigns: "12", avgRevenue: "13.8K", incrementalRevenue: "12.2K", status: "Active" },
      { condition: "Diabetes", stage: "Pre-diabetic", eligible: "5,623", seenRate: "41.2%", campaigns: "09", avgRevenue: "5.6K", incrementalRevenue: "5.6K", status: "Planned" },
    ],
  },
  "abu-dhabi": {
    metrics: [
      { title: "No. of Conditions", value: "18", note: "5.8% vs L.M", noteClass: "up", icon: "/overview-conditions.png" },
      { title: "Eligible Patients", value: "31K", note: "6.4% vs L.M", noteClass: "up", icon: "/overview-candidate.png" },
      { title: "Seen Rate", value: "71.9%", note: "4.8% vs target", noteClass: "up", icon: "/overview-seen-rate.png" },
      { title: "Campaigns", value: "05", secondary: "03", valueLabel: "Completed", secondaryLabel: "Ongoing", icon: "/overview-announcement.png" },
      { title: "Incremental Revenue", value: "Ð 2.8M", note: "14.2% YTD", noteClass: "up", icon: "/overview-revenue.png" },
      { title: "Avg. Incremental Rev/person", value: "Ð 24K", icon: "/overview-candidate.png" },
    ],
    booking: [
      { label: "Identified", count: "10,884", leftNote: "100.0% of total", rightNote: "24.2%", revenue: "212.8M", width: 100, status: "Active" },
      { label: "Contacted", count: "8,456", leftNote: "77.7%", rightNote: "19.1%", revenue: "171.4M", width: 77.7, status: "Active" },
      { label: "Appointment Booked", count: "6,105", leftNote: "56.1%", rightNote: "12.9%", revenue: "128.6M", width: 56.1, status: "Planned" },
      { label: "Attended", count: "5,244", leftNote: "48.2%", rightNote: "", revenue: "101.2M", width: 48.2, status: "Paused" },
    ],
    providers: [
      { name: "Entity 1", acquire: 10, build: 18, contain: 8, total: 36 },
      { name: "Entity 2", acquire: 14, build: 9, contain: 10, total: 33 },
      { name: "Entity 3", acquire: 13, build: 12, contain: 7, total: 32 },
      { name: "Entity 4", acquire: 11, build: 15, contain: 5, total: 31 },
      { name: "Entity 5", acquire: 5, build: 16, contain: 4, total: 25 },
    ],
    seenRate: [
      { campaign: "Campaign 1", actual: 91, target: 82, condition: "Diabetes" },
      { campaign: "Campaign 2", actual: 84, target: 66, condition: "Hypertension" },
      { campaign: "Campaign 3", actual: 69, target: 70, condition: "Obesity" },
      { campaign: "Campaign 4", actual: 52, target: 58, condition: "Cardiac" },
      { campaign: "Campaign 5", actual: 43, target: 47, condition: "Diabetes" },
    ],
    revenueSeries: {
      acquire: [33, 26, 29, 20, 30, 31, 37, 29, 24, 32, 29, 27],
      build: [42, 47, 53, 44, 48, 54, 49, 51, 46, 50, 49, 52],
      contain: [65, 69, 71, 74, 72, 74, 76, 78, 80, 78, 79, 81],
    },
    summary: [
      { condition: "Diabetes", stage: "Pre-diabetic", eligible: "8,911", seenRate: "62.4%", campaigns: "03", avgRevenue: "6.4K", incrementalRevenue: "9.1K", status: "Active" },
      { condition: "Hypertension", stage: "At-Risk", eligible: "6,540", seenRate: "58.1%", campaigns: "04", avgRevenue: "4.1K", incrementalRevenue: "8.4K", status: "Active" },
      { condition: "Obesity", stage: "BMI > 30", eligible: "3,208", seenRate: "35.2%", campaigns: "02", avgRevenue: "2.9K", incrementalRevenue: "4.3K", status: "Planned" },
      { condition: "Cardiac", stage: "High Risk", eligible: "2,111", seenRate: "28.7%", campaigns: "02", avgRevenue: "3.8K", incrementalRevenue: "3.6K", status: "Paused" },
    ],
  },
  "al-ain": {
    metrics: [
      { title: "No. of Conditions", value: "14", note: "4.1% vs L.M", noteClass: "up", icon: "/overview-conditions.png" },
      { title: "Eligible Patients", value: "14K", note: "3.9% vs L.M", noteClass: "up", icon: "/overview-candidate.png" },
      { title: "Seen Rate", value: "63.1%", note: "1.8% vs target", noteClass: "up", icon: "/overview-seen-rate.png" },
      { title: "Campaigns", value: "03", secondary: "02", valueLabel: "Completed", secondaryLabel: "Ongoing", icon: "/overview-announcement.png" },
      { title: "Incremental Revenue", value: "Ð 985K", note: "11.3% YTD", noteClass: "up", icon: "/overview-revenue.png" },
      { title: "Avg. Incremental Rev/person", value: "Ð 19K", icon: "/overview-candidate.png" },
    ],
    booking: [
      { label: "Identified", count: "4,920", leftNote: "100.0% of total", rightNote: "19.4%", revenue: "88.5M", width: 100, status: "Active" },
      { label: "Contacted", count: "3,655", leftNote: "74.3%", rightNote: "15.0%", revenue: "63.7M", width: 74.3, status: "Planned" },
      { label: "Appointment Booked", count: "2,574", leftNote: "52.3%", rightNote: "10.8%", revenue: "44.8M", width: 52.3, status: "Planned" },
      { label: "Attended", count: "2,109", leftNote: "42.8%", rightNote: "", revenue: "35.1M", width: 42.8, status: "Paused" },
    ],
    providers: [
      { name: "Entity 6", acquire: 10, build: 15, contain: 8, total: 33 },
      { name: "Entity 7", acquire: 9, build: 13, contain: 6, total: 28 },
      { name: "Entity 8", acquire: 7, build: 10, contain: 5, total: 22 },
      { name: "Entity 9", acquire: 5, build: 8, contain: 4, total: 17 },
    ],
    seenRate: [
      { campaign: "Campaign 1", actual: 78, target: 73, condition: "Diabetes" },
      { campaign: "Campaign 2", actual: 72, target: 60, condition: "Hypertension" },
      { campaign: "Campaign 3", actual: 59, target: 64, condition: "Obesity" },
      { campaign: "Campaign 4", actual: 41, target: 52, condition: "Cardiac" },
    ],
    revenueSeries: {
      acquire: [21, 24, 28, 23, 27, 31, 36, 32, 26, 30, 27, 29],
      build: [37, 40, 43, 42, 46, 47, 49, 50, 45, 47, 46, 48],
      contain: [52, 55, 57, 59, 58, 60, 62, 63, 64, 60, 63, 66],
    },
    summary: [
      { condition: "Diabetes", stage: "Pre-diabetic", eligible: "4,203", seenRate: "54.9%", campaigns: "02", avgRevenue: "4.3K", incrementalRevenue: "4.9K", status: "Active" },
      { condition: "Hypertension", stage: "At-Risk", eligible: "3,455", seenRate: "48.7%", campaigns: "03", avgRevenue: "3.2K", incrementalRevenue: "4.2K", status: "Planned" },
      { condition: "Cardiac", stage: "High Risk", eligible: "1,405", seenRate: "26.2%", campaigns: "01", avgRevenue: "2.8K", incrementalRevenue: "1.7K", status: "Paused" },
    ],
  },
  "al-dhafra": {
    metrics: [
      { title: "No. of Conditions", value: "11", note: "2.9% vs L.M", noteClass: "up", icon: "/overview-conditions.png" },
      { title: "Eligible Patients", value: "8K", note: "2.4% vs L.M", noteClass: "up", icon: "/overview-candidate.png" },
      { title: "Seen Rate", value: "58.6%", note: "1.1% vs target", noteClass: "up", icon: "/overview-seen-rate.png" },
      { title: "Campaigns", value: "02", secondary: "01", valueLabel: "Completed", secondaryLabel: "Ongoing", icon: "/overview-announcement.png" },
      { title: "Incremental Revenue", value: "Ð 612K", note: "8.4% YTD", noteClass: "up", icon: "/overview-revenue.png" },
      { title: "Avg. Incremental Rev/person", value: "Ð 17K", icon: "/overview-candidate.png" },
    ],
    booking: [
      { label: "Identified", count: "2,628", leftNote: "100.0% of total", rightNote: "16.8%", revenue: "46.2M", width: 100, status: "Active" },
      { label: "Contacted", count: "1,930", leftNote: "73.4%", rightNote: "12.8%", revenue: "33.4M", width: 73.4, status: "Planned" },
      { label: "Appointment Booked", count: "1,441", leftNote: "54.8%", rightNote: "8.3%", revenue: "24.9M", width: 54.8, status: "Paused" },
      { label: "Attended", count: "1,098", leftNote: "41.8%", rightNote: "", revenue: "18.1M", width: 41.8, status: "Paused" },
    ],
    providers: [
      { name: "Ghayathi", acquire: 6, build: 8, contain: 4, total: 18 },
      { name: "Madinat Zayed", acquire: 7, build: 9, contain: 5, total: 21 },
      { name: "Liwa", acquire: 4, build: 7, contain: 3, total: 14 },
    ],
    seenRate: [
      { campaign: "Campaign 1", actual: 70, target: 68, condition: "Diabetes" },
      { campaign: "Campaign 2", actual: 61, target: 57, condition: "Hypertension" },
      { campaign: "Campaign 3", actual: 49, target: 53, condition: "Obesity" },
    ],
    revenueSeries: {
      acquire: [17, 19, 20, 18, 22, 24, 27, 26, 21, 22, 23, 24],
      build: [30, 33, 34, 33, 36, 39, 41, 40, 38, 37, 39, 40],
      contain: [44, 47, 49, 48, 50, 51, 52, 54, 56, 53, 55, 57],
    },
    summary: [
      { condition: "Diabetes", stage: "Pre-diabetic", eligible: "2,110", seenRate: "47.3%", campaigns: "01", avgRevenue: "3.6K", incrementalRevenue: "2.7K", status: "Active" },
      { condition: "Obesity", stage: "BMI > 30", eligible: "1,285", seenRate: "32.9%", campaigns: "01", avgRevenue: "2.1K", incrementalRevenue: "1.5K", status: "Paused" },
    ],
  },
};

export default function OverviewPage() {
  const [appliedFilters, setAppliedFilters] = useState<{
    startDate: string;
    endDate: string;
    region: string;
    lifestageType: "all" | StageKey;
    condition: string;
    status: string;
  }>({
    startDate: overviewDefaultDateRange.startDate,
    endDate: overviewDefaultDateRange.endDate,
    region: "all",
    lifestageType: "all",
    condition: "all",
    status: "all",
  });
  const [draftFilters, setDraftFilters] = useState(appliedFilters);

  const { startDate, endDate, region, lifestageType, condition, status } = appliedFilters;
  const datasetFilters = { startDate, endDate, region, lifestageType, condition, status };
  const visibleMetrics = getOverviewKpiCards(datasetFilters);
  const datasetBooking = getOverviewBookingOpportunity(datasetFilters);
  const datasetProviders = getOverviewProviderCampaigns(datasetFilters);
  const campaignActivity = getOverviewCampaignActivity(datasetFilters);
  const visibleProviderRows = datasetProviders.map((row) => ({
    ...row,
    visibleAcquire: lifestageType === "all" || lifestageType === "acquire" ? row.acquire : 0,
    visibleBuild: lifestageType === "all" || lifestageType === "build" ? row.build : 0,
    visibleContain: lifestageType === "all" || lifestageType === "contain" ? row.contain : 0,
  }));
  const providerScaleMax = Math.max(1, ...visibleProviderRows.map((row) => row.visibleAcquire + row.visibleBuild + row.visibleContain));
  const filteredSummary = getOverviewCampaignSummary(datasetFilters);
  const revenuePeriodLabels = getOverviewIncrementalRevenueLabels(datasetFilters);
  const visibleRevenueSeries = getOverviewIncrementalRevenueSeries(datasetFilters);

  return (
    <DashboardShell
      pageClassName="overviewPage"
      title="Overview"
      breadcrumbCurrent="Overview"
      entityTabs={entityTabs}
      activeEntityTab="Entity 1"
      activeNav="overview"
      headerTabsClassName="overviewTabs"
      bodyClassName="overviewBody"
    >
      <div className="filterRow overviewFilterRow">
        <div className="filterGroup overviewFilterGroup">
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
        <div className="filterGroup overviewFilterGroup">
          <span>Regions</span>
          <label className="filterSelectWrap">
            <select
              className="filterInput filterSelect"
              value={draftFilters.region}
              onChange={(event) => setDraftFilters((current) => ({ ...current, region: event.target.value }))}
            >
              <option value="all">All</option>
              {overviewFilterOptions.providers.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="filterGroup overviewFilterGroup">
          <span>Lifestage Type</span>
          <label className="filterSelectWrap">
            <select
              className="filterInput filterSelect"
              value={draftFilters.lifestageType}
              onChange={(event) => setDraftFilters((current) => ({ ...current, lifestageType: event.target.value as "all" | StageKey }))}
            >
              <option value="all">All</option>
              <option value="acquire">Acquire</option>
              <option value="build">Build</option>
              <option value="contain">Contain</option>
            </select>
          </label>
        </div>
        <div className="filterGroup overviewFilterGroup">
          <span>Conditions</span>
          <label className="filterSelectWrap">
            <select
              className="filterInput filterSelect"
              value={draftFilters.condition}
              onChange={(event) =>
                setDraftFilters((current) => ({
                  ...current,
                  condition: event.target.value,
                }))
              }
            >
              <option value="all">All</option>
              {overviewFilterOptions.conditions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="filterGroup overviewFilterGroup">
          <span>Status</span>
          <label className="filterSelectWrap">
            <select
              className="filterInput filterSelect"
              value={draftFilters.status}
              onChange={(event) =>
                setDraftFilters((current) => ({
                  ...current,
                  status: event.target.value,
                }))
              }
            >
              <option value="all">All</option>
              {overviewFilterOptions.statuses.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>
        </div>
        <button type="button" className="applyButton" onClick={() => setAppliedFilters(draftFilters)}>APPLY</button>
      </div>

      <div className="metricGrid overviewMetricGrid">
        {visibleMetrics.map((card) => (
          <article key={card.title} className="metricCard overviewMetricCard">
            <img src={card.icon} alt="" className="metricIcon" />
            <div className="metricContent">
              <h2>{card.title}</h2>
              {card.secondary ? (
                <div className="campaignMetricRow">
                  <div className="metricPair">
                    <strong>{card.value}</strong>
                    <span>{card.valueLabel}</span>
                  </div>
                  <div className="metricPair">
                    <strong>{card.secondary}</strong>
                    <span>{card.secondaryLabel}</span>
                  </div>
                </div>
              ) : (
                <div className="metricValueRow">
                  <strong>{card.value}</strong>
                  {card.note ? <span className={`metricNote ${card.noteClass ?? ""}`}>{card.note}</span> : null}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="overviewMainGrid">
        <section className="glassCard overviewPanel lifecyclePanel">
          <h2>Lifestage Decomposition Tree</h2>
          <OverviewTree />
        </section>

        <section className="glassCard overviewPanel bookingPanel">
          <h2>Booking Opportunity</h2>
          <div className="bookingGrid">
            <ExportFunnelChart data={datasetBooking} height={280} leftHeader="Opportunity Distribution" rightHeader="Incremental Revenue (AED)" />
          </div>
        </section>

        <section className="glassCard overviewPanel providerPanel">
          <h2>Campaigns By Provider</h2>
          <div className="providerLegend">
            <span className="legend acquire">Acquire</span>
            <span className="legend build">Build</span>
            <span className="legend contain">Contain</span>
          </div>
          <div className="providerRows">
            {visibleProviderRows.map((row) => {
              const visibleTotal = row.visibleAcquire + row.visibleBuild + row.visibleContain;

              return (
              <div key={row.name} className="providerRow">
                <span className="providerName">{row.name}</span>
                <div className="providerBar">
                  <span className="segment acquire" style={{ width: `${(row.visibleAcquire / providerScaleMax) * 100}%` }} title={`${row.name} Acquire: ${row.acquire}`}>
                    {row.visibleAcquire || ""}
                  </span>
                  <span className="segment build" style={{ width: `${(row.visibleBuild / providerScaleMax) * 100}%` }} title={`${row.name} Build: ${row.build}`}>
                    {row.visibleBuild || ""}
                  </span>
                  <span className="segment contain" style={{ width: `${(row.visibleContain / providerScaleMax) * 100}%` }} title={`${row.name} Contain: ${row.contain}`}>
                    {row.visibleContain || ""}
                  </span>
                </div>
                <span className="providerTotal">{visibleTotal}</span>
              </div>
              );
            })}
          </div>
        </section>
      </div>

      <div className="overviewBottomGrid">
        <section className="glassCard overviewPanel simpleChartPanel">
          <h2>Campaigns by Seen Rate</h2>
          <div className="chartLegend">
            <span className="legend target">Target</span>
            <span className="legend contacted">Contacted</span>
            <span className="legend booked">Booked</span>
          </div>
          <div className="barChart rechartsBarChart">
            <ExportGroupedBarChart
              data={campaignActivity}
              height={220}
            />
          </div>
        </section>

        <section className="glassCard overviewPanel lineChartPanel">
          <h2>Campaigns By Incremental Revenue</h2>
          <div className="chartLegend">
            <span className="legend acquire">Acquire</span>
            <span className="legend build">Build</span>
            <span className="legend contain">Contain</span>
          </div>
          <div className="lineChart">
            <ExportMultiLineChart
              series={visibleRevenueSeries.map((item) => item.values)}
              labels={revenuePeriodLabels.map((period) => period.label)}
              periodLabels={revenuePeriodLabels}
              colors={visibleRevenueSeries.map((item) => (item.key === "acquire" ? "#2563EB" : item.key === "build" ? "#22C55E" : "#F97316"))}
              names={visibleRevenueSeries.map((item) => item.label)}
              valueSuffix="M"
              yAxisLabel="Revenue (M)"
            />
          </div>
        </section>

        <section className="glassCard overviewPanel summaryPanel">
          <h2>Campaigns Summary</h2>
          <div className="summaryTable">
            <div className="summaryHead">
              <span>Condition</span>
              <span>Screening Stage</span>
              <span>Eligible Patients</span>
              <span>Seen Rate</span>
              <span>No. Of Campaigns</span>
              <span>Avg. Rev per Person (AED)</span>
              <span>Incremental Revenue</span>
            </div>
            {filteredSummary.map((row, index) => (
              <div key={`${row.condition}-${index}`} className="summaryRow">
                <span>{row.condition}</span>
                <span>{row.stage}</span>
                <span>{row.eligible}</span>
                <span title={`Seen rate in ${region.replace("-", " ")}: ${row.seenRate}`}>{row.seenRate}</span>
                <span>{row.campaigns}</span>
                <span>{row.avgRevenue}</span>
                <span>{row.incrementalRevenue}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </DashboardShell>
  );
}
