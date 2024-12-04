"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const processFile_1 = require("../utils/processFile");
const lib_1 = require("./lib");
const lib_2 = require("./lib");
const rows = (0, processFile_1.processFile)('src/4/input.txt', lib_1.transform);
const wordCount = (0, lib_2.countWordOccurrences)(rows, 'XMAS');
console.log(`Number of occurensies: ${wordCount}`);
