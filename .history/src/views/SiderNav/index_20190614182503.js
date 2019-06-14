import React,{ Component } from 'react' ;
import { Menu, Icon } from 'antd'; 
import './index.css';

import { Link } from 'react-router-dom';

const menus = [
    {
        title: '首页',
        icon: 'home',
        key:'/home'
    },
    {
        title: '门店管理',
        icon: 'laptop',
        key:'/home/store',
        children: [
            {
                title:'临平店',
                key:'/home//store/Linping'
            },
            {
                title:'西湖店',
                key:'/home//store/Xihu'
            },
            {
                title:'下沙店',
                key:'/home//store/Xiasha'
            },
            {
                title:'滨江店',
                key:'/home//store/Binjiang'
            }
        ]          
    },
    {
        title: '权限管理',
        icon: 'cluster',
        key:'/home/cluster',
        children: [
            {
                title:'CEO',
                key:'/home//cluster/CEO'
            },
            {
                title:'CFO',
                key:'/home//cluster/CFO'
            },
            {
                title:'CUO',
                key:'/home//cluster/CUO'
            },
            {
                title:'CBO',
                key:'/home//cluster/CBO'
            }
        ]         
    },
    {
        title: '仓储管理Radio',
        icon: 'edit',
        key: '/home/Radio'            
    },
    {
        title: '通用设置Button',
        icon: 'radar-chart',
        key: '/home/Button'            
    },
    {
        title: '业绩管理Input',
        icon: 'desktop',
        key: '/home/Input'            
    },

]

export default class SiderNav extends Component {
    constructor(){
        super();
        this.state = {
            openKeys: [],
            selectedKeys: [],
        }
    }
    renderMenuItem = ({key,icon, title}) => {
        return (
          <Menu.Item>
                <Link to={key}>
                    {icon && <Icon type={icon}/>}
                    <span>{title}</span>
                </Link>
          </Menu.Item>
        )
    }
    renderSubMenu = ({key, icon, title, children}) => {
        return (
          <Menu.SubMenu title={<span>{icon && <Icon type={icon}/>}<span>{title}</span></span>}>
            {
               children.map((item) => {
                return item.children && item.children.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
              })
            }
          </Menu.SubMenu>
        )
    }
    onOpenChange = (openKeys)=> {
        //此函数的作用只展开当前父级菜单（父级菜单下可能还有子菜单）
        if(openKeys.length === 0 || openKeys === 1){
            this.setState({
                openKeys
            })
            return
        }
        const latestOpenKey = openKeys[openKeys.length - 1]
        if (latestOpenKey.includes(openKeys[0])) {
            this.setState({
              openKeys
            })
        } else {
            this.setState({
              openKeys: [latestOpenKey]
            })
        }
    }
    render (){
        return (
                <Menu 
                    style={{height: '100vh'}}
                    mode="inline"
                    theme="dark"
                    onOpenChange={this.onOpenChange}
                    openKeys={this.state.openKeys}
                    selectedKeys={this.state.selectedKeys}
                    onClick={({key}) => this.setState({selectedKeys: [key]})}
                >
                    {
                        menus.map((item) => {
                            return item.children && item.children.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
                        })
                    }
                </Menu>
        )
    }
}
