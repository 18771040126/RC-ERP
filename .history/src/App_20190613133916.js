import React,{Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from './views/Login/Index'


export default class App extends Component {
    render (){
        return (
            <div>
                <Switch>
                    <Route path='/' exact component={Login}/>
                </Switch>
            </div>
        )
    }
};
