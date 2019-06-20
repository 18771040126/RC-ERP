import React,{ Component } from 'react' ;
import './index.css';
import {Icon, Row, Col, Dropdown, Menu,Avatar  } from 'antd';

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
              1st menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
              2nd menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
              3rd menu item
            </a>
        </Menu.Item>
    </Menu>
  );
export default class HeaderBar extends Component {
    state = {
        collapsed: false,
        user_name: ''
    }
    toggleCollapsed = ()=> {
        this.setState ({
            collapsed : !this.state.collapsed
        })
        this.props.toggle()
    }
    componentDidMount(){
        this.user_name = JSON.parse(sessionStorage.getItem('user_name'))
        this.setState({
            user_name: this.user_name
        })
    }

    render (){
        return (      
  
              <Row>
                <Col span={8}>
                    <Icon 
                        onClick={this.toggleCollapsed} 
                        style={{margin:" 0 30px 0 20px",fontSize: '20px'}}
                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        />
                    <Dropdown overlay={menu}>
                        <a className='ant-dropdown-link' href='#'>
                            <Icon type="plus" style={{fontSize: '18px'}} ></Icon>
                        </a>
                    </Dropdown>
                </Col>
                <Col span={16} style={{paddingRight:50}}>
                    <Avatar icon='user'/>
                </Col>
            </Row>
        )
    }
}
