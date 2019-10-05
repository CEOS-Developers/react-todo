import React, {Component} from 'react';
import styled from 'styled-components';

const Header = styled.header``;

const H1 = styled.h1`
  font-size: 2rem;
`;

const P = styled.p`
  font-size: 1rem;
`;

class Intro extends Component {
  render() {
    return (
      <Header>
        <H1>리액트 투-두</H1>
        <P>CEOS REACT STUDY에서 만든 TODOLIST입니다.</P>
      </Header>
    );
  }
}

export {Intro};
