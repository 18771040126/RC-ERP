import React,{ Component } from 'react' ;
import Breadcrumb from '../Breadcrumb/index'

export default class ApplyMy extends Component {
    render () {
        return (
            <div>
                <Breadcrumb arr={['物品采纳','asd']}/>
                <div className='content_container'>
                    收到的采纳申请
                </div>
          </div>
        )
    }
}