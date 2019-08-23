import React from "react";
import { DGraph } from "./components/DGraph";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Capita Dijkstra Shortest Distance Calculator</h2>
      </header>
      <div id="main-container">
        <DGraph />
      </div>
    </div>
  );
};

export default App;
