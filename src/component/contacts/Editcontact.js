import React, { Component } from 'react';
import { Consumer } from '../../Context';
import {v1 as uuid } from "uuid";
import Textinputgroup from '../layout/Textinputgroup'
import axios from 'axios';
class EditContact extends Component
{
    state = {
        name :"",
        email : "",
        phone : "",
        errors: {}
 
    };

    async componentDidMount()
    {
        const {id} = this.props.match.params ;
        const res = await axios .get(`https://jsonplaceholder.typicode.com/users/${id}`);
    const contact = res.data
    
    this.setState({

        name : contact.name,
        email: contact.email,
        phone: contact.phone
    });
    }

 onChange = (e) => this.setState({[e.target.name]:e.target.value});

 onSubmit = async(dispatch, e) =>{
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
//new contact object
const updatecontact = {
    name,
    email,
    phone
};


const { id} = this.props.match.params;

const res =  await axios.put(
    `https://jsonplaceholder.typicode.com/users/${id}`,updatecontact);

dispatch({type:"UPDATE_CONTACT", payload:res.data});

//clear state
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
                    Edit contact
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
                         value= "Update Contact"
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

export default  EditContact;