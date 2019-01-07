import React, { Component } from 'react'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

import { ActionCable } from 'react-actioncable-provider';


class Chatroom extends Component{
  render(){
    return(
      <div>
        <h2>Welcome to the chatroom</h2>
        <MessageList messages={this.props.messages}/>
        <ActionCable channel={{channel: "MessagesChannel"}}
                     onReceived={this.props.handleReceivedMessage}/>
        <MessageForm handleMessageChange={this.props.handleMessageChange}
                     message={this.props.message}
                     handleMessageSubmit={this.props.handleMessageSubmit}/>
      </div>
    )
  }
}

export default Chatroom;
