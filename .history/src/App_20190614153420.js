import React,{Component} from 'react';

export default class App extends Component {
    render (){
        return (
            <div>
                <input value={this.state.inputValue} /><button></button>
            </div>
        )
    }
};
