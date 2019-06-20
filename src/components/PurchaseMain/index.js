import React,{ Component } from 'react' ;
import Breadcrumb from '../Breadcrumb/index'


export default class PurchaseMain extends Component {
    render () {
        return (
              <div>
                    <Breadcrumb arr={['采购单管理','总仓采购单']}/>
                    <div className='content_container'>
                          总仓采购单
                    </div>
              </div>
          )
      }
  }


