import React,{ Component } from 'react' ;
import { Radio } from 'antd'
import './index.css's

const Search = Input.Search 
export default class Pagebutton extends Component {
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