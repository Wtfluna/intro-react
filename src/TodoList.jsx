// import TodoItem from "./TodoItem";
// import { useState } from "react";

// function TodoList() {
//     const initialTodos = 
//         ["Learn React", "Continue to learn React", "Be awesome!"];
//     const [todos, setTodos] = useState(initialTodos);
//     return (
//         <ul className ="add-todo__list">
//             {todos.map((todo) => <TodoItem key={todo.id} text={todos}></TodoItem>)}
//         </ul>
//     )
// }

// export default TodoList;

import { useState } from "react";

function TodoList() {

  // State
  const initialStateWhenILoadTheComponent = [
    {
      id: 1,
      label: "Learn React",
      done: false
    },
    {
      id: 2,
      label: "Continue to learn React",
      done: false
    },
    {
      id: 3,
      label: "Be awesome!",
      done: false
    }
  ];

  const [todos, setTodos] = useState(
    initialStateWhenILoadTheComponent
  );

  // Render
  return (
    <ul className="add-todo__list">
      {todos.map((todo) => 
      (
        <li key={todo.id}>
          <input type="checkbox" className="todo" defaultChecked={todo.done}></input>
          <label>{todo.label}</label>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;