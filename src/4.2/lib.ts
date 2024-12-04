export const transform = (input: string): String[] => {
  try {
    const rows: String[] = [];

    input.split('\n').forEach(row => {
      if (row.trim()) {
        rows.push(row.trim());
      }
    });

    return rows;
  } catch (error: any) {
    console.error(`Error reading file: ${error.message}`);
    return [];
  }
};

/**
 * Given a grid of letters explore each cell in all directions 
 * to find the case sensative word
 */
export const countXMASOccurrences = (grid: string[]): number => {
  const numRows = grid.length;
  const numCols = grid[0].length;
  let count = 0;

  // Function to check if letters form "MAS" or "SAM"
  const isMAS = (letters: string[]): boolean => {
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
}