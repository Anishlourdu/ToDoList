import React, { useState } from "react";

const NewTodo = ({ createTodo }) => {
    const [userInput, setUserInput] = useState({})

    const handleChange = e => {
        setUserInput({ [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(userInput.task===''){
            alert('Please Enter the Task')
        }
        else{
            const newTodo={id:,task,completed:false}
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>New Todo</label>
            <input value={userInput.task} onChange={handleChange} type="text" name="task" placeholder="new todo" />
            <button>Add Todo</button>
        </form>
    )
}