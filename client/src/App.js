import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import AuthForms from './components/AuthForms';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Chatroom from './components/Chatroom';

console.log(Router);

class App extends Component {
  constructor(){
    super();
    this.state = {
      login : {
        email: '',
        password: ''
      },
      register: {
        email: '',
        password: '',
        password_confirmation: ''

      }
    }
  }

  handleChange(e){
    const {name, value} = e.target
    this.setState(prevState => (
      {
        login: {
          ...prevState.login,
          [name] : value
        }
      }
    ))
  }

  handleRegisterChange(e){
    const {name, value} = e.target
    this.setState(prevState => (
      {
        register: {
          ...prevState.register,
          [name] : value
        }
      }
    ))
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Chatroom} />
          <Route path="/auth" component={AuthForms}/>
          <Route path="/profile" component={Profile} />
        </div>
      </Router>
        );
  }
}

export default App;
