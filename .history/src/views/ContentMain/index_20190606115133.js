import React,{ Component } from 'react' ;
import {Route} from 'react-router-dom';

import Pagebutton from '../../components/Pagebutton/index'
import Test from '../../components/Test/index'

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