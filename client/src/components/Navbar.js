import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

function Navbar(props) {
  return (
    <Menu>
        <Menu.Item as={ Link } to='/'>Chatroom</Menu.Item>
        <Menu.Item as={ Link } to='/posts'>Post</Menu.Item>
        <Menu.Item as={ Link } to='/auth'>Log In / Register</Menu.Item>
        <Menu.Item as={ Link } to='/profile'>Profile</Menu.Item>
    </Menu>
  );
}

export default Navbar;
