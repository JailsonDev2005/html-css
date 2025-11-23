import React from 'react';
import './Task.css';
import { useNavigate } from 'react-router-dom';

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
    
    const navigate = useNavigate();

    const handleTaskDetailsClick = () => {
        navigate(`/${task.title}`);
    };

    return(
        <div 
            className='task-container'
            style={task.completed ? {borderLeft: '6px solid chartreuse' } : {}}
        >
            <div 
                className="task-title"
                onClick={() => handleTaskClick(task.id)}
            >
                {task.title}
            </div>

            <div className='buttons-container'>
                <button 
                    className='see-details-button'
                    onClick={handleTaskDetailsClick}
                >
                    Detalhes
                </button>

                <button 
                    className='remove-task-button'
                    onClick={() => handleTaskDeletion(task.id)}
                >
                    X
                </button>
            </div>
        </div>
    );
}

export default Task;
