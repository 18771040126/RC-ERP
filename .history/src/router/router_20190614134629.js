import React,{ Component} from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import AuthRouter from '../components/AuthRouter/AuthRouter'
import Login from './Login/Index'
import Home from './Home/Index'
import App from '../App'


 class Routers extends Component {
     render (){
         return (
             <BrowserRouter>
                    <Switch>
                        <Route path='/login' component={Login}/>
                        <AuthRouter exact path='/' component={Home}/>
                    </Switch>
            </BrowserRouter>
         )
     }
 }

 export default Routers