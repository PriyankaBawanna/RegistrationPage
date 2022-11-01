import React, { useState } from "react";
import { RadioButton } from "../radio-button/radio-button";
import { handleCallMethod } from "../post-api/api";
import Checkbox from "../check-box/checkbox";

export default function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [mobileNo, setMobileNo] = useState("");
  const options = ["One", "Two", "Three", "Four", "Five"];
  const [gender, setGender] = useState("male");
  const [year, setYear] = useState("");
  const [mobileNoError, setMobileNoError] = useState(false);

  let body = { name, email, mobileNo, gender, year };

  const radioChangeHandler = (e: any) => {
    setGender(e.target.value);
  };

  const handleMobileInput = () => {
    const regEx = /^([+]\d{2}[ ])?\d{9}$/;
    if (regEx.test(mobileNo)) {
      setMobileNoError(false);
    } else if (!regEx.test(mobileNo) && mobileNo !== "") {
      setMobileNoError(true);
    }
  };

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
  return (
    <div className="registrationPage" data-test="registrationPage">
      <form className="registrationFrom">
        <h1 data-test="form">Application Form</h1>
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
              handleInputEmail();
              setEmail(event.target.value);
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
              handleMobileInput();
              setMobileNo(event.target.value);
            }}
          />
          {mobileNoError ? (
            <span className="inputError">mobile not valid</span>
          ) : (
            <span></span>
          )}
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
          <RadioButton
            changed={radioChangeHandler}
            id="1"
            isSelected={gender === "male"}
            label="male"
            value="male"
            className="inputRadio"
          />

          <RadioButton
            changed={radioChangeHandler}
            id="2"
            isSelected={gender === "female"}
            label="female"
            value="female"
          />
          <h2>{gender}</h2>
        </div>
        <Checkbox
          labelOn="i accepted term and conditions"
          labelOff="please accept terms and condition "
        />
        <div>
          <button
            className="submitButton"
            onClick={() => {
              handleCallMethod({ ...body });
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
