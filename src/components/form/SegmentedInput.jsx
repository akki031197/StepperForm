import React, { useState, useRef, useEffect } from "react";
import { Form } from "react-bootstrap";

export const SegmentedInput = ({ inputValue, segments, onChange }) => {
  const [values, setValues] = useState(
    inputValue.toString().split("").slice(0, segments).concat(Array(segments - inputValue.toString().length).fill(""))
  );
  const inputRefs = useRef([]);

  useEffect(() => {
    // When the input value changes from outside, update the segmented input
    setValues(
      inputValue.toString().split("").slice(0, segments).concat(Array(segments - inputValue.toString().length).fill(""))
    );
  }, [inputValue, segments]);

  const handleChange = (index, event) => {
    const newValues = [...values];
    newValues[index] = event.target.value;
    setValues(newValues);
    onChange(newValues.join(""));

    // Move focus to next input if available and value is entered
    if (event.target.value && index < segments - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <div className="segmented-input">
      {values.map((value, index) => (
        <Form.Control
          key={index}
          type="text"
          value={value}
          maxLength="1"
          className="form-control"
          ref={(el) => (inputRefs.current[index] = el)}
          onChange={(e) => handleChange(index, e)}
        />
      ))}
    </div>
  );
};
