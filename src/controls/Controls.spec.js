import React from "react";
import renderer from "react-test-renderer";
import Controls from "./Controls";
import { render } from "@testing-library/react";
import "jest-dom/extend-expect";

describe("<Controls/>", () => {
  // 2. write this test
  it("matches snapshot", () => {
    const tree = renderer.create(<Controls />); // generates a DOM tree
    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });
  it("provides buttons to toggle closed and locked states", () => {
    const { getByTestId } = render(<Controls />);
    const toggleLocked = getByTestId("togglelocked");
    const toggleOpen = getByTestId("toggleopen");
  });
});
