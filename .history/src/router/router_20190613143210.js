import React,{ Component} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AuthRouter from '../components/AuthRouter/AuthRouter'
import Login from '../views/Login/Index'
import Home from '../views/Home/Index'
import App from './App'


 class Routers extends Component {
     render (){
         return (
            <Router>
                <App>
                    <Switch>
                        <Route path='/' exact component={Login}/>
                        <Route path='/login' exact component={Login}/>
                        <AuthRouter path='/home' exact component={Home}/>
                    </Switch>
                </App>
            </Router>
         )
     }
 }

 export default Routers