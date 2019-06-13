import React,{Component} from 'react';
import {Route,Switch} from 'react-router-dom'
import Login from './views/Login/Index'
import Home from './views/Home/Index'


export default class App extends Component {
    render (){
        return (
            <div>
                <Switch>
                    <PrivateRoute exact  path='/' component={Home} />
                    <Route path='/Login' component={Login}/>
                </Switch>
            </div>
        )
    }
};
