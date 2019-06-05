import React, {Component} from 'react';
import { Layout } from 'antd'
import SiderNav from '../../components/SiderNav'
import HeaderBar from '../../components/SiderNav'
import ContentMain from '../../components/SiderNav'
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