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

  deleteHandler = (e,i) => {
    this.props.onClicked(i);
  }

  render() {
    let result = null;
    let todoList = this.props.data;
    let toDo = [];

    for (let i in todoList) {
      toDo.push(<List key={i} onClick={this.deleteHandler}>
      {Number(i) + 1}. {todoList[i]}</List>)
    }

    {toDo.length === 0 &&
       (result = <div>표시할 TODO가 없어요!</div>)}
    {toDo.length !== 0 &&
       (result = toDo)}

    return (
      <ListWrapper>
        {result}
      </ListWrapper>
    );
  }
}

export { TodoCard };
