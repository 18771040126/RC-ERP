import React, {Component} from 'react';
import { Layout } from 'antd'
import './index.css'

//引入组件
import SiderNav from '../../views/SiderNav/index'
import HeaderBar from '../../views/HeaderBar/index'
import ContentMain from '../../views/ContentMain/index'

const {Sider, Header, Content} = Layout;
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
            <Layout>
                <Sider  
                    trigger={null}
                    collapsed= {this.state.collapsed}
                    >
                    <SiderNav collapsed={this.state.collapsed}/>
                </Sider>
                <Layout>
                    <Header style={{background:'#fff',padding: '0',borderBottom:'2px #ccc solid'}}>
                        <HeaderBar toggle={this.onToggle} />
                    </Header>
                    <div>
                        <ContentMain  />
                    </div>
                </Layout>
            </Layout>
        )
    }
}