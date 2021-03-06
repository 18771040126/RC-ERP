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
    buttonHandle = ()=> {

    }
    render (){
        return (
            <Fragment>
                <div>
                    <input value={this.state.inputValue} onChange={this.inputChange}/>
                    <button onClick={this.addList}>增加水果</button>
                </div>
                <ol>
                   {
                       this.state.list.map((item,index)=> {
                           return <li key={index}>{item}</li>
                       })
                   }
                </ol>
            </Fragment>
        )
    }
};
