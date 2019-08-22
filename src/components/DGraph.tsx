import React from "react";
import { Graph } from "react-d3-graph";

/**
 * This component displays a visual representation
 * of the graph.
 */
const DGraph: React.FC = () => {
  const data = {
    nodes: [
      { id: "A" },
      { id: "B" },
      { id: "C" },
      { id: "D" },
      { id: "E" },
      { id: "F" },
      { id: "G" },
      { id: "H" }
    ],
    links: [
      { source: "A", target: "C" },
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

  const myConfig = {
    nodeHighlightBehavior: true,
    node: {
      color: "lightgreen",
      size: 120,
      highlightStrokeColor: "blue"
    },
    link: {
      highlightColor: "lightblue",
      color: "lightblue"
    }
  };

  return (
    <div id="graph-container">
      <h2>The Graph component</h2>
      <Graph id="graph-id" data={data} config={myConfig} />
    </div>
  );
};

export { DGraph };
