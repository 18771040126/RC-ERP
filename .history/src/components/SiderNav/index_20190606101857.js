import React,{ Component } from 'react' ;
import { Menu, Icon } from 'antd'; 
import ReactDOM from 'react-dom'
import './index.css';

import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom';

const menus = [
    {
        title: '首页',
        icon: 'home',
        path:'/home'
    },
    {
        title: '门店管理',
        icon: 'laptop',
        children: [
            {
                title:'临平店',
                path:'../../components/Content/index'
            },
            {
                title:'西湖店',
                path:'/../../components/Entry/index'
            },
            {
                title:'下沙店',
                path:'/xiasha'
            },
            {
                title:'滨江店',
                path:'/binjiang'
            }
        ]          
    },
    {
        title: '权限管理',
        icon: 'cluster',
        children: [
            {
                title:'CEO',
                path:'/CEO'
            },
            {
                title:'CFO',
                path:'/CFO'
            },
            {
                title:'CUO',
                path:'/CUO'
            },
            {
                title:'CBO',
                path:'/CBO'
            }
        ]         
    },
    {
        title: '仓储管理',
        icon: 'edit',
        path: '/cangchu'            
    },
    {
        title: '通用设置',
        icon: 'radar-chart',
        path: '/tongyong'            
    },
    {
        title: '业绩管理',
        icon: 'desktop',
        path: '/yeji'            
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
    renderMenuItem = ({icon, title}) => {
        return (
          <Menu.Item>
              <Link to='path'>
                {icon && <Icon type={icon}/>}
                <span>{title}</span>
              </Link>
          </Menu.Item>
        )
    }
    renderSubMenu = ({icon, title, children}) => {
        return (
          <Menu.SubMenu title={<span>{icon && <Icon type={icon}/>}<span>{title}</span></span>}>
            {
              children && children.map((item) => {
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
