import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getMyMessages } from '../services/message';


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      redirectToAuth: false
    }
    this.logOut = this.logOut.bind(this);
  }
  async componentDidMount() {
    const messages = await getMyMessages();
    this.setState({
      messages
    })
  }
  logOut(e) {
    localStorage.removeItem('token');
    this.setState({
      redirectToAuth: true
    });
  }

  render() {
    if (this.state.redirectToAuth || !localStorage.getItem('token')) {
      return (<Redirect to="/auth" />)
    }
    return (
      <div>
        <h2>Logged in, hello</h2>
        <button onClick={this.logOut}>Log Out</button>
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
