import React from "react";
import { useState } from "react";
import "./App.css"

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
    const newTodo = { id: Date.now(), text: inputValue, completed: false, }

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
      <br /><br />
      <div class="container">
        <h2><marquee width="100%" behavior="scroll" bgcolor="e5e500">ToDo List using React . . .</marquee></h2>
        <div class="row">
          <div class="col">
            <input class="form-control" type="text" value={inputValue} onChange={handleChange} placeholder="Please Enter Here . . ." />
          </div>
          <div class="col">
            <button class="btn btn-primary mb-2" onClick={handleAdd}>Add List</button>
          </div>
        </div>
        <div class="">
          <ol>
            {todos.map((todo) => (
              <li key={todo.id}>
                &emsp;
                <input type="checkbox" checked={todo.completed} onChange={() => handleToggle(todo.id)} />
                &emsp;
                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
                &emsp;
                <button class="btn btn-danger" onClick={() => handleDelete(todo.id)}>Delete</button>
                </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}


export default App;