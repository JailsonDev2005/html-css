import React from 'react';

import Buttom from './Buttom'

const TaskDetails = () => {
    const parems = useParams();
    console.log(parems)
    return ( 
        <>
            <div className="back-button-container">
                <Buttom>Voltar</Buttom>
            </div>
            <div className="task-dgtails-container">
                <p></p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At doloribus consequatur repudiandae adipisci ratione ut reiciendis, et obcaecati. Rem consectetur explicabo voluptatum sunt neque exercitationem ipsum iusto magnam recusandae atque.</p>
            </div>
        </>
     );
}
 
export default TaskDetails;