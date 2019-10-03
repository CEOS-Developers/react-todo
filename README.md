# React-todo

## TodoInput Component

1.입력받은 텍스트를 Todo의 state에 저장해야한다.

###  <props와 state>

필요하지 않다.

## TodoCard Component

1.Todo의 state의 todoList의 값을 받아와서 출력한다.<br/>
2.리스트를 클릭했을때 Todo의 state의 todoList의 값을 삭제 해야한다.<br/>

###  <props와 state>

1.props<br/>
    -index: Todo의 state의 todoList의 인덱스값을 받아온다.<br/>
    -text: Todo의 state의 todoList의 텍스트를 받아온다.<br/>
    -onClick(): 클릭시 제거하는 이벤트를 만들어야한다.<br/>