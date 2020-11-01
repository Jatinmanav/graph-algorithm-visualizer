import adjacencyListObject from "../types/adjacencyListObject";

const depthFirstTraversalHelper = (
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
          depthFirstTraversalHelper(adjacencyList, result, visisted, iter);
        }
      }
    }
  }
};

const depthFirstTraversal = (
  adjacencyList: adjacencyListObject[]
): number[] => {
  let result: number[] = [];
  if (adjacencyList.length > 0) {
    let visited: Set<number> = new Set<number>();
    depthFirstTraversalHelper(
      adjacencyList,
      result,
      visited,
      adjacencyList[0].count
    );
  }
  return result;
};

export default depthFirstTraversal;
