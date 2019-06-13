import React,{ Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import AuthRouter from '../components/AuthRouter/AuthRouter'
import Login from '../views/Login/Index'
import Home from '../views/Home/Index'


 class Routers extends Component {
     render (){
         return (
            <Switch>
                <Route path='/' exact component={Login}/>
                <Route path='/login' exact component={Login}/>
                <AuthRouter path='/home' exact component={Home}/>
            </Switch>
         )
     }
 }

 export default Routers