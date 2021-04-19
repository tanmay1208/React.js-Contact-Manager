import React from  'react'

import Childprop from './component/child'

class Parent extends React.Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            parentName : "RAMA"
        }
        this.greetParent = this.greetParent.bind(this)
    }
 greetParent(childname)
     {
         alert(`Hello ${this.state.parentName} from ${childname}`);
     }
 

render() {
    return (
        <div>
            <Childprop greet = {this.greetParent} />
        </div>
    )
    
    }
}

export default Parent;