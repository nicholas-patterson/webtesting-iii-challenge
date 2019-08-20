import React from "react";
import renderer from "react-test-renderer";
import Dashboard from "./Dashboard";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

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

describe("<Controls/>", () => {
  it("button text changes to reflect the state of the door", () => {
    const { getByTestId } = render(<Dashboard />);
    const toggleLocked = getByTestId("togglelocked"); // Lock Gate
    const toggleOpen = getByTestId("toggleopen"); // Close Gate
    console.log(toggleOpen.textContent);
    fireEvent.click(toggleOpen);
    expect(toggleOpen).toHaveTextContent("Open Gate");
    fireEvent.click(toggleLocked);
    expect(toggleLocked).toHaveTextContent("Unlock Gate");
  });
  it("the closed toggle button is disabled if the gate is locked", () => {
    const { getByTestId } = render(<Dashboard />);
    const toggleLocked = getByTestId("togglelocked"); // Lock Gate
    const toggleOpen = getByTestId("toggleopen"); // Close Gate
    fireEvent.click(toggleOpen);
    fireEvent.click(toggleLocked);
    expect(toggleOpen).toBeDisabled();
  });
  it("the locked toggle button is disabled if the gate is open", () => {
    const { getByTestId } = render(<Dashboard />);
    const toggleLocked = getByTestId("togglelocked"); // Lock Gate
    const toggleOpen = getByTestId("toggleopen"); // Close Gate
    expect(toggleLocked).toBeDisabled();
  });
});
