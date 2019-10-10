import React, { Component } from "react";
import TodoContent from "../atoms/TodoContent";

class TodoCard extends Component {
  handleClick = e => {
    e.preventDefault();
    this.props.onClick(this.props.index);
  };

  render() {
    return (
      <TodoContent onClick={this.handleClick}>
        {this.props.index + 1}.{this.props.text}
      </TodoContent>
    );
  }
}

export default TodoCard;
