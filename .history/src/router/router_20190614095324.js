import React,{ Component} from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './Login/Index'
import App from '../App'


 class Routers extends Component {
     render (){
         return (
            <BrowserRouter>
                <App>
                    <Switch>
                        <Route path='/' exact component={Login}/>
                        <Route path='/login' exact component={Login}/>
                    </Switch>
                </App>
            </BrowserRouter>
         )
     }
 }

 export default Routers