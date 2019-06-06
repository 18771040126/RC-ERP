import React,{ Component } from 'react' ;
import {Route} from 'react-router-dom';
import './index.css';

import App




export default class ContentMain extends Component {
  render () {
    return (
      <div>
            <Route exact path="/" component={ App } />
            <Route path="/Pagebutton" component={ Pagebutton } />
            <Route path="/Test1" component={ Test } />
      </div>
    )
  }
}