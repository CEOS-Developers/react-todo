import React, { Component } from 'react';
import styled from 'styled-components';

import TodoInput from './TodoInput';
import TodoCard from './TodoCard';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: []
    };
  }

  handleClick = (index) => {
    this.setState({ todoList: [...this.state.todoList.slice(0,index),...this.state.todoList.slice(index+1)] });
  }

  getTodo = () => {
    if (this.state.todoList.length === 0) {
      return "표시할 TODO가 없어요!";
    }

    return this.state.todoList.map((_todo, index) => {
      return <TodoCard index={index} todo={_todo} onClick={this.handleClick}/>;
    });
  }

  handleSubmit = (_todo) => {
    this.setState({
      todoList: [...this.state.todoList,_todo]
    });
  }

  render() {
    return (
      <Wrapper>
        <TodoInput onSubmit={this.handleSubmit}></TodoInput>
        {this.getTodo()}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 80%;
  background-color: rgb(222, 242, 167);
  margin: 0px auto;
  padding: 5rem;
  border-radius: 2rem;
`

export default Todo;
