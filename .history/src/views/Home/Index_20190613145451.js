import React, {Component} from 'react';

//引入组件
import SiderNav from '../SiderNav/index'
import HeaderBar from '../HeaderBar/index'
import ContentMain from '../ContentMain/index'

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
                    <Header style={{background:'#fff',padding: '0'}}>
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