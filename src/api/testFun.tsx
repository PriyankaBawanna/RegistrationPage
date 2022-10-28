import React, { useState } from "react";
import { handleCallMethod } from "./testFum";
export default function TestFun() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [mobileNo, setMobileNo] = useState("");
  const [gender, setGender] = useState("male");
  const [year, setYear] = useState("");
  const options = ["One", "Two", "Three", "Four", "Five"];
  const handleInputEmail = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(email)) {
      setEmailError(false);
    } else if (!regEx.test(email) && email !== "") {
      setEmailError(true);
    }
  };

  const onOptionChangeHandler = (event: any) => {
    console.log("User Selected Value - ", event.target.value);
    setYear(event.target.value);
  };
  function onChangeValue(event: any) {
    setGender(event.target.value);
    console.log(event.target.value);
  }
  return (
    <>
      <div>
        <label data-test="nameLabel" className="labelName ">
          Name
        </label>
        <input
          data-test="inputBox"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div>
        <label className="labelEmail">Email</label>
        <input
          data-test="inputEmail"
          type="text"
          placeholder="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            handleInputEmail();
          }}
        />
        {emailError ? (
          <span className="inputError">Email not valid</span>
        ) : (
          <span></span>
        )}
      </div>
      <div>
        <label className="labelMobile">Mobile No</label>
        <input
          data-test="inputMobile"
          type="Number"
          placeholder="mobile"
          value={mobileNo}
          onChange={(event) => {
            setMobileNo(event.target.value);
            handleInputEmail();
          }}
        />
      </div>
      <div>
        <select onChange={onOptionChangeHandler} className="selectBox">
          <option className="selectBoxPlaceholder">
            Please choose one option
          </option>
          {options.map((option, index) => {
            return (
              <option key={index} className="selectBoxOptions">
                {option}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <div onChange={onChangeValue} className="radioGroup">
          <input
            type="radio"
            value="Male"
            name="gender"
            checked={gender === "Male"}
            data-test="male"
            className="male"
          />
          Male
          <input
            type="radio"
            value="Female"
            name="gender"
            checked={gender === "Female"}
            data-test="female"
            className="female"
          />
          Female
        </div>
        <p>{gender}</p>
      </div>
      <button
        onClick={() => {
          handleCallMethod(name, email, mobileNo, gender, year);
        }}
      >
        submit
      </button>
    </>
  );
}
