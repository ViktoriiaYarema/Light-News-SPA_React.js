import React from 'react';

const Button = (props) => {   
    return (
        <div className="btn__wrapper">           
            <button className="btn" onClick={props.getNews}>{props.title}</button>  
        </div>
    )    
}

export default Button;