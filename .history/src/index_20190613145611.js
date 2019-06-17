import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Index from './views/Home/Index'
import Login from './views/Login/Index'
import Routers from './router/router'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <Routers />
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();