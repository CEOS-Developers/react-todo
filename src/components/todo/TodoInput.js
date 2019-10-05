import React, { Component } from 'react';
import styled from 'styled-components';

const Row = styled.div`
    display:flex;
    flex-direction:row;
  `

// 힌트 : Row, Input, Button
class TodoInput extends Component {

  render() {
    return (
      <form name="addListForm"
        onSubmit={function (e) {
          e.preventDefault();
          if (e.target.todo.value == "")
            alert("TODO를 입력하고 ADD하세요");
          else
            this.props.onSubmit(e.target.todo.value);
        }.bind(this)}
      >
        <Row>
          <input type="text" name="todo" placeholder="TODO를 입력하세요" />
          <input type="submit" name="addButton" value="ADD" />
        </Row>
      </form>
    );
  }
}

export default TodoInput;