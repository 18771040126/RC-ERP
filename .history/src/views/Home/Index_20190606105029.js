import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import { Layout } from 'antd'

//引入组件
import SiderNav from '../../components/SiderNav/index'
import HeaderBar from '../../components/HeaderBar/index'
// import ContentMain from '../../components/ContentMain/index'
const {Sider, Header, Content} = Layout;
export default class Index extends Component {
    render (){
        return (
            <div>
                <Layout>
                    <Sider>
                        <SiderNav />
                    </Sider>
                    <Layout>
                        <Header style={{background:'#fff'}}>
                            <HeaderBar />
                        </Header>
                        <Content style={{background:'#fff'}}>
                            <Route path="/Pagebutton" component={ Pagebutton } />
                            <Route path="/Test" component={ Test } />
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}