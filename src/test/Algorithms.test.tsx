import breadthFirstTraversal from "../algorithms/breadthFirstTraversal";
import depthFirstTraversal from "../algorithms/depthFirstTraversal";
import topologicalSort from "../algorithms/topologicalSort";
import cycleDetection from "../algorithms/cycleDetection";
import createNode from "../actions/createNode";
import adjacencyListObject from "../types/adjacencyListObject";
import node from "../types/node";

const adjacencyListOne: adjacencyListObject[] = [];
const nodeListOne: node[] = [];

const adjacencyListTwo: adjacencyListObject[] = [{ count: 0, target: [] }];
const nodeListTwo: node[] = [createNode(0, 100, 100, 100, 100, 500, 500, "")];

const adjacencyListThree: adjacencyListObject[] = [
  { count: 0, target: [1] },
  { count: 1, target: [2] },
  { count: 2, target: [3] },
  { count: 3, target: [0] },
];

test("Breadth First Traversal Works", () => {
  const resultOne = breadthFirstTraversal(adjacencyListOne);
  expect(resultOne).toEqual([]);
  const resultTwo = breadthFirstTraversal(adjacencyListTwo);
  expect(resultTwo).toEqual([0]);
});

test("Depth First Traversal Works", () => {
  const resultOne = depthFirstTraversal(adjacencyListOne);
  expect(resultOne).toEqual([]);
  const resultTwo = depthFirstTraversal(adjacencyListTwo);
  expect(resultTwo).toEqual([0]);
});

test("Topological Sort Works", () => {
  const resultOne = topologicalSort(adjacencyListOne, nodeListOne);
  expect(resultOne).toEqual([]);
  const resultTwo = topologicalSort(adjacencyListTwo, nodeListTwo);
  expect(resultTwo).toEqual([0]);
});

test("Cycle Detection Works", () => {
  const expectedResultOne = {
    errorDetected: false,
    result: [],
  };
  const expectedResultTwo = {
    errorDetected: false,
    result: [0],
  };
  const expectedResultThree = {
    errorDetected: true,
    result: [0],
  };
  const resultOne = cycleDetection(adjacencyListOne);
  expect(resultOne).toEqual(expectedResultOne);
  const resultTwo = cycleDetection(adjacencyListTwo);
  expect(resultTwo).toEqual(expectedResultTwo);
  const resultThree = cycleDetection(adjacencyListThree);
  expect(resultThree.errorDetected).toEqual(expectedResultThree.errorDetected);
});
