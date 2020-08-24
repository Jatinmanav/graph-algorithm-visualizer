const dfs = (
  adjacencyList: number[][],
  index: number,
  visited: Set<number>,
  result: number[]
): boolean => {
  visited.add(index);
  for (let item of adjacencyList[index]) {
    if (visited.has(item) === false) {
      dfs(adjacencyList, item, visited, result);
    }
  }
  result.push(index);
  return true;
};

const topologicalSort = (adjacencyList: number[][]): number[] => {
  let result: number[] = [];
  let visited = new Set<number>();
  for (let item in adjacencyList) {
    if (visited.has(+item) === false) {
      dfs(adjacencyList, +item, visited, result);
    }
  }
  return result;
};

export default topologicalSort;
