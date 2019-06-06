import React,{ Component } from 'react' ;
import { withRouter, Switch, Redirect } from 'react-router-dom'
import './index.css';




export default class ContentMain extends Component {
  render () {
    return (
      <div style={{padding: 16, position: 'relative'}}>
        <Switch>
          

          <Redirect exact from='/' to='/home'/>
        </Switch>
      </div>
    )
  }
}