import React,{ Component} from 'react';
 class Routers extends Component {
     render (){
         return (
            <Switch>
                <Route path='/' exact component={Login}/>
                <AuthRouter path='/home' exact component={Home}/>
            </Switch>
         )
     }
 }