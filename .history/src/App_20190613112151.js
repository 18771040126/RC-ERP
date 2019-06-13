import React,{Component} from 'react';
import {Route,Switch} from 'react-router-dom'
import Login from './Login/Index'
import Home from './Login/Index'


export default class App extends Component {
    render (){
        return (
            <div>
                <Switch>
                    <Route exact  path='/' component={} />
                    <Route path='/Login' />>
                </Switch>
            </div>
        )
    }
};
