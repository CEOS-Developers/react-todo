import React, {Component} from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
    padding:50px;
    text-align:center;
    display:block;
    margin:0px auto;
    border:1px;
    background-color:#dcffa8;
`

const AddButton = styled.input`
    background-color:Green;
    color:White;
`

// 힌트 : Row, Input, Button
class TodoInput extends Component {
  render() {
    return(
      <InputWrapper>
        <form action="/create_process" method="post"
                    onSubmit={function (e) {
                        e.preventDefault();
                        this.props.onSubmit(
                            e.target.content.value
                        );
                        alert('Submit !!!');
                    }.bind(this)}>
                    <input type="text" placeholder="TODO를 입력하세요."></input>
                    <AddButton type="submit" value="ADD"></AddButton>
                </form>
      </InputWrapper>
    );
  }
}

export default TodoInput;
