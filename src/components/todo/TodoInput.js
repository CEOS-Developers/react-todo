import React, { Component } from 'react';
import styled from 'styled-components';

const Row = styled.div`
    display:flex;
    flex-direction:row;
  `
const Button = styled.input`
  background-color: rgb(32, 122, 38);
  color: white;
  font-size: 1.5rem;
  border-radius: 0.5rem;
`

// 힌트 : Row, Input, Button
class TodoInput extends Component {

  render() {
    return (
      <form name="addListForm"
        onSubmit={(e) => {
          e.preventDefault();
          if (e.target.todo.value === "")
            alert("TODO를 입력하고 ADD하세요");
          else {
            this.props.onSubmit(e.target.todo.value);
            e.target.todo.value = null;
          }
        }
        }
      >
        <Row>
          <input
            type="text"
            name="todo"
            placeholder="TODO를 입력하세요" />
          <Button
            type="submit"
            name="addButton"
            value="ADD" />
        </Row>
      </form>
    );
  }
}

export default TodoInput;