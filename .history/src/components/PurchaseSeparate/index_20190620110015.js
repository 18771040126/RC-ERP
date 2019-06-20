import React,{ Component } from 'react' ;
import Breadcrumb from '../Breadcrumb/index'

export default class PurchaseSeparate extends Component {
    render () {
        return (
            <div>
                    <Breadcrumb arr={['采购单管理','分仓采购单']}/>
                    <div className='content_container'>
                          分仓采购单
                    </div>
            </div>
        )
    }
}