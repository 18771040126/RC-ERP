import React,{Component} from 'react';
import $ from 'jquery'
import './css/Styles.css'
import './css/Demo.css'
import './css/Loaders.css'
import './css/Default.css'
import Particles from 'react-particles-js'
import '../../utils/jquery-ui.min.js'
// import '../../utils/jquery.mockjax.js'
// import Particleground from  '../../utils/Particleground.js'
import '../../utils/stopExecutionOnTimeout.js'
import '../../utils/Treatment.js'
import layui from '../../utils/layui.js'

export default class Login extends Component {
    componentDidMount(){
        var canGetCookie = 0;//是否支持存储Cookie 0 不支持 1 支持
		var ajaxmockjax = 0;//是否启用虚拟Ajax的请求响 0 不启用  1 启用
		//默认账号密码
		
		var truelogin = "kbcxy";
		var truepwd = "mcwjs";
		
		var CodeVal = 0;
	    
	    function Code() {
			if(canGetCookie == 1){
				createCode("AdminCode");
				var AdminCode = getCookieValue("AdminCode");
				showCheck(AdminCode);
			}else{
				showCheck(createCode(""));
			}
	    }
	    function showCheck(a) {
			CodeVal = a;
	        var c = document.getElementById("myCanvas");
	        var ctx = c.getContext("2d");
	        ctx.clearRect(0, 0, 1000, 1000);
	        ctx.font = "80px 'Hiragino Sans GB'";
	        ctx.fillStyle = "#E8DFE8";
	        ctx.fillText(a, 0, 100);
	    }
	    $(document).keypress(function (e) {
	        // 回车键事件  
	        if (e.which == 13) {
	            $('input[type="button"]').click();
	        }
	    });
	    // 粒子背景特效
	    // $('body').particleground({
	    //     dotColor: '#E8DFE8',
	    //     lineColor: '#133b88'
	    // });
	    $('input[name="pwd"]').focus(function () {
	        $(this).attr('type', 'password');
	    });
	    $('input[type="text"]').focus(function () {
	        $(this).prev().animate({ 'opacity': '1' }, 200);
	    });
	    $('input[type="text"],input[type="password"]').blur(function () {
	        $(this).prev().animate({ 'opacity': '.5' }, 200);
	    });
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
	    var open = 0;
	    // layui.use('layer', function () {
		// 	var msgalert = '默认账号:' + truelogin + '<br/> 默认密码:' + truepwd;
    	// 	var index = layer.alert(msgalert, { icon: 6, time: 4000, offset: 't', closeBtn: 0, title: '友情提示', btn: [], anim: 2, shade: 0 });  
		// 	layer.style(index, {
		// 		color: '#777'
		// 	}); 
	    //     //非空验证
	    //     $('input[type="button"]').click(function () {
	    //         var login = $('input[name="login"]').val();
	    //         var pwd = $('input[name="pwd"]').val();
	    //         var code = $('input[name="code"]').val();
	    //         if (login == '') {
	    //             ErroAlert('请输入您的账号');
	    //         } else if (pwd == '') {
	    //             ErroAlert('请输入密码');
	    //         } else if (code == '' || code.length != 4) {
	    //             ErroAlert('输入验证码');
	    //         } else {
	    //             //认证中..
	    //             fullscreen();
	    //             $('.login').addClass('test'); //倾斜特效
	    //             setTimeout(function () {
	    //                 $('.login').addClass('testtwo'); //平移特效
	    //             }, 300);
	    //             setTimeout(function () {
	    //                 $('.authent').show().animate({ right: -320 }, {
	    //                     easing: 'easeOutQuint',
	    //                     duration: 600,
	    //                     queue: false
	    //                 });
	    //                 $('.authent').animate({ opacity: 1 }, {
	    //                     duration: 200,
	    //                     queue: false
	    //                 }).addClass('visible');
	    //             }, 500);

	    //             //登陆
	    //             var JsonData = { login: login, pwd: pwd, code: code };
		// 			//此处做为ajax内部判断
		// 			var url = "";
		// 			if(JsonData.login == truelogin && JsonData.pwd == truepwd && JsonData.code.toUpperCase() == CodeVal.toUpperCase()){
		// 				url = "Ajax/Login";
		// 			}else{
		// 				url = "Ajax/LoginFalse";
		// 			}
					
					
	                // AjaxPost(url, JsonData,
                    //     function () {
                    //         //ajax加载中
                    //     },
                    //     function (data) {
                    //         //ajax返回 
                    //         //认证完成
                    //         setTimeout(function () {
                    //             $('.authent').show().animate({ right: 90 }, {
                    //                 easing: 'easeOutQuint',
                    //                 duration: 600,
                    //                 queue: false
                    //             });
                    //             $('.authent').animate({ opacity: 0 }, {
                    //                 duration: 200,
                    //                 queue: false
                    //             }).addClass('visible');
                    //             $('.login').removeClass('testtwo'); //平移特效
                    //         }, 2000);
                    //         setTimeout(function () {
                    //             $('.authent').hide();
                    //             $('.login').removeClass('test');
                    //             if (data.Status == 'ok') {
                    //                 //登录成功
                    //                 $('.login div').fadeOut(100);
                    //                 $('.success').fadeIn(1000);
                    //                 $('.success').html(data.Text);
                    //                 //跳转操作
                                    
                    //             } else {
                    //                 AjaxErro(data);
                    //             }
                    //         }, 2400);
                    //     })
	    //         }
	    //     })
	    // })
	    // var fullscreen = function () {
	    //     elem = document.body;
	    //     if (elem.webkitRequestFullScreen) {
	    //         elem.webkitRequestFullScreen();
	    //     } else if (elem.mozRequestFullScreen) {
	    //         elem.mozRequestFullScreen();
	    //     } else if (elem.requestFullScreen) {
	    //         elem.requestFullscreen();
	    //     } else {
	    //         //浏览器不支持全屏API或已被禁用  
	    //     }
	    // }  
		// if(ajaxmockjax == 1){
		// 	$.mockjax({  
		// 		url: 'Ajax/Login',  
		// 		status: 200,  
		// 		responseTime: 50,          
		// 		responseText: {"Status":"ok","Text":"登陆成功<br /><br />欢迎回来"}  
		// 	}); 
		// 	$.mockjax({  
		// 		url: 'Ajax/LoginFalse',  
		// 		status: 200,  
		// 		responseTime: 50,          
		// 		responseText: {"Status":"Erro","Erro":"账号名或密码或验证码有误"}
		// 	});   
		// }
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