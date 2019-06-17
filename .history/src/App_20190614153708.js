import React,{Component,Fragment} from 'react';

export default class App extends Component {
    constructor(){
        super();
        this.state = {
            inputValue: ''
        }
    }
    inputChange = ()=> {
        setState({
            inputValue: 
        })
    }
    render (){
        return (
            <Fragment>
                <div>
                    <input value={this.state.inputValue} onChange={this.inputChange}/>
                    <button>增加水果</button>
                </div>
                <ul>
                    <li>苹果</li>
                    <li>栗子</li>
                    <li>香蕉</li>
                </ul>
            </Fragment>
        )
    }
};