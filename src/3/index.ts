import { processFile } from "../utils/processFile";
import { calculateMultiplications } from "./lib";

const corruptedMemory: string = processFile('src/3/input.txt');
const result = calculateMultiplications(corruptedMemory);

console.log(`Result of the multiplications: ${result}`);