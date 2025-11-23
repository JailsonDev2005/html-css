import React, { useState } from "react";

import {v4 as uuidv4 } from 'uuid'

import Tasks from "./components/Tasks";

import './App.css';

import Addtask from "./components/AddTask";
import Header from "./components/Header";

const App = () => {

  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false
    },
    {
      id: '2',
      title: 'ler livros',
      completed: true
    },
  ]);

  const handleTaskClick = (taskId) =>{
    const newTasks = tasks.map(task =>{
      if (task.id == taskId) return {... task, completed: !task.completed}
      
      return task;
    })
    setTasks(newTasks)
  }

  const handleTaskAddition = (taskTitle) => {
    const newTask = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed:false,
      }
    ];
    setTasks(newTask);
  };

  const handleTaskDeletion = (taskId) =>{
    const newTasks = tasks.filter(task => task.id !== taskId )
    setTasks()
  }

  return (
    <>
      <div className="container">
        <Header/>
        <Addtask handleTaskAddition={handleTaskAddition} />
        <Tasks tasks={tasks} handleTaskClick={handleTaskClick}/>
      </div>
    </>
  );
}

export default App;
