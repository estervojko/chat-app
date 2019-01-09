import React, { Component } from 'react'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

import { Container, Segment, Grid, List } from 'semantic-ui-react'


import { ActionCable } from 'react-actioncable-provider';


class Chatroom extends Component{
  render(){
    return(
      <div>
        <Container>
          <h2>Welcome to the chatroom</h2>
          <Grid>
            <Grid.Row>
              <Grid.Column width={4} stretched>
                <Segment raised>
                  <List animated verticalAlign='middle'>
                    {this.props.chatrooms.map(room => (
                      <List.Item>
                        <List.Content>
                          <List.Header key={room.id} onClick={() => {this.props.loadChatMessages(room.id)}}>{room.title}</List.Header>
                        </List.Content>
                      </List.Item>
                    ))}
                  </List>
                </Segment>
              </Grid.Column>
              <Grid.Column width={12}>
                <Segment raised>
                  <MessageList messages={this.props.messages}/>
                  <ActionCable channel={{channel: "MessagesChannel"}}
                               onReceived={this.props.handleReceivedMessage}/>
                  <MessageForm handleMessageChange={this.props.handleMessageChange}
                               message={this.props.message}
                               handleMessageSubmit={this.props.handleMessageSubmit}/>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default Chatroom;
