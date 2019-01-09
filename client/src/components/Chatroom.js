import React, { Component } from 'react'
import MessageList from './MessageList'
import MessageForm from './MessageForm'
import './Chatroom.css'

import { Header, Container, Segment, Grid, List } from 'semantic-ui-react'


import { ActionCable } from 'react-actioncable-provider';


class Chatroom extends Component{
  render(){
    return(
        <Container>
          <Header as='h1'>Welcome to the chatroom</Header>
          <Grid className="Grid">
            <Grid.Row >
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
              <Grid.Column width={12} stretched padded>
                <Segment raised>
                  <Grid>
                    <Grid.Row className="MessageList">
                      <MessageList messages={this.props.messages}/>
                      <ActionCable channel={{channel: "MessagesChannel"}}
                                   onReceived={this.props.handleReceivedMessage}/>
                    </Grid.Row>
                    <Grid.Row className="MessageForm">
                        <Grid.Column width="16">
                          <MessageForm handleMessageChange={this.props.handleMessageChange}
                                       message={this.props.message}
                                       handleMessageSubmit={this.props.handleMessageSubmit}/>
                        </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
    )
  }
}

export default Chatroom;
