import React,{ Component } from 'react' ;
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

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
                    <Route path="/home" component={Home} />
                    <Route path="/store/linping" component={Linping} />
                    <Route path="/store/xihu" component={Xihu} />
                    <Route path="/store/xiasha" component={Xiasha} />
                    <Route path="/store/binjiang" component={Binjiang} />
                    <Route path="/input" component={Input} />
                    <Route path="/button" component={Button} />
                    <Route path="/radio" component={Radio} />
                </Switch>
              </Router>
          )
      }
}