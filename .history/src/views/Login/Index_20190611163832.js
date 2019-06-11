import React,{Component} from 'react';
import $ from 'jquery'
import './css/Styles.css'
// import './css/Loaders.css'
// import './css/Default.css'
import Particles from 'react-particles-js'
// import Particleground from  '../../utils/Particleground.js'
// import '../../utils/stopExecutionOnTimeout.js'
// import '../../utils/Treatment.js'

export default class Login extends Component {
    componentDidMount(){
	    $(document).keypress(function (e) {
	        // 回车键事件  
	        if (e.which == 13) {
	            $('input[type="button"]').click();
	        }
	    });
	   
    }
    render (){
        return (
            <div>
				<Particles />
                <div className='login'>
                    <div className='login_title'>
                        <span>请登录</span>
                    </div>

                    <div className='login_fields'>
                        <div className='login_fields__user'>
                            <div className='icon'>
                                <img alt="" src={require('./img/user_icon_copy.png')} />
                            </div>
                            <input name="login" placeholder='用户名' type='text' />
                            <div className='validation'>
                                <img alt="" src={require('./img/tick.png')}/>
                            </div>
                        </div>

                        <div className='login_fields__password'>
                            <div className='icon'>
                                <img alt="" src={require('./img/lock_icon_copy.png')} />
                            </div>
                            <input name="pwd"  placeholder='密码' type='text' />
                            <div className='validation'>
                                <img alt="" src={require('./img/tick.png')} />
                            </div>
                        </div>

                        <div className='login_fields__password'>
                            <div className='icon'>
                                <img alt="" src={require('./img/key.png')} />
                            </div>
                            <input name="code" placeholder='验证码' type='text' name="ValidateNum" />
                            <div className='validation' style={{opacity: 1,right: '-5px',top: '-3px'}}>
                                <canvas className="J_codeimg" id="myCanvas" onClick={this.Code}></canvas>
                            </div>
                        </div>

                        <div className='login_fields__submit'>
                            <input type='button' value='登录' />
                        </div>
                    </div>
                </div>
                <div className='authent'>
                <div className="loader" style={{height: '44px',width: '44px',marginLeft: '28px'}}>
                    <div className="loader-inner ball-clip-rotate-multiple">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    </div>
                    <p>认证中...</p>
                </div>
                <div className="OverWindows"></div>
            </div>
        )
    }
}