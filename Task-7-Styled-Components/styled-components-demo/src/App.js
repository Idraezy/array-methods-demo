import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 40px;
  background: #f4f4f4;
  min-height: 100vh;
`;

const Title = styled.h1`
  color: #4f46e5;
`;

const Card = styled.div`
  background: white;
  padding: 20px;
  margin: 20px auto;
  width: 300px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
`;

const Button = styled.button`
  background: #f59e0b;
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #d97706;
  }
`;

function App() {
  return (
    <Container>
      <Title>Styled Components Demo</Title>

      <Card>
        <h3>Reusable Component</h3>
        <p>This card is styled using styled-components.</p>
        <Button>Click Me</Button>
      </Card>

    </Container>
  );
}

export default App;