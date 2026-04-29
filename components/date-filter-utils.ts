export const DEFAULT_DATE_RANGE = {
  startDate: "2025-01-12",
  endDate: "2025-12-31",
} as const;

type DateRange = {
  startDate: string;
  endDate: string;
};

function getMonthIndex(value: string) {
  const parts = value.split("-");
  if (parts.length < 2) {
    return null;
  }

  const month = Number(parts[1]);
  if (!Number.isFinite(month) || month < 1 || month > 12) {
    return null;
  }

  return month - 1;
}

export function getNormalizedDateRange(range: DateRange) {
  const startMonth = getMonthIndex(range.startDate) ?? 0;
  const endMonth = getMonthIndex(range.endDate) ?? 11;

  return {
    startMonth: Math.max(0, Math.min(startMonth, endMonth)),
    endMonth: Math.min(11, Math.max(startMonth, endMonth)),
  };
}

export function getMonthRatio(range: DateRange) {
  const { startMonth, endMonth } = getNormalizedDateRange(range);
  return (endMonth - startMonth + 1) / 12;
}

export function sliceMonths<T>(values: T[], range: DateRange) {
  const { startMonth, endMonth } = getNormalizedDateRange(range);
  return values.slice(startMonth, endMonth + 1);
}

export function sliceWeeks<T>(values: T[], range: DateRange) {
  const ratio = getMonthRatio(range);
  const count = Math.max(1, Math.round(values.length * ratio));
  return values.slice(0, count);
}

export function scaleDisplayValue(raw: string, ratio: number) {
  if (raw.includes("%")) {
    return raw;
  }

  const match = raw.match(/^([^0-9-]*)([\d,.]+)([KMB]?)(.*)$/i);
  if (!match) {
    return raw;
  }

  const [, prefix, numberPart, suffix, tail] = match;
  const numeric = Number(numberPart.replace(/,/g, ""));
  if (!Number.isFinite(numeric)) {
    return raw;
  }

  const scaled = numeric * ratio;
  const normalizedSuffix = suffix.toUpperCase();

  let formatted: string;
  if (normalizedSuffix === "M" || normalizedSuffix === "K" || normalizedSuffix === "B") {
    formatted = scaled >= 10 ? scaled.toFixed(0) : scaled.toFixed(1);
    formatted = formatted.replace(/\.0$/, "");
  } else if (numeric >= 1000 || numberPart.includes(",")) {
    formatted = Math.round(scaled).toLocaleString("en-US");
  } else if (numeric >= 10) {
    formatted = Math.round(scaled).toString();
  } else {
    formatted = scaled.toFixed(1).replace(/\.0$/, "");
  }

  return `${prefix}${formatted}${suffix}${tail}`;
}
