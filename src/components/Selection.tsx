import React, { useState } from "react";

const Selection: React.FC = props => {
  const initialNodeState = [
    { name: "A", id: "1" },
    { name: "B", id: "2" },
    { name: "C", id: "3" },
    { name: "D", id: "4" },
    { name: "E", id: "5" },
    { name: "F", id: "6" },
    { name: "G", id: "7" },
    { name: "H", id: "8" }
  ];

  const [nodes] = useState(initialNodeState);
  const [startNode] = useState("B");
  const [destNode] = useState("H");

  // inline stle
  const startStyle = { color: "green", marginBottom: 5 };
  const destStyle = { color: "blue", marginBottom: 5 };

  return (
    <div id="selection-container">
      <h3>The Selection component</h3>
      <div id="start" style={startStyle}>
        <h4>Start Node : {startNode}</h4>
      </div>
      <div id="destination" style={destStyle}>
        <h4>Destination Node : {destNode}</h4>
      </div>
      <div id="instructions">
        <p>Single click to change start node. </p>
        <p>Double click to change destination node.</p>
        <p>Zoom with mouse wheel</p>
      </div>
    </div>
  );
};

export { Selection };
