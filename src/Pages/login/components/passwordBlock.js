import css from '../login.module.css'
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
    <div class={css.input_field_password}>
      <div class={css.require_mark_password}>*</div>
      <p>
        <input required type='password' 
               id='passwordVal'
               value={password} 
               onChange={(e) => setPassword(e.target.value)} 
               class={css.inner_input_password} 
               placeholder="Пароль" />
        <button type='button' 
                class={css.unmask} 
                onClick={showPassword}> 
          <img src={eye}/>
        </button> 
      </p>
      <div class={css.input_password_description}>Не менее 8 символов.</div>
    </div>
  )
}