import React,{ Component } from 'react' ;
import {Route} from 'react-router-dom';

import Home from '../../components/Home/index'
import Linping from '../../components/Home/index'
import Xihu from '../../components/Home/index'
import Xiasha from '../../components/Home/index'
import Binjiang from '../../components/Home/index'
import Input from '../../components/Input/index'
import Button from '../../components/Button/index'
import Radio from '../../components/Radio/index'

export default class ContentMain extends Component {
  render () {
    return (
          <div>
              <Route exact path="/" component={ Home } />
              <Route exact path="/Linping" component={ Linping } />
              <Route exact path="/Xihu" component={ Xihu } />
              <Route exact path="/Xiasha" component={ Xiasha } />
              <Route exact path="/Binjiang" component={ Binjiang } />
              <Route exact path="/Input" component={ Input } />
              <Route exact path="/Button" component={ Button } />
              <Route exact path="/Radio" component={ Radio } />
          </div>
    )
  }
}