function TodoList({ todos }) {
  // Render
  return (
    <ul className="todo-list">
      {todos.map((todo) => 
      (
        <li key={todo.id}>
          <input type="checkbox" className="checkbox" defaultChecked={todo.done}></input>
          <label>{todo.label}</label>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;