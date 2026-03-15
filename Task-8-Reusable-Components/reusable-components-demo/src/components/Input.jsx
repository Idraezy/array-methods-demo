import React from "react";

function Input({ placeholder }) {
  return (
    <input
      placeholder={placeholder}
      style={{ padding: "8px", margin: "5px" }}
    />
  );
}

export default Input;