import React,{ Component } from 'react' ;
import { Button } from './node_modules/antd'
import './index.css'

export default class Buttons extends Component {
  render () {
    return (
      <div>
           <Button type='primary'>按钮</Button> 
      </div>
    )
  }
}