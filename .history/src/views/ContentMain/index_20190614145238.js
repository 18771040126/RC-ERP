import React,{ Component } from 'react' ;
import { Switch, Route} from 'react-router-dom';

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
          <div>
              <Switch>
                  <AuthRouter path="/home" component={ Home } />
                  <AuthRouter path="/Linping" component={ Linping } />
                  <AuthRouter path="/Xihu" component={ Xihu } />
                  <AuthRouter path="/Xiasha" component={ Xiasha } />
                  <AuthRouter path="/Binjiang" component={ Binjiang } />
                  <AuthRouter path="/Input" component={ Input } />
                  <AuthRouter path="/Button" component={ Button } />
                  <AuthRouter path="/Radio" component={ Radio } />
              </Switch>
          </div>
      )
    }
}