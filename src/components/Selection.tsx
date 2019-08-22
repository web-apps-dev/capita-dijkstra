import React, { useState } from "react";

const Selection: React.FC = () => {
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
  const style = { color: "green" };

  return (
    <div id="selection-container">
      <h2>The Selection component</h2>
      <div id="start" style={style}>
        Start Node : {startNode}
      </div>
      <div id="destination">Destination Node : {destNode}</div>
    </div>
  );
};

export { Selection };
