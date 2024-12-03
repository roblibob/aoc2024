"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTotalDistance = exports.transform = void 0;
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
const calculateTotalDistance = (leftList, rightList) => {
    // Sort both lists in ascending order
    leftList.sort((a, b) => a - b);
    rightList.sort((a, b) => a - b);
    // Calculate the total distance
    let totalDistance = 0;
    for (let i = 0; i < leftList.length; i++) {
        totalDistance += Math.abs(leftList[i] - rightList[i]);
    }
    return totalDistance;
};
exports.calculateTotalDistance = calculateTotalDistance;
