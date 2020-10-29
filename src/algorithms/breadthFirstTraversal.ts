import adjacencyListObject from "../types/adjacencyListObject";

const breadthFirstTraversal = (
  adjacencyList: adjacencyListObject[]
): number[] => {
  let result: number[] = [];
  if (adjacencyList.length > 0) {
    let visited: Set<number> = new Set<number>();
    let queue: number[] = [];
    visited.add(adjacencyList[0].count);
    queue.push(adjacencyList[0].count);
    while (queue.length > 0) {
      let temp: number = queue[0];
      queue.shift();
      result.push(temp);
      for (let item of adjacencyList) {
        if (item.count === temp) {
          for (let iter of item.target) {
            if (!visited.has(iter)) {
              visited.add(iter);
              queue.push(iter);
            }
          }
        }
      }
    }
  }

  return result;
};

export default breadthFirstTraversal;
