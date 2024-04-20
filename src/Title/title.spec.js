import React from "react";
import Title from "./title";

describe("should render Title component", () => {
  it("create snapshont for Title component with props", () => {
    const component = shallow(<Title title="Test title" />);
    expect(component).toMatchSnapshot();
  });
  
  it("create snapshont for Title component without props", () => {
    const component = shallow(<Title />);
    expect(component).toMatchSnapshot();
  });
})

// describe("Title component", () => {
//   it("should render Title component with props", () => {
//     const component = shallow(<Title title="Test title" />);
//     expect(component).toMatchSnapshot();
//   });

//   it("should render Title component without props", () => {
//     const component = shallow(<Title />);
//     expect(component).toMatchSnapshot();
//   });
// });