import React, { Component } from 'react';
import './MessageList.css'

import { Icon, Comment} from 'semantic-ui-react'

export default class MessageList extends Component{
  constructor(props){
    super()
  }

  render(){
    return (
      <div>
        <h4>This is the message list</h4>
          <Comment.Group className="MessageSection">
            {this.props.messages.map(msg => (
              <Comment key={msg.id}>
                {/* <Comment.Avatar as='a' src='/whwhwhw/joe.jpg' /> */}
                <Comment.Content>
                  <Comment.Author as='a'>
                    {msg.user.name}
                  </Comment.Author>
                  <Comment.Metadata>
                    <div>AM 8:54</div>
                  </Comment.Metadata>
                  <Comment.Text>{msg.content}</Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>
            ))}
          </Comment.Group>
      </div>
    )
  }
}
