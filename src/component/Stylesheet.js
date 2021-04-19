import React from 'react'
import  './Stylesheet.css'


function Css(props)
{
    let className  = props.primary ? 'primary' : ' ';
    return(
        <div>
            <h1 className = {`${className}  front`}>Stylesheet </h1>
        </div>
    );
} 

export default Css