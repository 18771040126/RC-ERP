import React,{ Component } from 'react' ;
import { Radio } from 'antd'
import './index.css'

export default class Radios extends Component {
    state = {
        value: 1
    }
    render () {
        return (
            <Radio.Group onChange={this.onChange} value={this.state.value}>
                <Radio value={1}>A</Radio>
                <Radio value={2}>B</Radio>
                <Radio value={3}>C</Radio>
                <Radio value={4}>D</Radio>
            </Radio.Group>                
        )
    }
}