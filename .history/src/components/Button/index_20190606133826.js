import React,{ Component } from 'react' ;
import { Button } from 'antd'
import './index.css'

export default class Button extends Component {
  render () {
    return (
      <div>
           <Button type='primary'>按钮</Button> 
      </div>
    )
  }
}