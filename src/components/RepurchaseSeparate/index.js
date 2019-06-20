import React,{ Component } from 'react' ;
import Breadcrumb from '../Breadcrumb/index'

export default class RepurchaseSeparate extends Component {
  render () {
      return (
          <div>
              <Breadcrumb arr={['回购单管理','分仓回购单']}/>
              <div className='content_container'>
                分仓回购单
              </div>
          </div>
      )
  }
}