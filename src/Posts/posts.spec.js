import React from "react";
import Posts from "./posts";
import { shallow } from "enzyme";

describe('should rednder Posts component', () => {
  it("should create snapShot", () => {
    // const component = shallow(<Posts />);
    // render method check out children components too
    const component = render(<Posts />);
    expect(component).toMatchSnapshot();
  })
});