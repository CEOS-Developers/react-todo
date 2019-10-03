import React, { Component } from "react";
import styled from "styled-components";

const Span = styled.span`
  width:80%
  background-color:#207A26;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color:white;
  padding: 0.8rem;
  border-radius:1rem;
`;
// props : index, text, onClick
class TodoCard extends Component {
  render() {
    return (
      <Span>
        {this.props.index + 1}.{this.props.text}
      </Span>
    );
  }
}

export default TodoCard;
