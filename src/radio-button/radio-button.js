import { useState } from "react";

export const RadioButton = (props) => {
  const { changed, id, isSelected, label, value } = props;
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="RadioButton">
      <input
        className="radio-input"
        id={id}
        onChange={changed}
        value={value}
        type="radio"
        checked={isSelected}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
