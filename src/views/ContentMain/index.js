import React,{ Component } from 'react' ;
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import AuthRouter from '../../components/AuthRouter/AuthRouter'
import Home from '../../components/home/index'
import Linping from '../../components/linping_store/index'
import Xihu from '../../components/xihu_store/index'
import Xiasha from '../../components/xiasha_store/index'
import Binjiang from '../../components/binjiang_store/index'
import Ceo from '../../components/ceo_cluster/index'
import Cfo from '../../components/cfo_cluster/index'
import Cuo from '../../components/cuo_cluster/index'
import Cbo from '../../components/cbo_cluster/index'
import Input from '../../components/input/index'
import Button from '../../components/button/index'
import Radio from '../../components/radio/index'


export default class ContentMain extends Component {
    render () {
        return (
              <Switch>
                    <AuthRouter path="/store/linping" component={Linping} />
                    <AuthRouter path="/store/xihu" component={Xihu} />
                    <AuthRouter path="/store/xiasha" component={Xiasha} />
                    <AuthRouter path="/store/binjiang" component={Binjiang} />
                    <AuthRouter path="/cluster/ceo" component={Ceo} />
                    <AuthRouter path="/cluster/cfo" component={Cfo} />
                    <AuthRouter path="/cluster/cuo" component={Cuo} />
                    <AuthRouter path="/cluster/cbo" component={Cbo} />
                    <AuthRouter path="/input" component={Input} />
                    <AuthRouter path="/button" component={Button} />
                    <AuthRouter path="/radio" component={Radio} />
                    <AuthRouter path="/" component={Home} />
              </Switch>
          )
      }
}