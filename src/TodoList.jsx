
import TodoItem from "./TodoItem"

function TodoList() {
    return (
        <ul className="add-todo__list">
            <TodoItem labelContent="Learn React"></TodoItem>
            <TodoItem labelContent="Continue to learn React"></TodoItem>
            <TodoItem labelContent="Be awesome"></TodoItem>
        </ul>
    )
}

export default TodoList;