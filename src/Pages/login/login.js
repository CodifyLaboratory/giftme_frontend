import css from './login.module.css'
import axios from 'axios'
import { useState } from 'react';
import { useHistory } from 'react-router';
import { LogHead } from './components/logHead';
import { EmailBlock } from './components/emailBlock';
import { PasswordBlock } from './components/passwordBlock';
import { ButtonBlock } from './components/buttonBlock';


function Login() {

  const history = useHistory()
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const submit = () => {
    axios.post('http://167.99.46.0/auth/jwt/create/', {
      "password": password,
      "email": email
    })
      .then((res) => {
        history.push('/AboutMe')
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div>

      <div class={css.Scene}>
        <div class={css.page_container}>

          <div class={css.login_form}>

            <LogHead/>

            <div class={css.login_body}>

              <EmailBlock email={email} setEmail={setEmail}/>

              <PasswordBlock password={password} setPassword={setPassword}/>

              <div class={css.forgot_password}>Забыли пароль?</div>

              <ButtonBlock submit={submit}/>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
}

export default Login;