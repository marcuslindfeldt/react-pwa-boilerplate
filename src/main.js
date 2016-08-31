import React from 'react';
import { render } from 'react-dom';
import App from './app';

// Stylesheets
import './styles/style.css';

global.document.addEventListener('DOMContentLoaded', () => {
  render(
    React.createElement(App),
    global.document.getElementById('app')
  );
});
