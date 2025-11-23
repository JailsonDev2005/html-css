import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import Tasks from "./components/Tasks";
import Addtask from "./components/AddTask";
import Header from "./components/Header";
import TaskDetails from "./components/TaskDetails";

import axios from 'axios'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

const App = () => {

  const [tasks, setTasks] = useState([
    { id: '1', title: 'Estudar Programação', completed: false },
    { id: '2', title: 'Ler livros', completed: true }
  ]);

  useEffect(() => {
    const loadTasks = async () => {
      const response = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10');
      console.log(response.data);

    
    };

    loadTasks();
  }, []);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    const newTask = [
      ...tasks,
      { id: uuidv4(), title: taskTitle, completed: false }
    ];
    setTasks(newTask);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  };

  return (
    <Router>
      <div className="container">
        <Header />

        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Addtask handleTaskAddition={handleTaskAddition} />
                <Tasks
                  tasks={tasks}
                  handleTaskClick={handleTaskClick}
                  handleTaskDeletion={handleTaskDeletion}
                />
              </>
            }
          />

          <Route path="/:taskTitle" element={<TaskDetails />} />
        </Routes>

      </div>
    </Router>
  );
};

export default App;
