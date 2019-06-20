import React, {Component} from 'react';
import {Breadcrumb, Icon} from 'antd'
import {Link} from 'react-router-dom'


export default class Breadcrumd extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <Breadcrumb style={{marginBottom:14,background:'#fff',padding: '16px 24px 0 24px'}}>
                <Breadcrumb.Item>
                    <Link to='/'><Icon type="home" style={{fontSize:'16px',marginBottom:'16px'}}/></Link>
                </Breadcrumb.Item>
                {
                    this.props.arr && this.props.arr.map(item=> {
                        if((typeof item) === 'object'){
                            return (
                                    <Breadcrumb.Item key={item.title}>
                                        <Link to={item.to}>{item.title}</Link>
                                    </Breadcrumb.Item>
                                )
                                }else {
                                    return <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
                                   
                                }
                    })

                }
            </Breadcrumb>
        )
    }
}