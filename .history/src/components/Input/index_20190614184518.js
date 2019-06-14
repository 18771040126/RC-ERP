import React,{ Component } from './node_modules/react' ;
import { Input } from './node_modules/antd'
import './index.css'

const Search = Input.Search 
export default class Inputs extends Component {
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