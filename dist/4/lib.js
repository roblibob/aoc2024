"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countWordOccurrences = exports.transform = void 0;
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
const countWordOccurrences = (grid, word) => {
    const numRows = grid.length;
    const numCols = grid[0].length;
    const wordLength = word.length;
    let count = 0;
    const directions = [
        { x: -1, y: 0 }, // North
        { x: -1, y: 1 }, // Northeast
        { x: 0, y: 1 }, // East
        { x: 1, y: 1 }, // Southeast
        { x: 1, y: 0 }, // South
        { x: 1, y: -1 }, // Southwest
        { x: 0, y: -1 }, // West
        { x: -1, y: -1 }, // Northwest
    ];
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            // Check for the first letter match
            if (grid[row][col] === word[0]) {
                // Explore all directions from the current cell
                for (const dir of directions) {
                    let k;
                    let rd = row;
                    let cd = col;
                    // Try to match the word in this direction
                    for (k = 0; k < wordLength; k++) {
                        // Check boundaries
                        if (rd < 0 || rd >= numRows || cd < 0 || cd >= numCols) {
                            break;
                        }
                        if (grid[rd][cd] !== word[k]) {
                            break;
                        }
                        // Move in the current direction
                        rd += dir.x;
                        cd += dir.y;
                    }
                    // If the word is found
                    if (k === wordLength) {
                        count++;
                    }
                }
            }
        }
    }
    return count;
};
exports.countWordOccurrences = countWordOccurrences;
