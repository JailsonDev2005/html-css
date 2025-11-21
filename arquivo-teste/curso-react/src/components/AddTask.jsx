import React from 'react';

import './AddTask.css';

import Buttom from './Buttom';

import  {useState} from 'react';

const Addtask = (handleTaskAddition) => {
    
    const [inputData, setInputData] = useState("");

    const handleInputChange = (e) =>{
        setInputData(e.target.value);
    }

    const handleAddTaskClick = () =>{
        handleTaskAddition(inputData)
    }

    return ( 
        <div onChange={handleInputChange} value={inputData} className='add-task-container'><input type="text" className='add-task-input' />
        
        <div className="add-taks-button-container">
        <Buttom>Adicionar</Buttom>    
        </div>
        </div>
     );
}
 
export default Addtask;