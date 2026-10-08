"use client";

import { useState } from "react";

const ProgressBar = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    if (val >= 0 && val <= 100) setValue(e.target.value);
  };

  return (
    <div>
      <h2>Progress bar</h2>

      <div style={{ position: "relative" }}>
        <span style={{ position: "absolute", top: 0, left: 0 }}>
          {value || 0}%
        </span>
        <progress value={value || 0} max={100} />
      </div>

      <label>
        Input Percentage:
        <input
          type="number"
          value={value}
          onChange={handleChange}
          min={0}
          max={100}
        />
      </label>
    </div>
  );
};

export default ProgressBar;