import React,{ Component} from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
// import AuthRouter from '../components/AuthRouter/AuthRouter'
import Login from './Login/Index'
import Home from './Home/Index'
import App from '../App'


 class Routers extends Component {
     render (){
         return (
                <Switch>
                    <Route path='/' exact component={Login}/>
                    <Route path='/home' exact component={Home}/>
                </Switch>
         )
     }
 }

 export default Routers