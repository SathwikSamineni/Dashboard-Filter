import React from 'react';
import '../Filter/Filter.css';

// Define the PCA-related options
const pcaCheckboxOptions = [
  { value: "3", label: "PCA Complete ASTM" },
  { value: "4", label: "PCA Site Visit Only" },
  { value: "5", label: "PCA Report Writing" },
  { value: "14", label: "PCA Report Review" },
  { value: "30", label: "Construction Monitoring" },
  { value: "31", label: "Seismic Analysis" },
  { value: "44", label: "Structural Assessment" },
  // Add more options as needed
];

const CheckboxListPCA = ({ name, className }) => {
  return (
    <ul>
      {pcaCheckboxOptions.map((option, index) => (
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

export default CheckboxListPCA;
