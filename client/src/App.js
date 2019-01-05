import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

async function getPosts() {
  const resp = await axios.get('/api/users');
  console.log(resp.data);
}

getPosts();
class App extends Component {
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
