import React,{ Component } from 'react' ;
import { Input } from 'antd'
import './index.css'

const Search = Input.Search 
export default class Input extends Component {
    render () {
        return (
            <div>
                  <Search placeholder="input search text" style={{ width: 200 }}/>
                  <br/>
                  <br/>
                  <Search 
                        palceholder="input search text" 
                        style={{ width: 200 }} 
                        enterButton="Search" 
                        />
            </div>
        )
    }
}