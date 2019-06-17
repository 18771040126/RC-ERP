import React,{ Component } from 'react' ;
import {Route, Switch,Redirect} from 'react-router-dom';

import { BrowserRouter as Router } from 'react-router-dom'
// import AuthRouter from '../../components/AuthRouter/AuthRouter'
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
                <Route exact path="/home" component={Home} />
                <Route exact path="/store/linping" component={Linping} />
                <Route exact path="/store/xihu" component={Xihu} />
                <Route exact path="/store/xiasha" component={Xiasha} />
                <Route exact path="/store/binjiang" component={Binjiang} />
                <Route exact path="/input" component={Input} />
                <Route exact path="/button" component={Button} />
                <Route exact path="/radio" component={Radio} />
                <Redirect exact from='/' to='/home'/>
            </Switch>
          </Router>
      )
    }
}