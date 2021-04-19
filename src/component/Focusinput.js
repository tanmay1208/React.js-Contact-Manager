import React from 'react'
import Input from './input'
class Focus extends React.Component
{
    constructor(props)
    {
        super(props)
            this.componentref  = React.createRef()
     
       }
clickHandler = () =>{
    this.componentref.current.focusInput()
    
}
render(){
    
        return(
        <div>
                
            <Input/>
            <button onClick = {this.clickHandler} > Focus</button>
            </div>

        );
        console.log(this.componentref.current)
    }

}

export default Focus