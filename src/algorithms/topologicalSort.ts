const dfs = (
  adjacencyList: number[][],
  index: number,
  visited: Set<number>,
  tempVisited: Set<number>,
  result: number[]
): boolean => {
  visited.add(index);
  tempVisited.add(index);
  if (adjacencyList[index].length === 0) {
    tempVisited.clear();
  }
  for (let item of adjacencyList[index]) {
    if (tempVisited.has(item) === true) {
      return false;
    }
    if (visited.has(item) === false) {
      let value: boolean = dfs(
        adjacencyList,
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
  result.push(index);
  return true;
};

const topologicalSort = (adjacencyList: number[][]): number[] => {
  let result: number[] = [];
  let visited = new Set<number>();
  for (let item in adjacencyList) {
    let tempVisited = new Set<number>();
    if (visited.has(+item) === false) {
      let value: boolean = dfs(
        adjacencyList,
        +item,
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
