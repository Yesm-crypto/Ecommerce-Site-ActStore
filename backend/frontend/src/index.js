import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// We need to wrap our entire app with the Provider
// So that the store will be accessible to all the components
import store from './store';

import './index.css';
import App from './App';
import "./bootstrap.min.css";
import { HashRouter as Router } from 'react-router-dom'
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <Router>
    <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
