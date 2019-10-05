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
    if (this.state.todoList.length === 0) {
      return "표시할 TODO가 없어요!";
    }
    else {
      let showTodoList = null;
      let index = 0;
      while (index < this.state.todoList.length) {
        let _todo = this.state.todoList[index].value;
        console.log(this.state.todoList, index);
        showTodoList.push(<TodoCard index={++index} todo={_todo} onClick={this.onClick} />);
        index++;
      }
      return showTodoList;
    }
  }

  onSubmit(_todo) {
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
