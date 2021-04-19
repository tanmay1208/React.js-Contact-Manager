import React from 'react'

class Regularcomponent extends React.Component
{
    render()
    {
        console.log("Regular comp")
        return(
                <div>
                    Regular Component{this.props.name}
                </div>
        );

    }
}

export default Regularcomponent

