import React,{ Component } from 'react' ;
import Breadcrumb from '../Breadcrumb/index'


export default class Custer extends Component {
    render () {
        return (
            <div>
                <Breadcrumb />
                <div className='content_container'>
                    <Button type='primary'>新增商品</Button>
                </div>
            </div>
        )
    }
}