"use client";

import { useMemo, useRef, useState } from "react";
import { DashboardShell } from "../../components/dashboard-shell";
import {
  ExportBarValueChart,
  ExportBubbleChart,
  ExportEntitiesSummary,
  ExportFunnelChart,
  ExportHeatmap,
  ExportLabeledDonutChart,
  ExportLineChart,
} from "../../components/export-visuals";
import { getCampaignDetailsDataset, getCampaignDetailsFilterOptions, getOverviewDatasetDateRange } from "../../components/hvm-data";

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
const weeks = ["Wk 1", "Wk 2", "Wk 3", "Wk 4", "Wk 5", "Wk 6", "Wk 7", "Wk 8"];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const times = ["09.00", "10.00", "11.00", "12.00", "13.00", "14.00", "15.00", "16.00", "17.00", "18.00"];

type RegionKey = "all" | "abu-dhabi" | "al-ain" | "al-dhafra";
const XHTML_NS = "http://www.w3.org/1999/xhtml";

type CampaignData = {
  campaignName: string;
  metrics: Array<{ title: string; value: string; note?: string; icon: string; tone?: "success" }>;
  patientsAttended: number[];
  revenueTarget: number;
  revenueCurrent: number;
  revenueBars: number[];
  channelBreakdown: Array<{ label: string; value: number; amount: string; color: string }>;
  dropoff: Array<{ label: string; count: string; leftNote: string; rightNote: string; revenue: string; width: number }>;
  entitySummary: { entities: string; enrolled: string; revenue: string };
  entitySeries: Array<{ name: string; bar: number; line: number }>;
  conversionSegments: Array<{ label: string; value: number; color: string; x: number; y: number; size: number }>;
  heatmap: number[][];
  costCurrent: string;
  costTarget: string;
  costSeries: number[];
  targetLine: number;
};

const campaignData: Record<RegionKey, CampaignData> = {
  all: {
    campaignName: "Diabetes Prevention Program",
    metrics: [
      { title: "Total Eligible Patients", value: "5,480", icon: "/overview-candidate.png" },
      { title: "Patients Contacted", value: "2,104", icon: "/overview-announcement.png" },
      { title: "Engagement Rate", value: "55%", icon: "/overview-conditions.png" },
      { title: "Conversion", value: "1,872", note: "(42.5%)", icon: "/overview-candidate.png" },
      { title: "Seen Rate", value: "58.3%", icon: "/overview-seen-rate.png" },
      { title: "Campaign Status", value: "Active", icon: "/overview-announcement.png", tone: "success" },
    ],
    patientsAttended: [800, 1600, 1240, 1900, 2380, 2360, 2980, 4060, 4820, 4550, 4480, 4510],
    revenueTarget: 500,
    revenueCurrent: 442,
    revenueBars: [52, 71, 56, 82, 62, 23, 58, 38],
    channelBreakdown: [
      { label: "SMS", value: 38, amount: "721K (38%)", color: "#8668e0" },
      { label: "Call", value: 32, amount: "608K (32%)", color: "#3b8df1" },
      { label: "App", value: 18, amount: "342K (18%)", color: "#47cfc3" },
      { label: "Walk-in", value: 12, amount: "228K (12%)", color: "#fb4c8e" },
    ],
    dropoff: [
      { label: "Identified", count: "18,432", leftNote: "100.0% of total", rightNote: "22.5%", revenue: "405.5M", width: 100 },
      { label: "Contacted", count: "14,280", leftNote: "77.5%", rightNote: "18.5%", revenue: "314.2M", width: 77.5 },
      { label: "Appointment Booked", count: "10,120", leftNote: "54.9%", rightNote: "12.5%", revenue: "222.6M", width: 54.9 },
      { label: "Attended", count: "8,850", leftNote: "48.0%", rightNote: "", revenue: "194.7M", width: 48 },
    ],
    entitySummary: { entities: "5", enrolled: "3,872", revenue: "Ð 528K" },
    entitySeries: [
      { name: "Entity 1", bar: 52, line: 108 },
      { name: "Entity 2", bar: 71, line: 92 },
      { name: "Entity 3", bar: 56, line: 91 },
      { name: "Entity 4", bar: 82, line: 142 },
      { name: "Entity 5", bar: 62, line: 94 },
    ],
    conversionSegments: [
      { label: "Chronic care", value: 54, color: "#8f24ff", x: 69, y: 78, size: 180 },
      { label: "Preventive", value: 41, color: "#156cff", x: 31, y: 60, size: 158 },
      { label: "Wellness", value: 29, color: "#11a761", x: 56, y: 25, size: 118 },
      { label: "At-risk", value: 22, color: "#ff1f3d", x: 35, y: 10, size: 78 },
    ],
    heatmap: [
      [0.82, 0.8, 0.52, 0.47, 0.78],
      [0.4, 0.25, 0.24, 0.82, 0.48],
      [0.38, 0.82, 0.86, 0.48, 0.5],
      [0.22, 0.83, 0.24, 0.48, 0.52],
      [0.8, 0.42, 0.4, 0.45, 0.77],
      [0.48, 0.52, 0.26, 0.46, 0.24],
      [0.46, 0.24, 0.42, 0.29, 0.4],
      [0.24, 0.82, 0.42, 0.24, 0.21],
      [0.43, 0.27, 0.5, 0.46, 0.31],
      [0.82, 0.24, 0.83, 0.8, 0.22],
    ],
    costCurrent: "Ð 98M",
    costTarget: "Ð 100M",
    costSeries: [171, 164, 150, 138, 129, 111, 103, 88],
    targetLine: 88,
  },
  "abu-dhabi": {
    campaignName: "Abu Dhabi Diabetes Prevention",
    metrics: [
      { title: "Total Eligible Patients", value: "3,920", icon: "/overview-candidate.png" },
      { title: "Patients Contacted", value: "1,584", icon: "/overview-announcement.png" },
      { title: "Engagement Rate", value: "58%", icon: "/overview-conditions.png" },
      { title: "Conversion", value: "1,144", note: "(44.6%)", icon: "/overview-candidate.png" },
      { title: "Seen Rate", value: "61.8%", icon: "/overview-seen-rate.png" },
      { title: "Campaign Status", value: "Active", icon: "/overview-announcement.png", tone: "success" },
    ],
    patientsAttended: [620, 1290, 1010, 1510, 1880, 1920, 2470, 3380, 3960, 3790, 3680, 3710],
    revenueTarget: 340,
    revenueCurrent: 298,
    revenueBars: [36, 54, 42, 68, 50, 18, 44, 31],
    channelBreakdown: [
      { label: "SMS", value: 41, amount: "482K (41%)", color: "#8668e0" },
      { label: "Call", value: 29, amount: "341K (29%)", color: "#3b8df1" },
      { label: "App", value: 19, amount: "224K (19%)", color: "#47cfc3" },
      { label: "Walk-in", value: 11, amount: "129K (11%)", color: "#fb4c8e" },
    ],
    dropoff: [
      { label: "Identified", count: "11,240", leftNote: "100.0% of total", rightNote: "24.1%", revenue: "228.2M", width: 100 },
      { label: "Contacted", count: "8,640", leftNote: "76.8%", rightNote: "19.3%", revenue: "171.8M", width: 76.8 },
      { label: "Appointment Booked", count: "6,232", leftNote: "55.4%", rightNote: "13.2%", revenue: "120.9M", width: 55.4 },
      { label: "Attended", count: "5,212", leftNote: "46.4%", rightNote: "", revenue: "94.7M", width: 46.4 },
    ],
    entitySummary: { entities: "5", enrolled: "2,516", revenue: "Ð 316K" },
    entitySeries: [
      { name: "Entity 1", bar: 48, line: 96 },
      { name: "Entity 2", bar: 63, line: 87 },
      { name: "Entity 3", bar: 46, line: 84 },
      { name: "Entity 4", bar: 75, line: 132 },
      { name: "Entity 5", bar: 59, line: 93 },
    ],
    conversionSegments: [
      { label: "Chronic care", value: 57, color: "#8f24ff", x: 70, y: 78, size: 182 },
      { label: "Preventive", value: 44, color: "#156cff", x: 31, y: 61, size: 160 },
      { label: "Wellness", value: 27, color: "#11a761", x: 57, y: 25, size: 112 },
      { label: "At-risk", value: 19, color: "#ff1f3d", x: 35, y: 10, size: 74 },
    ],
    heatmap: [
      [0.9, 0.86, 0.6, 0.53, 0.82],
      [0.45, 0.3, 0.28, 0.86, 0.56],
      [0.42, 0.86, 0.89, 0.53, 0.56],
      [0.26, 0.87, 0.29, 0.52, 0.58],
      [0.85, 0.46, 0.44, 0.51, 0.79],
      [0.52, 0.58, 0.31, 0.5, 0.28],
      [0.49, 0.29, 0.5, 0.33, 0.44],
      [0.28, 0.86, 0.46, 0.29, 0.24],
      [0.48, 0.31, 0.56, 0.49, 0.38],
      [0.87, 0.28, 0.85, 0.84, 0.25],
    ],
    costCurrent: "Ð 68M",
    costTarget: "Ð 74M",
    costSeries: [138, 131, 123, 117, 109, 100, 93, 74],
    targetLine: 74,
  },
  "al-ain": {
    campaignName: "Entity 7 Community Coaching",
    metrics: [
      { title: "Total Eligible Patients", value: "1,140", icon: "/overview-candidate.png" },
      { title: "Patients Contacted", value: "412", icon: "/overview-announcement.png" },
      { title: "Engagement Rate", value: "47%", icon: "/overview-conditions.png" },
      { title: "Conversion", value: "318", note: "(38.1%)", icon: "/overview-candidate.png" },
      { title: "Seen Rate", value: "49.2%", icon: "/overview-seen-rate.png" },
      { title: "Campaign Status", value: "Active", icon: "/overview-announcement.png", tone: "success" },
    ],
    patientsAttended: [210, 460, 390, 580, 720, 750, 910, 1120, 1320, 1260, 1180, 1200],
    revenueTarget: 110,
    revenueCurrent: 96,
    revenueBars: [12, 21, 18, 24, 19, 8, 14, 11],
    channelBreakdown: [
      { label: "SMS", value: 36, amount: "121K (36%)", color: "#8668e0" },
      { label: "Call", value: 33, amount: "111K (33%)", color: "#3b8df1" },
      { label: "App", value: 20, amount: "68K (20%)", color: "#47cfc3" },
      { label: "Walk-in", value: 11, amount: "37K (11%)", color: "#fb4c8e" },
    ],
    dropoff: [
      { label: "Identified", count: "4,230", leftNote: "100.0% of total", rightNote: "18.3%", revenue: "92.4M", width: 100 },
      { label: "Contacted", count: "3,044", leftNote: "72.0%", rightNote: "14.9%", revenue: "66.8M", width: 72 },
      { label: "Appointment Booked", count: "1,883", leftNote: "44.5%", rightNote: "9.4%", revenue: "37.5M", width: 44.5 },
      { label: "Attended", count: "1,222", leftNote: "28.9%", rightNote: "", revenue: "21.7M", width: 28.9 },
    ],
    entitySummary: { entities: "4", enrolled: "812", revenue: "Ð 121K" },
    entitySeries: [
      { name: "Entity 6", bar: 27, line: 43 },
      { name: "Entity 7", bar: 39, line: 58 },
      { name: "Entity 8", bar: 24, line: 38 },
      { name: "Entity 9", bar: 18, line: 25 },
    ],
    conversionSegments: [
      { label: "Chronic care", value: 42, color: "#8f24ff", x: 69, y: 78, size: 154 },
      { label: "Preventive", value: 34, color: "#156cff", x: 31, y: 60, size: 132 },
      { label: "Wellness", value: 25, color: "#11a761", x: 56, y: 25, size: 104 },
      { label: "At-risk", value: 18, color: "#ff1f3d", x: 35, y: 10, size: 70 },
    ],
    heatmap: [
      [0.52, 0.48, 0.31, 0.28, 0.5],
      [0.26, 0.18, 0.16, 0.53, 0.33],
      [0.23, 0.54, 0.56, 0.31, 0.36],
      [0.17, 0.55, 0.2, 0.3, 0.35],
      [0.53, 0.27, 0.25, 0.28, 0.49],
      [0.29, 0.34, 0.18, 0.28, 0.16],
      [0.28, 0.17, 0.32, 0.22, 0.25],
      [0.15, 0.51, 0.26, 0.17, 0.14],
      [0.27, 0.18, 0.34, 0.26, 0.22],
      [0.54, 0.16, 0.52, 0.51, 0.15],
    ],
    costCurrent: "Ð 19M",
    costTarget: "Ð 21M",
    costSeries: [44, 41, 38, 35, 32, 29, 25, 21],
    targetLine: 21,
  },
  "al-dhafra": {
    campaignName: "Dhafra Preventive Outreach",
    metrics: [
      { title: "Total Eligible Patients", value: "420", icon: "/overview-candidate.png" },
      { title: "Patients Contacted", value: "108", icon: "/overview-announcement.png" },
      { title: "Engagement Rate", value: "39%", icon: "/overview-conditions.png" },
      { title: "Conversion", value: "92", note: "(30.2%)", icon: "/overview-candidate.png" },
      { title: "Seen Rate", value: "42.8%", icon: "/overview-seen-rate.png" },
      { title: "Campaign Status", value: "Active", icon: "/overview-announcement.png", tone: "success" },
    ],
    patientsAttended: [92, 210, 184, 246, 318, 304, 360, 420, 498, 472, 450, 460],
    revenueTarget: 44,
    revenueCurrent: 39,
    revenueBars: [5, 9, 7, 11, 8, 4, 7, 5],
    channelBreakdown: [
      { label: "SMS", value: 43, amount: "39K (43%)", color: "#8668e0" },
      { label: "Call", value: 27, amount: "24K (27%)", color: "#3b8df1" },
      { label: "App", value: 17, amount: "15K (17%)", color: "#47cfc3" },
      { label: "Walk-in", value: 13, amount: "12K (13%)", color: "#fb4c8e" },
    ],
    dropoff: [
      { label: "Identified", count: "2,962", leftNote: "100.0% of total", rightNote: "16.4%", revenue: "48.7M", width: 100 },
      { label: "Contacted", count: "2,150", leftNote: "72.6%", rightNote: "13.0%", revenue: "34.2M", width: 72.6 },
      { label: "Appointment Booked", count: "1,120", leftNote: "37.8%", rightNote: "8.8%", revenue: "18.8M", width: 37.8 },
      { label: "Attended", count: "786", leftNote: "26.5%", rightNote: "", revenue: "11.4M", width: 26.5 },
    ],
    entitySummary: { entities: "3", enrolled: "284", revenue: "Ð 42K" },
    entitySeries: [
      { name: "Madinat Zayed", bar: 12, line: 18 },
      { name: "Ghayathi", bar: 16, line: 24 },
      { name: "Liwa", bar: 11, line: 15 },
    ],
    conversionSegments: [
      { label: "Chronic care", value: 33, color: "#8f24ff", x: 68, y: 76, size: 126 },
      { label: "Preventive", value: 27, color: "#156cff", x: 30, y: 60, size: 108 },
      { label: "Wellness", value: 18, color: "#11a761", x: 56, y: 25, size: 90 },
      { label: "At-risk", value: 14, color: "#ff1f3d", x: 35, y: 10, size: 62 },
    ],
    heatmap: [
      [0.28, 0.26, 0.18, 0.17, 0.27],
      [0.15, 0.12, 0.11, 0.29, 0.2],
      [0.13, 0.31, 0.34, 0.18, 0.19],
      [0.1, 0.34, 0.13, 0.18, 0.2],
      [0.31, 0.16, 0.15, 0.18, 0.29],
      [0.17, 0.19, 0.12, 0.17, 0.1],
      [0.16, 0.11, 0.19, 0.13, 0.15],
      [0.11, 0.29, 0.15, 0.1, 0.08],
      [0.16, 0.12, 0.21, 0.16, 0.13],
      [0.31, 0.11, 0.28, 0.29, 0.09],
    ],
    costCurrent: "Ð 8M",
    costTarget: "Ð 9M",
    costSeries: [19, 18, 17, 15, 14, 12, 10, 9],
    targetLine: 9,
  },
};

function inlineComputedStyles(source: Element, target: Element) {
  const sourceNodes = [source, ...Array.from(source.querySelectorAll("*"))];
  const targetNodes = [target, ...Array.from(target.querySelectorAll("*"))];

  sourceNodes.forEach((sourceNode, index) => {
    const targetNode = targetNodes[index];
    if (!targetNode) {
      return;
    }

    const computed = window.getComputedStyle(sourceNode);
    const styleText = Array.from(computed)
      .map((property) => `${property}:${computed.getPropertyValue(property)};`)
      .join("");

    targetNode.setAttribute("style", styleText);

    if (sourceNode instanceof HTMLImageElement && targetNode instanceof HTMLImageElement) {
      targetNode.src = sourceNode.currentSrc || sourceNode.src;
      targetNode.srcset = "";
      targetNode.loading = "eager";
    }
  });
}

async function convertImageToDataUrl(src: string) {
  const response = await fetch(src);
  const blob = await response.blob();

  return await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error(`Failed to embed image: ${src}`));
    reader.readAsDataURL(blob);
  });
}

async function inlineImagesAsDataUrls(source: HTMLElement, target: HTMLElement) {
  const sourceImages = Array.from(source.querySelectorAll("img"));
  const targetImages = Array.from(target.querySelectorAll("img"));

  await Promise.all(
    sourceImages.map(async (sourceImage, index) => {
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
    }),
  );
}

async function captureElementSnapshot(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  const width = Math.ceil(rect.width);
  const height = Math.ceil(rect.height);
  const clone = element.cloneNode(true) as HTMLElement;

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

function buildPdfPrintViewHtml(imageUrl: string, title: string) {
  const exportedAt = new Intl.DateTimeFormat("en-AE", {
    dateStyle: "medium",
    timeStyle: "short",
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

async function printPdfInHiddenFrame(html: string) {
  await new Promise<void>((resolve, reject) => {
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

    const cleanup = () => {
      frame.onload = null;
      frame.onerror = null;
      if (frame.parentNode) {
        frame.parentNode.removeChild(frame);
      }
    };

    frame.onload = () => {
      try {
        const printWindow = frame.contentWindow;
        if (!printWindow) {
          cleanup();
          reject(new Error("Unable to open print frame."));
          return;
        }

        printWindow.focus();
        printWindow.print();

        setTimeout(() => {
          cleanup();
          resolve();
        }, 1000);
      } catch (error) {
        cleanup();
        reject(error instanceof Error ? error : new Error("Unable to print PDF."));
      }
    };

    frame.onerror = () => {
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

export default function CampaignDetailsPage() {
  const defaultDateRange = useMemo(() => getOverviewDatasetDateRange(), []);
  const filterOptions = useMemo(() => getCampaignDetailsFilterOptions(), []);
  const defaultCampaignName = filterOptions.campaignNames[0] ?? "All";
  const [appliedFilters, setAppliedFilters] = useState<{
    startDate: string;
    endDate: string;
    region: string;
    campaignStage: string;
    condition: string;
    campaignName: string;
  }>({
    startDate: defaultDateRange.startDate,
    endDate: defaultDateRange.endDate,
    region: "All",
    campaignStage: "All",
    condition: "All",
    campaignName: defaultCampaignName,
  });
  const [draftFilters, setDraftFilters] = useState(appliedFilters);
  const [campaignInfoOpen, setCampaignInfoOpen] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const exportRef = useRef<HTMLDivElement | null>(null);

  const data = useMemo(() => getCampaignDetailsDataset(appliedFilters), [appliedFilters]);
  const visibleMonths = data.periodLabels;
  const visibleWeeks = weeks;
  const visiblePatientsAttended = data.patientsAttended;
  const visibleRevenueBars = data.revenueBars;
  const visibleCostSeries = data.costSeries;
  const visibleMetrics = data.metrics;
  const channels = data.channelBreakdown;
  const conversionSegments = data.conversionSegments;
  const visibleDropoff = data.dropoff;
  const visibleEntitySummary = data.entitySummary;
  const visibleEntitySeries = data.entitySeries;
  const visibleRevenueCurrent = `Ð ${data.revenueCurrent.toLocaleString("en-US")}K`;
  const visibleRevenueTarget = `Ð ${data.revenueTarget.toLocaleString("en-US")}K`;
  const visibleCostCurrent = data.costCurrent;
  const visibleCostTarget = data.costTarget;

  const handleExportPdf = async () => {
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
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <DashboardShell
      pageClassName="overviewPage campaignDetailsPage"
      title="Campaign Details"
      breadcrumbCurrent="Campaign Details"
      breadcrumbTrail={[
        { label: "Overview", href: "/overview" },
        { label: "Life Stage", href: "/lifestage-overview/acquire" },
        { label: "Sub Condition Details", href: "/campaign-sub-condition" },
        { label: "Campaign Details" },
      ]}
      entityTabs={entityTabs}
      activeEntityTab="Entity 1"
      activeNav="campaignDetails"
      headerTabsClassName="overviewTabs"
      bodyClassName="campaignDetailsBody"
      eventCalendarActive
    >
      <div ref={exportRef} className="campaignDetailsExportFrame">
      <div className="campaignDetailsFilterRow">
        <div className="filterGroup campaignNameFilter">
          <span>Campaign Name</span>
          <label className="filterSelectWrap">
            <select
              className="filterInput filterSelect campaignNameSelect"
              value={draftFilters.campaignName}
              onChange={(event) => setDraftFilters((current) => ({ ...current, campaignName: event.target.value }))}
            >
              <option value="All">All Campaigns</option>
              {filterOptions.campaignNames.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
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
              onChange={(event) => setDraftFilters((current) => ({ ...current, region: event.target.value }))}
            >
              <option value="All">All</option>
              {filterOptions.providers.map((provider) => (
                <option key={provider} value={provider}>
                  {provider}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="filterGroup">
          <span>Campaign Type</span>
          <label className="filterSelectWrap">
            <select
              className="filterInput filterSelect"
              value={draftFilters.campaignStage}
              onChange={(event) => setDraftFilters((current) => ({ ...current, campaignStage: event.target.value }))}
            >
              <option value="All">All</option>
              {filterOptions.campaignStages.map((stage) => (
                <option key={stage} value={stage}>
                  {stage}
                </option>
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
              onChange={(event) => setDraftFilters((current) => ({ ...current, condition: event.target.value }))}
            >
              <option value="All">All</option>
              {filterOptions.conditions.map((conditionName) => (
                <option key={conditionName} value={conditionName}>
                  {conditionName}
                </option>
              ))}
            </select>
          </label>
        </div>
        <button type="button" className="applyButton" onClick={() => setAppliedFilters(draftFilters)}>APPLY</button>
      </div>

      <div className="campaignDetailsMetricGrid">
        {visibleMetrics.map((metric) => (
          <article key={metric.title} className="metricCard campaignDetailsMetricCard">
            <img src={metric.icon} alt="" className="metricIcon" />
            <div className="metricContent">
              <h2>{metric.title}</h2>
              <div className="metricValueRow campaignDetailsMetricValue">
                <strong className={metric.tone === "success" ? "successValue" : undefined}>{metric.value}</strong>
                {metric.note ? <span className="campaignDetailsMetricNote">{metric.note}</span> : null}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="campaignDetailsTopGrid">
        <section className="glassCard campaignPatientsPanel">
          <h2>Patients Attended</h2>
          <div className="campaignDetailsLineChart">
            <ExportLineChart values={visiblePatientsAttended} max={Math.max(...visiblePatientsAttended, 1) * 1.15} labels={visibleMonths} color="#2563EB" area />
            <span className="campaignYearLabel">2025</span>
            <span className="campaignAxisLabel">Patients</span>
          </div>
        </section>

        <section className="glassCard campaignRevenuePanel">
          <h2>Revenue Generated</h2>
          <div className="campaignRevenueSummary">
            <strong>{visibleRevenueCurrent}</strong>
            <span>of {visibleRevenueTarget} target</span>
          </div>
          <div className="campaignRevenueProgress">
            <span style={{ width: `${(data.revenueCurrent / data.revenueTarget) * 100}%` }} />
          </div>
          <div className="campaignRevenueBars">
            <ExportBarValueChart values={visibleRevenueBars} labels={visibleWeeks} max={Math.max(...visibleRevenueBars, 1) * 1.15} />
          </div>
        </section>

        <section className="glassCard campaignChannelPanel">
          <h2>Channel Breakdown</h2>
          <div className="donutLegend campaignDonutLegend">
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
              value: channel.amount,
            }))}
            height={320}
          />
        </section>

        <section className="glassCard campaignDropoffPanel">
          <h2>Drop-off Rate</h2>
          <ExportFunnelChart data={visibleDropoff} height={285} />
        </section>
      </div>

      <div className="campaignDetailsBottomGrid">
        <section className="glassCard campaignEntitiesPanel">
          <h2>Entities in Campaign</h2>
          <ExportEntitiesSummary summary={visibleEntitySummary} series={visibleEntitySeries} chartHeight={190} />
        </section>

        <section className="glassCard campaignConversionPanel">
          <h2>Conversion by Segment</h2>
          <div className="chartLegend">
            {conversionSegments.map((segment) => (
              <span key={segment.label} className="legend donut" style={{ color: segment.color }}>
                {segment.label}
              </span>
            ))}
          </div>
          <ExportBubbleChart data={conversionSegments} height={300} metricLabel="Conversion" detailLabel="(Booked / Contacted)" />
        </section>

        <section className="glassCard campaignHeatmapPanel">
          <h2>Booked Appointment Heatmap</h2>
          <div className="campaignHeatLegend">
            <span>Low</span>
            <div>
              {[0.15, 0.3, 0.45, 0.6, 0.8].map((value) => (
                <span key={value} style={{ background: `rgba(18, 182, 224, ${value})` }} />
              ))}
            </div>
            <span>High</span>
          </div>
          <ExportHeatmap values={campaignData.all.heatmap} columns={days} rows={times} />
        </section>

        <section className="glassCard campaignCostPanel">
          <h2>Campaign Cost Efficiency</h2>
          <div className="campaignCostLegend">
            <span className="legend acquire">Cost/ Conv</span>
            <span className="legend target">Target</span>
          </div>
          <div className="campaignCostSummary">
            <div>
              <strong className="successValue">{visibleCostCurrent}</strong>
              <span>Current</span>
            </div>
            <div>
              <strong className="dangerValue">{visibleCostTarget}</strong>
              <span>Target</span>
            </div>
          </div>
          <div className="campaignCostChart">
            <ExportLineChart values={visibleCostSeries} max={Math.max(...visibleCostSeries, data.targetLine, 1) * 1.15} labels={visibleWeeks} color="#22C55E" area />
          </div>
        </section>
      </div>
      </div>

      <button type="button" className="campaignInfoFab" onClick={() => setCampaignInfoOpen(true)}>
        <span className="campaignInfoFabIcon">i</span>
        <span>Campaign info</span>
      </button>

      {campaignInfoOpen ? (
        <>
          <button type="button" className="campaignInfoBackdrop" aria-label="Close campaign info" onClick={() => setCampaignInfoOpen(false)} />
          <aside className="campaignInfoDrawer" aria-label="Campaign info">
            <div className="campaignInfoDrawerHeader">
              <h2>CAMPAIGN INFO</h2>
              <button type="button" className="campaignInfoClose" aria-label="Close campaign info" onClick={() => setCampaignInfoOpen(false)}>
                ×
              </button>
            </div>

            <div className="campaignInfoHero">
              <h3>{data.campaignName}</h3>
              <p>ID: {data.campaignId}</p>
            </div>

            <section className="campaignInfoSection">
              <div className="campaignInfoSectionTitle">
                <h4>TIMELINE</h4>
                <span />
              </div>
              <div className="campaignInfoTimelineGrid">
                <article className="campaignInfoMiniCard">
                  <img src="/overview-seen-rate.png" alt="" />
                  <div>
                    <strong>Start Date</strong>
                    <span>{data.timeline.startDate}</span>
                  </div>
                </article>
                <article className="campaignInfoMiniCard">
                  <img src="/overview-seen-rate.png" alt="" />
                  <div>
                    <strong>End Date</strong>
                    <span>{data.timeline.endDate}</span>
                  </div>
                </article>
              </div>

              <div className="campaignInfoProgressRow">
                <div>
                  <strong>Duration &amp; Progress</strong>
                  <p>{data.timeline.progress}% of selected period complete</p>
                  <strong>Review Checkpoint</strong>
                  <p>15 February 2025 · Completed</p>
                </div>
                <div className="campaignInfoProgressRing">
                  <div className="campaignInfoProgressCircle">
                    <div>
                      <strong>{data.timeline.progress}%</strong>
                      <span>COMPLETED</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="campaignInfoSection">
              <div className="campaignInfoSectionTitle">
                <h4>FINANCIALS</h4>
                <span />
              </div>
              <article className="campaignInfoWideCard">
                <img src="/overview-candidate.png" alt="" />
                <div>
                  <strong>Targeted Patients</strong>
                  <span>{visibleMetrics[0]?.value ?? "0"}</span>
                </div>
              </article>
              <div className="campaignInfoStatsGrid">
                <article className="campaignInfoMiniCard">
                  <img src="/overview-announcement.png" alt="" />
                  <div>
                    <strong>Contacted</strong>
                    <span>{visibleMetrics[1]?.value ?? "0"}</span>
                  </div>
                </article>
                <article className="campaignInfoMiniCard">
                  <img src="/overview-candidate.png" alt="" />
                  <div>
                    <strong>Attend</strong>
                    <span>{visiblePatientsAttended.reduce((sum, value) => sum + value, 0).toLocaleString("en-US")}</span>
                  </div>
                </article>
              </div>
            </section>

            <section className="campaignInfoSection">
              <div className="campaignInfoSectionTitle">
                <h4>OPERATIONS</h4>
                <span />
              </div>
              <div className="campaignInfoOperationsGrid">
                <article className="campaignInfoListCard">
                  <strong>Running Locations</strong>
                  <ul>
                    {data.locations.map((location) => (
                      <li key={location}>{location}</li>
                    ))}
                  </ul>
                </article>
                <article className="campaignInfoListCard">
                  <strong>Active channels</strong>
                  <ul>
                    <li>SMS</li>
                    <li>Phone Call</li>
                    <li>Whatsapp</li>
                    <li>Patient app</li>
                  </ul>
                </article>
              </div>
            </section>

            <section className="campaignInfoSection">
              <div className="campaignInfoSectionTitle">
                <h4>CAMPAIGN DESCRIPTION</h4>
                <span />
              </div>
              <p className="campaignInfoDescription">
                A structured 90-day outreach program targeting patients at elevated risk of Type 2 diabetes across five entities
                facilities in Abu Dhabi. The campaign focuses on early screening, lifestyle intervention referrals, and medication
                adherence tracking. Patients are contacted via multi-channel outreach and routed into the Build segment for
                long-term health management. Success is measured by screening completion rates, referral uptake, and revenue
                realisation against the allocated budget.
              </p>
            </section>

            <div className="campaignInfoActions">
              <button type="button" className="campaignInfoGhostButton" onClick={() => setCampaignInfoOpen(false)}>
                Close
              </button>
              <button type="button" className="campaignInfoPrimaryButton" onClick={handleExportPdf} disabled={isExporting}>
                {isExporting ? "Exporting..." : "Export PDF"}
              </button>
            </div>
          </aside>
        </>
      ) : null}
    </DashboardShell>
  );
}
