import React from 'react';
import '../Filter/Filter.css';
// Define the options for your checkboxes
const checkboxOptions = [
  { value: "34", label: "Appraisals" },
  { value: "35", label: "Appraisal Reviews" },
  { value: "36", label: "Surveys" },
  { value: "37", label: "Survey Reviews" },
  { value: "41", label: "Home Inspections" },
  { value: "42", label: "Business Valuation" },
  { value: "43", label: "Equipment Appraisal" },
  // Add more options as needed
];

const CheckboxOptions = ({ name, className }) => {
  return (
    <ul>
      {checkboxOptions.map((option, index) => (
        <li key={index}>
          <input
            type="checkbox"
            name={name}
            value={option.value}
            className={className}
          /> {option.label}
        </li>
      ))}
    </ul>
  );
};

export default CheckboxOptions;
