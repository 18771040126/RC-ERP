import React,{Component} from 'react';
import $ from 'jquery'
import './css/Styles.css'
import './css/Demo.css'
import './css/Loaders.css'
// import './css/Default.css'
import Particles from 'reactparticles.js'

export default class Login extends Component {
    componentDidMount(){
	    $(document).keypress(function (e) {
	        // 回车键事件  
	        if (e.which == 13) {
	            $('input[type="button"]').click();
	        }
		});
		$('input[name="pwd"]').focus(function () {
	        $(this).attr('type', 'password');
	    });
	    $('input[type="text"]').focus(function () {
	        $(this).prev().animate({ 'opacity': '1' }, 200);
	    });
	    $('input[type="text"],input[type="password"]').blur(function () {
	        $(this).prev().animate({ 'opacity': '.5' }, 200);
		});
		//  用户名和密码输入正确时,√
		$('input[name="login"],input[name="pwd"]').keyup(function () {
	        var Len = $(this).val().length;
	        if (!$(this).val() == '' && Len >= 5) {
	            $(this).next().animate({
	                'opacity': '1',
	                'right': '30'
	            }, 200);
	        } else {
	            $(this).next().animate({
	                'opacity': '0',
	                'right': '20'
	            }, 200);
	        }
		});
		$('input[type="button"]').click(()=> {
			$('.login').addClass('test'); //倾斜特效
			setTimeout(function () {
				$('.login').addClass('testtwo'); //平移特效
			}, 300);
			
		})

	}
	
    render (){
        return (
            <div>
    			<Particles id="test-particles" config="test-particles.json"/>
                <div className='login'>
                    <div className='login_title'>
                        <span>请登录</span>
                    </div>

                    <div className='login_fields'>
                        <div className='login_fields__user'>
                            <div className='icon'>
                                <img alt="" src={require('./img/user_icon_copy.png')} />
                            </div>
                            <input type='text' name="login"  maxlength="16" autocomplete="off" placeholder='用户名' />
                            <div className='validation'>
                                <img alt="" src={require('./img/tick.png')}/>
                            </div>
                        </div>

                        <div className='login_fields__password'>
                            <div className='icon'>
                                <img alt="" src={require('./img/lock_icon_copy.png')} />
                            </div>
                            <input type='text' name="pwd"  maxlength="16"  placeholder='密码' />
                            <div className='validation'>
                                <img alt="" src={require('./img/tick.png')} />
                            </div>
                        </div>

                        <div className='login_fields__password'>
                            <div className='icon'>
                                <img alt="" src={require('./img/key.png')} />
                            </div>
                            <input type='text' name="code"  maxlength="4" placeholder='验证码' name="ValidateNum" />
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