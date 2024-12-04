import { processFile } from "../utils/processFile";
import { transform } from "./lib";
import { countWordOccurrences } from "./lib";

const rows = processFile('src/4/input.txt', transform);
const wordCount = countWordOccurrences(rows, 'XMAS');

console.log(`Number of occurensies: ${wordCount}`);