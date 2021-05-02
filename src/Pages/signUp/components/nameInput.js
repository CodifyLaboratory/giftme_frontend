import css from '../signUp.module.css'

export const NameInput = ({name, setName}) => {
  return (
    <div class={css.input_field_email}>
      <div class={css.require_mark_email}>*</div>
      <input type='text' 
             class={css.inner_input_email} 
             placeholder="Email" 
             value={name}
             onChange={e => setName(e.target.value)}
             />              
    </div>
  )
}