import React, {Component} from 'react';
import styled from 'styled-components';

import TodoInput from './TodoInput';
import TodoCard from './TodoCard';

const Card = styled.div`
    width:75%;
    text-align:center;
    display:block;
    margin:0px auto;
    border:none;
    background-color:#dcffa8;
`

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: []
    };
  }

  render() {
    return(
      <Card>
        <TodoInput></TodoInput>
        <TodoCard onSubmit={
          function(content){
            let list = [...this.state.todoList, content]
            this.setState({ 
              todoList: list
            });
          }.bind(this)
        }></TodoCard>
      </Card>
    );
  }
}

export default Todo;
