import React,{ Component } from 'react' ;
// import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import { Switch } from 'react-router-dom';

import AuthRouter from '../../components/AuthRouter/AuthRouter'
import Home from '../../components/home/index'

import CustomerMain from '../../components/customerMain/index'
import CustomerSeparate from '../../components/customerSeparate/index'
import CustomerShop from '../../components/customerShop/index'

import applyAdopt from '../../components/applyAdopt/index'
import applyBack from '../../components/applyBack/index'

import purchaseShop from '../../components/purchaseMain/index'
import purchaseSeparate from '../../components/purchaseSeparate/index'
import purchaseMain from '../../components/purchaseShop/index'

import Input from '../../components/input/index'
import Button from '../../components/button/index'
import Radio from '../../components/radio/index'


export default class ContentMain extends Component {
    render () {
        return (
              <Switch>
                    <AuthRouter path="/customer/main" component={CustomerMain} />
                    <AuthRouter path="/customer/separate" component={CustomerSeparate} />
                    <AuthRouter path="/customer/shop" component={CustomerShop} />

                    <AuthRouter path="/apply/adopt" component={applyAdopt} />
                    <AuthRouter path="/apply/back" component={applyBack} />

                    <AuthRouter path="/purchase/shop" component={purchaseShop} />
                    <AuthRouter path="/purchase/separate" component={purchaseSeparate} />
                    <AuthRouter path="/purchase/main" component={purchaseMain} />

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