import React, { Component } from 'react';
import styled from 'styled-components';

import { TodoInput } from './TodoInput.js';
import { TodoCard } from './TodoCard.js';

const Card = styled.div`
    display:block;
    margin:0px auto;
    border-radius: 25px;
    width:75%;
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

    return (
      <Card>
        <TodoInput onSubmit={
          function (content) {
            if (content === '') { //아무 것도 입력하지 않았을 때
              alert('TODO를 입력하고 ADD 하세요!');
            }
            else { //입력값이 들어왔을 때
              let temp = [...this.state.todoList, content]; //기존 배열에 입력값 추가한 새 배열 생성
              
              this.setState({
                todoList: temp
              }); //react에게 state의 변경사항 알림
            }
          }.bind(this)
        } />

        <TodoCard data={this.state.todoList}
          onClicked={function (i) {
            let temp = [...this.state.todoList]; //기본 배열과 값이 같은 새 배열 생성
            temp.splice(i, 1); //클릭한 내용만 삭제

            this.setState({
              todoList: temp
            }); //react에게 state의 변경사항 알림
          }.bind(this)} />
      </Card>
    );
  }
}

export { Todo };
