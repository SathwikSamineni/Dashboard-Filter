import React from 'react';
import '../Filter/Filter.css';
// Define the Environmental Cleanup options
const environmentalCleanupOptions = [
  { value: "16", label: "Site Remediation" },
  { value: "17", label: "UST Removal" },
  { value: "18", label: "Biohazard Cleanup" },
  { value: "19", label: "Waste/Recycle" },
  { value: "38", label: "Asbestos Abatement" },
  { value: "39", label: "Lead Abatement" },
  { value: "40", label: "Mold Abatement" },
  // Add more options as needed
];

const CheckboxListEnvironmentalCleanup = ({ name, className }) => {
  return (
    <ul>
      {environmentalCleanupOptions.map((option, index) => (
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

export default CheckboxListEnvironmentalCleanup;
