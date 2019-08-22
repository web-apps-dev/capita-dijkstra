import React from "react";
import { Selection } from "./Selection";
import { RouteResults } from "./RouteResults";

/**
 * get the params from the Selection component and send
 * to the RoueResults component.
 *
 * Use useMemo to memoize previosly calculated routes.
 */
const ResultsManager: React.FC = () => {
  return (
    <div id="selection-wrapper">
      <Selection />
      <RouteResults start="B" destination="H" />
    </div>
  );
};

export { ResultsManager };
