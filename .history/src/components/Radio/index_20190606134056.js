import React,{ Component } from 'react' ;
import { Radio } from 'antd'
import './index.css'

export default class aaa extends Component {
    render () {
        return (
            <div>
                <Radio.Group>
                    <Radio value={1}></Radio>
                    <Radio value={2}></Radio>
                    <Radio value={3}></Radio>
                    <Radio value={4}></Radio>
                </Radio.Group>                
            </div>
        )
    }
}