import React, { useState } from "react";
import { Graph } from "react-d3-graph";

import { Selection } from "./Selection";
import { RouteResults } from "./RouteResults";

const initialData = {
  nodes: [
    { id: "A" },
    { id: "B", symbolType: "square", color: "green", size: "400" },
    { id: "C" },
    { id: "D" },
    { id: "E" },
    { id: "F" },
    { id: "G" },
    { id: "H", symbolType: "triangle", color: "blue", size: "400" }
  ],
  links: [
    { source: "A", target: "C", label: "2" },
    { source: "B", target: "D", label: "4" },
    { source: "B", target: "E", label: "7" },
    { source: "C", target: "D", label: "1" },
    { source: "C", target: "F", label: "4" },
    { source: "D", target: "F", label: "1" },
    { source: "D", target: "G", label: "2" },
    { source: "E", target: "H", label: "10" },
    { source: "F", target: "G", label: "3" },
    { source: "G", target: "H", label: "4" }
  ]
};

const myConfig = {
  nodeHighlightBehavior: true,
  node: {
    color: "lightgreen",
    size: 120,
    highlightStrokeColor: "blue"
  },
  link: {
    highlightColor: "lightblue",
    color: "lightblue",
    renderLabel: true,
    fontSize: 11
  }
};

/**
 * This component displays a visual representation
 * of the graph.
 */
const DGraph: React.FC = () => {
  const [data, setData] = useState(initialData);

  const getStart = () => {
    const node = data.nodes.find(e => e.symbolType === "square");
    return node ? node.id : data.nodes[0].id;
  };
  const getDestination = () => {
    const node = data.nodes.find(e => e.symbolType === "triangle");
    return node ? node.id : "H";
  };

  /* istanbul ignore next */
  /**
   * Move start or destination provided.
   * Should use Ramda here to tidy thing up a bit.
   */
  const swapNode = (
    nodeId: string,
    symbolType: string,
    color: string,
    size: string
  ) => {
    const origNodes = data.nodes;
    const removedPrevNode = origNodes.filter(e => {
      if (e.symbolType === symbolType) {
        delete e.symbolType;
        delete e.size;
        delete e.color;
      }
      return e;
    });
    const newNodes = removedPrevNode.filter(e => {
      if (e.id === nodeId) {
        e.symbolType = symbolType;
        e.color = color;
        e.size = size;
      }
      return e;
    });

    return newNodes;
  };

  /* istanbul ignore next */
  /**
   *
   * @param nodeId The node to move the `Start` to.
   */
  const onClickNode = (nodeId: string) => {
    let bOverridingDest = false;

    data.nodes.forEach(e => {
      if (e.id === nodeId && e.symbolType === "triangle")
        bOverridingDest = true;
    });

    if (!bOverridingDest) {
      const newNodes = swapNode(nodeId, "square", "green", "400");
      setData({ ...data, nodes: newNodes });
    }
  };

  /* istanbul ignore next */
  /**
   *
   * @param nodeId The node to move the `Destination` to.
   */
  const onDoubleClickNode = (nodeId: string) => {
    let bOverridingStart = false;

    data.nodes.forEach(e => {
      if (e.id === nodeId && e.symbolType === "square") bOverridingStart = true;
    });

    if (!bOverridingStart) {
      const newNodes = swapNode(nodeId, "triangle", "blue", "400");
      setData({ ...data, nodes: newNodes });
    }
  };

  return (
    <div>
      <div id="graph-container">
        <h2>The Graph component</h2>
        <Graph
          id="graph-id"
          data={data}
          config={myConfig}
          onClickNode={onClickNode}
          onDoubleClickNode={onDoubleClickNode}
        />
      </div>
      <div id="selection-wrapper">
        <Selection start={getStart()} destination={getDestination()} />
        <RouteResults start={getStart()} destination={getDestination()} />
      </div>
    </div>
  );
};

export { DGraph };
