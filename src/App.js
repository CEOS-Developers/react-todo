import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { Intro } from './components/Intro.js';
import { Todo } from './components/todo/Todo.js';

const GlobalStyle = createGlobalStyle`
  html {
    font-size : 10px;
  }
  body {
    background-color : #F6FFDB;
  }
`;

const Wrapper = styled.div``;

class App extends Component {
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

export { App };
