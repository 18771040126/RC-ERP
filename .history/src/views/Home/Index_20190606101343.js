import React, {Component} from 'react';
import { Layout } from 'antd'

//引入组件
import SiderNav from '../../components/SiderNav/index'
import HeaderBar from '../../components/HeaderBar/index'
import ContentMain from '../../components/ContentMain/index'
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
                        <Header>
                            <HeaderBar />
                        </Header>
                        <Content>
                            <ContentMain />
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}