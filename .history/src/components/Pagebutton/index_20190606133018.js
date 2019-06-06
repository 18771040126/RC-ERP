import React,{ Component } from 'react' ;
import { Input } from 'antd'
import './index.css'

const Search = Input.Search 
export default class Pagebutton extends Component {
  render () {
    return (
      <div>
            <Input placeholder="input search text" style={{ width: 200 }}/>
      </div>
    )
  }
}