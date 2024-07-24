// DropdownComponent.js
import React from "react";

const DropdownComponent = ({ options, onChange }) => {
  return (
    <select onChange={(e) => onChange(e.target.value)}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default DropdownComponent;
