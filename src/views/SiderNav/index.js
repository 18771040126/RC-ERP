import React,{ Component } from 'react' ;
import { Menu, Icon } from 'antd'; 
import './index.css';

import { Link } from 'react-router-dom';

const menus = [
    {
        title: '商品管理',
        icon: 'home',
        subs:[
            {
                title:'在售商品',
                key:'/',
            }
        ]
    },
    {
        title: '客户管理',
        icon: 'laptop',
        subs: [
            {
                title:'供应商管理',
                key:'/customer/main'
            },
            {
                title:'分仓管理',
                key:'/customer/separate'
            },
            {
                title:'体验店管理',
                key:'/customer/shop'
            },
        ]
    },
    {
        title: '物品采纳',
        icon: 'cluster',
        subs: [
            {
                title:'收到的采纳申请',
                key:'/apply/adopt'
            },
            {
                title:'我的回购申请',
                key:'/apply/back'
            },
        ]
    },
    {
        title: '采购单管理',
        icon: 'edit',
        subs: [
            {
                title:'体验店采购单',
                key:'/purchase/shop'
            },
            {
                title:'分仓采购单',
                key:'/purchase/separate'
            },
            {
                title:'总仓采购单',
                key:'/purchase/main'
            },
        ]
    },
    {
        title: '物品回购',
        icon: 'radar-chart',
        subs:[
            {
                title: '收到的回购申请',
                key:'/apply/recovery'
            },
            {
                title: '我的回购申请',
                key:'/apply/my'
            }
        ]
    },
    {
        title: '回购单管理',
        icon: 'desktop',
        subs:[
            {
                title:'分仓回购单',
                key: '/counterpurchase/separate',
            },
            {
                title: '总仓回购单',
                key: '/counterpurchase/main',
            }
        ]
    },
    {
        title: '仓库管理',
        icon: 'desktop',
        subs:[
            {
                title:'总库存监控',
                key:'/stock/main'
            },
            {
                title: '我的仓库',
                key:'/stock/my'
            },
            {
                title:'出入库记录',
                key:'/stock/record'
            },
            {
                title: '新建仓库',
                key:'/stock/addNew'
            }
        ]
    },
    {
        title: '账号管理',
        icon: 'desktop',
        subs:[
            {
                title:'新增管理员',
                key:'/user/addNew'
            },
            {
                title: '账号列表',
                key:'/user/list'
            },
        ]
    },
    {
        title: '财务管理',
        icon: 'desktop',
        subs:[
            {
                title:'销售报表',
                key:'/finance/saleReport'
            },
            {
                title: '供货商对账单',
                key:'/finance/accountStatement'
            },
            {
                title: '提现管理',
                key:'/finance/cash'
            },
        ]
    },
    {
        title: '服务管理',
        icon: 'desktop',
        subs:[
            {
                title:'服务条目管理',
                key:'/service/list'
            },
            {
                title: '在售服务',
                key:'/service/onSale'
            },
            {
                title: '我的服务',
                key:'/service/my'
            },
        ]
    },
    {
        title:'我的信息',
        icon:'desktop',
        subs:[
            {
                title:'机构信息',
                key:'/info/mechanism'
            },
            {
                title: '提现',
                key:'/info/cash'
            }
        ]
    }

]

export default class SiderNav extends Component {
   state = {
        openKeys: ['item_0'],
        selectedKeys: ['item_0-menu-item_0'],
    }
    
    onOpenChange = (openKeys)=> {
        console.log(openKeys)
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
               subs && subs.map(item => {
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
