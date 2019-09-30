import React, {Component} from 'react';
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

  render() {
    return <div>화이팅^^</div>;
  }
}

export default Todo;
