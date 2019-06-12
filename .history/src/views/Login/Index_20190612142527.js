import React,{Component} from 'react';
import $ from 'jquery'
import './css/Styles.css'
import './css/Demo.css'
import './css/Loaders.css'
// import './css/Default.css'
import Particles from 'reactparticles.js'

export default class Login extends Component {
    componentDidMount(){
	    $(document).keypress( (e)=> {
	        // 回车键事件  
	        if (e.which == 13) {
	            $('input[type="button"]').click();
	        }
		});
		$('input[name="pwd"]').focus( ()=> {
	        $(this).attr('type', 'password');
	    });
	    $('input[type="text"]').focus( ()=> {
	        $(this).prev().animate({ 'opacity': '1' }, 200);
	    });
	    $('input[type="text"],input[type="password"]').blur( ()=> {
	        $(this).prev().animate({ 'opacity': '.5' }, 200);
		});
		//  用户名和密码输入正确时,√
		$('input[name="login"],input[name="pwd"]').keyup( ()=> {
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
			setTimeout( ()=> {
				$('.login').addClass('testtwo'); //平移特效
			}, 300);
			setTimeout( ()=> {
				$('.authent').show().animate({ right: -320 }, {
					
				});
				$('.authent').animate({ opacity: 1 }, {
					
				}).addClass('visible');
			}, 500);

			setTimeout( ()=> {
				$('.authent').show().animate({ right: 90 }, {
					
				});
				$('.authent').animate({ opacity: 0 }, {
					
				}).addClass('visible');
				$('.login').removeClass('testtwo'); //平移特效
			}, 2000);
			setTimeout( ()=> {
				$('.authent').hide();
				$('.login').removeClass('test');
				// if (data.Status == 'ok') {
				// 	//登录成功
					$('.login div').fadeOut(100);
					$('.success').fadeIn(1000);
					$('.success').html('登录成功');
				// 	//跳转操作
					
				// } else {
				// 	AjaxErro(data);
				// }
			}, 2400);
		})


	}
	
    render (){
        return (
            <div>
				{/* 背景蜘蛛丝 */}
    			<Particles id="test-particles" config="test-particles.json"/>
				<div className='login'>
				
				</div>
            </div>
        )
    }
}