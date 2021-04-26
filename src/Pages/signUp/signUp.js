import css from './signUp.module.css'
import axios from 'axios'
import { useState } from 'react';
import { useHistory } from 'react-router';

function SignUp() {

  const history = useHistory()
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const submit = (e) => {
    e.preventDefault()
    axios.post('http://167.99.46.0/auth/users/', {
      email: email,
      password: password
    })
      .then((res) => {
        history.push('/login')
      })
      .catch((err) => {
        alert(err.message);
      })
  }

  return (
    <div>
      <div class={css.Scene}>
        <div class={css.page_container}>

          <div class={css.registration_form}>
            <div class={css.title}>Регистрация</div>
            <div class={css.title_description}>регистрация через
            <span class={css.inner_title_description}>Gmail</span>
            </div>
            <form onSubmit={submit} class={css.registration_body}>
              <div class={css.input_field_email}>
                <div class={css.require_mark_email}>*</div>
                <input type='email' required value={email} onChange={(event) => setEmail(event.target.value)} class={css.inner_input_email} placeholder="Email" />
              </div>
              <div class={css.input_field_password}>
                <div class={css.require_mark_password}>*</div>
                <input required type='password' value={password} onChange={(event) => setPassword(event.target.value)} class={css.inner_input_password} placeholder="Пароль" />
                <div class={css.input_password_description}>Не менее 8 символов.</div>
              </div>
              <div class={css.input_field_re_password}>
                <div class={css.require_mark_re_password}>*</div>
                <input type='password' class={css.inner_input_re_password} placeholder="Подтвердить пароль" />
              </div>
              <input type="checkbox" required id='confirmBox' class={css.check_field} />
              <label for="confirm" class={css.check_field_label}>я принимаю условия пользовательского соглашения</label>

              <div class={css.button_block}>
                <button class={css.save_button}>
                  <span class={css.save_button_label}>Сохранить</span>
                </button>
                <a href="#" class={css.login_link}>Есть аккаунт?</a>
              </div>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}


export default SignUp;