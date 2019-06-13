import React,{Component} from 'react';
// import { Switch, Route } from 'react-router-dom'
// import AuthRouter from './components/AuthRouter/AuthRouter'
// import Login from './views/Login/Index'
// import Home from './views/Home/Index'


export default class App extends Component {
    render (){
        return (
            <div className="App">
                {this.props.children}
            </div>
        )
    }
};
