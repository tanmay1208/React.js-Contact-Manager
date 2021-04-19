import React from 'react'

class Pure extends React.PureComponent
{

    render()
    {
        console.log("Pure comp")
        return (

            <div>
                 Purecomponents {this.props.name}

            </div>
        );
    }

}

export default Pure