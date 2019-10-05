import React, { Component } from 'react';
import styled from 'styled-components';

const List = styled.div`
    padding:25px;
    padding-top:0px;
    text-align:center;
    display:block;
    margin:0px auto;
    border:1px;
    background-color:#dcffa8;
`

// props : index, text, onClick
class TodoCard extends Component {
  render() {
    return (
      <List>
        <div>화이팅!</div>
      </List>
    );
  }
}

export default TodoCard;
