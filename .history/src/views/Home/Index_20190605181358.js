import React, {Component} from 'react';
import { Layout } from 'antd'
const {Sider, Header, Content} = Layout;
export default class Index extends Component {
    render (){
        return (
            <div>
                <Layout>
                    <Sider>

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