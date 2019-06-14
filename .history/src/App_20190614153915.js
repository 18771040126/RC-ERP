import React,{Component,Fragment} from 'react';

export default class App extends Component {
    constructor(){
        super();
        this.state = {
            inputValue: '水果',
            list: ['西瓜','橘子']
        }
    }
    inputChange = (e)=> {
        setState({
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
                       this.state.list.map(()=> {
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
