"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateSimilarityScore = exports.transform = void 0;
// 
const transform = (input) => {
    try {
        // Split the content by lines and parse into two arrays
        const leftList = [];
        const rightList = [];
        input.split('\n').forEach(line => {
            if (line.trim()) {
                const [left, right] = line.trim().split(/\s+/).map(Number);
                leftList.push(left);
                rightList.push(right);
            }
        });
        return { leftList, rightList };
    }
    catch (error) {
        console.error(`Error reading file: ${error.message}`);
        return { leftList: [], rightList: [] };
    }
};
exports.transform = transform;
const calculateSimilarityScore = (leftList, rightList) => {
    // Create a map to count occurrences of each number in the right list
    const rightCountMap = new Map();
    // Populate the map with counts
    for (const num of rightList) {
        rightCountMap.set(num, (rightCountMap.get(num) || 0) + 1);
    }
    // Calculate the similarity score
    let similarityScore = 0;
    for (const num of leftList) {
        const count = rightCountMap.get(num) || 0;
        similarityScore += num * count;
    }
    return similarityScore;
};
exports.calculateSimilarityScore = calculateSimilarityScore;
