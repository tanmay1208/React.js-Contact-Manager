import React , {Component} from 'react';
import axios from 'axios';

const Context = React.createContext();
const reducer = (state, action) => {
    switch(action.type)
    {
            case 'DELETE_CONTACT':
                return {

                    ...state,
                    contacts: state.contacts.filter(contact =>
                        contact.id !== action.payload)
                    };
            case "ADD_CONTACT":
                return{

                    ...state,
                    contacts: [action.payload, ...state.contacts]

                };
                case "UPDATE_CONTACT":
                    return{
                        ...state,
                        contacts: state.contacts.map(contact=> contact.id === action.payload.id ? (contact = action.payload) : contact)
                    }
    
           default:
                        return state;
            }
}

export class Provider extends Component 
{
    
        
        state = {
             contacts: [],
            //     {
            //         id: 1,
            //         name : 'Tanmay khare',
            //         email: ' kjwedkj@gmail.com',
            //         phone: ' 34523545345'
            //     },
            //     {

            //             id:2,
            //             name:'GDSFG',
            //             email: 'kjekfefj@gmail.com ',
            //             phone:'4545435345345'
            //     }
            // ],
            dispatch : action => {
                this.setState(state => reducer(state, action))
            }
            };
    // componentDidMount(){

    //     axios.get
    //     ("https://jsonplaceholder.typicode.com/users ") 
    //     .then(res => this.setState({contacts: res.data}))
    
// }
// using async and wait to get request 
async componentDidMount()
{
    const res = await axios
    .get("https://jsonplaceholder.typicode.com/users");
this.setState({contacts: res.data})

}
        
    
    render()
    {
        return (
            <Context.Provider value = {this.state}>
{/* value contains the whole state object  */}
                {this.props.children}
            </Context.Provider>

        
        );
    }

}

export const Consumer = Context.Consumer;