import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const rootDir = process.cwd();
const exportDir = path.join(rootDir, "public", "exports");
const screenshotDir = path.join(exportDir, "screenshots");
const baseUrl = process.env.BASE_URL || "http://127.0.0.1:3000";

const pages = [
  { slug: "login", title: "Login", path: "/" },
  { slug: "introduction", title: "Introduction", path: "/introduction" },
  { slug: "overview", title: "Overview", path: "/overview" },
  { slug: "campaign-calendar", title: "Campaign Calendar", path: "/campaign-calendar" },
  { slug: "lifestage-acquire", title: "Lifestage Overview - Acquire", path: "/lifestage-overview/acquire" },
  { slug: "lifestage-build", title: "Lifestage Overview - Build", path: "/lifestage-overview/build" },
  { slug: "lifestage-contain", title: "Lifestage Overview - Contain", path: "/lifestage-overview/contain" },
  { slug: "campaign-sub-condition", title: "Sub Condition Details", path: "/campaign-sub-condition" },
  { slug: "campaign-details", title: "Campaign Details", path: "/campaign-details" },
  {
    slug: "campaign-details-info",
    title: "Campaign Details - Campaign Info",
    path: "/campaign-details",
    beforeScreenshot: async (page) => {
      await page.locator(".campaignInfoFab").click();
      await page.waitForTimeout(300);
    },
  },
];

async function ensureDirs() {
  await fs.mkdir(screenshotDir, { recursive: true });
}

async function screenshotPages(browser) {
  const page = await browser.newPage({
    viewport: { width: 2048, height: 1125 },
    deviceScaleFactor: 1,
  });

  const imageEntries = [];

  for (const item of pages) {
    await page.goto(`${baseUrl}${item.path}`, { waitUntil: "networkidle" });
    await page.waitForTimeout(400);

    if (item.beforeScreenshot) {
      await item.beforeScreenshot(page);
    }

    const filename = `${item.slug}.png`;
    const filepath = path.join(screenshotDir, filename);
    await page.screenshot({ path: filepath, fullPage: false });
    imageEntries.push({ ...item, filepath });
  }

  await page.close();
  return imageEntries;
}

function renderHtml(images) {
  const sections = images
    .map(
      (item) => `
        <section class="page">
          <h1>${item.title}</h1>
          <img src="file://${item.filepath}" alt="${item.title}" />
        </section>
      `,
    )
    .join("");

  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>HVM Dashboard Screens</title>
        <style>
          * { box-sizing: border-box; }
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: #eef5fc;
            color: #24384a;
          }
          .page {
            page-break-after: always;
            padding: 22px 24px 28px;
          }
          .page:last-child { page-break-after: auto; }
          h1 {
            margin: 0 0 14px;
            font-size: 20px;
            font-weight: 700;
          }
          img {
            display: block;
            width: 100%;
            border: 1px solid #d2e3f4;
            border-radius: 12px;
            box-shadow: 0 10px 24px rgba(115, 151, 195, 0.12);
          }
        </style>
      </head>
      <body>${sections}</body>
    </html>
  `;
}

async function createPdf(browser, images) {
  const pdfPage = await browser.newPage();
  await pdfPage.setContent(renderHtml(images), { waitUntil: "load" });
  await pdfPage.emulateMedia({ media: "screen" });
  const pdfPath = path.join(exportDir, "hvm-dashboard-tabs.pdf");
  await pdfPage.pdf({
    path: pdfPath,
    format: "A4",
    printBackground: true,
    margin: { top: "14mm", right: "10mm", bottom: "14mm", left: "10mm" },
  });
  await pdfPage.close();
  return pdfPath;
}

async function main() {
  await ensureDirs();
  const browser = await chromium.launch({ headless: true });

  try {
    const images = await screenshotPages(browser);
    const pdfPath = await createPdf(browser, images);
    console.log(`Created PDF: ${pdfPath}`);
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
