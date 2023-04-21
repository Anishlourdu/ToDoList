import React, { useState } from 'react';
import './toDoList.scss'

const TodoList = () => {
    const [todos, setTodos] = useState([])

    const remove = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const update = (id, updatedTask) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, task: updatedTask }
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    const toggleComplete = id => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    const createTodo = newTodo => {
        setTodos([...todos, newTodo])
    }

    const todosList = todos.map(todo => {
        <Todo key={todo.id} remove={remove} toggleComplete={toggleComplete} update={update} todo={todo} />
    })

    return (
        <div class="ToDoList">
            <h1>React TODOList</h1>
            <NewTodo createTodo={create} />
            <ul>{todosList}</ul>
        </div>
    )
}

export default TodoList;