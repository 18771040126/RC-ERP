import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import Home from './router/Home/Index'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    // <BrowserRouter>
    //     <Home />
    // </BrowserRouter>
    <Routers>

    </Routers>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

