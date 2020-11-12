import { EnhancedStore } from "@reduxjs/toolkit";
import createNode from "../actions/createNode";
import { addNode } from "../store/adjacencyList";
import configureStore from "../store/configureStore";

let store: EnhancedStore | undefined;

beforeEach(() => {
  store = configureStore();
});

test("node is added to nodeList when addNode is called", () => {
  const node = createNode(0, 100, 100, 100, 100, 100, 100, "");

  store?.dispatch(addNode(node));

  expect(store?.getState().adjacencyList.nodeList).toHaveLength(1);
});
