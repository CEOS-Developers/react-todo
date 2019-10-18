import React, { Component } from "react";
import H1 from "../atoms/H1";
import P from "../atoms/P";
import Header from "../atoms/Header";

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

export default Intro;
