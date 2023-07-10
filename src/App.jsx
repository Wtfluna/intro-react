import Button from "./Button"
import TextInput from "./TextInput"
import TodoList from "./TodoList"

function App() {
  return (
    <>
      <h1>My Todo App</h1>
      <div className="line"></div>
      <form className="add-todo">
        <TextInput></TextInput>
        <Button></Button>
      </form>
      <div className="line"></div>
      <TodoList></TodoList>
    </>
  )
}

export default App
