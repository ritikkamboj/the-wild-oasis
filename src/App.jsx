import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  font-weight: 600;
  font-size: 30px;
  background-color: yellow;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  background-color: purple;
  color: white;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
`

const StyleApp =styled.div`
  background-color: red;
  padding: 20px;
`
function App() {
  return (
    <StyleApp>
      <H1>App</H1>
      <Button onClick={() => alert("checkin clicked")}>Check In </Button>
      <Button onClick={() => alert("checkout clicked")}>Check out</Button>
      <Input placeholder="Enter the number here..." type="number"/>
    </StyleApp>
  );
}

export default App;
