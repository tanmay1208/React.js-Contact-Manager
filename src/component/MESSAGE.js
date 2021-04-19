import React from 'react';

class Message  extends React.Component
{
    constructor()
    {
        super();
        this.state = { 
            message : " welcome Visitor"
        }
    }
    changemessage()
    {
        this.setState({

            message: " thank you for subscribing"
        })
    }
render()
{
   return (
       <div>
        <h1>{this.state.message}</h1>
    <button onClick = { () => this.changemessage}> Subscribe </button>
    </div>
   );
}

}

export default Message  
