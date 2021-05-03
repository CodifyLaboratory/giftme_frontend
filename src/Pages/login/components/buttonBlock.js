import css from '../login.module.css'


export const ButtonBlock = ({submit}) => {
  return (
    <div class={css.button_block}>
      <button onClick={submit} class={css.save_button}>
        <span class={css.save_button_label}>Войти</span>
      </button>
      <div class={css.button_block_description}>У вас еще нет аккаунта?</div>
      <a href="#" class={css.registration_link}>Зарегистрироваться</a>
    </div>
  )
}