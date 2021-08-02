// order to import: CSS, React, node, code, components, assets
// components
import 'bootstrap/dist/css/bootstrap.min.css';
// React
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// code
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
