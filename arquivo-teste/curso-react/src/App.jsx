import React, { useState } from "react";

import {v4 as uuidv4 } from 'uuid'

import Tasks from "./components/Tasks";

import {BrowserRouter as Router, Route} from './react-router-dom'

import './App.css';

import Addtask from "./components/AddTask";

import Header from "./components/Header";

import TaskDetails from "./components/TaskDetails";

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
    <Router>
      <div className="container">
        <Header/>
        
        <Route path="/" exact render={() => (
          <>
            <Addtask handleTaskAddition={handleTaskAddition} />
        <Tasks tasks={tasks} handleTaskClick={handleTaskClick}/>
          </>
        )}/>
        <Route path="/:taskTitle" exact render={TaskDetails}/>
      </div>
      </Router>
  );
}

export default App;
