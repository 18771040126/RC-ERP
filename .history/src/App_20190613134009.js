import React,{Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import AuthRouter from './router/AuthRouter'
import Login from './views/Login/Index'
import Home from './views/Home/Index'


export default class App extends Component {
    render (){
        return (
            <div>
                <Switch>
                    <Route path='/' exact component={Login}/>
                    <Route path='/home' exact component={Home}/>
                </Switch>
            </div>
        )
    }
};
