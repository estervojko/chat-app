import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import 'semantic-ui-css/semantic.css'

import { ActionCableProvider } from 'react-actioncable-provider';
import { API_WS_ROOT } from './services/url';

ReactDOM.render(
  <ActionCableProvider url={API_WS_ROOT}>
    <App />
  </ActionCableProvider>,
  document.getElementById('root')
);
