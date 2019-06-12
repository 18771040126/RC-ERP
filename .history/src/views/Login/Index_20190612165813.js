import React,{Component,Fragment} from 'react';
// import {HashRouter} from 'react-router-dom';
import $ from 'jquery'
import './css/Styles.css'
import './css/Demo.css'
import './css/Loaders.css'
import Particles from 'reactparticles.js'
import axios from 'axios';

export default class Login extends Component {
    componentDidMount(){
	    $(document).keypress( (e)=> {
	        // 回车键事件  
	        if (e.which === 13) {
	            $('input[type="button"]').click();
	        }
		});
		// $('input[name="pwd"]').focus( ()=> {
	    //     $(this).attr('type', 'password');
	    // });
	    $('input[type="text"]').focus( ()=> {
	        $(this).prev().animate({ 'opacity': '1' }, 200);
	    });
	    $('input[type="text"],input[type="password"]').blur( ()=> {
	        $(this).prev().animate({ 'opacity': '.5' }, 200);
		});
		//  用户名和密码输入正确时,√
		$('input[name="login"],input[name="pwd"]').keyup( ()=> {
	        var Len = $(this).val().length;
	        if (!$(this).val() === '' && Len >= 5) {
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
		// $('input[type="button"]').click(()=> {
		// 	$('.login').addClass('test'); //倾斜特效
		// 	setTimeout( ()=> {
		// 		$('.login').addClass('testtwo'); //平移特效
		// 	}, 300);
		// 	setTimeout( ()=> {
		// 		$('.authent').show().animate({ right: -320 }, {
					
		// 		});
		// 		$('.authent').animate({ opacity: 1 }, {
					
		// 		}).addClass('visible');
		// 	}, 500);

		// 	setTimeout( ()=> {
		// 		$('.authent').show().animate({ right: 90 }, {
					
		// 		});
		// 		$('.authent').animate({ opacity: 0 }, {
					
		// 		}).addClass('visible');
		// 		$('.login').removeClass('testtwo'); //平移特效
		// 	}, 2000);
		// 	setTimeout( ()=> {
		// 		$('.authent').hide();
		// 		$('.login').removeClass('test');
		// 		// if (data.Status == 'ok') {
		// 		// 	//登录成功
		// 			$('.login div').fadeOut(100);
		// 			$('.success').fadeIn(1000);
		// 			$('.success').html('登录成功');
					

		// 		// 	//跳转操作
				
				
		// 		// } else {
		// 		// 	AjaxErro(data);
		// 		// }
		// 	}, 2400);
		// 	// setTimeout(()=> {
		// 	// 	alert('登录成功')
		// 	// },3300)
		// })
		$('input[type="button"]').click(()=> {
				var login = $('input[name="login"]').val();
				var pwd = $('input[name="pwd"]').val();
				if(login === ''){
					alert('请输入账号');
				}else if (pwd === ''){
					alert('请输入密码');					
				}else {
					$('.login').addClass('test'); //倾斜特效
					setTimeout(function () {
						$('.login').addClass('testtwo'); //平移特效
					}, 300);
					setTimeout(function () {
						$('.authent').show().animate({
							right: -320
						}, {
							
						});
						$('.authent').animate({
							opacity: 1
						}, {
							
						}).addClass('visible');
					}, 500);
				}
			})
			// const _this = this;
			// axios.get('router.json').then(res => {
				
			// 	_this.user_name = res.data.user_name
			// 	_this.password = res.data.password
			// 	console.log(_this.user_name)
			// 	console.log(_this.password)
		
		

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