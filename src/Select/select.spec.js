import React from "react";
import Input from "./select";
import { shallow } from "enzyme";

const props = {
  handleChange: () => {},
  options: [{label: 'hello', value: 2}, {label: 'hello 2', value: 3}],
  value: 10
}

const setUp = (props) => shallow(<Input {...props} />);

describe("should render Input component", () => {
  describe("render component with props", () => {
    const component = setUp(props);
    it("should render select element", () => {
      const select = component.find('select');
      expect(select).toHaveLength(1);
    })
    
    it("should render two option elements", () => {
      const option = component.find("option");
      expect(option).toHaveLength(2);
    })
  });

  describe("render component without props", () => {
    it("it should render two option elements", () => {
      const component = shallow(<Input/>)
      const placeholder = component.find(".placeholder");
      expect(placeholder).toHaveLength(1);
    })
  });

  // describe("defaultprops", () => {
  //   it("should use default handleChange", () => {
  //     const result = Input.defaultProps.handleChange();
  //     expect(result).toBe(undefined);
  //   })
  // });
  describe("defaultprops", () => {
    it("should use default handleChange", () => {
      const result = Input.defaultProps.handleChange();
      expect(result).toBe('Test');
    })
  });
})