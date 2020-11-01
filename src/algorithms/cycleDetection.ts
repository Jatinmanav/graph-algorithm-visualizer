import adjacencyListObject from "../types/adjacencyListObject";
import visualizeObject from "../types/visualizeObject";

const cycleDetectionHelper = (
  adjacencyList: adjacencyListObject[],
  count: number,
  visited: Set<number>,
  recStack: Set<number>,
  result: number[]
): boolean => {
  if (visited.has(count) === false) {
    visited.add(count);
    recStack.add(count);
    result.push(count);
    for (let item of adjacencyList) {
      if (item.count === count) {
        for (let iter of item.target) {
          if (
            !visited.has(iter) &&
            cycleDetectionHelper(adjacencyList, iter, visited, recStack, result)
          )
            return true;
          else if (recStack.has(iter)) return true;
        }
      }
    }
  }
  recStack.delete(count);
  return false;
};

const cycleDetection = (
  adjacencyList: adjacencyListObject[]
): visualizeObject => {
  let result: number[] = [];
  let visited: Set<number> = new Set();
  let recStack: Set<number> = new Set();
  for (let item of adjacencyList) {
    if (
      cycleDetectionHelper(adjacencyList, item.count, visited, recStack, result)
    ) {
      return { errorDetected: true, result };
    }
  }
  return { errorDetected: false, result };
};

export default cycleDetection;
