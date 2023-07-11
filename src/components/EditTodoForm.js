import React, {useState} from "react";

export const EditTodoForm = ({editTodo,task})=>{
    const [value,setValue] = useState(task.task);
    const handleSubmit = (e) =>{
        e.preventDefault();
        editTodo(value,task.id)

        console.log(value)

        setValue("")

    }

    const handleChange = (e) =>{
        setValue(e.target.value)
    }

    return(
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" placeholder="Update task" value={value} onChange={handleChange}/>
            <button type="submit" className="todo-submit">Update task</button>
        </form>
    )
}