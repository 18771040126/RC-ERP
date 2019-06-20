import React, {Component} from 'react';
import Breadcrumb from '../Breadcrumb/index'
import { Button } from 'antd';

export default class Home extends Component {
    render (){
        return (
            <div>
                <Breadcrumb />
                <div className='content_container'>
                    <Button>新建项目</Button>
                </div>
            </div>
        )
    }
}