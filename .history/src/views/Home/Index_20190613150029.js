import React, {Component} from 'react';
// import { Layout } from 'antd'

//引入组件
// import SiderNav from '../SiderNav/index'
import HeaderBar from '../HeaderBar/index'
import ContentMain from '../ContentMain/index'

// const {Sider, Header, Content} = Layout;
export default class Index extends Component {
    constructor(){
        super();
        this.state = {
            collapsed : false
        }
    }
    onToggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }
    render (){
        return (
            <div>
                asdsd
            </div>
        )
    }
}