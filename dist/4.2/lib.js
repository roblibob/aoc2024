"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countXMASOccurrences = exports.transform = void 0;
const transform = (input) => {
    try {
        const rows = [];
        input.split('\n').forEach(row => {
            if (row.trim()) {
                rows.push(row.trim());
            }
        });
        return rows;
    }
    catch (error) {
        console.error(`Error reading file: ${error.message}`);
        return [];
    }
};
exports.transform = transform;
/**
 * Given a grid of letters explore each cell in all directions
 * to find the case sensative word
 */
const countXMASOccurrences = (grid) => {
    const numRows = grid.length;
    const numCols = grid[0].length;
    let count = 0;
    // Function to check if letters form "MAS" or "SAM"
    const isMAS = (letters) => {
        const word = letters.join('');
        return word === 'MAS' || word === 'SAM';
    };
    // Iterate through the grid excluding the borders
    for (let row = 1; row < numRows - 1; row++) {
        for (let col = 1; col < numCols - 1; col++) {
            // Extract letters along the two diagonals
            const diag1 = [
                grid[row - 1][col - 1],
                grid[row][col],
                grid[row + 1][col + 1],
            ];
            const diag2 = [
                grid[row - 1][col + 1],
                grid[row][col],
                grid[row + 1][col - 1],
            ];
            // Check if both diagonals form "MAS" or "SAM"
            if (isMAS(diag1) && isMAS(diag2)) {
                count++;
            }
        }
    }
    return count;
};
exports.countXMASOccurrences = countXMASOccurrences;
