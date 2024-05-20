import { useState, useRef } from "react";
import { Form } from "react-bootstrap";
// eslint-disable-next-line react/prop-types
export const SegmentedInput = ({ segments, onChange }) => {
  const [values, setValues] = useState(Array(segments).fill(""));
  const inputRefs = useRef([]);

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
