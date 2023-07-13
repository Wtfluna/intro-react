import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./Form"
import TodoList from "./TodoList"

const LSKEY = "MyTodoApp";

function App() {
  //Initialise le state
  const [todos, setTodos] = useState(
    // On récupère une string de localStorage   
    // On transforme le string en todo
    JSON.parse(window.localStorage.getItem(`${LSKEY}.todos`))

  );

  // const handleInputChange = (inputValue) => {
  //Mise à jour de l'état avec la nouvelle valeur
  function addTodo(todo) {
    setTodos([...todos, {
      id: uuidv4(),
      label: todo,
      done: false
    }]);
  }

  // Sauvegarde todo dans localStorage
  useEffect(() => {
    window.localStorage.setItem(`${LSKEY}.todos`, JSON.stringify(todos));
  }, [todos])

  return (
    <div className="container">
      <div className="app">
      <h1>My Todo App</h1>
      <div className="line"></div>
      <Form onInputChange={addTodo} />
      <div className="line"></div>
      <TodoList todos={todos} />
    </div></div>
  );
}

export default App