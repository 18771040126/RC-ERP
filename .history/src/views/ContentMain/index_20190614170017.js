import React,{ Component } from 'react' ;
import { Switch, Redirect} from 'react-router-dom';

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
          <BrowserRouter>
              <Switch>
                    <AuthRouter exact path="/home" component={ Home } />
                    <AuthRouter exact path="/Linping" component={ Linping } />
                    <AuthRouter exact path="/Xihu" component={ Xihu } />
                    <AuthRouter exact path="/Xiasha" component={ Xiasha } />
                    <AuthRouter exact path="/Binjiang" component={ Binjiang } />
                    <AuthRouter exact path="/Input" component={ Input } />
                    <AuthRouter exact path="/Button" component={ Button } />
                    <AuthRouter exact path="/Radio" component={ Radio } />
                </Switch>
            </BrowserRouter>
      )
    }
}