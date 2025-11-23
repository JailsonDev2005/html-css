import React from 'react';
import Buttom from './Buttom';
import { useParams, useNavigate } from 'react-router-dom';
import './TaskDetails.css';

const TaskDetails = () => {

    const { taskTitle } = useParams();
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate(-1);
    };

    return (
        <>
            <div className="back-button-container">
                <Buttom onClick={handleBackButtonClick}>Voltar</Buttom>
            </div>

            <div className="task-details-container">
                <h2>{taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet...</p>
            </div>
        </>
    );
};

export default TaskDetails;
