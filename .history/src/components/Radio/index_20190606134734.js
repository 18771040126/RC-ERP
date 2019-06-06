import React,{ Component } from 'react' ;
import { Radio } from 'antd'
import './index.css'

export default class Radios extends Component {
    state = {
        value: 1
    }
    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
      };
    render () {
        return (
            <Radio.Group>
                <Radio value={1}>A</Radio>
                <Radio value={2}>B</Radio>
                <Radio value={3}>C</Radio>
                <Radio value={4}>D</Radio>
            </Radio.Group>                
        )
    }
}