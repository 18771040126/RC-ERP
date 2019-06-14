import React,{Component} from 'react';

export default class App extends Component {
    constructor(){
        super();
        this.state = {
            inputValue: ''
        }
    }
    render (){
        return (
            <div>
                <input value={this.state.inputValue} /><button></button>
            </div>
        )
    }
};
