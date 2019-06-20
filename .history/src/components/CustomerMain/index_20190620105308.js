import React,{ Component } from 'react' ;
import Breadcrumb from '../Breadcrumb/index'

export default class CustomerMain extends Component {
    render () {
        return (
            <div>
                <Breadcrumb arr={['客户管理','供应商管理']}/>
                <div className='content_container'>
                    收到的采纳申请
                </div>
            </div>
        )
    }
}