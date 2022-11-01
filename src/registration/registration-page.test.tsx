import { shallow } from "enzyme";
import Registration from "./registration-page";

import { findByTestAttribute, findByClassAttribute } from "../test/test-utils";
import { RadioButton } from "../radio-button/radio-button";
import exp from "constants";

// create a common wrapper
const setup = () => {
  return shallow(<Registration />);
};

//this code for useState destructure
const mockSetCurrentInput = jest.fn();
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  // overwrite the useState Property , overwrite it with a function that takes an initial state
  useState: (initialState: any) => [initialState, mockSetCurrentInput],
}));

//First check the Component will render without any error
test("Registration page render without any error ", () => {
  const wrapper = setup();
  const component = findByTestAttribute(wrapper, "registrationPage");
  expect(component.length).toBe(1);
});

test("check heading ", () => {
  const wrapper = setup();
  const heading = findByTestAttribute(wrapper, "form");
  expect(heading.length).toBe(1);
});

describe("Test case for Name Input filed ", () => {
  beforeEach(() => {
    mockSetCurrentInput.mockClear(); //for not take old test result
  });
  test("Check name label render properly ", () => {
    const wrapper = setup();

    // find element by Test Attribute
    const labelTest = findByTestAttribute(wrapper, "nameLabel");
    expect(labelTest.length).toEqual(1);

    //find element by css class Name
    const labelTestByClass = findByClassAttribute(wrapper, "labelName");
    expect(labelTestByClass.length).toEqual(1);
  });
  test("state updates with value of name input box upon change  ", () => {
    const wrapper = setup();
    const inputBox = findByTestAttribute(wrapper, "inputBox");
    const mockEvent = { target: { value: "User" } };
    inputBox.simulate("change", mockEvent);
    expect(mockSetCurrentInput).toHaveBeenCalledWith("User");
  });
});

describe("Test Case for Email ", () => {
  test("Check Email label render properly ", () => {
    const wrapper = setup();
    //find element by css class Name
    const labelTestByClass = findByClassAttribute(wrapper, "labelEmail");
    expect(labelTestByClass.length).toBe(1);
  });
  test("state update with value of Email input box upon Change ", () => {
    const wrapper = setup();
    const inputBox = findByTestAttribute(wrapper, "inputEmail");
    const mockEvent = { target: { value: "priyanka@gmail.com" } };
    inputBox.simulate("change", mockEvent);
    expect(mockSetCurrentInput).toHaveBeenCalledWith("priyanka@gmail.com");
  });
});

describe("Test case for Mobile  ", () => {
  test("Check label Mobile label render properly ", () => {
    const wrapper = setup();
    //find element by css class Name
    const labelTestByClass = findByClassAttribute(wrapper, "labelMobile");
    expect(labelTestByClass.length).toEqual(1);
  });
  test("state update with value of Email input box upon Change ", () => {
    const wrapper = setup();
    const inputBox = findByTestAttribute(wrapper, "inputMobile");
    const mockEvent = { target: { value: "9876543210" } };
    inputBox.simulate("change", mockEvent);
    expect(mockSetCurrentInput).toHaveBeenCalledWith("9876543210");
  });
});

describe("Test select box", () => {
  test("select box render without any error ", () => {
    const wrapper = setup();
    const selectBox = findByClassAttribute(wrapper, "selectBox");
    expect(selectBox.length).toBe(1);
    const placeholder = findByClassAttribute(wrapper, "selectBoxPlaceholder");
    expect(placeholder.length).toBe(1);
    const selectBoxOptions = findByClassAttribute(wrapper, "selectBoxOptions");
    expect(selectBoxOptions.length).toBe(5);
  });

  test("check the value of Select Box", () => {
    const wrapper = setup();
    const selectBoxValue = wrapper
      .find(".selectBoxOptions")
      .map((node) => node.text());
    expect(selectBoxValue).toEqual(["One", "Two", "Three", "Four", "Five"]);
  });

  test("if user select the index value one ", () => {
    const wrapper = setup();
    const selectBoxValue = wrapper
      .find(".selectBoxOptions")
      .map((node) => node.text());
    expect(selectBoxValue.at(0)).toEqual("One");
  });

  test("if user select the index value Two ", () => {
    const wrapper = setup();
    const selectBoxValue = wrapper
      .find(".selectBoxOptions")
      .map((node) => node.text());
    expect(selectBoxValue.at(1)).toEqual("Two");
  });
  test("if user select the index value Three ", () => {
    const wrapper = setup();
    const selectBoxValue = wrapper
      .find(".selectBoxOptions")
      .map((node) => node.text());
    expect(selectBoxValue.at(2)).toEqual("Three");
  });
  test("if user select the index value Four ", () => {
    const wrapper = setup();
    const selectBoxValue = wrapper
      .find(".selectBoxOptions")
      .map((node) => node.text());
    expect(selectBoxValue.at(3)).toEqual("Four");
  });

  test("if user select the index value Five ", () => {
    const wrapper = setup();
    const selectBoxValue = wrapper
      .find(".selectBoxOptions")
      .map((node) => node.text());
    expect(selectBoxValue.at(4)).toEqual("Five");
  });
});

test("matches email regEx", () => {
  const wrapper = setup();
  const value = "priyanka@gmail.com";
  const emailRegEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
  const inputBox = findByTestAttribute(wrapper, "inputEmail");
  const mockEvent = { target: { value } };
  inputBox.simulate("change", mockEvent);
  expect(mockEvent.target.value).toMatch(emailRegEx);
});

test("check the length of mobile no ", () => {
  const wrapper = setup();
  const mobileNoLength = /^([+]\d{2}[ ])?\d{9}$/;
  const inputBox = findByTestAttribute(wrapper, "inputMobile");
  const mockEvent = { target: { value: "1234567890" } };
  inputBox.simulate("change", mockEvent);
  expect(mockEvent.target.value).toMatch(mobileNoLength);
});

test.only("test case for check box", () => {
  const wrapper = setup();
  const checkbox = findByClassAttribute(wrapper, "check-box");
  expect(checkbox.length).toBe(1);
  const mockEvent = { target: { value: true } };
  checkbox.simulate("click", mockEvent);
  expect(checkbox).toBeTruthy();
});
