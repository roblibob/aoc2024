// 
export const transform = (input: string): { leftList: number[]; rightList: number[] } => {
  try {
  // Split the content by lines and parse into two arrays
  const leftList:number[] = [];
  const rightList:number[] = [];
  
  input.split('\n').forEach(line => {
    if (line.trim()) {
      const [left, right] = line.trim().split(/\s+/).map(Number);
      leftList.push(left);
      rightList.push(right);
    }
  });
  
  return { leftList, rightList };
  } catch (error: any) {
    console.error(`Error reading file: ${error.message}`);
    return { leftList: [], rightList: [] };
  }
};
  
export const calculateSimilarityScore = (leftList: number[], rightList: number[]): number => {
  // Create a map to count occurrences of each number in the right list
  const rightCountMap = new Map<number, number>();

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
}
