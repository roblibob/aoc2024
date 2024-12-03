import { processFile } from "../utils/processFile";
import { transform } from "./lib";
import { countSafeReports } from "./lib";
import type { Report } from "./lib";

const reports: Report[] = processFile('src/2/input.txt', transform);
const safeCount = countSafeReports(reports);

console.log(`Number of safe reports: ${safeCount}`);