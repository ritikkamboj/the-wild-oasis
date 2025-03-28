import React from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/globalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyleApp = styled.div`
  /* background-color: red; */
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyleApp>
        <Row type="vertical">
        <Row type="horizontal">
          <Heading as="h1">The Wild Oasis</Heading>
          <div>
            <Heading as="h2">Check in and Check Out</Heading>
            <Button variations="primary" size="medium" onClick={() => alert("checkin clicked")}>Check In </Button>
            <Button variations="secondary" size="small" onClick={() => alert("checkout clicked")}>Check out</Button>
          </div>
        </Row>

        <Row type="vertical">
          <Heading as="h3">Form</Heading>
          <form>
            <Input placeholder="Enter the number here..." type="number" />
            <Input placeholder="Enter the number here..." type="number" />
          </form>
        </Row>
        </Row>
      </StyleApp>
    </>
  );
}

export default App;
