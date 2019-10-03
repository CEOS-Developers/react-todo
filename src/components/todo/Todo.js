import React, { Component } from "react";
import styled from "styled-components";

import TodoInput from "./TodoInput";
import TodoCard from "./TodoCard";

const Div = styled.div`
  background-color: #def2a7;
  margin: 0 10rem;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
`;

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: []
    };
  }
  handleClick = index => {
    let newTodoList = Array.from(this.state.todoList);
    newTodoList.splice(index, 1);
    this.setState({
      todoList: newTodoList
    });
  };
  getTodo() {
    let index = 0;
    if (this.state.todoList.length === 0) {
      return "표시할 TODO가 없어요!";
    } else {
      const list = this.state.todoList.map(content => {
        return (
          <TodoCard index={index++} text={content} onClick={this.handleClick} />
        );
      });
      return list;
    }
  }
  isEmpty(content) {
    return content === "" ? true : false;
  }
  handleSubmit = content => {
    if (this.isEmpty(content)) alert("TODO를 입력하고 ADD 하세요!");
    else {
      const updateList = this.state.todoList.concat(content);
      this.setState({
        todoList: updateList
      });
    }
  };
  render() {
    return (
      <Div>
        <TodoInput onSubmit={this.handleSubmit} />
        {this.getTodo()}
      </Div>
    );
  }
}

export default Todo;
