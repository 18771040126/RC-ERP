import React,{ Component } from 'react' ;
import { Radio } from 'antd'
import './index.css'

export default class Radios extends Component {
    state = {
        value: 1
    }
    onChange = (e) => {
        alert(1)
        console.log('radio checked', e.target.value);
      };
    render () {
        return (
            <Radio.Group onChange={this.onChange}>
                <Radio value={1}>A</Radio>
                <Radio value={2}>B</Radio>
                <Radio value={3}>C</Radio>
            </Radio.Group>                
        )
    }
}