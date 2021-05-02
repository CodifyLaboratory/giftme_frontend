import { useState } from "react";
import Pathes from "../../Utils/Pathes";
import requester from "../../Utils/Requester";
import MainHeader from "../header/MainHeader";
import css from './login.module.css'

function Login() {
  const [nameValue, setNameValue] = useState()
  const [passwordValue, setPasswordValue] = useState()
  const loginUser = async () => {
    const {token} = await requester.put(Pathes.login(), {
      name: nameValue,
      password: passwordValue,
    })
  }


  const showPassword = () => {
    var x = document.getElementById('passwordVal')
    if(x.type === 'password') {
      x.type = 'text';
    } else {
      x.type = 'password'
    }
  }
  return (
  <div>

    <div class={css.Scene}>
      <div class={css.page_container}>
  
        <div class={css.login_form}>

        <div class={css.title}>Авторизация</div>
          <div class={css.title_description}>авторизация через 
            <span class={css.inner_title_description}>Gmail</span>
          </div>
          <div class={css.login_body}>
            <div class={css.input_field_email}>
              <div class={css.require_mark_email}>*</div>
              <input type='text' 
                     class={css.inner_input_email} 
                     placeholder="Email" 
                     value={nameValue}
                     onChange={e => setNameValue(e.target.value)}
                     />          
            </div>
            <div class={css.input_field_password}>
              <div class={css.require_mark_password}>*</div>
              <p>
                <input class={css.inner_input_password} 
                      placeholder="Пароль"
                      id='passwordVal'
                      type='password'
                      value={passwordValue}
                      onChange={e => setPasswordValue(e.target.value)}
                      /> 
                <button type='button' 
                        class={css.unmask} 
                        onClick={showPassword}
                        /> 
              </p>
              
              <div class={css.input_password_description}>Не менее 8 символов.</div>              
            </div>
            <div class={css.forgot_password}>Забыли пароль?</div>
            <div class={css.button_block}>
              <button class={css.save_button}
                      onClick={loginUser(nameValue, passwordValue)}>
                <span class={css.save_button_label}>Войти</span>
              </button>
              <div class={css.button_block_description}>У вас еще нет аккаунта?</div>
              <a href="#" class={css.registration_link}>Зарегистрироваться</a>
            </div>
          </div>

        </div>
  
      </div>
    </div>
    
  </div>
  );
}

export default Login;