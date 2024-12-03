"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateConditionalMultiplications = void 0;
const calculateConditionalMultiplications = (memory) => {
    const mulPattern = /mul\(\s*(\d+)\s*,\s*(\d+)\s*\)/g;
    const enablePattern = /\bdo\(\)/g;
    const disablePattern = /\bdon't\(\)/g;
    let totalSum = 0;
    let isEnabled = true; // mul instructions are initially enabled
    // Tokenize memory by matching all instructions
    const instructions = memory.match(/mul\(\s*\d+\s*,\s*\d+\s*\)|do\(\)|don't\(\)/g) || [];
    let count = 0;
    for (const instruction of instructions) {
        if (enablePattern.test(instruction)) {
            isEnabled = true;
        }
        else if (disablePattern.test(instruction)) {
            isEnabled = false;
        }
        else {
            console.log('instruction', instruction, isEnabled);
            count++;
        }
        if (isEnabled) {
            // Handle mul instructions
            let match;
            while ((match = mulPattern.exec(instruction)) !== null) {
                const num1 = parseInt(match[1], 10);
                const num2 = parseInt(match[2], 10);
                totalSum += num1 * num2;
            }
        }
    }
    return totalSum;
};
exports.calculateConditionalMultiplications = calculateConditionalMultiplications;
