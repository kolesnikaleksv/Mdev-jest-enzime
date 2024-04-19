import React from "react";
import Post from "./post";
import { shallow } from "enzyme";

//use beforeEach

const setUp = (props) => shallow(<Post {...props} />);

describe("should redner Post component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should contain .post wrapper", () => {
    const wrapper = component.find(".post");
    expect(wrapper.length).toBe(1);
  })
  
  it("should contain link", () => {
    const wrapper = component.find("a");
    expect(wrapper.length).toBe(1);
  })

  it("should render created date", () => {
    const created_at = "2_02_2024";
    component = setUp({ created_at });
    const date = component.find(".date");
    expect(date.text()).toBe(new Date(created_at).toLocaleDateString());
  })
})

// after refactoring

// const setUp = (props) => shallow(<Post {...props} />);

// describe("should redner Post component", () => {
//   it("should contain .post wrapper", () => {
//     const component = setUp();
//     const wrapper = component.find(".post");
//     expect(wrapper.length).toBe(1);
//   })
  
//   it("should contain link", () => {
//     const component = setUp();
//     const wrapper = component.find("a");
//     expect(wrapper.length).toBe(1);
//   })
// })

//Befor refactoring

// describe("should redner Post component", () => {
//   it("should contain .post wrapper", () => {
//     const component = shallow(<Post/>);
//     const wrapper = component.find(".post");
//     expect(wrapper.length).toBe(1);
//   })
  
//   it("should contain link", () => {
//     const component = shallow(<Post/>);
//     const wrapper = component.find("a");
//     expect(wrapper.length).toBe(1);
//   })
// })
