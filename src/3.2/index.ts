import { processFile } from "../utils/processFile";
import { calculateConditionalMultiplications } from "./lib";

const corruptedMemory: string = processFile('src/3/input.txt');
const result = calculateConditionalMultiplications(corruptedMemory);

console.log(`Result of the conditional multiplications: ${result}`);