"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateMultiplications = void 0;
const calculateMultiplications = (memory) => {
    const mulPattern = /mul\(\s*(\d+)\s*,\s*(\d+)\s*\)/g;
    let totalSum = 0;
    let match;
    let counter = 0;
    while ((match = mulPattern.exec(memory)) !== null) {
        counter++;
        const num1 = parseInt(match[1], 10);
        const num2 = parseInt(match[2], 10);
        totalSum += num1 * num2;
    }
    console.log(`Total number of multiplications: ${counter}`);
    return totalSum;
};
exports.calculateMultiplications = calculateMultiplications;
