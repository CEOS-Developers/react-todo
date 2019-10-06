import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  background-color: rgb(32, 122, 38);
  color: white;
  font-size: 1.5rem;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1rem;
`

// props : index, text, onClick
class TodoCard extends Component {

  render() {
    return (
      <Div onClick={() => {
        this.props.onClick(this.props.index);
      }}>
        {this.props.index + 1}. {this.props.todo}
      </Div>
    )
  }
}

export default TodoCard;
