import React from 'react'

const Todo = ({ todo, toggleTodo }) => {
  const handleTodoClick = () => {
    // onChange={handleTodoClick} の内容で、チェックを入れられたtodoそのものfindで探して欲しいもの
    toggleTodo(todo.id);
  };
  return (
    <div>
      <label>
        {/* checked={ture or false}にてcheckboxのチェックが入った状態にしておくか外しておくかを決めれる */}
        {/* 下記のcompleted: falseで指定した内容が、checked={todo.completed}に反映されデフォルトでfalseになる */}
        {/* const[todos, setTodos] = useState([{ id: 1, name: "Todo1", completed: false }]); */}
        <input 
          type="checkbox" 
          checked={todo.completed} 
          readOnly 
          onChange={handleTodoClick} 
        />
      </label>
      {todo.name}
    </div>
  )
}

export default Todo