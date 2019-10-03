import React, { Component } from "react";
import styled from "styled-components";

import TodoInput from "./TodoInput";
import TodoCard from "./TodoCard";

const Div = styled.div`
  background-color: #def2a7;
  margin: 0 4rem;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
`;

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: []
    };
  }
  getTodo() {
    let index = 0;
    const list = this.state.todoList.map(content => {
      return <TodoCard index={index++} text={content} />;
    });
    return list;
  }
  render() {
    return (
      <Div>
        <TodoInput
          onSubmit={content => {
            const updateList = this.state.todoList.concat(content);
            this.setState({
              todoList: updateList
            });
          }}
        />
        {this.getTodo()}
      </Div>
    );
  }
}

export default Todo;
