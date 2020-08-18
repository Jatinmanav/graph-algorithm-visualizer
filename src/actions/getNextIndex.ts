import node from "../types/node";

const getNextIndex = (nodeList: node[]) => {
  let index = 0;
  if (nodeList.length > 0) {
    index = nodeList.slice(-1)[0].count + 1;
  }
  return index;
};

export default getNextIndex;
