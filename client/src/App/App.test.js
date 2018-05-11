import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("<App />", () => {
  test("Match Snapshot", () => {
    const el = shallow(<App />);
    expect(el).toMatchSnapshot();
  });
});
