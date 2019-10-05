import React, { Component } from 'react';
import styled from 'styled-components';

// props : index, text, onClick
class TodoCard extends Component {

  render() {
    return (
      <div onClick={function (e) {
        this.props.onClick(this.props.index);
      }}>
        {this.props.index}. {this.props.todo}
      </div>
    )
  }
}

export default TodoCard;
