import React from 'react';

class Eventbinding extends React.Component{
    constructor(props) {
        super(props)
        
        this.state = {
             message : "HELLO"
        }
    this.clickHandler = this.clickHandler.bind(this);
}
clickHandler()
{
    this.setState
    ({
            message: "Goodbye"
     })   

}

render(){

    return (
        <div>
            <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>CLICK</button>
            </div>   
    )
}
}

export default Eventbinding
