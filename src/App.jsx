import React from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/globalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-weight: 600;
  font-size: 30px;
  background-color: yellow;
`;



const StyleApp =styled.div`
  background-color: red;
  padding: 20px;
`
function App() {
  return (
    <>
    <GlobalStyles/>
     <StyleApp>
      <H1>App</H1>
      <Button onClick={() => alert("checkin clicked")}>Check In </Button>
      <Button onClick={() => alert("checkout clicked")}>Check out</Button>
      <Input placeholder="Enter the number here..." type="number"/>
    </StyleApp>
    </>
   
  );
}

export default App;
