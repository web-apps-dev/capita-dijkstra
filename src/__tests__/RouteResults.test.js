import React from "react";

// get from config
import "@testing-library/jest-dom/extend-expect";

import { render, cleanup } from "@testing-library/react";
import { RouteResults } from "../components/RouteResults";

afterEach(cleanup);

describe("<RouteResults />", () => {
  test("Renders correctly with no prop values", () => {
    const { getByText, getByTestId } = render(<RouteResults />);

    // .toBeInTheDocument() is an assertion that comes from jest-dom
    // otherwise you could use .toBeDefined()
    expect(getByText(/Distance/)).toBeTruthy();
    expect(getByTestId("distance")).toHaveTextContent("Infinity");

    expect(getByText(/Path/)).toBeTruthy();
    expect(getByTestId("route")).toHaveTextContent("finish");

    // query* functions will return the element or null if it cannot be found
    // get* functions will return the element or throw an error if it cannot be found
    //expect(queryByText(testMessage)).toBeNull();

    // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
    //fireEvent.click(getByLabelText(/show/i));
  });

  test("Renders correctly with valid prop values", () => {
    const { getByTestId, rerender } = render(
      <RouteResults start="B" destination="H" />
    );

    expect(getByTestId("distance")).toHaveTextContent("10");
    expect(getByTestId("route")).toHaveTextContent("B-D-G-H");

    rerender(<RouteResults start="D" destination="H" />);

    expect(getByTestId("distance")).toHaveTextContent("6");
    expect(getByTestId("route")).toHaveTextContent("D-G-H");

    rerender(<RouteResults start="C" destination="B" />);

    expect(getByTestId("distance")).toHaveTextContent("Infinity");
    expect(getByTestId("route")).toHaveTextContent("B");
  });

  test("Renders correctly with invalid prop values", () => {
    const { getByTestId } = render(<RouteResults start="A" destination="B" />);

    expect(getByTestId("distance")).toHaveTextContent("Infinity");
    expect(getByTestId("route")).toHaveTextContent("B");
  });
});
