import React, { Component } from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  background-color: #207a26;
  color: white;
`;
// 힌트 : Row, Input, Button
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
