import React, {Component} from 'react';
import Breadcrumb from '../Breadcrumb/index'

export default class Home extends Component {
    render (){
        return (
            <div>
                <Breadcrumb />
                <div>
                    首页
                </div>
            </div>
        )
    }
}