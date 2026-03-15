import React from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Checkbox from "./components/Checkbox";
import Card from "./components/Card";
import Table from "./components/Table";
import Form from "./components/Form";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Reusable Components Demo</h1>

      <Card title="Button Component">
        <Button text="Click Me" />
      </Card>

      <Card title="Input Component">
        <Input placeholder="Type here..." />
      </Card>

      <Card title="Checkbox Component">
        <Checkbox label="Accept terms" />
      </Card>

      <Card title="Form Component">
        <Form />
      </Card>

      <Card title="Table Component">
        <Table />
      </Card>
    </div>
  );
}

export default App;