import React from "react";

// get from config
//import "@testing-library/jest-dom/extend-expect";

import { render } from "@testing-library/react";
import { RouteResults } from "../components/RouteResults";

describe("<RouteResults />", () => {
  test("Renders with correct prop values", () => {
    const { getByText } = render(<RouteResults />);

    // .toBeInTheDocument() is an assertion that comes from jest-dom
    // otherwise you could use .toBeDefined()
    expect(getByText(/Distance/)).toBeTruthy();
    expect(getByText(/Path/)).toBeTruthy();

    // query* functions will return the element or null if it cannot be found
    // get* functions will return the element or throw an error if it cannot be found
    //expect(queryByText(testMessage)).toBeNull();

    // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
    //fireEvent.click(getByLabelText(/show/i));
  });
});
