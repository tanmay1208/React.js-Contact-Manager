import React, { Component } from 'react';
import { Consumer } from '../../Context';
import {v1 as uuid } from "uuid";
import Textinputgroup from '../layout/Textinputgroup'
import axios from 'axios';
class AddContact extends Component
{
    state = {
        name :"",
        email : "",
        phone : "",
        errors: {}
 
    };

     onChange = (e) => this.setState({[e.target.name]:e.target.value});
onSubmit = (dispatch, e) =>
{
    e.preventDefault();
    // console.log(this.state);
const { name, email, phone} = this.state;
if(name === "")
{
    this.setState({errors : {name:"Name is required"}});
    return;
}
if(email === "")
{
    this.setState({errors: {email: "email is required"}});
return;
}
if(phone === "")
{
    this.setState({errors: {phone: "phone is required"}});
return;
}

const newContact = {
    
    name,
    email,
    phone


}

axios.post
("https://jsonplaceholder.typicode.com/users",newContact)
.then (res => dispatch({type: "ADD_CONTACT", payload:res.data}));
// dispatch({type: "ADD_CONTACT", payload:newContact});
// clear state
this.setState({
name: "",
email:"",
phone:"",
errors: {}

})
this.props.history.push('/');

};

    render () {
        const {name, email, phone,errors} = this.state;
        
        return ( 
            <Consumer>
                {value =>{
                    const { dispatch } = value;
                    return(

                        <div className = "card mb-3">
                <div className = "card-header">
                    ADD contact
                </div>
                <div className = " card-body">
                    <form onSubmit = {this.onSubmit.bind(this, dispatch)}>
                       <Textinputgroup
                       label = "Name"
                       name = "name"
                       placeholder = "Enetr Name"
                       value = {name}
                       onChange = {this.onChange}
                       error = {errors.name}
                       />
                         <Textinputgroup
                       label = "email"
                       name = "email"
                       placeholder = "Enetr Email"
                       value = {email}
                       onChange = {this.onChange}
                       error = {errors.email}
                       
                       />
                         <Textinputgroup
                       label = "phone"
                       name = "phone"
                       placeholder = "Enetr Phone No"
                       value = {phone}
                       onChange = {this.onChange}
                       error = {errors.phone}
                       />
                       
                        <input
                         type ="submit"
                         value= "Add Contact"
                         className = "btn btn-light btn-black"
                         />
                    </form>
                </div>
  
                
            </div>
                    );
                
                }}
</Consumer>
            
        );
    }

}

export default  AddContact;