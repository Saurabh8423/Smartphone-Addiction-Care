import React, { useState } from "react";
import "./style.css";
const Index = () => {
  const [value, setValue] = useState(25);

  const handleChange = (event) => {
    setValue(parseInt(event.target.value, 10));
  };

  // Function to determine the color based on the value range
  const getColor = (val) => {
    if (val === 1) {
      return "#ff6666"; // Red
    } else if (val === 2) {
      return "#ffcc66"; // Orange
    } else if (val === 3) {
      return "#ffff66"; // Yellow
    } else if (val === 4) {
      return "#ccff66"; // Light Green
    } else {
      return "#66ff66"; // Green
    }
  };

  return (
    <div className="incredible-scale">
      <div className="scale-bar" style={{ backgroundColor: getColor(value) }}>
        <div className="scale-value">{value}</div>
      </div>
      <input
        type="range"
        min="1"
        max="5"
        value={value}
        onChange={handleChange}
        className="slider"
      />
    </div>
  );
};

export default Index;
