import React,{Component} from 'react';

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
            <div>
                <input value={this.state.inputValue} onChange={this.inputChange}/><button>增加服务</button>
            </div>
        )
    }
};
