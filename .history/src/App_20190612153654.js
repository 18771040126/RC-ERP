import React from 'react';
import {Route,Switch} from 'react-router-dom'

export default class App extends Component {
  render (){
    return (
      <Switch>
        <Route path='/Login' component={Login}></Route>
      </Switch>
    )
  }
};
