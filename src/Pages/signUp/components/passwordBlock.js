import css from '../signUp.module.css'
import eye from '../../../Images/eye.svg'


export const PasswordBlock = ({password, setPassword}) => {
  const showPassword = () => {
    var x = document.getElementById('passwordVal')
    if(x.type === 'password') {
      x.type = 'text';
    } else {
      x.type = 'password'
    }
  }

  return (
    <>
      <input class={css.inner_input_password} 
            placeholder="Пароль"
            id='passwordVal'
            required type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            /> 
      <button type='button' 
              class={css.unmask} 
              onClick={showPassword}
              > 
              <img src={eye}/>
      </button> 
    </>
  )
}


export const RePasswordBlock = ({rePassword, setRePassword}) => {
  
  const showRePassword = () => {
    var x = document.getElementById('rePasswordVal')
    if(x.type === 'password') {
      x.type = 'text';
    } else {
      x.type = 'password'
    }
  }

  return (
    <>
      <input class={css.inner_input_re_password} 
            placeholder="Подтвердить пароль"
            id='rePasswordVal'
            required type='password'
            value={rePassword}
            onChange={e => setRePassword(e.target.value)}
            /> 
      <button type='button' 
              class={css.unmask} 
              onClick={showRePassword}
              > 
              <img src={eye}/>
      </button> 
    </>
  )
}