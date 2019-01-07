import React, { Component } from 'react';

export default class MessageList extends Component{
  constructor(props){
    super()
  }

  render(){
    return (
      <div>
        <h4>This is the message list</h4>
        {this.props.messages.map(msg => (
          <p key={msg.id}>{msg.content}</p>
        ))}
      </div>
    )
  }
}
