import React,{ Component} from 'react';
import {Switch, Route } from 'react-router-dom'
import AuthRouter from '../components/AuthRouter/AuthRouter'
import Login from './Login/Index'
import Home from './Home/Index'


 class Routers extends Component {
     render (){
        return (
            <Switch>
                <Route path='/login' component={Login}/>
                <AuthRouter path='/' component={Home}/>
            </Switch>
        )
     }
 }

 export default Routers