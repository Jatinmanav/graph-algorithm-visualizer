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
    ADD_NODE: (state, action: PayloadAction<node>) => {
      action.payload.count = 0;
      if (state.nodeList.length >= 1)
        action.payload.count =
          state.nodeList[state.nodeList.length - 1].count + 1;
      const newNode = action.payload;
      const newAdjacencyListItem = { count: action.payload.count, target: [] };
      return {
        ...state,
        nodeList: [...state.nodeList, newNode],
        adjacencyList: [...state.adjacencyList, newAdjacencyListItem],
      };
    },

    DELETE_NODE: (state, action: PayloadAction<number>) => {
      const nodeList = state.nodeList.filter(
        (item) => item.count !== action.payload
      );
      let adjacencyList = state.adjacencyList.filter(
        (item) => item.count !== action.payload
      );
      adjacencyList = JSON.parse(JSON.stringify(adjacencyList));
      for (let item of adjacencyList) {
        item.target = item.target.filter((itr) => itr !== action.payload);
      }
      const edgeList = state.edgeList.filter(
        (item) =>
          item.source.count !== action.payload &&
          item.target.count !== action.payload
      );
      return {
        nodeList,
        edgeList,
        adjacencyList,
      };
    },

    ADD_EDGE: (state, action: PayloadAction<edge>) => {
      const adjacencyList = JSON.parse(JSON.stringify(state.adjacencyList));
      for (let item of adjacencyList) {
        if (item.count === action.payload.source.count) {
          item.target = [...item.target, action.payload.target.count];
        }
        if (
          item.count === action.payload.target.count &&
          action.payload.directed === false
        ) {
          item.target = [...item.target, action.payload.source.count];
        }
      }
      return {
        ...state,
        edgeList: [...state.edgeList, action.payload],
        adjacencyList,
      };
    },

    DELETE_EDGE: (state, action: PayloadAction<edge>) => {
      const adjacencyList = JSON.parse(JSON.stringify(state.adjacencyList));
      const edgeList = state.edgeList.filter(
        (item) =>
          item.source.count !== action.payload.source.count ||
          item.target.count !== action.payload.target.count
      );
      for (let item of adjacencyList) {
        if (item.count === action.payload.source.count) {
          item.target = item.target.filter(
            (iter: number) => iter !== action.payload.target.count
          );
        }
        if (
          action.payload.directed === false &&
          item.count === action.payload.target.count
        ) {
          item.target = item.target.filter(
            (iter: number) => iter !== action.payload.source.count
          );
        }
      }
      return {
        ...state,
        edgeList,
        adjacencyList,
      };
    },
  },
});

export const getNodeListSelector = (state: SliceState) => state.nodeList;

export const getAdjacencyListSelector = (state: SliceState) =>
  state.adjacencyList;

export const getEdgeListSelector = (state: SliceState) => state.edgeList;

export const {
  ADD_NODE,
  DELETE_NODE,
  ADD_EDGE,
  DELETE_EDGE,
} = adjacencyListSlice.actions;
export default adjacencyListSlice.reducer;
