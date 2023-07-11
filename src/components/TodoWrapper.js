import React, {useState} from "react";
import {TodoForm} from "./TodoForm";
import {v4 as uuidv4} from 'uuid'
import {Todo} from "./Todo"
import { EditTodoForm } from "./EditTodoForm";


export  const TodoWrapper = () =>{
    const [todos, setTodos] = useState([])
    const [checkCount,setCheckCount] = useState(0)
    const addTodo = todo =>{
        setTodos([...todos, {
            id:uuidv4(),task:todo, completed: false, isEditing: false}])
    }

    const deleteTodo = id =>{
        setTodos(todos.filter(
            todo=> todo.id !== id 
        ))
        const completedCount = todos.filter(todo => todo.id  !== id && todo.completed).length
        setCheckCount(completedCount) 
    }
    
    const editTodo = id =>{
        setTodos(todos.map(
            todo => todo.id === id? {
                ...todo, isEditing:!todo.isEditing
            } : todo
        ))
    }

    const editTask = (task,id) =>{
        setTodos(todos.map(
            todo => todo.id === id? {
                ...todo,task,isEditing:!todo.isEditing
            }:todo
        ))
    }
    
    const hanldeTextClick = (id) =>{
        const updateTodos = todos.map(todo=>todo.id === id ? {
            ...todo,
            completed:!todo.completed,
        }:todo)
        const completedCount= updateTodos.filter(todo=> todo.completed).length
        setTodos(updateTodos)
        setCheckCount(completedCount)
        
    } 

    return (
        <div className="TodoWrapper">
            <TodoForm addTodo = {addTodo}/>
            {todos.map((todo,index)=>{
                return todo.isEditing ? (
                    <EditTodoForm key={index} task={todo} editTodo= {editTask}/>
               ):(
                    <Todo key={index} task={todo}  deleteTodo={deleteTodo} editTodo = {editTodo} hanldeTextClick = {hanldeTextClick}/>
               )
            })}
            <p className="task-done">Số task hoàn thành: {checkCount} </p>
        </div>
    )
}