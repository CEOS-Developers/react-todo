import React, { Component } from "react";

import Col from "../atoms/Col";
import TodoInput from "../molcules/TodoInput";
import TodoCard from "../molcules/TodoCard";

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

  getTodo = () => {
    let index = 0;
    const { todoList } = this.state;
    if (todoList.length === 0) {
      return "표시할 TODO가 없어요!";
    } else {
      const list = todoList.map(content => (
        <TodoCard index={index++} text={content} onClick={this.handleClick} />
      ));
      return list;
    }
  };

  handleSubmit = content => {
    const { todoList } = this.state;
    if (content === "") {
      alert("TODO를 입력하고 ADD 하세요!");
    } else {
      const updateList = todoList.concat(content);
      this.setState({
        todoList: updateList
      });
    }
  };

  render() {
    return (
      <Col>
        <TodoInput onSubmit={this.handleSubmit} />
        {this.getTodo()}
      </Col>
    );
  }
}

export default Todo;
