import css from '../login.module.css'

export const LogHead = () => {
  return (
    <>
      <div class={css.title}>Авторизация</div>
      <div class={css.title_description}>авторизация через
        <span class={css.inner_title_description}>Gmail</span>
      </div>
    </>
  )
}