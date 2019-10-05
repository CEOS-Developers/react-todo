import React, { Component } from 'react';
import styled from 'styled-components';

const List = styled.div`
    display:block;
    margin:0px auto;
    border-radius: 1.15rem;
    margin-bottom:1.15rem;
    padding:1.25rem;
    width:80%;
    background-color:Green;
    color:White;
    font-size: 1.5rem;
`

const ListWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding:5rem;
    padding-top:0rem;
`

// props : index, text, onClick
class TodoCard extends Component {

  render() {
    let result = <div>표시할 TODO가 없어요!</div>; //처음에 뜨도록
    let list = this.props.data;
    let toDo = [];
    for (let i in list) {
      toDo.push(<List key={i} onClick={function (e) { //onClick 이벤트 발생했을 때 클릭한 내용 삭제되도록
        this.props.onClicked(i); // props의 onClicked를 핸들러에 넣어줌.
      }.bind(this)}>{Number(i) + 1}. {list[i]}</List>);
    }
    if (toDo.length > 0) { result = toDo }; //배열에 값이 들어왔을 때에 그것을 출력하도록

    return (
      <ListWrapper>
        {result}
      </ListWrapper>
    );
  }
}

export { TodoCard };
