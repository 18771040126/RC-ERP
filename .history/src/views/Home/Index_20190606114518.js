import React, {Component} from 'react';
import { Layout } from 'antd'

//引入组件
import SiderNav from '../../components/SiderNav/index'
import HeaderBar from '../../components/HeaderBar/index'
import ContentMain from '../../components/ContentMain/index'

import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

const {Sider, Header, Content} = Layout;
export default class Index extends Component {
    render (){
        return (
            <Layout>
                <Sider>
                    <SiderNav />
                </Sider>
                <Layout>
                    <Header style={{background:'#fff'}}>
                        <HeaderBar />
                    </Header>
                    <Content style={{background:'#fff'}}>
                        <ContentMain />
                    </Content>
                </Layout>
            </Layout>
        )
    }
}