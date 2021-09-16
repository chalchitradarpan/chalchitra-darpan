import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import smoothscroll from 'smoothscroll-polyfill';
// eslint-disable-next-line no-unused-vars
import smoothscrollAnchorPolyfill from 'smoothscroll-anchor-polyfill';

smoothscroll.polyfill();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
