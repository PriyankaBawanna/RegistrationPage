import react from "react";
import Movies from "./api";

test("API Testing ", async function () {
  const response = new Movies();
  console.warn("response of APi ", await response.api());
  const data = await response.api();
  expect(data.movies[0].id).toEqual("1");
});
