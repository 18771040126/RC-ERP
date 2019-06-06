import React,{ Component } from 'react' ;
import {Route} from 'react-router-dom';
import './index.css';

import Pagebutton from '../Pagebutton/index'
import Test from '../Test/index'




export default class ContentMain extends Component {
  render () {
    return (
      <Router>
            <Route path="/Pagebutton" component={ Pagebutton } />
            <Route path="/Test" component={ Test } />
      </Router>
    )
  }
}