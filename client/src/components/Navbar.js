import React from 'react';

import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <ul>
      <li>
        <Link to='/'>Chatroom</Link>
      </li>
      <li>
        <Link to='/posts'>Post</Link>
      </li>
      <li>
        <Link to='/auth'>Log In / Register</Link>
      </li>
      <li>
        <Link to='/profile'>Profile</Link>
      </li>
    </ul>
  );
}

export default Navbar;
