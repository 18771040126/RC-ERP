import React,{ Component } from 'react' ;
// import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import { Switch } from 'react-router-dom';

import AuthRouter from '../../components/AuthRouter/AuthRouter'
import Home from '../../components/Home/index'
import Error from '../../components/Error/index'

import CustomerMain from '../../components/CustomerMain/index'
import CustomerSeparate from '../../components/CustomerSeparate/index'
import CustomerShop from '../../components/CustomerShop/index'

import ApplyAdopt from '../../components/ApplyAdopt/index'
import ApplyBack from '../../components/ApplyBack/index'

import PurchaseShop from '../../components/PurchaseShop/index'
import PurchaseSeparate from '../../components/PurchaseSeparate/index'
import PurchaseMain from '../../components/PurchaseMain/index'

import ApplyRecovery from '../../components/ApplyRecovery/index'
import ApplyMy from '../../components/ApplyMy/index'


import RepurchaseSeparate from '../../components/RepurchaseSeparate/index'
import RepurchaseMain from '../../components/RepurchaseMain/index'


export default class ContentMain extends Component {
    render () {
        return (
              <Switch>
                    <AuthRouter path="/customer/main" component={CustomerMain} />
                    <AuthRouter path="/customer/separate" component={CustomerSeparate} />
                    <AuthRouter path="/customer/shop" component={CustomerShop} />

                    <AuthRouter path="/apply/adopt" component={ApplyAdopt} />
                    <AuthRouter path="/apply/back" component={ApplyBack} />

                    <AuthRouter path="/purchase/shop" component={PurchaseShop} />
                    <AuthRouter path="/purchase/separate" component={PurchaseSeparate} />
                    <AuthRouter path="/purchase/main" component={PurchaseMain} />

                    <AuthRouter path="/apply/recovery" component={ApplyRecovery} />
                    <AuthRouter path="/apply/my" component={ApplyMy} />

                    <AuthRouter path="/repurchase/separate" component={RepurchaseSeparate} />
                    <AuthRouter path="/repurchase/main" component={RepurchaseMain} />


                    <AuthRouter path="/stock/main" component={Error} />
                    <AuthRouter path="/stock/my" component={Error} />
                    <AuthRouter path="/stock/record" component={Error} />
                    <AuthRouter path="/stock/addNew" component={Error} />

                    <AuthRouter path="/finance/saleReport" component={Error} />
                    <AuthRouter path="/finance/accountStatement" component={Error} />
                    <AuthRouter path="/finance/cash" component={Error} />

                    <AuthRouter path="/service/list" component={Error} />
                    <AuthRouter path="/service/onSale" component={Error} />
                    <AuthRouter path="/service/my" component={Error} />

                    <AuthRouter path="/info/mechanism" component={Error} />
                    <AuthRouter path="/info/cash" component={Error} />

                    <AuthRouter path="/user/addNew" component={Error} />
                    <AuthRouter path="/user/list" component={Error} />


                    <AuthRouter path="/" component={Home} />
              </Switch>
          )
      }
}