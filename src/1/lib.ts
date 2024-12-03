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
  
  export const calculateTotalDistance = (leftList: number[], rightList: number[]): number => {
    // Sort both lists in ascending order
    leftList.sort((a, b) => a - b);
    rightList.sort((a, b) => a - b);
  
    // Calculate the total distance
    let totalDistance = 0;
    for (let i = 0; i < leftList.length; i++) {
        totalDistance += Math.abs(leftList[i] - rightList[i]);
    }
  
    return totalDistance;
  }
  