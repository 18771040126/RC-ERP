import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
// import Routers from './router/router'
import Login from './router/Login/Index'
// import Home from './router/Home/Index'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <BrowserRouter>
        <Login />
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

