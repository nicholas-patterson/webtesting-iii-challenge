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
    const { getByTestId } = render(<Display closed={closed} />);
    const div = getByTestId("closeddiv");
    expect(div.textContent).toBe("Closed");
  });
  it("displays 'Open' if the props is false", () => {
    const open = false;
    const { getByTestId } = render(<Display open={open} />);
    const div = getByTestId("closeddiv");
    expect(div.textContent).toBe("Open");
  });
  it("displays 'Locked' if the props is true", () => {
    const locked = true;
    const { getByTestId } = render(<Display locked={locked} />);
    const div = getByTestId("lockeddiv");
    expect(div.textContent).toBe("Locked");
  });
  it("displays 'Unlocked' if the props is false", () => {
    const locked = false;
    const { getByTestId } = render(<Display locked={locked} />);
    const div = getByTestId("lockeddiv");
    expect(div.textContent).toBe("Unlocked");
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
