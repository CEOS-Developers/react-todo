<h2>Todo 컴포넌트</h2>
state로 todoList[] 배열 가지고 있음

<h2>TodoCard 컴포넌트</h2>
props: index, text, onClick // Todo에서 해당 정보를 가져온다

<h2>TodoInput 컴포넌트</h2>
기본태그 대신 스타일 태그를 사용하자.
폼의 onSubmit 속성으로 this.props.onSubmit(e.target.todo.value)을 사용해 상위 컴포넌트인 Todo컴포넌트의 onSubmit 함수를 호출한다.

<h2>추가로 알게된 것</h2>
<ul>
  <li> 화살표 함수 </li>
  <li> map 메서드 </li>
  <li> 빈 배열 선언 </li>
  
