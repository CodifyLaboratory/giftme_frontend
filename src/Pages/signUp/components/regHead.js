import css from '../signUp.module.css'


export function RegHead() {
  return (
    <>
      <div class={css.title}>Регистрация</div>
      <div class={css.title_description}>регистрация через 
        <span class={css.inner_title_description}>Gmail</span>
      </div>
    </>
  )
}