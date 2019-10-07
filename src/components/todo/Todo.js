import React, { Component } from 'react';
import styled from 'styled-components';

import TodoInput from './TodoInput';
import TodoCard from './TodoCard';

const Wrapper = styled.div`
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
    let newTodoList = Array.from(this.state.todoList)
    newTodoList.splice(index, 1);
    this.setState({ todoList: newTodoList });
  }

  getTodo = () => {
    if (this.state.todoList.length === 0) {
      return "표시할 TODO가 없어요!";
    }

    let showTodoList = this.state.todoList.map((_todo, index) => {
      return <TodoCard index={index} todo={_todo} onClick={this.onClick}/>;
    });
    return showTodoList;
  }

  onSubmit = (_todo) => {
    this.setState({
      todoList: [...this.state.todoList,_todo]
    });
  }

  render() {
    return (
      <Wrapper>
        <TodoInput onSubmit={this.onSubmit}></TodoInput>
        {this.getTodo()}
      </Wrapper>
    );
  }
}

export default Todo;
