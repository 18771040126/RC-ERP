import React,{ Component } from 'react' ;
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import './index.css';

import Pagebutton from '../Pagebutton/index'
import Test from '../Test/index'




export default class ContentMain extends Component {
  render () {
    return (
            <div>

            
      <Switch>
            <Route path="/Pagebutton" component={ Pagebutton } />
            <Route path="/Test" component={ Test } />
      </Switch>
      </div>
    )
  }
}