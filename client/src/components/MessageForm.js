import React, { Component } from 'react';
import './MessageForm.css'

import {Form, Button} from 'semantic-ui-react'

export default class MessageForm extends Component{
  constructor(props){
    super();
  }

  render(){
    return (
      <div>
        <Form onSubmit={this.props.handleMessageSubmit}>
          <h4>This is the message form</h4>
          <Form.TextArea className="TextArea" onChange={this.props.handleMessageChange}
                    name="content"
                    value={this.props.message.content}/>
          <Button className="PostButton" type="submit" floated="right">Post</Button>
        </Form>
      </div>
    )
  }
}
