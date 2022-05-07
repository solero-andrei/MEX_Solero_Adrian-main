import React from 'react'
import { RiCloseCircleLine } from "react-icons/ri"
import { BiCheckCircle } from "react-icons/bi"

export default function TodoItem(props) {
    const { todo, removeTodo, completeTodo, importantTodo } = props
    return (
        <div className={todo.completed ? "todo-row complete" : "todo-row"} style={todo.important ? { background: "red" } : {}}>
            {todo.text}
            <div className="iconsContainer">
                <button onClick={() => importantTodo(todo.id)}>Priority</button>
                <button onClick={() => completeTodo(todo.id)}>Task Done</button>
                <button onClick={() => removeTodo(todo.id)}>Delete Task</button>
            </div>
        </div>
    )
}