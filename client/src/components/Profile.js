import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom';
import { getMyMessages } from '../services/message';

import './Profile.css'
import { Input ,Header, Grid ,Button, Card, Icon } from 'semantic-ui-react'

import { API_ROOT } from '../services/url';

import jwtDecode from 'jwt-decode'

const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      user: {
        profile_pic: ''
      },
      redirectToAuth: false
    }
    this.logOut = this.logOut.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleLinkChange = this.handleLinkChange.bind(this);
  }
  async componentDidMount() {
    console.log(jwtDecode(localStorage.getItem('token')).sub);
    // const messages = await getMyMessages();
    // this.setState({
    //   messages
    // })
  }
  logOut(e) {
    localStorage.removeItem('token');
    this.setState({
      redirectToAuth: true
    });
  }

  //handle update. Initially to update the picture
  handleLinkChange(e){
    const {name, value} = e.target
    this.setState(prevState => (
      {
        user : {
          ...prevState.user,
          [name]: value
        }
      }
    ))
  }

  async handleUpdate(e){
    const pic = await axios.put(`${API_ROOT}/users/${jwtDecode(localStorage.getItem('token')).sub}`, this.state.user)
    console.log(pic);
  }

  render() {
    if (this.state.redirectToAuth || !localStorage.getItem('token')) {
      return (<Redirect to="/auth" />)
    }
    return (
      <div>
        <h2>Logged in, hello</h2>
        <Button onClick={this.logOut}>Log Out</Button>
        <Grid className="UserInfo" centered stackable>
          <Grid.Row centered columns={4} >
            <Grid.Column>
              <Card
                // image='/images/avatar/large/elliot.jpg'
                header='Ester Vojkollari'
                meta='Friend'
                description='Ester is a very nice person. Nice person that does nice things. '
                extra={extra}
              />
            </Grid.Column>
            <Grid.Column>
              <Header as='h4'>Update your profile pic</Header>
              <Input onChange={this.handleLinkChange}
                     value={this.state.user.profile_pic}
                     label='URL'
                     name="profile_pic"
                     placeholder='profile-pic.com' />
              <br/>
              <br/>
              <Button onClick={this.handleUpdate}>Update</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <ul>
        {this.state.messages.map(msg => (
          <div key={msg.id}>
            <p>{msg.content}</p>
          </div>
        ))}
        </ul>
      </div>
    )
  }
}


export default Profile;
