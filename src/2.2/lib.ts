export type Report = Array<number>;

export const transform = (input: string): Report[] => {
  try {
    const reports: Report[] = [];

    input.split('\n').forEach(reportString => {
      if (reportString.trim()) {
        const report = reportString.trim().split(/\s+/).map(Number);
        reports.push(report);
      }
    });

    return reports;
  } catch (error: any) {
    console.error(`Error reading file: ${error.message}`);
    return [];
  }
};

const isReportSafe = (report: Report): boolean => {
  // Check if the report is increasing or decreasing
  const isIncreasing = report.every((val, idx, arr) =>
    idx === 0 || (val > arr[idx - 1] && val - arr[idx - 1] >= 1 && val - arr[idx - 1] <= 3)
  );

  const isDecreasing = report.every((val, idx, arr) =>
    idx === 0 || (val < arr[idx - 1] && arr[idx - 1] - val >= 1 && arr[idx - 1] - val <= 3)
  );

  // The report is safe if it is either strictly increasing or strictly decreasing
  return isIncreasing || isDecreasing;
}

export const countSafeReports = (reports: Report[]): number =>{
  let safeCount = 0;

  for (const report of reports) {
    if (isReportSafe(report)) {
      safeCount++;
    }
  }

  return safeCount;
}

const isReportSafeWithDampener = (report: Report): boolean => {
  if (isReportSafe(report)) {
      return true;
  }
  // Try removing each level one at a time and check if the report becomes safe
  for (let i = 0; i < report.length; i++) {
      const modifiedReport = report.slice(0, i).concat(report.slice(i + 1));
      if (isReportSafe(modifiedReport)) {
          return true;
      }
  }

  return false;
}

export const countSafeReportsWithDampener = (reports: Report[]): number => {
  let safeCount = 0;

  for (const report of reports) {
      if (isReportSafeWithDampener(report)) {
          safeCount++;
      }
  }

  return safeCount;
}