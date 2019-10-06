import React, { Component } from 'react';
import styled from 'styled-components';

import TodoInput from './TodoInput';
import TodoCard from './TodoCard';

const Div = styled.div`
  width: 80%;
  background-color: rgb(222, 242, 167);
  margin: 0px auto;
  padding: 5rem;
  border-radius: 2rem;
`

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: []
    };
  }

  onClick = (index) => {
    console.log(this.state.todoList)
    let newTodoList = Array.from(this.state.todoList)
    newTodoList.splice(index, 1);
    this.setState({ todoList: newTodoList });
  }

  getTodo = () => {
    if (this.state.todoList.length === 0) {
      return "표시할 TODO가 없어요!";
    }
    else {
      let showTodoList = [];
      for (let index = 0; index < this.state.todoList.length; index++) {
        showTodoList.push(
          <TodoCard
            index={index}
            todo={this.state.todoList[index]}
            onClick={this.onClick}
          />);
      }
      return showTodoList;
    }
  }

  onSubmit = (_todo) => {
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
