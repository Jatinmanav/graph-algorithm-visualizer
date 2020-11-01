import adjacencyListObject from "../types/adjacencyListObject";
import node from "../types/node";

const getIndex = (adjacencyList: adjacencyListObject[], count: number) => {
  for (let item in adjacencyList) {
    if (adjacencyList[+item].count - count === 0) {
      return +item;
    }
  }
  return -1;
};

const dfs = (
  adjacencyList: adjacencyListObject[],
  nodeList: node[],
  count: number,
  visited: Set<number>,
  tempVisited: Set<number>,
  result: number[]
): boolean => {
  const index = getIndex(adjacencyList, count);
  visited.add(count);
  tempVisited.add(count);
  if (adjacencyList[index].target.length === 0) {
    tempVisited.clear();
  }
  for (let item of adjacencyList[index].target) {
    if (tempVisited.has(item) === true) {
      return false;
    }
    if (visited.has(item) === false) {
      let value: boolean = dfs(
        adjacencyList,
        nodeList,
        item,
        visited,
        tempVisited,
        result
      );
      if (value === false) {
        return false;
      }
    }
  }
  result.push(count);
  return true;
};

const topologicalSort = (
  adjacencyList: adjacencyListObject[],
  nodeList: node[]
): number[] => {
  let result: number[] = [];
  let visited = new Set<number>();
  for (let iter in adjacencyList) {
    const item = adjacencyList[+iter];
    let tempVisited = new Set<number>();
    if (visited.has(item.count) === false) {
      let value: boolean = dfs(
        adjacencyList,
        nodeList,
        item.count,
        visited,
        tempVisited,
        result
      );
      if (value === false) {
        result = [];
        return result;
      }
    }
  }
  return result;
};

export default topologicalSort;
