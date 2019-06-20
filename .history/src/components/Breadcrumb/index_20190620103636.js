import React, {Component,Fragment} from 'react';
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
            <Breadcrumb style={{marginBottom:14,background:'#fff',padding: '16px 24px'}}>
                <Breadcrumb.Item>
                    <Link to='/'><Icon type="home" style={{fontSize:'16px',marginBottom:'16px'}}/></Link>
                </Breadcrumb.Item>
                {
                    this.props.arr && this.props.arr.map(item=> {
                        if((typeof item) === 'object'){
                            return (
                                    <Fragment>
                                        <Breadcrumb.Item key={item.title}>
                                            <Link to={item.to}>{item.title}</Link>
                                        </Breadcrumb.Item>
                                        <h3>{item.title}</h3>
                                    </Fragment>
                                    )
                                }else {
                                    return (
                                        <Fragment>
                                            <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
                                            <h3>{item}</h3>
                                        </Fragment>
                                    )
                                }
                    })

                }
            </Breadcrumb>
        )
    }
}