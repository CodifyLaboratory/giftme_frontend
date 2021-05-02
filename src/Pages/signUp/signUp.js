import { useEffect, useState } from "react";
import Pathes from "../../Utils/Pathes";
import requester from "../../Utils/Requester";
import css from './signUp.module.css'
import eye from '../../Images/eye.svg'
import { RegHead } from "./components/regHead";
import { CheckBox } from "./components/checkBox";
import { AddNewUser } from "./components/addUser";
import {resfreshUserList} from '../resfreshUsersList/resfreshUserList'
import { NameInput } from "./components/nameInput";

function SignUp(props) {
  const [nameValue, setNameValue] = useState()
  const [passwordValue, setPasswordValue] = useState()
  const [rePasswordValue, setRePasswordValue] = useState()
  const [userList, setUserList] = useState([])

  const resfreshUserList = async () => {
    const {list} = await requester.get(Pathes.getUsers())
    setUserList(list)
  }

  useEffect(() => {
    resfreshUserList()
  }, [])
 


  const showPassword = () => {
    var x = document.getElementById('passwordVal')
    if(x.type === 'password') {
      x.type = 'text';
    } else {
      x.type = 'password'
    }
  }

  const showRePassword = () => {
    var x = document.getElementById('rePasswordVal')
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

        <div class={css.registration_form}>
          <RegHead/>

          <div class={css.registration_body}>
            <NameInput name={nameValue} setNameValue={setNameValue}/>
            

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
                        > 
                        <img src={eye}/>
                </button> 
              </p>
              <div class={css.input_password_description}>Не менее 8 символов.</div>              
            </div>

            <div class={css.input_field_re_password}>
              <div class={css.require_mark_re_password}>*</div>

              <p>
                <input class={css.inner_input_re_password} 
                      placeholder="Подвердить пароль"
                      id='rePasswordVal'
                      type='password'
                      value={rePasswordValue}
                      onChange={e => setRePasswordValue(e.target.value)}
                      /> 
                <button type='button' 
                        class={css.unmask} 
                        onClick={showRePassword}
                        > 
                        <img src={eye}/>
                </button> 
              </p>            
            </div>

            <CheckBox/>

            <AddNewUser onAdd={resfreshUserList} 
                        name={nameValue}
                        password={passwordValue}
                        />
          </div>
        </div>

      </div>
    </div>
  </div>
  );
}


export default SignUp;