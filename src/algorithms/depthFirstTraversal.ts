import adjacencyListObject from "../types/adjacencyListObject";

const depthFirstSearchHelper = (
  adjacencyList: adjacencyListObject[],
  result: number[],
  visisted: Set<number>,
  count: number
) => {
  visisted.add(count);
  result.push(count);
  for (let item of adjacencyList) {
    if (item.count === count) {
      for (let iter of item.target) {
        if (!visisted.has(iter)) {
          depthFirstSearchHelper(adjacencyList, result, visisted, iter);
        }
      }
    }
  }
};

const depthFirstSearch = (adjacencyList: adjacencyListObject[]): number[] => {
  let result: number[] = [];
  let visited: Set<number> = new Set<number>();
  depthFirstSearchHelper(
    adjacencyList,
    result,
    visited,
    adjacencyList[0].count
  );
  console.log(result);
  return result;
};

export default depthFirstSearch;
