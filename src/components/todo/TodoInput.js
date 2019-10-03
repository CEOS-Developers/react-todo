import React, { Component } from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
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
          <button>ADD</button>
        </Row>
      </form>
    );
  }
}

export default TodoInput;
