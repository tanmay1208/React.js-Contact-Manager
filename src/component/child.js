import React from 'react'

function Childprop(props)
{
    return (

        <div>
            <button onClick = {()=> props.greet("launda")}>Greet</button>
            {/* <button onClick = { props.greet("launda")}>Greet</button> */}
        </div>
    );
}


export default Childprop