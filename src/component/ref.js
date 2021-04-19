import React from 'react'

class Ref extends React.Component
{
    constructor(props)
    {
        super(props)
        this.inutRef = React.createRef()

    }

    componentDidMount() {
     this.inputRef.current.focus()
        
    }

    clickHandler = () =>{
        alert(this.inputRef.current.value);
    }

    render() {
        
        return(
                <div>
                <input type = "text" ref = {this.inputRef}
                />    
                <button onClick = {this.clickHandler}>Click</button>
                 </div>
        );

    }
}

export default Ref

 