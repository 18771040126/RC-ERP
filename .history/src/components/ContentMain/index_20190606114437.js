import React,{ Component } from 'react' ;

import Pagebutton from '../Pagebutton/index'
import Test from '../Test/index'




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