import React from "react";
import Input from "./Input";
import Button from "./Button";

function Form() {
  return (
    <div>
      <Input placeholder="Enter name" />
      <Input placeholder="Enter email" />
      <Button text="Submit" />
    </div>
  );
}

export default Form;