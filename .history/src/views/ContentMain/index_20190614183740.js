import React,{ Component } from 'react' ;
import {Route, Switch,Redirect} from 'react-router-dom';
import Home from '../../components/Home/index'
import AuthRouter from '../../components/AuthRouter/AuthRouter'
import Linping from '../../components/linping_store/index'
import Xihu from '../../components/xihu_store/index'
import Xiasha from '../../components/xiasha_store/index'
import Binjiang from '../../components/binjiang_store/index'
import Input from '../../components/Input/index'
import Button from '../../components/Button/index'
import Radio from '../../components/Radio/index'


export default class ContentMain extends Component {
    render () {
      return ( 
            <Switch>
                <AuthRouter exact path="/home" component={Home} />
                <AuthRouter exact path="/home/store/Linping" component={Linping} />
                <AuthRouter exact path="/home/store/Xihu" component={ Xihu } />
                <AuthRouter exact path="/home/store/Xiasha" component={ Xiasha } />
                <AuthRouter exact path="/home/store/Binjiang" component={ Binjiang } />
                <AuthRouter exact path="/home/Input" component={ Input } />
                <AuthRouter exact path="/home/Button" component={ Button } />
                <AuthRouter exact path="/home/Radio" component={ Radio } />
                <Redirect exact from='/' to='/home'/>
            </Switch>
      )
    }
}