import React,{ Component } from 'react' ;
import Breadcrumb from '../Breadcrumb/index'


export default class Store extends Component {
    render () {
        return (
              <div>
                    <Breadcrumb arr={['采购单管理','收到的采纳申请']}/>
                    <div className='content_container'>
                        体验店采购单
                    </div>
              </div>
          )
      }
  }


