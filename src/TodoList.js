// rafceの関数コンポーネントの補完機能
import React from 'react'
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo }) => {
  return todos.map((todo) => (
    <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} />
  ))
};

export default TodoList;