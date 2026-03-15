import React from "react";

function Checkbox({ label }) {
  return (
    <label style={{ display: "block" }}>
      <input type="checkbox" /> {label}
    </label>
  );
}

export default Checkbox;