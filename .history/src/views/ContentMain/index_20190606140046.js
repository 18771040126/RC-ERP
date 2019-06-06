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
              <Route path="/" component={ Home } />
              <Route path="/Input" component={ Input } />
              <Route path="/Button" component={ Button } />
              <Route path="/Radio" component={ Radio } />
          </div>
    )
  }
}