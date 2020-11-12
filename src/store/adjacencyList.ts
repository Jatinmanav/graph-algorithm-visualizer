import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import adjacencyListObject from "../types/adjacencyListObject";
import edge from "../types/edge";
import node from "../types/node";

type SliceState = {
  nodeList: node[];
  edgeList: edge[];
  adjacencyList: adjacencyListObject[];
};

const initialState: SliceState = {
  nodeList: [],
  edgeList: [],
  adjacencyList: [],
};

const adjacencyListSlice = createSlice({
  name: "adjacencyList",
  initialState,
  reducers: {
    addNode: (state, action: PayloadAction<node>) => {
      state.nodeList.push(action.payload);
    },
  },
});

export const { addNode } = adjacencyListSlice.actions;
export default adjacencyListSlice.reducer;
