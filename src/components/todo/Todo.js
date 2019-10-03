import React, { Component } from "react";
//import styled from "styled-components";

import TodoInput from "./TodoInput";
import TodoCard from "./TodoCard";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: []
    };
  }
  render() {
    return (
      <div>
        <TodoInput
          onSubmit={content => {
            const updateList = this.state.todoList.concat(content);
            this.setState({
              todoList: updateList
            });
          }}
        ></TodoInput>
        <TodoCard></TodoCard>
      </div>
    );
  }
}

export default Todo;
