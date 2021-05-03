import css from '../login.module.css'

export const EmailBlock = ({email, setEmail}) => {
  return (
    <div class={css.input_field_email}>
      <div class={css.require_mark_email}>*</div>
      <input value={email} 
              onChange={(event) => setEmail(event.target.value)}   
              class={css.inner_input_email} 
              placeholder='Email' 
              />
    </div>
  )
}