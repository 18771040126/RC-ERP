import React,{ Component } from 'react' ;
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import AuthRouter from '../../components/AuthRouter/AuthRouter'
import Home from '../../components/home/index'
import Linping from '../../components/linping_store/index'
import Xihu from '../../components/xihu_store/index'
import Xiasha from '../../components/xiasha_store/index'
import Binjiang from '../../components/binjiang_store/index'
import Input from '../../components/input/index'
import Button from '../../components/button/index'
import Radio from '../../components/radio/index'


export default class ContentMain extends Component {
    render () {
        return ( 
            <Router>
                <Switch>
                    <AuthRouter path="/home" component={Home} />
                    <AuthRouter path="/store/linping" component={Linping} />
                    <AuthRouter path="/store/xihu" component={Xihu} />
                    <AuthRouter path="/store/xiasha" component={Xiasha} />
                    <AuthRouter path="/store/binjiang" component={Binjiang} />
                    <AuthRouter path="/input" component={Input} />
                    <AuthRouter path="/button" component={Button} />
                    <AuthRouter path="/radio" component={Radio} />
                </Switch>
              </Router>
          )
      }
}