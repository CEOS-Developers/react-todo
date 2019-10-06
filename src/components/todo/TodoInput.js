import React, { Component } from 'react';
import styled from 'styled-components';

const InputWrapper = styled.form`
    display:flex;
    justify-content:center;
    border-radius: 1.5rem;
    padding:5rem;
    background-color:#dcffa8;
`

const AddButton = styled.input`
    background-color:Green;
    color:White;
`

// 힌트 : Row, Input, Button
class TodoInput extends Component {
  
  inputHandler = e => {
    e.preventDefault(); //form 제출했을 때 redirect 방지

    this.props.onSubmit( //submit 버튼 눌렀을 때 content라는 이름의 input에 입력한 내용 전송
      e.target.content.value
    );
    e.target.content.value = null; //다시 새로운 내용 입력할 수 있도록 null 대입
  }

  render() {
    return (
      <InputWrapper action="/create_process" method="post" onSubmit={this.inputHandler}>
        <input type="text" name="content" placeholder="TODO를 입력하세요." />
        <AddButton type="submit" value="ADD" />
      </InputWrapper>
    );
  }
}

export { TodoInput };
