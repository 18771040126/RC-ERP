import React,{ Component } from 'react' ;
import Breadcrumb from '../Breadcrumb/index'


export default class Store extends Component {
    render () {
        return (
            <div>
                <Breadcrumb arr={['物品采纳','我的回购申请']}/>
                <div className='content_container'>
                    
                </div>
          </div>
        )
    }
}