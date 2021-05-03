import Pathes from "../../Utils/Pathes";
import requester from "../../Utils/Requester";
import css from './signUp.module.css'
import { RegHead } from "./components/regHead";
import { CheckBox } from "./components/checkBox";
import { NameInput } from "./components/nameInput";
import axios from 'axios'
import { useState } from 'react';
import { useHistory } from 'react-router';
import { PasswordBlock, RePasswordBlock } from "./components/passwordBlock";
import { ButtonBlock } from "./components/buttonBlock";

function SignUp() {

  const history = useHistory()
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('')
  const [email, setEmail] = useState('');
  
  const submit = (e) => {
    if(password === rePassword) {
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
    } else {
      alert('Пароли не совпадают!')
    }
  }

  return (
    <div>
      <div class={css.Scene}>
        <div class={css.page_container}>

          <div class={css.registration_form}>
            <RegHead/>
            <form onSubmit={submit} class={css.registration_body}>
              <NameInput email={email} setEmail={setEmail}/>

              <div class={css.input_field_password}>
                <div class={css.require_mark_password}>*</div>
                <PasswordBlock password={password} setPassword={setPassword}/>
                <div class={css.input_password_description}>Не менее 8 символов.</div>
              </div>

              <div class={css.input_field_re_password}>
                <div class={css.require_mark_re_password}>*</div>
                <RePasswordBlock rePassword={rePassword} setRePassword={setRePassword}/>
              </div>

              <CheckBox/>

              <ButtonBlock/>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}


export default SignUp;