import React,{ Component } from 'react' ;
import {Route} from 'react-router-dom';

import Pagebutton from '../../components/Input/index'
import Test from '../../components/Button/index'

export default class ContentMain extends Component {
  render () {
    return (
          <div>
              <Route path="/Pagebutton" component={ Pagebutton } />
              <Route path="/Test" component={ Test } />
          </div>
    )
  }
}