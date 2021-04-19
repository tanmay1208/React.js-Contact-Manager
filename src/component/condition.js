import React from 'react'
import Person from './condition1';

function Namelist()
{
 const names = ['Bruce' , 'diana' , 'clark']
// const NameL = names.map(name => <h2> {name} </h2>)
const persons = [
    {
        id: 1,
        name : "tganmay ",
        age: " 76",
        skil : "coder"

    },

    {
        id: 2,
        name : "raama  ",
        age: " 78",
        skil : "data analyst"

    }

 
]
const NameL = persons.map(person =>( 
    <Person key = {person.id} person = {person}></Person>
    ))

return(

    <div> {NameL} </div>
);
}

export default Namelist 