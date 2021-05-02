import css from '../signUp.module.css'


export function CheckBox () {
  return (
    <>
    <input type="checkbox" id='confirmBox' class={css.check_field}/>
    <label for="confirm" class={css.check_field_label}>
      я принимаю условия пользовательского соглашения
    </label>
    </>
  )
}