import { getUserTest } from "./post";

describe("Test case for API ", () => {
  test("get API test case", () => {
    const testData = "Hello World ";

    const response = { json: jest.fn().mockResolvedValueOnce(testData) };
    global.fetch = jest.fn().mockResolvedValueOnce(response);

    return getUserTest().then((data) => {
      expect(data).toEqual(testData);
    });
  });
});
