import React,{ Component } from 'react' ;
import {Route} from 'react-router-dom';

import Home from '../../components/Home/index'
import Input from '../../components/Input/index'
import Button from '../../components/Button/index'
import Radio from '../../components/Radio/index'

export default class ContentMain extends Component {
  render () {
    return (
          <div>
              <Route exact path="/" component={ Home } />
              <Route exact path="/Input" component={ Input } />
              <Route exact path="/Button" component={ Button } />
              <Route exact path="/Radio" component={ Radio } />
          </div>
    )
  }
}