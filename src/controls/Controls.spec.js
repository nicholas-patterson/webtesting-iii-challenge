import React from "react";
import renderer from "react-test-renderer";
import Controls from "./Controls";

describe("<Controls/>", () => {
  // 2. write this test
  it("matches snapshot", () => {
    const tree = renderer.create(<Controls />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
