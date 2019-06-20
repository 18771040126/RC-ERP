import React,{ Component } from 'react' ;
import Breadcrumb from '../Breadcrumb/index'


export default class Inputs extends Component {
    render () {
        return (
            <div>
                <Breadcrumb arr={['Input']} />
                <div style={{border:'1px pink solid'}}>
                    input
                </div>
            </div>


        )
    }
}