"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const processFile_1 = require("../utils/processFile");
const lib_1 = require("./lib");
const lib_2 = require("./lib");
const reports = (0, processFile_1.processFile)('src/2/input.txt', lib_1.transform);
const safeCount = (0, lib_2.countSafeReports)(reports);
console.log(`Number of safe reports: ${safeCount}`);
