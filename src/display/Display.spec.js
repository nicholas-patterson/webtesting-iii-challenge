import React from "react";
import renderer from "react-test-renderer";
import Display from "./Display";
import { render, getByTestId, cleanup } from "@testing-library/react";
import "jest-dom/extend-expect";

afterEach(cleanup);

describe("<Display/>", () => {
  // 2. write this test
  it("matches snapshot", () => {
    const tree = renderer.create(<Display />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });
  it("displays 'Closed' if the prop is true", () => {
    const closed = true;
    const { getByText } = render(<Display closed={closed} />);
    getByText(/Closed/i);
  });
  it("displays 'Open' if the props is false", () => {
    const open = false;
    const { getByText } = render(<Display open={open} />);
    getByText(/Open/i);
  });
  it("displays 'Locked' if the props is true", () => {
    const locked = true;
    const { getByText } = render(<Display locked={locked} />);
    getByText(/Locked/i);
  });
  it("displays 'Unlocked' if the props is false", () => {
    const locked = false;
    const { getByText } = render(<Display locked={locked} />);
    getByText(/Unlocked/i);
  });
  it("when 'locked' or 'closed' use the 'red-led' class", () => {
    const locked = true;
    const closed = true;
    const { getByText } = render(<Display locked={locked} closed={closed} />);
    const text = getByText(/Closed/i);
    expect(text).toHaveClass("red-led");
  });
  it("when 'unlocked' or 'open' use the 'green-led' class", () => {
    const open = true;
    const unlocked = true;
    const { getByText } = render(<Display open={open} unlocked={unlocked} />);
    const text = getByText(/Open/i);
    expect(text).toHaveClass("green-led");
  });
});
