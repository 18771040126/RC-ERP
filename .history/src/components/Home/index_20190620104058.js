import React, {Component} from 'react';
import Breadcrumb from '../Breadcrumb/index'
import { Button } from 'antd';

export default class Home extends Component {
    render (){
        return (
            <div>
                <Breadcrumb />
                <div className='content_container'>
                    <Button type='primary'></Button>新增商品</Button>
                </div>
            </div>
        )
    }
}