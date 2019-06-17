import React, {Component} from 'react';
import Breadcrumb from '../Breadcrumb/index'

export default class Home extends Component {
    render (){
        return (
            <div>
                <Breadcrumb />
                <div style={{border:'1px pink solid'}}>
                    首页
                </div>
            </div>
        )
    }
}