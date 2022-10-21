import { shallow } from "enzyme";
import Registration from "./registrationPage";
import { findByTestAttribute } from "../test/testUtils";

// create a common wrapper
const setup = () => {
  return shallow(<Registration />);
};

//this code for useState destructure
const mockSetCurrentGuess = jest.fn();
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  // overwrite the useState Property , overwrite it with a function that takes an initial state
  useState: (initialState: String) => [initialState, mockSetCurrentGuess],
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
  test("state updates with value of input box upon change  ", () => {
    const wrapper = setup();
    const inputBox = findByTestAttribute(wrapper, "inputBox");
    const mockEvent = { target: { value: "Mango" } };
    inputBox.simulate("change", mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("Mango");
  });
});
