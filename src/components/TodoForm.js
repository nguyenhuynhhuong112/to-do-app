import React, {useState} from "react";

export const TodoForm = ({addTodo})=>{
    const [value,setValue] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
        addTodo(value)
        console.log(value)

        setValue("")

    }

    const handleChange = (e) =>{
        setValue(e.target.value)
    }

    return(
        <div>
            <h1>What your task today ?</h1>
            <form className="TodoForm" onSubmit={handleSubmit}>
                <input type="text" className="todo-input" placeholder="What your task to do?" value={value} onChange={handleChange}/>
                <button type="submit" className="todo-submit">Add task</button>
            </form>
        </div>
    )
}