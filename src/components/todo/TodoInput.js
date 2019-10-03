import React, { Component } from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  background-color: #207a26;
  color: white;
`;
// 힌트 : Row, Input, Button
class TodoInput extends Component {
  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.onSubmit(e.target.content.value);
        }}
      >
        <Row>
          <input name="content" type="text" />
          <Button>ADD</Button>
        </Row>
      </form>
    );
  }
}

export default TodoInput;
