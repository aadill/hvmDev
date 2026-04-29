import rawDataset from "../public/data/hvm-dataset.json";

export type StageKey = "acquire" | "build" | "contain";
export type StageColor = "blue" | "green" | "orange";
export type StatusKey = "active" | "planned" | "paused";

export type HvmDatasetRow = {
  campaignId: string;
  provider: string;
  stage: string;
  campaignName: string;
  condition: string;
  subCondition: number | string;
  status: string;
  period: string;
  booked: number | string | null;
  target: number | string | null;
  contacted: number | string | null;
  enrolled: number | string | null;
  attended: number | string | null;
  seenRate: number | string | null;
  engagement: number | string | null;
  conversion: number | string | null;
  revenue: number | string | null;
  avgRevPatient: number | string | null;
  costMember: number | string | null;
};

export type Segment = {
  id: string;
  label: string;
  value: string;
  total: number;
  status: StatusKey;
};

export type Condition = {
  id: string;
  label: string;
  value: string;
  total: number;
  segments: Segment[];
};

export type StageData = {
  key: StageKey;
  label: string;
  subtitle: string;
  total: string;
  color: StageColor;
  conditions: Condition[];
};

const stageMeta: Record<StageKey, Omit<StageData, "total" | "conditions">> = {
  acquire: {
    key: "acquire",
    label: "Acquire",
    subtitle: "New patients",
    color: "blue",
  },
  build: {
    key: "build",
    label: "Build",
    subtitle: "Enhance care",
    color: "green",
  },
  contain: {
    key: "contain",
    label: "Contain",
    subtitle: "Retain at-risk",
    color: "orange",
  },
};

const stageKeyMap: Record<string, StageKey> = {
  acquire: "acquire",
  build: "build",
  contain: "contain",
};

const statusMap: Record<string, StatusKey> = {
  live: "active",
  active: "active",
  completed: "active",
  planned: "planned",
  upcoming: "planned",
  paused: "paused",
  hold: "paused",
};

export const hvmDataset = rawDataset as HvmDatasetRow[];

type OverviewDatasetFilters = {
  startDate: string;
  endDate: string;
  region: string;
  lifestageType: "all" | StageKey;
  condition: string;
  status?: string;
};

type BookingOpportunityDatum = {
  label: string;
  count: string;
  leftNote: string;
  rightNote: string;
  revenue: string;
  width: number;
  status: "Active" | "Planned" | "Paused";
};

type ProviderCampaignDatum = {
  name: string;
  acquire: number;
  build: number;
  contain: number;
  total: number;
};

type CampaignActivityDatum = {
  label: string;
  target: number;
  contacted: number;
  booked: number;
};

type OverviewKpiDatum = {
  title: string;
  value: string;
  note?: string;
  noteClass?: "up" | "down";
  secondary?: string;
  valueLabel?: string;
  secondaryLabel?: string;
  icon: string;
};

type LifestageTrendFilters = {
  startDate: string;
  endDate: string;
  stage: StageKey;
  region: string;
  condition: string;
  campaignType?: string;
};

type LifestageTrendDatum = {
  patientValues: number[];
  revenueValues: number[];
  gainValues: number[];
};

type LifestageKpiDatum = {
  title: string;
  value: string;
  icon: string;
};

type LifestageFlowDatum = {
  left: Record<StageKey, string>;
  right: Record<StageKey, string>;
};

type LifestageTopConditionDatum = {
  label: string;
  value: string;
  share: string;
};

type LifestageBubbleDatum = {
  label: string;
  value: number;
  color: string;
  x: number;
  y: number;
  size: number;
};

type LifestageCampaignListDatum = {
  campaign: string;
  stage: string;
  eligible: string;
  seenRate: string;
  avgRevenue: string;
  incrementalRevenue: string;
};

type LifestageConversionDatum = {
  label: string;
  value: number;
};

type SubConditionDetailsFilters = {
  startDate: string;
  endDate: string;
  region: string;
  campaignType: string;
  condition: string;
  subCondition: string;
};

type SubConditionMetricDatum = {
  title: string;
  value: string;
  subValue?: string;
  icon: string;
};

type SubConditionBarDatum = {
  month: string;
  stopper: number;
  dropper: number;
  tooltip: string;
};

type SubConditionChannelDatum = {
  label: string;
  value: number;
  count: string;
  color: string;
};

type SubConditionSeenRateDatum = {
  total: number;
  target: number;
  segments: Array<{ label: string; value: number }>;
};

type SubConditionBubbleDatum = {
  label: string;
  value: number;
  color: string;
  x: number;
  y: number;
  size: number;
};

type SubConditionEntityDatum = {
  name: string;
  patients: number;
  revenue: number;
};

type CampaignDetailsFilters = {
  startDate: string;
  endDate: string;
  region: string;
  campaignStage: string;
  condition: string;
  campaignName: string;
};

type CampaignDetailsMetricDatum = {
  title: string;
  value: string;
  note?: string;
  icon: string;
  tone?: "success";
};

type CampaignDetailsChannelDatum = {
  label: string;
  value: number;
  amount: string;
  color: string;
};

type CampaignDetailsBubbleDatum = {
  label: string;
  value: number;
  color: string;
  x: number;
  y: number;
  size: number;
};

type CampaignDetailsDataset = {
  campaignName: string;
  campaignId: string;
  metrics: CampaignDetailsMetricDatum[];
  periodLabels: string[];
  patientsAttended: number[];
  revenueTarget: number;
  revenueCurrent: number;
  revenueBars: number[];
  channelBreakdown: CampaignDetailsChannelDatum[];
  dropoff: BookingOpportunityDatum[];
  entitySummary: { entities: string; enrolled: string; revenue: string };
  entitySeries: Array<{ name: string; bar: number; line: number }>;
  conversionSegments: CampaignDetailsBubbleDatum[];
  costCurrent: string;
  costTarget: string;
  costSeries: number[];
  targetLine: number;
  timeline: { startDate: string; endDate: string; progress: number };
  locations: string[];
};

const legacyRegionProviderMap: Record<string, string> = {
  "abu-dhabi": "Abu Dhabi",
  "al-ain": "Al Ain",
  "al-dhafra": "Al Dhafra",
};

type IncrementalRevenueSeriesDatum = {
  key: StageKey;
  label: string;
  values: number[];
};

type IncrementalRevenueAxisLabel = {
  label: string;
  month: string;
  year: string;
  showYear: boolean;
};

type OverviewSummaryDatum = {
  condition: string;
  stage: string;
  eligible: string;
  seenRate: string;
  campaigns: string;
  avgRevenue: string;
  incrementalRevenue: string;
  status: string;
};

const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function toNumber(value: HvmDatasetRow[keyof HvmDatasetRow]) {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : 0;
  }

  if (typeof value === "string" && value.trim() !== "") {
    const parsed = Number(value.replace(/,/g, ""));
    return Number.isFinite(parsed) ? parsed : 0;
  }

  return 0;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function formatCompact(value: number) {
  const abs = Math.abs(value);

  if (abs >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(abs >= 10_000_000 ? 0 : 1)}M`;
  }

  if (abs >= 1_000) {
    return `${(value / 1_000).toFixed(abs >= 10_000 ? 0 : 1)}k`;
  }

  return Math.round(value).toLocaleString();
}

function getPeriodParts(period: string) {
  const [rawYear, rawMonth] = String(period).split("-");
  const year = Number(rawYear);
  const month = Number(rawMonth);

  if (!Number.isFinite(year) || !Number.isFinite(month)) {
    return null;
  }

  return {
    year,
    monthIndex: Math.max(0, Math.min(11, month - 1)),
  };
}

function getPeriodIndex(year: number, monthIndex: number) {
  return year * 12 + monthIndex;
}

function getDatePeriodIndex(date: string, fallbackYear: number, fallbackMonthIndex: number) {
  const [rawYear, rawMonth] = date.split("-");
  const year = Number(rawYear);
  const month = Number(rawMonth);

  if (!Number.isFinite(year) || !Number.isFinite(month)) {
    return getPeriodIndex(fallbackYear, fallbackMonthIndex);
  }

  return getPeriodIndex(year, Math.max(0, Math.min(11, month - 1)));
}

function getPeriodBuckets(filters: OverviewDatasetFilters) {
  const availablePeriods = hvmDataset
    .map((row) => getPeriodParts(row.period))
    .filter((period): period is { year: number; monthIndex: number } => Boolean(period));
  const fallbackStart = availablePeriods.reduce(
    (current, period) => Math.min(current, getPeriodIndex(period.year, period.monthIndex)),
    getPeriodIndex(2025, 0),
  );
  const fallbackEnd = availablePeriods.reduce(
    (current, period) => Math.max(current, getPeriodIndex(period.year, period.monthIndex)),
    getPeriodIndex(2025, 11),
  );
  const startIndex = getDatePeriodIndex(filters.startDate, Math.floor(fallbackStart / 12), fallbackStart % 12);
  const endIndex = getDatePeriodIndex(filters.endDate, Math.floor(fallbackEnd / 12), fallbackEnd % 12);
  const minIndex = Math.min(startIndex, endIndex);
  const maxIndex = Math.max(startIndex, endIndex);

  return Array.from({ length: maxIndex - minIndex + 1 }, (_, offset) => {
    const periodIndex = minIndex + offset;
    const year = Math.floor(periodIndex / 12);
    const monthIndex = periodIndex % 12;

    return {
      key: `${year}-${monthIndex + 1}`,
      label: `${monthLabels[monthIndex]} ${year}`,
      year,
      monthIndex,
      periodIndex,
    };
  });
}

export function getOverviewDatasetDateRange() {
  const availablePeriods = hvmDataset
    .map((row) => getPeriodParts(row.period))
    .filter((period): period is { year: number; monthIndex: number } => Boolean(period))
    .sort((a, b) => getPeriodIndex(a.year, a.monthIndex) - getPeriodIndex(b.year, b.monthIndex));
  const start = availablePeriods[0] ?? { year: 2025, monthIndex: 0 };
  const end = availablePeriods[availablePeriods.length - 1] ?? { year: 2025, monthIndex: 11 };

  return {
    startDate: `${start.year}-${String(start.monthIndex + 1).padStart(2, "0")}-01`,
    endDate: `${end.year}-${String(end.monthIndex + 1).padStart(2, "0")}-28`,
  };
}

function getOverviewFilteredRows(filters: OverviewDatasetFilters) {
  const buckets = getPeriodBuckets(filters);
  const minPeriodIndex = buckets[0]?.periodIndex ?? getPeriodIndex(2025, 0);
  const maxPeriodIndex = buckets[buckets.length - 1]?.periodIndex ?? getPeriodIndex(2025, 11);

  return hvmDataset.filter((row) => {
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

function getLifestageFilteredRows(filters: LifestageTrendFilters) {
  const provider = legacyRegionProviderMap[filters.region] ?? filters.region;

  return getOverviewFilteredRows({
    startDate: filters.startDate,
    endDate: filters.endDate,
    region: provider === "All" ? "all" : provider,
    lifestageType: filters.stage,
    condition: filters.condition === "All" ? "all" : filters.condition,
  });
}

function getLifestageBaseFilteredRows(filters: Omit<LifestageTrendFilters, "stage">) {
  const provider = legacyRegionProviderMap[filters.region] ?? filters.region;

  return getOverviewFilteredRows({
    startDate: filters.startDate,
    endDate: filters.endDate,
    region: provider === "All" ? "all" : provider,
    lifestageType: "all",
    condition: filters.condition === "All" ? "all" : filters.condition,
  });
}

export function getOverviewFilterOptions() {
  return {
    providers: Array.from(new Set(hvmDataset.map((row) => String(row.provider || "Unknown")))).sort(),
    conditions: Array.from(new Set(hvmDataset.map((row) => String(row.condition || "Unknown")))).sort(),
    statuses: Array.from(new Set(hvmDataset.map((row) => String(row.status || "Unknown")))).sort(),
  };
}

export function getSubConditionFilterOptions() {
  return {
    providers: Array.from(new Set(hvmDataset.map((row) => String(row.provider || "Unknown")))).sort(),
    conditions: Array.from(new Set(hvmDataset.map((row) => String(row.condition || "Unknown")))).sort(),
    subConditions: Array.from(new Set(hvmDataset.map((row) => String(row.subCondition || "Unknown")))).sort((a, b) => Number(a) - Number(b)),
    campaignTypes: ["All", ...Array.from(new Set(hvmDataset.map((row) => String(row.stage || "Unknown")))).sort()],
  };
}

function getSubConditionBaseRows(filters: SubConditionDetailsFilters) {
  return getOverviewFilteredRows({
    startDate: filters.startDate,
    endDate: filters.endDate,
    region: filters.region === "All" ? "all" : filters.region,
    lifestageType: filters.campaignType === "All" ? "all" : (stageKeyMap[filters.campaignType.toLowerCase()] ?? "all"),
    condition: filters.condition === "All" ? "all" : filters.condition,
    status: "all",
  }).filter((row) => filters.subCondition === "All" || String(row.subCondition || "Unknown") === filters.subCondition);
}

function channelShare(row: HvmDatasetRow, channel: string) {
  const seed = Array.from(`${row.campaignId}-${row.provider}-${row.period}`).reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const sms = 0.28 + (seed % 9) / 100;
  const call = 0.24 + (seed % 7) / 100;
  const app = 0.18 + (seed % 6) / 100;
  const walkIn = Math.max(0.08, 1 - sms - call - app);
  const shares: Record<string, number> = {
    SMS: sms,
    Call: call,
    App: app,
    "Walk-in": walkIn,
  };

  return channel === "All" ? 1 : shares[channel] ?? 1;
}

function channelWeightedTotal(rows: HvmDatasetRow[], field: keyof HvmDatasetRow, channel: string) {
  return rows.reduce((sum, row) => sum + toNumber(row[field]) * channelShare(row, channel), 0);
}

export function getSubConditionPeriodLabels(filters: SubConditionDetailsFilters): IncrementalRevenueAxisLabel[] {
  const buckets = getPeriodBuckets({
    startDate: filters.startDate,
    endDate: filters.endDate,
    region: "all",
    lifestageType: "all",
    condition: "all",
  });

  return buckets.map((bucket, index) => {
    const sameYearIndexes = buckets.map((item, itemIndex) => (item.year === bucket.year ? itemIndex : -1)).filter((itemIndex) => itemIndex >= 0);
    const midpoint = sameYearIndexes[Math.floor((sameYearIndexes.length - 1) / 2)] ?? index;

    return {
      label: bucket.label,
      month: monthLabels[bucket.monthIndex],
      year: String(bucket.year),
      showYear: index === midpoint,
    };
  });
}

export function getSubConditionMetrics(filters: SubConditionDetailsFilters): SubConditionMetricDatum[] {
  const rows = getSubConditionBaseRows(filters);
  const channel = filters.campaignType;
  const eligible = channelWeightedTotal(rows, "target", channel);
  const contacted = channelWeightedTotal(rows, "contacted", channel);
  const booked = channelWeightedTotal(rows, "booked", channel);
  const attended = channelWeightedTotal(rows, "attended", channel);
  const engagementRate = eligible ? (contacted / eligible) * 100 : 0;
  const conversionRate = contacted ? (booked / contacted) * 100 : 0;
  const seenRate = booked ? (attended / booked) * 100 : 0;
  const campaigns = new Set(rows.map((row) => row.campaignId || row.campaignName)).size;

  return [
    { title: "Total Eligible Patients", value: formatCount(eligible), icon: "/overview-candidate.png" },
    { title: "Patients Contacted", value: formatCount(contacted), icon: "/overview-revenue.png" },
    { title: "Engagement Rate", value: `${engagementRate.toFixed(1)}%`, icon: "/overview-conditions.png" },
    { title: "Conversion", value: formatCount(booked), subValue: `(${conversionRate.toFixed(1)}%)`, icon: "/overview-candidate.png" },
    { title: "Seen Rate", value: `${seenRate.toFixed(1)}%`, icon: "/overview-seen-rate.png" },
    { title: "Campaigns", value: formatCount(campaigns), icon: "/overview-announcement.png" },
  ];
}

export function getSubConditionPatientBars(filters: SubConditionDetailsFilters): SubConditionBarDatum[] {
  const rows = getSubConditionBaseRows(filters);
  const bySubCondition = new Map<string, HvmDatasetRow[]>();

  rows.forEach((row) => {
    const label = `Cohort ${row.subCondition || "Unknown"}`;
    bySubCondition.set(label, [...(bySubCondition.get(label) ?? []), row]);
  });

  return Array.from(bySubCondition.entries()).map(([label, segmentRows]) => {
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
      tooltip: `${label} · Stopper: ${formatCount(stopper)} · Dropper: ${formatCount(dropper)}`,
    };
  });
}

export function getSubConditionRevenueSeries(filters: SubConditionDetailsFilters): number[] {
  const rows = getSubConditionBaseRows(filters);
  const buckets = getPeriodBuckets({
    startDate: filters.startDate,
    endDate: filters.endDate,
    region: "all",
    lifestageType: "all",
    condition: "all",
  });

  return buckets.map((bucket) => {
    const bucketRows = rows.filter((row) => row.period === bucket.key);
    return Number((channelWeightedTotal(bucketRows, "revenue", filters.campaignType) / 1_000_000).toFixed(2));
  });
}

export function getSubConditionDropoff(filters: SubConditionDetailsFilters): BookingOpportunityDatum[] {
  const rows = getSubConditionBaseRows(filters);
  const eligible = channelWeightedTotal(rows, "target", filters.campaignType);
  const contacted = channelWeightedTotal(rows, "contacted", filters.campaignType);
  const booked = channelWeightedTotal(rows, "booked", filters.campaignType);
  const attended = channelWeightedTotal(rows, "attended", filters.campaignType);
  const revenue = channelWeightedTotal(rows, "revenue", filters.campaignType);
  const safeEligible = Math.max(eligible, 1);
  const items = [
    { label: "Identified", count: eligible, status: "Active" as const },
    { label: "Contacted", count: contacted, status: "Active" as const },
    { label: "Appointment Booked", count: booked, status: "Planned" as const },
    { label: "Attended", count: attended, status: "Paused" as const },
  ];

  return items.map((item, index) => {
    const percent = (item.count / safeEligible) * 100;
    const previous = index === 0 ? safeEligible : Math.max(items[index - 1].count, 1);
    const drop = index === 0 ? ((safeEligible - contacted) / safeEligible) * 100 : ((previous - item.count) / previous) * 100;

    return {
      label: item.label,
      count: formatCount(item.count),
      leftNote: index === 0 ? "100.0% of total" : `${percent.toFixed(1)}%`,
      rightNote: index === items.length - 1 ? "" : `${Math.max(0, drop).toFixed(1)}%`,
      revenue: formatRevenueMillions(revenue * (item.count / safeEligible)),
      width: Math.max(8, Math.min(100, percent)),
      status: item.status,
    };
  });
}

export function getSubConditionChannelBreakdown(filters: SubConditionDetailsFilters): SubConditionChannelDatum[] {
  const rows = getSubConditionBaseRows({ ...filters, campaignType: "All" });
  const channels = [
    { label: "SMS", color: "#8668e0" },
    { label: "Call", color: "#3b8df1" },
    { label: "App", color: "#47cfc3" },
    { label: "Walk-in", color: "#fb4c8e" },
  ];
  const totals = channels.map((channel) => ({
    ...channel,
    rawCount: channelWeightedTotal(rows, "contacted", channel.label),
  }));
  const visible = totals;
  const denominator = Math.max(visible.reduce((sum, channel) => sum + channel.rawCount, 0), 1);

  return visible.map((channel) => ({
    label: channel.label,
    value: Number(((channel.rawCount / denominator) * 100).toFixed(1)),
    count: formatCount(channel.rawCount),
    color: channel.color,
  }));
}

export function getSubConditionSeenRate(filters: SubConditionDetailsFilters): SubConditionSeenRateDatum {
  const rows = getSubConditionBaseRows(filters);
  const booked = channelWeightedTotal(rows, "booked", filters.campaignType);
  const attended = channelWeightedTotal(rows, "attended", filters.campaignType);
  const segments = new Map<string, HvmDatasetRow[]>();

  rows.forEach((row) => {
    const label = `Cohort ${row.subCondition || "Unknown"}`;
    segments.set(label, [...(segments.get(label) ?? []), row]);
  });

  return {
    total: Number((booked ? (attended / booked) * 100 : 0).toFixed(1)),
    target: 80,
    segments: Array.from(segments.entries()).map(([label, segmentRows]) => {
      const segmentBooked = channelWeightedTotal(segmentRows, "booked", filters.campaignType);
      const segmentAttended = channelWeightedTotal(segmentRows, "attended", filters.campaignType);

      return {
        label,
        value: Number((segmentBooked ? (segmentAttended / segmentBooked) * 100 : 0).toFixed(1)),
      };
    }),
  };
}

export function getSubConditionConversionSegments(filters: SubConditionDetailsFilters): SubConditionBubbleDatum[] {
  const rows = getSubConditionBaseRows(filters);
  const byCondition = new Map<string, HvmDatasetRow[]>();
  const colors = ["#8f24ff", "#156cff", "#11a761", "#ff1f3d", "#f59e0b"];

  rows.forEach((row) => {
    const label = String(row.condition || "Unknown");
    byCondition.set(label, [...(byCondition.get(label) ?? []), row]);
  });

  const clusterSlots = [
    { x: 36, y: 45 },
    { x: 64, y: 45 },
    { x: 50, y: 66 },
    { x: 78, y: 66 },
    { x: 22, y: 66 },
  ];

  return Array.from(byCondition.entries())
    .map(([label, conditionRows], index) => {
      const contacted = channelWeightedTotal(conditionRows, "contacted", filters.campaignType);
      const booked = channelWeightedTotal(conditionRows, "booked", filters.campaignType);
      const conversion = contacted ? (booked / contacted) * 100 : 0;
      const slot = clusterSlots[index % clusterSlots.length];
      const clampedConversion = Math.max(8, Math.min(100, conversion));

      return {
        label,
        value: Math.round(conversion),
        color: colors[index % colors.length],
        x: slot.x,
        y: slot.y,
        size: Math.max(74, Math.min(128, 60 + clampedConversion * 0.82)),
        sortValue: conversion,
      };
    })
    .sort((a, b) => b.sortValue - a.sortValue)
    .map(({ sortValue: _sortValue, ...row }) => row);
}

export function getSubConditionEntities(filters: SubConditionDetailsFilters): {
  summary: { entities: string; enrolled: string; revenue: string };
  series: SubConditionEntityDatum[];
} {
  const rows = getSubConditionBaseRows(filters);
  const byProvider = new Map<string, HvmDatasetRow[]>();

  rows.forEach((row) => {
    const provider = String(row.provider || "Unknown");
    byProvider.set(provider, [...(byProvider.get(provider) ?? []), row]);
  });

  const enrolled = channelWeightedTotal(rows, "enrolled", filters.campaignType);
  const revenue = channelWeightedTotal(rows, "revenue", filters.campaignType);
  const series = Array.from(byProvider.entries())
    .map(([name, providerRows]) => ({
      name,
      patients: Number((channelWeightedTotal(providerRows, "enrolled", filters.campaignType) / 1_000).toFixed(1)),
      revenue: Number((channelWeightedTotal(providerRows, "revenue", filters.campaignType) / 1_000).toFixed(1)),
      sortValue: channelWeightedTotal(providerRows, "revenue", filters.campaignType),
    }))
    .sort((a, b) => b.sortValue - a.sortValue)
    .slice(0, 5)
    .map(({ sortValue: _sortValue, ...row }) => row);

  return {
    summary: {
      entities: formatCount(byProvider.size),
      enrolled: formatCount(enrolled),
      revenue: formatCurrencyDisplay(revenue),
    },
    series,
  };
}

export function getCampaignDetailsFilterOptions() {
  return {
    providers: Array.from(new Set(hvmDataset.map((row) => String(row.provider || "Unknown")))).sort(),
    conditions: Array.from(new Set(hvmDataset.map((row) => String(row.condition || "Unknown")))).sort(),
    campaignStages: Array.from(new Set(hvmDataset.map((row) => String(row.stage || "Unknown")))).sort(),
    campaignNames: Array.from(new Set(hvmDataset.map((row) => String(row.campaignName || "Unknown Campaign")))).sort(),
  };
}

function getCampaignDetailsRows(filters: CampaignDetailsFilters) {
  return getOverviewFilteredRows({
    startDate: filters.startDate,
    endDate: filters.endDate,
    region: filters.region === "All" ? "all" : filters.region,
    lifestageType: filters.campaignStage === "All" ? "all" : (stageKeyMap[filters.campaignStage.toLowerCase()] ?? "all"),
    condition: filters.condition === "All" ? "all" : filters.condition,
    status: "all",
  }).filter((row) => filters.campaignName === "All" || row.campaignName === filters.campaignName);
}

function distributeToEightSlots(total: number, seedText: string) {
  const seed = Array.from(seedText).reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const weights = Array.from({ length: 8 }, (_, index) => 0.76 + ((seed + index * 11) % 36) / 100);
  const denominator = weights.reduce((sum, value) => sum + value, 0) || 1;

  return weights.map((weight) => Number(((total * weight) / denominator).toFixed(1)));
}

function estimateCampaignSpend(rows: HvmDatasetRow[]) {
  return rows.reduce((sum, row) => {
    const stage = stageKeyMap[String(row.stage).toLowerCase()];
    const contactUnitCost = stage === "contain" ? 12 : stage === "build" ? 16 : 10;
    const bookingUnitCost = stage === "contain" ? 30 : stage === "build" ? 34 : 26;
    const attendanceUnitCost = stage === "contain" ? 44 : stage === "build" ? 52 : 38;

    return (
      sum +
      toNumber(row.contacted) * contactUnitCost +
      toNumber(row.booked) * bookingUnitCost +
      toNumber(row.attended) * attendanceUnitCost
    );
  }, 0);
}

function buildCostEfficiencySeries(rows: HvmDatasetRow[], fallbackCostPerConversion: number, seedText: string) {
  const seed = Array.from(seedText).reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const slots = Array.from({ length: 8 }, () => [] as HvmDatasetRow[]);

  rows.forEach((row, index) => {
    slots[(index + seed) % slots.length].push(row);
  });

  return slots.map((slotRows, index) => {
    const slotSpend = estimateCampaignSpend(slotRows);
    const slotBooked = slotRows.reduce((sum, row) => sum + toNumber(row.booked), 0);
    const baseline = slotBooked ? slotSpend / slotBooked : fallbackCostPerConversion;
    const variation = 1 + (((seed + index * 13) % 19) - 9) / 100;

    return Number(Math.max(1, baseline * variation).toFixed(1));
  });
}

function formatDrawerDate(date: string) {
  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    return date;
  }

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(parsed);
}

export function getCampaignDetailsDataset(filters: CampaignDetailsFilters): CampaignDetailsDataset {
  const rows = getCampaignDetailsRows(filters);
  const fallbackRows = rows.length ? rows : hvmDataset.slice(0, 1);
  const first = fallbackRows[0];
  const campaignName = filters.campaignName === "All" ? String(first?.campaignName || "All Campaigns") : filters.campaignName;
  const campaignId = String(first?.campaignId || "CMP-2025-HVM-001");
  const eligible = fallbackRows.reduce((sum, row) => sum + toNumber(row.target), 0);
  const contacted = fallbackRows.reduce((sum, row) => sum + toNumber(row.contacted), 0);
  const booked = fallbackRows.reduce((sum, row) => sum + toNumber(row.booked), 0);
  const enrolled = fallbackRows.reduce((sum, row) => sum + toNumber(row.enrolled), 0);
  const attended = fallbackRows.reduce((sum, row) => sum + toNumber(row.attended), 0);
  const revenue = fallbackRows.reduce((sum, row) => sum + toNumber(row.revenue), 0);
  const rawCost = fallbackRows.reduce((sum, row) => sum + toNumber(row.costMember), 0);
  const engagementRate = eligible ? (contacted / eligible) * 100 : 0;
  const conversionRate = contacted ? (booked / contacted) * 100 : 0;
  const seenRate = booked ? (attended / booked) * 100 : 0;
  const periods = fallbackRows
    .map((row) => getPeriodParts(row.period))
    .filter((period): period is { year: number; monthIndex: number } => Boolean(period))
    .sort((a, b) => getPeriodIndex(a.year, a.monthIndex) - getPeriodIndex(b.year, b.monthIndex));
  const start = periods[0] ?? { year: 2025, monthIndex: 0 };
  const end = periods[periods.length - 1] ?? { year: 2025, monthIndex: 11 };
  const buckets = getPeriodBuckets({
    startDate: filters.startDate,
    endDate: filters.endDate,
    region: "all",
    lifestageType: "all",
    condition: "all",
  });
  const bucketIndexes = new Map(buckets.map((bucket, index) => [bucket.periodIndex, index]));
  const attendedByPeriod = Array(buckets.length).fill(0);

  fallbackRows.forEach((row) => {
    const period = getPeriodParts(row.period);
    const bucketIndex = period ? bucketIndexes.get(getPeriodIndex(period.year, period.monthIndex)) : undefined;

    if (bucketIndex !== undefined) {
      attendedByPeriod[bucketIndex] += toNumber(row.attended);
    }
  });

  const byProvider = new Map<string, HvmDatasetRow[]>();
  const byCondition = new Map<string, HvmDatasetRow[]>();

  fallbackRows.forEach((row) => {
    const provider = String(row.provider || "Unknown");
    const conditionName = String(row.condition || "Unknown");
    byProvider.set(provider, [...(byProvider.get(provider) ?? []), row]);
    byCondition.set(conditionName, [...(byCondition.get(conditionName) ?? []), row]);
  });

  const channelColors: Record<string, string> = {
    SMS: "#8668e0",
    Call: "#3b8df1",
    App: "#47cfc3",
    "Walk-in": "#fb4c8e",
  };
  const channelBreakdown = Object.entries(channelColors).map(([label, color]) => {
    const amount = channelWeightedTotal(fallbackRows, "revenue", label);

    return {
      label,
      value: Number((revenue ? (amount / revenue) * 100 : 0).toFixed(1)),
      amount: `${formatCurrencyShort(amount)} (${(revenue ? (amount / revenue) * 100 : 0).toFixed(0)}%)`,
      color,
    };
  });

  const conversionSlots = [
    { x: 34, y: 58 },
    { x: 64, y: 66 },
    { x: 50, y: 36 },
    { x: 76, y: 44 },
    { x: 24, y: 34 },
  ];
  const conversionColors = ["#8f24ff", "#156cff", "#11a761", "#ff1f3d", "#f59e0b"];
  const conversionSegments = Array.from(byCondition.entries())
    .map(([label, conditionRows], index) => {
      const conditionContacted = conditionRows.reduce((sum, row) => sum + toNumber(row.contacted), 0);
      const conditionBooked = conditionRows.reduce((sum, row) => sum + toNumber(row.booked), 0);
      const conversion = conditionContacted ? (conditionBooked / conditionContacted) * 100 : 0;
      const slot = conversionSlots[index % conversionSlots.length];

      return {
        label,
        value: Number(conversion.toFixed(1)),
        color: conversionColors[index % conversionColors.length],
        x: slot.x,
        y: slot.y,
        size: Math.max(64, Math.min(138, 58 + conversion * 1.2)),
        sortValue: conversion,
      };
    })
    .sort((a, b) => b.sortValue - a.sortValue)
    .slice(0, 5)
    .map(({ sortValue: _sortValue, ...row }) => row);

  const entitySeries = Array.from(byProvider.entries())
    .map(([name, providerRows]) => ({
      name,
      bar: Number((providerRows.reduce((sum, row) => sum + toNumber(row.enrolled), 0) / 1_000).toFixed(1)),
      line: Number((providerRows.reduce((sum, row) => sum + toNumber(row.revenue), 0) / 1_000).toFixed(1)),
      sortValue: providerRows.reduce((sum, row) => sum + toNumber(row.revenue), 0),
    }))
    .sort((a, b) => b.sortValue - a.sortValue)
    .slice(0, 5)
    .map(({ sortValue: _sortValue, ...row }) => row);

  const revenueK = revenue / 1_000;
  const estimatedSpend = rawCost > 0 ? rawCost : estimateCampaignSpend(fallbackRows);
  const costPerConversion = booked ? estimatedSpend / booked : 0;
  const targetRevenueK = Math.max(revenueK * 1.14, revenueK + 1);
  const targetCostPerConversion = Math.max(1, costPerConversion * 0.9);
  const costSeries = buildCostEfficiencySeries(fallbackRows, Math.max(costPerConversion, 1), `${campaignId}-cost`);
  const safeEligible = Math.max(eligible, 1);
  const dropoffItems = [
    { label: "Identified", count: eligible, status: "Active" as const },
    { label: "Contacted", count: contacted, status: "Active" as const },
    { label: "Appointment Booked", count: booked, status: "Planned" as const },
    { label: "Attended", count: attended, status: "Paused" as const },
  ];
  const dropoff = dropoffItems.map((item, index) => {
    const percent = (item.count / safeEligible) * 100;
    const previous = index === 0 ? safeEligible : Math.max(dropoffItems[index - 1].count, 1);
    const drop = index === 0 ? ((safeEligible - contacted) / safeEligible) * 100 : ((previous - item.count) / previous) * 100;

    return {
      label: item.label,
      count: formatCount(item.count),
      leftNote: index === 0 ? "100.0% of total" : `${percent.toFixed(1)}%`,
      rightNote: index === dropoffItems.length - 1 ? "" : `${Math.max(0, drop).toFixed(1)}%`,
      revenue: formatRevenueMillions(revenue * (item.count / safeEligible)),
      width: Math.max(8, Math.min(100, percent)),
      status: item.status,
    };
  });

  return {
    campaignName,
    campaignId,
    metrics: [
      { title: "Total Eligible Patients", value: formatCount(eligible), icon: "/overview-candidate.png" },
      { title: "Patients Contacted", value: formatCount(contacted), icon: "/overview-announcement.png" },
      { title: "Engagement Rate", value: `${engagementRate.toFixed(1)}%`, icon: "/overview-conditions.png" },
      { title: "Conversion", value: formatCount(booked), note: `(${conversionRate.toFixed(1)}%)`, icon: "/overview-candidate.png" },
      { title: "Seen Rate", value: `${seenRate.toFixed(1)}%`, icon: "/overview-seen-rate.png" },
      { title: "Campaign Status", value: String(first?.status || "Live") === "Live" ? "Active" : String(first?.status || "Active"), icon: "/overview-announcement.png", tone: "success" },
    ],
    periodLabels: buckets.map((bucket) => monthLabels[bucket.monthIndex]),
    patientsAttended: attendedByPeriod.map((value) => Math.round(value)),
    revenueTarget: Number(targetRevenueK.toFixed(1)),
    revenueCurrent: Number(revenueK.toFixed(1)),
    revenueBars: distributeToEightSlots(revenueK, `${campaignId}-revenue`),
    channelBreakdown,
    dropoff,
    entitySummary: {
      entities: formatCount(byProvider.size),
      enrolled: formatCount(enrolled),
      revenue: formatCurrencyDisplay(revenue),
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
      progress: Math.max(35, Math.min(96, Math.round((attended / Math.max(booked, 1)) * 100))),
    },
    locations: Array.from(byProvider.keys()).slice(0, 5),
  };
}

function formatRevenueMillions(value: number) {
  return `${(value / 1_000_000).toFixed(value >= 10_000_000 ? 1 : 2).replace(/\.0$/, "")}M`;
}

function formatCurrencyShort(value: number) {
  const abs = Math.abs(value);

  if (abs >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(abs >= 10_000_000 ? 1 : 2).replace(/\.0$/, "")}M`;
  }

  if (abs >= 1_000) {
    return `${(value / 1_000).toFixed(abs >= 10_000 ? 1 : 2).replace(/\.0$/, "")}K`;
  }

  return Math.round(value).toLocaleString("en-US");
}

function formatCurrencyDisplay(value: number) {
  return `Ð ${formatCurrencyShort(value)}`;
}

function formatCount(value: number) {
  return Math.round(value).toLocaleString("en-US");
}

function formatShare(value: number, total: number) {
  if (!total) {
    return "0.0%";
  }

  return `${((value / total) * 100).toFixed(1)}%`;
}

function statusForRows(rows: HvmDatasetRow[]): StatusKey {
  const statuses = rows.map((row) => statusMap[String(row.status).toLowerCase()] ?? "planned");

  if (statuses.includes("active")) {
    return "active";
  }

  if (statuses.includes("paused")) {
    return "paused";
  }

  return "planned";
}

export function getOverviewBookingOpportunity(filters: OverviewDatasetFilters): BookingOpportunityDatum[] {
  const rows = getOverviewFilteredRows(filters);
  const identified = rows.reduce((sum, row) => sum + toNumber(row.target), 0);
  const contacted = rows.reduce((sum, row) => sum + toNumber(row.contacted), 0);
  const booked = rows.reduce((sum, row) => sum + toNumber(row.booked), 0);
  const attended = rows.reduce((sum, row) => sum + toNumber(row.attended), 0);
  const revenue = rows.reduce((sum, row) => sum + toNumber(row.revenue), 0);
  const safeIdentified = Math.max(identified, 1);

  const items = [
    { label: "Identified", count: identified, status: "Active" as const },
    { label: "Contacted", count: contacted, status: "Active" as const },
    { label: "Appointment Booked", count: booked, status: "Planned" as const },
    { label: "Attended", count: attended, status: "Paused" as const },
  ];

  return items.map((item, index) => {
    const percent = (item.count / safeIdentified) * 100;
    const previous = index === 0 ? safeIdentified : Math.max(items[index - 1].count, 1);
    const drop = index === 0 ? ((safeIdentified - contacted) / safeIdentified) * 100 : ((previous - item.count) / previous) * 100;

    return {
      label: item.label,
      count: formatCount(item.count),
      leftNote: index === 0 ? "100.0% of total" : `${percent.toFixed(1)}%`,
      rightNote: index === items.length - 1 ? "" : `${Math.max(0, drop).toFixed(1)}%`,
      revenue: formatRevenueMillions(revenue * (item.count / safeIdentified)),
      width: Math.max(8, Math.min(100, percent)),
      status: item.status,
    };
  });
}

export function getOverviewKpiCards(filters: OverviewDatasetFilters): OverviewKpiDatum[] {
  const rows = getOverviewFilteredRows(filters);
  const conditions = new Set(rows.map((row) => String(row.condition || "Unknown")));
  const campaigns = new Set(rows.map((row) => String(row.campaignId || row.campaignName || "Unknown Campaign")));
  const liveCampaigns = new Set(rows.filter((row) => String(row.status).toLowerCase() === "live").map((row) => String(row.campaignId || row.campaignName || "Unknown Campaign")));
  const eligiblePatients = rows.reduce((sum, row) => sum + toNumber(row.target), 0);
  const booked = rows.reduce((sum, row) => sum + toNumber(row.booked), 0);
  const attended = rows.reduce((sum, row) => sum + toNumber(row.attended), 0);
  const revenue = rows.reduce((sum, row) => sum + toNumber(row.revenue), 0);
  const averageRevenuePerPerson = eligiblePatients ? revenue / eligiblePatients : 0;
  const seenRate = booked ? (attended / booked) * 100 : 0;

  return [
    { title: "No. of Conditions", value: formatCount(conditions.size), icon: "/overview-conditions.png" },
    { title: "Eligible Patients", value: formatCompact(eligiblePatients).toUpperCase(), icon: "/overview-candidate.png" },
    { title: "Seen Rate", value: `${seenRate.toFixed(1)}%`, icon: "/overview-seen-rate.png" },
    {
      title: "Campaigns",
      value: formatCount(campaigns.size),
      secondary: formatCount(liveCampaigns.size),
      valueLabel: "Campaigns",
      secondaryLabel: "Live",
      icon: "/overview-announcement.png",
    },
    { title: "Incremental Revenue", value: formatCurrencyDisplay(revenue), icon: "/overview-revenue.png" },
    { title: "Avg. Incremental Rev/person", value: formatCurrencyDisplay(averageRevenuePerPerson), icon: "/overview-candidate.png" },
  ];
}

export function getOverviewProviderCampaigns(filters: OverviewDatasetFilters): ProviderCampaignDatum[] {
  const rows = getOverviewFilteredRows(filters);
  const byProvider = new Map<string, Record<StageKey, Set<string>>>();

  rows.forEach((row) => {
    const stage = stageKeyMap[String(row.stage).toLowerCase()];

    if (!stage) {
      return;
    }

    if (!byProvider.has(row.provider)) {
      byProvider.set(row.provider, {
        acquire: new Set<string>(),
        build: new Set<string>(),
        contain: new Set<string>(),
      });
    }

    byProvider.get(row.provider)?.[stage].add(row.campaignId);
  });

  return Array.from(byProvider.entries())
    .map(([name, stages]) => {
      const acquire = stages.acquire.size;
      const build = stages.build.size;
      const contain = stages.contain.size;

      return {
        name,
        acquire,
        build,
        contain,
        total: acquire + build + contain,
      };
    })
    .filter((row) => row.total > 0)
    .sort((a, b) => b.total - a.total)
    .slice(0, 10);
}

export function getOverviewCampaignActivity(filters: OverviewDatasetFilters): CampaignActivityDatum[] {
  const rows = getOverviewFilteredRows(filters);
  const byCampaign = new Map<string, CampaignActivityDatum & { sortValue: number }>();

  rows.forEach((row) => {
    const label = String(row.campaignName || row.campaignId || "Unknown Campaign");

    if (!byCampaign.has(label)) {
      byCampaign.set(label, {
        label,
        target: 0,
        contacted: 0,
        booked: 0,
        sortValue: 0,
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

  return Array.from(byCampaign.values())
    .sort((a, b) => b.sortValue - a.sortValue)
    .slice(0, 5)
    .map(({ sortValue: _sortValue, ...row }) => ({
      label: row.label.length > 16 ? `${row.label.slice(0, 14)}...` : row.label,
      target: Math.round(row.target),
      contacted: Math.round(row.contacted),
      booked: Math.round(row.booked),
    }));
}

export function getOverviewIncrementalRevenueSeries(filters: OverviewDatasetFilters): IncrementalRevenueSeriesDatum[] {
  const rows = getOverviewFilteredRows(filters);
  const buckets = getPeriodBuckets(filters);
  const bucketIndexes = new Map(buckets.map((bucket, index) => [bucket.periodIndex, index]));
  const monthlyRevenueByStage: Record<StageKey, number[]> = {
    acquire: Array(buckets.length).fill(0),
    build: Array(buckets.length).fill(0),
    contain: Array(buckets.length).fill(0),
  };

  rows.forEach((row) => {
    const stage = stageKeyMap[String(row.stage).toLowerCase()];
    const period = getPeriodParts(row.period);
    const bucketIndex = period ? bucketIndexes.get(getPeriodIndex(period.year, period.monthIndex)) : undefined;

    if (!stage || bucketIndex === undefined) {
      return;
    }

    monthlyRevenueByStage[stage][bucketIndex] += toNumber(row.revenue);
  });

  return (Object.keys(monthlyRevenueByStage) as StageKey[])
    .filter((key) => filters.lifestageType === "all" || filters.lifestageType === key)
    .map((key) => ({
      key,
      label: stageMeta[key].label,
      values: monthlyRevenueByStage[key].map((value) => Number((value / 1_000_000).toFixed(2))),
    }));
}

export function getOverviewIncrementalRevenueLabels(filters: OverviewDatasetFilters): IncrementalRevenueAxisLabel[] {
  const buckets = getPeriodBuckets(filters);
  const yearGroups = buckets.reduce<Record<string, number[]>>((groups, bucket, index) => {
    const year = String(bucket.year);

    groups[year] = groups[year] ?? [];
    groups[year].push(index);

    return groups;
  }, {});
  const yearCenterIndexes = new Set(
    Object.values(yearGroups).map((indexes) => indexes[Math.floor((indexes.length - 1) / 2)]),
  );

  return buckets.map((bucket, index) => ({
    label: bucket.label,
    month: monthLabels[bucket.monthIndex],
    year: String(bucket.year),
    showYear: yearCenterIndexes.has(index),
  }));
}

export function getLifestagePeriodLabels(filters: LifestageTrendFilters): IncrementalRevenueAxisLabel[] {
  return getOverviewIncrementalRevenueLabels({
    startDate: filters.startDate,
    endDate: filters.endDate,
    region: legacyRegionProviderMap[filters.region] ?? filters.region,
    lifestageType: filters.stage,
    condition: filters.condition === "All" ? "all" : filters.condition,
  });
}

export function getLifestageTrendData(filters: LifestageTrendFilters): LifestageTrendDatum {
  const rows = getLifestageFilteredRows(filters);
  const buckets = getPeriodBuckets({
    startDate: filters.startDate,
    endDate: filters.endDate,
    region: "all",
    lifestageType: filters.stage,
    condition: "all",
  });
  const bucketIndexes = new Map(buckets.map((bucket, index) => [bucket.periodIndex, index]));
  const patientValues = Array(buckets.length).fill(0);
  const revenueValues = Array(buckets.length).fill(0);

  rows.forEach((row) => {
    const period = getPeriodParts(row.period);
    const bucketIndex = period ? bucketIndexes.get(getPeriodIndex(period.year, period.monthIndex)) : undefined;

    if (bucketIndex === undefined) {
      return;
    }

    patientValues[bucketIndex] += toNumber(row.target);
    revenueValues[bucketIndex] += toNumber(row.revenue);
  });

  return {
    patientValues: patientValues.map((value) => Number((value / 1_000_000).toFixed(2))),
    revenueValues: revenueValues.map((value) => Number((value / 1_000_000).toFixed(2))),
    gainValues: revenueValues.map((value) => Number((value / 1_000_000).toFixed(2))),
  };
}

export function getLifestageKpiCards(filters: LifestageTrendFilters): LifestageKpiDatum[] {
  const rows = getLifestageFilteredRows(filters);
  const conditions = new Set(rows.map((row) => String(row.condition || "Unknown")));
  const segments = new Set(rows.map((row) => `${row.condition || "Unknown"}::${row.subCondition || "Unknown"}`));
  const eligible = rows.reduce((sum, row) => sum + toNumber(row.target), 0);
  const booked = rows.reduce((sum, row) => sum + toNumber(row.booked), 0);
  const attended = rows.reduce((sum, row) => sum + toNumber(row.attended), 0);
  const revenue = rows.reduce((sum, row) => sum + toNumber(row.revenue), 0);
  const avgRevenue = eligible ? revenue / eligible : 0;
  const seenRate = booked ? (attended / booked) * 100 : 0;

  return [
    { title: "No. of Conditions", value: formatCount(conditions.size), icon: "/overview-conditions.png" },
    { title: "Patient Segments", value: formatCount(segments.size), icon: "/overview-conditions.png" },
    { title: "Eligible Patients", value: formatCompact(eligible).toUpperCase(), icon: "/overview-candidate.png" },
    { title: "Seen Rate", value: `${seenRate.toFixed(1)}%`, icon: "/overview-seen-rate.png" },
    { title: "Total Incremen. Rev.", value: formatCurrencyDisplay(revenue), icon: "/overview-revenue.png" },
    { title: "Avg. Rev/Patient", value: formatCurrencyDisplay(avgRevenue), icon: "/overview-candidate.png" },
  ];
}

export function getLifestagePatientFlow(filters: LifestageTrendFilters): LifestageFlowDatum {
  const rows = getLifestageBaseFilteredRows(filters);
  const totals = (["acquire", "build", "contain"] as StageKey[]).reduce(
    (result, stage) => {
      const stageRows = rows.filter((row) => stageKeyMap[String(row.stage).toLowerCase()] === stage);
      result.left[stage] = formatCompact(stageRows.reduce((sum, row) => sum + toNumber(row.target), 0));
      result.right[stage] = formatCompact(stageRows.reduce((sum, row) => sum + toNumber(row.attended), 0));
      return result;
    },
    {
      left: { acquire: "0", build: "0", contain: "0" },
      right: { acquire: "0", build: "0", contain: "0" },
    } as LifestageFlowDatum,
  );

  return totals;
}

export function getLifestageTopConditions(filters: LifestageTrendFilters): LifestageTopConditionDatum[] {
  const rows = getLifestageFilteredRows(filters);
  const byCondition = new Map<string, number>();

  rows.forEach((row) => {
    const label = String(row.condition || "Unknown");
    byCondition.set(label, (byCondition.get(label) ?? 0) + toNumber(row.revenue));
  });

  const total = Array.from(byCondition.values()).reduce((sum, value) => sum + value, 0);

  return Array.from(byCondition.entries())
    .map(([label, value]) => ({
      label,
      value: formatCurrencyShort(value),
      share: `${(total ? (value / total) * 100 : 0).toFixed(0)}%`,
      sortValue: value,
    }))
    .sort((a, b) => b.sortValue - a.sortValue)
    .slice(0, 4)
    .map(({ sortValue: _sortValue, ...row }) => row);
}

export function getLifestageProviderPerformance(filters: LifestageTrendFilters): LifestageBubbleDatum[] {
  const rows = getLifestageFilteredRows(filters);
  const byProvider = new Map<string, HvmDatasetRow[]>();

  rows.forEach((row) => {
    const provider = String(row.provider || "Unknown");
    byProvider.set(provider, [...(byProvider.get(provider) ?? []), row]);
  });

  const maxRevenue = Math.max(
    ...Array.from(byProvider.values()).map((providerRows) => providerRows.reduce((sum, row) => sum + toNumber(row.revenue), 0)),
    1,
  );

  return Array.from(byProvider.entries())
    .map(([provider, providerRows]) => {
      const target = providerRows.reduce((sum, row) => sum + toNumber(row.target), 0);
      const booked = providerRows.reduce((sum, row) => sum + toNumber(row.booked), 0);
      const attended = providerRows.reduce((sum, row) => sum + toNumber(row.attended), 0);
      const revenue = providerRows.reduce((sum, row) => sum + toNumber(row.revenue), 0);
      const seenRate = booked ? (attended / booked) * 100 : 0;
      const revenueMillions = revenue / 1_000_000;

      return {
        label: `${provider} · ${formatCurrencyShort(revenue)} revenue · ${formatCompact(target).toUpperCase()} eligible`,
        value: Math.round(seenRate),
        color: "#2563EB",
        x: Math.max(5, Math.min(95, seenRate)),
        y: Number(revenueMillions.toFixed(2)),
        size: Math.max(12, Math.min(62, 16 + (revenue / maxRevenue) * 46)),
        sortValue: revenue,
      };
    })
    .sort((a, b) => b.sortValue - a.sortValue)
    .slice(0, 9)
    .map(({ sortValue: _sortValue, ...row }) => row);
}

export function getLifestageConversionByCampaign(filters: LifestageTrendFilters): LifestageConversionDatum[] {
  const rows = getLifestageFilteredRows(filters);
  const byCampaign = new Map<string, HvmDatasetRow[]>();

  rows.forEach((row) => {
    const label = String(row.campaignName || row.campaignId || "Unknown Campaign");
    byCampaign.set(label, [...(byCampaign.get(label) ?? []), row]);
  });

  return Array.from(byCampaign.entries())
    .map(([label, campaignRows]) => {
      const contacted = campaignRows.reduce((sum, row) => sum + toNumber(row.contacted), 0);
      const booked = campaignRows.reduce((sum, row) => sum + toNumber(row.booked), 0);
      const revenue = campaignRows.reduce((sum, row) => sum + toNumber(row.revenue), 0);

      return {
        label: label.length > 18 ? `${label.slice(0, 16)}...` : label,
        value: Number((contacted ? (booked / contacted) * 100 : 0).toFixed(1)),
        sortValue: revenue,
      };
    })
    .sort((a, b) => b.sortValue - a.sortValue)
    .slice(0, 6)
    .map(({ sortValue: _sortValue, ...row }) => row);
}

export function getLifestageCampaignList(filters: LifestageTrendFilters): LifestageCampaignListDatum[] {
  const rows = getLifestageFilteredRows(filters);
  const byCampaign = new Map<string, HvmDatasetRow[]>();

  rows.forEach((row) => {
    const key = `${row.campaignId || row.campaignName}::${row.condition || "Unknown"}::${row.subCondition || "Unknown"}`;
    byCampaign.set(key, [...(byCampaign.get(key) ?? []), row]);
  });

  return Array.from(byCampaign.values())
    .map((campaignRows) => {
      const first = campaignRows[0];
      const eligible = campaignRows.reduce((sum, row) => sum + toNumber(row.target), 0);
      const booked = campaignRows.reduce((sum, row) => sum + toNumber(row.booked), 0);
      const attended = campaignRows.reduce((sum, row) => sum + toNumber(row.attended), 0);
      const revenue = campaignRows.reduce((sum, row) => sum + toNumber(row.revenue), 0);
      const avgRevenue = campaignRows.length
        ? campaignRows.reduce((sum, row) => sum + toNumber(row.avgRevPatient), 0) / campaignRows.length
        : 0;

      return {
        campaign: String(first?.campaignName || "Unknown"),
        stage: String(first?.subCondition ? `Cohort ${first.subCondition}` : first?.condition || "Unknown"),
        eligible: formatCount(eligible),
        seenRate: `${(booked ? (attended / booked) * 100 : 0).toFixed(1)}%`,
        avgRevenue: formatCurrencyShort(avgRevenue),
        incrementalRevenue: formatCurrencyShort(revenue),
        sortValue: revenue,
      };
    })
    .sort((a, b) => b.sortValue - a.sortValue)
    .slice(0, 6)
    .map(({ sortValue: _sortValue, ...row }) => row);
}

export function getOverviewCampaignSummary(filters: OverviewDatasetFilters): OverviewSummaryDatum[] {
  const rows = getOverviewFilteredRows(filters);
  const groupedRows = new Map<string, HvmDatasetRow[]>();

  rows.forEach((row) => {
    const groupKey = `${row.condition || "Unknown"}::${row.subCondition || "Unknown"}`;

    if (!groupedRows.has(groupKey)) {
      groupedRows.set(groupKey, []);
    }

    groupedRows.get(groupKey)?.push(row);
  });

  return Array.from(groupedRows.entries())
    .map(([, groupRows]) => {
      const conditionName = String(groupRows[0]?.condition || "Unknown");
      const subConditionName = String(groupRows[0]?.subCondition || "Unknown");
      const eligible = groupRows.reduce((sum, row) => sum + toNumber(row.target), 0);
      const booked = groupRows.reduce((sum, row) => sum + toNumber(row.booked), 0);
      const attended = groupRows.reduce((sum, row) => sum + toNumber(row.attended), 0);
      const revenue = groupRows.reduce((sum, row) => sum + toNumber(row.revenue), 0);
      const averageRevenue = groupRows.length
        ? groupRows.reduce((sum, row) => sum + toNumber(row.avgRevPatient), 0) / groupRows.length
        : 0;
      const campaignCount = new Set(groupRows.map((row) => row.campaignId)).size;
      const status = String(groupRows[0]?.status || "Unknown");

      return {
        condition: conditionName,
        stage: subConditionName === "Unknown" ? "Unknown" : `Cohort ${subConditionName}`,
        eligible: formatCount(eligible),
        seenRate: `${(booked ? (attended / booked) * 100 : 0).toFixed(1)}%`,
        campaigns: String(campaignCount).padStart(2, "0"),
        avgRevenue: formatCurrencyShort(averageRevenue),
        incrementalRevenue: formatCurrencyShort(revenue),
        status,
        sortValue: revenue,
      };
    })
    .sort((a, b) => b.sortValue - a.sortValue)
    .slice(0, 6)
    .map(({ sortValue: _sortValue, ...row }) => row);
}

export function getOverviewTreeData(): Record<StageKey, StageData> {
  return (Object.keys(stageMeta) as StageKey[]).reduce(
    (result, stageKey) => {
      const stageRows = hvmDataset.filter((row) => stageKeyMap[String(row.stage).toLowerCase()] === stageKey);
      const stageTotal = stageRows.reduce((sum, row) => sum + toNumber(row.target), 0);
      const conditionNames = Array.from(new Set(stageRows.map((row) => String(row.condition || "Unknown"))));

      const conditions = conditionNames
        .map<Condition>((conditionName) => {
          const conditionRows = stageRows.filter((row) => String(row.condition || "Unknown") === conditionName);
          const conditionTotal = conditionRows.reduce((sum, row) => sum + toNumber(row.target), 0);
          const segmentNames = Array.from(new Set(conditionRows.map((row) => String(row.subCondition || "Unknown"))));

          const segments = segmentNames
            .map((segmentName) => {
              const segmentRows = conditionRows.filter((row) => String(row.subCondition || "Unknown") === segmentName);
              const segmentTotal = segmentRows.reduce((sum, row) => sum + toNumber(row.target), 0);

              return {
                total: segmentTotal,
                id: `${slugify(conditionName)}-${slugify(segmentName)}`,
                label: segmentName === "Unknown" ? "Unknown cohort" : `Cohort ${segmentName}`,
                value: `${formatCompact(segmentTotal)} · ${formatShare(segmentTotal, stageTotal)}`,
                status: statusForRows(segmentRows),
              };
            })
            .sort((a, b) => b.total - a.total);

          return {
            id: slugify(conditionName),
            label: conditionName,
            value: `${formatCompact(conditionTotal)} · ${formatShare(conditionTotal, stageTotal)}`,
            total: conditionTotal,
            segments,
          };
        })
        .sort((a, b) => b.total - a.total);

      result[stageKey] = {
        ...stageMeta[stageKey],
        total: `${formatCompact(stageTotal)} pts`,
        conditions,
      };

      return result;
    },
    {} as Record<StageKey, StageData>,
  );
}
