"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countSafeReports = exports.transform = void 0;
const transform = (input) => {
    try {
        const reports = [];
        input.split('\n').forEach(reportString => {
            if (reportString.trim()) {
                const report = reportString.trim().split(/\s+/).map(Number);
                reports.push(report);
            }
        });
        return reports;
    }
    catch (error) {
        console.error(`Error reading file: ${error.message}`);
        return [];
    }
};
exports.transform = transform;
const isReportSafe = (report) => {
    // Check if the report is increasing or decreasing
    const isIncreasing = report.every((val, idx, arr) => idx === 0 || (val > arr[idx - 1] && val - arr[idx - 1] >= 1 && val - arr[idx - 1] <= 3));
    const isDecreasing = report.every((val, idx, arr) => idx === 0 || (val < arr[idx - 1] && arr[idx - 1] - val >= 1 && arr[idx - 1] - val <= 3));
    // The report is safe if it is either strictly increasing or strictly decreasing
    return isIncreasing || isDecreasing;
};
const countSafeReports = (reports) => {
    let safeCount = 0;
    for (const report of reports) {
        if (isReportSafe(report)) {
            safeCount++;
        }
    }
    return safeCount;
};
exports.countSafeReports = countSafeReports;
