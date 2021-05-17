import React from 'react';

const Button = (props) => {   
    return (
        <div className="btn__wrapper">           
            <button className="btn" id={props.id}  onClick={props.show}>{props.title}</button>  
        </div>
    )    
}

export default Button;