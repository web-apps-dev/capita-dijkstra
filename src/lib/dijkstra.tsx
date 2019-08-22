// const problem = {
//   start: { A: 5, B: 2 },
//   A: { C: 4, D: 2 },
//   B: { A: 8, D: 7 },
//   C: { D: 6, finish: 3 },
//   D: { finish: 1 },
//   finish: {}
// };

const lowestCostNode = (
  costs: { [key: string]: number },
  processed: Array<string>
) => {
  return Object.keys(costs).reduce((lowestCostKey, node) => {
    if (lowestCostKey === "" || costs[node] < costs[lowestCostKey]) {
      if (!processed.includes(node)) {
        lowestCostKey = node;
      }
    }
    return lowestCostKey;
  }, "");
};

// function that returns the minimum cost and path to reach Finish
export const dijkstra = (
  graph: { [key: string]: any },
  startNodeName: string = "start",
  endNodeName: string = "finish"
) => {
  const startNode = graph[startNodeName];
  // console.log("startNodeName : " + startNodeName);
  // console.log("endNodeName : " + endNodeName);
  // console.log("startNode : ", startNode);

  // track lowest cost to reach each node
  const costs = Object.assign({ [endNodeName]: Infinity }, startNode);
  // console.log("costs : ", costs);

  // track paths
  const parents = { [endNodeName]: "" };

  for (let child in startNode) {
    parents[child] = startNodeName;
  }
  // console.log("Initial parents : ", parents);

  // track nodes that have already been processed
  const processed: Array<string> = [];

  let node = lowestCostNode(costs, processed);
  // console.log("node : ", node);

  while (node) {
    let cost = costs[node];
    let children = graph[node];
    for (let n in children) {
      let newCost = cost + children[n];
      if (!costs[n] || costs[n] > newCost) {
        costs[n] = newCost;
        parents[n] = node;
      }
    }
    processed.push(node);
    // console.log("processed : ", node);
    node = lowestCostNode(costs, processed);
    // console.log("next node : ", node);
  }

  let shortestPath = [endNodeName];
  let parent = parents[endNodeName];
  while (parent) {
    shortestPath.unshift(parent);
    parent = parents[parent];
  }

  const results = {
    distance: costs[endNodeName],
    path: shortestPath
  };

  return results;
};

// console.log(dijkstra(problem));
