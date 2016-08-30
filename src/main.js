import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/app';

global.document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    React.createElement(App),
    global.document.getElementById('app')
  );
});
