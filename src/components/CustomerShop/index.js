import React,{ Component } from 'react' ;
import Breadcrumb from '../Breadcrumb/index'

export default class CustomerShop extends Component {
    render () {
        return (
            <div>
                <Breadcrumb arr={['客户管理','体验店管理']}/>
                <div className='content_container'>
                体验店管理
                </div>
            </div>
        )
    }
}