import { processFile } from "../utils/processFile";
import { transform } from "./lib";
import { calculateTotalDistance } from "./lib";

const { leftList, rightList} = processFile('src/1/input.txt', transform);
const result = calculateTotalDistance(leftList, rightList);

console.log(`Total distance between the lists: ${result}`);