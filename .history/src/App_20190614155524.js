import React,{Component} from 'react';

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
    addList = ()=> {
        if(this.state.inputValue !==''){
            this.setState({
                list: [...this.state.list,this.state.inputValue],
                inputValue: ''
            })
        }
       
    }
    reduceList = (index)=> {
        console.log(index)
        // this.setState({
        //     list: 
        // })
    }
    render (){
        return (
            <div style={{margin:"100px"}}>
                <div >
                    <input value={this.state.inputValue} onChange={this.inputChange}/>
                    <button onClick={this.addList}>增加水果</button>
                </div>
                <ul>
                   {
                       this.state.list.map((item,index)=> {
                           return <li key={index} >{item}</li>
                       })
                   }
                </ul>
            </div>
        )
    }
};
