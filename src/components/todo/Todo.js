import React, { Component } from 'react';
import styled from 'styled-components';

import TodoInput from './TodoInput';
import TodoCard from './TodoCard';

const Div = styled.div``

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: []
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onClick(index) {
    let newTodoList = Array.from(this.state.todoList);
    newTodoList.splice(index, 1);
    this.setState({
      todoList: newTodoList
    });
  }

  getTodo() {
    let index = 0;
    let todo = "";

    if (this.state.todoList.length === 0) {
      return "표시할 TODO가 없어요!";
    }
    else {
      let _todoList = this.state.todoList;
      while (index < this.state.todoList.length) {
        _todoList.concat(<TodoCard index={++index} todo={todo} onClick={this.onClick} />)
      }
      return _todoList;
    }
  }

  onSubmit(_todo){
    let newTodoList = Array.from(this.state.todoList);
    newTodoList.push(_todo);
    this.setState({
      todoList: newTodoList
    });
  }

  render() {
    return (
      <Div>
        <TodoInput onSubmit={this.onSubmit}></TodoInput>
        {this.getTodo()}
      </Div>
    );
  }
}

export default Todo;
