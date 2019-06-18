import React,{ Component } from 'react' ;
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import AuthRouter from '../../components/AuthRouter/AuthRouter'
import Home from '../../components/home/index'
import Linping from '../../components/linping_store/index'
import Xihu from '../../components/xihu_store/index'
import Xiasha from '../../components/xiasha_store/index'
import Binjiang from '../../components/binjiang_store/index'
import Ceo from '../../components/ceo_cluster/index'
import Cfo from '../../components/cfo_cluster/index'
import Cuo from '../../components/cuo_cluster/index'
import Cbo from '../../components/cbo_cluster/index'
import Input from '../../components/input/index'
import Button from '../../components/button/index'
import Radio from '../../components/radio/index'


export default class ContentMain extends Component {
    render () {
        return (
              <Switch>
                    <AuthRouter path="/customer/main" component={Linping} />
                    <AuthRouter path="/customer/separate" component={Xihu} />
                    <AuthRouter path="/customer/shop" component={Xiasha} />

                    <AuthRouter path="/apply/adopt" component={Binjiang} />
                    <AuthRouter path="/apply/back" component={Ceo} />

                    <AuthRouter path="/purchase/shop" component={Cfo} />
                    <AuthRouter path="/purchase/separate" component={Cuo} />
                    <AuthRouter path="/purchase/main" component={Cbo} />

                    <AuthRouter path="/apply/recovery" component={Input} />
                    <AuthRouter path="/apply/my" component={Button} />

                  <AuthRouter path="/counterpurchase/shop" component={Radio} />
                  <AuthRouter path="/counterpurchase/separate" component={Radio} />
                  <AuthRouter path="/counterpurchase/main" component={Radio} />


                  <AuthRouter path="/stock/main" component={Radio} />
                  <AuthRouter path="/stock/my" component={Radio} />
                  <AuthRouter path="/stock/record" component={Radio} />
                  <AuthRouter path="/stock/addNew" component={Radio} />

                  <AuthRouter path="/finance/saleReport" component={Radio} />
                  <AuthRouter path="/finance/accountStatement" component={Radio} />
                  <AuthRouter path="/finance/cash" component={Radio} />

                  <AuthRouter path="/service/list" component={Radio} />
                  <AuthRouter path="/service/onSale" component={Radio} />
                  <AuthRouter path="/service/my" component={Radio} />

                  <AuthRouter path="/info/mechanism" component={Radio} />
                  <AuthRouter path="/info/cash" component={Radio} />

                  <AuthRouter path="/user/addNew" component={Radio} />
                  <AuthRouter path="/user/list" component={Radio} />


                    <AuthRouter path="/" component={Home} />
              </Switch>
          )
      }
}