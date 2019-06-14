import React,{Component,Fragment} from 'react';

export default class App extends Component {
    constructor(){
        super();
        this.state = {
            inputValue: '',
            list: ['西瓜','橘子']
        }
    }
    inputChange = (e)=> {
        this.setState({
            inputValue: e.target.value
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
                   {
                       this.state.list.map((item,index)=> {
                           return (
                               <li>{item}</li>
                           )
                       })
                   }
                </ul>
            </Fragment>
        )
    }
};
