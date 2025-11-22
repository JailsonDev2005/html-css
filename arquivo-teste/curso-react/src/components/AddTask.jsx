import React, { useState } from 'react';
import './AddTask.css';
import Buttom from './Buttom';

const Addtask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddTaskClick = () => {
    if (!inputData.trim()) return;
    handleTaskAddition(inputData);
    setInputData("");
  };

  return (
    <div className='add-task-container'>
      <input 
        type="text"
        className='add-task-input'
        value={inputData}
        onChange={handleInputChange}
      />

      <div className="add-taks-button-container">
        <Buttom onClick={handleAddTaskClick}>Adicionar</Buttom>
      </div>
    </div>
  );
};
 
export default Addtask;
