import React, { Component } from 'react';

export default class MessageForm extends Component{
  constructor(props){
    super();
  }

  render(){
    return (
      <div>
        <form onSubmit={this.props.handleMessageSubmit}>
          <h4>This is the message form</h4>
          <textarea onChange={this.props.handleMessageChange}
                    name="content"
                    value={this.props.message.content}/>
          <br></br>
          <button type="submit">Post</button>
        </form>
      </div>
    )
  }
}
