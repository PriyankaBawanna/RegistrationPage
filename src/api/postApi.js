import { rejects } from "assert";
import { resolve } from "path";

export async function userData() {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
  fetch("http://localhost:8085/register", requestOptions).then((response) =>
    response.json()
  );
}

export function fetchData() {
  return new Promise((resolve, rejects) => {
    resolve("done");
  });
}
