import React,{Component} from 'react';
import './css/Styles.css'
import './css/Demo.css'
import './css/Loaders.css'
import './css/Default.css'
export default class Login extends Component {
    render (){
        return (
            <div>
                <div class='login'>
                    <div class='login_title'>
                        <span>管理员登录</span>
                    </div>

                    <div class='login_fields'>
                        <div class='login_fields__user'>
                            <div class='icon'>
                                <img alt="" src='./img/user_icon_copy.png' />
                            </div>
                            <input name="login" placeholder='用户名' maxlength="16" type='text' autocomplete="off" value="kbcxy"/>
                            <div class='validation'>
                                <img alt="" src='./img/tick.png'/>
                            </div>
                        </div>

                        <div class='login_fields__password'>
                            <div class='icon'>
                                <img alt="" src='./img/lock_icon_copy.png' />
                            </div>
                            <input name="pwd" type='password' placeholder='密码' maxlength="16" type='text' autocomplete="off" />
                            <div class='validation'>
                                <img alt="" src='./img/tick.png' />
                            </div>
                        </div>

                        <div class='login_fields__password'>
                            <div class='icon'>
                                <img alt="" src='./img/key.png' />
                            </div>
                            <input name="code" placeholder='验证码' maxlength="4" type='text' name="ValidateNum" autocomplete="off" />
                            <div class='validation' style={{opacity: 1,right: '-5px',top: '-3px'}}>
                                <canvas class="J_codeimg" id="myCanvas" onclick="Code();">对不起，您的浏览器不支持canvas，请下载最新版浏览器!</canvas>
                            </div>
                        </div>

                        <div class='login_fields__submit'>
                            <input type='button' value='登录' />
                        </div>
                    </div>
                </div>
                <div class='authent'>
                <div class="loader" style={{height: '44px',width: '44px',marginLeft: '28px'}}>
                    <div class="loader-inner ball-clip-rotate-multiple">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    </div>
                    <p>认证中...</p>
                </div>
                <div class="OverWindows"></div>
            </div>
        )
    }
}