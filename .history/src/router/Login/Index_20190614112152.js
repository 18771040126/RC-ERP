import React,{Component,Fragment} from 'react';
import $ from 'jquery'
import './css/Styles.css'
import './css/Demo.css'
import './css/Loaders.css'
import Particles from 'reactparticles.js'
// import axios from 'axios';
import { Input } from 'antd'

export default class Login extends Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}
    componentDidMount(){
	    $(document).keypress( function(e) {
	        // 回车键事件  
	        if (e.which === 13) {
	            $('input[type="button"]').click();
	        }
		});
		// $('input[name="pwd"]').focus( function() {
	    //     $(this).attr('type', 'password');
	    // });
	    $('input').focus( function() {
	        $(this).prev().animate({ 'opacity': '1' }, 200);
	    });
	    $('input').blur( function() {
	        $(this).prev().animate({ 'opacity': '.5' }, 200);
		});
		//  用户名和密码输入正确时,√
		$('input[name="login"],input[name="pwd"]').keyup( function() {
			var Len = $(this).val().length;
	        if ($(this).val() !== '' && Len > 5) {
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
		$('input[type="button"]').click(function() {
			$('.login').addClass('test'); //倾斜特效
			setTimeout( function() {
				$('.login').addClass('testtwo'); //平移特效
			}, 300);
			setTimeout( function() {
				$('.authent').show().animate({ right: -320 }, {
					
				});
				$('.authent').animate({ opacity: 1 }, {
					
				}).addClass('visible');
					
			}, 500);

			setTimeout( function() {
				$('.authent').show().animate({ right: 90 });
				$('.authent').animate({ opacity: 0 }).addClass('visible');
				$('.login').removeClass('testtwo'); //平移特效
			}, 2000);
			setTimeout( function() {
				$('.authent').hide();
				$('.login').removeClass('test');
				var user_name = $('input[name="login"]').val()
				var password = $('input[name="pwd"]').val()
				console.log(user_name)
				console.log(password)
				$.ajax({
					url:'router.json',
					type: 'get',
					dataType: 'json',
					success: (res)=> {
						if (user_name == res.user_name && password == res.password) {
							//登录成功
							$('.login div').fadeOut(100);
							$('.success').fadeIn(1000);
							$('.success').html('登录chenggong');
						// 	//跳转操作
						this.props.push( '../home/Index')
						} else {
							$('.login div').fadeOut(100);
							$('.success').fadeIn(1000);
							$('.success').html('登录失败');
						}
					}
				})
				
			}, 2400);
		})
	}
	
    render (){
        return (
            <Fragment>
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
							<input type='text' name="login"  maxLength="16" autoComplete="off" placeholder='用户名' />
							<div className='validation'>
								<img alt="" src={require('./img/tick.png')}/>
							</div>
						</div>
						<div className='login_fields__password'>
                            <div className='icon'>
                                <img alt="" src={require('./img/lock_icon_copy.png')} />
                            </div>
                            <input type='password' name="pwd"  maxLength="16"  placeholder='密码' />
                            <div className='validation'>
                                <img alt="" src={require('./img/tick.png')} />
                            </div>
                        </div>
						<div className='login_fields__password'>
                            <div className='icon'>
                                <img alt="" src={require('./img/key.png')} />
                            </div>
                            <input type='text' name="code"  maxLength="4" placeholder='验证码' name="ValidateNum" />
                            <div className='validation' style={{opacity: 1,right: '-5px',top: '-3px'}}>
                                <canvas className="J_codeimg" id="myCanvas" onClick={this.Code}></canvas>
                            </div>
                        </div>
						<div className='login_fields__submit'>
                            <input type='button' value='登录' />
                        </div>
					</div>
					<div className='success'></div>	
					<div className='disclaimer'>
						<p>欢迎登陆后台管理系统</p>
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
				
            </Fragment>
        )
    }
}