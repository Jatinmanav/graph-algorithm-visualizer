import adjacencyListObject from "../types/adjacencyListObject";

const cycleDetectionHelper = (
  adjacencyList: adjacencyListObject[],
  count: number,
  visited: Set<number>,
  recStack: Set<number>
): boolean => {
  if (visited.has(count) === false) {
    visited.add(count);
    recStack.add(count);
    for (let item of adjacencyList) {
      if (item.count === count) {
        for (let iter of item.target) {
          if (
            !visited.has(count) &&
            cycleDetectionHelper(adjacencyList, iter, visited, recStack)
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

const cycleDetection = (adjacencyList: adjacencyListObject[]): number[] => {
  let result: number[] = [];
  let visited: Set<number> = new Set();
  let recStack: Set<number> = new Set();
  for (let item of adjacencyList) {
    if (cycleDetectionHelper(adjacencyList, item.count, visited, recStack))
      return result;
  }
  return result;
};

export default cycleDetection;
