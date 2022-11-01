import { useState } from "react";

export default function Checkbox({ labelOn, labelOff }) {
  const [isChecked, setIsChecked] = useState(true);

  const onChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      {isChecked ? labelOn : labelOff}
    </label>
  );
}
