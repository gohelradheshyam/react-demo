import { useState,useEffect } from "react";
export const TodoList=() =>{
    const [todoList,setTodoList]=useState([]);
    const [newTask,setNewTask]=useState("");
    const addTask=()=>{
        let id=1;
        if(todoList.length>0){
            id=todoList[todoList.length-1].id+1;
        }
        var task={
            'id':id,
            "name":newTask
        };
        setTodoList([...todoList,task]);
    }
    const handleChange = (event) => {
        setNewTask(event.target.value); // Update the newTask state with the input value
    };

    const deleteTask = (task_id) => {
        console.log(task_id);
        var newTodo=todoList.filter((task)=>{
            if(task.id!==task_id){
                return task;
            }            
        })
        setTodoList(newTodo);        
    };
    const editTask = (task_id) => {
        console.log(task_id);
        var newTodo=todoList.map((task)=>{
            if(task.id==task_id){
                
            }
            return task;         
        })
        setTodoList(newTodo);        
    };
    return <div>
        <input onChange={handleChange}/>
        <button onClick={()=>addTask()}>Add Task</button>
        {todoList.map((task)=>{
            return <h4 key={task.id} value={task.id}>{task.name} 
            <button onClick={()=>deleteTask(task.id)}> Delete</button>
            <button onClick={()=>editTask(task.id)}> Edit</button>
            </h4>
        })}
  </div>
}