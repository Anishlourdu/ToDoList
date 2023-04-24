import React from "react";
import { useState } from "react";

function App() {

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('')

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleAdd = () => {
    if (inputValue.trim() === '') {
      return;
    }
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    }
    setTodos([...todos, newTodo]);
    setInputValue('');
  }

  const handleToggle = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        }
      }
      return todo;
    })
    setTodos(updatedTodos)
  }

  const handleDelete = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id)
    setTodos(filteredTodos)
  }

  return (
    <div>
      <h1>ToDo List!!!</h1>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleAdd}>Add List</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} onChange={() => handleToggle(todo.id)} />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}


export default App;