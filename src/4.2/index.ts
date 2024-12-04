import { processFile } from "../utils/processFile";
import { transform } from "./lib";
import { countXMASOccurrences } from "./lib";

const rows = processFile('src/4/input.txt', transform);
const wordCount = countXMASOccurrences(rows);

console.log(`Number of occurensies: ${wordCount}`);