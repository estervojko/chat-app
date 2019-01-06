import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import AuthForms from './components/AuthForms';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Chatroom from './components/Chatroom';

import { API_ROOT } from './services/url';

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

      },
      message : {
        content: ''
      }
    }

    this.handleMessageChange = this.handleMessageChange.bind(this)
    this.handleMessageSubmit = this.handleMessageSubmit.bind(this)
  }

  //handle login form input fields
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

  //handle the register input
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

  //handle Message form change
  handleMessageChange(e){
    const {value} = e.target
    this.setState({
      message: {
        content : value
      }
    })
  }

  //handle submitted message
  // handleMessageSubmit(e){
  //   e.preventDefault();
  //   const msg = axios.post(
  //     {
  //       baseURL: `${API_ROOT}/messages`,
  //
  //     }{ message: this.state.message })
  //   console.log(msg)
  // }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" render={() => (<Chatroom handleMessageChange={this.handleMessageChange}
                                                         message={this.state.message}
                                                         handleMessageSubmit={this.handleMessageSubmit}/>)}/>
          <Route path="/auth" component={AuthForms}/>
          <Route path="/profile" component={Profile} />
        </div>
      </Router>
        );
  }
}

export default App;
