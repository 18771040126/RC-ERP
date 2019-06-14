import React,{ Component } from './node_modules/react' ;
import { Radio } from './node_modules/antd'
import './index.css'

export default class Radios extends Component {
    state = {
        value: 1,
    }
    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value
        })
    };
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