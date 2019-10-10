import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";

import Wrapper from "../atoms/Wrapper";
import Intro from "../organisms/Intro";
import Todo from "../organisms/Todo";

const GlobalStyle = createGlobalStyle`

  html {
    font-size : 10px;
  }
  body {
    background-color : #F6FFDB;
  }
`;

class TodoTemplate extends Component {
  render() {
    return (
      <Wrapper>
        <GlobalStyle />
        <Intro />
        <Todo />
      </Wrapper>
    );
  }
}

export default TodoTemplate;
