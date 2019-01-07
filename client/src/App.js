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
      },
      messages: []
    }

    this.handleMessageChange = this.handleMessageChange.bind(this)
    this.handleMessageSubmit = this.handleMessageSubmit.bind(this)
    this.handleReceivedMessage = this.handleReceivedMessage.bind(this)
  }

  async componentDidMount(){
    const msgs = await axios.get(`${API_ROOT}/messages`)
    console.log(msgs.data);
    this.setState({
      messages: msgs.data
    })
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
  async handleMessageSubmit(e){
    e.preventDefault();
    const msg = await axios.post(`/api/messages`,
      { message: this.state.message},
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}`}})
    console.log(msg.data)
  }

  //handle broadcasted message
  handleReceivedMessage(response){
    console.log("what", response)
    this.setState((prevState) => (
      {
        messages: [...prevState.messages, response]
      })
    )
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" render={() => (<Chatroom handleMessageChange={this.handleMessageChange}
                                                         message={this.state.message}
                                                         messages={this.state.messages}
                                                         handleMessageSubmit={this.handleMessageSubmit}
                                                         handleReceivedMessage={this.handleReceivedMessage}/>)}/>
          <Route path="/auth" component={AuthForms}/>
          <Route path="/profile" component={Profile} />
        </div>
      </Router>
        );
  }
}

export default App;
