import React,{ Component } from 'react' ;
import Breadcrumb from '../Breadcrumb/index'

export default class RepurchaseMain extends Component {
    render () {
        return (
            <div>
                <Breadcrumb arr={['回购单管理','总仓回购单']}/>
                <div className='content_container'>
                  总仓回购单
                </div>
            </div>
        )
    }
}