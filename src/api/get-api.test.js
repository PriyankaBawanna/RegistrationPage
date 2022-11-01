// users.test.js
import axios from "axios";
import Users from "./get-api";

test("API Testing ", async function () {
  const response = new Users();
  console.warn("response of APi ", await response.all());
  const data = await response.all();
  expect(data.movies[0].id).toEqual("1");
});
