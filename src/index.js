import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import Analytics from 'react-router-ga';


ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Analytics id="UA-206870903-1">
        <App />
      </Analytics>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
