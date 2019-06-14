import React,{ Component } from 'react' ;
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Home from '../../components/Home/index'
// import AuthRouter from '../../components/AuthRouter/AuthRouter'
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
                    <Route exact path="/home" component={ Home } />
                    <Route exact path="/Linping" component={ Linping } />
                    <Route exact path="/Xihu" component={ Xihu } />
                    <Route exact path="/Xiasha" component={ Xiasha } />
                    <Route exact path="/Binjiang" component={ Binjiang } />
                    <Route exact path="/Input" component={ Input } />
                    <Route exact path="/Button" component={ Button } />
                    <Route exact path="/Radio" component={ Radio } />
                </Switch>
            </BrowserRouter>
      )
    }
}