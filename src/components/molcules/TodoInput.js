import React, { Component } from "react";
import Row from "../atoms/Row";
import Button from "../atoms/Button";

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }

  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.content);
    this.setState({
      content: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Row>
          <input
            type="text"
            name="content"
            placeholder="TODO를 입력하세요"
            value={this.state.content}
            onChange={this.handleChange}
          />
          <Button type="submit">ADD</Button>
        </Row>
      </form>
    );
  }
}

export default TodoInput;
