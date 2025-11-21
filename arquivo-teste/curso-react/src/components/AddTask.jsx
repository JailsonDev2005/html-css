import React from 'react';

import './AddTask.css';

import Buttom from './Buttom';

const Addtask = () => {
    return ( 
        <div className='add-task-container'><input type="text" className='add-task-input' />
        
        <div className="add-taks-button-container">
        <Buttom>Adicionar</Buttom>    
        </div>
        
        </div>
     );
}
 
export default Addtask;