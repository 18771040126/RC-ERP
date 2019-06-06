import React,{ Component } from 'react' ;
import { Radio } from 'antd'
import './index.css'

export default class aaa extends Component {
    render () {
        return (
            <div>
                <Radio.Group>
                    <Radio value='1'></Radio>
                </Radio.Group>                
            </div>
        )
    }
}