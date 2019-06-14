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
                    <button>增加服务</button>
                </div>
            </Fragment>
        )
    }
};
