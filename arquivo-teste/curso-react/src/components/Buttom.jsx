import React from 'react';

import './Buttom.css'

const Buttom = ({children, onClick}) => {
    return ( 
            <button className='button' onClick={onClick}>
                {children}
            </button>
    );
}
 
export default Buttom;