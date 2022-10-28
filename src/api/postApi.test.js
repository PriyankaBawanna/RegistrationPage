import postApi from "./postApi";
import { request } from "http";
import { fetchData } from "./postApi";
describe("POST/api/users", () => {
  test("Register new user ", async () => {
    let user = {
      name: "user",
      email: "user@gmail.com",
      gender: "female",
      year: "One",
    };

    const response = await request(postApi)
      .post("http://localhost:8085/register")
      .send(user);
    console.log("user response", response);
    expect(response.error).toBe(false);
    expect(response.status).toBe(200);
    expect(response.body.body).not.toBeNull();
  });
});

describe("Promise test ", () => {
  test.only("Test async function ", async () => {
    const data = await fetchData();
    expect(data).toBe("done");
  });
});
