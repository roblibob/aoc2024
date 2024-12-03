"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const processFile_1 = require("../utils/processFile");
const lib_1 = require("./lib");
const lib_2 = require("./lib");
const { leftList, rightList } = (0, processFile_1.processFile)('src/1.2/input.txt', lib_1.transform);
const result = (0, lib_2.calculateSimilarityScore)(leftList, rightList);
console.log(`Similarity score between the lists: ${result}`);
