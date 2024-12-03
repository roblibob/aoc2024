"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const processFile_1 = require("../utils/processFile");
const lib_1 = require("./lib");
const corruptedMemory = (0, processFile_1.processFile)('src/3/input.txt');
const result = (0, lib_1.calculateConditionalMultiplications)(corruptedMemory);
console.log(`Result of the conditional multiplications: ${result}`);
