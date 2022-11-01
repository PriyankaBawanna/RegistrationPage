import react from "react";
import api from "./post";

test("API Testing ", async function () {
  const response = new api();
  console.warn("response of APi ", await response.api());
  const data = await response.api();
  expect(data.movies[0].id).toEqual("1");
});
