import React, { useState } from "react";
import { dijkstra } from "../lib/dijkstra";

interface IRouteResultsProps {
  start: string;
  destination: string;
}

const graph = {
  A: { C: 2 },
  B: { D: 4, E: 7 },
  C: { D: 1, F: 4 },
  D: { F: 1, G: 2 },
  E: { H: 10 },
  F: { G: 3 },
  G: { H: 4 },
  H: {}
};

const RouteResults: React.FC<IRouteResultsProps> = props => {
  const results = dijkstra(graph, props.start, props.destination);

  return (
    <div id="results-container">
      <h2>The Results component</h2>
      <div id="results">
        <span id="distance">
          Distance : <span data-testid="distance">{results.distance}</span>
        </span>
        <br />
        <span id="route">
          Path : <span data-testid="route">{results.path.join("-")}</span>
        </span>
      </div>
    </div>
  );
};

export { RouteResults };
