"use client";

import { useState } from "react";

const ProgressBar = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <label>Porcentaje</label>
      <br />
      <input
        type="number"
        value={value}
        onChange={handleChange}
        placeholder="0 - 100"
      />

      <progress value={value} />

      <p>{value}%</p>
    </div>
  );
};

export default ProgressBar;