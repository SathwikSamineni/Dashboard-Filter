import React from 'react';
import '../Filter/Filter.css';


const checkboxOptions = [
  { value: "1", label: "ESA Complete ASTM" },
  { value: "2", label: "EP Site Visit Only" },
  { value: "45", label: "Non-EP Site Visit Only" },
  { value: "6", label: "ESA Report Writing" },
  { value: "7", label: "ESA Report Review" },
  { value: "8", label: "File Review" },
  { value: "11", label: "Asbestos Survey" },
  { value: "13", label: "Lead Survey" },
  { value: "15", label: "Indoor Air Quality" },
  { value: "27", label: "NEPA Compliance" },
  { value: "26", label: "Mold" },
  { value: "28", label: "Wetlands Survey" },
  { value: "32", label: "Radon Survey" },
  { value: "33", label: "Soil Vapor Survey" },
];

const CheckboxList = ({ name, className }) => {
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

export default CheckboxList;
