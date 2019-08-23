import React from "react";

interface ISelectionProps {
  start: string;
  destination: string;
}

const Selection: React.FC<ISelectionProps> = props => {
  // inline stle
  const startStyle = { color: "green", marginBottom: 5 };
  const destStyle = { color: "blue", marginBottom: 5 };

  return (
    <div id="selection-container">
      <h3>The Selection component</h3>
      <div id="start" style={startStyle}>
        <h4>Start Node : {props.start}</h4>
      </div>
      <div id="destination" style={destStyle}>
        <h4>Destination Node : {props.destination}</h4>
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
