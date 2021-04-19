import React, { PureComponent } from 'react'
import Pure from './purecomponent'
import Regularcomponent from './regularcomponent'

class Parentcomponent extends React.Component
{
    constructor(props)
    {
        super(props)
        
        this.state= 
        {
            name:"Tanmay"
        }
    }

    componentDidMount()
        {

            setInterval(()  => {
                this.setState({
                    name: " Tanmay"
                })
            }, 2000)
        }
    
    render()
    {
        console.log("parent comp")
        return(
                <div>
                    Parent Component
                    <Regularcomponent name ={this.state.name} />
                     <Pure name = {this.state.name}/>   
                </div>
        );
    }
    
}

export default Parentcomponent

