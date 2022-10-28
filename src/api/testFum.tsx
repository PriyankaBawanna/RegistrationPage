export const handleCallMethod = (
  name: String,
  email: String,
  mobileNo: String,
  gender: String,
  year: String
) => {
  const body = { name, email, mobileNo, gender, year };
  console.log("data user Data ", body);
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    fetch("http://localhost:8085/register", requestOptions).then((response) =>
      response.json()
    );
  } catch {
    alert("error");
  }
};
