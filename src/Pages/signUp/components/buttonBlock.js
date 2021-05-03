import css from '../signUp.module.css'


export const ButtonBlock = () => {
  return (
    <div class={css.button_block}>
      <button class={css.save_button}>
        <span class={css.save_button_label}>Сохранить</span>
      </button>
      <a href="#" class={css.login_link}>Есть аккаунт?</a>
    </div>
  )
}