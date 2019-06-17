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
        key:'/store',
        subs: [
            {
                title:'临平店',
                key:'/store/linping'
            },
            {
                title:'西湖店',
                key:'/store/xihu'
            },
            {
                title:'下沙店',
                key:'/store/xiasha'
            },
            {
                title:'滨江店',
                key:'/store/binjiang'
            }
        ]          
    },
    {
        title: '权限管理',
        icon: 'cluster',
        key:'/cluster',
        subs: [
            {
                title:'CEO',
                key:'/cluster/ceo'
            },
            {
                title:'CFO',
                key:'/cluster/cfo'
            },
            {
                title:'CUO',
                key:'/cluster/cuo'
            },
            {
                title:'CBO',
                key:'/cluster/cbo'
            }
        ]         
    },
    {
        title: '仓储管理Radio',
        icon: 'edit',
        key: '/radio'            
    },
    {
        title: '通用设置Button',
        icon: 'radar-chart',
        key: '/button'            
    },
    {
        title: '业绩管理Input',
        icon: 'desktop',
        key: '/input'            
    },

]

export default class SiderNav extends Component {
   state = {
        openKeys: [],
        selectedKeys: [],
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
    renderSubMenu = ({key, icon, title, subs}) => {
        return (
          <Menu.SubMenu key={key} title={<span>{icon && <Icon type={icon}/>}<span>{title}</span></span>}>
            {
               subs && subs.map((item) => {
                return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
              })
            }
          </Menu.SubMenu>
        )
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
                        menus && menus.map((item) => {
                            return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
                        })
                    }
                </Menu>
        )
    }
}
