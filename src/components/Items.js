import React from 'react'

export default function TodoItem(props) {
    const { todo, removeTodo, completeTodo, importantTodo } = props
    return (
        <div className={todo.completed ? "todo-row complete" : "todo-row"} style={todo.important ? { background: "red" } : { background: "lightgreen"}}>
            {todo.text}
            <div className="iconsContainer">
                <button onClick={() => importantTodo(todo.id)}>Priority</button>
                <button onClick={() => completeTodo(todo.id)}>Task Done</button>
                <button onClick={() => removeTodo(todo.id)}>Delete Task</button>
            </div>
        </div>
    )
}