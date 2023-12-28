// useRef入力された文字列や要素を取得する
import { useState, useRef } from "react";
import TodoList from './TodoList';
// npm install uuidにてランダムなIDを自動生成する機能をインストールしimport
import { v4 as uuidv4 } from "uuid";

function App() {
const[todos, setTodos] = useState([]);
// inputで入力された内容をuseRefで取得するinputタグがどれかを定義する
const todoNameRef = useRef();

// todoの追加
const handleAddTodo = () => {
  const name = todoNameRef.current.value;
  if(name === "") return;
  setTodos((prevTodos) => {
    // ""..."スプレッド構文
    // ...prevTodos前のタスクに対して配列で括り","で区切って、新タスク{ id: "1", name: name, completed: false }を追加していく
    // uuidにてランダムなIDを振りたい箇所に、uuidv4()と記述
    return [...prevTodos, { id: uuidv4(), name: name, completed: false }];
  })
  todoNameRef.current.value = null;
};

// 更新したいtodoを選択（ID）
const toggleTodo = (id) => {
  // 直接値を変えるのは好ましくないため、const newTodos = [...todos]にてtodosをコピー
  const newTodos = [...todos];
  // 更新したいtodoが、今存在するtodosの中身の指定されたtodo.idと一致するものを探す
  const todo = newTodos.find((todo) => todo.id === id);
  // 一致したtodoのcheckboxのチェックを反転させる
  todo.completed = !todo.completed;
  // その内容を更新
  setTodos(newTodos);
};
// 完了したものを削除
const handleClear = () => {
  const newTodos = todos.filter((todo) => !todo.completed);
  setTodos(newTodos);
};


  return (
    <div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button onClick={handleClear}>完了したタスクの削除</button>
      {/* filterはfalseのものだけを残す、false＝タスクが終わっていないチェックが入っていいないものを岐路いだす */}
      <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
    </div>
  );
}

export default App;
