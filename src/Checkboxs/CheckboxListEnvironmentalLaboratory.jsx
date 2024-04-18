import React from 'react';
import '../Filter/Filter.css';
// Define the Environmental - Laboratory options
const environmentalLaboratoryOptions = [
  { value: "20", label: "Laboratory Analysis Services" },
  { value: "21", label: "Laboratory Data Validation" },
  { value: "22", label: "Laboratory Audits/Quality Assurance" },
  // Add more options as needed
];

const CheckboxListEnvironmentalLaboratory = ({ name, className }) => {
  return (
    <ul>
      {environmentalLaboratoryOptions.map((option, index) => (
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

export default CheckboxListEnvironmentalLaboratory;
