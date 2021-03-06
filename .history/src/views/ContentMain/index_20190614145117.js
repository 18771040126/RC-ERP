import React,{ Component } from 'react' ;
import { Switch, Route} from 'react-router-dom';

// import Home from '../../components/Home/index'
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
                  <Route path="/Linping" component={ Linping } />
                  <Route path="/Xihu" component={ Xihu } />
                  <Route path="/Xiasha" component={ Xiasha } />
                  <Route path="/Binjiang" component={ Binjiang } />
                  <Route path="/Input" component={ Input } />
                  <Route path="/Button" component={ Button } />
                  <Route path="/Radio" component={ Radio } />
              </Switch>
          </div>
      )
    }
}