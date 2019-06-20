import React,{ Component } from 'react' ;
import Breadcrumb from '../Breadcrumb/index'

export default class CustomerSeparate extends Component {
    render () {
        return (
            <div>
                <Breadcrumb arr={['客户管理','分仓管理']}/>
                <div className='content_container'>
                分仓管理
                </div>
            </div>
        )
    }
}