import { shallow } from "enzyme";
import Checkbox from "./checkbox";
test("check box ", () => {
  const wrapper = shallow(<Checkbox />);

  let checkbox = wrapper.find({ type: "checkbox" });
  wrapper.setProps({ active: true });
  expect(checkbox.props().checked).toEqual(true);

  //   wrapper.setProps({ active: false });
  //   checkbox = wrapper.find({ type: "checkbox" });
  //   expect(checkbox.props().checked).toEqual(false);
});

test("Check label ", () => {
  const checkbox = shallow(<Checkbox labelOn="On" labelOff="Off" />);
  expect(checkbox.text()).toBe("On");
  checkbox.find("input").simulate("change");
  expect(checkbox.text()).toBe("Off");
});
