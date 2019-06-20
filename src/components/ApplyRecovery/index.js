import React,{ Component } from 'react' ;
import Breadcrumb from '../Breadcrumb/index'


export default class ApplyRecovery extends Component {
    render () {
        return (
            <div>
                <Breadcrumb arr={['物品采纳','收到的回购申请']}/>
                <div className='content_container'>
                    收到的回购申请
                </div>
            </div>
        )
    }
}