function App() {
  return (
    <>
      <h1>My Todo App</h1>
      <div className="line"></div>
      <form className="add-todo">
        <input type="text" className="todo-input" placeholder="Type a new todo"></input>
      <button type="submit" className="submit-button">Submit</button>
      </form>
      <div className="line"></div>
      <ul className="add-todo__list">
        <li>
          <input type="checkbox" className="todo"></input>
          <label htmlFor="todo-1">Learn React</label>
        </li>
        <li>
          <input type="checkbox" className="todo"></input>
          <label htmlFor="todo-2">Continue learn React</label>
        </li><li>
          <input type="checkbox" className="todo"></input>
          <label htmlFor="todo-3">Be Awesome</label>
        </li>
      </ul>


    </>
  )
}

export default App
