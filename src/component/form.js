import React from 'react';

class Form extends React.Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            username: '',
            Comment: ''          
        }
    }
    handleUsernameChange = event =>{
        this.setState({
            username: event.target.value
        })
    }

    handleComments = event =>{
        this.setState({
            Comment: event.target.value
        })
    }
    
    render()
    {
        
        return(
  
<form>
    <div>
        <label> Username</label>
        <input type = "text"
        value = {this.state.username}
        onChange = {this.handleUsernameChange}
        />
    </div>
    <div>
        <label>Comment</label>
        <textarea value = {this.state.Comment}
        onChange = {this.handleComments}>
        </textarea>
    </div>
        
</form>

        );
    }
}

export default Form