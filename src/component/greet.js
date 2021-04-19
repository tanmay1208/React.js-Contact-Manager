import React from 'react';


const Greeting = () => ( <h1> Hello Tanmay </h1>)

export const Greet = (props) => {
    console.log(props)
return <h1> hELLO mAN + {props.name} </h1>
}
export const Name = () => <h1> my name </h1>


export default Greeting
