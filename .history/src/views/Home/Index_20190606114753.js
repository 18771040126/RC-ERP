import React, {Component} from 'react';
import { Layout } from 'antd'

//引入组件
import SiderNav from '../../components/SiderNav/index'
import HeaderBar from '../../components/HeaderBar/index'
import ContentMain from '../../components/ContentMain/index'

const {Sider, Header, Content} = Layout;
export default class Index extends Component {
    constructor(){
        super();
        this.state = {
            collapsed : false
        }
    }
    onToggle = () => {
        this.setState({})
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
                    <Header style={{background:'#fff'}}>
                        <HeaderBar toggle={this.onToggle} />
                    </Header>
                    <Content style={{background:'#fff'}}>
                        <ContentMain />
                    </Content>
                </Layout>
            </Layout>
        )
    }
}