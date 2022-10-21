import React, { useState } from "react";
import "./registration.css";
export default function Registration() {
  const [name, setName] = useState("");
  return (
    <div className="registrationPage" data-test="registrationPage">
      <form className="registrationFrom">
        <input
          data-test="inputBox"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </form>
    </div>
  );
}
