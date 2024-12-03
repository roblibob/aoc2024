import { processFile } from "../utils/processFile";
import { transform } from "./lib";
import { calculateSimilarityScore } from "./lib";

const { leftList, rightList} = processFile('src/1.2/input.txt', transform);
const result = calculateSimilarityScore(leftList, rightList);

console.log(`Similarity score between the lists: ${result}`);