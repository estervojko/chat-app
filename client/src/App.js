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
      messages: [],
      chatrooms: [],
      activeRoom: 1
    }

    this.handleMessageChange = this.handleMessageChange.bind(this)
    this.handleMessageSubmit = this.handleMessageSubmit.bind(this)
    this.handleReceivedMessage = this.handleReceivedMessage.bind(this)
    this.loadChatMessages = this.loadChatMessages.bind(this)
  }

  async componentDidMount(){
    const msgs = await axios.get(`${API_ROOT}/chatrooms/${this.state.activeRoom}/messages`)
    const chats = await axios.get(`${API_ROOT}/chatrooms`)
    console.log(msgs.data);
    this.setState({
      messages: msgs.data,
      chatrooms: chats.data
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
    const msg = await axios.post(`/api/chatrooms/${this.state.activeRoom}/messages`,
      { message:
        {
          content: this.state.message.content,
          chatroom_id: this.state.activeRoom
        }
      },
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}`}})
    console.log(msg.data)
  }

  //handle broadcasted message
  handleReceivedMessage(response){
    if( this.state.activeRoom === response.chatroom_id){
      this.setState((prevState) => (
        {
          messages: [...prevState.messages, response]
        })
      )
    }
  }

  //load messages of the chatroom sent from id
  async loadChatMessages(id){
    console.log("what")
    const chatMsgs = await axios.get(`/api/chatrooms/${id}/messages`)
    console.log(chatMsgs.data)
    this.setState(
      {
        messages: chatMsgs.data,
        activeRoom: id
      }
    )
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" render={() => (<Chatroom loadChatMessages={this.loadChatMessages}
                                                         chatrooms={this.state.chatrooms}
                                                         handleMessageChange={this.handleMessageChange}
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
