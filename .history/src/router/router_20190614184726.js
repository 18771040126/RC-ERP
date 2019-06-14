import React,{ Component} from 'react';
import {Switch, Route } from 'react-router-dom'
import AuthRouter from '../components/AuthRouter/AuthRouter'
import Login from './Login/Index'
import Home from './Home/Index'
// import App from '../App'
import { BrowserRouter as Router } from 'react-router-dom'


 class Routers extends Component {
     render (){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Login}/>
                    <Route path='/login' component={Login}/>
                    <AuthRouter exact path='/home' component={Home}/>
                </Switch>
            </BrowserRouter>
        )
     }
 }

 export default Routers