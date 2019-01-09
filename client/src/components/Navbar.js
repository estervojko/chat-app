import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

import { Redirect } from 'react-router-dom';

class Navbar extends Component{
  constructor(props){
    super()
    this.state = {
      loggedIn: !!(localStorage.getItem("token"))
    }
  }

  logOut(){
    console.log("loooogogogogo out");
    localStorage.removeItem("token");
    console.log(localStorage.getItem("token"));
    this.setState({
      loggedIn: false
    })
  }

  render(){
    return (
      <Menu>
          <Menu.Item as={ Link } to='/'>Chatroom</Menu.Item>
          {/* <Menu.Item as={ Link } to='/posts'>Post</Menu.Item> */}
          <Menu.Item as={ Link } to='/profile'>Profile</Menu.Item>
          {
            localStorage.getItem("token") ?
              <Menu.Item onClick={this.logOut} as={ Link } to='/auth'>Log Out</Menu.Item> :
            <Menu.Item as={ Link } to='/auth'>Log In</Menu.Item>
          }
      </Menu>
    );
  }
}


export default Navbar;
