"use client";

import { useId } from "react";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ComposedChart,
  Funnel,
  FunnelChart,
  LabelList,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Sankey,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";

type DonutDatum = {
  label: string;
  pct: number;
  color: string;
  value: string;
};

type PeriodAxisLabel = {
  label: string;
  month: string;
  year: string;
  showYear?: boolean;
};

type AxisTickProps = {
  x?: number | string;
  y?: number | string;
  payload?: { value?: string | number };
  index?: number;
};

function parseCompactAmount(raw: string) {
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

function formatCompactAmount(value: number) {
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

type BubbleDatum = {
  label: string;
  value: number;
  color: string;
  x: number;
  y: number;
  size: number;
};

type FunnelDatum = {
  label: string;
  count: string;
  leftNote: string;
  rightNote: string;
  revenue: string;
  width: number;
  fill?: string;
};

type GroupedBarDatum = {
  label: string;
  target: number;
  contacted: number;
  booked: number;
};

type HorizontalBarDatum = {
  label: string;
  value: number;
};

type StackedBarDatum = {
  label: string;
  stopper: number;
  dropper: number;
  tooltip?: string;
};

function BubbleTooltip({
  active,
  payload,
  metricLabel = "Seen Rate",
  detailLabel = "(Attended / Booked)",
}: {
  active?: boolean;
  payload?: Array<{ payload: BubbleDatum }>;
  metricLabel?: string;
  detailLabel?: string;
}) {
  if (!active || !payload?.length) {
    return null;
  }

  const point = payload[0].payload;

  return (
    <div className="subConditionChartTooltip">
      <strong>{point.label}</strong>
      <span>
        {metricLabel}: {point.value}% {detailLabel}
      </span>
      <span>{point.y}M revenue</span>
    </div>
  );
}

function BubbleShape(props: { cx?: number; cy?: number; payload?: BubbleDatum; showValueLabel?: boolean }) {
  const { cx = 0, cy = 0, payload, showValueLabel = true } = props;

  if (!payload) {
    return null;
  }

  const radius = Math.max(payload.size / 3.2, 28);

  return (
    <g>
      <circle cx={cx} cy={cy} r={radius} fill={`${payload.color}24`} stroke={payload.color} strokeWidth={2} />
      {showValueLabel ? (
        <text x={cx} y={cy + 6} textAnchor="middle" fill={payload.color} fontSize="16" fontWeight="700">
          {payload.value}%
        </text>
      ) : null}
    </g>
  );
}

function FunnelTooltip({ active, payload }: { active?: boolean; payload?: Array<{ payload: FunnelDatum }> }) {
  if (!active || !payload?.length) {
    return null;
  }

  const point = payload[0].payload;

  return (
    <div className="subConditionChartTooltip">
      <strong>{point.label}</strong>
      <span>{point.count} patients</span>
      <span>{point.revenue} incremental revenue</span>
    </div>
  );
}

function FunnelCenterLabel(props: {
  viewBox?: { x?: number; y?: number; width?: number; height?: number };
  value?: string;
  payload?: FunnelDatum & { labelText?: string };
}) {
  const { viewBox, payload } = props;

  if (!viewBox || !payload) {
    return null;
  }

  const x = (viewBox.x ?? 0) + (viewBox.width ?? 0) / 2;
  const y = (viewBox.y ?? 0) + (viewBox.height ?? 0) / 2;

  return (
    <text x={x} y={y + 4} textAnchor="middle" fill="#35515f" fontSize="12" fontWeight="700">
      {payload.label} · {payload.count}
    </text>
  );
}

function SankeyTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Array<{ payload?: { sourceLabel?: string; targetLabel?: string; value?: number } }>;
}) {
  const point = payload?.[0]?.payload;

  if (!active || !point) {
    return null;
  }

  return (
    <div className="subConditionChartTooltip">
      <strong>
        {point.sourceLabel} to {point.targetLabel}
      </strong>
      <span>{formatCompactAmount(point.value ?? 0)} patients</span>
    </div>
  );
}

export function ExportLineChart({
  values,
  max,
  color = "#2563EB",
  area = false,
  width = 280,
  height = 140,
  labels,
  showDots = true,
}: {
  values: number[];
  max: number;
  color?: string;
  area?: boolean;
  width?: number;
  height?: number;
  labels?: string[];
  showDots?: boolean;
}) {
  const gradientId = useId().replace(/:/g, "");
  const data = values.map((value, index) => ({
    label: labels?.[index] ?? `Point ${index + 1}`,
    value,
  }));

  return (
    <div className="linechart rechartsChart" style={{ minHeight: height }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 8, right: 12, bottom: 12, left: 4 }}>
          <defs>
            <linearGradient id={`lineArea-${gradientId}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="0.34" />
              <stop offset="58%" stopColor={color} stopOpacity="0.12" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#c7e0f8" strokeOpacity={0.85} />
          <XAxis dataKey="label" tick={{ fill: "#64748B", fontSize: 10 }} axisLine={{ stroke: "#7aa1c4" }} tickLine={false} interval={0} />
          <YAxis domain={[0, max]} tick={{ fill: "#64748B", fontSize: 10 }} axisLine={{ stroke: "#7aa1c4" }} tickLine={false} width={42} />
          <Tooltip cursor={{ stroke: "#8cbbe8", strokeDasharray: "4 4" }} />
          {area ? (
            <Area
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={2.4}
              fill={`url(#lineArea-${gradientId})`}
              dot={showDots ? { r: 3, fill: color, strokeWidth: 0 } : false}
              activeDot={{ r: 5 }}
              name="Value"
            />
          ) : (
            <Line
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={2.4}
              dot={showDots ? { r: 3, fill: color, strokeWidth: 0 } : false}
              activeDot={{ r: 5 }}
              name="Value"
            />
          )}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ExportMultiLineChart({
  series,
  labels,
  periodLabels,
  colors,
  names,
  valueSuffix = "",
  yAxisLabel,
  width = 280,
  height = 140,
}: {
  series: number[][];
  labels: string[];
  periodLabels?: PeriodAxisLabel[];
  colors: string[];
  names?: string[];
  valueSuffix?: string;
  yAxisLabel?: string;
  width?: number;
  height?: number;
}) {
  const gradientSeed = useId().replace(/:/g, "");
  const maxValue = Math.max(...series.flat(), 0);
  const maxY = Math.max(1, Math.ceil(maxValue * 1.18));
  const data = labels.map((label, index) => ({
    label,
    monthLabel: periodLabels?.[index]?.month ?? label,
    yearLabel: periodLabels?.[index]?.year ?? "",
    ...series.reduce<Record<string, number>>((acc, row, rowIndex) => {
      acc[`series${rowIndex + 1}`] = row[index] ?? 0;
      return acc;
    }, {}),
  }));
  const renderPeriodTick = ({ x = 0, y = 0, payload, index = 0 }: AxisTickProps) => {
    const tickX = Number(x);
    const tickY = Number(y);
    const period = periodLabels?.[index];
    const shouldShowYear = Boolean(period?.showYear ?? (period && (index === 0 || period.year !== periodLabels?.[index - 1]?.year)));

    return (
      <g transform={`translate(${Number.isFinite(tickX) ? tickX : 0},${Number.isFinite(tickY) ? tickY : 0})`}>
        <text x={0} y={0} dy={10} textAnchor="middle" fill="#64748B" fontSize={10}>
          {payload?.value}
        </text>
        {shouldShowYear ? (
          <text x={0} y={0} dy={24} textAnchor="middle" fill="#1E3A5F" fontSize={10} fontWeight={800}>
            {period?.year}
          </text>
        ) : null}
      </g>
    );
  };

  return (
    <div className="linechart rechartsChart" style={{ minHeight: height }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 8, right: 12, bottom: periodLabels ? 12 : 2, left: yAxisLabel ? 0 : -12 }}>
          <defs>
            {colors.map((color, index) => (
              <linearGradient key={color + index} id={`multiLineArea-${gradientSeed}-${index}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity="0.28" />
                <stop offset="58%" stopColor={color} stopOpacity="0.1" />
                <stop offset="100%" stopColor={color} stopOpacity="0" />
              </linearGradient>
            ))}
          </defs>
          <CartesianGrid stroke="#c7e0f8" strokeOpacity={0.85} />
          <XAxis
            dataKey={periodLabels ? "monthLabel" : "label"}
            tick={periodLabels ? renderPeriodTick : { fill: "#64748B", fontSize: 10 }}
            axisLine={{ stroke: "#7aa1c4" }}
            tickLine={false}
            interval={0}
            height={periodLabels ? 34 : 24}
          />
          <YAxis
            domain={[0, maxY]}
            tick={{ fill: "#64748B", fontSize: 10 }}
            axisLine={{ stroke: "#7aa1c4" }}
            tickLine={false}
            tickFormatter={(value) => `${value}${valueSuffix}`}
            width={44}
            label={yAxisLabel ? { value: yAxisLabel, angle: -90, position: "insideLeft", fill: "#64748B", fontSize: 10 } : undefined}
          />
          <Tooltip
            cursor={{ stroke: "#8cbbe8", strokeDasharray: "4 4" }}
            labelFormatter={(_label, payload) => payload?.[0]?.payload?.label ?? _label}
            formatter={(value, name) => {
              const numericValue = Number(value);
              const formattedValue = Number.isFinite(numericValue)
                ? numericValue.toFixed(2).replace(/\.00$/, "").replace(/(\.\d)0$/, "$1")
                : String(value);

              return [`${formattedValue}${valueSuffix}`, name];
            }}
          />
          {series.map((_, rowIndex) => (
            <Area
              key={rowIndex}
              type="monotone"
              dataKey={`series${rowIndex + 1}`}
              name={names?.[rowIndex] ?? `Series ${rowIndex + 1}`}
              stroke={colors[rowIndex]}
              strokeWidth={2.2}
              fill={`url(#multiLineArea-${gradientSeed}-${rowIndex})`}
              dot={{ r: 3, fill: colors[rowIndex], strokeWidth: 0 }}
              activeDot={{ r: 5 }}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ExportDualAxisLineChart({
  patientValues,
  revenueValues,
  labels,
  periodLabels,
  patientColor = "#2563EB",
  revenueColor = "#14B8A6",
  height = 140,
}: {
  patientValues: number[];
  revenueValues: number[];
  labels: string[];
  periodLabels?: PeriodAxisLabel[];
  patientColor?: string;
  revenueColor?: string;
  height?: number;
}) {
  const gradientSeed = useId().replace(/:/g, "");
  const maxPatients = Math.max(...patientValues, 1);
  const maxRevenue = Math.max(...revenueValues, 1);
  const data = labels.map((label, index) => ({
    label,
    monthLabel: periodLabels?.[index]?.month ?? label,
    yearLabel: periodLabels?.[index]?.year ?? "",
    patients: patientValues[index] ?? 0,
    revenue: revenueValues[index] ?? 0,
  }));
  const renderPeriodTick = ({ x = 0, y = 0, payload, index = 0 }: AxisTickProps) => {
    const tickX = Number(x);
    const tickY = Number(y);
    const period = periodLabels?.[index];
    const shouldShowYear = Boolean(period?.showYear ?? (period && (index === 0 || period.year !== periodLabels?.[index - 1]?.year)));

    return (
      <g transform={`translate(${Number.isFinite(tickX) ? tickX : 0},${Number.isFinite(tickY) ? tickY : 0})`}>
        <text x={0} y={0} dy={10} textAnchor="middle" fill="#64748B" fontSize={10}>
          {payload?.value}
        </text>
        {shouldShowYear ? (
          <text x={0} y={0} dy={24} textAnchor="middle" fill="#1E3A5F" fontSize={10} fontWeight={800}>
            {period?.year}
          </text>
        ) : null}
      </g>
    );
  };

  return (
    <div className="linechart rechartsChart" style={{ minHeight: height }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 8, right: 6, bottom: periodLabels ? 12 : 2, left: -8 }}>
          <defs>
            <linearGradient id={`dualPatients-${gradientSeed}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={patientColor} stopOpacity="0.26" />
              <stop offset="100%" stopColor={patientColor} stopOpacity="0" />
            </linearGradient>
            <linearGradient id={`dualRevenue-${gradientSeed}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={revenueColor} stopOpacity="0.24" />
              <stop offset="100%" stopColor={revenueColor} stopOpacity="0" />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#c7e0f8" strokeOpacity={0.85} />
          <XAxis
            dataKey={periodLabels ? "monthLabel" : "label"}
            tick={periodLabels ? renderPeriodTick : { fill: "#64748B", fontSize: 10 }}
            axisLine={{ stroke: "#7aa1c4" }}
            tickLine={false}
            interval={0}
            height={periodLabels ? 34 : 24}
          />
          <YAxis
            yAxisId="patients"
            domain={[0, Math.ceil(maxPatients * 1.18)]}
            tick={{ fill: patientColor, fontSize: 10 }}
            axisLine={{ stroke: "#7aa1c4" }}
            tickLine={false}
            tickFormatter={(value) => `${value}K`}
            width={38}
          />
          <YAxis
            yAxisId="revenue"
            orientation="right"
            domain={[0, Math.ceil(maxRevenue * 1.18)]}
            tick={{ fill: revenueColor, fontSize: 10 }}
            axisLine={{ stroke: "#7aa1c4" }}
            tickLine={false}
            tickFormatter={(value) => `${value}M`}
            width={38}
          />
          <Tooltip
            cursor={{ stroke: "#8cbbe8", strokeDasharray: "4 4" }}
            labelFormatter={(_label, payload) => payload?.[0]?.payload?.label ?? _label}
            formatter={(value, name) => {
              const numericValue = Number(value);
              const suffix = name === "Eligible Patients" ? "K" : "M";
              const formatted = Number.isFinite(numericValue)
                ? numericValue.toFixed(2).replace(/\.00$/, "").replace(/(\.\d)0$/, "$1")
                : String(value);

              return [`${formatted}${suffix}`, name];
            }}
          />
          <Area
            yAxisId="patients"
            type="monotone"
            dataKey="patients"
            name="Eligible Patients"
            stroke={patientColor}
            strokeWidth={2.3}
            fill={`url(#dualPatients-${gradientSeed})`}
            dot={{ r: 3, fill: patientColor, strokeWidth: 0 }}
            activeDot={{ r: 5 }}
          />
          <Area
            yAxisId="revenue"
            type="monotone"
            dataKey="revenue"
            name="Revenue"
            stroke={revenueColor}
            strokeWidth={2.3}
            fill={`url(#dualRevenue-${gradientSeed})`}
            dot={{ r: 3, fill: revenueColor, strokeWidth: 0 }}
            activeDot={{ r: 5 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ExportBarValueChart({
  values,
  labels,
  color = "#86EFAC",
  textColor = "#16A34A",
  max,
}: {
  values: number[];
  labels: string[];
  color?: string;
  textColor?: string;
  max: number;
}) {
  const height = 140;
  const data = values.map((value, index) => ({
    label: labels[index],
    value,
  }));

  return (
    <div className="linechart rechartsChart" style={{ minHeight: height }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 18, right: 12, bottom: 12, left: 4 }}>
          <CartesianGrid stroke="#c7e0f8" strokeOpacity={0.85} />
          <XAxis dataKey="label" tick={{ fill: "#64748B", fontSize: 10 }} axisLine={{ stroke: "#7aa1c4" }} tickLine={false} interval={0} />
          <YAxis domain={[0, max]} tick={{ fill: "#64748B", fontSize: 10 }} axisLine={{ stroke: "#7aa1c4" }} tickLine={false} width={42} />
          <Tooltip cursor={{ fill: "rgba(191, 219, 254, 0.22)" }} formatter={(value) => [`${value}K`, "Value"]} />
          <Bar dataKey="value" fill={color} radius={[3, 3, 0, 0]} name="Value">
            {data.map((item) => (
              <Cell key={item.label} fill={color} />
            ))}
            <LabelList dataKey="value" position="top" formatter={(value) => `${value ?? 0}K`} fill={textColor} fontSize={10} fontWeight={700} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ExportGroupedBarChart({
  data,
  height = 190,
  targetColor = "#A8C2D9",
  contactedColor = "#2466E7",
  bookedColor = "#12BE7C",
}: {
  data: GroupedBarDatum[];
  height?: number;
  targetColor?: string;
  contactedColor?: string;
  bookedColor?: string;
}) {
  const maxY = Math.max(...data.flatMap((item) => [item.target, item.contacted, item.booked]), 1);
  const formatAxisCount = (value: number) => {
    if (value >= 1_000_000) {
      return `${(value / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
    }

    if (value >= 1_000) {
      return `${(value / 1_000).toFixed(0)}K`;
    }

    return String(value);
  };

  return (
    <div className="linechart rechartsChart" style={{ minHeight: height }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 18, right: 10, bottom: 0, left: -22 }}>
          <CartesianGrid stroke="#c7e0f8" strokeOpacity={0.85} />
          <XAxis dataKey="label" tick={{ fill: "#64748B", fontSize: 10 }} axisLine={{ stroke: "#7aa1c4" }} tickLine={false} interval={0} />
          <YAxis domain={[0, Math.ceil(maxY * 1.15)]} tick={{ fill: "#64748B", fontSize: 10 }} axisLine={{ stroke: "#7aa1c4" }} tickLine={false} width={42} tickFormatter={(value) => formatAxisCount(Number(value))} />
          <Tooltip cursor={{ fill: "rgba(191, 219, 254, 0.22)" }} formatter={(value, name) => [Number(value).toLocaleString("en-US"), name]} />
          <Bar dataKey="target" fill={targetColor} radius={[3, 3, 0, 0]} name="Target">
            <LabelList dataKey="target" position="top" formatter={(value) => formatAxisCount(Number(value ?? 0))} fill="#64748B" fontSize={10} fontWeight={700} />
          </Bar>
          <Bar dataKey="contacted" fill={contactedColor} radius={[3, 3, 0, 0]} name="Contacted">
            <LabelList dataKey="contacted" position="top" formatter={(value) => formatAxisCount(Number(value ?? 0))} fill="#64748B" fontSize={10} fontWeight={700} />
          </Bar>
          <Bar dataKey="booked" fill={bookedColor} radius={[3, 3, 0, 0]} name="Booked">
            <LabelList dataKey="booked" position="top" formatter={(value) => formatAxisCount(Number(value ?? 0))} fill="#64748B" fontSize={10} fontWeight={700} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ExportHorizontalBarChart({
  data,
  height = 190,
  color = "#20AEE4",
  max = 100,
}: {
  data: HorizontalBarDatum[];
  height?: number;
  color?: string;
  max?: number;
}) {
  return (
    <div className="linechart rechartsChart" style={{ minHeight: height }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 6, right: 18, bottom: 8, left: 78 }}>
          <CartesianGrid stroke="#c7e0f8" strokeOpacity={0.85} />
          <XAxis type="number" domain={[0, max]} tick={{ fill: "#64748B", fontSize: 10 }} axisLine={{ stroke: "#7aa1c4" }} tickLine={false} tickFormatter={(value) => `${value}%`} />
          <YAxis type="category" dataKey="label" tick={{ fill: "#64748B", fontSize: 10 }} axisLine={{ stroke: "#7aa1c4" }} tickLine={false} width={78} />
          <Tooltip cursor={{ fill: "rgba(191, 219, 254, 0.2)" }} formatter={(value) => [`${value}%`, "Conversion"]} />
          <Bar dataKey="value" fill={color} radius={[0, 4, 4, 0]} barSize={12} name="Conversion" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ExportStackedBarChart({
  data,
  height = 210,
  max,
}: {
  data: StackedBarDatum[];
  height?: number;
  max?: number;
}) {
  const yMax = max ?? Math.max(...data.map((item) => item.stopper + item.dropper), 1);

  return (
    <div className="linechart rechartsChart" style={{ minHeight: height }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 12, right: 10, bottom: 0, left: -18 }}>
          <CartesianGrid stroke="#c7e0f8" strokeOpacity={0.85} />
          <XAxis dataKey="label" tick={{ fill: "#64748B", fontSize: 10 }} axisLine={{ stroke: "#7aa1c4" }} tickLine={false} interval={0} />
          <YAxis domain={[0, yMax]} tick={{ fill: "#64748B", fontSize: 10 }} axisLine={{ stroke: "#7aa1c4" }} tickLine={false} width={38} />
          <Tooltip
            cursor={{ fill: "rgba(191, 219, 254, 0.22)" }}
            formatter={(value, name) => {
              const seriesName = String(name).toLowerCase();

              return [
                Math.round(Number(value ?? 0)).toLocaleString("en-US"),
                seriesName === "stopper" ? "Stopper" : "Dropper",
              ];
            }}
            labelFormatter={(label, payload) => payload?.[0]?.payload?.tooltip ?? label}
          />
          <Bar dataKey="dropper" stackId="patients" fill="#A8C2D9" radius={[3, 3, 0, 0]} name="Dropper" />
          <Bar dataKey="stopper" stackId="patients" fill="#2563EB" radius={[3, 3, 0, 0]} name="Stopper" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ExportDonutChart({
  data,
  centerValue,
  centerLabel,
}: {
  data: DonutDatum[];
  centerValue: string;
  centerLabel: string[];
}) {
  const cx = 75;
  const cy = 75;
  const r = 48;
  const sw = 16;
  let cum = 0;

  const slices = data.map((d) => {
    const f = d.pct / 100;
    const sa = cum * 2 * Math.PI - Math.PI / 2;
    cum += f;
    const ea = cum * 2 * Math.PI - Math.PI / 2;
    const x1 = cx + r * Math.cos(sa);
    const y1 = cy + r * Math.sin(sa);
    const x2 = cx + r * Math.cos(ea);
    const y2 = cy + r * Math.sin(ea);
    const largeArc = f > 0.5 ? 1 : 0;
    return (
      <path
        key={d.label}
        d={`M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`}
        fill="none"
        stroke={d.color}
        strokeWidth={sw}
      />
    );
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <svg width="180" height="150" viewBox="0 0 180 150">
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#F1F5F9" strokeWidth={sw} />
        {slices}
        {centerLabel.map((line, index) => (
          <text
            key={line}
            x={cx}
            y={cy - 6 + index * 10}
            textAnchor="middle"
            fontSize="7"
            fill="#94A3B8"
            fontFamily="Inter"
            fontWeight="500"
          >
            {line}
          </text>
        ))}
        <text x={cx} y={cy + 18} textAnchor="middle" fontSize="16" fontWeight="700" fill="#1E3A5F" fontFamily="Inter">
          {centerValue}
        </text>
      </svg>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 12px", justifyContent: "center", marginTop: 4, fontSize: 9.5, color: "#64748B" }}>
        {data.map((d) => (
          <span key={d.label}>
            {d.label} <b style={{ color: "#1E3A5F" }}>{d.value}</b>
          </span>
        ))}
      </div>
    </div>
  );
}

function renderDonutCallout({
  cx,
  cy,
  midAngle,
  outerRadius,
  percent,
  name,
  value,
  index = 0,
  total = 1,
}: {
  cx?: number;
  cy?: number;
  midAngle?: number;
  outerRadius?: number;
  percent?: number;
  name?: string;
  value?: string;
  index?: number;
  total?: number;
}) {
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
    { side: 1, offsetY: -46 },
    { side: 1, offsetY: 42 },
    { side: -1, offsetY: 42 },
    { side: -1, offsetY: -46 },
    { side: 1, offsetY: 0 },
    { side: -1, offsetY: 0 },
  ];
  const overflowIndex = Math.max(0, index - slotMap.length);
  const slot = slotMap[index] ?? {
    side: index % 2 === 0 ? 1 : -1,
    offsetY: -58 + (overflowIndex % Math.max(total, 1)) * 22,
  };
  const horizontalReach = Math.max(42, radius * 0.78);
  const labelX = centerX + slot.side * horizontalReach;
  const labelY = centerY + slot.offsetY;
  const textAnchor = slot.side > 0 ? "start" : "end";
  const textX = labelX + slot.side * 5;

  return (
    <g>
      <path d={`M${sourceX},${sourceY}L${elbowX},${elbowY}L${labelX},${labelY}`} stroke="#2f4357" strokeWidth={1.05} fill="none" />
      <text x={textX} y={labelY - 5} textAnchor={textAnchor} fontSize="9.5" fill="#5f778e" fontWeight="600">
        {safeName}
      </text>
      <text x={textX} y={labelY + 9} textAnchor={textAnchor} fontSize="10.5" fill="#2f4357" fontWeight="500">
        {value ?? fallbackPercent}
      </text>
    </g>
  );
}

export function ExportLabeledDonutChart({
  data,
  centerValue,
  height = 290,
}: {
  data: DonutDatum[];
  centerValue?: string;
  height?: number;
}) {
  const computedCenterValue = centerValue ?? formatCompactAmount(data.reduce((sum, item) => sum + parseCompactAmount(item.value), 0));

  return (
    <div className="exportLabeledDonut" style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart margin={{ top: 12, right: 58, bottom: 12, left: 58 }}>
          <Pie
            data={data}
            dataKey="pct"
            nameKey="label"
            cx="50%"
            cy="53%"
            innerRadius="39%"
            outerRadius="52%"
            paddingAngle={1.5}
            minAngle={2}
            stroke="#ffffff"
            strokeWidth={3}
            labelLine={false}
            isAnimationActive={false}
            label={(props: unknown) => {
              const labelProps = props as {
                cx?: number;
                cy?: number;
                midAngle?: number;
                outerRadius?: number;
                percent?: number;
                name?: string;
                index?: number;
              };
              const index = Number(labelProps.index ?? 0);

              return renderDonutCallout({
                ...labelProps,
                index,
                total: data.length,
                name: data[index]?.label ?? labelProps.name,
                value: data[index]?.value,
              });
            }}
          >
            {data.map((entry) => (
              <Cell key={entry.label} fill={entry.color} />
            ))}
          </Pie>
          <text x="50%" y="53%" textAnchor="middle" dominantBaseline="middle" fontSize="28" fontWeight="500" fill="#2c3f52">
            {computedCenterValue}
          </text>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ExportBubbleChart({
  data,
  height = 260,
  showValueLabels = true,
  metricLabel = "Seen Rate",
  detailLabel = "(Attended / Booked)",
}: {
  data: BubbleDatum[];
  height?: number;
  showValueLabels?: boolean;
  metricLabel?: string;
  detailLabel?: string;
}) {
  if (!data.length) {
    return <div className="exportChartEmpty">No chart data available.</div>;
  }

  const maxY = Math.max(...data.map((item) => item.y), 1);

  return (
    <div className="exportBubbleChart" style={{ height }}>
      <ResponsiveContainer width="100%" height={height}>
        <ScatterChart margin={{ top: 18, right: 18, bottom: 22, left: 18 }}>
          <CartesianGrid stroke="#d5e6f8" strokeDasharray="0" />
          <XAxis
            type="number"
            dataKey="x"
            domain={[0, 100]}
            tick={{ fill: "#64748B", fontSize: 10 }}
            axisLine={{ stroke: "#7aa1c4" }}
            tickLine={false}
            tickFormatter={(value) => `${value}%`}
            name="Seen Rate"
          />
          <YAxis
            type="number"
            dataKey="y"
            domain={[0, Math.ceil(maxY * 1.2)]}
            tick={{ fill: "#64748B", fontSize: 10 }}
            axisLine={{ stroke: "#7aa1c4" }}
            tickLine={false}
            tickFormatter={(value) => `${value}M`}
            name="Revenue"
          />
          <ZAxis type="number" dataKey="size" range={[900, 6500]} />
          <Tooltip content={<BubbleTooltip metricLabel={metricLabel} detailLabel={detailLabel} />} cursor={false} />
          <Scatter data={data} shape={<BubbleShape showValueLabel={showValueLabels} />} />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ExportFunnelChart({
  data,
  height = 250,
  leftHeader,
  rightHeader,
}: {
  data: FunnelDatum[];
  height?: number;
  leftHeader?: string;
  rightHeader?: string;
}) {
  if (!data.length) {
    return <div className="exportChartEmpty">No chart data available.</div>;
  }

  const fills = ["#b6ebf5", "#9ee2ee", "#7ad5e6", "#62c9dd"];
  const prepared = data.map((item, index) => ({
    ...item,
    value: item.width,
    fill: item.fill ?? fills[index % fills.length],
  }));

  return (
    <div className="exportFunnelLayout" style={{ minHeight: height }}>
      <div className="exportFunnelCanvas">
        <ResponsiveContainer width="100%" height={height}>
          <FunnelChart>
            <Tooltip content={<FunnelTooltip />} cursor={false} />
            <Funnel dataKey="value" data={prepared} isAnimationActive={false}>
              <LabelList content={<FunnelCenterLabel />} />
              {prepared.map((item) => (
                <Cell key={item.label} fill={item.fill} stroke={item.fill} />
              ))}
            </Funnel>
          </FunnelChart>
        </ResponsiveContainer>
      </div>

      <div className="exportFunnelMeta">
        {leftHeader || rightHeader ? (
          <div className="exportFunnelMetaHead">
            <span>{leftHeader ?? ""}</span>
            <span>{rightHeader ?? ""}</span>
          </div>
        ) : null}

        {prepared.map((item) => (
          <div key={item.label} className="exportFunnelMetaRow">
            <div className="exportFunnelMetaMain">
              <strong>
                {item.label} · {item.count}
              </strong>
              <div className="exportFunnelMetaNotes">
                <span>{item.leftNote}</span>
                <span>{item.rightNote}</span>
              </div>
            </div>
            <strong className="exportFunnelRevenue">{item.revenue}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ExportSankeyChart({
  left,
  right,
}: {
  left: { acquire: string; build: string; contain: string };
  right: { acquire: string; build: string; contain: string };
}) {
  const nodeMeta = [
    { key: "acquire", label: "Acquire", color: "#2563EB", group: "left" as const },
    { key: "build", label: "Build", color: "#22C55E", group: "left" as const },
    { key: "contain", label: "Contain", color: "#F97316", group: "left" as const },
    { key: "acquire", label: "Acquire", color: "#2563EB", group: "right" as const },
    { key: "build", label: "Build", color: "#22C55E", group: "right" as const },
    { key: "contain", label: "Contain", color: "#F97316", group: "right" as const },
  ];

  const leftValues = [parseCompactAmount(left.acquire), parseCompactAmount(left.build), parseCompactAmount(left.contain)];
  const ratios = [
    [0.68, 0.22, 0.1],
    [0.18, 0.62, 0.2],
    [0.08, 0.26, 0.66],
  ];

  const links = leftValues.flatMap((value, rowIndex) =>
    ratios[rowIndex].map((ratio, columnIndex) => {
      const amount = Math.max(0, Math.round(value * ratio));
      return {
        source: rowIndex,
        target: columnIndex + 3,
        value: amount,
        sourceLabel: nodeMeta[rowIndex].label,
        targetLabel: nodeMeta[columnIndex + 3].label,
        color: nodeMeta[rowIndex].color,
      };
    }),
  );

  const nodes = nodeMeta.map((item, index) => ({
    name: `${item.label} ${item.group === "left" ? [left.acquire, left.build, left.contain][index] : [right.acquire, right.build, right.contain][index - 3]}`,
    label: item.label,
    valueLabel: item.group === "left" ? [left.acquire, left.build, left.contain][index] : [right.acquire, right.build, right.contain][index - 3],
    color: item.color,
    group: item.group,
  }));

  const SankeyNode = (props: any) => {
    const { x, y, width, height, payload } = props;
    if (!payload) {
      return null;
    }

    const alignRight = payload.group === "right";
    const labelX = alignRight ? x - 8 : x + width + 8;
    const labelAnchor = alignRight ? "end" : "start";

    return (
      <g>
        <rect x={x} y={y} width={width} height={height} rx={4} fill={payload.color} opacity="0.88" />
        <text x={labelX} y={y + height / 2 - 4} textAnchor={labelAnchor} fill="#4b6177" fontSize="11" fontWeight="700">
          {payload.label}
        </text>
        <text x={labelX} y={y + height / 2 + 11} textAnchor={labelAnchor} fill={payload.color} fontSize="11" fontWeight="700">
          {payload.valueLabel}
        </text>
      </g>
    );
  };

  const SankeyLink = (props: any) => {
    const { sourceX, targetX, sourceY, targetY, sourceControlX, targetControlX, linkWidth, payload } = props;
    const path = `
      M${sourceX},${sourceY - linkWidth / 2}
      C${sourceControlX},${sourceY - linkWidth / 2} ${targetControlX},${targetY - linkWidth / 2} ${targetX},${targetY - linkWidth / 2}
      L${targetX},${targetY + linkWidth / 2}
      C${targetControlX},${targetY + linkWidth / 2} ${sourceControlX},${sourceY + linkWidth / 2} ${sourceX},${sourceY + linkWidth / 2}
      Z
    `;

    return <path d={path} fill={payload.color} opacity="0.22" stroke="none" />;
  };

  return (
    <div className="exportSankeyWrap">
      <ResponsiveContainer width="100%" height="100%">
        <Sankey
          data={{ nodes, links }}
          nodePadding={18}
          nodeWidth={12}
          margin={{ top: 6, right: 44, bottom: 4, left: 44 }}
          link={<SankeyLink />}
          node={<SankeyNode />}
          iterations={64}
        >
          <Tooltip content={<SankeyTooltip />} cursor={false} />
        </Sankey>
      </ResponsiveContainer>
    </div>
  );
}

export function ExportBubbleSegments({
  segments,
}: {
  segments: Array<{ label: string; value: number; color: string; x: number; y: number; size: number }>;
}) {
  return (
    <svg viewBox="0 0 280 180" style={{ width: "100%", height: 180 }}>
      {segments.map((segment) => (
        <g key={segment.label}>
          <circle
            cx={segment.x * 2.2}
            cy={180 - segment.y * 1.8}
            r={Math.max(12, segment.size / 2.6)}
            fill={segment.color}
            opacity="0.28"
            stroke={segment.color}
            strokeWidth="1.5"
          />
          <text
            x={segment.x * 2.2}
            y={183 - segment.y * 1.8}
            textAnchor="middle"
            fontSize="18"
            fontWeight="700"
            fill={segment.color}
          >
            {segment.value}%
          </text>
        </g>
      ))}
    </svg>
  );
}

export function ExportHeatmap({
  values,
  columns,
  rows,
}: {
  values: number[][];
  columns: string[];
  rows: string[];
}) {
  return (
    <div className="campaignHeatmap">
      <div className="campaignHeatHeaderSpacer" />
      {columns.map((column) => (
        <div key={column} className="campaignHeatHeader">
          {column}
        </div>
      ))}
      {rows.map((row, rowIndex) => (
        <div key={row} className="campaignHeatRow">
          <div className="campaignHeatTime">{row.replace(".", ":")}</div>
          {columns.map((column, columnIndex) => (
            <div
              key={`${row}-${column}`}
              className="campaignHeatCell"
              data-val={`${Math.round(values[rowIndex][columnIndex] * 100)}%`}
              style={{ background: `rgba(33, 173, 214, ${Math.max(values[rowIndex][columnIndex], 0.18)})` }}
              title={`${column} at ${row.replace(".", ":")}: ${Math.round(values[rowIndex][columnIndex] * 100)}%`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export function ExportEntitiesSummary({
  summary,
  series,
  chartHeight = 130,
}: {
  summary: { entities: string; enrolled: string; revenue: string };
  series: Array<{ name: string; bar: number; line: number }>;
  chartHeight?: number;
}) {
  const chartTop = 16;
  const chartBottom = 24;
  const availableHeight = chartHeight - chartTop - chartBottom;
  const lineMax = Math.max(...series.map((item) => item.line), 1);
  const barMax = Math.max(...series.map((item) => item.bar), 1);

  return (
    <>
      <div style={{ display: "flex", gap: 14, fontSize: 10, marginBottom: 8 }}>
        <div><b style={{ color: "#1E3A5F", fontSize: 16 }}>{summary.entities}</b><br /><span style={{ color: "#64748B" }}>Entities active</span></div>
        <div><b style={{ color: "#1E3A5F", fontSize: 16 }}>{summary.enrolled}</b><br /><span style={{ color: "#64748B" }}>Total enrolled</span></div>
        <div><b style={{ color: "#22C55E", fontSize: 16 }}>{summary.revenue}</b><br /><span style={{ color: "#64748B" }}>Total Revenue</span></div>
      </div>
      <div className="linechart rechartsChart" style={{ height: '300px', minHeight: chartHeight }}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={series} margin={{ top: 8, right: 8, bottom: 0, left: -24 }}>
            <CartesianGrid stroke="#c7e0f8" strokeOpacity={0.85} />
            <XAxis dataKey="name" tick={{ fill: "#64748B", fontSize: 9 }} axisLine={{ stroke: "#7aa1c4" }} tickLine={false} interval={0} />
            <YAxis
              yAxisId="bar"
              domain={[0, barMax]}
              tick={{ fill: "#64748B", fontSize: 9 }}
              axisLine={{ stroke: "#7aa1c4" }}
              tickLine={false}
              width={34}
            />
            <YAxis
              yAxisId="line"
              orientation="right"
              domain={[0, lineMax]}
              tick={{ fill: "#22C55E", fontSize: 9 }}
              axisLine={{ stroke: "#22C55E" }}
              tickLine={false}
              width={34}
            />
            <Tooltip
              cursor={{ fill: "rgba(191, 219, 254, 0.18)" }}
              formatter={(value, name) => {
                const seriesName = String(name).toLowerCase();

                return [`${value}K`, seriesName === "bar" || seriesName === "total enrolled" ? "Total Enrolled" : "Revenue"];
              }}
            />
            <Bar yAxisId="bar" dataKey="bar" fill="#BFDBFE" radius={[3, 3, 0, 0]} name="Total Enrolled" />
            <Line yAxisId="line" type="monotone" dataKey="line" stroke="#22C55E" strokeWidth={2.2} dot={{ r: 3, fill: "#22C55E", strokeWidth: 0 }} activeDot={{ r: 5 }} name="Revenue" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
