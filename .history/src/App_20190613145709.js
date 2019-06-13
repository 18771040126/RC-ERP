import React,{Component} from 'react';

export default class App extends Component {
    constructor(){
        super();
        this.state = {
            
        }
    }
    render (){
        return (
            <div className="App">
                {this.props.children}
            </div>
        )
    }
};
