import React from 'react';
import '../Filter/Filter.css';
// Define the Environmental Subsurface options
const environmentalSubsurfaceOptions = [
  { value: "9", label: "Phase II ESA" },
  { value: "10", label: "Environmental Drilling Services" },
  { value: "12", label: "Ground Penetrating Radar" },
  { value: "29", label: "Field Sampling" },
  // Add more options as needed
];

const CheckboxListEnvironmentalSubsurface = ({ name, className }) => {
  return (
    <ul>
      {environmentalSubsurfaceOptions.map((option, index) => (
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

export default CheckboxListEnvironmentalSubsurface;
