import React from 'react'

export function FunctionClick(){
    
    function clickHandler()
    {
        console.log("Button clicked")
    }
    return (
         <div>
            <button onClick = {clickHandler}>CLICK</button>
        </div>
    );
}

export class Classclick extends React.Component{
clickHandle(){
    console.log("clicked tghe button class")

}
    render() {
return(

    <div>
        <button onClick = {this.clickHandle}>Click Me </button>
    </div>
);
}

}
