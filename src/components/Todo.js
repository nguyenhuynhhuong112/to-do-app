import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Todo = ({task,deleteTodo,editTodo,hanldeTextClick}) =>{

    const handleChange = () =>{
        
    }

    return (
        <div className="Todo">
            <div className="task-checks">
                <input type="checkbox" className="check-done" onChange={handleChange}  checked={task.completed} onClick={()=> hanldeTextClick(task.id)}></input>
                <p style={{ textDecoration: task.completed ? "line-through" : "none" }} className="getTask">{task.task}</p>
            </div>
            <div className="icon">
                <FontAwesomeIcon icon={faTrash} className="trash" onClick={()=>deleteTodo(task.id)}/>
                <FontAwesomeIcon icon={faPenToSquare} onClick={()=>editTodo(task.id)}/>
                
            </div>
        </div>
    )
}
