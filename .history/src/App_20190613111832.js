import React,{Component} from 'react';
import {Route,Switch} from 'react-router-dom'
import Login from './Login/Index'


export default class App extends Component {
    render (){
        return (
            <div>
                <Switch>
                    <Route path='/Login'>
                </Switch>
            </div>
        )
    }
};
