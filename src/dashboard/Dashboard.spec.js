import React from "react";
import renderer from "react-test-renderer";
import Dashboard from "./Dashboard";
import { render } from "@testing-library/react";

describe("<Dashboard/>", () => {
  // 2. write this test
  it("matches snapshot", () => {
    const tree = renderer.create(<Dashboard />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("it shows props text when event clicked", () => {
    const comp = render(<Dashboard />);
    console.log(comp);
  });
});
