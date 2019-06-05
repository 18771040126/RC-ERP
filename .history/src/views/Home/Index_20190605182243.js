import React, {Component} from 'react';
import { Layout } from 'antd'
import SiderNav from '../../components/SiderNav/index'
// import HeaderBar from '../../components/HeaderBar/index'
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
                    /
                </Layout>
            </div>
        )
    }
}