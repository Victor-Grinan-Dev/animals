import React from 'react';
import './Button.css'


function Button(props){
    return(
        <button 
        id={props.name}
        onClick={props.click}
        className={props.type}
        >
            {props.children}
            {props.value}
        </button>
    )
};

export default Button;