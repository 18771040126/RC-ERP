import React, {Component} from 'react';
import { Layout } from 'antd'
import SiderNav from '../../components/SiderNav'
const {Sider, Header, Content} = Layout;
export default class Index extends Component {
    render (){
        return (
            <div>
                <Layout>
                    <Sider>
                        <SiderNav/>
                    </Sider>
                    <Layout>
                        <Header>

                        </Header>
                        <Content>

                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}