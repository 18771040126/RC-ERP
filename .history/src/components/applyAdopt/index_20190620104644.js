import React,{ Component } from './node_modules/react' ;
import Breadcrumb from '../Breadcrumb/index'


export default class ApplyAdopt extends Component {
    render () {
        return (
            <div>
                <Breadcrumb arr={['物品采纳','收到的采纳申请']}/>
                <div className='content_container'>
                    收到的采纳申请
                </div>
            </div>
        )
    }
}