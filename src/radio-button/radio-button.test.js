import exp from "constants";
import { shallow } from "enzyme";
import { findByClassAttribute } from "../test/test-utils";
import { RadioButton } from "./radio-button";
const setup = () => {
  return shallow(<Registration />);
};

describe("Radio checkbox", () => {
  test("find radio Button ", () => {
    const wrapper = shallow(<RadioButton />);
    const component = findByClassAttribute(wrapper, "radio-input");
    expect(component.length).toBe(1);
  });
  test(" if male selected  ", () => {
    const radioButton = shallow(<RadioButton label="male" />);
    expect(radioButton.text()).toBe("male");
  });
  test(" if female selected  ", () => {
    const radioButton = shallow(<RadioButton label="female" />);
    expect(radioButton.text()).toBe("female");
  });

  test("if  checked ", () => {
    const radioButton = shallow(<RadioButton />);
    let btn = radioButton.simulate("click", true);
    expect(btn).toBeTruthy();
  });
});
