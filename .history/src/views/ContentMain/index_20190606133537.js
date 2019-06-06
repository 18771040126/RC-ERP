import React,{ Component } from 'react' ;
import {Route} from 'react-router-dom';

import Input from '../../components/Input/index'
import Button from '../../components/Button/index'
import Radio from '../../components/Radio/index'

export default class ContentMain extends Component {
  render () {
    return (
          <div>
              <Route path="/Radio" component={ Input } />
              <Route path="/Input" component={ Input } />
              <Route path="/Button" component={ Button } />
          </div>
    )
  }
}