import React,{Component} from 'react';
import { Switch, Route } from 'react-router-dom'


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
