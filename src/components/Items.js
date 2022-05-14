import React from 'react'

export default function TodoItem(props) {
    const { todo, removeTodo, completeTodo, importantTodo } = props
    return (
        <div className="todo-items">
            <div className={todo.completed ? "todo-row complete" : "todo-row"} style={todo.important ? { background: "red" } : { }}>
                <h1>{todo.text}</h1>
                <div className="iconsContainer">
                    <button className="prio" onClick={() => importantTodo(todo.id)}></button>
                    <button className="finish" onClick={() => completeTodo(todo.id)}></button>
                    <button className="remove" onClick={() => removeTodo(todo.id)}></button>
                </div>
            </div>
        </div>
    )
}