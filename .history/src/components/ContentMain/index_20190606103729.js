import React,{ Component } from 'react' ;
import { withRouter, Switch, Redirect } from 'react-router-dom'
import './index.css';




export default class ContentMain extends Component {
  render () {
    return (
      <div style={{padding: 16, position: 'relative'}}>
        <Switch>
          <PrivateRoute exact path='/home' component={Home}/>

          <PrivateRoute exact path='/home/general/button' component={ButtonDemo}/>
          <PrivateRoute exact path='/home/general/icon' component={IconDemo}/>

          {/* <PrivateRoute exact path='/home/navigation/dropdown' component={DropdownDemo}/>
          <PrivateRoute exact path='/home/navigation/menu' component={MenuDemo}/>
          <PrivateRoute exact path='/home/navigation/steps' component={StepsDemo}/>

          <PrivateRoute exact path='/home/entry/form/basic-form' component={FormDemo1}/>
          <PrivateRoute exact path='/home/entry/form/step-form' component={FormDemo2}/>
          <PrivateRoute exact path='/home/entry/upload' component={UploadDemo}/>

          <PrivateRoute exact path='/home/display/carousel' component={CarouselDemo}/>
          <PrivateRoute exact path='/home/display/collapse' component={CollapseDemo}/>
          <PrivateRoute exact path='/home/display/list' component={ListDemo}/>
          <PrivateRoute exact path='/home/display/table' component={TableDemo}/>
          <PrivateRoute exact path='/home/display/tabs' component={TabsDemo}/>

          <PrivateRoute exact path='/home/feedback/modal' component={ModalDemo}/>
          <PrivateRoute exact path='/home/feedback/notification' component={NotificationDemo}/>
          <PrivateRoute exact path='/home/feedback/spin' component={SpinDemo}/>

          <PrivateRoute exact path='/home/other/animation' component={AnimationDemo}/>
          <PrivateRoute exact path='/home/other/gallery' component={GalleryDemo}/>
          <PrivateRoute exact path='/home/other/draft' component={DraftDemo}/>
          <PrivateRoute exact path='/home/other/chart' component={ChartDemo}/>
          <PrivateRoute exact path='/home/other/loading' component={LoadingDemo}/>
          <PrivateRoute exact path='/home/other/404' component={ErrorPage}/>
          <PrivateRoute exact path='/home/other/springText' component={SpringText}/>

          <PrivateRoute exact path='/home/about' component={About}/> */}

          <Redirect exact from='/' to='/home'/>
        </Switch>
      </div>
    )
  }
}