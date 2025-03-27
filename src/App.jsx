import React from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/globalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";




const StyleApp =styled.div`
  background-color: red;
  padding: 20px;
`
function App() {
  return (
    <>
    <GlobalStyles/>
     <StyleApp>
      <Heading as="h1">App</Heading>
      <Heading as="h2">Form</Heading>
      <Heading as="h3">check In and Out </Heading>
      <Button onClick={() => alert("checkin clicked")}>Check In </Button>
      <Button onClick={() => alert("checkout clicked")}>Check out</Button>
      <Input placeholder="Enter the number here..." type="number"/>
    </StyleApp>
    </>
   
  );
}

export default App;
