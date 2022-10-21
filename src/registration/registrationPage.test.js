import { shallow } from "enzyme";
import Registration from "./registrationPage";
import { findByTestAttribute, findByClassAttribute } from "../test/testUtils";

// create a common wrapper
const setup = () => {
  return shallow(<Registration />);
};

//this code for useState destructure
const mockSetCurrentGuess = jest.fn();
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  // overwrite the useState Property , overwrite it with a function that takes an initial state
  useState: (initialState) => [initialState, mockSetCurrentGuess],
}));

//First check the Component will render without any error
test("Registration page render without any error ", () => {
  const wrapper = setup();
  const component = findByTestAttribute(wrapper, "registrationPage");
  expect(component.length).toBe(1);
});

describe("Test case for Name Input filed ", () => {
  beforeEach(() => {
    mockSetCurrentGuess.mockClear(); //for not take old test result
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
    const mockEvent = { target: { value: "Mango" } };
    inputBox.simulate("change", mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("Mango");
  });
});

describe("Test Case for Email ", () => {
  test("Check Email label render properly ", () => {
    const wrapper = setup();
    //find element by css class Name
    const labelTestByClass = findByClassAttribute(wrapper, "labelEmail");
    expect(labelTestByClass.length).toEqual(1);
  });
  test("state update with value of Email input box upon Change ", () => {
    const wrapper = setup();
    const inputBox = findByTestAttribute(wrapper, "inputEmail");
    const mockEvent = { target: { value: "priyanka@gmail.com" } };
    inputBox.simulate("change", mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("priyanka@gmail.com");
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
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("9876543210");
  });
});

describe("Test select box", () => {
  const mockedOptions = ["One", "Two", "Three", "Four", "Five"];

  test.only("should call onChange when the first option is selected", () => {
    //render the Registration Page
    const wrapper = shallow(<Registration options={mockedOptions} />);

    //find attribute by css class Name
    const selectBoxOptions = findByClassAttribute(wrapper, "selectBoxOptions");

    //select the zero index
    let first = selectBoxOptions.at(0).simulate("change", {
      target: { value: "one", selectedIndex: 0 },
    });

    //try to check the Zero th index value
    expect(first).toContain("one");
  });

  test("select box render without any error ", () => {
    const wrapper = setup();
    const selectBox = findByClassAttribute(wrapper, "selectBox");
    expect(selectBox.length).toBe(1);
    const placeholder = findByClassAttribute(wrapper, "selectBoxPlaceholder");
    expect(placeholder.length).toBe(1);
    const selectBoxOptions = findByClassAttribute(wrapper, "selectBoxOptions");
    expect(selectBoxOptions.length).toBe(5);
  });
});
