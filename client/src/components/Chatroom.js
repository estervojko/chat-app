import React, { Component } from 'react'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class Chatroom extends Component{
  render(){
    return(
      <div>
        <h2>Welcome to the chatroom</h2>
        <MessageList messages={this.props.messages}/>
        <MessageForm handleMessageChange={this.props.handleMessageChange}
                     message={this.props.message}
                     handleMessageSubmit={this.props.handleMessageSubmit}/>
      </div>
    )
  }
}

export default Chatroom;
