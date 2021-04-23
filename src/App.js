import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greeting from "./component/greet";
import { Greet } from "./component/greet";
import Welcome from "./component/welcome";
import { Name } from "./component/greet";
import Message from "./component/MESSAGE";
import Counter from "./component/counter";
import { FunctionClick, Classclick } from "./component/clicik";
import Eventbinding from "./eventbind";
import Parent from "./parent";
import Namelist from "./component/condition";
import Css from "./component/Stylesheet";
import Inline from "./component/inline";
import Form from "./component/form";
import Parentcomponent from "./component/parentcomp";
import Ref from "./component/ref";
import Focus from "./component/Focusinput";
import Header from "./component/layout/Header";
import Contact from "./component/contacts/Contact";
import Contacts from "./component/contacts/Contacts";
import { Provider } from "./Context";
import About from "./component/layout/About";
import Editcontact from "./component/contacts/Editcontact"

import "bootstrap/dist/css/bootstrap.min.css";
import AddContact from "./component/contacts/Addcontacts";
import {HashRouter as Router , Route , Switch} from 'react-router-dom';
import Error from "./component/layout/Error";
import Test from "./component/test/test";

class App extends React.Component {
  render() {
    return (
      <Provider>
        <Router>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
           <Switch>
            <Route exact path = "/" component = {Contacts}/>
            <Route exact path = "/about" component = {About}/>
            {/* <Route exact path = "/contacts/add" component = {AddContact}/> */}
            <Route exact path = "/contacts/edit/:id" component = {Editcontact}/>
            <Route exact path = "/test" component = {Test}/>
            <Route component = {Error}/>
           
          </Switch>   
           {/* <AddContact /> 
           <Contacts /> */}
          </div>

          {/* <Focus/> */}
          {/* <Ref/> */}
          {/* <Parentcomponent/> */}
          {/* <Form/> */}
          {/* <Inline/> */}
          {/* <Css primary = {true}/> */}
          {/* <Namelist/> */}
          {/* <Parent/> */}
          {/* <Counter/> */}
          {/* <Greet name  = "bruce" /> */}
          {/* <Greet name =  " Wayne "/> */}
          {/* <Greeting/>  */}
          {/* <Name/> */}
          {/* <Welcome/> */}
          {/* <Message/>  */}
          {/* <Classclick/> */}
          {/* <FunctionClick/>  */}
          {/* <Eventbinding/>     */}
        </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
