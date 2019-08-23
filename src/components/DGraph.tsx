import React, { useState } from "react";
import { Graph } from "react-d3-graph";

/**
 * This component displays a visual representation
 * of the graph.
 */
const DGraph: React.FC = () => {
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
      { source: "B", target: "D" },
      { source: "B", target: "E" },
      { source: "C", target: "D" },
      { source: "C", target: "F" },
      { source: "D", target: "F" },
      { source: "D", target: "G" },
      { source: "E", target: "H" },
      { source: "F", target: "G" },
      { source: "G", target: "H" }
    ]
  };

  const [data, setData] = useState(initialData);

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

  // should use Ramda here to tidy thing up a bit
  const swapNode = (
    nodeId: string,
    symbolType: string,
    color: string,
    size: string
  ) => {
    const origNodes = data.nodes;
    const removedPrevStart = origNodes.filter(e => {
      if (e.symbolType === symbolType) {
        delete e.symbolType;
        delete e.size;
        delete e.color;
      }
      return e;
    });
    const newNodes = removedPrevStart.filter(e => {
      if (e.id === nodeId) {
        e.symbolType = symbolType;
        e.color = color;
        e.size = size;
      }
      return e;
    });
    console.log("swapNode : ", newNodes);
    return newNodes;
  };

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
  );
};

export { DGraph };
