import React,{ Component } from './node_modules/react' ;
import Breadcrumb from '../Breadcrumb/index'


export default class ApplyBack extends Component {
    render () {
        return (
            <div>
                <Breadcrumb arr={['物品采纳','我的回购申请']}/>
                <div className='content_container'>
                    我的回购申请
                </div>
          </div>
        )
    }
}