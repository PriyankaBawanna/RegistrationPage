import { url } from "../constant-file/constant";
export const handleCallMethod = ({ ...body }) => {
  console.log("data user Data ", body);
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    fetch(url, requestOptions).then((response) => {
      response.json();
      alert("done");
    });
  } catch {
    alert("error");
  }
};
