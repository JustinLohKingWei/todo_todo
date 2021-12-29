import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import InputBox from "./components/InputBox";
import styled from "styled-components";

const RootFlexBox = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
  background-color: bisque;
`;

function App() {
  return (
    <RootFlexBox>
      <Header/>
      <InputBox/>
    </RootFlexBox>
  );
}

export default App;
