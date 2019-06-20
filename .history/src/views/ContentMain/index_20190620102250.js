import React,{ Component } from 'react' ;
// import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import { Switch } from 'react-router-dom';

import AuthRouter from '../../components/AuthRouter/AuthRouter'
import Home from '../../components/home/index'

import CustomerMain from '../../components/customerMain/index'
import CustomerSeparate from '../../components/customerSeparate/index'
import CustomerShop from '../../components/customerShop/index'

import ApplyAdopt from '../../components/applyAdopt/index'
import ApplyBack from '../../components/applyBack/index'

import PurchaseShop from '../../components/purchaseMain/index'
import PurchaseSeparate from '../../components/purchaseSeparate/index'
import PurchaseMain from '../../components/purchaseShop/index'

import ApplyRecovery from '../../components/applyRecovery/index'
import ApplyMy from '../../components/applyMy/index'


import Radio from '../../components/purchaseSeparate/index'


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